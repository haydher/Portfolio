import React, { useState } from "react";
import { FooterStyle } from "./styles/FooterStyle";

export const Footer = () => {
 const [getYear, setGetYear] = useState(new Date().getFullYear());

 return (
  <FooterStyle>
   <p>Made by Me, with Love &#9825; &bull; {getYear}</p>
  </FooterStyle>
 );
};
