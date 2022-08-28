import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";

export const SafeArea = styled(SafeAreaView)`
  ${StatusBar.currentHight && `margin-top: ${StatusBar.currentHight}2px`};
`;
