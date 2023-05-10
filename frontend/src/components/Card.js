import React from "react";

const Card = (props) => {
  return (
    <div>
      <p>
        <span style={{ fontWeight: "bold, underline" }}>
          {props.card.uri} :
        </span>
        {props.card.oracle_text}

        <hr></hr>
      </p>
    </div>
  );
};

export default Card;
