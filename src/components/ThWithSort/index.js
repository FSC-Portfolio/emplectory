import React from "react";
import "./style.css";

function ThWithSort(props) {
  const ind = props.ind;
  // const subInd = null;
  const subInd = props.subInd ? props.subInd : null;
  return (
    <th scope="col">
      {props.thName}
      <i onClick={() => props.handleSort(ind, subInd)} className="fas fa-sort-up fa-2x"></i>
      <i onClick={() => props.handleSort(ind, subInd, null)} className="fas fa-sort-down fa-2x"></i>
      {/*<div className={"row"}>*/}
      {/*  <div className={"col-md-8"}>*/}
      {/*    {props.thName}*/}
      {/*  </div>*/}
      {/*  <div className={"col-md-4"}>*/}
      {/*    <div className={"sort-asc"}>*/}
      {/*      <i onClick={() => handleSort(ind, subInd)} className="fas fa-sort-up fa-2x"></i>*/}
      {/*    </div>*/}
      {/*    <div className={"sort-des"}>*/}
      {/*      <i onClick={() => handleSort(ind, subInd, null)} className="fas fa-sort-down fa-2x"></i>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </th>
  )
}

export default ThWithSort;
