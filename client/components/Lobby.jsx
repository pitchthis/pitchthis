import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import GameBuilder from "./GameBuilder";
import { useDispatch } from 'react-redux'
import * as types from '../constants/actionTypes';
import { Link } from 'react-router-dom';



const Lobby = ({ socket }) => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch()

  const [games, setGames] = useState([]);
  const [room, setRoom] = useState("");

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

  socket.on("message", (data) => {
    console.log("hi stan");
    console.log(data);
  });
  const handleSubmit = (element, index) => {
    // Do a fetch to DB for the topics of this game, save said topics in the Store

    fetch(`/game/${element.id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("Game detail", res);
        // DISPATCH RESPONSE TO THE STORE
        dispatch({ type: types.GAME_DETAILS, payload: {title: element.game_title, detail: res}, })

        // REDIRECT TO THE GAMEROOM

    });
      });
    socket.emit("some-button", user.email);
    // Send the rout to gameRoom
  };

  const handleRoomInput = (e) => {
    setRoom(e.target.value);
  };

  const handleRoomClick = () => {
    console.log(room);
    socket.emit("new-room", { room, name: user.name });
  };
  const gameArr = games.map((el, i) => {
    return (
      <div>
        <h3>{el.game_title}</h3>
        <button className="button is-primary" onClick={()=>{handleSubmit(el, i)}}>
          <Link to="/gameroom">Select Game</Link>
        </button>
      </div>
    );
  });

  return (
    <div>
      <div>Welcome {user.name}!!</div>
      <div>Select a game to play:</div>
      <div>{gameArr}</div>
      <label className="label">Topic:</label>
      <input
        className="input"
        type="text"
        placeholder="Text input"
        onChange={handleRoomInput}
      />
      <div className="control">
        <button className="button is-primary" onClick={handleRoomClick}>
          Submit
        </button>
      </div>{" "}
    </div>
  );
};

export default Lobby;
