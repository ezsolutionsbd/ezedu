// Theme switch, mobile menu, and current-section highlight.
(function () {
  var root = document.documentElement;
  var themeBtn = document.getElementById("theme-switch");
  var themeMeta = document.querySelector("meta[name='theme-color']");

  function setTheme(theme) {
    var dark = theme === "dark";
    if (dark) root.setAttribute("data-theme", "dark"); else root.removeAttribute("data-theme");
    if (themeBtn) {
      themeBtn.setAttribute("aria-pressed", dark ? "true" : "false");
      themeBtn.setAttribute("aria-label", dark ? "Light mode" : "Dark mode");
    }
    if (themeMeta) themeMeta.setAttribute("content", dark ? "#0b1417" : "#0e7c86");
  }

  setTheme(root.getAttribute("data-theme") === "dark" ? "dark" : "light");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setTheme(next);
      try { localStorage.setItem("ezedu-theme", next); } catch (e) { /* private mode */ }
    });
  }

  var nav = document.getElementById("nav");
  var menuBtn = document.getElementById("menu-btn");

  function closeMenu() {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }

  if (nav && menuBtn) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        closeMenu();
        menuBtn.focus();
      }
    });
  }

  if (!("IntersectionObserver" in window) || !nav) return;
  var links = {};
  nav.querySelectorAll("a[href^='#']").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var link = links[entry.target.id];
      if (!link) return;
      if (entry.isIntersecting) {
        Object.keys(links).forEach(function (k) { links[k].classList.remove("active"); });
        link.classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  Object.keys(links).forEach(function (id) {
    var section = document.getElementById(id);
    if (section) observer.observe(section);
  });
})();
