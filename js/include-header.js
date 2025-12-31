// js/include-header.js
document.addEventListener("DOMContentLoaded", async () => {
  const placeholder = document.getElementById("header-placeholder");
  if (!placeholder) return;

  try {
    // Fetch the header content
    const response = await fetch("header.html", { cache: "no-store" });
    const data = await response.text();

    // Insert it immediately into DOM
    placeholder.innerHTML = data;

    // Active link logic
    const activePage = window.location.pathname.split("/").pop() || "index.html";
    const links = placeholder.querySelectorAll("header .navbar a");

    links.forEach(link => {
      const href = link.getAttribute("href");
      if (activePage === href) {
        link.classList.add("active");
      }
    });
  } catch (error) {
    console.error("Header load failed:", error);
  }
});
