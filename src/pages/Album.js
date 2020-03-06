import React from "react";
import axios from "axios";

import "../styles/albums.css";
import "../styles/songs.css";

import Sidebar from "../components/Sidebar";
import Song from "../components/Song";

class Album extends React.Component {
  state = {
    album: {},
    songs: []
  };
  componentWillMount() {
    console.log(this.props);
    axios
      .get(`${process.env.REACT_APP_API}/albums/${this.props.match.params.id}`)
      .then(res => {
        console.log(res.data[0]);
        this.setState({
          album: res.data[0]
        });
      })
      .catch(err => {
        console.log({ err });
      });
    axios
      .get("")
      .then(res => {
        this.setState({
          songs: res.data
        });
      })
      .catch(err => {
        console.log({ err });
      });
  }
  render() {
    return (
      <div id="page">
        <Sidebar page="albums" />
        <div id="album">
          <div className="album">
            <div
              className="cover"
              style={{ backgroundImage: `url('${this.state.album.cover}')` }}
            ></div>
            <div className="info">
              <h2>{this.state.album.name}</h2>
              <span>{this.state.album.artist}</span>
            </div>
          </div>
          <div id="songs">
            <table>{/* songs */}</table>
          </div>
        </div>
      </div>
    );
  }
}

export default Album;
