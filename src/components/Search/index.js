import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Search(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          list="search"
          type="text"
          className="form-control"
          placeholder="Begin typing to filter..."
          // id="employee-search"
        />
      </div>
    </form>
  );
}

export default Search;
