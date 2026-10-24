OZOVEG website - Nutra Fresh LLP
================================
Static website, no server code or database needed. Works on any web host
(cPanel/Hostinger/GoDaddy/BigRock, Netlify, GitHub Pages, AWS S3, etc.).

HOW TO PUBLISH
1. Unzip this folder.
2. Upload EVERYTHING inside it (index.html, the other .html files, the
   "assets" folder, robots.txt) into your domain's web root
   (usually "public_html" or "htdocs").
3. Open https://www.yourdomain.com - index.html is the home page.

ONE THING TO SET BEFORE GOING LIVE
- Enquiry email: open assets/js/main.js and change the line
      var CONTACT_EMAIL = "info@yourdomain.com";
  to your real email address. It appears on the Contact page, and the
  enquiry form sends to it.

PAGES
index.html            Home
concept.html          Concept
technology.html       Technology
innovation.html       Innovation
health-benefits.html  Health Benefits
contact.html          Contact Us (address, enquiry form, Google Map)
404.html              Not-found page (set as error page in your host panel if available)
