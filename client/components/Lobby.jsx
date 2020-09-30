import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import GameBuilder from "./GameBuilder";

const Lobby = () => {
  
  const [user, setUser] = useState({});
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch("/people")
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      });
    
    fetch("/game")
      .then((res) => res.json())
      .then((res) => {
        setGames(res);
        console.log(res)
      });
  }, []);

  const handleSubmit = (element, index) => {
    // Do a fetch to DB for the topics of this game, save said topics in the Store
    
    fetch(`/game/${element.id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log('Game detail', res)
        // DISPATCH RESPONSE TO THE STORE
    });
    // Send the rout to gameRoom
  }

  const gameArr = games.map((el,i)=>{
    return (
      <div>
        <h3>{el.game_title}</h3>
        <button className="button is-primary" onClick={()=>{handleSubmit(el, i)}}>Select Game</button>
      </div>
    )
  })
  

  return (
    <div>
      <div>
        Welcome {user.name}!!
      </div>
      <div>Select a game to play:</div>
      <div>{gameArr}</div>
    </div>
  );
};

export default Lobby;