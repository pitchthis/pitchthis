const express = require("express");
const path = require("path");
const PORT = 3333;
const app = express();
const cookieParser = require("cookie-parser");
const authController = require("./controllers/authController");
const cookieController = require("./controllers/cookieController");
const jwtDecode = require("jwt-decode");
const { createServer } = require("http");
const socketio = require("socket.io");
const server = createServer(app);
// const socker = require("./socker");
const io = socketio(server);

const gamesController = require("./controllers/gamesController");
require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

/*
 * Server Static files
 */
app.use("/build", express.static(path.join(__dirname, "../build")));

/*
 * Routes/Endpoints
 */

app.get("/login", authController.oauth, (req, res) => {
  return res.redirect(res.locals.url);
});

app.get("/loggedIn", cookieController.hasCookie, (req, res) => {
  // add middleware to check for SSID cookie
  res.status(200).sendFile(path.resolve(__dirname, "../client/index.html"));
});

app.get("/people", (req, res) => {
  const { email, name, picture } = jwtDecode(req.cookies.user);
  res.send({ email, name, picture });
});

app.get("/game/:id", gamesController.getTopics, (req, res) => {
  res.status(200).json(res.locals.topics);
});

app.get("/game", gamesController.getGames, (req, res) => {
  res.status(200).json(res.locals.games);
});

app.post("/game", gamesController.createGame, gamesController.createTopics, (req, res) => {
  res.status(200).send("Game created...");
});

app.get("/game/:id", gamesController.getTopics, (req, res) => {
  res.status(200).json(res.locals.topics);
});

/****************************************
--------- OAuth Success Handler ---------
 ****************************************/
app.get(
  "/success",
  authController.onSuccess,
  // add middleware to see if user is in database, if not, add them
  cookieController.setSSIDcookie,
  (req, res) => {
    // redirect to a page that will then check if there is an SSID cookie called 'user' ()
    res.status(200).redirect("/loggedIn");
  }
);

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

/**********************************************************************
-----------------------   SOCKET.IO LOGIC   ---------------------------
***********************************************************************/

const rooms = {};
const playersArray = [];
io.on("connection", (socket) => {
  console.log(socket.id);
  socket.emit("message", socket.id);
  socket.on("new-room", ({ room, name }) => {
    console.log(room, name);
    socket.join(room);

    if (!rooms[room]) {
      rooms[room] = {
        players: [],
        currentSpeaker: 0,
      };
    }
    const currentRoom = rooms[room];

    const person = {
      name,
      score: 0,
      id: socket.id,
    };

    currentRoom.players.push(person);
    console.log(currentRoom.players);
    socket.emit("enter-game");

    socket.emit("user-info", { name: person.name, index: currentRoom.players.length - 1, room });
    io.to(room).emit("current-players", currentRoom.players);
  });
  socket.on("some-button", (data) => {
    console.log(data);
    console.log("some button console", socket.id);
  });
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
server.listen(+PORT + 1, () => {
  console.log(`Api and socker whitelisted for BONJAY`);
});
