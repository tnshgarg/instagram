import React from "react";
import { View, Text, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { Ionicons } from "react-native-vector-icons";
import { HeaderBackButton } from "react-navigation-stack";
import { db } from "../firebase";

export default function CreateChat({ navigation }) {
  const [chatName, setChatName] = React.useState("");

  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: chatName,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => alert(error));
  };

  return (
    <>
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 40,
          backgroundColor: "#121212",
          height: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            backgroundColor: "black",
            alignItems: "baseline",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <TextInput
            placeholder="Enter Friend Name"
            placeholderTextColor="white"
            autoFocus
            value={chatName}
            onChangeText={(text) => setChatName(text)}
            style={{ color: "white", width: "100%" }}
            numberOfLines={1}
            onSubmitEditing={createChat}
          />
        </View>
        <Button
          title="Create Chat"
          containerStyle={{ marginTop: 50 }}
          icon={
            <Ionicons
              name="paper-plane"
              color="white"
              size={18}
              style={{ marginRight: 5 }}
            />
          }
          onPress={createChat}
        />
      </View>
    </>
  );
}
