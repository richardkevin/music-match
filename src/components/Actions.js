import React, { Component } from "react";

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

export default Actions;
