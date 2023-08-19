var canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d");

canvas.width = 1869;
canvas.height = 884;

var background = new Image();
background.crossOrigin = "Anonymous";
background.src =
  "https://res.cloudinary.com/pooja-gera/image/upload/v1650903571/OrientationTicket_v2_0.5perc_thtcyl.png";

const nameInput = document.getElementById("name");
const enrollInput = document.getElementById("enroll");
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  ctx.drawImage(background, 0, 0);
  ctx.fillStyle = "#ffffff";
  ctx.font = "50px Poppins, sans-serif";
  // change position or placement of name here
  ctx.fillText(nameInput.value, 1290, 360);
  ctx.fillStyle = "#ffffff";
  ctx.font = "40px Poppins, sans-serif";
  // change position or placement of ticketNumber here
  ctx.fillText(enrollInput.value, 325, 805);
  document.getElementById("canvas").style.display = "block";
  document.getElementById("download").style.display = "block";
  document.getElementById("head").style.display = "block";
  document.getElementById("hide").style.display = "none";
});

var name = "";
var ticketNumber = "";

background.onload = function () {
  ctx.drawImage(background, 0, 0);
  ctx.fillStyle = "#ffffff";
  ctx.font = "50px Poppins, sans-serif";
  // change position or placement of name here
  ctx.fillText(name, 1290, 360);
  ctx.fillStyle = "#ffffff";
  ctx.font = "40px Poppins, sans-serif";
  // change position or placement of ticketNumber here
  ctx.fillText(ticketNumber, 325, 805);
};

const download = document.getElementById("download");

download.addEventListener("click", function () {
  const mycanvas = document.getElementById("canvas");
  var url = mycanvas.toDataURL();
  let a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("download", `Bigbang_${enrollInput.value}_${nameInput.value}`);
  a.click();
  a.remove();
});