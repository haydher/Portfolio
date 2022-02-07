import styled from "styled-components";

export const ButtonStyle = styled.button`
 display: inline-flex;
 align-items: center;
 background: none;
 padding: 1rem 3.5rem;
 font-size: 1.2rem;
 margin-top: 1.3rem;
 margin-right: 2rem;
 border-radius: 5px;
 border: none;
 outline-color: white;
 cursor: pointer;

 svg {
  height: 1.5rem;
  margin-left: 1rem;
  cursor: pointer;
 }

 @media only screen and (max-width: 767px) {
  padding: 0.8rem 2.5rem;
  font-size: 1.1rem;
  margin: 0;

  svg {
   display: none;
  }
 }
 @media only screen and (min-width: 3840px) {
  padding: 1.5rem 4rem;
  font-size: 2.2rem;
 }
`;
