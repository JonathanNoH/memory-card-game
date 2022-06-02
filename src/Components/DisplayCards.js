import React, { useState } from "react";
import Card from "./Card";
import uniqid from "uniqid";
import "../styles/displayCards.css";

const DisplayCards = (props) => {

  //Fisher-Yates Shuffle
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const handleClick = (hasBeenClicked) => {
    if (hasBeenClicked) {
      props.passLoss();
    } else {
      setListCards(shuffle([...listCards]));
      props.addPoint();
    }
  }

  const [listCards, setListCards] = useState([...props.numCards].map((cardProps) => {
    return <Card clicked={handleClick} key={uniqid()} value={cardProps}/>
  }))
  

  return (
    <div className="card-holder">
      {listCards}
    </div>
  )
}

export default DisplayCards;