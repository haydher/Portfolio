import { useEffect, useState } from "react";

// submit form
export const submitForm = async (form) => {
 const settings = {
  method: "POST",
  body: JSON.stringify(form),
  headers: {
   Accept: "application/json",
   "Content-Type": "application/json",
  },
 };

 try {
  const url = `${process.env.REACT_APP_NODEMAILER}`;
  const req = await fetch(url, settings);
  const body = await req.json();
  if (body.status === 200) return 1;
  console.log("body", body);
  return 0;
 } catch (error) {
  console.log("error submitting form", error);
  return 0;
 }
};

// get the width of title for each section
export const useGetTitleWidth = (ref, titleText) => {
 const [titleWidth, setTitleWidth] = useState(0);

 useEffect(() => {
  ref.current !== null && setTitleWidth(ref.current.offsetWidth);
 }, [ref, titleText]);

 return titleWidth;
};

// get the width of the screen when resize
export const useGetScreenWidth = () => {
 const [checkScreenWidth, setCheckScreenWidth] = useState(0);

 useEffect(() => {
  setCheckScreenWidth(window.innerWidth);

  const getScreenWidth = (e) => setCheckScreenWidth(e.target.innerWidth);

  window.addEventListener("resize", getScreenWidth);

  return () => {
   window.removeEventListener("resize", getScreenWidth);
  };
 }, []);

 return checkScreenWidth;
};

export const turnHerokuOn = async () => {
 // crypto tracker news api
 await fetch(process.env.REACT_APP_NEWSAPI);
 // nodemailer for portfolio
 await fetch(process.env.REACT_APP_NODEMAILER_SERVER);
};
