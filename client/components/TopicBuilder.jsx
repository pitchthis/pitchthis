import React, { useState, useEffect } from "react";

const TopicBuilder = () => {
  // dispatch to store the 'e.target.value' if someone clicks plus sign, if click '-' sign we need to send dispatch to delete from store
  // store.state = {
  //  topics = {react: true, graphQL: true}
  //}
  return (
    <div>
      <div className="field">
        {/* <label className="label">Add Topic</label> */}
        <div className="control is-flex mb-3">
          <input className="input" type="text" placeholder="Text input" />
          <button className="button is-success ml-3">
            <span className="icon is-small">
              <i className="fas fa-plus-circle"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopicBuilder;
