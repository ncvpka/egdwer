import React from "react";

function CardInfo(props) {
  return (
    <div className="Card_info grid justify-items-center px-2">
      <div className="img_doctor pb-2">
        <img src={props.image}></img>
      </div>
      <div className="name_doctor font-bold">
        <h2>{props.name}</h2>
      </div>
      <div className="position_doctor">
        <p>{props.position}</p>
      </div>
    </div>
  );
}
export default CardInfo;
