import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { PostsScreen } from "../../features/posts/screens/posts.screen";
import { PostDetailScreen } from "../../features/posts/screens/post-detail.screen";

const PostsStack = createStackNavigator();

const screenOptions = () => {
  return {
    headerShown: false,
    presentation: "modal",
  };
};

export const PostsNavigator = () => {
  return (
    <PostsStack.Navigator screenOptions={screenOptions}>
      <PostsStack.Screen name="posts" component={PostsScreen} />
      <PostsStack.Screen name="post-detail" component={PostDetailScreen} />
    </PostsStack.Navigator>
  );
};
