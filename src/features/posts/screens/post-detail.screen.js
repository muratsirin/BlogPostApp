import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { PostDetailInfoCard } from "../components/post-detail-info-card.component";
import { ScrollView } from "react-native";

export const PostDetailScreen = ({ route }) => {
  const { post } = route.params;
  return (
    <SafeArea>
      <ScrollView>
        <PostDetailInfoCard post={post} />
      </ScrollView>
    </SafeArea>
  );
};
