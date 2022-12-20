import React from "react";
import Dictional from "../common/Dictional/Dictional";
import {
  GivGift,
  GivNow,
  HomeHolidaySection,
  HomeHolidayWrapper,
} from "./homeHolidayStyle";

const HomeHoliday = () => {
  return (
    <HomeHolidayWrapper>
      <video
        autoPlay
        muted
        playsInline
        src="https://www.apple.com/105/media/us/home/2022/85449b20-a1fc-4234-ab63-32e595b20f2a/anim/memoji-1/largetall_2x.mp4"
      />
      <HomeHolidaySection>
        <GivNow>Give WOW.</GivNow>
        <GivGift>
          This holiday season, find the perfect gift for everyone on your list.
        </GivGift>
        <Dictional text="Shop the gift guide" />
      </HomeHolidaySection>
    </HomeHolidayWrapper>
  );
};

export default HomeHoliday;
