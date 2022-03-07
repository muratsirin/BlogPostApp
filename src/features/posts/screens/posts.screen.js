import React, { useContext } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { PostInfoCard } from "../components/post-info-card.component";
import { Searchbar } from "../components/search-bar.component";
import { PostList } from "../components/post-list.styles";
import { PostsContext } from "../../../services/posts/posts.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ActivityIndicator, Colors } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const PostsScreen = ({ navigation }) => {
  const { posts, isLoading, error } = useContext(PostsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Searchbar />
      <PostList
        data={posts}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("post-detail", { post: item })}
            >
              <Spacer position="bottom" size="large">
                <PostInfoCard post={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.title}
      />
    </SafeArea>
  );
};
