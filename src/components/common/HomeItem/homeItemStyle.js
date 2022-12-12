import styled from "styled-components";
import { colors } from "../../../common/colors";

export const HomeItemWrapper = styled.div`
  width: 100%;
  height: 580px;
  /* background-image: url('https://www.apple.com/v/home/aw/images/heroes/iphone-14/hero_iphone14__fjmsqstr1ceq_largetall.jpg'); */
  background-image: ${(props) => `url(${props?.url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;

`;
export const SectionSmallTitle = styled.h4`
  font-size: 40px;
  font-weight: 600;
  margin-top: 53px;
  color: ${(props) => props?.color || colors.white};
  img{
    width: auto;
    height: 40px;
    margin-right: -9px;
  }
`;
export const SuperCharged = styled.div`
  font-size :${(props) => props?.fontSize || "21px"};;
  font-weight: 400;
  color: ${(props) => props?.color || colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BackgroundMini = styled.div`
  background-image: url("https://www.apple.com/v/home/aw/images/logos/ipad-pro/promo_m2_chip__enw2kz91lsuq_large.png");
  background-position: center;
`;
