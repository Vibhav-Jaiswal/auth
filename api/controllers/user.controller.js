import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const test = (req, resp) => {
  resp.json({ message: "Api is working" });
};

export const updateUser = async (req, resp, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can update only your account!"));
  }

  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const upadtedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );

    const { password: pass, ...rest } = upadtedUser._doc;
    resp.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, resp, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can delete only your account"));
  }
  try {
    await User.findByIdAndDelete(req.params.id);
    resp.status(200).json("User has been deleted...");
  } catch (error) {
    next(error);
  }
};
