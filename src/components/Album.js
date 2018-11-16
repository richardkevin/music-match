import React, { Component } from "react";

const corsAnywhere = "https://cors-anywhere.herokuapp.com";
const artistUrl = "https://api.deezer.com/artist";
const url = `${corsAnywhere}/${artistUrl}`;

class Album extends Component {
  state = { artist: null };

  async componentDidMount() {
    const id = 13;
    const response = await fetch(`${url}/${id}`);
    const artist = await response.json();
    this.setState({ artist });
  }

  render() {
    const { artist } = this.state;
    if (!artist) {
      return <div />
    }
    return <img src={artist.picture_medium} alt={artist.name}/>;
  }
}

export default Album;
