import React from "react";

const Card = ({ name, year, image }) => {
  return (
    <div className="col m4">
      <div className="card">
        <div className="card-image">
          <img src={image} style={{ height: 200 }} alt={name}/>
        </div>
        <div className="card-content">
          <span className="card-title">{name}</span>
          <p>Year:{year}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
