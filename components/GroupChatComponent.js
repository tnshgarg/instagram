import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function GroupChatComponent() {
  return (
    <>
      <View
        style={{
          height: 200,
          width: "100%",
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity style={{ width: "47%", height: "100%" }}>
          <Image
            style={{
              height: "85%",
              width: "100%",
              resizeMode: "cover",
              borderRadius: 30,
            }}
            source={require("../assets/cap.jpg")}
          />
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 2,
              height: "15%",
              paddingVertical: 5,
            }}
          >
            <Text
              style={{ color: "#f5f5f5", fontSize: 15, fontFamily: "serif" }}
            >
              Avengers
            </Text>
            <Text
              style={{ color: "#f5f5f5", fontSize: 12, fontFamily: "serif" }}
            >
              15 members
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: 200,
          marginTop: 20,
          width: "100%",
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity style={{ width: "47%", height: "100%" }}>
          <Image
            style={{
              height: "85%",
              width: "100%",
              resizeMode: "cover",
              borderRadius: 30,
            }}
            source={require("../assets/cap.jpg")}
          />
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 2,
              height: "15%",
              paddingVertical: 5,
            }}
          >
            <Text
              style={{ color: "#f5f5f5", fontSize: 15, fontFamily: "serif" }}
            >
              Avengers
            </Text>
            <Text
              style={{ color: "#f5f5f5", fontSize: 12, fontFamily: "serif" }}
            >
              15 members
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: 200,
          width: "100%",
          marginTop: 20,
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity style={{ width: "47%", height: "100%" }}>
          <Image
            style={{
              height: "85%",
              width: "100%",
              resizeMode: "cover",
              borderRadius: 30,
            }}
            source={require("../assets/cap.jpg")}
          />
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 2,
              height: "15%",
              paddingVertical: 5,
            }}
          >
            <Text
              style={{ color: "#f5f5f5", fontSize: 15, fontFamily: "serif" }}
            >
              Avengers
            </Text>
            <Text
              style={{ color: "#f5f5f5", fontSize: 12, fontFamily: "serif" }}
            >
              15 members
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}
