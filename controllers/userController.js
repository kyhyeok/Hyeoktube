import routes from "../routes";
// export function join(req, res) {
//   return res.send("join");
// }
export const getJoin = (req, res) => {
  res.render("Join", { pageTitle: "Join" });
};
export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2 || !name || !email) {
    res.status(400);
    res.render("Join", { pageTitle: "Join" });
  } else if (!name) {
    res.status(400);
    res.render("Join", { pageTitle: "Join" });
  } else {
    // To Do: register User
    // To Do: log user in
    res.redirect(routes.home);
  }
};

export const login = (req, res) => res.render("Login", { pageTitle: "Login" });
export const logout = (req, res) =>
  res.render("Logout", { pageTitle: "Logout" });
export const users = (req, res) => res.render("Users", { pageTitle: "Users" });
export const userDetail = (req, res) =>
  res.render("useRDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
