import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import Post from "../components/Post";
import WatchVideos from "../components/WatchVideos";
import { Ionicons } from "react-native-vector-icons";
import { waitAsync } from "react-native-actions-sheet/src/utils";

export default function ShortVideo() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    waitAsync(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={{ backgroundColor: "#000", height: "100%" }}>
      <WatchHeader />
      <ScrollView
        decelerationRate={0.1}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <WatchVideos />
        <WatchVideos />
        <WatchVideos />
        <WatchVideos />
      </ScrollView>
    </View>
  );
}

const WatchHeader = () => (
  <View
    style={{
      backgroundColor: "black",
      height: 50,
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
    }}
  >
    <TouchableOpacity
      style={{
        marginLeft: 12,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Ionicons name="add" size={26} color="white" />
    </TouchableOpacity>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
        }}
      >
        Watch
      </Text>
    </View>
    <TouchableOpacity
      style={{
        marginRight: 12,
        backgroundColor: "#302f2f",
        borderRadius: 25,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Ionicons name="search" color="white" size={20} />
    </TouchableOpacity>
  </View>
);
