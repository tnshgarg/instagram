import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Avatar, Button, ListItem } from "react-native-elements";

export default function Discover({ navigation }) {
  return (
    <View style={{ height: "100%", backgroundColor: "#121212" }}>
      <View style={{ marginbottom: 50 }}>
        <DiscoverComponent
          name="Join Group Chats"
          openNewScreen={() => navigation.navigate("Group Chat")}
          imageURI={require("../assets/people.png")}
        />
        <DiscoverComponent
          name="Find Your Crush"
          imageURI={require("../assets/love-birds.png")}
        />
        <DiscoverComponent
          name="Share Something"
          imageURI={require("../assets/shopping-online.png")}
        />
        <DiscoverComponent
          name="Follow your favorite creator"
          imageURI={require("../assets/influencer.png")}
        />
      </View>
      <View>
        <DiscoverComponent
          name="Account Settings"
          imageURI={require("../assets/admin.png")}
        />
      </View>
    </View>
  );
}

const DiscoverComponent = (props) => (
  <TouchableOpacity activeOpacity={0.6} onPress={props.openNewScreen}>
    <ListItem
      onPress={props.navigateToChatScreenStack}
      bottomDivider
      containerStyle={{
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: "#121212",
        color: "white",
        borderColor: "#000",
      }}
    >
      <Image
        style={{ width: 50, height: 50, resizeMode: "cover" }}
        source={props.imageURI}
      />
      <ListItem.Content>
        <ListItem.Title style={{ color: "white" }}>{props.name}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  </TouchableOpacity>
);
