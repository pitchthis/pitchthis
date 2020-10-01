import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import GameBuilder from "./GameBuilder";
import { useDispatch, connect } from "react-redux";
import * as types from "../constants/actionTypes";

const mapStateToProps = (state) => {
  return {
    gameDetails: state.games.gameDetails,
    currentGame: state.games.currentGame,
  };
};

const GameRoom = (props) => {
  console.log("GAME ROOM", props);
  const dispatch = useDispatch();
  const [speaker, setSpeaker] = useState(true);
  const [topicIndex, setTopicIndex] = useState(0);
  const [topicKeys, setTopicKeys] = useState([]);
  const [gameStart, setGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(false)

  console.log("PROPS", props);

  // NEED A TOPIC AND ITS PROS/CONS
  // RANDOMIZE THE TOPIC THAT SHOWS, SET 1MIN SET INTERVAL, invokes a setState method that grabs new topic to render

  useEffect(() => {
    console.log("PROPS-useEffect", props);
    if (props.gameDetails) {
      console.log("props.gameDetail", props.gameDetails);
      setTopicKeys(Object.keys(props.gameDetails));
      // setTopicIndex(0);
    }
  }, [props.gameDetails]);


  const startTime = () => {
    setGameStart(true);
  
    const random = Math.floor(Math.random()*(topicKeys.length-1))
    setTopicIndex(random)

    setTimeout(()=>{
      setGameStart(false)}, 5000
    )  
  };



  return (
    <div>
      <div>Game Room</div>
      {(speaker && !gameStart) && (
        <>
          <div>YOU ARE THE SPEAKER</div>
          <button onClick={startTime}>START THE TIMER!!!!</button>
        </>
      )}
      {(speaker && !gameOver) && (gameStart && (
        <>
          <div>Current topic is:</div>
          <div>{topicKeys[topicIndex]}</div>
        </>
      ))}
      {/* {(speaker && gameOver) && (gameStart && <div>End Round!!!</div>)} */}



      {!speaker && (
        <div>YOU ARE THE AUDIENCE</div>
      )}
  
    </div>
  );
};

export default connect(mapStateToProps)(GameRoom);
