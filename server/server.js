const express = require("express");
const path = require("path");
const PORT = 3333;
const app = express();
const cookieParser = require("cookie-parser");
const authController = require("./controllers/authController");
const cookieController = require("./controllers/cookieController");
const jwtDecode = require("jwt-decode");

require("dotenv").config();
app.use(express.json());
app.use(cookieParser());

app.use("/build", express.static(path.join(__dirname, "../build")));
// app.use(express.static("client"));

app.get("/login", authController.oauth, (req, res) => {
  return res.redirect(res.locals.url);
});

app.get("/people", (req, res) => {
  const { email, name, picture } = jwtDecode(req.cookies.user);
  res.send({ email, name, picture });
});

app.get(
  "/success",
  authController.onSuccess,
  // add middleware to see if user is in database, if not, add them
  cookieController.setSSIDcookie,
  (req, res) => {
    // redirect to a page that will then check if there is an SSID cookie called 'user' ()
    res.status(200).redirect("/game");
  }
);

app.get("/game", cookieController.hasCookie, (req, res) => {
  // add middleware to check for SSID cookie
  res.status(200).sendFile(path.resolve(__dirname, "../client/index.html"));
});

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../client/index.html"));
});

// 404 handler
app.use((req, res) => {
  res.sendStatus(404);
});

// global error handler
app.use((err, req, res, next) => {
  console.log(err);
  const errorStatus = err.status || 500;
  return res.status(errorStatus).send("INTERNAL SERVER ERROR");
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
