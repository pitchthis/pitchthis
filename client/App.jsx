import React from "react";
import { connect } from "react-redux";
import Login from "./components/Login";
import GameContainer from "./components/GameContainer";
import Lobby from "./components/Lobby";
import { Switch, Route, Link } from "react-router-dom";
import "./assets/styles.scss";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3334");
const App = () => {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/loggedIn">blah</Link>
          </li>
          <li>
            <Link to="/gamebuilder">gamebuild</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/loggedIn" component={() => <Lobby socket={socket} />} />
        <Route
          path="/gamebuilder"
          socket={socket}
          component={() => <GameContainer socket={socket} />}
        />
        <Route path="/" component={() => <Login socket={socket} />} exact />
      </Switch>
    </main>
  );
};

export default App;
