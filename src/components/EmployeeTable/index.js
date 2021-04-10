import React from "react";
import EmployeeRow from "../EmployeeRow";
import ThWithSort from "../ThWithSort";
import "./style.css";

function EmployeeTable(props) {
  const employees = props.employees;
  return (
    <table className={"table table-striped"}>
      <thead>
      <tr>
        <th scope="col">Image</th>
        <ThWithSort handleSort={props.handleSort} thName={"Name"} sort={["name", "first"]}/>
        <ThWithSort handleSort={props.handleSort} thName={"Username"} sort={["login", "username"]}/>
        <ThWithSort handleSort={props.handleSort} thName={"Password"} sort={["login", "password"]}/>
      </tr>
      </thead>
      <tbody>
      {employees.map(employee => (
        <EmployeeRow employee={employee} />
      ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
