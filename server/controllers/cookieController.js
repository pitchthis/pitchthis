const cookieController = {};

cookieController.setSSIDcookie = (req, res, next) => {
  res.cookie('user', res.locals.token, { httpOnly: true });
  const { name } = res.locals.person;
  res.cookie('name', name, { httpOnly: false });
  console.log(name);
  // decodeURIComponent('shmaryeh%40gmail.com')
  return next();
};

cookieController.hasCookie = (req, res, next) => {
  if (req.cookies.user) {
    return next();
  }
  return res.redirect('/');
};

module.exports = cookieController;
