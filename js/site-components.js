// js/site-components.js
// Loads reusable site components (header and footer)

document.addEventListener("DOMContentLoaded", async () => {
  // Load Header
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (headerPlaceholder) {
    try {
      const headerResponse = await fetch("header.html", { cache: "no-store" });
      const headerData = await headerResponse.text();
      
      // Insert header into DOM
      headerPlaceholder.innerHTML = headerData;
      
      // Active link logic
      const activePage = window.location.pathname.split("/").pop() || "home.html";
      const links = headerPlaceholder.querySelectorAll("header .navbar a");
      
      links.forEach(link => {
        const href = link.getAttribute("href");
        if (activePage === href) {
          link.classList.add("active");
        }
      });
      
      // *** INITIALIZE MOBILE MENU AFTER HEADER LOADS ***
      initMobileMenu();
      
    } catch (error) {
      console.error("Header load failed:", error);
    }
  }
  
  
  // Load Footer
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    try {
      const footerResponse = await fetch("footer.html", { cache: "no-store" });
      const footerData = await footerResponse.text();
      
      // Insert footer into DOM
      footerPlaceholder.innerHTML = footerData;
    } catch (error) {
      console.error("Footer load failed:", error);
    }
  }
});

// Mobile Menu Toggle Function (called after header loads)
function initMobileMenu() {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navbar = document.querySelector('.navbar');
  
  if (mobileToggle && navbar) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navbar.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
    
    // Close menu when clicking on a link
    const navLinks = navbar.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navbar.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });
  }
}
