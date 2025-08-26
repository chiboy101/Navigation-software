// js/index.js
document.addEventListener("DOMContentLoaded", () => {
  // Splash screen
  setTimeout(() => {
    document.getElementById("splash-screen").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("splash-screen").style.display = "none";
    }, 500);
  }, 1000);

  // Tab switching
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      tabButtons.forEach(btn => btn.classList.remove("active"));
      tabContents.forEach(tab => tab.classList.remove("active"));

      button.classList.add("active");
      document.getElementById(button.dataset.tab).classList.add("active");
    });
  });

  // Theme toggle
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeIcon.classList.toggle("fa-moon");
    themeIcon.classList.toggle("fa-sun");
  });
});






// building cards
// Load building cards dynamically
fetch('data/buildings.json')
  .then(response => response.json())
  .then(buildings => {
    const gallery = document.getElementById('building-gallery');
    buildings.forEach(building => {
      const card = document.createElement('div');
      card.className = 'building-card';
      card.innerHTML = `
        <img src="assets/Images/${building.image}" alt="${building.name}">
        <p><strong>${building.name}</strong></p>
        <p style="font-size: 12px; color: #6b7280;">${building.description}</p>
      `;
      gallery.appendChild(card);
    });
  });