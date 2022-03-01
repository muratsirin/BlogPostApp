import { StatusBar } from "react-native";
import styled from "styled-component";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px `};
  background-color: white;
`;
