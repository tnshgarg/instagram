import React, { createRef, useEffect, useState } from "react";
import {
  View,
  StatusBar,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { waitAsync } from "react-native-actions-sheet/src/utils";
import Post from "../components/Post";
import Stories from "../components/Stories";
import * as ImagePicker from "expo-image-picker";
import { db } from "../firebase";
import { SpeedDial } from "react-native-elements";
import { Ionicons, MaterialIcons } from "react-native-vector-icons";
import MainHeader from "../components/MainHeader";
import * as Speech from "expo-speech";

export default function Home({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [image, setImage] = useState(null);
  const [thingToSay, setThingToSay] = useState(
    "Hey Qazi, You can watch videos, send messages, look at user profile or even post something on this app."
  );

  const speak = () => {
    Speech.speak(thingToSay, {
      language: "hi-IN",
      onDone: () => setThingToSay(""),
    });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    waitAsync(2000).then(() => setRefreshing(false));
  }, []);

  const PickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [5, 4],
      quality: 1,
    }).then(() =>
      navigation.navigate("CreatePostScreen", {
        src: image,
      })
    );
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    const result = await ImagePicker.launchCameraAsync();

    if (!result.cancelled) {
      setImage(result.uri);
      console.log(result);
    }
  };

  useEffect(() => {
    const unsubscribe = db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      setIsLoading(false);
      speak();
    });
    const effect = async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Permission denied!");
        }
      }
    };
    effect();

    return unsubscribe;
  }, []);

  return (
    <View style={{ height: "100%", width: "100%", backgroundColor: "#121212" }}>
      <StatusBar barStyle="light-content" />
      <MainHeader
        navigatetoNotifications={() => navigation.navigate("Notification")}
        navigatetoDiscover={() => navigation.navigate("Discover")}
      />

      {isLoading ? (
        <ActivityIndicator
          style={{
            height: "100%",
            marginBottom: 80,
          }}
          size="large"
          color="#fff"
        />
      ) : (
        <View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            style={{ marginBottom: 55 }}
          >
            <Stories />

            {posts.map(
              ({ id, data: { postDescription, srcImage, profileName } }) => (
                <Post
                  id={id}
                  key={id}
                  desc={postDescription}
                  postImage={srcImage}
                  profileName={profileName}
                />
              )
            )}
          </ScrollView>
          <StatusBar barStyle="light-content" />
          <SpeedDial
            isOpen={open}
            icon={<Ionicons name="add" size={26} color="white" />}
            openIcon={{ name: "close", color: "#fff" }}
            onOpen={() => setOpen(!open)}
            onClose={() => setOpen(!open)}
            color="#FD6220"
            style={{ marginBottom: 55 }}
          >
            <SpeedDial.Action
              icon={<Ionicons name="text" size={20} color="white" />}
              title="Write a post"
              color="#1da1f0"
              onPress={() => {
                navigation.navigate("CreatePostScreen");
              }}
            />
            <SpeedDial.Action
              icon={<Ionicons name="ios-camera" size={20} color="white" />}
              title="Open Camera"
              color="#1da1f0"
              onPress={openCamera}
            />
            <SpeedDial.Action
              icon={
                <MaterialIcons
                  name="drive-file-move-outline"
                  size={20}
                  color="white"
                />
              }
              title="Upload from device"
              color="#1da1f0"
              onPress={PickImage}
            />
          </SpeedDial>
        </View>
      )}
    </View>
  );
}
