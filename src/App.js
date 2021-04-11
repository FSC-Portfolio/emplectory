import React, { Component } from "react";
import Title from "./components/Title";
import Search from "./components/Search";
import EmployeeTable from "./components/EmployeeTable";
import API from "./API";
import Container from "./components/Container";

// some constants for the api search.
const SEED = "jayarghargh";
const NUM_RES = 500;
const NATIONALITY = "au";

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
      // Use a callback function to let the state set before using it.
      this.setState(
        {filteredEmployees: this.state.employees.filter(
          item => {
            let filterSearch;
            // Determine which filter to apply.
            // TODO refactor this for readability.
            switch (event.target.name) {
              case "search-nameFirst":
                filterSearch = item.name.first.toLowerCase().includes(this.state.search);
                break;
              case "search-nameLast":
                filterSearch = item.name.last.toLowerCase().includes(this.state.search);
                break;
              case "search-dobAge":
                filterSearch = item.dob.age.toString().includes(this.state.search);
                break;
              case "search-locationCity":
                filterSearch = item.location.city.toLowerCase().includes(this.state.search);
                break;
              case "search-locationCountry":
                filterSearch = item.location.country.toLowerCase().includes(this.state.search);
                break;
              case "search-locationPostcode":
                filterSearch = item.location.postcode.toString().includes(this.state.search);
                break;
              case "search-email":
                filterSearch = item.email.toLowerCase().includes(this.state.search);
                break;
              case "search-cell":
                filterSearch = item.cell.toLowerCase().includes(this.state.search);
                break;

              default:
                filterSearch = (
                  // gotta catch em all!
                  item.name.first.toLowerCase().includes(this.state.search)
                  || item.name.last.toLowerCase().includes(this.state.search)
                  || item.dob.age.toString().includes(this.state.search)
                  || item.location.city.toLowerCase().includes(this.state.search)
                  || item.location.country.toLowerCase().includes(this.state.search)
                  || item.location.postcode.toString().toLowerCase().includes(this.state.search)
                  || item.email.toLowerCase().includes(this.state.search)
                )
            }
            return filterSearch;
          }
          )
        }
      );
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
        itemA = a[indexToSort];
        itemB = b[indexToSort];
      } else {

        itemA = a[indexToSort][subIndexToSort];
        itemB = b[indexToSort][subIndexToSort];
      }

      // convert strings to lowercase for search matching.
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

  searchEmployees = () => {
    // the search method.
    API.search(SEED, NUM_RES, NATIONALITY)
      .then(res => this.setState({employees: res.data.results}))
      .then(() => this.setState({filteredEmployees: this.state.employees}))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Title>Employee Directory</Title>
        {/*TODO add number results returned.*/}

        {/*The search all*/}
        <div className={"row"}>
          <div className={"col-md-12"}>
            <Search handleInputChange={this.handleInputChange} myFilter={"everything"} placeHolder={"Dagnammit search everything!"}/>
          </div>
        </div>

        {/*The main layout.*/}
        <div className={"row"}>
          <div className={"col-md-12"}>
            <EmployeeTable
              employees={this.state.filteredEmployees}
              handleSort={this.handleSort}
              handleInputChange={this.handleInputChange}
            />
          </div>
        </div>
      </Container>
    );
  }
}

export default App;
