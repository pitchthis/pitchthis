import React, { useState, useEffect } from "react";
import TopicBuilder from "./TopicBuilder";

const GameBuilder = () => {
  return (
    <div className="container">
      <div className="field">
        <label className="label">Game Title:</label>
        <div className="control">
          <input className="input" type="text" placeholder="Text input" />
        </div>
      </div>
      <TopicBuilder />
      <TopicBuilder />
      <div className="field">
        {/* <label className="label">Add Topic</label> */}
        <div className="control is-flex mb-3">
          <input className="input" type="text" placeholder="Text input" />
          <button className="button is-success is-danger ml-3">
            <span className="icon is-small">
              <i className="fas fa-minus-circle"></i>
            </span>
          </button>
        </div>
      </div>
      <TopicBuilder />
    </div>
  );
};

export default GameBuilder;
