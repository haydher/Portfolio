import React, { useRef } from "react";
import { TitleStyle } from "./styles/TitleStyle";
import { useGetTitleWidth } from "./utils";

export const Title = ({ height, titleText }) => {
 const titleRef = useRef(null);
 const titleWidth = useGetTitleWidth(titleRef, titleText);

 return (
  <TitleStyle className="title" titleWidth={titleWidth} height={height}>
   <h1 ref={titleRef}>{titleText}</h1>
  </TitleStyle>
 );
};
