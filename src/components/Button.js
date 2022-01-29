import React from "react";
import { ButtonStyle } from "./styles/ButtonStyle";

export const Button = ({ btnClass, btnText, imgSrc, onClick, type }) => {
 return (
  <ButtonStyle type={type} className={`btn ${btnClass}`} onClick={onClick}>
   {btnText} {imgSrc}
  </ButtonStyle>
 );
};
