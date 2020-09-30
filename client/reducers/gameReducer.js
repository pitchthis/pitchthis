import * as types from '../constants/actionTypes';

const initialState = {
  user: '',
  score: 0,
  round: 0,
  topicQuantity: 1,
  createGame: {},
  topics: {},
  
  
  pros: { topic1: 'pro1'},
  cons: { topic2: 'pro1'}
};

const gameReducer = (state = initialState, action) => {
  let gameList;

  switch (action.type) {
    case types.ADD_GAME:
      return {
        ...state,
      };

    case types.ADD_TOPIC:
      const newVal = state.topicQuantity + 1;
      return {
        ...state,
        topicQuantity: newVal,
      };

    case types.CREATE_GAME:
      
      const topicObj = {
        topic1: true,
        topic2: true 
      }

      const pros = {
        topic1: ['its good', 'its great'],
        topic2: ['its good', 'its great'],
      }

      const cons = {
        topic1: ['its bad', 'its worse'],
        topic2: ['its bad', 'its worse'],
      }

      const insertObj = {
        // topic1 : {pros: {1: 'its good'} cons:{1: 'its bad'}}
      }

      for (let key in topicObj) {
        // add key to insertObj
        // key is a topic
        insertObj[key] = {};

        insertObj[key].pros = {} 
        insertObj[key].cons = {} 

        pros[key].forEach((el, i)=>{
          insertObj[key].pros[i] = el;
        })

        cons[key].forEach((el, i)=>{
          insertObj[key].cons[i] = el;
        })
      }     
    
      const final = {
        [action.payload] : {
          ...insertObj
        }
      }
      
      return {
        ...state,
        createGame: action.payload,
      }

    case types.TOPIC:
    return {
      ...state,
      topics: {
        ...state.topics,
        [action.payload]: true,
      },
    }
    

    default:
      return state;
  };
};
export default gameReducer;