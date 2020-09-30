import React, { useState, useEffect } from "react";
import ProsCons from "./ProsCons";
import { useDispatch } from 'react-redux'
import * as types from '../constants/actionTypes';


const TopicBuilder = () => {
  // dispatch to store the 'e.target.value' if someone clicks plus sign, if click '-' sign we need to send dispatch to delete from store
  // 
  const dispatch = useDispatch()
  

  const [toggleIcon, setToggleIcon] = useState(true)
  const [input, setInput] = useState('');
  const [proArray, setProArray] = useState([]);

  console.log(toggleIcon)
  const handleClickToggle = () => {
    setToggleIcon(!toggleIcon)
    dispatch({ type: types.ADD_TOPIC})
    
    if (toggleIcon) {
      dispatch({ type: types.TOPIC, payload: input})
    }
    if (!toggleIcon) {
      dispatch({ type: types.DELETE_TOPIC, payload: input})
    }


    // dispatch to store!
    // render 5 Pros/Cons on click
  }
  




  const handleTopicInput = (e) => {
    setInput(e.target.value);
  }

  let prosConsContainer = [];
  prosConsContainer.push(<div>Pros</div>)
  for (let i = 0; i < 3; i += 1) {
    prosConsContainer.push(
      <ProsCons proArray={proArray} topic={input} key={i} type={'pros'} />
    )
  }
  prosConsContainer.push(<div>Cons</div>)
  for (let i = 0; i < 3; i += 1) {
    prosConsContainer.push(
      <ProsCons topic={input} key={i} type={'cons'} />
    )
  }

  return (
    <div>
      <div className="field fieldTopic">
        {/* <label className="label">Add Topic</label> */}
        <div className="control mb-3 is-flex">
          <label className="label">Topic:</label>
          <input className="input" type="text" placeholder="Text input" onChange={handleTopicInput}/>
          {toggleIcon &&
            <button onClick={handleClickToggle} className="button is-success ml-3">
              <span className="icon is-small">
                <i className="fas fa-plus-circle"></i>
              </span>
            </button>}
          {!toggleIcon &&
            <button onClick={handleClickToggle} className="button is-danger ml-3">
              <span className="icon is-small">
                <i className="fas fa-minus-circle"></i>
              </span>
            </button>}
        </div>
        {!toggleIcon && prosConsContainer}
      </div>
      {/* <ProsCons /> */}
    </div>
  );
};

export default TopicBuilder;
