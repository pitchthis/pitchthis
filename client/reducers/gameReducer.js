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
      const conTopic = action.payload.topic;
      console.log(conTopic)
      const conObj = {...state.cons};
      // if state.pros[tpic]
      if (!conObj[conTopic]) {
        conObj[conTopic] = [];
        conObj[conTopic].push(action.payload.value);
      } else {
        conObj[conTopic].push(action.payload.value);
      }
      return {
        ...state,
        cons: {...conObj}
      };

    case types.DELETE_PROS:
      const deleteProTopic = action.payload.topic;
      const newDeleteProsObj = {...state.pros};
      // if state.pros[tpic]
      // if (!newObj[topic]) {
      //   newObj[topic] = [];
      //   newObj[topic].push(action.payload.value);
      // } else {
      //   newObj[topic].push(action.payload.value);
      // }
      const indexOfDelete = newDeleteProsObj[deleteProTopic].indexOf(action.payload.value)
      newDeleteProsObj[deleteProTopic].splice(indexOfDelete, 1);
      return {
        ...state,
        pros: {...newDeleteProsObj}
      };

    case types.DELETE_CONS:
      const deleteTopic = action.payload.topic;
      const deleteConsObj = {...state.cons};

      const indexOfDelete2 = deleteConsObj[deleteTopic].indexOf(action.payload.value)
      deleteConsObj[deleteTopic].splice(indexOfDelete2, 1);

      return {
        ...state,
        cons: {...deleteConsObj}
      };

    case types.CREATE_GAME:
      
      const gameName = action.payload;

      const insertObj = {}

      for (let key in state.topics) {
        // add key to insertObj
        // key is a topic
        insertObj[key] = {};

        insertObj[key].pros = {} 
        insertObj[key].cons = {} 

        state.pros[key].forEach((el, i) => {
          insertObj[key].pros[i] = el;
        })

        state.cons[key].forEach((el, i) => {
          insertObj[key].cons[i] = el;
        })
      }     
    
      const final = {
        [gameName] : {
          ...insertObj
        }
      }


        //       fetch('https://example.com/profile', {
        //   method: 'POST', // or 'PUT'
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(data),
        // })
  

      // SEND FINAL IN A FETCH
      fetch('/game', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(final),
      })
      
      return {
        ...state,
        createGame: final,
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