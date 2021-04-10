import React from "react";
import EmployeeRow from "../EmployeeRow";
import ThWithSort from "../ThWithSort";
import "./style.css";
import Search from "../Search";

function EmployeeTable(props) {
  // const employees = props.employees;
  return (
    <table className={"table table-striped"}>
      <thead>
      <tr>
        <th scope="col">Image</th>
        <ThWithSort handleSort={props.handleSort} thName={""} ind={"name"} subInd={"title"}/>
        <ThWithSort handleSort={props.handleSort} thName={""} ind={"name"} subInd={"last"}/>
        <ThWithSort handleSort={props.handleSort} thName={""} ind={"name"} subInd={"first"}/>
        <ThWithSort handleSort={props.handleSort} thName={""} ind={"dob"} subInd={"age"}/>
        <ThWithSort handleSort={props.handleSort} thName={""} ind={"location"} subInd={"city"}/>
        <ThWithSort handleSort={props.handleSort} thName={""} ind={"location"} subInd={"country"}/>
        <ThWithSort handleSort={props.handleSort} thName={""} ind={"location"} subInd={"postcode"}/>
        <ThWithSort handleSort={props.handleSort} thName={""} ind={"email"} subInd={false}/>
        {/*<ThWithSort handleSort={props.handleSort} thName={"Mob"} ind={"cell"} subInd={false}/>*/}
      </tr>
      <tr>
        <th></th>
        {/*<th><Search handleInputChange={props.handleInputChange} myFilter={"nameTitle"} placeHolder={"Title"} /></th>*/}
        <th></th>
        <th><Search handleInputChange={props.handleInputChange} myFilter={"NameLast"} placeHolder={"Last"} /></th>
        <th><Search handleInputChange={props.handleInputChange} myFilter={"nameFirst"} placeHolder={"First"} /></th>
        <th><Search handleInputChange={props.handleInputChange} myFilter={"dobAge"} placeHolder={"Age"} /></th>
        <th><Search handleInputChange={props.handleInputChange} myFilter={"locationCity"} placeHolder={"City"} /></th>
        <th><Search handleInputChange={props.handleInputChange} myFilter={"locationCountry"} placeHolder={"Country"} /></th>
        <th><Search handleInputChange={props.handleInputChange} myFilter={"LocationPostcode"} placeHolder={"Postcode"} /></th>
        <th><Search handleInputChange={props.handleInputChange} myFilter={"email"} placeHolder={"Email"} /></th>
        {/*<th><Search handleInputChange={props.handleInputChange} myFilter={"cell"} placeHolder={"Mob"} /></th>*/}
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
