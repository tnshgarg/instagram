import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Avatar, Button } from "react-native-elements";
import { Feather } from "react-native-vector-icons/";

export default function UserProfileMain(props) {
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "25%",
            paddingLeft: 10,
          }}
        >
          <Avatar
            containerStyle={{
              marginTop: 10,
              marginBottom: 0,
              paddingBottom: 0,
              elevation: 10,
            }}
            size={100}
            rounded
            source={require("../assets/tony.jpg")}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "75%",
          }}
        >
          <View
            style={{ marginLeft: 10, marginRight: 10, alignItems: "center" }}
          >
            <Text
              style={{
                fontSize: 21,
                fontWeight: "bold",
                marginTop: 8,
                color: "#e7e7e7",
              }}
            >
              170
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "normal",
                marginTop: 2,
                color: "#e7e7e7",
              }}
            >
              Posts
            </Text>
          </View>
          <View
            style={{ marginLeft: 10, marginRight: 10, alignItems: "center" }}
          >
            <Text
              style={{
                fontSize: 21,
                fontWeight: "bold",
                marginTop: 8,
                color: "#e7e7e7",
              }}
            >
              230
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "normal",
                marginTop: 2,
                color: "#e7e7e7",
              }}
            >
              Followers
            </Text>
          </View>

          {/* FOLLOWERS  */}

          <View style={{ marginLeft: 10, alignItems: "center" }}>
            <Text
              style={{
                fontSize: 21,
                fontWeight: "bold",
                marginTop: 8,
                color: "#e7e7e7",
              }}
            >
              891
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "normal",
                marginTop: 2,
                color: "#e7e7e7",
              }}
            >
              Following
            </Text>
          </View>
        </View>
      </View>

      {/* POSTS  */}
      <View>
        <View style={{ paddingLeft: 10, paddingTop: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#e7e7e7" }}>
            Tony Stark
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 3,
              fontWeight: "normal",
              color: "#e7e7e7",
            }}
          >
            tony_stark_01
          </Text>
          <Text
            style={{
              fontSize: 15,
              flex: 1,
              width: "100%",
              marginTop: 5,
              color: "#e7e7e7",
            }}
          >
            Hello everyone, my name is Tony stark and I am the founder of Stark
            International. I am the one who made Iron man suit and The Time
            Machine. Follow Me Now...
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          paddingHorizontal: 6,
        }}
      >
        <Button
          title="Edit Profile"
          buttonStyle={{
            backgroundColor: "#fd6220",
          }}
          containerStyle={{ width: "82%", marginTop: 10 }}
        />
        <Button
          icon={<Feather name="settings" color="white" size={22} />}
          buttonStyle={{ backgroundColor: "#fd6220" }}
          containerStyle={{ width: "11%", marginTop: 10 }}
        />
      </View>
    </ScrollView>
  );
}
