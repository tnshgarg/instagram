import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons, AntDesign } from "react-native-vector-icons";

export default function MainHeader(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        paddingTop: 10,
        backgroundColor: "black",
        borderBottomColor: "#302f2f",
        borderBottomWidth: 1,
        backgroundColor: "#000",
      }}
    >
      <View>
        <TouchableOpacity
          style={{ marginTop: 0, marginLeft: 5 }}
          onPress={props.navigatetoDiscover}
        >
          <Ionicons name="planet-outline" size={26} color="#ffe" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <AntDesign name="instagram" size={28} color="white" />
      </View>
      <View>
        <TouchableOpacity
          style={{ marginTop: 0, marginRight: 5 }}
          onPress={props.navigatetoNotifications}
        >
          <Ionicons name="md-rocket-outline" size={26} color="#ffe" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
