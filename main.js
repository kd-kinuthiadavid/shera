const hamburgerIcon = document.querySelector(".toggle");
const closeSideMenu = document.querySelector(".closeMenu");
const showCase = document.querySelector(".showcase");

// open the side nav
hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.style.display = "none";
  closeSideMenu.style.display = "inline";
  showCase.classList.toggle("active");
});

// close the side nav
closeSideMenu.addEventListener("click", () => {
  closeSideMenu.style.display = "none";
  hamburgerIcon.style.display = "inline";
  showCase.classList.toggle("active");
});
