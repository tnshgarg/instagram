import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Avatar, ListItem, Button } from "react-native-elements";

export default function NotificationsComponent() {
  return (
    <ListItem.Swipeable
      leftContent={
        <Button
          title="Info"
          icon={{ name: "info", color: "white" }}
          buttonStyle={{ minHeight: "100%" }}
        />
      }
      rightContent={
        <Button
          title="Delete"
          icon={{ name: "delete", color: "white" }}
          buttonStyle={{ minHeight: "100%", backgroundColor: "red" }}
        />
      }
      bottomDivider
      containerStyle={{
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: "#121212",
        color: "white",
        borderColor: "#000",
      }}
    >
      <Avatar
        containerStyle={{
          borderWidth: 3,
          borderColor: "#0a87fa",
        }}
        size="medium"
        rounded
        source={require("../assets/tony.jpg")}
      />
      <ListItem.Content>
        <ListItem.Title style={{ color: "white" }}>Tony Stark</ListItem.Title>
        <ListItem.Subtitle style={{ color: "#e7e7e7" }}>
          You have to get those infinity stones. Please get me all those.
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem.Swipeable>
  );
}
