import React from "react";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Avatar } from "react-native-paper";
import { LikeIcon } from "../../../components/likes/like.component";
import { FontAwesome } from "@expo/vector-icons";
import {
  PostCard,
  PostCardCover,
  Content,
  Info,
  Section,
  SectionEnd,
  UserContainer,
  IconView,
} from "./post-info-card.styles";

export const PostInfoCard = ({ post = {} }) => {
  const {
    author = {},
    title = "What is Lorem Ipsum?",
    content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    photos = [
      "https://sm.ign.com/t/ign_tr/photo/default/eldenring-01-4k-1623357441326_39w4.1080.jpg",
    ],
    postDate = "25.02.2022 16.00",
    likeCount = "384",
    commentCount = "24",
  } = post;

  return (
    <PostCard elevation={5}>
      <UserContainer>
        <Avatar.Icon size={60} icon="human" />
        <Text>{author.name + " " + author.surname}</Text>
      </UserContainer>
      <PostCardCover key={title} source={{ uri: photos[0] }} />
      <Info>
        <Text>{title}</Text>
        <Content>{content}</Content>
        <Section>
          <Spacer position="right" size="large">
            <Text variant="label">{postDate}</Text>
          </Spacer>
          <SectionEnd>
            <IconView>
              <LikeIcon />
              <Text variant="label">{likeCount}</Text>
            </IconView>
            <Spacer position="left" size="large">
              <IconView>
                <FontAwesome name="commenting" size={24} />
                <Text variant="label">{commentCount}</Text>
              </IconView>
            </Spacer>
            <Spacer position="left" size="large">
              <IconView>
                <FontAwesome name="share" size={24} />
                <Text variant="label">Share</Text>
              </IconView>
            </Spacer>
          </SectionEnd>
        </Section>
      </Info>
    </PostCard>
  );
};
