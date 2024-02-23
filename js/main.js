// primary navigation

const navMenu = document.querySelector(".nav-menu");
const navToggle = document.querySelector(".mob-nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");
console.log(navToggle);
console.log(navMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-extended", "false");
  });
});

navToggle.addEventListener("click", () => {
  const visibil = navMenu.getAttribute("data-visible");
  console.log(visibil);
  if (visibil === "false") {
    navMenu.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-extended", "true");
  } else {
    navMenu.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-extended", "false");
  }
});

// --------------------------------------------------------------------------
