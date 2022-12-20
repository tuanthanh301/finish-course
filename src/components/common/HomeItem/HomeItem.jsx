import React from "react";
import { CtaLink } from "../../HomeSection/homeSectionStyle";
import Dictional from "../Dictional/Dictional";
import {
  BackgroundMini,
  HomeItemWrapper,
  SectionSmallTitle,
  SuperCharged,
} from "./homeItemStyle";

const HomeItem = () => {
  return (
    <HomeItemWrapper url="https://www.apple.com/v/home/aw/images/promos/ipad-pro/promo_ipadpro_order__upw04aj7i2qe_large.jpg">
      <SectionSmallTitle>iPad Pro</SectionSmallTitle>
      <SuperCharged>
        Supercharged by
        <img
          src="https://www.apple.com/v/home/aw/images/logos/ipad-pro/promo_m2_chip__enw2kz91lsuq_large.png"
          alt=""
        />
      </SuperCharged>
      <CtaLink>
        <Dictional text="Learn more" />
        <Dictional text="Buy" />
      </CtaLink>
    </HomeItemWrapper>
  );
};

export default HomeItem;
