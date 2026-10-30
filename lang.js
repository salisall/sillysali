/* ============================================================
   TH / EN language toggle — shared by every page
   ------------------------------------------------------------
   Static text:  add data-th="..." to English text, or
                 data-en="..." to Thai text. The other language
                 is whatever is already written in the HTML.
   Placeholders: data-th-placeholder / data-en-placeholder
   Scripts:      use t("English", "ไทย") and listen for
                 the "langchange" event to re-render.
   First visit follows the browser language; the choice is
   then remembered on this browser.
   ============================================================ */
(function () {
  var KEY = "sali-lang";
  // first visit: follow the browser language (Thai browsers start in TH)
  var lang = /^th/i.test(navigator.language || "") ? "th" : "en";
  try { lang = localStorage.getItem(KEY) || lang; } catch (e) {}
  if (lang !== "th") lang = "en";

  window.LANG = lang;
  window.t = function (en, th) { return window.LANG === "th" ? (th || en) : en; };

  function apply() {
    var L = window.LANG;
    document.documentElement.lang = L;
    document.querySelectorAll("[data-th],[data-en]").forEach(function (n) {
      if (n.dataset.orig == null) {
        n.dataset.orig = n.innerHTML;
        n.dataset.origLang = n.hasAttribute("data-th") ? "en" : "th";
      }
      n.innerHTML = L === n.dataset.origLang ? n.dataset.orig : n.getAttribute("data-" + L);
    });
    document.querySelectorAll("[data-th-placeholder],[data-en-placeholder]").forEach(function (n) {
      if (n.dataset.origPh == null) {
        n.dataset.origPh = n.placeholder;
        n.dataset.origPhLang = n.hasAttribute("data-th-placeholder") ? "en" : "th";
      }
      n.placeholder = L === n.dataset.origPhLang ? n.dataset.origPh : n.getAttribute("data-" + L + "-placeholder");
    });
    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.dataset.lang === L);
    });
  }

  function setLang(L) {
    window.LANG = L;
    try { localStorage.setItem(KEY, L); } catch (e) {}
    apply();
    document.dispatchEvent(new CustomEvent("langchange", { detail: L }));
  }

  function addToggle() {
    var nav = document.querySelector("nav");
    if (!nav || nav.querySelector(".lang-toggle")) return;
    var box = document.createElement("div");
    box.className = "lang-toggle";
    box.setAttribute("role", "group");
    box.setAttribute("aria-label", "Language");
    ["en", "th"].forEach(function (L) {
      var b = document.createElement("button");
      b.type = "button";
      b.dataset.lang = L;
      b.textContent = L.toUpperCase();
      b.onclick = function () { if (window.LANG !== L) setLang(L); };
      box.appendChild(b);
    });
    var pill = nav.querySelector(".pill");
    nav.insertBefore(box, pill || null);

    var css = document.createElement("style");
    css.textContent =
      ".lang-toggle{display:flex;border:1.5px solid var(--ink);border-radius:999px;overflow:hidden;background:var(--paper);flex:none;margin-left:auto}" +
      ".lang-toggle button{border:none;background:none;font:600 12px/1 'IBM Plex Mono',monospace;padding:8px 11px;color:var(--muted);cursor:pointer;transition:.15s}" +
      ".lang-toggle button[aria-pressed=true]{background:var(--ink);color:var(--bg)}" +
      "nav .tags{margin-left:auto}nav .tags a{white-space:nowrap}" +
      "@media (max-width:560px){.lang-toggle button{padding:7px 9px}nav .pill{padding:9px 14px;font-size:13px}}";
    document.head.appendChild(css);
  }

  function init() { addToggle(); apply(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
