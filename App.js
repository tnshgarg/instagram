import * as React from "react";
import { StatusBar, View } from "react-native";
import Home from "./screens/Home";
import Search from "./screens/Search";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Notifications from "./screens/Notifications";
import Message from "./screens/Message";
import CreatePost from "./screens/CreatePost";
import { Ionicons } from "react-native-vector-icons";
import Profile from "./screens/Profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "./components/Chat";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Watch from "./screens/Watch";
import CreateChat from "./screens/CreateChat";
import { MaterialIcons } from "react-native-vector-icons";
import Discover from "./screens/Discover";
import Splash from "./screens/Splash";
import GroupChat from "./screens/GroupChat";

const HomeStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const MessageStack = createNativeStackNavigator();

function AuthStackScreen({ route }) {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
          animation: "fade",
        }}
      />
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false, animation: "fade" }}
      />
      <AuthStack.Screen
        name="HomeStackAuth"
        component={TabNavigator}
        options={{ headerShown: false, animation: "fade" }}
      />
    </AuthStack.Navigator>
  );
}

function MessageStackScreen() {
  return (
    <MessageStack.Navigator initialRouteName="Your Chat">
      <MessageStack.Screen
        options={{
          headerShown: false,
          animation: "fade",
        }}
        name="HomeScreenStack"
        component={Home}
      />
      <MessageStack.Screen
        name="Your Chat"
        component={Message}
        options={{
          headerShown: false,
          animation: "fade",
          headerStyle: { backgroundColor: "black" },
          headerTitleStyle: { color: "white", fontWeight: "bold" },
          headerTintColor: "white",
          headerTitleAlign: "center",
        }}
      />
      <MessageStack.Screen
        name="ChatScreenStack"
        component={Chat}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "black" },
          headerTitleStyle: { color: "white", fontWeight: "bold" },
          headerTintColor: "white",
          animation: "slide_from_right",
        }}
      />
      <MessageStack.Screen
        name="CreateChat"
        component={CreateChat}
        options={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          animation: "slide_from_right",
        }}
      />
    </MessageStack.Navigator>
  );
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{
          headerShown: false,
          animation: "fade",
        }}
        name="HomeScreenStack"
        component={Home}
      />

      <HomeStack.Screen
        name="CreatePostScreen"
        component={CreatePost}
        options={{
          headerTitle: "Create Post",
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          animation: "fade",
        }}
      />
      <HomeStack.Screen
        name="Notification"
        component={Notifications}
        options={{
          headerTitle: "Your Notifications",
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          animation: "slide_from_right",
        }}
      />
      <HomeStack.Screen
        name="Discover"
        component={Discover}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "black" },
          animation: "slide_from_left",
          headerTitleAlign: "center",
        }}
      />
      <HomeStack.Screen
        name="Group Chat"
        component={GroupChat}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "black" },
          animation: "slide_from_right",
          headerTitleAlign: "center",
        }}
      />
    </HomeStack.Navigator>
  );
}

function SearchScreen() {
  return (
    <View style={{ backgroundColor: "#121212" }}>
      <Search />
    </View>
  );
}

function RegisterScreen({ navigation }) {
  return (
    <View>
      <Register
        navigateToLogin={() => navigation.navigate("Login")}
        navigateToHomeScreen={() => navigation.navigate("HomeStackAuth")}
      />
    </View>
  );
}

function WatchScreen() {
  return (
    <View>
      <Watch />
    </View>
  );
}

function LoginScreen({ navigation }) {
  return (
    <View>
      <Login
        goToRegister={() => navigation.navigate("Register")}
        navigationToHomeScreen={() => navigation.navigate("HomeStackAuth")}
      />
    </View>
  );
}

function MessageScreen({ navigation }) {
  return (
    <View style={{ backgroundColor: "#121212" }}>
      <Message openChatPage={() => navigation.navigate("ChatScreenStack")} />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ backgroundColor: "#121212" }}>
      <Profile />
    </View>
  );
}

const Tab = createBottomTabNavigator();

const TabNavigator = ({ route }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#FD6220",
        inactiveTintColor: "#e7e7e7",
        keyboardHidesTabBar: true,
        backgroundColor: "transparent",
        style: {
          backgroundColor: "transparent",
          paddingHorizontal: 5,
          backgroundColor: "black",
          paddingVertical: 5,
          height: 50,
          borderTopColor: "black",
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "md-home" : "md-home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Watch") {
            return <MaterialIcons name="live-tv" size={28} color={color} />;
          } else if (route.name === "Message") {
            iconName = focused ? "ios-mail" : "ios-mail-unread-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={28} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{ animation: "fade" }}
      />
      <Tab.Screen
        name="Watch"
        component={WatchScreen}
        options={{ animation: "fade" }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ animation: "fade" }}
      />
      <Tab.Screen
        name="Message"
        component={MessageStackScreen}
        options={{ animation: "fade" }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ animation: "fade" }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <RootStack.Navigator initialRouteName={"Auth"}>
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="HomeScreenMain"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
