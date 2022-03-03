import React from "react";
import { Searchbar as Search } from "react-native-paper";
import styled from "styled-components";

const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Searchbar = () => {
  return (
    <SearchBarContainer>
      <Search />
    </SearchBarContainer>
  );
};
