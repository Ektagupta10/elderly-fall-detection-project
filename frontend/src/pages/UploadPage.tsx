// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Upload, AlertCircle, CheckCircle } from 'lucide-react';
// import axios from 'axios';

// export const UploadPage: React.FC = () => {
//   const [isDragging, setIsDragging] = useState(false);
//   const [file, setFile] = useState<File | null>(null);
//   const [analyzing, setAnalyzing] = useState(false);
//   const [result, setResult] = useState<'fall' | 'no-fall' | null>(null);

//   const handleDragOver = (e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragLeave = () => {
//     setIsDragging(false);
//   };

//   const handleDrop = (e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragging(false);

//     const droppedFile = e.dataTransfer.files[0];
//     if (droppedFile?.type.startsWith('video/')) {
//       setFile(droppedFile);
//       analyzeVideo(droppedFile);
//     }
//   };

//   const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = e.target.files?.[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       analyzeVideo(selectedFile);
//     }
//   };

//   const analyzeVideo = async (videoFile: File) => {
//     setAnalyzing(true);
//     setResult(null);

//     const formData = new FormData();
//     formData.append('video', videoFile);

//     try {
//       const response = await axios.post('http://localhost:5000/detect-fall', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       const prediction = response.data.result;
//       setResult(prediction); // set the result after receiving response
//     } catch (error) {
//       console.error('Error uploading video:', error);
//       alert('Error analyzing the video. Please try again.');
//     } finally {
//       setAnalyzing(false);
//     }
//   };

//   return (
//     <div className="pt-24 pb-16">
//       <div className="max-w-4xl mx-auto px-4">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-4xl font-bold text-center mb-8"
//         >
//           Upload Video for Analysis
//         </motion.h1>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="mt-8"
//         >
//           <div
//             onDragOver={handleDragOver}
//             onDragLeave={handleDragLeave}
//             onDrop={handleDrop}
//             className={`border-2 border-dashed rounded-lg p-8 text-center ${
//               isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
//             }`}
//           >
//             <Upload className="mx-auto h-12 w-12 text-gray-400" />
//             <p className="mt-4 text-lg text-gray-700">
//               Drag and drop your video here, or{' '}
//               <label className="text-blue-600 hover:text-blue-800 cursor-pointer">
//                 browse
//                 <input
//                   type="file"
//                   className="hidden"
//                   accept="video/*"
//                   onChange={handleFileSelect}
//                 />
//               </label>
//             </p>
//             <p className="mt-2 text-sm text-gray-500">Supported formats: MP4, AVI, MOV</p>
//           </div>

//           {file && (
//             <div className="mt-8">
//               <h3 className="text-lg font-semibold mb-4">Selected File:</h3>
//               <p className="text-gray-600">{file.name}</p>
//             </div>
//           )}

//           {analyzing && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="mt-8 text-center"
//             >
//               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//               <p className="mt-4 text-lg">Analyzing video...</p>
//             </motion.div>
//           )}

//           {result && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               className={`mt-8 p-6 rounded-lg ${
//                 result === 'fall' ? 'bg-red-50' : 'bg-green-50'
//               }`}
//             >
//               {result === 'fall' ? (
//                 <div className="flex items-center text-red-700">
//                   <AlertCircle className="h-6 w-6 mr-2" />
//                   <span className="text-lg font-semibold">Fall Detected</span>
//                 </div>
//               ) : (
//                 <div className="flex items-center text-green-700">
//                   <CheckCircle className="h-6 w-6 mr-2" />
//                   <span className="text-lg font-semibold">No Fall Detected</span>
//                 </div>
//               )}
//             </motion.div>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, AlertCircle, CheckCircle } from 'lucide-react';
import axios from 'axios';

export const UploadPage: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<'fall' | 'no-fall' | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile?.type.startsWith('video/')) {
      setFile(droppedFile);
      analyzeVideo(droppedFile);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      analyzeVideo(selectedFile);
    }
  };

  const analyzeVideo = async (videoFile: File) => {
    setAnalyzing(true);
    setResult(null);

    const formData = new FormData();
    formData.append('video', videoFile);

    try {
      const response = await axios.post('http://localhost:5000/detect-fall', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const prediction = response.data.result;
      setResult(prediction);

      if (prediction === 'fall') {
        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user") || '{}');

        await axios.post("http://localhost:5002/api/alerts/fall-alert", {
          userId: user._id,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        alert("⚠️ Fall detected! Alert SMS has been sent.");
      }
    } catch (error) {
      console.error('Error analyzing video or sending alert:', error);
      alert('Error during fall detection or SMS alert.');
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-8"
        >
          Upload Video for Analysis
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-8 text-center ${
              isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
            }`}
          >
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-4 text-lg text-gray-700">
              Drag and drop your video here, or{' '}
              <label className="text-blue-600 hover:text-blue-800 cursor-pointer">
                browse
                <input
                  type="file"
                  className="hidden"
                  accept="video/*"
                  onChange={handleFileSelect}
                />
              </label>
            </p>
            <p className="mt-2 text-sm text-gray-500">Supported formats: MP4, AVI, MOV</p>
          </div>

          {file && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Selected File:</h3>
              <p className="text-gray-600">{file.name}</p>
            </div>
          )}

          {analyzing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 text-center"
            >
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-lg">Analyzing video...</p>
            </motion.div>
          )}

          {result && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`mt-8 p-6 rounded-lg ${
                result === 'fall' ? 'bg-red-50' : 'bg-green-50'
              }`}
            >
              {result === 'fall' ? (
                <div className="flex items-center text-red-700">
                  <AlertCircle className="h-6 w-6 mr-2" />
                  <span className="text-lg font-semibold">Fall Detected</span>
                </div>
              ) : (
                <div className="flex items-center text-green-700">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  <span className="text-lg font-semibold">No Fall Detected</span>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
