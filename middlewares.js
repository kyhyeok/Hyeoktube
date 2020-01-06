import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Hyeoktube";
  res.locals.routes = routes;
  next();
};
