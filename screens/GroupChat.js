import React from "react";
import { View, Text } from "react-native";
import GroupChatComponent from "../components/GroupChatComponent";

export default function GroupChat() {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#121212",
        paddingTop: 10,
      }}
    >
      <GroupChatComponent />
    </View>
  );
}
