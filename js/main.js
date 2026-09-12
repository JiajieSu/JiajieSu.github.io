/* ============================================================
   MAIN BEHAVIORS — theme toggle, mobile nav, active link.
   You normally never need to edit this file.
   ============================================================ */

(function () {
  /* ---------- Theme (light/dark) toggle ---------- */
  var root = document.documentElement;
  var toggle = document.querySelector("[data-theme-toggle]");
  var SUN =
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>';
  var MOON =
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  var saved = null;
  try {
    var m = document.cookie.match(/(?:^|;\s*)theme=(dark|light)(?:;|$)/);
    saved = m ? m[1] : null;
  } catch (e) { /* ignore */ }
  var theme = saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  applyTheme(theme);

  function applyTheme(t) {
    root.setAttribute("data-theme", t);
    try { document.cookie = "theme=" + t + ";path=/;max-age=31536000;samesite=lax"; } catch (e) { /* ignore */ }
    if (toggle) {
      toggle.setAttribute("aria-label", "Switch to " + (t === "dark" ? "light" : "dark") + " mode");
      toggle.innerHTML = t === "dark" ? SUN : MOON;
    }
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      theme = theme === "dark" ? "light" : "dark";
      applyTheme(theme);
    });
  }

  /* ---------- Mobile navigation ---------- */
  var navToggle = document.querySelector("[data-nav-toggle]");
  var nav = document.getElementById("site-nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      navToggle.setAttribute("aria-expanded", String(!open));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.setAttribute("data-open", "false");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Highlight current page in nav ---------- */
  var page = (location.pathname.split("/").pop() || "index.html").split("#")[0].replace(/\.html$/, "");
  document.querySelectorAll("#site-nav a").forEach(function (a) {
    var href = (a.getAttribute("href") || "").split("#")[0].replace(/\.html$/, "");
    if (href === page || (page === "" && href === "index")) {
      a.setAttribute("aria-current", "page");
    }
  });

  /* ---------- Footer year ---------- */
  var yr = document.querySelector("[data-year]");
  if (yr) yr.textContent = new Date().getFullYear();
})();
