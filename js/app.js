function loadParticles(color, opacity, size) {
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 160,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": color // Dynamic color
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": opacity, // Dynamic opacity
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": opacity / 2, // Adjust to keep animation smooth
          "sync": false
        }
      },
      "size": {
        "value": size, // Dynamic size
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": size / 2, // Adjust to keep animation smooth
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": color, // Dynamic color
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
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
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
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
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
}

// Check user preference for color scheme and set particle color accordingly
const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
if (mediaQuery.matches) {
  loadParticles('#000000', 0.2, 2); // Black particles, less opacity, smaller size for light mode
} else {
  loadParticles('#ffffff', 0.7, 4); // White particles, more opacity, larger size for dark mode
}

// Listen for changes in color scheme
mediaQuery.addListener((e) => {
  if (e.matches) {
    loadParticles('#000000', 0.2, 2); // Black particles, less opacity, smaller size for light mode
  } else {
    loadParticles('#ffffff', 0.7, 4); // White particles, more opacity, larger size for dark mode
  }
});
