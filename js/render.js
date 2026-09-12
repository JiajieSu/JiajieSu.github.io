/* ============================================================
   CARD RENDERER — turns the data/*.js files into page content.
   You normally never need to edit this file: change the data
   files instead and the pages rebuild themselves.
   ============================================================ */

(function () {
  function el(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  /* ---------- one research / engineering project card ---------- */
  function projectCard(p) {
    var media = "";
    var imgs = p.images
      ? p.images
      : p.image
      ? [{ src: p.image, caption: p.imageCaption }]
      : [];
    if (imgs.length === 1) {
      media =
        '<figure class="card__media"><img src="images/' + esc(imgs[0].src) +
        '" alt="' + esc(imgs[0].caption || p.title) + '" loading="lazy" decoding="async">' +
        (imgs[0].caption
          ? '<figcaption class="figure-caption" style="padding:12px 16px">' + esc(imgs[0].caption) + "</figcaption>"
          : "") +
        "</figure>";
    } else if (imgs.length > 1) {
      media =
        '<figure class="card__media" style="display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--color-divider)">' +
        imgs
          .map(function (im) {
            return '<img src="images/' + esc(im.src) + '" alt="' + esc(im.caption || p.title) + '" loading="lazy" decoding="async" style="max-height:260px;width:100%;object-fit:cover;background:var(--color-surface-2)">';
          })
          .join("") +
        '<figcaption class="figure-caption" style="grid-column:1/-1;padding:10px 14px;background:var(--color-surface-2)">' +
        imgs.map(function (im) { return esc(im.caption); }).join(" · ") +
        "</figcaption></figure>";
    }

    var fields = "";
    if (p.question && !p.featured) fields += field("Research Question", '<em style="font-style:italic">' + esc(p.question) + "</em>", true);
    if (p.methods) fields += field("Methods", '<ul class="field__list">' + p.methods.map(function (m) { return "<li>" + esc(m) + "</li>"; }).join("") + "</ul>");
    if (p.contribution) fields += field("My Contribution", "<ul>" + p.contribution.map(function (c) { return "<li>• " + esc(c) + "</li>"; }).join("") + "</ul>");
    if (p.outcomes) fields += field("Outcomes", esc(p.outcomes));

    var links = "";
    if (p.links && p.links.length) {
      links =
        '<div class="card__links">' +
        p.links
          .map(function (l) {
            return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener noreferrer">' + esc(l.label) + " →</a>";
          })
          .join("") +
        "</div>";
    }

    var why = "";
    if (p.why) why = '<div class="why-box"><span class="field__label">Why this shapes my PhD direction</span>' + esc(p.why) + "</div>";

    var skills = p.skills
      ? '<ul class="field__list">' + p.skills.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul>"
      : "";

    return el(
      '<article class="card ' + (p.featured ? "card--featured" : "card--stack") + ' fade-in">' +
        media +
        '<div class="card__body">' +
        '<p class="card__kicker"><span class="theme-dot"></span>' + esc(p.kicker || "") + "</p>" +
        "<h3>" + esc(p.title) + "</h3>" +
        '<p class="card__role"><strong>' + esc(p.role) + "</strong>" + (p.period ? " · " + esc(p.period) : "") + "</p>" +
        (p.question && p.featured ? '<p class="card__question">' + esc(p.question) + "</p>" : "") +
        fields +
        (skills ? '<div class="field"><span class="field__label">Skills</span>' + skills + "</div>" : "") +
        why + links +
        "</div></article>"
    );

    function field(label, html, plain) {
      return (
        '<div class="field"><span class="field__label">' + esc(label) + "</span>" +
        '<div class="field__text" ' + (plain ? 'style="font-style:italic"' : "") + ">" + html + "</div></div>"
      );
    }
  }

  /* ---------- Home page: featured cards (by project id) ---------- */
  var homeRoot = document.querySelector("[data-home-features]");
  if (homeRoot && window.RESEARCH_THEMES) {
    var all = {};
    window.RESEARCH_THEMES.forEach(function (t) {
      t.projects.forEach(function (p) {
        all[p.id] = p;
      });
    });
    var ids = (homeRoot.getAttribute("data-home-features") || "").split(",");
    ids.forEach(function (id) {
      id = id.trim();
      if (all[id]) homeRoot.appendChild(projectCard(all[id]));
    });
  }

  /* ---------- Research page ---------- */
  var researchRoot = document.querySelector("[data-research-themes]");
  if (researchRoot && window.RESEARCH_THEMES) {
    window.RESEARCH_THEMES.forEach(function (theme) {
      var sec = el(
        '<section id="' + esc(theme.id) + '" class="theme-group fade-in">' +
        '<div class="theme-group__head"><h2><span style="color:var(--color-accent)">' + esc(theme.num) + '.</span> ' + esc(theme.title) + "</h2></div>" +
        '<p class="theme-group__blurb">' + esc(theme.blurb) + "</p>" +
        '<div class="theme-group__cards"></div></section>'
      );
      var holder = sec.querySelector(".theme-group__cards");
      theme.projects.forEach(function (p) {
        holder.appendChild(projectCard(p));
      });
      researchRoot.appendChild(sec);
    });
  }

  /* ---------- Projects page ---------- */
  var projectsRoot = document.querySelector("[data-project-groups]");
  if (projectsRoot && window.PROJECT_GROUPS) {
    window.PROJECT_GROUPS.forEach(function (group) {
      var sec = el(
        '<section ' + (group.id ? 'id="' + esc(group.id) + '"' : "") + ' class="theme-group fade-in">' +
        '<div class="theme-group__head"><h2>' + esc(group.title) + "</h2></div>" +
        '<p class="theme-group__blurb">' + esc(group.blurb) + "</p>" +
        '<div class="theme-group__cards"></div></section>'
      );
      var holder = sec.querySelector(".theme-group__cards");
      if (group.projects) {
        group.projects.forEach(function (p) {
          holder.appendChild(projectCard(p));
        });
      }
      if (group.compact) {
        holder.style.display = "grid";
        holder.style.gridTemplateColumns = "repeat(auto-fill, minmax(min(320px, 100%), 1fr))";
        group.compact.forEach(function (c) {
          holder.appendChild(
            el(
              '<article class="card card--stack fade-in">' +
              "<h3>" + esc(c.title) + "</h3>" +
              '<p class="card__role"><strong>' + esc(c.org) + "</strong></p>" +
              '<p class="field__text">' + esc(c.text) + "</p></article>"
            )
          );
        });
      }
      projectsRoot.appendChild(sec);
    });
  }

  /* ---------- Publications page ---------- */
  var pubRoot = document.querySelector("[data-publications]");
  if (pubRoot && window.PUBLICATIONS) {
    window.PUBLICATIONS.forEach(function (p) {
      pubRoot.appendChild(
        el(
          '<article class="pub-item fade-in">' +
          '<p class="overline" style="margin-bottom:8px">' + esc(p.year) + "</p>" +
          '<h3 class="pub-item__title">' + esc(p.title) + "</h3>" +
          '<p class="pub-item__meta">' + esc(p.authors) + " · <em>" + esc(p.venue) + "</em></p>" +
          '<p class="field__text">' + esc(p.note) + "</p>" +
          (p.link
            ? '<div class="card__links"><a href="' + esc(p.link) + '" target="_blank" rel="noopener noreferrer">' + esc(p.linkLabel || "View publication") + " →</a></div>"
            : "") +
          "</article>"
        )
      );
    });
  }

  var patRoot = document.querySelector("[data-patents]");
  if (patRoot && window.PATENTS) {
    window.PATENTS.forEach(function (p) {
      patRoot.appendChild(
        el(
          "<tr>" +
          "<td>" + esc(p.title) + (p.featured ? ' <span style="background:var(--color-accent-soft);color:var(--color-accent);font-weight:600;font-size:var(--text-xs);padding:2px 10px;border-radius:var(--radius-full);white-space:nowrap">newest</span>' : "") + "</td>" +
          "<td>" + esc(p.number) + "<br><span class='field__label' style='margin:0'>" + esc(p.role) + "</span></td>" +
          "<td>" + esc(p.org) + "</td>" +
          "<td>" + esc(p.date) + "</td>" +
          "</tr>"
        )
      );
    });
  }
})();
