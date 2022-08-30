const eye1 = document.querySelector("body > svg > path:nth-child(4)");
const eye2 = document.querySelector("body > svg > path:nth-child(2)");

const eye = document.querySelector("body > svg > path:nth-child(7)");
document.addEventListener("mousemove", handleMousemove);

let factor = 23;

function handleMousemove(e) {
  const eyeRec = eye.getBoundingClientRect();
  let x, y;
  const widthMid = window.innerWidth / 2;
  const heightMid = window.innerHeight / 2;
  const clientX = e.clientX;
  const clientY = e.clientY;
  x = (clientX - widthMid) / factor;
  y = (clientY - heightMid) / factor;

  eye1.style.transform = `translate(${x}px, ${y}px)`;
  eye2.style.transform = `translate(${x}px, ${y}px)`;
}
