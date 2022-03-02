import styled from "styled-components";
import { Card } from "react-native-paper";

export const PostCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const PostCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[1]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Content = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Section = styled.View`
  padding-top: ${(props) => props.theme.space[3]};
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const UserContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
  align-items: center;
`;

export const IconView = styled.View`
  align-items: center;
`;
