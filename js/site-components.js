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
