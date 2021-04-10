import React from "react";
import "./style.css";

function EmployeeRow(props) {
  // const employee = props.employee;
  return (
    <tr>
      <td><img alt={props.employee.picture.medium} src={props.employee.picture.medium} title={props.employee.name.last + ", " + props.employee.name.first}/></td>
      <td>{props.employee.name.title}</td>
      <td>{props.employee.name.last}</td>
      <td>{props.employee.name.first}</td>
      <td>{props.employee.dob.age}</td>
      <td>{props.employee.location.city}</td>
      <td>{props.employee.location.country}</td>
      <td>{props.employee.location.postcode}</td>
      <td>{props.employee.email}</td>
      <td>{props.employee.cell}</td>
    </tr>
  );
}

export default EmployeeRow;
