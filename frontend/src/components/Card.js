import React from "react";

const Card = (props) => {
  console.log(`check check: ${JSON.stringify(props, null, 2)}`);

  return (
    <div className="max-w-full h-[50%] p-4">
      <img
        src={`${props.cardPic.png}`}
        alt="card artwork"
        className="max-w-full h-full"
      />

      <hr className="my-2" />
      <span className="font-bold underline">
        <span className="font-bold underline">{props.cardName}</span>
      </span>
      <hr className="my-2" />
      <span className="font-bold underline">
        {props.flavorText ? (
          <span style={{ fontWeight: "bold, underline" }}>
            {props.flavorText}
          </span>
        ) : (
          <span>No flavor text available for this card :(</span>
        )}
      </span>
    </div>
  );
};

export default Card;
