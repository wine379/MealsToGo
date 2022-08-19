import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardTitle = styled.Text`
  padding: 16px;
  color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2021/03/Jakub-Kapusnak_avatar-44x44.jpg/",
      "https://www.foodiesfeed.com/wp-content/uploads/2019/03/girl-having-a-healthy-purple-smoothie-1024x683.jpg.webp",
    ],
    address = "Crossroads Mall, Lilongwe, Malawi",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[1] }} />
      <RestaurantCardTitle>{name}</RestaurantCardTitle>
    </RestaurantCard>
  );
};
export default RestaurantInfoCard;
