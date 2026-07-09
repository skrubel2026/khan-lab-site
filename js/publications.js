(function () {
  const listEl = document.getElementById("pubList");
  const emptyEl = document.getElementById("pubEmpty");
  const filterBtns = document.querySelectorAll(".filter-btn");
  let activeFilter = "all";

  const typeLabels = {
    journal: "Journal article",
    conference: "Conference",
    award: "Award"
  };

  function studentLinks(ids) {
    if (!ids || !ids.length) return "";
    const names = ids
      .map((id) => {
        const s = (typeof STUDENTS !== "undefined") ? STUDENTS.find((st) => st.id === id) : null;
        if (!s) return null;
        return `<a href="verify.html?id=${encodeURIComponent(id)}">${s.name}</a>`;
      })
      .filter(Boolean);
    if (!names.length) return "";
    return `<p class="pub-linked">Lab student${names.length > 1 ? "s" : ""}: ${names.join(", ")}</p>`;
  }

  function render() {
    const filtered = PUBLICATIONS.filter((p) => activeFilter === "all" || p.type === activeFilter);
    listEl.innerHTML = "";

    if (!filtered.length) {
      emptyEl.style.display = "block";
      return;
    }
    emptyEl.style.display = "none";

    filtered.forEach((p) => {
      const item = document.createElement("div");
      item.className = "pub-card";
      const titleHtml = p.link
        ? `<a href="${p.link}" target="_blank" rel="noopener">${p.title}</a>`
        : p.title;
      item.innerHTML = `
        <div class="pub-top">
          <span class="status-pill ${p.type === "award" ? "alumni" : "current"}">${typeLabels[p.type] || p.type}</span>
          <span class="dates" style="font-family:var(--font-mono); font-size:0.78rem; color:var(--ink-faint);">${p.year}</span>
        </div>
        <h3 class="pub-title">${titleHtml}</h3>
        <p class="pub-meta">${p.authors} · ${p.venue}</p>
        ${studentLinks(p.studentIds)}
      `;
      listEl.appendChild(item);
    });
  }

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
