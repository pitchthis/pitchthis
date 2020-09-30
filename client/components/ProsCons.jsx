import React, { useState, useEffect } from "react";
import * as types from '../constants/actionTypes';
import { useDispatch } from 'react-redux'


const ProsCons = (props) => {
  // dispatch to store the 'e.target.value' if someone clicks plus sign, if click '-' sign we need to send dispatch to delete from store
  // store.state = {
  //  topics = {react: true, graphQL: true}
  //}

  const [toggleIcon, setToggleIcon] = useState(true)
  const [proConVal, setProConVal] = useState('')

  
  const dispatch = useDispatch()


  console.log(toggleIcon)
  const handleClickToggle = () => {
    setToggleIcon(!toggleIcon)
    // dispatch to store!
    if (props.type === 'pros') {
      console.log(props.type)
      dispatch({ 
        type: types.UPDATE_PROS, payload: {
          topic: props.topic,
          value: proConVal,
        }
       })
      } else if (props.type === 'cons') {
        console.log('wow', props.type)

      dispatch({ 
        type: types.UPDATE_CONS, payload: {
          topic: props.topic,
          value: proConVal,
        }
        })
    }
  }

  const handlePros = (e) => {
    setProConVal(e.target.value);
  }

  return (
    <div key={props.keyVal}>
      <div className="field is-block">
        {/* <label className="label">Add Topic</label> */}
        <div className="control is-flex mb-3">
          <input className="input" type="text" placeholder="Text input" onChange={handlePros}/>
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
      </div>
    </div>
  );
};

export default ProsCons;