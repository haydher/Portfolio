import { useEffect, useRef } from "react";

export const Canvas = () => {
 const canvasRef = useRef();

 useEffect(() => {
  canvasFun();
 }, []);

 const canvasFun = () => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");
  const yValue = 10; // distance between lines in Y axis
  let xHeight = 0; // distance between the lines in X axis

  const arr = [
   // test values
   // [20, yValue + 0]
   // [50, yValue + 0],
   // [80, yValue+ 0],
   // [280, yValue+ 0],
   // [20, yValue + 30],
   // [180, yValue + 180]
   // [20, yValue + 270],
  ];
  // fill the array with points to draw lines
  for (let i = 20; i < canvas.height; i += 30) {
   for (let j = 20; j < canvas.width; j += 30) {
    arr.push([j, yValue + xHeight]);
   }
   xHeight += 30;
  }

  // draw inital values when page loads
  draw(2000, 2000, arr);

  // window.addEventListener("mousemove", (event) => {
  //  const x = event.clientX;
  //  const y = event.clientY;
  //  draw(x, y, arr);
  //  // document.querySelector("#cords").innerHTML = `X: ${x} Y: ${y}`;
  // });

  function draw(mouseX, mouseY, arr) {
   ctx.clearRect(0, 0, canvas.width, canvas.height);

   // draw lines
   for (let i = 0; i < arr.length; i++) {
    const startPoint = {
     x: arr[i][0],
     y: arr[i][1],
    };
    const endPoint = {
     x: arr[i][0],
     // y: arr[i][1] + lineLength
     y: arr[i][1] + scale(arr[i][0], arr[i][1], mouseX, mouseY),
    };
    ctx.lineWidth = 4;
    ctx.lineCap = "round";

    ctx.beginPath();

    // rotate around center - find mid-point using lerp
    const midPoint = {
     x: startPoint.x + (endPoint.x - startPoint.x) * 0.5,
     y: startPoint.y + (endPoint.y - startPoint.y) * 0.5,
    };

    // translate to midpoint
    ctx.translate(midPoint.x, midPoint.y);

    // convert mouse position to angle based on center of line
    const rad =
     Math.atan2(
      mouseY - canvas.getBoundingClientRect().top - midPoint.y,
      mouseX - canvas.getBoundingClientRect().left - midPoint.x
     ) *
     (180 / Math.PI);
    const rotate = (Math.PI / 180) * (rad - 90);
    ctx.rotate(rotate);

    // translate back
    ctx.translate(-midPoint.x, -midPoint.y);

    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(endPoint.x, endPoint.y);
    ctx.strokeStyle = "#4E83EA";
    ctx.stroke();
    ctx.closePath();

    // reset transforms
    ctx.setTransform(1, 0, 0, 1, 0, 0);
   }
  }

  function scale(lineA, lineB, mouseX, mouseY) {
   const a = Math.abs(lineA + canvas.getBoundingClientRect().top - mouseX);
   const b = Math.abs(lineB + canvas.getBoundingClientRect().left - mouseY);

   const inputLow = 0;
   const inputHigh = 1080;
   const outputLow = 1;
   const outputHigh = 15;

   const input = Math.sqrt(a * a + b * b);

   const output = ((input - inputLow) / (inputHigh - inputLow)) * (outputLow - outputHigh) + outputHigh;

   return output < outputLow ? outputLow : output > outputHigh ? outputHigh : output;
  }
 };
 return <canvas ref={canvasRef} height={500} width={500}></canvas>;
};
