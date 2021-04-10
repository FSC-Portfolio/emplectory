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
            name={"search-" + props.myFilter}
            type="text"
            className="form-control"
            placeholder={props.placeHolder}
          />
        </div>
      </form>

  );
}

export default Search;
