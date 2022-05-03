import React from "react";

const MySearchBar = (props) => {
    return(
        <React.Fragment>
        <br></br>
        <div class="form-group">
        <div class="input-group mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fas fa-search"></i></span>
          </div>
          <input class="form-control" placeholder="Search" type="text"/>
        </div>
      </div>
      </React.Fragment>
    );
}

export default MySearchBar