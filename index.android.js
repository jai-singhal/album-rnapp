//Import the library to create the components
import React from "react";
// import ReactNative from "react-native";
import {Text, AppRegistry} from "react-native";
//Create a component : which returns some JSX(Javascript XML)

// const App = () => {
//   return (
//     <Text>Some Text Here</Text>
//   );
// };

const App = () => (
  <Text>Some Text Here</Text>
);


//Render the component to the device
AppRegistry.registerComponent("albums", () => App);
