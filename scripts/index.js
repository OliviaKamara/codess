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
    const tooltip = item.nextElementSibling; // Target the tooltip next to the copy-item

    // Copy text to clipboard
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        // Change tooltip text to "Copied!"
        tooltip.textContent = "Copied!";
        tooltip.classList.add("copied"); // Add class for style change

        // Reset tooltip back to "Copy" after 2 seconds
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
