/* =========================================
   THE NOTORIOUS – JAVASCRIPT POWER FILE
   Author: Paras Sharma
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     SMOOTH SCROLL + ACTIVE NAV LINK
     =============================== */
  const navLinks = document.querySelectorAll(".navbar-links a");
  const sections = document.querySelectorAll("section");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });


  /* ===============================
     STICKY NAV SHADOW ON SCROLL
     =============================== */
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 6px 25px rgba(255,165,0,0.4)";
    } else {
      header.style.boxShadow = "none";
    }
  });


  /* ===============================
     SCROLL REVEAL ANIMATION
     =============================== */
  const revealElements = document.querySelectorAll(
    ".biography-section, .achievements-section, .career-section, .fight, .gallery-section, .quotes-section, .contact-section"
  );

  const revealOnScroll = () => {
    revealElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  };

  revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";
  });

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();


  /* ===============================
     GALLERY IMAGE LIGHTBOX
     =============================== */
  const galleryImages = document.querySelectorAll(".gallery-grid img");

  const modal = document.createElement("div");
  modal.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.9);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  `;

  const modalImg = document.createElement("img");
  modalImg.style.maxWidth = "90%";
  modalImg.style.maxHeight = "90%";
  modalImg.style.border = "4px solid #ffa500";
  modalImg.style.borderRadius = "15px";

  modal.appendChild(modalImg);
  document.body.appendChild(modal);

  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });


  /* ===============================
     QUOTES AUTO ROTATOR
     =============================== */
  const quotes = document.querySelectorAll(".quotes-section blockquote");
  let quoteIndex = 0;

  quotes.forEach((q, i) => {
    if (i !== 0) q.style.display = "none";
  });

  setInterval(() => {
    quotes[quoteIndex].style.display = "none";
    quoteIndex = (quoteIndex + 1) % quotes.length;
    quotes[quoteIndex].style.display = "block";
  }, 4000);


  /* ===============================
     BACK TO TOP BUTTON
     =============================== */
  const backToTop = document.createElement("button");
  backToTop.innerHTML = "⬆";
  backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #ffa500;
    color: black;
    border: none;
    padding: 12px 15px;
    font-size: 18px;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    z-index: 999;
    box-shadow: 0 0 20px rgba(255,165,0,0.6);
  `;

  document.body.appendChild(backToTop);

  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 600 ? "block" : "none";
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

});
