import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "react-native-vector-icons";

export default function Search() {
  return (
    <View style={{ backgroundColor: "#121212", height: "100%", width: "100%" }}>
      <View
        style={{
          padding: 10,
          backgroundColor: "#000",
          margin: 10,
          borderRadius: 30,
          borderWidth: 1,
          borderColor: "#000",
        }}
      >
        <TextInput
          placeholder="Find Your Buddies"
          placeholderTextColor="#e7e7e7"
          style={{ fontSize: 15, color: "white", paddingHorizontal: 5 }}
        />
      </View>
    </View>
  );
}
