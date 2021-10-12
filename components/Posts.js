import React from "react";
import { FlatList, ScrollView, View } from "react-native";
import { initialWindowMetrics } from "react-native-safe-area-context";
import { postData } from "./postData";
import PeopleYouMightKnow from "./PeopleYouMightKnow";
import PeopleYouMightKnowComponent from "./PeopleYouMightKnowComponent";
import Post from "./Post";

export default function Posts() {
  return (
    <View style={{ marginBottom: 110 }}>
      <FlatList
        data={postData}
        renderItem={({ item }) => (
          <View>
            <Post
              name={item.name}
              postDescription={item.postDescription}
              postImage={item.postImage}
              postContentImage={item.postImage}
            />
          </View>
        )}
      />
    </View>
  );
}
