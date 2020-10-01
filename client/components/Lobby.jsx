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
  const [players, setPlayers] = useState([]);

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
      });
  }, []);

  const playerUpdate = (users) => {
    setPlayers([...users]);
  };
  // after joining... user info from backend
  socket.on("current-players", (people) => {
    playerUpdate(people);
  });

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
  const gamers = players.map((person, i) => {
    return <p key={i}>{person.name}</p>;
  });
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

  if (!roomEntered) {
    return <JoinRoom socket={socket} setter={setRoomEntered} user={user} />;
  } else {
    return (
      <div>
        <div class="columns">
          <div class="column is-one-third" id="user_id">
            Hello {user.name}!!
            {gamers}
          </div>
          <div class="column">
            <div class="game_title">Select a game to play:</div>
            <div class="game_title">{gameArr}</div>
          </div>
          <div class="column is-one-third" />
        </div>
      </div>
    );
  }
};

export default Lobby;
