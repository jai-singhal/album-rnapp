//Import the library to create the components
import React, {Component} from "react";
// import ReactNative from "react-native";
import {Text, ScrollView} from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

//Create a component : which returns some JSX(Javascript XML)
class AlbumList extends Component{
  state = {albums : []};

  componentWillMount(){
    axios.get("https://rallycoding.herokuapp.com/api/music_albums").
      then(response => this.setState({albums: response.data}))

  }

  renderAlbums(){
    return this.state.albums.map(
      album => <AlbumDetail key = {album.title} album = {album} />
    )
  }

  render(){
    return (
      <ScrollView >
        { this.renderAlbums() }
      </ScrollView>
    );
  }
}


//export the component
export default AlbumList;
