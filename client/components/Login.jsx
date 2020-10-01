import React from "react";
import Link from "react-router-dom";

const Login = () => {
  return (
    <div className="goog">
      <a href="/login" className="button is-outlined is-primary is-light is-medium is-fullwidth">
        Login with Google to play...
      </a>
      {/* <Link to="/game">Game</Link> */}
    </div>
  );
};

export default Login;
