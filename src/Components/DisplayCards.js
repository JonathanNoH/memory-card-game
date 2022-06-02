import React, { useState } from "react";
import Card from "./Card";
import uniqid from "uniqid";
import "../styles/displayCards.css";

const DisplayCards = (props) => {

  const listCards = props.numCards.map((cardProps) => {
    return <Card key={uniqid()} value={cardProps}/>
  })
  return (
    <div className="card-holder">
      {listCards}
    </div>
  )
}

export default DisplayCards;