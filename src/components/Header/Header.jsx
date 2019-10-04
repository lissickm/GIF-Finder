import React, { Component } from "react";
import './Header.css';
import { withRouter } from 'react-router-dom';

class Header extends Component {

  changePage = (event) => {
    if (this.props.title === "Favorite Collection") {
          this.props.history.push('/');
    } else if (this.props.title === "Search") {
          this.props.history.push('/favorite');
    }
  }

  render() {
    return (
      <header className="Header">
        <div className="row">
          <div className="col-2">
          </div>
          <div className="col-8">
            <h2 className="App-title">Genuine GIFs: {this.props.title}</h2>
          </div>
          <div className="col-2">
            <button onClick={this.changePage} className="button-searchFav btn btn-light">Search/Favorite</button>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
