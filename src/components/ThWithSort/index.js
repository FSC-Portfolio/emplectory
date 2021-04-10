import React from "react";
import "./style.css";

function ThWithSort(props) {
  const handleSort = props.handleSort;
  return (
    <th scope="col">
      {props.name}
      &nbsp;<i onClick={() => handleSort(props.sort[0], props.sort[1])} className="fas fa-sort-up fa-lg"></i>
      &nbsp;<i onClick={() => handleSort(props.sort[0], props.sort[1], 0)} className="fas fa-sort-down fa-lg"></i>
    </th>
  )
}

export default ThWithSort;
