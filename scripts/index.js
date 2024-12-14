document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav__links");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    }
  });
});

document.querySelectorAll(".copy-item").forEach((item) => {
  item.addEventListener("click", () => {
    const textToCopy = item.getAttribute("data-copy");
    const tooltip = item.nextElementSibling;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        tooltip.textContent = "Copied!";
        tooltip.classList.add("copied");

        setTimeout(() => {
          tooltip.textContent = "Copy";
          tooltip.classList.remove("copied");
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  });
});
