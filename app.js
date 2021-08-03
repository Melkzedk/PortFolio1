const navbar = document.querySelector(".navbar");

// add shadow to navbar
window.onscroll = () => {
  if (window.pageYOffset > 30) {
    navbar.classList.add("navbar-shadow");
  } else {
    navbar.classList.remove("navbar-shadow");
  }
};

// dynamic footer year
year.innerHTML = new Date().getFullYear();
