document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevent the default form submission behavior

  const formData = new FormData(this);
  const url = "https://api.sheetmonkey.io/form/dymgKGcYxGbLqZhFpMhBdy";

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("Form data submitted successfully.");
      
      const nameInput = formData.get('name');
      const enrollInput = formData.get('enroll');
      
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = 1869;
      canvas.height = 884;
      var background = new Image();
      background.crossOrigin = "Anonymous";
      background.src = "https://res.cloudinary.com/pooja-gera/image/upload/v1650903571/OrientationTicket_v2_0.5perc_thtcyl.png";

      background.onload = function () {
        ctx.drawImage(background, 0, 0);
        ctx.fillStyle = "#ffffff";
        ctx.font = "50px Poppins, sans-serif";
        ctx.fillText(nameInput, 1290, 360);
        ctx.fillStyle = "#ffffff";
        ctx.font = "40px Poppins, sans-serif";
        ctx.fillText(enrollInput, 325, 805);

        document.getElementById("canvas").style.display = "block";
        document.getElementById("download").style.display = "block";
        document.getElementById("head").style.display = "block";
        document.getElementById("hide").style.display = "none";
        document.querySelector(".form-container").style.display = "none";
      };

      const download = document.getElementById("download");
      download.addEventListener("click", function () {
        const mycanvas = document.getElementById("canvas");
        var url = mycanvas.toDataURL();
        let a = document.createElement("a");
        a.setAttribute("href", url);
        a.setAttribute("download", `Bigbang_${enrollInput}_${nameInput}.png`);
        a.click();
        a.remove();
      });
      return false;
    } else {
      console.error("Form submission failed.");
      // Handle the error or provide user feedback.
    }
  } catch (error) {
    console.error("An error occurred:", error);
    // Handle the error or provide user feedback.
  }
});

// document.getElementById("contact-form").addEventListener("submit", async function (e) {
//   e.preventDefault(); // Prevent the default form submission behavior

//   const formData = new FormData(this);
//   const url = "https://api.sheetmonkey.io/form/dymgKGcYxGbLqZhFpMhBdy";

//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       body: formData,
//     });

//     if (response.ok) {
//       console.log("Form data submitted successfully.");
//       // You can perform additional actions here if needed.
//       const nameInput = formData.get('name');
//       const enrollInput = formData.get('enroll');
      
//       // Draw the ticket here using the nameInput and enrollInput values
//       const canvas = document.getElementById("canvas");
//       const ctx = canvas.getContext("2d");
//       var background = new Image();
// background.crossOrigin = "Anonymous";
// background.src =
//   "https://res.cloudinary.com/pooja-gera/image/upload/v1650903571/OrientationTicket_v2_0.5perc_thtcyl.png";

//       ctx.drawImage(background, 0, 0);
//       ctx.fillStyle = "#ffffff";
//       ctx.font = "50px Poppins, sans-serif";
//       // change position or placement of name here
//       ctx.fillText(nameInput, 1290, 360);
//       ctx.fillStyle = "#ffffff";
//       ctx.font = "40px Poppins, sans-serif";
//       // change position or placement of ticketNumber here
//       ctx.fillText(enrollInput, 325, 805);

//       document.getElementById("canvas").style.display = "block";
//       document.getElementById("download").style.display = "block";
//       document.getElementById("head").style.display = "block";
//       document.getElementById("hide").style.display = "none";

//       const download = document.getElementById("download");

// download.addEventListener("click", function () {
//   const mycanvas = document.getElementById("canvas");
//   var url = mycanvas.toDataURL();
//   let a = document.createElement("a");
//   a.setAttribute("href", url);
//   a.setAttribute("download", `Bigbang_${enrollInput.value}_${nameInput.value}`);
//   a.click();
//   a.remove();
// });
//     } else {
//       console.error("Form submission failed.");
//       // Handle the error or provide user feedback.
//     }
//   } catch (error) {
//     console.error("An error occurred:", error);
//     // Handle the error or provide user feedback.
//   }
// });
// var canvas = document.getElementById("canvas"),
//   ctx = canvas.getContext("2d");

// canvas.width = 1869;
// canvas.height = 884;

// var background = new Image();
// background.crossOrigin = "Anonymous";
// background.src =
//   "https://res.cloudinary.com/pooja-gera/image/upload/v1650903571/OrientationTicket_v2_0.5perc_thtcyl.png";

// // const nameInput = document.getElementById("name");
// const enrollInput = document.getElementById("enroll");
// const submitBtn = document.getElementById("submitBtn");
// submitBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   ctx.drawImage(background, 0, 0);
//   ctx.fillStyle = "#ffffff";
//   ctx.font = "50px Poppins, sans-serif";
//   // change position or placement of name here
//   ctx.fillText(nameInput.value, 1290, 360);
//   ctx.fillStyle = "#ffffff";
//   ctx.font = "40px Poppins, sans-serif";
//   // change position or placement of ticketNumber here
//   ctx.fillText(enrollInput.value, 325, 805);
//   document.getElementById("canvas").style.display = "block";
//   document.getElementById("download").style.display = "block";
//   document.getElementById("head").style.display = "block";
//   document.getElementById("hide").style.display = "none";
// });

// var name = "";
// var ticketNumber = "";

// background.onload = function () {
//   ctx.drawImage(background, 0, 0);
//   ctx.fillStyle = "#ffffff";
//   ctx.font = "50px Poppins, sans-serif";
//   // change position or placement of name here
//   ctx.fillText(name, 1290, 360);
//   ctx.fillStyle = "#ffffff";
//   ctx.font = "40px Poppins, sans-serif";
//   // change position or placement of ticketNumber here
//   ctx.fillText(ticketNumber, 325, 805);
// };

// const download = document.getElementById("download");

// download.addEventListener("click", function () {
//   const mycanvas = document.getElementById("canvas");
//   var url = mycanvas.toDataURL();
//   let a = document.createElement("a");
//   a.setAttribute("href", url);
//   a.setAttribute("download", `Bigbang_${enrollInput.value}_${nameInput.value}`);
//   a.click();
//   a.remove();
// });