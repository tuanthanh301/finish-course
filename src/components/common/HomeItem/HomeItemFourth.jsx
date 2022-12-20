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

const HomeItemFourth = () => {
  return (
    <HomeItemWrapper url="https://www.apple.com/v/home/aw/images/promos/apple-watch-series-8/promo_apple_watch_series_8__ch7rexplmihe_large.jpg">
      <SectionSmallTitle> <img src={getImagePath('appleIcon.svg')} alt=""/> WATCH</SectionSmallTitle>
      <SuperCharged color={colors.orange}>
        Series 8
      </SuperCharged>
      <SuperCharged>
      A healthy leap ahead.
      </SuperCharged>
      
      <CtaLink>
        <Dictional text="Learn more" />
        <Dictional text="Buy" />
      </CtaLink>
    </HomeItemWrapper>
  );
};

export default HomeItemFourth;
