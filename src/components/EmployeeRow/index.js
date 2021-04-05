import React from "react";
import "./style.css";

function EmployeeRow(props) {
  return (
    <tr>
      <td><img alt={props.name} src={props.image} /></td>
      <td>{props.name}</td>
      <td>{props.occupation}</td>
      <td>{props.location}</td>
      {/*<span onClick={() => props.removeFriend(props.id)} className="remove">*/}
      {/*  𝘅*/}
      {/*</span>*/}
    </tr>
  );
}

export default EmployeeRow;
