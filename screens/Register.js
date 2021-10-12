import React, { useState } from "react";
import { View, Text, TextInput, Image, StatusBar } from "react-native";
import { Button } from "react-native-elements";
import { auth } from "../firebase";

export default function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
        });
      })
      .catch((error) => alert(error.message));
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
        {/* <Text
          style={{
            color: "white",
            fontSize: 30,
            textAlign: "center",
          }}
        >
          Create An Account
        </Text> */}
        <Text style={{ color: "white", fontSize: 17, marginTop: 10 }}>
          Find Your Lovely Buddies Online
        </Text>

        <TextInput
          style={{
            color: "white",
            marginTop: 30,
            marginBottom: 20,
            borderBottomWidth: 1,
            borderBottomColor: "white",
            height: 70,
            width: "80%",
          }}
          value={name}
          onChangeText={(nameChange) => setName(nameChange)}
          placeholderTextColor="white"
          placeholder="Enter NickName"
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
          title="Create Account"
          containerStyle={{ width: "80%", marginTop: 20 }}
          onPress={register}
          buttonStyle={{
            backgroundColor: "#FD6220",
            height: 70,
            borderRadius: 10,
          }}
        />
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={{ color: "white", fontSize: 15 }}>
            Already a user ?{"  "}
          </Text>
          <Text
            style={{ color: "#FD6220", fontSize: 15 }}
            onPress={props.navigateToLogin}
          >
            Sign in
          </Text>
        </View>
      </View>
      <StatusBar barStyle="light-content" />
    </View>
  );
}
