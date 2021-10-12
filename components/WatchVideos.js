import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";
import React, { createRef, useState } from "react";
import {
  View,
  Text,
  Image,
  Share,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import ActionSheet from "react-native-actions-sheet";
import { Avatar } from "react-native-elements";
import Orientation from "react-native-orientation";
import {
  AntDesign,
  MaterialCommunityIcons,
  Feather,
  Ionicons,
} from "react-native-vector-icons";

export default function WatchVideos(props) {
  const [isLiked, setIsLiked] = useState(false);

  const actionSheetRef = createRef();

  const [inputValue, setInputValue] = useState(props.actionMessage);

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const shareMessage = () => {
    Share.share({
      message: "Hello",
    })
      .then((result) => console.log(result))
      .catch((errorMsg) => console.log(errorMsg));
  };
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#121212",
        borderTopColor: "#000",
        borderTopWidth: 1,
      }}
    >
      <TouchableWithoutFeedback
        onPress={() =>
          status.isPlaying
            ? video.current.pauseAsync()
            : video.current.playAsync()
        }
      >
        <Video
          ref={video}
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          style={{ width: "100%", height: 400 }}
          useNativeControls
          isLooping
          resizeMode="cover"
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          rate={1.0}
          volume={1.0}
          onLoad={() => {
            video.current.getStatusAsync();
          }}
          positionMillis={1000}
          posterSource={{
            uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
          }}
        />
      </TouchableWithoutFeedback>
      {!status.isPlaying ? (
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        >
          <Ionicons name="md-play-circle-outline" size={70} color="white" />
        </TouchableOpacity>
      ) : null}

      <View style={{ padding: 5, flexDirection: "row", alignItems: "center" }}>
        <Avatar rounded size={60} source={require("../assets/cap.jpg")} />
        <View style={{ flex: 1 }}>
          <Text style={{ color: "white", fontSize: 16, marginLeft: 10 }}>
            Can I beat Minecraft while my 3 friends try to hunt me down.
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "gray", fontSize: 12, marginLeft: 10 }}>
              Paper News •
            </Text>
            <Text style={{ color: "gray", fontSize: 12, marginLeft: 5 }}>
              3.1k likes
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          paddingTop: 6,
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingBottom: 4,
          marginBottom: 6,
          borderTopColor: "#000",
          borderTopWidth: 1,
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
                height: "90%",
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
  );
}

{
  /* <VideoPlayer
  containerStyle={{ width: "100%", height: 350 }}
  videoProps={{
    shouldPlay: true,
    resizeMode: Video.RESIZE_MODE_CONTAIN,
    source: {
      uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
  }}
/> */
}
