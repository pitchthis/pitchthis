const { google } = require("googleapis");
const jwtDecode = require("jwt-decode");
require("dotenv").config();

const authController = {};

authController.oauth = (req, res, next) => {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT
  );
  const scopes = ["email", "profile"];

  const url = oauth2Client.generateAuthUrl({
    scope: scopes,
  });
  res.locals.url = url;
  return next();
};

authController.onSuccess = async (req, res, next) => {
  if (req.query.code) {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT
    );
    const { tokens } = await oauth2Client.getToken(req.query.code);
    oauth2Client.setCredentials(tokens);

    res.locals.token = tokens.id_token;
    const decoded = jwtDecode(res.locals.token);
    const person = {
      name: decoded.name,
      email: decoded.email,
      avatar: decoded.picture,
    };
    res.locals.person = person;
    return next();
  } else {
    res.send("Please login");
  }
};
module.exports = authController;
