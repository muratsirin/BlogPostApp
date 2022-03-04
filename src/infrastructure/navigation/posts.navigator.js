import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { PostsScreen } from "../../features/posts/screens/posts.screen";

const PostsStack = createStackNavigator();

const screenOptions = () => {
  return {
    ...TransitionPresets.ModalPresentationIOS,
    headerShown: false,
  };
};

export const PostsNavigator = () => {
  return (
    <PostsStack.Navigator screenOptions={screenOptions}>
      <PostsStack.Screen name="Posts" component={PostsScreen} />
    </PostsStack.Navigator>
  );
};
