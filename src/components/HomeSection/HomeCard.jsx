import React from "react";
import { getImagePath } from "../../helpers/image";
import Dictional from "../common/Dictional/Dictional";
import { CardTitle, OnlyCard, SubCard } from "./homeCardStyle";
import { CtaLink, HomeSectionWrapper } from "./homeSectionStyle";

const HomeCard = () => {
  return (
    <HomeSectionWrapper url="https://www.apple.com/v/home/aw/images/heroes/apple-card-december/hero__dvsxv8smkkgi_largetall.jpg">
      <CardTitle><img src={getImagePath('appleIcon.svg')} alt=""/> Card</CardTitle>
      <SubCard>
        Save 5% on Apple products with a new Apple Card through December 25.
      </SubCard>
      <OnlyCard>Only at Apple. Exclusions and terms apply.</OnlyCard>
      <CtaLink>
        <Dictional text="Learn more" />
        <Dictional text="Apply now" />
      </CtaLink>
    </HomeSectionWrapper>
  );
};

export default HomeCard;
