import React from "react";
import "./card.css";
const Card_view = ({ name, breweryType, city, viewfuntion, id }) => {
  return (
    <div className="card_container">
      <p>{id}</p>
      <p>{name}</p>
      <p>{breweryType}</p>
      <p>{city}</p>
      <button className="button" onClick={viewfuntion} id={id}>
        View Detail
      </button>
    </div>
  );
};

export default Card_view;
