//Import the library to create the components
import React from "react";
// import ReactNative from "react-native";
import {Text, View, AppRegistry} from "react-native";
import Header from "./src/components/header"
import AlbumList from "./src/components/albumList"
//Create a component : which returns some JSX(Javascript XML)

// const App = () => {
//   return (
//     <Text>Some Text Here</Text>
//   );
// };

const App = () => (
  <View>
    <Header HeaderText = {"Albums"} />
    <AlbumList />
  </View>
);


//Render the component to the device
AppRegistry.registerComponent("albums", () => App);
