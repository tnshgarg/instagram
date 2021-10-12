import React, { useLayoutEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  Keyboard,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Avatar } from "react-native-elements";
import * as firebase from "firebase";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Octicons, MaterialIcons } from "react-native-vector-icons";
import { db, auth } from "../firebase";
import * as DocumentPicker from "expo-document-picker";
import { usePreventScreenCapture } from "expo-screen-capture";

export default function Chat({ route, navigation }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  usePreventScreenCapture();

  const sendMessage = () => {
    db.collection("chats").doc(route.params.id).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      displayName: auth.currentUser.displayName,
      email: auth.currentUser.email,
    });
    setInput("");
  };

  const imageToSend = () => {
    const image = DocumentPicker.getDocumentAsync({ type: "image/*" });
  };

  useLayoutEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .doc(route.params.id)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    return unsubscribe;
  }, [route]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.chatName,
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar
            containerStyle={{ marginLeft: -20 }}
            rounded
            size={45}
            source={require("../assets/cap.jpg")}
          />
          <Text style={{ color: "white", fontSize: 16, marginLeft: 10 }}>
            {route.params.chatName}
          </Text>
        </View>
      ),
      headerRight: () => (
        <View>
          <TouchableOpacity>
            <Ionicons name="ios-videocam-outline" size={28} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#121212" }}>
      <KeyboardAvoidingView
        style={{ flex: 1, bottom: 0 }}
        behavior="padding"
        keyboardVerticalOffset={-350}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <ScrollView contentContainerStyle={{ paddingTop: 15 }}>
              {messages.map(({ id, data }) =>
                data.email === auth.currentUser.email ? (
                  <View
                    key={id}
                    style={{
                      padding: 15,
                      backgroundColor: "#FD6220",
                      alignSelf: "flex-end",
                      borderRadius: 20,
                      marginRight: 15,
                      marginBottom: 10,
                      maxWidth: "80%",
                      position: "relative",
                    }}
                  >
                    <Text style={{ color: "white" }}>{data.message}</Text>
                  </View>
                ) : (
                  <View
                    style={{
                      padding: 15,
                      backgroundColor: "#ececec",
                      alignSelf: "flex-start",
                      borderRadius: 20,
                      marginLeft: 15,
                      marginBottom: 10,
                      maxWidth: "80%",
                      position: "relative",
                    }}
                  >
                    <Text>{data.message}</Text>
                  </View>
                )
              )}
            </ScrollView>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                paddingHorizontal: 15,
                paddingBottom: 15,
                backgroundColor: "transparent",
              }}
            >
              <TouchableOpacity activeOpacity="0.5" style={{ marginRight: 8 }}>
                <Octicons name="smiley" size={24} color="#FD6220" />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity="0.5" onPress={imageToSend}>
                <Image
                  source={require("../assets/sendImage.png")}
                  style={{ width: 26, height: 26, resizeMode: "cover" }}
                />
              </TouchableOpacity>

              <TextInput
                value={input}
                onChangeText={(text) => setInput(text)}
                placeholder="Type Your Message"
                placeholderTextColor="lightgray"
                onSubmitEditing={sendMessage}
                style={{
                  bottom: 0,
                  height: 40,
                  flex: 1,
                  marginRight: 15,
                  marginLeft: 8,
                  backgroundColor: "#000",
                  padding: 10,
                  color: "white",
                  borderRadius: 30,
                }}
              />
              <TouchableOpacity activeOpacity="0.5" onPress={sendMessage}>
                <Ionicons name="send" size={24} color="#FD6220" />
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
