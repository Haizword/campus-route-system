(() => {
  "use strict";
  const menuButton = document.querySelector("#menuButton");
  const mobileNav = document.querySelector("#mobileNav");
  const appointmentForm = document.querySelector("#appointmentForm");
  const formMessage = document.querySelector("#formMessage");

  menuButton.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");
    });
  });

  appointmentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent = "Thank you. Our care team will be in touch within one working day.";
    appointmentForm.reset();
  });
})();
