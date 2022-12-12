import React from "react";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import HomeCard from "../../components/HomeSection/HomeCard";
import HomeHoliday from "../../components/HomeSection/HomeHoliday";
import HomeSection from "../../components/HomeSection/HomeSection";
import HomeSmall from "../../components/HomeSection/HomeSmall";

const HomePage = () => {
  return (
    <div>
      <HomeSection />
      <HomeHoliday />
      <HomeCard />
      <HomeSmall></HomeSmall>
      <HomeCarousel />
    </div>
  );
};

export default HomePage;
