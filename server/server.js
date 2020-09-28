const express = require("express");
const path = require("path");

const PORT = 3333;

const app = express();

app.use("/build", express.static(path.join(__dirname, "../build")));
// app.use(express.static("client"));

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
