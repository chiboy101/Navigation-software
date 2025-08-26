// /campus-app/js/search.js
document.getElementById("searchBox").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const results = document.getElementById("results");

  // Dummy data for now
  const buildings = ["Library", "Science Block", "Admin Office"];
  const notices = ["Orientation on Monday", "Library closed Friday"];

  let output = "<h3>Results:</h3><ul>";
  buildings.concat(notices).forEach(item => {
    if (item.toLowerCase().includes(query)) {
      output += `<li>${item}</li>`;
    }
  });
  output += "</ul>";
  results.innerHTML = output;
});