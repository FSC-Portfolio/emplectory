import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Search from "./components/Search";
import EmployeeTable from "./components/EmployeeTable";
import API from "./API";
import ThWithSort from "./components/ThWithSort";

class App extends Component {
  // Setting the state to the employees array.
  state = {
    employees: [],
    filteredEmployees: [],
    search: ""
  };

  // When this component mounts, load some employees.
  componentDidMount() {
    this.searchEmployees();
  }

  handleInputChange = (event) => {
    // On input search for matching details in database.
    this.setState({ search: event.target.value.toLowerCase() }, () => {
      console.log(this.state.employees);
      // Use a callback function to let the state set before using it.
      this.setState(
        {filteredEmployees: this.state.employees.filter(
          item =>
            item.name.first.toLowerCase().includes(this.state.search)
            || item.name.title.toLowerCase().includes(this.state.search)
            || item.name.last.toLowerCase().includes(this.state.search)
            || item.login.password.toLowerCase().includes(this.state.search)
            || item.dob.age.toString().includes(this.state.search)
            || item.location.city.toLowerCase().includes(this.state.search)
            || item.location.country.toLowerCase().includes(this.state.search)
            || item.location.postcode.toString().toLowerCase().includes(this.state.search)
            || item.email.toLowerCase().includes(this.state.search)
            || item.cell.toLowerCase().includes(this.state.search)
          )
        }
      );
      console.log(this.state.search);
    });
  }

  handleSort = (indexToSort, subIndexToSort = null, ascDesc = 1) => {
    // Simply sort the filtered array.
    this.setState({filteredEmployees: this.state.filteredEmployees.sort((a, b) => {
      let itemA;
      let itemB;
      let comparison = 0;

      // Allow for some nested elements.
      if (!subIndexToSort) {
        itemA = a[indexToSort]; //.toLowerCase();
        itemB = b[indexToSort]; //.toLowerCase();
      } else {

        itemA = a[indexToSort][subIndexToSort] // .toLowerCase();
        itemB = b[indexToSort][subIndexToSort] // .toLowerCase();
      }

      if (typeof itemA === "string") itemA = itemA.toLowerCase();
      if (typeof itemB === "string") itemB = itemB.toLowerCase();

      // Allow for ascending / descending
        if (ascDesc) {
          if (itemA > itemB) {
            comparison = 1;
          } else if (itemA < itemB) {
            comparison = -1;
          }
        } else {
          if (itemA > itemB) {
            comparison = -1;
          } else if (itemA < itemB) {
            comparison = 1;
          }
        }
      return comparison;
    })});
  }

  searchEmployees = (useSeed = true) => {
    API.search(useSeed)
      .then(res => this.setState({employees: res.data.results}))
      .then(() => this.setState({filteredEmployees: this.state.employees}))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <div className={"col-md-12"}>
          <Search handleInputChange={this.handleInputChange} />

        </div>
        <div className={"col-md-12"}>
          <EmployeeTable
            employees={this.state.filteredEmployees}
            handleSort={this.handleSort}
          />
        </div>
      </Wrapper>
    );
  }
}

export default App;
