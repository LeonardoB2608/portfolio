(function () {
  function setup() {
    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("mobile-menu");
    if (!btn || !menu) return;

    const body = document.body;
    const spans = btn.querySelectorAll("span");

    const open = () => {
      menu.classList.remove("scale-y-0", "opacity-0", "pointer-events-none");
      menu.classList.add("scale-y-100", "opacity-100", "pointer-events-auto");
      btn.setAttribute("aria-expanded", "true");
      body.classList.add("overflow-hidden");

      // animación a "X"
      spans[0].classList.add("rotate-45", "translate-y-2");
      spans[1].classList.add("opacity-0");
      spans[2].classList.add("-rotate-45", "-translate-y-2");
    };

    const close = () => {
      menu.classList.add("scale-y-0", "opacity-0", "pointer-events-none");
      menu.classList.remove("scale-y-100", "opacity-100", "pointer-events-auto");
      btn.setAttribute("aria-expanded", "false");
      body.classList.remove("overflow-hidden");

      // volver a "≡"
      spans[0].classList.remove("rotate-45", "translate-y-2");
      spans[1].classList.remove("opacity-0");
      spans[2].classList.remove("-rotate-45", "-translate-y-2");
    };

    const toggle = () =>
      menu.classList.contains("opacity-0") ? open() : close();

    btn.addEventListener("click", toggle);
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  document.addEventListener("DOMContentLoaded", setup);
  document.addEventListener("astro:page-load", setup);
})();
