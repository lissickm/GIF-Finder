import React, { Component } from "react";
import {connect} from "react-redux"

import GIFGalleryItem from '../GIFGalleryItem/GIFGalleryItem';

class GIFGalleryList extends Component {
 getSearch = event => {
    this.props.dispatch({
      type: "GET_GIFS"
    });
  };

    render() {
        let gifList = this.props.reduxStore.gifReducer.map(gif => {
            return <GIFGalleryItem gif={gif}/>
        })
        return (
            <div className="div-searchList">
              {gifList}
            </div>
        )
    }
}

const mapStateToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStateToProps)(GIFGalleryList)