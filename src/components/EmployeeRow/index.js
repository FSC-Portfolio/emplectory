import React from "react";
import "./style.css";

function EmployeeRow(props) {
  const employee = props.employee;
  return (
    <tr>
      <td><img alt={employee.picture.medium} src={employee.picture.medium} title={employee.name.last + ", " + employee.name.first}/></td>
      <td>{employee.name.first}</td>
      <td>{employee.login.username}</td>
      <td>{employee.login.password}</td>
    </tr>
  );
}

export default EmployeeRow;
