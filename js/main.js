// JavaScript to toggle the mobile navigation
const navLinks = document.querySelector("#navlinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-800px";
}

// Get the navbar element
const navbar = document.querySelector("#header");

// Define the scroll event listener
window.addEventListener("scroll", () => {
    // Check the scroll position
    if (window.scrollY > 100) { 
        navbar.style.backgroundColor = "#000";
    } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }
});

window.onscroll = function() {
  toTopFunction();
};
let icons = document.querySelector("a i.fa-arrow-up");
function toTopFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    icons.style.display = "block";
  } else {
    icons.style.display = "none";
  }
}

const nav = document.querySelectorAll(".nav-menu ul li");
for (let i = 0; i < nav.length; i++) {
  if (
    nav[i].innerHTML.includes("Home") &&
    location.pathname.includes("index")
  ) {
    nav[i].classList.add("selected");
  } else if (
    nav[i].innerHTML.includes("services") &&
    location.pathname.includes("services")
  ) {
    nav[i].classList.add("selected");
  } else if (
    nav[i].innerHTML.includes("Articles") &&
    location.pathname.includes("article")
  ) {
    nav[i].classList.add("selected");
  } else if (
    nav[i].innerHTML.includes("About") &&
    location.pathname.includes("about")
  ) {
    nav[i].classList.add("selected");
  } else if (
    nav[i].innerHTML.includes("Contact") &&
    location.pathname.includes("contact")
  ) {
    nav[i].classList.add("selected");
  } else {
    nav[i].classList.remove("selected");
  }
}