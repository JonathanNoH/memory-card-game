import React, { useState } from "react";
import "../styles/card.css";

const Card = (props) => {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  const handleClick = () => {
    props.clicked(hasBeenClicked);
    setHasBeenClicked(!hasBeenClicked);
  }

  return (
    <div className="card" onClick={handleClick}>
      <div>{props.value.img}</div>
      <div>{props.value.name}</div>
    </div>
  )
}

export default Card;