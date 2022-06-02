import React from "react";

const Scoreboard = (props) => {
  return (
    <div>
      <div>{props.score}</div>
      <div>{props.highScore}</div>
    </div>
  )
}

export default Scoreboard