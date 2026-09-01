/* =========================================================
   BIGGIE WOODWORKS
   Main JavaScript
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

if (menuToggle && mobileNav) {

  menuToggle.addEventListener("click", () => {

    const isOpen =
      mobileNav.classList.toggle("open");

    menuToggle.classList.toggle(
      "active",
      isOpen
    );

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen
        ? "Close navigation"
        : "Open navigation"
    );

  });


  /* Close menu when a navigation link is clicked */

  mobileNav
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener("click", () => {

        mobileNav.classList.remove("open");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Open navigation"
        );

      });

    });


  /* Close mobile menu when clicking outside */

  document.addEventListener("click", (event) => {

    const clickedInsideMenu =
      mobileNav.contains(event.target);

    const clickedButton =
      menuToggle.contains(event.target);

    if (
      !clickedInsideMenu &&
      !clickedButton &&
      mobileNav.classList.contains("open")
    ) {

      mobileNav.classList.remove("open");

      menuToggle.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  });

}


/* =========================================================
   HEADER SCROLL EFFECT
   ========================================================= */

const siteHeader =
  document.getElementById("siteHeader");

function updateHeader() {

  if (!siteHeader) return;

  if (window.scrollY > 20) {

    siteHeader.classList.add("scrolled");

  } else {

    siteHeader.classList.remove("scrolled");

  }

}

window.addEventListener(
  "scroll",
  updateHeader,
  { passive: true }
);

updateHeader();


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

/*
  Add the "reveal" class to elements that should
  animate into view.

  This script also automatically adds reveal effects
  to major content blocks.
*/

const revealElements = document.querySelectorAll(
  ".service-card, .advantage, .step, .work-large, .work-small, .contact-box, .area-inner"
);

revealElements.forEach((element) => {

  element.classList.add("reveal");

});


if ("IntersectionObserver" in window) {

  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) return;

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        });

      },
      {
        threshold: 0.12
      }
    );


  revealElements.forEach((element) => {

    revealObserver.observe(element);

  });

} else {

  revealElements.forEach((element) => {

    element.classList.add("visible");

  });

}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const yearElements =
  document.querySelectorAll(
    "[data-current-year]"
  );

yearElements.forEach((element) => {

  element.textContent =
    new Date().getFullYear();

});


/* =========================================================
   CLOSE MOBILE NAV ON RESIZE
   ========================================================= */

window.addEventListener("resize", () => {

  if (
    window.innerWidth > 800 &&
    mobileNav &&
    menuToggle
  ) {

    mobileNav.classList.remove("open");

    menuToggle.classList.remove("active");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    menuToggle.setAttribute(
      "aria-label",
      "Open navigation"
    );

  }

});


/* =========================================================
   IMAGE ERROR HANDLING
   ========================================================= */

document
  .querySelectorAll("img")
  .forEach((image) => {

    image.addEventListener("error", () => {

      image.style.display = "none";

      const parent =
        image.parentElement;

      if (parent) {

        parent.classList.add(
          "image-missing"
        );

      }

    });

  });
