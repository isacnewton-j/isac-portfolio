function initReveal() {
  const els = Array.from(document.querySelectorAll(".reveal"));
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: "80px 0px -10px 0px", threshold: 0.08 }
  );
  els.forEach((el) => io.observe(el));
}

function initCopyEmail() {
  const btn = document.querySelector("[data-copy-email]");
  if (!btn) return;
  btn.addEventListener("click", async () => {
    const email = btn.getAttribute("data-copy-email") || "";
    try {
      await navigator.clipboard.writeText(email);
      const prev = btn.textContent;
      btn.textContent = "Copied";
      setTimeout(() => (btn.textContent = prev), 1200);
    } catch {
      window.location.href = "mailto:" + email;
    }
  });
}

initReveal();
initCopyEmail();

function initNavToggle() {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");
  if (!btn || !nav) return;
  btn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

initNavToggle();

