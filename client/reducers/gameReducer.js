import * as types from '../constants/actionTypes';

const initialState = {
  user: '',
  score: 0,
  round: 0
};

const gameReducer = (state = initialState, action) => {
  let gameList;

  switch (action.type) {
    case types.ADD_GAME:
      return {
        ...state,
      };

    default:
      return state;
  };
};
export default gameReducer;