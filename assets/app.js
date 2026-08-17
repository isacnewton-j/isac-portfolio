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

// Resume PDF generator using jsPDF (loaded from CDN in pages)
function initResumeDownload() {
  async function makePdfFromMarkdown(src, filename) {
    try {
      const res = await fetch(src);
      if (!res.ok) throw new Error('fetch failed');
      const text = await res.text();
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({ unit: 'pt', format: 'a4' });
      const margin = 40;
      const maxWidth = doc.internal.pageSize.getWidth() - margin * 2;
      const lineHeight = 14;
      const lines = doc.splitTextToSize(text, maxWidth);
      let cursor = margin;
      doc.setFontSize(11);
      for (let i = 0; i < lines.length; i++) {
        if (cursor + lineHeight > doc.internal.pageSize.getHeight() - margin) {
          doc.addPage();
          cursor = margin;
        }
        doc.text(lines[i], margin, cursor);
        cursor += lineHeight;
      }
      doc.save(filename);
    } catch (e) {
      console.error(e);
      alert('Could not generate PDF. Please try downloading the markdown file as a fallback.');
    }
  }

  const btn = document.getElementById('download-resume');
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const src = btn.getAttribute('data-src');
      makePdfFromMarkdown(src, 'Isac_Newton_J_Resume.pdf');
    });
  }
  const btn2 = document.getElementById('download-resume-hr');
  if (btn2) {
    btn2.addEventListener('click', (e) => {
      e.preventDefault();
      const src = btn2.getAttribute('data-src');
      makePdfFromMarkdown(src, 'Isac_Newton_J_Resume.pdf');
    });
  }
}

// Delay init to ensure jspdf is loaded via CDN script on the page
window.addEventListener('DOMContentLoaded', () => setTimeout(initResumeDownload, 250));

