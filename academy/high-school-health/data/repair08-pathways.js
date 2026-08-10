(() => {
  "use strict";

  const PATHS = {
    physical: "./courses/physical-education/",
    health: "./courses/health-wellness/",
    electives: "./courses/electives/"
  };

  const style = document.createElement("style");
  style.textContent = `
    .repair08-pathways{padding:78px 22px;border-block:1px solid rgba(23,36,56,.15);background:rgba(255,253,249,.85)}
    .repair08-inner{width:min(100%,1440px);margin:auto}
    .repair08-heading{max-width:850px;margin:0 auto 34px;text-align:center}
    .repair08-heading small{color:#9a5d4f;letter-spacing:.14em;text-transform:uppercase}
    .repair08-heading h2{margin:10px 0;font-family:"Cormorant Garamond",Georgia,serif;font-size:clamp(2.4rem,4vw,4rem);font-weight:500;color:#0c1c2f}
    .repair08-heading p{color:#667382}
    .repair08-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
    .repair08-card{display:flex;flex-direction:column;min-height:310px;padding:24px;border:1px solid rgba(23,36,56,.15);border-top:4px solid var(--a);border-radius:7px;background:white;box-shadow:0 18px 44px rgba(12,28,47,.08)}
    .repair08-card h3{font-family:"Cormorant Garamond",Georgia,serif;font-size:2rem;font-weight:500;color:#0c1c2f}
    .repair08-card p{color:#667382}.repair08-card a{margin-top:auto;display:inline-flex;justify-content:center;padding:11px;border-radius:7px;background:#0c1c2f;color:#fff;text-decoration:none}
    @media(max-width:820px){.repair08-grid{grid-template-columns:1fr}}
  `;
  document.head.appendChild(style);

  function addButtonToHeading(pattern, href, label) {
    const headings = [...document.querySelectorAll("h2,h3,h4")];
    const h = headings.find(el => pattern.test((el.textContent || "").trim()));
    if (!h) return false;
    const card = h.closest("article,.department-card,.card,.resource-card") || h.parentElement;
    if (!card || card.querySelector(`[href="${href}"]`)) return true;
    const a = document.createElement("a");
    a.href = href;
    a.textContent = label;
    a.style.cssText = "display:inline-flex;align-items:center;justify-content:center;min-height:42px;margin-top:14px;padding:9px 13px;border-radius:7px;background:#0c1c2f;color:#fff;text-decoration:none;font-size:.76rem;letter-spacing:.05em;text-transform:uppercase";
    card.appendChild(a);
    return true;
  }

  function insertWholeStudentSection() {
    if (document.getElementById("whole-student-pathways")) return;
    const section = document.createElement("section");
    section.className = "repair08-pathways";
    section.id = "whole-student-pathways";
    section.innerHTML = `
      <div class="repair08-inner">
        <div class="repair08-heading">
          <small>Whole Student Pathways</small>
          <h2>Movement, health, creativity and exploration.</h2>
          <p>Physical Education and Health & Wellness are now canonical High School programs. Electives remain federated to the specialist repositories that own their courses and halls.</p>
        </div>
        <div class="repair08-grid">
          <article class="repair08-card" style="--a:#6f8374">
            <small>Physical Education</small><h3>Grades 9–12 PE</h3>
            <p>42-week core portal, grade study guides, quizzes, teacher guide, PLERA reader, local progress and 2024 standards crosswalk.</p>
            <a href="${PATHS.physical}">Open Physical Education</a>
          </article>
          <article class="repair08-card" style="--a:#9a5d4f">
            <small>Health & Wellness</small><h3>Health Education</h3>
            <p>Four skills-based health courses focused on reliable information, decisions, communication, goals, privacy and independent adult health navigation.</p>
            <a href="${PATHS.health}">Open Health & Wellness</a>
          </article>
          <article class="repair08-card" style="--a:#b89a61">
            <small>Electives & Explorations</small><h3>Federated Electives</h3>
            <p>Arts, music, languages, weather science, law, finance, medical study, environmental service, research, civic learning and professional tools.</p>
            <a href="${PATHS.electives}">Open Electives</a>
          </article>
        </div>
      </div>`;
    const footer = document.querySelector("footer");
    if (footer && footer.parentNode) footer.parentNode.insertBefore(section, footer);
    else document.body.appendChild(section);
  }

  function boot() {
    addButtonToHeading(/Arts\s*&\s*Music/i, PATHS.electives, "Open Electives");
    addButtonToHeading(/Health\s*&\s*Wellness/i, PATHS.health, "Open Health & Wellness");
    addButtonToHeading(/Career\s*&\s*Life/i, PATHS.electives, "Open Electives & Career");
    insertWholeStudentSection();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot, {once:true});
  else boot();
})();