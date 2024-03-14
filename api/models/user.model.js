import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://th.bing.com/th/id/OIP.-gymMKaj3o4z4DoAnkBqzQHaHa?w=209&h=209&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
  },
  { timestamps: true }
);

export default mongoose.model("user", userSchema);
