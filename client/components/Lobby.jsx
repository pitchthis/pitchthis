import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import GameBuilder from "./GameBuilder";
import { useDispatch } from "react-redux";
import * as types from "../constants/actionTypes";
import { Link } from "react-router-dom";
import JoinRoom from "./JoinRoom";

const Lobby = ({ socket }) => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const [roomEntered, setRoomEntered] = useState(false);
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/people")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUser(res);
      });

    fetch("/game")
      .then((res) => res.json())
      .then((res) => {
        setGames(res);
        // console.log(res)
      });
  }, []);

  // after joining... enter game

  const handleSubmit = (element, index) => {
    // Do a fetch to DB for the topics of this game, save said topics in the Store

    fetch(`/game/${element.id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("Game detail", res);
        // DISPATCH RESPONSE TO THE STORE
        dispatch({ type: types.GAME_DETAILS, payload: { title: element.game_title, detail: res } });
        // REDIRECT TO THE GAMEROOM
      });
    socket.emit("some-button", user.email);
    // Send the rout to gameRoom
  };

  const gameArr = games.map((el, i) => {
    return (
      <div>
        <h3>{el.game_title}</h3>
        <button
          className="button is-outlined is-primary is-light is-medium is-fullwidth"
          onClick={() => {
            handleSubmit(el, i);
          }}
        >
          <Link to="/gameroom">{el.game_title}</Link>
        </button>
      </div>
    );
  });

  // if (!roomEntered) {
  //   return <JoinRoom socket={socket} />;
  // } else {
    return (
      <div>
        <div class="columns">
          <div class="column is-one-third">Welcome {user.name}!!</div>
          <div class="column">
            <div>Select a game to play:</div>
            <div>{gameArr}</div>
          </div>
        </div>
      </div>
    );
  // }
};

export default Lobby;
