//Import the library to create the components
import React from "react";
// import ReactNative from "react-native";
import {Text, View} from "react-native";

//Create a component : which returns some JSX(Javascript XML)

const Header = (props) => {
  const {textStyle, viewStyle} = Styles;
  return (
    <View style = {viewStyle}>
    <Text style = {textStyle}>{props.HeaderText}</Text>
    </View>
  );

};

const Styles = {
  textStyle : {
    fontSize: 30
  },
  viewStyle : {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  }

};
//export the component
export default Header;
