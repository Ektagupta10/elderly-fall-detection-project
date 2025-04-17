import os
import cv2
import pandas as pd
from flask import Flask, request, jsonify
from ultralytics import YOLO
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

model = YOLO("yolov10s.pt")

# Load class list
with open("coco.txt", "r") as f:
    class_list = f.read().splitlines()

@app.route("/detect-fall", methods=["POST"])
def detect_fall():
    print("📩 Received POST /detect-fall request")

    file = request.files.get("video")
    if not file:
        return jsonify({"error": "No video uploaded"}), 400

    filepath = os.path.join("uploads", file.filename)
    os.makedirs("uploads", exist_ok=True)
    file.save(filepath)

    cap = cv2.VideoCapture(filepath)
    fall_frames = 0
    movement_threshold = 50  # Reduced for better sensitivity
    aspect_ratio_threshold = 0.75
    frame_buffer = []
    max_buffer_size = 5

    frame_count = 0
    while True:
        ret, frame = cap.read()
        if not ret:
            break

        frame_count += 1
        frame = cv2.resize(frame, (1020, 600))
        results = model(frame)
        boxes = results[0].boxes.data

        if boxes is None or len(boxes) == 0:
            continue

        px = pd.DataFrame(boxes).astype("float")
        person_detected = False

        for index, row in px.iterrows():
            x1, y1, x2, y2 = map(int, row[:4])
            label_id = int(row[5])

            if label_id < len(class_list):
                label = class_list[label_id]
            else:
                continue

            if label == 'person':
                person_detected = True
                height = y2 - y1
                width = x2 - x1
                aspect_ratio = height / width if width != 0 else 0
                center_y = (y1 + y2) // 2

                frame_buffer.append(center_y)
                if len(frame_buffer) > max_buffer_size:
                    frame_buffer.pop(0)

                if len(frame_buffer) == max_buffer_size:
                    y_movement = max(frame_buffer) - min(frame_buffer)

                    print(f"[Frame {frame_count}] Person Detected | Aspect Ratio: {aspect_ratio:.2f}, Y-Move: {y_movement}, Fall Frames: {fall_frames}")

                    if y_movement > movement_threshold and aspect_ratio < aspect_ratio_threshold:
                        fall_frames += 1

        if not person_detected:
            frame_buffer.clear()

    cap.release()
    os.remove(filepath)

    print(f"Total fall frames detected: {fall_frames}")
    result = "fall" if fall_frames >= 2 else "no-fall"
    return jsonify({"result": result})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
