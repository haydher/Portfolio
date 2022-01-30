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
  const url = "http://localhost:5000/";
  const req = await fetch(url, settings);
  const body = await req.json();
  console.log("body", body.status);
  console.log("form submited successfully");
  return 1;
 } catch (error) {
  console.log("Unable to post form");
  return 0;
 }
};
