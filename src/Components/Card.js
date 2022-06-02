import React, { useState } from "react";
import "../styles/card.css";

const Card = (props) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      // TODO send up info to refresh cards randomized
    } else {
      setClicked(false);
      // TODO send up info that the game was lost
    }
    props.clicked();
  }

  return (
    <div className="card" onClick={handleClick}>
      <div>{props.value.img}</div>
      <div>{props.value.name}</div>
    </div>
  )
}

export default Card;