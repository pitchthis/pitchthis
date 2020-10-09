import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import GameBuilder from './GameBuilder';
import { useDispatch, connect } from 'react-redux';
import * as types from '../constants/actionTypes';
import { Link, useHistory } from 'react-router-dom';
import JoinRoom from './JoinRoom';

const mapStateToProps = (state) => {
  console.log(state.games);
  return { players: state.games.players };
};

const Lobby = (props) => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  const [roomEntered, setRoomEntered] = useState(false);
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('/people')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUser(res);
      });

    fetch('/game')
      .then((res) => res.json())
      .then((res) => {
        setGames(res);
      });
  }, []);

  const playerUpdate = (player) => {
    dispatch({
      type: types.ADD_PLAYER,
      payload: player,
    });
  };
  // after joining... user info from backend
  // useEffect(()=>{

  // }, [])

  props.socket.on('okay-to-start', (data) => {
    // console.log('starting-game!', data);
    dispatch({ type: types.GAME_DETAILS, payload: { title: data.title, detail: data.data } });
    history.push('/gameroom');
  });

  props.socket.on('current-players', (player) => {
    playerUpdate(player);
  });

  const handleSubmit = (element, index) => {
    // Do a fetch to DB for the topics of this game, save said topics in the Store
    console.log(index);
    fetch(`/game/${element.id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log('Game detail', res);
        // DISPATCH RESPONSE TO THE STORE
        dispatch({ type: types.GAME_DETAILS, payload: { title: element.game_title, detail: res } });
        // REDIRECT TO THE GAMEROOM
      });
    props.socket.emit('some-button', user.email);
    // Send the rout to gameRoom

    // DISPATCH TO STORE SAYING - GO TO GAME ROOM
    props.socket.emit('start-pitching', { id: element.id, title: element.game_title });

    // dispatch({
    //   type: types.GAME_ON,
    // });
  };
  const gamers = props.players.map((person, i) => {
    return <p key={i}>{person.name}</p>;
  });
  const gameArr = games.map((el, i) => {
    return (
      <div>
        <button
          className="button is-outlined is-primary is-light is-medium is-fullwidth"
          onClick={() => {
            handleSubmit(el, i);
          }}
        >
          {el.game_title}
          {/* <Link to="/gameroom">{el.game_title}</Link> */}
        </button>
      </div>
    );
  });

  if (!roomEntered) {
    return <JoinRoom socket={props.socket} setter={setRoomEntered} user={user} />;
  } else {
    return (
      <div>
        <div className="columns">
          <div className="column is-one-third" id="user_id">
            Hello {user.name}!!
            {gamers}
          </div>
          <div className="column">
            <div className="game_title">Select a game to play:</div>
            <div className="game_title">{gameArr}</div>
          </div>
          <div className="column is-one-third" />
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps)(Lobby);
