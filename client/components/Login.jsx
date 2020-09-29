import React from "react";
import Link from "react-router-dom";

const Login = () => {
  return (
    <div className="goog">
      <a href="/login" className="button">
        login with google
      </a>
      {/* <Link to="/game">Game</Link> */}
    </div>
  );
};

export default Login;
