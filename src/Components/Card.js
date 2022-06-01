import React, { useState } from "react";

const Card = (props) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <div>This is an img</div>
      <div>img Title</div>
      {/** props.img */}
      {/** props.title */}
    </div>
  )
}

export default Card;