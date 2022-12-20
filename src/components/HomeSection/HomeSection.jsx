import React from "react";
import Dictional from "../common/Dictional/Dictional";
import {
  CtaLink,
  HomeSectionWrapper,
  SectionTitle,
  SubHead,
} from "./homeSectionStyle";

const HomeSection = () => {
  return (
    <HomeSectionWrapper url="https://www.apple.com/v/home/aw/images/heroes/iphone-14/hero_iphone14__fjmsqstr1ceq_largetall.jpg">
      <SectionTitle>iPhone 14</SectionTitle>
      <SubHead>Big and bigger</SubHead>
      <CtaLink>
        <Dictional text="Learn more" />
        <Dictional text="Buy" />
      </CtaLink>
    </HomeSectionWrapper>
  );
};

export default HomeSection;
