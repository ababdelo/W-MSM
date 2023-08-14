const menu = document.querySelector(".menu");
const toggle = document.querySelector(".toggle");
const socialIcons = document.querySelectorAll(".social-icon");

toggle.addEventListener("click", () => {
  if (!menu.classList.contains("active")) {
    // Disable icon clicks when the menu is being activated
    socialIcons.forEach(icon => icon.classList.add("disable-click"));
  }

  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    // Enable icon clicks when the menu is fully activated
    setTimeout(() => {
      socialIcons.forEach(icon => icon.classList.remove("disable-click"));
    }, 1250); // Adjust this time according to your animation time
  }
});
