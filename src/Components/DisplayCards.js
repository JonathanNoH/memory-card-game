import React, { useState } from "react";
import Card from "./Card";
import uniqid from "uniqid";

const DisplayCards = (props) => {

  const listCards = props.numCards.map((cardProps) => {
    return <Card key={uniqid()} value={cardProps}/>
  })
  return (
    <div>
      {listCards}
    </div>
  )
}

export default DisplayCards;