import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../styles/albums.css";

import Sidebar from "../components/Sidebar";
import Album from "../components/Album";

class Albums extends React.Component {
  state = {
    albums: []
  };
  componentWillMount() {
    axios
      .get(`${process.env.REACT_APP_API}/albums`)
      .then(res => {
        this.setState({ albums: res.data });
      })
      .catch(err => {
        console.log({ err });
      });
  }
  render() {
    return (
      <div id="page">
        <Sidebar page="albums" />
        <div id="albums">
          {this.state.albums.map((album, i) => {
            return <Album key={i} album={this.state.albums[i]} />;
          })}
        </div>
      </div>
    );
  }
}

export default Albums;
