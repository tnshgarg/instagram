import React from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import { Feather } from "react-native-vector-icons";

export default function PeopleYouMightKnow(props) {
  const [buttonTitle, setButtonTitle] = React.useState("Connect");

  return (
    <TouchableOpacity
      style={{
        height: 325,
        paddingTop: 9,
        paddingBottom: 9,
        width: 170,
        marginLeft: 10,
        backgroundColor: "#121212",
      }}
    >
      <View
        style={{
          height: "100%",
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
          backgroundColor: "#121212",
          width: "100%",
          padding: 0,
          borderWidth: 1,
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "70%",
            resizeMode: "cover",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
          source={require("../assets/tony.jpg")}
        />
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            marginRight: 5,
            fontSize: 16,
            height: "8%",
            color: "#e7e7e7",
            marginTop: "2%",
          }}
        >
          Harsh Goyal
        </Text>
        <Text
          style={{
            fontWeight: "normal",
            textAlign: "center",
            marginRight: 5,
            fontSize: 13,
            color: "#949299",
            height: "10%",
            marginTop: -3,
          }}
        >
          23 Common Buddies
        </Text>
        <Button
          title={buttonTitle}
          style={{
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            marginBottom: 0,
            height: "20%",
          }}
          color="#FD6220"
          onPress={() => setButtonTitle("Connected")}
        />
      </View>
    </TouchableOpacity>
  );
}
