import React, { Component } from "react";
import EmployeeRow from "./components/EmployeeRow";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Search from "./components/Search";
// import friends from "./friends.json";
import API from "./API";

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
    this.setState({ search: event.target.value }, () => {
      console.log(this.state.employees);
      // Use a callback function to let the state set before using it.
      this.setState(
        {filteredEmployees: this.state.employees.filter(
          item =>
            item.name.first.toLowerCase().includes(this.state.search)
            || item.login.username.toLowerCase().includes(this.state.search)
            || item.login.password.toLowerCase().includes(this.state.search)
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
        itemA = a[indexToSort].toLowerCase();
        itemB = b[indexToSort].toLowerCase();
      } else {
        itemA = a[indexToSort][subIndexToSort].toLowerCase();
        itemB = b[indexToSort][subIndexToSort].toLowerCase();
      }

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

  // Map over the employees in the state and render them.
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <div className={"col-md-12"}>
          <Search handleInputChange={this.handleInputChange} />

        </div>
        <div className={"col-md-12"}>
          <table className={"table table-striped"}>
            <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name
                &nbsp;<i onClick={() => this.handleSort("name", "first")} className="fas fa-sort-up fa-lg"></i>
                &nbsp;<i onClick={() => this.handleSort("name", "first", 0)} className="fas fa-sort-down fa-lg"></i>
              </th>
              <th scope="col">Username
                &nbsp;<i onClick={() => this.handleSort("login", "username")} className="fas fa-sort-up fa-lg"></i>
                &nbsp;<i onClick={() => this.handleSort("login", "username", 0)} className="fas fa-sort-down fa-lg"></i>
              </th>
              <th scope="col">Password
                &nbsp;<i onClick={() => this.handleSort("login", "password")} className="fas fa-sort-up fa-lg"></i>
                &nbsp;<i onClick={() => this.handleSort("login", "password", 0)} className="fas fa-sort-down fa-lg"></i>
              </th>
            </tr>
            </thead>
            <tbody>
            {this.state.filteredEmployees.map(employee => (
              <EmployeeRow
                removeFriend={this.removeFriend}
                id={employee.id.value}
                key={employee.id.value}
                name={employee.name.first}
                image={employee.picture.thumbnail}
                occupation={employee.login.username}
                location={employee.login.password}
              />
            ))}
            </tbody>

          </table>
        </div>
      </Wrapper>
    );
  }
}

export default App;
