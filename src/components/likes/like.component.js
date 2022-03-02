import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

const LikeButton = styled(TouchableOpacity)``;

export const LikeIcon = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <LikeButton
      onPress={() => (isLiked ? setIsLiked(false) : setIsLiked(true))}
    >
      <AntDesign name={isLiked ? "like1" : "like2"} size={24} />
    </LikeButton>
  );
};
