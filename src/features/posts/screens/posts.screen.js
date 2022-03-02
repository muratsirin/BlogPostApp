import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { PostInfoCard } from "../components/post-info-card.component";

export const PostsScreen = () => {
  return (
    <SafeArea>
      <PostInfoCard />
    </SafeArea>
  );
};
