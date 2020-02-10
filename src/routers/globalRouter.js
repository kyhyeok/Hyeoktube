import express from "express";
import passport from "passport";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  logout,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  githubLogin,
  postGithubLogIn,
  getMe,
  facebookLogin,
  postFacebookLogin,
  kakaoLogin,
  postKakaoLogin,
  NaverLogin,
  postNaverLogin
} from "../controllers/userController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.gitHub, githubLogin);

globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", {
    failureRedirect: "/login",
    successFlash: "Welcome with github",
    failureFlash: "Can't log in through github at this time"
  }),
  postGithubLogIn
);

globalRouter.get(routes.facebook, facebookLogin);
globalRouter.get(
  routes.facebookCallback,
  passport.authenticate("facebook", {
    failureRedirect: "/login",
    successFlash: "Welcome with facebook",
    failureFlash: "Can't log in through facebook at this time"
  }),
  postFacebookLogin
 );

globalRouter.get(routes.kakao, kakaoLogin);
globalRouter.get(
  routes.kakaoCallback,
  passport.authenticate("kakao", {
    failureRedirect: "/login",
    successFlash: "Welcome with kakao",
    failureFlash: "Can't log in through kakao at this time"
  }),
  postKakaoLogin
 );

globalRouter.get(routes.naver, NaverLogin);
globalRouter.get(
  routes.naverCallback,
  passport.authenticate("naver", {
    failureRedirect: "/login",
    successFlash: "Welcome with naver",
    failureFlash: "Can't log in through naver at this time"
  }),
  postNaverLogin
 );

 globalRouter.get(routes.me, getMe);

export default globalRouter;
