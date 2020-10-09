import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import GameBuilder from './GameBuilder';

const GameContainer = ({ socket }) => {
  const players = ['bonjay', 'aryeh', 'stan', 'liz', 'patrick'];
  const [currentPlayer, setCurrentPlayer] = useState(players[0]);
  const store = {
    game1: {
      React: {
        Pro: {
          1: 'this is comment two',
          2: 'pro two',
        },
        Cons: {
          1: 'this is comment one',
          2: 'not original... everyone uses it',
          3: 'can be bloated comparitively',
        },
      },
    },
  };

  // fetch land to people first... then to games which loads all games
  // dispatch to store to store all games
  // dispatch person object to store
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch('/people')
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      });
    socket.emit('join', players);
  }, []);

  // useEffect(() => {
  //   socket.on("newPlayer", (player) => {
  //     console.log("wow", currentPlayer);
  //   });
  // }, currentPlayer);
  return (
    <div>
      Build your game, {user.name}!!
      <div>
        <GameBuilder />
      </div>
    </div>
  );
};

export default GameContainer;
