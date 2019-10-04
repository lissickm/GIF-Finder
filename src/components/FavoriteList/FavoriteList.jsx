import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import { actionChannel } from 'redux-saga/effects';
import FavoriteItem from "../FavoriteItem/FavoriteItem"

class FavoriteList extends Component {

    componentDidMount() {
        this.getFavorites();
    }

    getFavorites() {
        this.props.dispatch({
            type: 'FETCH_FAVORITES'
        })
    }

   


    render() {

        return (
            <div>
                <Header title={"Favorite Collection"}/>
                <h3 className="h3-yourFavorites">Your Favorites</h3>
                <div className="div-favoriteList">

                {this.props.store.favoriteReducer.map((favorite) => {
                    return (
                        <FavoriteItem favorite={favorite}/>
                    )
                })}

                    {/* <table className="table-favoriteItem">
                <thead className="thead-favoriteItem">
                    <tr>
                        <th>
                            <b>Action</b>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src="https://media.giphy.com/media/3o85xsGXVuYh8lM3EQ/giphy.gif"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                                <div class="dropdown">
                                    <button class="dropbtn">Category</button>
                                    <div class="dropdown-content">
                                        <a href="#">Funny</a>
                                        <a href="#">Animals</a>
                                        <a href="#">Action</a>
                                        <a href="#">Other</a>
                                    </div>
                                </div>
                        </td>
                    </tr>
                </tbody>
            </table> */}
                </div>
            </div>
        )



    }

}

const mapStateToProps = store => ({
    store,
});

export default connect(mapStateToProps)(FavoriteList);