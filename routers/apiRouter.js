import express from "express";
import routes from "../routes";
import {
  postRegisterView,
  postAddComment,
  postEditComment
} from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);

apiRouter.post(routes.addComment, postAddComment);

apiRouter.post(routes.editComment, postEditComment);

export default apiRouter;
