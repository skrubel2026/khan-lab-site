(function () {
  const rosterEl = document.getElementById("roster");
  const emptyEl = document.getElementById("empty");
  const searchEl = document.getElementById("search");
  const filterBtns = document.querySelectorAll(".filter-btn");

  let activeFilter = "all";

  function formatDate(ym) {
    if (!ym) return "Present";
    const [y, m] = ym.split("-");
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return months[parseInt(m, 10) - 1] + " " + y;
  }

  function render() {
    const query = searchEl.value.trim().toLowerCase();

    const filtered = STUDENTS.filter((s) => {
      const matchesFilter = activeFilter === "all" || s.status === activeFilter;
      const matchesQuery =
        !query ||
        s.name.toLowerCase().includes(query) ||
        s.project.toLowerCase().includes(query);
      return matchesFilter && matchesQuery;
    });

    rosterEl.innerHTML = "";

    if (filtered.length === 0) {
      emptyEl.style.display = "block";
      return;
    }
    emptyEl.style.display = "none";

    filtered.forEach((s) => {
      const card = document.createElement("div");
      card.className = "student-card";
      card.innerHTML = `
        <div class="student-card-top">
          <div>
            <h3>${s.name}</h3>
            <p class="role">${s.role}</p>
          </div>
          <span class="status-pill ${s.status}">${s.status === "current" ? "Current" : "Alumni"}</span>
        </div>
        <p class="project">${s.project}</p>
        <p class="dates">${formatDate(s.start)} — ${formatDate(s.end)}${s.outcome ? " · " + s.outcome : ""}</p>
        <a class="verify-link" href="verify.html?id=${encodeURIComponent(s.id)}">View verification record →</a>
      `;
      rosterEl.appendChild(card);
    });
  }

  searchEl.addEventListener("input", render);

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      render();
    });
  });

  render();
})();
