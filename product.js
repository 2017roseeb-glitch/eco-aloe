const bestProducts = [
  {
    kicker: "Eco Aloe Hair Shampoo",
    title: "에코 알로에 헤어샴푸 760ml",
    body:
      "유기농 알로에 15%와 나노 입자화 공법을 담아 두피를 마일드하게 세정하고, 매일 쓰기 좋은 산뜻한 사용감을 전하는 에코 대표 샴푸입니다.",
    meta: "760ml | 13,000원",
    image: "assets/best-aloe-shampoo.png",
    alt: "에코 알로에 헤어샴푸",
  },
  {
    kicker: "Eco Black Garlic Hair Shampoo",
    title: "에코 흑마늘 헤어샴푸 760ml",
    body:
      "장기간 발효·숙성시킨 흑마늘 콘셉트로 무너진 두피와 모발에 영양감을 더해 탄력 있고 윤기 있는 모발 케어를 제안합니다.",
    meta: "760ml | 15,000원",
    image: "assets/best-black-garlic.png",
    alt: "에코 흑마늘 헤어샴푸",
  },
  {
    kicker: "Eco Argan Hair Shampoo",
    title: "에코 아르간 헤어샴푸 760ml",
    body:
      "아르간커넬오일의 풍부한 영양과 수분 공급으로 푸석하고 손상된 모발을 실크처럼 부드럽고 건강하게 가꾸는 집중 케어 샴푸입니다.",
    meta: "760ml | 15,000원",
    image: "assets/best-argan.png",
    alt: "에코 아르간 헤어샴푸",
  },
  {
    kicker: "Eco Ginseng Revital",
    title: "에코 진생 리바이탈 헤어샴푸 760ml",
    body:
      "인삼 이미지를 담은 리바이탈 라인으로 약하고 손상된 모발에 생기와 영양감을 더해 에코 시리즈 안에서 프리미엄 인상을 만드는 제품입니다.",
    meta: "760ml | 가격 확인 예정",
    image: "assets/best-ginseng.png",
    alt: "에코 진생 리바이탈",
  },
  {
    kicker: "Eco Volumizer",
    title: "에코 볼류마이저",
    body:
      "모발 볼륨과 스타일링 니즈를 겨냥한 신규 주력 품목으로, 에코 헤어 라인 확장성을 보여줍니다.",
    meta: "용량 확인 예정 | 가격 확인 예정",
    image: "assets/best-volumizer.png",
    alt: "에코 볼류마이저",
  },
];

const catalogProducts = [
  ["에코 알로에 헤어샴푸", "760ml", "13,000원", "assets/best-aloe-shampoo.png"],
  ["에코 흑마늘 헤어샴푸", "760ml", "15,000원", "assets/best-black-garlic.png"],
  ["에코 아르간 헤어샴푸", "760ml", "15,000원", "assets/best-argan.png"],
  ["에코 진생 리바이탈 헤어샴푸", "760ml", "가격 확인 예정", "assets/best-ginseng.png"],
  ["에코 볼류마이저", "용량 확인 예정", "가격 확인 예정", "assets/best-volumizer.png"],
  ["에코 알로에 헤어 컨디셔너", "760ml", "13,000원", "assets/cat-aloe-conditioner-pack.png"],
  ["에코 알로에 헤어 트리트먼트", "760ml", "13,000원", "assets/cat-treatment-pack.png"],
  ["에코 알로에 헤어젤 내추럴", "530ml", "12,000원", "assets/cat-hair-gel-pack.png"],
  ["에코 알로에 헤어 멀티에센스", "530ml", "15,000원", "assets/cat-multi-essence-pack.png"],
  ["에코 알로에 헤어스프레이 슈퍼하드", "300ml", "5,000원", "assets/cat-hair-spray-pack.png"],
  ["에코 알로에 헤어 코팅 에센스", "200ml", "16,000원", "assets/cat-coating-essence-pack.png"],
  ["에코 알로에 헤어 쿨링 샴푸", "760ml", "13,000원", "assets/best-aloe-shampoo.png"],
  ["에코 알로에 초강력 헤어 미스트", "250ml", "9,000원", "assets/cat-strong-mist.png"],
  ["에코 알로에 아르간 헤어오일", "200ml", "20,000원", "assets/argan-oil.png"],
  ["에코 헤어칼라 크림", "60ml + 60ml", "11,000원", "assets/cat-aloe-conditioner.png"],
  ["에코 알로에 헤어칼라 크림", "60ml + 60ml", "11,000원", "assets/cat-treatment.png"],
  ["에코 알로에 헤어 컬링 에센스", "150ml", "가격 확인 예정", "assets/cat-silk-curling-essence.png"],
  ["에코 알로에 헤어 실크 컬링 에센스", "150ml", "9,000원", "assets/cat-silk-curling-essence.png"],
  ["에코 알로에 바디 클렌저", "750ml", "14,000원", "assets/cat-body-cleanser-pack.png"],
  ["에코 알로에 바디 에센스", "500ml", "15,000원", "assets/cat-body-essence-pack.png"],
  ["에코 로즈 바디 클렌저", "760ml", "14,000원", "assets/cat-body-cleanser.png"],
  ["에코 로즈 바디 에센스", "530ml", "15,000원", "assets/cat-body-essence.png"],
  ["에코 라임 민트 바디 2종 세트", "300ml + 300ml + 80ml", "58,000원", "assets/cat-lime-mint-set.png"],
  ["에코 알로에 바디 2종", "750ml + 500ml", "29,000원", "assets/cat-body-cleanser.png"],
];

let activeBest = 0;

const bestKicker = document.querySelector("[data-best-kicker]");
const bestTitle = document.querySelector("[data-best-title]");
const bestBody = document.querySelector("[data-best-body]");
const bestMeta = document.querySelector("[data-best-meta]");
const bestImage = document.querySelector("[data-best-image]");
const bestThumbs = document.querySelector("[data-best-thumbs]");
const catalogGrid = document.querySelector("[data-catalog-grid]");

function renderBest(index) {
  activeBest = (index + bestProducts.length) % bestProducts.length;
  const item = bestProducts[activeBest];
  bestKicker.textContent = item.kicker;
  bestTitle.textContent = item.title;
  bestBody.textContent = item.body;
  bestMeta.textContent = item.meta;
  bestImage.src = item.image;
  bestImage.alt = item.alt;

  bestThumbs.querySelectorAll("button").forEach((button, buttonIndex) => {
    button.classList.toggle("is-active", buttonIndex === activeBest);
  });
}

function renderBestThumbs() {
  bestThumbs.innerHTML = bestProducts
    .map(
      (item, index) => `
        <button type="button" data-best-thumb="${index}" aria-label="${item.title} 보기">
          <img src="${item.image}" alt="" />
          <span>${item.title}</span>
        </button>
      `
    )
    .join("");

  bestThumbs.querySelectorAll("[data-best-thumb]").forEach((button) => {
    button.addEventListener("click", () => renderBest(Number(button.dataset.bestThumb)));
  });
}

function renderCatalog() {
  catalogGrid.innerHTML = catalogProducts
    .map(
      ([name, volume, price, image]) => `
        <article class="catalog-card">
          <img src="${image}" alt="${name}" />
          <h3>${name}</h3>
          <p>${volume} · ${price}</p>
        </article>
      `
    )
    .join("");
}

document.querySelector("[data-best-prev]")?.addEventListener("click", () => renderBest(activeBest - 1));
document.querySelector("[data-best-next]")?.addEventListener("click", () => renderBest(activeBest + 1));

const languageMenu = document.querySelector(".language-menu");
const languageToggle = document.querySelector(".language-toggle");
const languageButtons = document.querySelectorAll("[data-lang]");

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
  if (event.target instanceof Node && !languageMenu?.contains(event.target)) closeLanguageMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLanguageMenu();
});

renderBestThumbs();
renderBest(0);
renderCatalog();
