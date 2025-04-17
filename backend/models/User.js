const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v); // ✅ Regex for exactly 10 digits
      },
      message: (props) => `${props.value} is not a valid 10-digit phone number`,
    },
  },
  email: { type: String, required: true, unique: true },
 
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", UserSchema);
