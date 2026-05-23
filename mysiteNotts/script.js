document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".card img");

  // Create lightbox elements
  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";

  const bigImg = document.createElement("img");
  bigImg.className = "lightbox-img";

  overlay.appendChild(bigImg);
  document.body.appendChild(overlay);

  // Click image → open lightbox
  images.forEach(img => {
    img.addEventListener("click", () => {
      overlay.style.display = "flex";
      bigImg.src = img.src;
    });
  });

  // Click background → close
  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
  });

  // Prevent clicks on the image from closing the lightbox
  bigImg.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

// AUTO ACTIVE NAV LINK
const navLinks = document.querySelectorAll('.nav-links a');
const currentFile = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach(link => {
  const targetFile = link.getAttribute('href').split('/').pop();
  if (targetFile === currentFile) {
    link.classList.add('active');
  }
});

