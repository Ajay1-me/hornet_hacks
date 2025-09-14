/* Collapsible Sections */
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

/* Wind Canvas Animation */
const canvas = document.getElementById("windCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = [];

function getMaxParticleSize() {
  if (window.innerWidth <= 480) return 1;   // small phones: tiny
  if (window.innerWidth <= 768) return 2;   // tablets: medium
  return 4;                                 // desktops: bigger
}


function initParticles() {
  const maxSize = getMaxParticleSize();

  particles = Array.from({length: 50}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * maxSize + 2,
    speedX: Math.random() * 0.2 + 0.1,
    speedY: Math.random() * 0.1 - 0.1,
    opacity: Math.random() * 0.4 + 0.1
  }));
}

initParticles();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
    ctx.fill();

    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x > canvas.width) p.x = 0;
    if (p.y > canvas.height) p.y = 0;
  });

  requestAnimationFrame(animate);
}
animate();


/* ScrollReveal Animations */
const scrollRevealOption = {
	distance: "50px",
	origin: "bottom",
	duration: 1000,
  };
  
  ScrollReveal().reveal(".banner__container h3", {
	...scrollRevealOption,
  });
  // Fix selector: use banner__container (double underscore)
  ScrollReveal().reveal(".banner__container h1", {
	...scrollRevealOption,
	origin: "left",
	delay: 500,
  });
  ScrollReveal().reveal(".banner__container h2", {
	...scrollRevealOption,
	origin: "right",
	delay: 1000,
  });
  ScrollReveal().reveal(".banner__container button", {
	...scrollRevealOption,
	delay: 1500,
  });
  /*
  ScrollReveal().reveal(".nav__links li", {
	...scrollRevealOption,
	origin: "top",
	interval: 300,
	delay: 2000,
  });*/
  
  /* Behaves weirdly with mobile scrolling
  ScrollReveal().reveal(".socials a", {
	duration: 1000,
	interval: 400,
	delay: 100,
  });
  */
 
  ScrollReveal().reveal(".organizers-container a", {
    duration: 1000,
    interval: 500,
    delay: 100,
  });