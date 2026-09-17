/* ============================================
   TIER 1 TUTORING SCHOOL - SCRIPT.JS
   A simple example for students learning JavaScript.
   Three small features:
     1. Mobile menu toggle
     2. Auto-updating footer year
     3. Contact form validation (contact.html only)
   ============================================ */

// 1. Mobile menu toggle -----------------------------------------
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
}

// 2. Auto-updating footer year -----------------------------------
const yearSpan = document.getElementById("year");
if (yearSpan) {
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
}

// 3. Contact form validation --------------------------------------
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    // Stop the form from actually submitting/reloading the page,
    // since this is just a front-end example with no server.
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Very simple email check for teaching purposes
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || message === "") {
      showMessage("Please fill in every field before sending.", "error");
      return;
    }

    if (!emailPattern.test(email)) {
      showMessage("Please enter a valid email address.", "error");
      return;
    }

    // If everything looks good:
    showMessage(
      "Thank you, " + name + "! Your message has been received. We will reply to " + email + " soon.",
      "success"
    );
    contactForm.reset();
  });
}

function showMessage(text, type) {
  formMsg.textContent = text;
  formMsg.className = "form-msg " + type;
}
