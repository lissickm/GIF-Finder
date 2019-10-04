import React, { Component } from "react";
import { connect } from "react-redux";

class Search extends Component {
  state = {
    favoriteStatus: false
  };

  toggleFavorite = event => {
    console.log("setting favorite...");
    this.setState({
      favoriteStatus: !this.state.favoriteStatus
    });
    this.props.dispatch({
      type: "SET_FAVORITE",
      payload: this.props.gif
    });
  };

  
  render() {
    const isFavorite = this.state.favoriteStatus;

    return (
      <table>
        <tbody>
          <tr>
            <td>
              <img
                alt={this.props.gif.id}
                src={this.props.gif.images.downsized.url}
                className='image'
              />
            </td>
          </tr>
          <tr>
              {isFavorite ? <button className="btn btn-success" disabled >Favorited</button> : 
            <button className="btn btn-success" onClick={this.toggleFavorite}>Add Favorite</button>}
          </tr>
        </tbody>
      </table>
    );
  }
}

export default connect()(Search);
