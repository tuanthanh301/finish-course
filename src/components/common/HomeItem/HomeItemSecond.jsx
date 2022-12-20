import React from "react";
import { colors } from "../../../common/colors";
import { CtaLink } from "../../HomeSection/homeSectionStyle";
import Dictional from "../Dictional/Dictional";
import {
  BackgroundMini,
  HomeItemWrapper,
  SectionSmallTitle,
  SuperCharged,
} from "./homeItemStyle";

const HomeItemSecond = () => {
  return (
    <HomeItemWrapper url="https://www.apple.com/v/home/aw/images/promos/apple-tv-4k/promo_tv4k__d33vaocbii82_large.jpg">
      <SectionSmallTitle color={colors.black}>
        <img src="https://www.apple.com/v/home/aw/images/logos/apple-tv-4k/promo_tv4k_logo__5m5umvk10duu_large.png" alt=""/>
      </SectionSmallTitle>
      <SuperCharged color={colors.black}>The Apple experience.</SuperCharged>
      <SuperCharged color={colors.black}>
        Cinematic in every sense.
      </SuperCharged>
      <CtaLink>
        <Dictional text="Learn more" />
        <Dictional text="Buy" />
      </CtaLink>
    </HomeItemWrapper>
  );
};

export default HomeItemSecond;
