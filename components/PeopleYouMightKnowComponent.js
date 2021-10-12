import React from "react";
import { View, Text, ScrollView } from "react-native";
import PeopleYouMightKnow from "./PeopleYouMightKnow";

export default function PeopleYouMightKnowComponent(props) {
  return (
    <View
      style={{
        backgroundColor: "#121212",
        borderTopWidth: 1,
        borderTopColor: "#000",
        width: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: 5,
          color: "#e7e7e7",
        }}
      >
        People You Might Know
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <PeopleYouMightKnow />
        <PeopleYouMightKnow />
        <PeopleYouMightKnow />
        <PeopleYouMightKnow />
        <PeopleYouMightKnow />
        <PeopleYouMightKnow />
        <PeopleYouMightKnow />
        <PeopleYouMightKnow />
        <PeopleYouMightKnow />
      </ScrollView>
    </View>
  );
}
