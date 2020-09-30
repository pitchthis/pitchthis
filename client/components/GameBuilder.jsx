import React, { useState, useEffect, Component } from "react";
import { useDispatch, connect } from 'react-redux'
import * as types from '../constants/actionTypes';
import TopicBuilder from "./TopicBuilder";

const mapStateToProps = state => {
  console.log(state)
  return { topicQuanity: state.games.topicQuanity, }
}
// useEffect(() => {
//   e.preventDefault();
//   document.querySelector('#topicContainer').appendChild(<TopicBuilder />);

// });
  // if store incremented by one, add topic builder
  class GameBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidUpdate() {
      console.log('INSIDE DID UPDATE', this.props)
      if (topicArray.length < this.props.topicQuanity) topicArray.push(<TopicBuilder />)
    }
    handleSubmit() {
      // send dispatch to store w/ GAME TITLE.
      // middle ware in store will assemble topics / pros/cons
    }
    // const dispatch = useDispatch()

  // dispatch({ type: types.ADD_TOPIC})
  // useEffect(()=>{
    // console.log(props)
  // }, [])

  render() {
    const topicArray = [];
    for (let i = 0; i < 10; i += 1) {
      topicArray.push(<TopicBuilder key={i}/>)
    }

  return (
    <div className="container">
      <div className="field">
        <label className="label">Game Title:</label>
        <div className="control">
          <input className="input" type="text" placeholder="Text input" />
        </div>
      </div>
      <div id="topicContainer">
        {topicArray}
      </div>
      <div className="control">
        <button className="button is-primary">Submit</button>
      </div>
    </div>
  )
  }
};

export default connect(mapStateToProps)(GameBuilder);
