import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HomeCaRouselWrapper } from "./homeCarouselStyle";
const HomeCarousel = () => {
  return (
    <HomeCaRouselWrapper>
      <Carousel autoPlay transitionTime="1000" interval="3000" infiniteLoop>
        <div>
          <img src="https://is5-ssl.mzstatic.com/image/thumb/C5JhYd-defJavY5dOrHcCQ/980x551.jpg" />
        </div>
        <div>
          <img src="https://is2-ssl.mzstatic.com/image/thumb/wM10NmHB17JwWQvqFr0Utw/980x551.jpg" />
        </div>
        <div>
          <img src="https://is3-ssl.mzstatic.com/image/thumb/CXnyehPcDHEauavhg0D79Q/980x551.jpg" />
        </div>
        <div>
          <img src="https://is5-ssl.mzstatic.com/image/thumb/xq9mcYu6NXUtGcDJMMfc5w/980x551.jpg" />
        </div>
        <div>
          <img src="https://is4-ssl.mzstatic.com/image/thumb/K6q9tJsR0LjvPxSdk9fRKw/980x551.jpg" />
        </div>
        <div>
          <img src="https://is4-ssl.mzstatic.com/image/thumb/Ayre02kzYy-UP8Sefqbmdg/980x551.jpg" />
        </div>
      </Carousel>
    </HomeCaRouselWrapper>
  );
};

export default HomeCarousel;
