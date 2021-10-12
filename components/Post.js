import React, { createRef, useContext, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Share,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Avatar } from "react-native-elements";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {
  AntDesign,
  MaterialCommunityIcons,
  Feather,
  Ionicons,
  Octicons,
} from "react-native-vector-icons";
import ActionSheet from "react-native-actions-sheet";
import { db, auth } from "../firebase";
import * as firebase from "firebase";

let lastTap;

export default function Post(props, { route }) {
  const [input, setInput] = useState("");
  const [comments, setComments] = useState([]);
  lastTap = null;
  const handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
      setIsLiked(!isLiked);
    } else {
      lastTap = now;
    }
  };

  const doComment = () => {
    db.collection("posts").doc(props.id).collection("comments").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      commentDesc: input,
      displayName: auth.currentUser.displayName,
      email: auth.currentUser.email,
    });
    setInput("");
  };

  useLayoutEffect(() => {
    const payload = db
      .collection("posts")
      .doc(props.id)
      .collection("comments")
      .onSnapshot((snapshot) =>
        setComments(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    return payload;
  }, [props]);

  const [isLiked, setIsLiked] = useState(false);

  const actionSheetRef = createRef();

  const [inputValue, setInputValue] = useState(props.actionMessage);

  const shareMessage = () => {
    //Here is the Share API
    Share.share({
      message: "Heello",
    })
      //after successful share return result
      .then((result) => console.log(result))
      //If any thing goes wrong it comes here
      .catch((errorMsg) => console.log(errorMsg));
  };

  const [postDescription, setPostDescription] = useState(
    "Hello Friends, My name is Tanish garg and I am newly joined on Buddy application. Can someone be my friend."
  );

  return (
    <TouchableWithoutFeedback
      onPress={handleDoubleTap}
      style={{
        padding: 10,
        paddingLeft: 15,
        borderTopColor: "#101000",
        borderTopWidth: 2,
        backgroundColor: "transparent",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <Avatar
            size="medium"
            rounded
            source={require("../assets/tony.jpg")}
          />
        </TouchableOpacity>
        <View style={{ marginLeft: 10, marginBottom: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
            {props.profileName}
          </Text>
          <Text
            style={{ fontSize: 14, fontWeight: "normal", color: "#e7e7e7" }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Delhi Public School, Kaithal
          </Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 5, marginVertical: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#e7e7e7" }}>
          {props.desc}
        </Text>
      </View>
      <TouchableOpacity>
        {props.postImage ? (
          <Image
            style={{
              height: 300,
              width: "100%",
              resizeMode: "cover",
              borderRadius: 10,
            }}
            source={{ uri: props.postImage }}
          />
        ) : null}
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 5,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5,
            }}
          >
            <Image
              source={require("../assets/love.png")}
              style={{ width: 18, height: 18, marginTop: 8 }}
            />
            <Text
              style={{
                fontSize: 13,
                fontWeight: "bold",
                marginTop: 3,
                marginLeft: 5,
                color: "#e7e7e7",
              }}
            >
              32
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "normal",
                marginLeft: 5,
                marginTop: 3,
                color: "#949298",
              }}
            >
              Liked by Cristiano and 31 others
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 5,
            }}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 13, color: "#e7e7e7" }}
            >
              8 comments
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            marginTop: 6,
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            paddingBottom: 4,
          }}
        >
          {isLiked ? (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => setIsLiked(!isLiked)}
            >
              <AntDesign name="like1" size={20} color="#0a87fa" />
              <Text style={{ marginLeft: 5, color: "#0a87fa" }}>Liked</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => setIsLiked(!isLiked)}
            >
              <AntDesign name="like2" size={20} color="#e7e7e7" />
              <Text style={{ marginLeft: 5, color: "#e7e7e7" }}>Like</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                actionSheetRef.current?.setModalVisible();
              }}
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="comment-outline"
                size={20}
                color="#e7e7e7"
              />
              <Text style={{ marginLeft: 5, color: "#e7e7e7" }}>Comment</Text>
            </TouchableOpacity>

            <ActionSheet
              openAnimationSpeed={15}
              bounceOnOpen="true"
              ref={actionSheetRef}
              closeAnimationDuration="500"
              elevation={3}
              keyboardDismissMode="interactive"
              containerStyle={{
                height: "100%",
                backgroundColor: "#121212",
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
              }}
            >
              <View
                style={{
                  width: "100%",
                  maxHeight: "75%",
                }}
              >
                <View
                  style={{
                    width: "100%",
                    alignItems: "center",
                    backgroundColor: "#121212",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: "bold",
                      marginVertical: 10,
                      color: "#e7e7e7",
                    }}
                  >
                    Comments
                  </Text>
                  <ScrollView
                    contentContainerStyle={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  ></ScrollView>
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
                    <TouchableOpacity
                      activeOpacity="0.5"
                      style={{ marginRight: 8 }}
                    >
                      <Octicons name="smiley" size={24} color="#FD6220" />
                    </TouchableOpacity>

                    <TextInput
                      value={input}
                      onChangeText={(text) => setInput(text)}
                      placeholder="Type Your Message"
                      placeholderTextColor="lightgray"
                      keyboardAppearance="dark"
                      keyboardType="twitter"
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
                    <TouchableOpacity activeOpacity="0.5" onPress={doComment}>
                      <Ionicons name="send" size={24} color="#FD6220" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ActionSheet>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={shareMessage}
          >
            <Feather name="share" size={20} color="#e7e7e7" />
            <Text style={{ marginLeft: 5, color: "#e7e7e7" }}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
