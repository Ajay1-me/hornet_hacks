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

const scrollRevealOption = {
	distance: "50px",
	origin: "bottom",
	duration: 1000,
  };
  
  ScrollReveal().reveal(".banner__container h3", {
	...scrollRevealOption,
  });
  ScrollReveal().reveal(".banner_container h1", {
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

  const root = document.documentElement;
  const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
  const marqueeContent = document.querySelector("ul.marquee-content");
  
  root.style.setProperty("--marquee-elements", marqueeContent.children.length);
  
  for(let i=0; i<marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
  }