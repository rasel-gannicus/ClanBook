// ---- opening mobile menu
const menu_icon_one = document.querySelector(".menu-icon-1");
const menu_icon_two = document.querySelector(".menu-icon-2");
const nav_links = document.querySelector(".nav-links-2");
const nav = document.querySelector(".nav-bar");

// --- opening mobile menu ---
menu_icon_one.addEventListener("click", (e) => {
  e.stopPropagation();
  menu_icon_one.style.display = "none";
  menu_icon_two.style.display = "block";
  nav_links.style.transform = "translateX(-20%)";
});

// --- closing mobile menu ---
menu_icon_two.addEventListener("click", (e) => {
  e.stopPropagation();
  menu_icon_two.style.display = "none";
  menu_icon_one.style.display = "block";
  nav_links.style.transform = "translateX(-100%)";
});

// --- hide menu when clicking outside ---
document.addEventListener("click", (e) => {
  const isClickInsideNav = nav.contains(e.target);
  if (!isClickInsideNav) {
    menu_icon_two.style.display = "none";
    menu_icon_one.style.display = "block";
    nav_links.style.transform = "translateX(-100%)";
  }
});

// ------------------------------------------------
// ---- opening profile menu ---
// ------------------------------------------------
const profile_icon = document.querySelector(".navbar-profile-menu");
const profile_menu = document.querySelector(".profile-short-menu");

profile_icon.addEventListener("click", (e) => {
  e.stopPropagation();
  profile_menu.classList.toggle("active");
});

// --- hide menu when clicking outside ---
document.addEventListener("click", (e) => {
  e.stopPropagation();
  const isClickInsideNav = profile_icon.contains(e.target);
  if (!isClickInsideNav) {
    profile_menu.classList.remove("active");
  }
});
