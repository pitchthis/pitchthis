import * as types from '../constants/actionTypes';

const initialState = {
  user: '',
  score: 0,
  round: 0,
  topicQuantity: 1,
  
  createGame: {},
  
  topics: {},
  
  pros: {},
  cons: {}
};

const gameReducer = (state = initialState, action) => {
  let gameList;

  switch (action.type) {
    case types.ADD_GAME:
      return {
        ...state,
      };

  // case types.ADD_TOPIC:
  //   const newVal = state.topicQuantity + 1;
  //   return {
  //     ...state,
  //     topicQuantity: newVal,
  //   };

  // case types.PROS:
  //   console.log(state.pros)
  //   return {
  //     ...state,
  //     topics: {
  //       ...state.topics,
  //       [action.payload]: true,
  //     },
  //   };


    case types.TOPIC:
      console.log(state.topics)
      return {
        ...state,
        topics: {
          ...state.topics,
          [action.payload]: true,
        },
      };

    case types.DELETE_TOPIC:
      const deleted = {...state.topics};
      delete deleted[action.payload];

      return {
        ...state,
        topics: {
          ...deleted
        },
      };
    
    case types.UPDATE_PROS:
      const { topic } = action.payload;
      const newObj = {...state.pros};
      // if state.pros[tpic]
      if (!newObj[topic]) {
        newObj[topic] = [];
        newObj[topic].push(action.payload.value);
      } else {
        newObj[topic].push(action.payload.value);
      }
      return {
        ...state,
        pros: {...newObj}
      };

      
    case types.UPDATE_CONS:
      const topic2 = action.payload.topic;
      console.log(topic2)
      const newObj2 = {...state.cons};
      // if state.pros[tpic]
      if (!newObj2[topic2]) {
        newObj2[topic2] = [];
        newObj2[topic2].push(action.payload.value);
      } else {
        newObj2[topic2].push(action.payload.value);
      }
      return {
        ...state,
        cons: {...newObj2}
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