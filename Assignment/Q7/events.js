
async function loadEvents() {
  const container = document.getElementById("events-container");
  container.innerHTML = "<p>Loading events...</p>";

  try {
    const response = await fetch("events.json");
    if (!response.ok) throw new Error("Failed to load events file");

    const events = await response.json();

    if (!Array.isArray(events)) throw new Error("Invalid JSON format");

    const grouped = groupByMonth(events);

    container.innerHTML = renderEvents(grouped);
  } catch (err) {
    container.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
  }
}

function groupByMonth(events) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const grouped = {};
  events.forEach(ev => {
    const date = new Date(ev.date);
    const monthName = months[date.getMonth()] || "Unknown";
    if (!grouped[monthName]) grouped[monthName] = [];
    grouped[monthName].push(ev);
  });

  return Object.keys(grouped)
    .sort((a, b) => months.indexOf(a) - months.indexOf(b))
    .reduce((acc, key) => {
      acc[key] = grouped[key];
      return acc;
    }, {});
}

function renderEvents(grouped) {
  let html = "";
  for (const [month, events] of Object.entries(grouped)) {
    html += `
      <div class="month-card">
        <h2>${month}</h2>
        ${events.map(ev => `
          <div class="event">
            <h3>${ev.title}</h3>
            <p><strong>Date:</strong> ${formatDate(ev.date)}</p>
            <p>${ev.description}</p>
          </div>
        `).join("")}
      </div>
    `;
  }
  return html;
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", {
    year: "numeric", month: "short", day: "numeric"
  });
}

document.addEventListener("DOMContentLoaded", loadEvents);
