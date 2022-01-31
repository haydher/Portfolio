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
  if (body.status === 200) return 1;
  return 0;
 } catch (error) {
  console.log("error submitting form", error);
  return 0;
 }
};
