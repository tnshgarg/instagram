import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Avatar } from "react-native-elements";

export default function Stories() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        width: "100%",
        paddingTop: 8,
        paddingLeft: 10,
        paddingBottom: 10,
        borderBottomColor: "#000",
        borderBottomWidth: 1,
        backgroundColor: "transparent",
      }}
    >
      <StoryView imageURL={require("../assets/tony.jpg")} />
      <StoryView imageURL={require("../assets/cap.jpg")} />
      <StoryView imageURL={require("../assets/hulk.jpg")} />
      <StoryView imageURL={require("../assets/spiderman.jpg")} />
      <StoryView imageURL={require("../assets/thor.jpg")} />
    </ScrollView>
  );
}

const StoryView = (props) => (
  <TouchableOpacity TouchableOpacity="0.8" style={{ marginRight: 10 }}>
    <Avatar
      containerStyle={{
        borderWidth: 4,
        borderColor: "#FD6220",
      }}
      size="large"
      rounded
      source={props.imageURL}
    />
  </TouchableOpacity>
);
