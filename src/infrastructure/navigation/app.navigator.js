import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostsNavigator } from "./posts.navigator";
import { PostsContextProvider } from "../../services/posts/posts.context";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Posts: "edit",
  "My Posts": "star",
  Settings: "gear",
};

const MyPosts = () => {
  return (
    <SafeArea>
      <Text>My Posts Screen</Text>
    </SafeArea>
  );
};

const Settings = () => {
  return (
    <SafeArea>
      <Text>Settings Screen</Text>
    </SafeArea>
  );
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <FontAwesome name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "#aa00de",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  };
};

export const AppNavigator = () => {
  return (
    <PostsContextProvider>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Posts" component={PostsNavigator} />
        <Tab.Screen name="My Posts" component={MyPosts} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </PostsContextProvider>
  );
};
