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
      canvas.width = 1900;
      canvas.height = 800;
      var background = new Image();
      background.crossOrigin = "Anonymous";
      background.src = "https://res.cloudinary.com/dubcoqabr/image/upload/v1693481124/20230831_165042_0000_j65vub.png";

      background.onload = function () {
        ctx.drawImage(background, 0, 0,canvas.width, canvas.height);
        ctx.fillStyle = "#ffffff";
        ctx.font = "36px Open Sans, sans-serif";
        ctx.fillText(nameInput.toUpperCase(), 1170, 100);
        ctx.fillStyle = "#000000";
        ctx.font = "40px 'Anonymous Pro', monospace";
        ctx.fillText(enrollInput, 1615, 725);

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
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 2900,
      "density": {
        "enable": true,
        "value_area": 2700
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value":  2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 90,
        "duration": 4
      },
      "push": {
        "particles_nb": 6
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
