import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import GameBuilder from "./GameBuilder";
<<<<<<< HEAD
import { useDispatch } from 'react-redux'
import * as types from '../constants/actionTypes';
import { Link } from 'react-router-dom';


=======
import Link from "react-router-dom";
>>>>>>> master

const Lobby = ({ socket }) => {
  const [user, setUser] = useState({});
<<<<<<< HEAD
  const [games, setGames] = useState([])
  const dispatch = useDispatch()

=======
  const [games, setGames] = useState([]);
  const [room, setRoom] = useState("");
>>>>>>> master

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
<<<<<<< HEAD
          // console.log(res)
=======
        console.log(res);
>>>>>>> master
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
<<<<<<< HEAD
        dispatch({ type: types.GAME_DETAILS, payload: {title: element.game_title, detail: res}, })

        // REDIRECT TO THE GAMEROOM

    });
=======
      });
    socket.emit("some-button", user.email);
>>>>>>> master
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
<<<<<<< HEAD
        <button className="button is-primary" onClick={()=>{handleSubmit(el, i)}}>
          <Link to="/gameroom">Select Game</Link>
=======
        <button
          className="button is-primary"
          onClick={() => {
            handleSubmit(el, i);
          }}
        >
          Select Game
>>>>>>> master
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
