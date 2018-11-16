import React, { Component } from "react";
import { connect } from "react-redux";

class Album extends Component {
  render() {
    const { artist } = this.props;
    if (!artist) {
      return <div />
    }
    console.log("album", artist);
    return (
      <div>
        <h1>{artist.name}</h1>
        <img src={artist.picture_medium} alt={artist.name} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  artist: state.artist
});
export default connect(mapStateToProps)(Album);
