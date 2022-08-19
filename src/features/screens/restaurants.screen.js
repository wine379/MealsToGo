import React from "react";
import { Text, SafeAreaView, View, StyleSheet, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../../components/restaurant-info-card.compent";
import styled from "styled-components";

const RestaurantSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHight && `margin-top: ${StatusBar.currentHight}px`};
`;

const SearchBarView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantInfoCardView = styled(View)`
  background-color: blue;
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsScreen = () => (
  <RestaurantSafeAreaView>
    <SearchBarView>
      <Searchbar />
    </SearchBarView>
    <RestaurantInfoCardView>
      <RestaurantInfoCard />
    </RestaurantInfoCardView>
  </RestaurantSafeAreaView>
);

export default RestaurantsScreen;
