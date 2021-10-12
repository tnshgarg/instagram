import React from "react";
import { View, Text, ScrollView } from "react-native";
import UserProfileImages from "../components/UserProfileImages";
import UserProfileMain from "../components/UserProfileMain";

export default function Profile() {
  return (
    <View style={{ marginTop: 25, backgroundColor: "white" }}>
      <ScrollView
        style={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        <ProfileHeader title="Tony Stark Profile" />
        <UserProfileMain title="Connect" iconName="" />
        <UserProfileImages />
      </ScrollView>
    </View>
  );
}

const ProfileHeader = (props) => (
  <View
    style={{
      height: 60,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      borderBottomColor: "#ddd",
      borderBottomWidth: 1,
    }}
  >
    <Text style={{ fontSize: 20, fontWeight: "bold" }}>{props.title}</Text>
  </View>
);
