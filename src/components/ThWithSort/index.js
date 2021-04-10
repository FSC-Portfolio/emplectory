import React from "react";
import "./style.css";

function ThWithSort(props) {
  const ind = props.ind;
  // const subInd = null;
  const subInd = props.subInd ? props.subInd : null;
  return (
    <th scope="col">
      {/*{props.thName}*/}
      {/*<i onClick={() => props.handleSort(ind, subInd)} className="fas fa-sort-up"></i>*/}
      {/*<i onClick={() => props.handleSort(ind, subInd, null)} className="fas fa-sort-down"></i>*/}
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
