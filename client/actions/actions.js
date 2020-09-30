// import actionType constants
import * as types from '../constants/actionTypes';

export const addGame = (newGame) => ({
  type: types.ADD_GAME,
  payload: newGame,
});

// add more action creators
export const addTopic = (newTopic) => ({
  type: types.ADD_TOPIC,
  payload: newTopic,
});

export const deleteTopic = (deleted) => ({
  type: types.DELETE_TOPIC,
  payload: deleted,
});