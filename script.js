'use strict';

// =====================
// Sidebar Toggle
// =====================
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });
}

// =====================
// Page Navigation
// =====================
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link) => {
  link.addEventListener("click", function () {

    const targetPage = this.innerText.trim().toLowerCase();

    pages.forEach((page) => {
      if (page.dataset.page === targetPage) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });

    navigationLinks.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");

    window.scrollTo(0, 0);
  });
});
