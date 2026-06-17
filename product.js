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
    meta: "760ml | 16,000원",
    image: "assets/best-ginseng.png",
    alt: "에코 진생 리바이탈",
  },
];

const catalogProducts = [
  ["에코 알로에 헤어샴푸", "760ml", "13,000원", "assets/best-aloe-shampoo.png", "aloeShampoo"],
  ["에코 흑마늘 헤어샴푸", "760ml", "15,000원", "assets/best-black-garlic.png", "blackGarlic"],
  ["에코 아르간 헤어샴푸", "760ml", "15,000원", "assets/best-argan.png", "arganShampoo"],
  ["에코 진생 리바이탈 헤어샴푸", "760ml", "16,000원", "assets/best-ginseng.png", "ginseng"],
  ["에코 알로에 헤어 컨디셔너", "760ml", "14,000원", "assets/cat-aloe-conditioner-pack.png", "aloeConditioner"],
  ["에코 알로에 헤어 트리트먼트", "760ml", "14,000원", "assets/cat-treatment-pack.png", "treatment"],
  ["에코 알로에 헤어젤", "530ml", "13,000원", "assets/cat-hair-gel-pack.png", "hairGel"],
  ["에코 알로에 헤어 멀티에센스", "530ml", "16,000원", "assets/cat-multi-essence-pack.png", "multiEssence"],
  ["에코 알로에 헤어 스프레이", "300ml", "8,000원", "assets/cat-hair-spray-pack.png", "hairSpray"],
  ["에코 알로에 헤어 코팅 에센스", "200ml", "17,000원", "assets/cat-coating-essence-pack.png", "coatingEssence"],
  ["에코 알로에 초강력 헤어미스트", "250ml", "10,000원", "assets/hair-mist-product.png", "strongMist"],
  ["에코 알로에 아르간 헤어오일", "200ml", "21,000원", "assets/aloe-argan-hair-oil.png", "arganOil"],
  ["에코 알로에 헤어 칼라크림 새치용", "60ml", "11,000원", "assets/hair-color-gray-cover.png", "hairColor"],
  ["에코 알로에 헤어칼라 크림 멋내기용", "60ml", "11,000원", "assets/hair-color-fashion.png", "aloeHairColor"],
  ["에코 알로에 헤어 컬링 에센스", "150ml", "10,000원", "assets/cat-silk-curling-essence.png", "curlingEssence"],
  ["에코 알로에 바디 클렌저", "750ml", "16,000원", "assets/cat-body-cleanser-pack.png", "bodyCleanser"],
  ["에코 알로에 바디 에센스", "500ml", "16,000원", "assets/cat-body-essence-pack.png", "bodyEssence"],
  ["에코 로즈 바디 클렌저", "760ml", "16,000원", "assets/eco-rose-body-cleanser.png", "roseCleanser"],
  ["에코 로즈 바디 에센스", "530ml", "16,000원", "assets/eco-rose-body-essence.png", "roseEssence"],
  ["로제 에코 라임민트 바디 2종세트", "세트구성", "38,000원", "assets/eco-lime-mint-body-set.jpg", "limeMintSet"],
  ["에코 알로에 모이스처 클렌징폼", "200ml", "15,000원", "assets/aloe-moisture-cleansing-foam.jpg", "bodySet"],
];

const exportOnlyProductKeys = new Set(["blackGarlic", "arganShampoo", "ginseng"]);
const productBuyLinks = {
  aloeShampoo: "https://smartstore.naver.com/roseeb/products/2465990391",
  aloeConditioner: "https://smartstore.naver.com/roseeb/products/2465990403",
  treatment: "https://smartstore.naver.com/roseeb/products/2465990262",
  hairGel: "https://smartstore.naver.com/roseeb/products/2465990293",
  multiEssence: "https://smartstore.naver.com/roseeb/products/2465990277",
  hairSpray: "https://smartstore.naver.com/roseeb/products/2465990249",
  coatingEssence: "https://smartstore.naver.com/roseeb/products/2465990237",
  strongMist: "https://smartstore.naver.com/roseeb/products/2465990217",
  arganOil: "https://smartstore.naver.com/roseeb/products/2465990206",
  hairColor: "https://smartstore.naver.com/roseeb/products/13629283790",
  aloeHairColor: "https://smartstore.naver.com/roseeb/products/13629311618",
  curlingEssence: "https://smartstore.naver.com/roseeb/products/13629121940",
  bodyCleanser: "https://smartstore.naver.com/roseeb/products/2465990355",
  bodyEssence: "https://smartstore.naver.com/roseeb/products/2465990166",
  roseCleanser: "https://smartstore.naver.com/roseeb/products/2465990310",
  roseEssence: "https://smartstore.naver.com/roseeb/products/2465990338",
  limeMintSet: "https://smartstore.naver.com/roseeb/products/7426703079",
  bodySet: "https://smartstore.naver.com/roseeb/products/12843142273",
};

let activeBest = 0;

const bestKicker = document.querySelector("[data-best-kicker]");
const bestTitle = document.querySelector("[data-best-title]");
const bestBody = document.querySelector("[data-best-body]");
const bestMeta = document.querySelector("[data-best-meta]");
const bestImage = document.querySelector("[data-best-image]");
const bestThumbs = document.querySelector("[data-best-thumbs]");
const catalogGrid = document.querySelector("[data-catalog-grid]");
const catalogTitle = document.querySelector("[data-catalog-title]");
const catalogDesc = document.querySelector("[data-catalog-desc]");
const catalogSection = document.querySelector(".catalog-section");
const categoryPanel = document.querySelector("[data-category-panel]");
const categoryLabels = {
  all: {
    title: "전제품",
    desc: "",
    label: "전체",
  },
  hair: {
    title: "헤어라인",
    desc: "샴푸, 컨디셔너, 트리트먼트, 스타일링까지 에코 헤어 케어 제품입니다.",
    label: "헤어",
  },
  body: {
    title: "바디라인",
    desc: "바디 클렌저, 바디 에센스, 세트 구성을 중심으로 한 에코 바디 케어 제품입니다.",
    label: "바디",
  },
  face: {
    title: "페이스라인",
    desc: "페이스 카테고리는 추후 제품 정보가 준비되는 대로 업데이트됩니다.",
    label: "페이스",
  },
};

const categoryPanels = {
  hair: {
    title: "헤어",
    subtitle: "샴푸 · 컨디셔너 · 헤어 케어",
    image: "assets/category-hair.jpg",
    alt: "에코 알로에 헤어 제품",
  },
  body: {
    title: "바디",
    subtitle: "클렌저 · 바디 에센스 · 세트",
    image: "assets/category-body.jpg",
    alt: "에코 알로에 바디 제품",
  },
  face: {
    title: "페이스",
    subtitle: "데일리 케어라인",
    image: "assets/category-face.jpg",
    alt: "에코 알로에 페이스 제품",
  },
};

function getProductCategory(name) {
  if (name.includes("클렌징폼")) return "face";
  if (name.includes("바디") || name.includes("로즈") || name.includes("라임 민트")) return "body";
  if (name.includes("페이스")) return "face";
  return "hair";
}

function getSelectedCategory() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category") || "all";
  return categoryLabels[category] ? category : "all";
}

function i18n(key, fallback = "") {
  return window.ECO_I18N?.t(key) || fallback;
}

function getCategoryMeta(category) {
  const base = categoryLabels[category] || categoryLabels.all;
  if (category === "all") {
    return {
      title: i18n("store.allProducts", base.title),
      desc: base.desc,
      label: i18n("store.category.all", base.label),
    };
  }
  return {
    title: i18n(`store.category.${category}Title`, base.title),
    desc: i18n(`store.category.${category}Desc`, base.desc),
    label: i18n(`store.category.${category}`, base.label),
  };
}

function formatCatalogValue(value) {
  return value === "가격 확인 예정" ? i18n("store.pendingPrice", value) : value;
}

function splitCatalogTitle(title) {
  const words = title.trim().split(/\s+/);
  if (words.length < 2) return [title, ""];

  let bestIndex = 1;
  let smallestDifference = Infinity;
  for (let index = 1; index < words.length; index += 1) {
    const firstLine = words.slice(0, index).join(" ");
    const secondLine = words.slice(index).join(" ");
    const difference = Math.abs(Array.from(firstLine).length - Array.from(secondLine).length);
    if (difference < smallestDifference) {
      bestIndex = index;
      smallestDifference = difference;
    }
  }

  return [words.slice(0, bestIndex).join(" "), words.slice(bestIndex).join(" ")];
}

function renderBest(index) {
  if (!bestKicker || !bestTitle || !bestBody || !bestMeta || !bestImage || !bestThumbs) return;
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
  if (!bestThumbs) return;
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
  if (!catalogGrid) return;
  const selectedCategory = getSelectedCategory();
  const filteredProducts = catalogProducts.filter(([name]) => {
    return selectedCategory === "all" || getProductCategory(name) === selectedCategory;
  });
  const categoryMeta = getCategoryMeta(selectedCategory);
  const isCategoryView = selectedCategory !== "all";

  document.body.classList.toggle("is-category-store", isCategoryView);
  if (isCategoryView && window.location.hash === "#catalog") {
    history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    window.scrollTo({ top: 0 });
  }

  if (catalogTitle) catalogTitle.textContent = categoryMeta.title;
  if (catalogDesc) catalogDesc.textContent = categoryMeta.desc;
  catalogSection?.classList.toggle("is-category-view", isCategoryView);

  if (categoryPanel) {
    const panel = categoryPanels[selectedCategory];
    categoryPanel.setAttribute("aria-hidden", String(!isCategoryView));
    categoryPanel.innerHTML =
      isCategoryView && panel
        ? `
          <div class="category-panel-copy">
            <h2>${i18n(`store.category.${selectedCategory}Panel`, panel.title)}</h2>
            <p>${i18n(`store.category.${selectedCategory}PanelDesc`, panel.subtitle)}</p>
          </div>
          <img src="${panel.image}" alt="${panel.alt}" />
        `
        : "";
  }

  if (!filteredProducts.length) {
    catalogGrid.innerHTML = `
      <article class="catalog-empty">
        <h3>${categoryMeta.label} 제품 준비중</h3>
        <p>${i18n("store.category.emptyDesc", "현재 등록된 {category} 제품이 없습니다. 추후 제품 정보가 업데이트됩니다.").replaceAll("{category}", categoryMeta.label)}</p>
      </article>
    `;
    const title = catalogGrid.querySelector("h3");
    if (title) {
      title.textContent = i18n("store.category.emptyTitle", "{category} 제품 준비중").replaceAll("{category}", categoryMeta.label);
    }
    return;
  }

  catalogGrid.innerHTML = filteredProducts
    .map(
      ([name, volume, price, image, key]) => {
        const category = getProductCategory(name);
        const displayName = i18n(`store.productNames.${key}`, name);
        const titleClass = Array.from(displayName.replace(/\s/g, "")).length > 10 ? " is-long-title" : "";
        const [titleLine1, titleLine2] = splitCatalogTitle(displayName);
        const isExportOnly = exportOnlyProductKeys.has(key);
        const buyLink = productBuyLinks[key] || "proposal.html";
        return `
        <article class="catalog-card product-${key}">
          <span class="catalog-category">${getCategoryMeta(category).label}</span>
          <img src="${image}" alt="${displayName}" />
          <h3 class="${titleClass.trim()}" aria-label="${displayName}">
            <span>${titleLine1}</span><span>${titleLine2}</span>
          </h3>
          <p>${formatCatalogValue(volume)} · ${formatCatalogValue(price)}</p>
          ${
            isExportOnly
              ? `<span class="buy-button is-disabled" aria-disabled="true">${i18n("store.exportOnly", "수출전용상품")}</span>`
              : `<a class="buy-button" href="${buyLink}"${productBuyLinks[key] ? ' target="_blank" rel="noopener"' : ""}>${i18n("store.buy", "구매하기")}</a>`
          }
        </article>
      `;
      }
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

if (bestThumbs) {
  renderBestThumbs();
  renderBest(0);
}
renderCatalog();
window.addEventListener("eco:languagechange", () => {
  renderBestThumbs();
  renderBest(activeBest);
  renderCatalog();
});
