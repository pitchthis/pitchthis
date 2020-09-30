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
      <TopicBuilder />
    </div>
  );
};

export default GameBuilder;
