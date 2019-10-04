import React, { Component } from "react";
import { connect } from "react-redux";

import './SearchForm.css';

class SearchForm extends Component {
  state = {
    searchTerm: ""
  };

  getSearch = event => {
    this.props.dispatch({
      type: "FETCH_GIPHY",
      payload: this.state.searchTerm
    });
    console.log(this.state)
  };

  handleChangeFor = event => {
    this.setState({
        searchTerm: event.target.value
      });
  };

  render() {
    return (
      <div>

        <div className="div-formBody">
          <form onSubmit={this.getSearch}>
            <div className="div-formUrl">
              <div className="input-group mb-6">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-default-1">Find a GIF</span>
                </div>
                <input type="text" className="input-search" onChange={this.handleChangeFor} />
              </div>
              <div>
                <button className="submit btn btn-primary" type="submit">Search</button>
              </div>
            </div>
          </form>
        </div>





        {/* <form onSubmit={this.getSearch}>
          <input type='text' placeholder='Search Giphy' onChange={this.handleChangeFor} />
          <button type='submit'>Search</button>
        </form> */}

      </div>
    );
  }
}

export default connect()(SearchForm);
