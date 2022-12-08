import React from "react";
import { getImagePath } from "../../../helpers/image";
import { DictionalWrapper } from "./dicTionalStyle";

const Dictional = ({ text }) => {
  return (
    <DictionalWrapper>
      <a href="">{text}</a>
      <img src={getImagePath("right-arrow-angle.png")} alt="" />
    </DictionalWrapper>
  );
};

export default Dictional;
