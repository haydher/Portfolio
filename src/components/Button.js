import React from "react";
import { ButtonStyle } from "./styles/ButtonStyle";

export const Button = ({ btnClass, btnText, imgSrc }) => {
 return (
  <ButtonStyle className={`btn ${btnClass}`}>
   {btnText} {imgSrc}
  </ButtonStyle>
 );
};
