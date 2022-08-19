import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components";

const CardTitle = styled.Text`
  padding: 16px;
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
    <Card elevation={5} style={styles.card}>
      <Card.Cover source={{ uri: photos[1] }} style={styles.cover} />
      <CardTitle>{name}</CardTitle>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
});

export default RestaurantInfoCard;
