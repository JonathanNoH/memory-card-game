import React, { useEffect, useState } from "react";
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
      props.addPoint();
      setListCards(shuffle([...listCards]));
    }
  }

  const [arghReset, setArghReset] = useState(false);
  useEffect(() => {
    console.log("display sees reset");
    setArghReset((prevState) => !prevState);
  }, [props.resetAlert])

  const [listCards, setListCards] = useState([...props.currentCards].map((cardProps) => {
    const id = uniqid();
    return <Card clicked={handleClick} key={id} resetAlert={arghReset} value={cardProps}/>
  }));

  return (
    <div className="card-holder">
      {listCards}
    </div>
  )
}

export default DisplayCards;