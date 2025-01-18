// sticky navbar
// let header = document.querySelector(".master-header");
// window.onscroll = function () {
//   if (document.documentElement.scrollTop > 20) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// };

// scroll navlinks active
let sections = document.querySelectorAll("section");
let navbarLinks = document.querySelectorAll(".navbar-menu a");
let header = document.querySelector(".master-header");

window.onscroll = () => {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  // Toggle the sticky class for the header
  if (scrollTop > 20) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  // Highlight the active link in the navbar
  sections.forEach((section) => {
    let top = scrollTop;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navbarLinks.forEach((link) => {
        link.classList.remove("active");
      });
      let activeLink = document.querySelector(`.navbar-menu a[href*="${id}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
};

// JavaScript for tab interactivity
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tab-button");
  const panes = document.querySelectorAll(".tab-pane");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove 'active' class from all buttons
      buttons.forEach((btn) => btn.classList.remove("active"));
      // Add 'active' class to the clicked button
      button.classList.add("active");
      // Hide all tab panes
      panes.forEach((pane) => pane.classList.remove("active"));
      // Show the corresponding tab pane
      const target = button.getAttribute("data-tab");
      document.getElementById(target).classList.add("active");
    });
  });
});

// hide box
// document.querySelectorAll(".box1").forEach((box) => {
//   box.addEventListener("click", () => {
//     box.classList.toggle("hidden");
//   });
// });

// card-responsive
// document.querySelectorAll(".card").forEach((card) => {
//   card.addEventListener("click", () => {
//     alert(`You clicked on the ${card.querySelector("h3").innerText} card!`);
//   });
// });

// navbar-toggle

// document.addEventListener("DOMContentLoaded", () => {
//   const navbarToggler = document.getElementById("navbar-toggler");
//   const navbarMenu = document.getElementById("navbar-menu");

//   navbarToggler.addEventListener("click", () => {
//     navbarMenu.classList.toggle("active");
//   });

//   // Close the sidebar when clicking outside
//   document.addEventListener("click", (e) => {
//     if (!navbarMenu.contains(e.target) && !navbarToggler.contains(e.target)) {
//       navbarMenu.classList.remove("active");
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("navbar-toggler");
  const offcanvasNav = document.getElementById("offcanvasNav");
  const closeBtn = document.getElementById("closeBtn");

  menuToggle.addEventListener("click", () => {
    offcanvasNav.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    offcanvasNav.classList.remove("open");
  });

  // Close the menu when clicking outside of it
  document.addEventListener("click", (event) => {
    if (
      !offcanvasNav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      offcanvasNav.classList.remove("open");
    }
  });
});

// hide card toggle

const toggleButton = document.getElementById("toggleButton");
const hiddenCards = document.querySelectorAll(".card1.hidden");

toggleButton.addEventListener("click", () => {
  if (toggleButton.innerText === "Show More") {
    hiddenCards.forEach((card) => card.classList.remove("hidden"));
    toggleButton.innerText = "Show Less";
  } else {
    hiddenCards.forEach((card) => card.classList.add("hidden"));
    toggleButton.innerText = "Show More";
  }
});

// form validation
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  // Username validation
  const username = document.getElementById("username").value.trim();
  const usernameError = document.getElementById("usernameError");
  if (username === "") {
    usernameError.style.display = "block";
    isValid = false;
  } else {
    usernameError.style.display = "none";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailError = document.getElementById("emailError");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  // Message validation
  const message = document.getElementById("message").value.trim();
  const messageError = document.getElementById("messageError");
  if (message.length < 10) {
    messageError.style.display = "block";
    isValid = false;
  } else {
    messageError.style.display = "none";
  }

  // Success message
  const successMessage = document.getElementById("successMessage");
  if (isValid) {
    successMessage.style.display = "block";
  } else {
    successMessage.style.display = "none";
  }
});
