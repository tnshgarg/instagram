import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Image, StatusBar } from "react-native";
import { Button } from "react-native-elements";
import { auth } from "../firebase";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log(authUser.displayName);
      if (authUser) {
        navigation.replace("HomeStackAuth", {
          profileName: authUser.displayName,
        });
      }
    });

    return unsubscribe;
  }, []);

  const login = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        paddingTop: "30%",
        backgroundColor: "#121212",
      }}
    >
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          style={{ width: 125, height: 125, resizeMode: "contain" }}
          source={require("../assets/logoHeader.png")}
        />
        <Text style={{ color: "white", fontSize: 17, marginTop: 10 }}>
          Find Your Lovely Buddies Online
        </Text>

        <TextInput
          style={{
            color: "white",
            marginBottom: 20,
            borderBottomWidth: 1,
            borderBottomColor: "white",
            height: 70,
            width: "80%",
          }}
          value={email}
          onChangeText={(emailChange) => setEmail(emailChange)}
          placeholderTextColor="white"
          placeholder="Enter Email"
          keyboardType="email-address"
        />
        <TextInput
          style={{
            color: "white",
            marginBottom: 20,
            borderBottomWidth: 1,
            borderBottomColor: "white",
            height: 70,
            width: "80%",
          }}
          value={password}
          onChangeText={(passwordChange) => setPassword(passwordChange)}
          placeholderTextColor="white"
          secureTextEntry={true}
          placeholder="Create Password"
        />
        <Button
          title="Sign In"
          containerStyle={{ width: "80%", marginTop: 20 }}
          buttonStyle={{
            backgroundColor: "#FD6220",
            height: 70,
            borderRadius: 10,
          }}
          onPress={login}
        />
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={{ color: "white", fontSize: 15 }}>
            Create an account ?{"  "}
          </Text>
          <Text
            style={{ color: "#FD6220", fontSize: 15 }}
            onPress={() => navigation.navigate("Register")}
          >
            Sign up
          </Text>
        </View>
      </View>
      <StatusBar barStyle="light-content" />
    </View>
  );
}
