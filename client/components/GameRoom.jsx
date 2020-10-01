import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import GameBuilder from "./GameBuilder";
import { useDispatch, connect } from 'react-redux'
import * as types from '../constants/actionTypes';


const mapStateToProps = state => {
  return { 
    gameDetails: state.games.gameDetails, 
    currentGame: state.games.currentGame,
  }
}

const GameRoom = (props) => {
  
  console.log('GAME ROOM', props)
  const dispatch = useDispatch()
  const [speaker, setSpeaker] = useState(false);
  const [topic, setTopic] = useState(0);
  const [topicKeys, setTopicKeys] = useState([])

  
  console.log('PROPS', props)


  // NEED A TOPIC AND ITS PROS/CONS
  // RANDOMIZE THE TOPIC THAT SHOWS, SET 1MIN SET INTERVAL, invokes a setState method that grabs new topic to render

  useEffect(() => {
    console.log('PROPS-useEffect', props)
    if (props.gameDetails) {
      console.log('props.gameDetail', props.gameDetails)
      setTopicKeys(Object.keys(props.gameDetails))
      
    }
    

  }, [props.gameDetails]);

 
  

  return (
    <div>
      <div>Game Room</div>
      {speaker && 
        <>
        <div>YOU ARE THE SPEAKER</div>
        <div>Current topic is : {props.gameDetails[topicKeys[topic]]}</div>
        </>
      }
      
    </div>
  );
};

export default connect(mapStateToProps)(GameRoom);
