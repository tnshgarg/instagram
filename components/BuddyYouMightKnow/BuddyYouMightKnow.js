import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Avatar, Button } from "react-native-elements";
import { Feather } from "react-native-vector-icons/";
import UserProfileImages from "../UserProfileImages";

export default function UserProfileMain(props) {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Image
        source={require("../../assets/cover.jpg")}
        style={{
          width: "100%",
          height: 200,
          overlayColor: "black",
          opacity: 0.95,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          position: "relative",
          top: -50,
          left: 20,
          // height: 40,
          width: "40%",
        }}
      >
        <Avatar
          containerStyle={{
            marginTop: 10,
            marginBottom: 0,
            paddingBottom: 0,
            borderColor: "#0a87fa",
            borderWidth: 4,
            width: "60%",
          }}
          size={100}
          rounded
          source={require("../../assets/tony.jpg")}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          position: "relative",
          top: -100,
          left: 140,
          justifyContent: "space-between",
          width: "60%",
        }}
      >
        <View style={{ marginLeft: 10, marginRight: 10, alignItems: "center" }}>
          <Text style={{ fontSize: 21, fontWeight: "bold", marginTop: 8 }}>
            170
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "normal", marginTop: 2 }}>
            Posts
          </Text>
        </View>

        {/* FOLLOWERS  */}

        <View style={{ marginLeft: 10, alignItems: "center" }}>
          <Text style={{ fontSize: 21, fontWeight: "bold", marginTop: 8 }}>
            891
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "normal", marginTop: 2 }}>
            Followers
          </Text>
        </View>

        {/* FOLLOWING */}

        <View style={{ marginLeft: 10, alignItems: "center" }}>
          <Text style={{ fontSize: 21, fontWeight: "bold", marginTop: 8 }}>
            23
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "normal", marginTop: 2 }}>
            Following
          </Text>
        </View>
      </View>

      {/* POSTS  */}

      <UserProfileInfo />
      <ActionButtons title={props.title} iconName={props.iconName} />
      <UserProfileImages />
    </ScrollView>
  );
}

const UserProfileInfo = () => (
  <View style={{ marginLeft: 20, marginTop: -100 }}>
    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Tony Stark</Text>
    <Text
      style={{
        fontSize: 14,
        marginTop: 3,
        fontWeight: "normal",
        color: "gray",
      }}
    >
      tony_stark_01
    </Text>
    <Text style={{ fontSize: 15, width: "90%", marginTop: 5 }}>
      Hello everyone, my name is Tony stark and I am the founder of Stark
      International. I am the one who made Iron man suit and The Time Machine.
      Follow Me Now...
    </Text>
  </View>
);

const ActionButtons = (props) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      marginTop: 5,
      width: "92%",
      marginLeft: 8,
    }}
  >
    <Button
      title={props.title}
      containerStyle={{
        marginLeft: 5,
        marginTop: 10,
        width: "43%",
        height: 35,
        color: "white",
        justifyContent: "center",
        borderRadius: 5,
      }}
      icon={
        <>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Connect
          </Text>
          <Feather
            name={props.iconName}
            size={24}
            style={{ marginRight: 10 }}
          />
        </>
      }
    />
    <Button
      title={props.title}
      containerStyle={{
        marginLeft: 5,
        marginTop: 10,
        width: "43%",
        backgroundColor: "#ddd",
        height: 35,
        color: "black",
        justifyContent: "center",
        borderRadius: 5,
      }}
      buttonStyle={{ color: "black", backgroundColor: "#ddd" }}
      titleStyle={{ color: "black" }}
      icon={
        <>
          <Text
            style={{
              color: "black",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Message
          </Text>
          <Feather
            name={props.iconName}
            size={24}
            style={{ marginRight: 10 }}
          />
        </>
      }
    />
    <Button
      containerStyle={{
        marginTop: 10,
        width: "13%",
        height: 35,
        justifyContent: "center",
        marginLeft: 5,
      }}
      icon={
        <Feather name="more-horizontal" style={{ color: "white" }} size={30} />
      }
    />
  </View>
);
