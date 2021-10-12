import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { waitAsync } from "react-native-actions-sheet/src/utils";
import { Avatar, ListItem, Button } from "react-native-elements";
import { HeaderBackButton } from "react-navigation-stack";
import { db } from "../firebase";
import { Ionicons } from "react-native-vector-icons";

export default function Message({ navigation }) {
  const [chats, setChats] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    waitAsync(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    const unsubscribe = db.collection("chats").onSnapshot((snapshot) => {
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <View style={{ backgroundColor: "black", marginBottom: 55 }}>
      <ListItem
        bottomDivider
        containerStyle={{
          paddingHorizontal: 10,
          paddingVertical: 8,
          backgroundColor: "#000",
          color: "white",
          borderBottomWidth: 3,
          borderBottomColor: "#000",
        }}
        onPress={() => navigation.navigate("CreateChat")}
      >
        <HeaderBackButton
          icon={<Ionicons name="chevron-back-outline" size={24} />}
          tintColor="white"
          onPress={() => navigation.goBack()}
        />
        <ListItem.Content
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginRight: 10,
          }}
        >
          <ListItem.Title
            style={{
              color: "white",
              fontSize: 18,
            }}
          >
            Your Chat
          </ListItem.Title>
        </ListItem.Content>
        <TouchableOpacity
          style={{ paddingRight: 10 }}
          onPress={() => navigation.navigate("CreateChat")}
        >
          <Ionicons name="ios-person-add" size={24} color="white" />
        </TouchableOpacity>
      </ListItem>
      {isLoading ? (
        <ActivityIndicator
          style={{
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          size="large"
          color="#fff"
        />
      ) : (
        <ScrollView
          style={{ height: "100%", backgroundColor: "#000" }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {chats.map(({ id, data }) => (
            <MessageComponent
              key={id}
              id={id}
              name={data.chatName}
              navigateToChatScreenStack={() =>
                navigation.navigate("ChatScreenStack", {
                  chatName: data.chatName,
                  id: id,
                })
              }
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const MessageComponent = (props) => {
  return (
    <View key={props.id} style={{ backgroundColor: "#121212" }}>
      <ListItem.Swipeable
        onPress={props.navigateToChatScreenStack}
        leftContent={
          <Button
            title="Info"
            icon={{ name: "info", color: "white" }}
            buttonStyle={{ minHeight: "100%", backgroundColor: "#FD6220" }}
          />
        }
        rightContent={
          <Button
            title="Delete"
            icon={{ name: "delete", color: "white" }}
            buttonStyle={{ minHeight: "100%", backgroundColor: "red" }}
          />
        }
        bottomDivider
        containerStyle={{
          paddingHorizontal: 10,
          paddingVertical: 8,
          backgroundColor: "#121212",
          color: "white",
          borderColor: "#000",
        }}
      >
        <Avatar size="medium" rounded source={require("../assets/tony.jpg")} />
        <ListItem.Content>
          <ListItem.Title style={{ color: "white" }}>
            {props.name}
          </ListItem.Title>
          <ListItem.Subtitle
            style={{ color: "#e7e7e7" }}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            We have got the infinity stones.
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem.Swipeable>
    </View>
  );
};
