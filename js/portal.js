// /campus-app/js/portal.js
fetch("data/notices.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("notices");
    let html = "<h3>Latest Notices</h3><ul>";
    data.forEach(notice => {
      html += `<li>${notice.title} - ${notice.date}</li>`;
    });
    html += "</ul>";
    container.innerHTML = html;
  });