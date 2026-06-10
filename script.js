const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelectorAll(".main-nav a");
const languageMenu = document.querySelector(".language-menu");
const languageToggle = document.querySelector(".language-toggle");
const languageButtons = document.querySelectorAll("[data-lang]");

function syncHeader() {
  header.classList.toggle("is-solid", window.scrollY > 80);
  document.body.classList.toggle("is-quick-visible", window.scrollY > window.innerHeight * 0.5);
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

const revealTargets = document.querySelectorAll(".reveal");
const sectionTargets = document.querySelectorAll("[data-section]");
const sectionLinks = document.querySelectorAll("[data-section-link]");
const autoplayVideos = document.querySelectorAll("[data-autoplay-video]");
const filmVideo = document.querySelector("[data-autoplay-video]");
const filmPlayToggle = document.querySelector("[data-film-toggle-play]");
const filmMuteToggle = document.querySelector("[data-film-toggle-mute]");
const heroSlides = Array.from(document.querySelectorAll(".hero-slide"));
const heroPrevButton = document.querySelector("[data-hero-prev]");
const heroNextButton = document.querySelector("[data-hero-next]");
const heroProgress = document.querySelector("[data-hero-progress]");
let activeHeroSlide = 0;
let heroSlideTimer = null;

function syncHeroSlide(index) {
  if (!heroSlides.length) return;
  activeHeroSlide = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeHeroSlide);
  });
  if (heroProgress) {
    const progress = (activeHeroSlide + 1) / heroSlides.length;
    heroProgress.style.transform = `scaleX(${progress})`;
  }
}

function startHeroAutoplay() {
  if (heroSlides.length <= 1) return;
  window.clearInterval(heroSlideTimer);
  heroSlideTimer = window.setInterval(() => syncHeroSlide(activeHeroSlide + 1), 3000);
}

heroPrevButton?.addEventListener("click", () => {
  syncHeroSlide(activeHeroSlide - 1);
  startHeroAutoplay();
});
heroNextButton?.addEventListener("click", () => {
  syncHeroSlide(activeHeroSlide + 1);
  startHeroAutoplay();
});
syncHeroSlide(0);
startHeroAutoplay();

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

if ("IntersectionObserver" in window && sectionTargets.length && sectionLinks.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const active = entry.target.dataset.section;
        sectionLinks.forEach((link) => {
          link.classList.toggle("is-active", link.dataset.sectionLink === active);
        });
      });
    },
    { threshold: 0.56 }
  );

  sectionTargets.forEach((section) => sectionObserver.observe(section));
}

if ("IntersectionObserver" in window && autoplayVideos.length) {
  const videoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (!(video instanceof HTMLVideoElement)) return;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.5 }
  );

  autoplayVideos.forEach((video) => videoObserver.observe(video));
}

function syncFilmButtons() {
  if (!(filmVideo instanceof HTMLVideoElement)) return;
  if (filmPlayToggle) {
    const isPlaying = !filmVideo.paused;
    filmPlayToggle.textContent = "";
    filmPlayToggle.setAttribute("aria-label", isPlaying ? "정지" : "재생");
    filmPlayToggle.setAttribute("title", isPlaying ? "정지" : "재생");
    filmPlayToggle.classList.toggle("is-active", isPlaying);
  }
  if (filmMuteToggle) {
    filmMuteToggle.textContent = "";
    filmMuteToggle.setAttribute("aria-label", filmVideo.muted ? "음향 켜기" : "음소거");
    filmMuteToggle.setAttribute("title", filmVideo.muted ? "음향 켜기" : "음소거");
    filmMuteToggle.classList.toggle("is-active", !filmVideo.muted);
  }
}

if (filmVideo instanceof HTMLVideoElement) {
  filmVideo.volume = 0.3;
  filmVideo.muted = true;
  syncFilmButtons();

  filmPlayToggle?.addEventListener("click", () => {
    if (filmVideo.paused) {
      filmVideo.play().catch(() => {});
    } else {
      filmVideo.pause();
    }
    syncFilmButtons();
  });

  filmMuteToggle?.addEventListener("click", () => {
    filmVideo.muted = !filmVideo.muted;
    if (!filmVideo.muted) filmVideo.volume = 0.3;
    syncFilmButtons();
  });

  filmVideo.addEventListener("play", syncFilmButtons);
  filmVideo.addEventListener("pause", syncFilmButtons);
  filmVideo.addEventListener("volumechange", syncFilmButtons);
}

const supportSlider = document.querySelector("[data-support-slider]");

if (supportSlider) {
  const supportSlides = supportSlider.querySelector(".support-slides");
  const slides = Array.from(supportSlider.querySelectorAll(".support-slide"));
  const prevButton = supportSlider.querySelector("[data-support-prev]");
  const nextButton = supportSlider.querySelector("[data-support-next]");
  const count = supportSlider.querySelector("[data-support-count]");
  let activeSlide = 0;

  function syncSupportSlider() {
    if (!supportSlides || !slides.length) return;
    const slide = slides[activeSlide];
    supportSlides.style.transform = `translateX(-${slide.offsetLeft}px)`;
    if (count) count.textContent = String(activeSlide + 1).padStart(2, "0");
  }

  prevButton?.addEventListener("click", () => {
    activeSlide = (activeSlide - 1 + slides.length) % slides.length;
    syncSupportSlider();
  });

  nextButton?.addEventListener("click", () => {
    activeSlide = (activeSlide + 1) % slides.length;
    syncSupportSlider();
  });

  window.addEventListener("resize", syncSupportSlider);
  syncSupportSlider();
}

const proposalForm = document.querySelector("[data-proposal-form]");
const proposalAgree = document.querySelector("[data-proposal-agree]");

if (proposalForm instanceof HTMLFormElement) {
  const getField = (name) => proposalForm.elements.namedItem(name);
  const getValue = (name) => {
    const field = getField(name);
    return field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement
      ? field.value.trim()
      : "";
  };
  const getCheckedValue = (name) => {
    const field = getField(name);
    if (field instanceof RadioNodeList) return field.value;
    return "";
  };

  proposalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (proposalAgree instanceof HTMLInputElement && !proposalAgree.checked) {
      alert("개인정보 수집 및 이용에 동의해야 메일을 보낼 수 있습니다.");
      proposalAgree.focus();
      return;
    }

    const requiredNames = ["companyName", "managerName", "emailId", "emailDomain", "phoneNumber", "subject", "message"];
    const missingField = requiredNames
      .map((name) => getField(name))
      .find((field) => {
        if (field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement) {
          return !field.value.trim();
        }
        return false;
      });

    if (missingField instanceof HTMLElement) {
      alert("필수 항목을 입력해 주세요.");
      missingField.focus();
      return;
    }

    const businessNumber = [getValue("businessNumber1"), getValue("businessNumber2"), getValue("businessNumber3")]
      .filter(Boolean)
      .join("-");
    const email = `${getValue("emailId")}@${getValue("emailDomain")}`;
    const phone = `${getValue("phonePrefix")} ${getValue("phoneNumber")}`;
    const subject = `[ROSEE ECO 수출&협력 제안] ${getValue("subject")}`;
    const body = [
      "ROSEE ECO 수출&협력 제안",
      "",
      `[협력업체 정보]`,
      `업체명: ${getValue("companyName")}`,
      `사업자등록번호: ${businessNumber || "미입력"}`,
      `담당자명: ${getValue("managerName")}`,
      `담당자 이메일: ${email}`,
      `담당자 연락처: ${getCheckedValue("phoneType")} / ${phone}`,
      "",
      `[상담서 작성]`,
      `상담 구분: ${getCheckedValue("proposalType")}`,
      `제목: ${getValue("subject")}`,
      "",
      `문의 내용:`,
      getValue("message"),
      "",
      "개인정보 수집 및 이용 동의: 동의",
    ].join("\n");

    window.location.href = `mailto:2017roseeb@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

document.querySelectorAll("[data-copy-email]").forEach((button) => {
  if (!(button instanceof HTMLButtonElement)) return;

  const email = button.dataset.copyEmail || "";
  const defaultLabel = button.dataset.copyLabel || button.textContent || "복사하기";
  const copiedLabel = button.dataset.copiedLabel || "복사 완료";

  const fallbackCopy = () => {
    const helper = document.createElement("textarea");
    helper.value = email;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.left = "-9999px";
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    document.body.removeChild(helper);
  };

  button.addEventListener("click", async (event) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        fallbackCopy();
      }
      button.textContent = copiedLabel;
    } catch {
      fallbackCopy();
      button.textContent = copiedLabel;
    }

    window.getSelection()?.removeAllRanges();

    window.setTimeout(() => {
      button.textContent = defaultLabel;
    }, 1600);
  });
});
