import React from "react";
import { colors } from "../../../common/colors";
import { getImagePath } from "../../../helpers/image";
import {
  CtaLink,
  HomeSectionWrapper,
} from "../../HomeSection/homeSectionStyle";
import Dictional from "../Dictional/Dictional";
import {
  BackgroundMini,
  HomeItemWrapper,
  SectionSmallTitle,
  SuperCharged,
} from "./homeItemStyle";

const HomeItemThird = () => {
  return (
    <HomeItemWrapper url="https://www.apple.com/v/home/aw/images/promos/apple-watch-ultra/promo_apple_watch_ultra__gnsqulvdc4a6_large.jpg">
      <SectionSmallTitle color={colors.black}> <img src={getImagePath('appleIconBlack.svg')} alt=""/> WATCH</SectionSmallTitle>
      <SuperCharged color={colors.orange} fontSize={"13px"}>
        ULTRA
      </SuperCharged>
      <SuperCharged color={colors.black}>
        Adventure awaits.
      </SuperCharged>
      
      <CtaLink>
        <Dictional text="Learn more" />
        <Dictional text="Buy" />
      </CtaLink>
    </HomeItemWrapper>
  );
};

export default HomeItemThird;
