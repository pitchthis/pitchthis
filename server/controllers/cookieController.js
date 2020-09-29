const cookieController = {};

cookieController.setSSIDcookie = (req, res, next) => {
  res.cookie("user", res.locals.token, { httpOnly: true });
  return next();
};

cookieController.hasCookie = (req, res, next) => {
  if (req.cookies.user) {
    return next();
  }
  return res.redirect("/");
};

module.exports = cookieController;
