import React from "react";
import { connect } from 'react-redux';
import Login from "./components/Login";
import GameContainer from "./components/GameContainer";
import Lobby from "./components/Lobby";

import { Switch, Route } from "react-router-dom";
import "./assets/styles.scss";

const App = () => {


  return (
    <main>
      <Switch>
        {/* <Route path="/loggedIn" component={GameContainer} /> */}
        <Route path="/loggedIn" component={Lobby} />
        <Route path="/" component={Login} exact />
      </Switch>
    </main>
  );
};

export default App;
