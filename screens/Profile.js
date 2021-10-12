import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import UserProfileImages from "../components/UserProfileImages";
import UserProfileMain from "../components/UserProfileMain";
import {
  Feather,
  Ionicons,
  MaterialIcons,
  FontAwesome5,
} from "react-native-vector-icons";
import { FAB, SpeedDial } from "react-native-elements";

export default function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <View style={{ backgroundColor: "#000" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <ProfileHeader title="Settings" iconName="settings" /> */}
        <UserProfileMain />
        <UserProfileImages />
      </ScrollView>
      <SpeedDial
        isOpen={open}
        icon={<Feather name="settings" size={24} color="white" />}
        openIcon={{ name: "close", color: "#fff" }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
        color="#FD6220"
      >
        <SpeedDial.Action
          icon={<FontAwesome5 name="user-cog" size={20} color="white" />}
          title="User Settings"
          color="#1da1f0"
        />
      </SpeedDial>
    </View>
  );
}
