import React from "react";

export default function ItemDetail(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.price}</p>
      <img src={props.thumbnail} alt={props.title} />
    </div>
  );
}
