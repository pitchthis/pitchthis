import React, { useState, useEffect } from "react";

const ProsCons = (props) => {
  // dispatch to store the 'e.target.value' if someone clicks plus sign, if click '-' sign we need to send dispatch to delete from store
  // store.state = {
  //  topics = {react: true, graphQL: true}
  //}

  const [toggleIcon, setToggleIcon] = useState(true)
  const [proConVal, setProConVal] = useState('')

  console.log(toggleIcon)
  const handleClickToggle = () => {
    setToggleIcon(!toggleIcon)
    // dispatch to store!

    // render 5 Pros/Cons on click
  }

  // Dispatch with action.types {topic: "React", text: 'this is good'}
  // props.
  //if props.type == pros, do the PRO dispatch

  // props.topic

  const handlePros = (e) => {
    console.log(props.proConVal)
    props.proArray.push(e.target.value);
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