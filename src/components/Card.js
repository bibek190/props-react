import React from "react";
import Avatar from "./Avatar";
import contacts from "./contacts";
import Detail from "./Detail";

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <div className="top">
          <p>{props.id}</p>
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img} />
        </div>
        <div className="bottom">
          <Detail number={props.number} email={props.email} />
        </div>
      </div>
    </div>
  );
};

export default Card;
