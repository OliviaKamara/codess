document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav__links");

  if (hamburger && navLinks) {
    const closeMenu = () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    };

    hamburger.setAttribute("aria-expanded", "false");

    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");

      const isExpanded = hamburger.classList.contains("active");
      hamburger.setAttribute("aria-expanded", String(isExpanded));
    });

    navLinks.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    document.addEventListener("click", (e) => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1250) {
        closeMenu();
      }
    });
  }

  document.querySelectorAll(".copy-item").forEach((item) => {
    item.addEventListener("click", () => {
      const textToCopy = item.getAttribute("data-copy");
      const tooltip = item.nextElementSibling;

      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          if (!tooltip) return;
          tooltip.textContent = "Copied!";
          tooltip.classList.add("copied");

          setTimeout(() => {
            tooltip.textContent = "Copy";
            tooltip.classList.remove("copied");
          }, 2000);
        })
        .catch((err) => {
          console.error("Failed to copy text:", err);
        });
    });
  });
});