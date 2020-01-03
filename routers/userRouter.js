import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("Users"));
userRouter.get(routes.userDetail, (req, res) => res.send("UserDetail"));
userRouter.get(routes.editProfile, (req, res) => res.send("EditProfile"));
userRouter.get(routes.changePassword, (req, res) => res.send("ChangePassword"));

export default userRouter;
