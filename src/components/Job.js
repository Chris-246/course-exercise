import React from "react";

const Job = (props) => {
  return (
    <div className={props.className}>
      {" "}
      <h2>{props.title}</h2>
      <p className="texteJob">
        {props.contractType} - {props.country} - {props.city}
      </p>
    </div>
  );
};
export default Job;
