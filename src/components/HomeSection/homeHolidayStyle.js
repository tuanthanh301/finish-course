import styled from "styled-components";
import { colors } from "../../common/colors";
export const HomeHolidayWrapper = styled.div`
  width: 100%;
  height: 736px;
  margin-top: 12px;
  margin-bottom: 10px;
  position: relative;
  video {
    width: 100%;
    height: 736px;
    object-fit: cover;
  }
`;
export const HomeHolidaySection = styled.div`
  width: 100%;
  color: ${colors.white};
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 50px;
`;
export const GivNow = styled.div`
  font-size: 56px;
  font-weight: 600;
`;
export const GivGift = styled.div`
  font-size: 28px;
  font-weight: 400;
  width: 500px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;
