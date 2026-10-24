/* OZOVEG — site behaviour */
/* ==== SET YOUR ENQUIRY EMAIL HERE (the contact form sends to this address) ==== */
var CONTACT_EMAIL = "info@yourdomain.com";

(function () {
  // Mobile menu
  var header = document.querySelector(".site-header");
  var burger = document.querySelector(".burger");
  if (burger) {
    burger.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Reveal on scroll
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("in"); });
  }

  // Year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Show configured email on contact page
  document.querySelectorAll("[data-email]").forEach(function (el) {
    el.textContent = CONTACT_EMAIL;
    el.setAttribute("href", "mailto:" + CONTACT_EMAIL);
  });

  // Contact form -> opens the visitor's email app with the enquiry pre-filled
  var form = document.getElementById("enquiry");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var f = form.elements;
      var subject = "OZOVEG enquiry: " + f.type.value + " — " + f.name.value;
      var body =
        "Name: " + f.name.value + "\n" +
        "Organisation: " + f.org.value + "\n" +
        "Email: " + f.email.value + "\n" +
        "Phone: " + f.phone.value + "\n" +
        "Enquiry type: " + f.type.value + "\n\n" +
        f.message.value;
      window.location.href = "mailto:" + CONTACT_EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
      var msg = document.querySelector(".form-msg");
      if (msg) msg.style.display = "block";
    });
  }
})();
