// export function join(req, res) {
//   return res.send("join");
// }
export const join = (req, res) => res.render("Join");
export const login = (req, res) => res.render("Login");
export const logout = (req, res) => res.render("Logout");
export const users = (req, res) => res.render("Users");
export const userDetail = (req, res) => res.render("useRDetail");
export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.render("changePassword");
