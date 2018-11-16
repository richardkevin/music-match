import React, { Component } from "react";
import { connect } from "react-redux";
import { getArtist } from "../reducers/artist";

const styles = {
  green: "#00cc00",
  red: "#ff0000",
  circle: {
    borderRadius: "50%",
    height: 50,
    width: 50
  }
};

class Actions extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            ...styles.circle,
            backgroundColor: styles.red,
            display: "inline-block"
          }}
          onClick={() => this.props.dispatch(getArtist())}
        />
        <div
          style={{
            ...styles.circle,
            backgroundColor: styles.green,
            display: "inline-block"
          }}
        />
      </div>
    );
  }
}

export default connect()(Actions);
