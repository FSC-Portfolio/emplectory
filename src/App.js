import React, { Component } from "react";
import EmployeeRow from "./components/EmployeeRow";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import API from "./API";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    // friends,
    employees: []
  };

  // state = {
  //   result: {},
  //   search: ""
  // };

  // When this component mounts, load some employees.
  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = (useSeed = false) => {
    API.search(useSeed)
      .then(res => this.setState({employees: res.data.results}))
      // .then(res => this.setState({result: res}))
      .catch(err => console.log(err));
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over the employees in the stat and render them.
  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
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
            {this.state.employees.map(employee => (
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
        {/*{console.log(this.state.employees)}*/}
      </Wrapper>
    );
  }
}

export default App;
