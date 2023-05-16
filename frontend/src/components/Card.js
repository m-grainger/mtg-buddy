import React from "react";

const Card = (props) => {
  console.log(`check check: ${JSON.stringify(props, null, 2)}`);
  return (
    <div>
      <span style={{ fontWeight: "bold, underline" }}>{props.cardName}</span>
      <hr />
      <span style={{ fontWeight: "bold, underline" }}>{props.flavorText}</span>
      <hr />
      <span style={{ fontWeight: "bold, underline" }}>
        <img src={`${props.cardPic.png}`} />
      </span>
    </div>
  );
};

export default Card;
