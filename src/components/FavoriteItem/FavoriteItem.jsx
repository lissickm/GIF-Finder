import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Header/Header";
import { actionChannel } from "redux-saga/effects";

class FavoriteList extends Component {
  deleteHandler = id => {
    this.props.dispatch({
      type: "DELETE_FAVORITE",
      payload: id
    });
    console.log(id);
  };

  handleCategory = (category, id) => {
    this.props.dispatch({
      type: 'UPDATE_CATEGORY',
      payload: [category, id]
    })
  }

  render() {
    return (
      <table className='table-favoriteItem'>
        <thead className='thead-favoriteItem'>
          <tr>
            <th colSpan="2">
              <b>{this.props.favorite.category}</b>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2">
              <img src={this.props.favorite.url} />
            </td>
          </tr>
          <tr>
            <td className="td-1">
              <div class='dropdown'>
                <button key={this.props.favorite.id} className='dropbtn btn btn-success'>
                  Category
                </button>
                <div class='dropdown-content'>
                  <a
                    onClick={() =>
                      this.handleCategory("funny", this.props.favorite.id)
                    }>
                    Funny
                  </a>
                  <a
                    onClick={() =>
                      this.handleCategory("animals", this.props.favorite.id)
                    }>
                    Animals
                  </a>
                  <a
                    onClick={() =>
                      this.handleCategory("action", this.props.favorite.id)
                    }>
                    Action
                  </a>
                  <a
                    onClick={() =>
                      this.handleCategory("other", this.props.favorite.id)
                    }>
                    Other
                  </a>
                </div>
                </div>
                </td>
                <td className="td-2">
                  <div>
                <button className="btn btn-danger" onClick={() => this.deleteHandler(this.props.favorite.id)}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = store => ({
  store
});

export default connect(mapStateToProps)(FavoriteList);
