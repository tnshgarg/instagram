import { Video } from "expo-av";
import React, { useEffect } from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { auth } from "../firebase";

export default function Splash({ navigation }) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log(authUser.displayName);
      if (authUser) {
        navigation.replace("HomeScreenMain");
      } else {
        navigation.replace("Auth");
      }
    });

    return unsubscribe;
  }, []);
  return (
    <View style={{ width: "100%", height: "100%" }}>
      {/* <Image
        source={require("../assets/splash.png")}
        style={{ width: "100%", height: "100%", resizeMode: "cover" }}
      /> */}
      <Video
        source={require("../assets/splash.mp4")}
        style={{ width: "100%", height: "100%" }}
        shouldPlay={true}
        resizeMode="cover"
      />
      <StatusBar barStyle="light-content" />
    </View>
  );
}
