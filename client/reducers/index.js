import { combineReducers } from 'redux';

// import all reducers here
import gameReducer from './gameReducer';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  games: gameReducer,
});

// make the combined reducers available for import
export default reducers;
