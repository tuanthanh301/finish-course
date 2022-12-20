import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../common/colors";
export const CardTitle = styled.div`
  font-size: 56px;
  font-weight: 600;
  color: ${colors.white};
  margin-top: 40px;
  img{
    width: auto;
    height: 56px;
    margin-right: -15px;
  }
`;
export const SubCard = styled.div`
  font-size: 28px;
  font-weight: 400;
  width: 500px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
  color: ${colors.white};
`;
export const OnlyCard = styled.div`
  font-size: 21px;
  font-weight: 400;
  width: 500px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
  color: ${colors.white};
`;
