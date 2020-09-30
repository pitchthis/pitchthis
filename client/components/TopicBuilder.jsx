import React, { useState, useEffect } from "react";
import ProsCons from "./ProsCons";


const TopicBuilder = () => {
  // dispatch to store the 'e.target.value' if someone clicks plus sign, if click '-' sign we need to send dispatch to delete from store
  // 

  const [toggleIcon, setToggleIcon] = useState(true)

  console.log(toggleIcon)
  const handleClickToggle = () => {
    setToggleIcon(!toggleIcon)
    // dispatch to store!

    // render 5 Pros/Cons on click
  }

  let prosConsContainer = [];
  prosConsContainer.push(<div>Pros</div>)
  for (let i = 0; i < 5; i += 1) {
    prosConsContainer.push(
      <ProsCons key={i} type={'pros'} />
    )
  }
  prosConsContainer.push(<div>Cons</div>)
  for (let i = 0; i < 5; i += 1) {
    if (i % 2 === 0) {
      prosConsContainer.push(
        <ProsCons key={i} type={'cons'} procon={'pro'} />
      )
    } else if (i % 2 === 1) {
      prosConsContainer.push(
        <ProsCons key={i} type={'cons'} procon={'con'} />
      )
    }
  }


  return (
    <div>
      <div className="field fieldTopic">
        {/* <label className="label">Add Topic</label> */}
        <div className="control mb-3 is-flex">
          <label className="label">Topic:</label>
          <input className="input" type="text" placeholder="Text input" />
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
