//Import the library to create the components
import React, {Component} from "react";
// import ReactNative from "react-native";
import {Text, View} from "react-native";
import axios from "axios";

//Create a component : which returns some JSX(Javascript XML)
class AlbumList extends Component{
  state = {albums : []};

  componentWillMount(){
    axios.get("https://rallycoding.herokuapp.com/api/music_albums").
      then(response => this.setState({albums: response.data}))

  }

  render(){
    return (
      <View>
      <Text>Album List</Text>
      <Text>this.state</Text>
      </View>
    );
  }
}


//export the component
export default AlbumList;
