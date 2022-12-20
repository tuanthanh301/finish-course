import React from "react";
import HomeItem from "../common/HomeItem/HomeItem";
import HomeItemFourth from "../common/HomeItem/HomeItemFourth";
import HomeItemSecond from "../common/HomeItem/HomeItemSecond";
import HomeItemThird from "../common/HomeItem/HomeItemThird";
import { HomeSmallGrid } from "./homeSmallStyle";

const HomeSmall = () => {
  return (
    <HomeSmallGrid>
      <HomeItem />
      <HomeItemSecond/>
      <HomeItemThird />
      <HomeItemFourth/>
      <HomeItem />
      <HomeItem />
    </HomeSmallGrid>
  );
};

export default HomeSmall;
