import React, { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Button } from "react-native-elements";
import { Ionicons } from "react-native-vector-icons";
import { auth, db } from "../firebase";

export default function CreatePost({ navigation }) {
  const [postDescription, setPostDescription] = React.useState("");
  const [profileName, setProfileName] = React.useState("Tanish garg");

  const getProfileName = () => {
    setProfileName(props.accountName);
  };

  const createPost = async () => {
    await db
      .collection("posts")
      .add({
        postDescription: postDescription,
        profileName: profileName,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => alert(error));
  };

  // const { src } = route.params;

  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingTop: 10,
        backgroundColor: "#202025",
        height: "100%",
      }}
    >
      <View
        style={{
          height: 200,
          width: "100%",
          backgroundColor: "black",
          alignItems: "baseline",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <TextInput
          placeholder="Enter Some Post Description"
          placeholderTextColor="white"
          autoFocus
          value={postDescription}
          onChangeText={(desc) => setPostDescription(desc)}
          style={{ color: "white" }}
          multiline
          onSubmitEditing={createPost}
        />
      </View>

      {/* <Image
        source={{ uri: src }}
        style={{
          width: "100%",
          height: 100,
          marginTop: 20,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      /> */}

      <Button
        title="Post"
        containerStyle={{ marginTop: 50 }}
        icon={
          <Ionicons
            name="paper-plane"
            color="white"
            size={18}
            style={{ marginRight: 5 }}
          />
        }
        onPress={createPost} //createpost
      />
    </View>
  );
}
