

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

canvas.width = 1869;
canvas.height = 884;


var background = new Image();
background.src = "https://res.cloudinary.com/pooja-gera/image/upload/v1650903571/OrientationTicket_v2_0.5perc_thtcyl.png";

const nameInput = document.getElementById('name'); 
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click',function(e){
  e.preventDefault();
 ctx.drawImage(background,0,0);
  ctx.fillStyle = "#ffffff";
    ctx.font = "100px verdana, sans-serif";
    // change position or placement of name here
    ctx.fillText(nameInput.value, 1258, 400);
    ctx.fillStyle = "#ffffff";
    ctx.font = "40px verdana, sans-serif";
    // change position or placement of ticketNumber here
    ctx.fillText(ticketNumber, 358, 800);
});

var name = "Pooja Gera";
var ticketNumber = "001";

background.onload = function(){
 ctx.drawImage(background,0,0);
  ctx.fillStyle = "#ffffff";
    ctx.font = "100px verdana, sans-serif";
    // change position or placement of name here
    ctx.fillText(name, 1258, 400);
    ctx.fillStyle = "#ffffff";
    ctx.font = "40px verdana, sans-serif";
    // change position or placement of ticketNumber here
    ctx.fillText(ticketNumber, 358, 800);
}