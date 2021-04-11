import React from "react";
import "./style.css";

function Search(props) {
  // The search box template.
  return (
      <form className="search">
        <div className="form-group">
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name={"search-" + props.myFilter}  // Required so we know which search box is being used.
            type="text"
            className="form-control"
            placeholder={props.placeHolder}
          />
        </div>
      </form>
  );
}

export default Search;
