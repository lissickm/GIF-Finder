import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../Header/Header";
import SearchForm from '../SearchForm/SearchForm';
import GIFGalleryList from "../GIFGalleryList/GIFGalleryList";

class Search extends Component {

  render() {
    return (
      <div>
        <Header title={"Search"} />
        <SearchForm/>
        <GIFGalleryList />
      </div>
    );
  }
}

export default connect()(Search);
