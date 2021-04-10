import React from "react";
import EmployeeRow from "../EmployeeRow";
import ThWithSort from "../ThWithSort";
import "./style.css";

function EmployeeTable(props) {
  // const employees = props.employees;
  return (
    <table className={"table table-striped"}>
      <thead>
      <tr>
        <th scope="col">Image</th>
        <ThWithSort handleSort={props.handleSort} thName={"Title"} ind={"name"} subInd={"title"}/>
        <ThWithSort handleSort={props.handleSort} thName={"Last"} ind={"name"} subInd={"last"}/>
        <ThWithSort handleSort={props.handleSort} thName={"First"} ind={"name"} subInd={"first"}/>
        <ThWithSort handleSort={props.handleSort} thName={"Age"} ind={"dob"} subInd={"age"}/>
        <ThWithSort handleSort={props.handleSort} thName={"City"} ind={"location"} subInd={"city"}/>
        <ThWithSort handleSort={props.handleSort} thName={"Country"} ind={"location"} subInd={"country"}/>
        <ThWithSort handleSort={props.handleSort} thName={"Postcode"} ind={"location"} subInd={"postcode"}/>
        <ThWithSort handleSort={props.handleSort} thName={"Email"} ind={"email"} subInd={false}/>
        <ThWithSort handleSort={props.handleSort} thName={"Mob"} ind={"cell"} subInd={false}/>
      </tr>
      </thead>
      <tbody>
      {props.employees.map(employee => (
        <EmployeeRow employee={employee} key={employee.login.uuid} />
      ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
