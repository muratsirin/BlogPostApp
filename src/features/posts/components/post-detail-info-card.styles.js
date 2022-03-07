import styled from "styled-components";
import { Card } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";

export const PostDetailCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[2]};
`;

export const PostDetailCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[1]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const UserContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
  flex: 1;
  flex-direction: row;
`;

export const PostDetailInfo = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Section = styled.View`
  padding-top: ${(props) => props.theme.space[3]};
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const SectionSocial = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const SectionCenter = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

export const PostDate = styled(Text)`
  padding-top: ${(props) => props.theme.space[3]};
`;

export const IconView = styled.View`
  align-items: center;
`;
