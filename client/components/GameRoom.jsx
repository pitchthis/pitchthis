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

  // useEffect(() => {
  //   // topicKeys will have 'React' etc
  //   // generated a random value and set
  //   // if (topicKeys[topicIndex] !== undefined) {
  //   if (topicIndex < topicKeys.length + 1) {
  //     setTimeout(() => {
  //       setTopicIndex(topicIndex + 1);
  //     }, 5000);
  //   }

  //   // }
  // }, [topicIndex]);

  // const miniFunc = () => {
  //   setTimeout(()=>{
  //     setGameOver(true)}, 10000
  //   )
  // }

  const startTime = () => {
    setGameStart(true);
    // if (topicIndex === false) {
    //   setTopicIndex(-1);
    // }
    // setTimeout(()=>{
    //   setTopicIndex(topicIndex + 1), 5000
    // })
    const random = Math.floor(Math.random()*(topicKeys.length-1))
    setTopicIndex(random)

   
    setTimeout(()=>{
      setGameStart(false)}, 5000
    )  
    // console.log('topicIndex', topicIndex)

    // let newIndex = topicIndex;

    // if (topicIndex === 0) {
    //   setTimeout(()=>{
    //     setTopicIndex(newIndex + 1)
    //     startTime()
    //   }, 3000)
    // } else {
    //   setTopicIndex(5)
    //   setTimeout(startTime, 3000)
    // }
  };

  // useEffect(()=>{
  //   console.log(topicIndex)
  //   setTimeout(()=>{
  //     setTopicIndex(topicIndex + 1), 3000
  //   })
  // }, [topicIndex])

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
      {(speaker && gameOver) && (gameStart && <div>End Round!!!</div>)}



      {!speaker && (
        <div>YOU ARE THE AUDIENCE</div>
      )}
  
    </div>
  );
};

export default connect(mapStateToProps)(GameRoom);
