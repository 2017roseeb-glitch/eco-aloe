const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelectorAll(".main-nav a");
const languageMenu = document.querySelector(".language-menu");
const languageToggle = document.querySelector(".language-toggle");
const languageButtons = document.querySelectorAll("[data-lang]");

function syncHeader() {
  header.classList.toggle("is-solid", window.scrollY > 80);
}

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

menuButton.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  document.body.classList.toggle("is-menu-open", isOpen);
  menuButton.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
  closeLanguageMenu();
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
    document.body.classList.remove("is-menu-open");
    menuButton.setAttribute("aria-label", "메뉴 열기");
  });
});

function closeLanguageMenu() {
  languageMenu?.classList.remove("is-open");
  languageToggle?.setAttribute("aria-expanded", "false");
}

languageToggle?.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpen = languageMenu?.classList.toggle("is-open") ?? false;
  languageToggle.setAttribute("aria-expanded", String(isOpen));
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.ECO_I18N?.setLanguage(button.dataset.lang || "ko");
    closeLanguageMenu();
  });
});

document.addEventListener("click", (event) => {
  if (event.target instanceof Node && !languageMenu?.contains(event.target)) {
    closeLanguageMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  header.classList.remove("is-open");
  document.body.classList.remove("is-menu-open");
  menuButton.setAttribute("aria-label", "메뉴 열기");
  closeLanguageMenu();
});
