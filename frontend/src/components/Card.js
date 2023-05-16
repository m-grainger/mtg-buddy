import React from "react";

const Card = (props) => {
  console.log(`check check: ${JSON.stringify(props, null, 2)}`);
  return (
    <div>
      <span style={{ fontWeight: "bold, underline" }}>{props.cardId} :</span>
      <hr></hr>
      <span style={{ fontWeight: "bold, underline" }}>{props.cardName} :</span>
      <hr></hr>
    </div>
  );
};

export default Card;
