import React from "react";
import EmployeeRow from "../EmployeeRow";
import ThWithSort from "../ThWithSort";
import "./style.css";
import Search from "../Search";

function EmployeeTable(props) {
  return (
    <table className={"table table-striped"}>
      <thead>
      {/*create some headers for the sort arrows*/}
      <tr>
        <th scope="col"></th>
        <ThWithSort handleSort={props.handleSort} thName={""} ind={"name"} subInd={"title"}/>
        <ThWithSort handleSort={props.handleSort} thName={""} ind={"name"} subInd={"last"}/>
        <ThWithSort handleSort={props.handleSort} thName={""} ind={"name"} subInd={"first"}/>
        <ThWithSort handleSort={props.handleSort} thName={""} ind={"dob"} subInd={"age"}/>
        <ThWithSort handleSort={props.handleSort} thName={""} ind={"location"} subInd={"city"}/>
        <ThWithSort handleSort={props.handleSort} thName={""} ind={"location"} subInd={"country"}/>
        <ThWithSort handleSort={props.handleSort} thName={""} ind={"location"} subInd={"postcode"}/>
        <ThWithSort handleSort={props.handleSort} thName={""} ind={"email"} subInd={false}/>
      </tr>
      {/*create some headers for the search / filter boxes.*/}
      <tr>
        <th>Image</th>
        <th>Gender</th>
        <th><Search handleInputChange={props.handleInputChange} myFilter={"NameLast"} placeHolder={"Last"} /></th>
        <th><Search handleInputChange={props.handleInputChange} myFilter={"nameFirst"} placeHolder={"First"} /></th>
        <th><Search handleInputChange={props.handleInputChange} myFilter={"dobAge"} placeHolder={"Age"} /></th>
        <th><Search handleInputChange={props.handleInputChange} myFilter={"locationCity"} placeHolder={"City"} /></th>
        <th><Search handleInputChange={props.handleInputChange} myFilter={"locationCountry"} placeHolder={"Country"} /></th>
        <th><Search handleInputChange={props.handleInputChange} myFilter={"LocationPostcode"} placeHolder={"Postcode"} /></th>
        <th><Search handleInputChange={props.handleInputChange} myFilter={"email"} placeHolder={"Email"} /></th>
      </tr>
      </thead>
      <tbody>
      {/*list the employees, ensure a key is added.*/}
      {props.employees.map(employee => (
        <EmployeeRow employee={employee} key={employee.login.uuid} />
      ))}

      </tbody>
    </table>
  );
}

export default EmployeeTable;
