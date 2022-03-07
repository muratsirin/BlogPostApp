import React from "react";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Avatar } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { LikeIcon } from "../../../components/likes/like.component";
import { View } from "react-native";
import {
  PostDetailCard,
  PostDetailCardCover,
  UserContainer,
  PostDetailInfo,
  Section,
  SectionSocial,
  IconView,
  Content,
  PostDate,
  SectionEnd,
} from "./post-detail-info-card.styles";

export const PostDetailInfoCard = ({ post = {} }) => {
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
    <PostDetailCard elevation={5}>
      <UserContainer>
        <Avatar.Icon size={40} icon="human" />
        <Spacer position="left" size="medium">
          <View>
            <Text>{author.name + " " + author.surname}</Text>
            <Text variant="label">Istanbul</Text>
          </View>
        </Spacer>
        <SectionEnd>
          <PostDate variant="label">{postDate}</PostDate>
        </SectionEnd>
      </UserContainer>
      <PostDetailCardCover key={title} source={{ uri: photos[0] }} />
      <PostDetailInfo>
        <Text>{title}</Text>
        <Content>{content}</Content>
        <Section>
          <SectionSocial>
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
          </SectionSocial>
        </Section>
      </PostDetailInfo>
    </PostDetailCard>
  );
};
