import React from "react";
import "./style.css";

function ThWithSort(props) {
  // simple template for the sort arrows.
  const ind = props.ind;
  const subInd = props.subInd ? props.subInd : null;
  return (
    <th scope="col">
      <div className={"row"}>
        <div className={"col-md-4"}>
          <div className={"sort-asc"}>
            <i onClick={() => props.handleSort(ind, subInd)} className="fas fa-sort-up"></i>
          </div>
          <div className={"sort-des"}>
            <i onClick={() => props.handleSort(ind, subInd, null)} className="fas fa-sort-down"></i>
          </div>
        </div>
      </div>
    </th>
  )
}

export default ThWithSort;
