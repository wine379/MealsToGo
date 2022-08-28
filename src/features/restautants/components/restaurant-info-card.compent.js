import React from "react";
import { SvgXml } from "react-native-svg";
import start from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  Icon,
  Info,
  Rating,
  RestaurantCard,
  RestaurantCardAddress,
  RestaurantCardCover,
  Section,
  SectionEnd,
} from "../components/restaurant-info-card.styles";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2021/03/Jakub-Kapusnak_avatar-44x44.jpg/",
      "https://www.foodiesfeed.com/wp-content/uploads/2019/03/girl-having-a-healthy-purple-smoothie-1024x683.jpg.webp",
    ],
    address = "Crossroads Mall, Lilongwe, Malawi",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[1] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={start} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position={"left"} size={"large"}>
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position={"left"} size={"large"}>
              <Icon source={{ url: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>

        <RestaurantCardAddress>{address}</RestaurantCardAddress>
      </Info>
    </RestaurantCard>
  );
};
export default RestaurantInfoCard;
