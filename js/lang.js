/* ============================================================
   LANGUAGE BOOT — runs first on every page (loaded in <head>).
   Reads the "lang" cookie (zh | en) and sets:
     window.LANG  → the active language
     html.lang / html.lang-zh class → fonts + typography
   You normally never need to edit this file.
   ============================================================ */
(function () {
  var m = document.cookie.match(/(?:^|;\s*)lang=(zh|en)(?:;|$)/);
  window.LANG = m && m[1] === "zh" ? "zh" : "en";
  var html = document.documentElement;
  html.lang = window.LANG === "zh" ? "zh-CN" : "en";
  if (window.LANG === "zh") html.classList.add("lang-zh");
})();
