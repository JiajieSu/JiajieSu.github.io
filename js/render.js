/* ============================================================
   CARD RENDERER — turns the data/*.js files into page content.
   You normally never need to edit this file: change the data
   files instead and the pages rebuild themselves.
   It also picks Chinese (zh) text automatically when the
   language toggle (data/i18n.js) is switched to 中文.
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

  /* ---------- language helpers ---------- */
  var LANG = window.LANG === "zh" ? "zh" : "en";
  /* pick the Chinese variant of a field when reading Chinese,
     falling back to the English field when it is missing */
  function pick(obj, field) {
    if (LANG === "zh" && obj && obj.zh && obj.zh[field] != null) return obj.zh[field];
    return obj ? obj[field] : undefined;
  }
  var L = (window.I18N && window.I18N[LANG]) || {};
  function label(key, fallback) {
    return L[key] != null ? L[key] : fallback;
  }

  /* ---------- one research / engineering project card ----------
     Images are ALWAYS stacked above the text, full card width,
     natural aspect ratio — never cropped. Multiple images
     become multiple full-width rows, each with its caption. */
  function projectCard(p) {
    var media = "";
    var imgs = p.images
      ? p.images
      : p.image
      ? [{ src: p.image, caption: p.imageCaption, zhCaption: p.zh ? p.zh.caption : null }]
      : [];
    if (imgs.length === 1) {
      media =
        '<figure class="card__media"><img src="images/' + esc(imgs[0].src) +
        '" alt="' + esc(imgs[0].caption || pick(p, "title")) + '" loading="lazy" decoding="async">' +
        (imgs[0].caption
          ? '<figcaption class="figure-caption" style="padding:12px 16px">' + esc(LANG === "zh" && p.zh && p.zh.caption ? p.zh.caption : imgs[0].caption) + "</figcaption>"
          : "") +
        "</figure>";
    } else if (imgs.length > 1) {
      media =
        '<div class="card__media card__media--stack">' +
        imgs
          .map(function (im) {
            var cap = LANG === "zh" && im.zhCaption ? im.zhCaption : im.caption;
            return (
              '<figure class="card__media--item">' +
              '<img src="images/' + esc(im.src) + '" alt="' + esc(cap || pick(p, "title")) + '" loading="lazy" decoding="async" style="display:block;width:100%;height:auto;object-fit:contain;background:var(--color-surface)">' +
              (cap ? '<figcaption class="figure-caption">' + esc(cap) + "</figcaption>" : "") +
              "</figure>"
            );
          })
          .join("") +
        "</div>";
    }

    var fields = "";
    if (pick(p, "question") && !p.featured)
      fields += field(label("label.question", "Research Question"), '<em style="font-style:italic">' + esc(pick(p, "question")) + "</em>", true);
    if (pick(p, "methods"))
      fields += field(label("label.methods", "Methods"), '<ul class="field__list">' + pick(p, "methods").map(function (m) { return "<li>" + esc(m) + "</li>"; }).join("") + "</ul>");
    if (pick(p, "contribution"))
      fields += field(label("label.contribution", "My Contribution"), "<ul>" + pick(p, "contribution").map(function (c) { return "• " + esc(c); }).join("<br>") + "</ul>");
    if (pick(p, "outcomes")) fields += field(label("label.outcomes", "Outcomes"), esc(pick(p, "outcomes")));

    var links = "";
    if (p.links && p.links.length) {
      links =
        '<div class="card__links">' +
        p.links
          .map(function (l) {
            return '<a href="' + esc(l.url) + '"' + (/^https?:/.test(l.url) ? ' target="_blank" rel="noopener noreferrer"' : "") + ">" + esc(LANG === "zh" && l.zhLabel ? l.zhLabel : l.label) + " →</a>";
          })
          .join("") +
        "</div>";
    }

    var why = "";
    var whyText = pick(p, "why");
    if (whyText) why = '<div class="why-box"><span class="field__label">' + esc(label("label.why", "Why this shapes my PhD direction")) + "</span>" + esc(whyText) + "</div>";

    var skills = p.skills
      ? '<ul class="field__list">' + p.skills.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul>"
      : "";

    return el(
      '<article class="card ' + (p.featured ? "card--featured" : "card--stack") +
      (media ? " card--with-media" : "") + ' fade-in">' +
        media +
        '<div class="card__body">' +
        '<p class="card__kicker"><span class="theme-dot"></span>' + esc(pick(p, "kicker") || "") + "</p>" +
        "<h3>" + esc(pick(p, "title")) + "</h3>" +
        '<p class="card__role"><strong>' + esc(pick(p, "role")) + "</strong>" + (pick(p, "period") ? " · " + esc(pick(p, "period")) : "") + "</p>" +
        (pick(p, "question") && p.featured ? '<p class="card__question">' + esc(pick(p, "question")) + "</p>" : "") +
        fields +
        (skills ? '<div class="field"><span class="field__label">' + esc(label("label.skills", "Skills")) + "</span>" + skills + "</div>" : "") +
        why + links +
        "</div></article>"
    );

    function field(fieldLabel, html, plain) {
      return (
        '<div class="field"><span class="field__label">' + esc(fieldLabel) + "</span>" +
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
        '<div class="theme-group__head"><h2><span style="color:var(--color-accent)">' + esc(theme.num) + '.</span> ' + esc(pick(theme, "title")) + "</h2></div>" +
        '<p class="theme-group__blurb">' + esc(pick(theme, "blurb")) + "</p>" +
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
        '<div class="theme-group__head"><h2>' + esc(pick(group, "title")) + "</h2></div>" +
        '<p class="theme-group__blurb">' + esc(pick(group, "blurb")) + "</p>" +
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
              "<h3>" + esc(pick(c, "title")) + "</h3>" +
              '<p class="card__role"><strong>' + esc(pick(c, "org")) + "</strong></p>" +
              '<p class="field__text">' + esc(pick(c, "text")) + "</p></article>"
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
          '<h3 class="pub-item__title">' + esc(pick(p, "title")) + "</h3>" +
          '<p class="pub-item__meta">' + esc(p.authors) + " · <em>" + esc(p.venue) + "</em></p>" +
          '<p class="field__text">' + esc(pick(p, "note")) + "</p>" +
          (p.link
            ? '<div class="card__links"><a href="' + esc(p.link) + '" target="_blank" rel="noopener noreferrer">' + esc(pick(p, "linkLabel") || label("label.viewPub", "View publication")) + " →</a></div>"
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
          "<td>" + esc(pick(p, "title")) + (p.featured ? ' <span style="background:var(--color-accent-soft);color:var(--color-accent);font-weight:600;font-size:var(--text-xs);padding:2px 10px;border-radius:var(--radius-full);white-space:nowrap">' + esc(label("label.newest", "newest")) + "</span>" : "") + "</td>" +
          "<td>" + esc(p.number) + "<br><span class='field__label' style='margin:0'>" + esc(pick(p, "role") || label("label.coinventor", "Co-inventor")) + "</span></td>" +
          "<td>" + esc(pick(p, "org")) + "</td>" +
          "<td>" + esc(pick(p, "date")) + "</td>" +
          "</tr>"
        )
      );
    });
  }
})();
