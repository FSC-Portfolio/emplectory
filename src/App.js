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
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Password</th>
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
