import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import GameBuilder from "./GameBuilder";

const GameContainer = () => {
  
  const store = {
    game1: {
      React: {
        Pro: {
          1: 'this is comment two',
          2: 'pro two'
        },
        Cons: {
          1: 'this is comment one',
          2: 'not original... everyone uses it',
          3: 'can be bloated comparitively'
        }
      }
    }
  }
  
  
  // fetch land to people first... then to games which loads all games
  // dispatch to store to store all games
  // dispatch person object to store
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch("/people")
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      });
  }, []);
  return (
    <div>
      Game {user.name}!!
      <div>
        <GameBuilder />
      </div>
    </div>
  );
};

export default GameContainer;
