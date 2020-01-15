import express from 'express';
import routes from '../routes';
import {
  userDetail,
  editProfile,
  changePassword
} from '../controllers/userController';
import { onlyPublic } from '../middlewares';

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPublic, editProfile);
userRouter.get(routes.changePassword, onlyPublic, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
