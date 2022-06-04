import React from "react";
import "../styles/scoreboard.css";

const Scoreboard = (props) => {
  return (
    <div className="scoreboard">
      <div>Score : {props.score}</div>
      <div>High Score : {props.highScore}</div>
    </div>
  )
}

export default Scoreboard