const officialMallUrl = "https://roseeshop.com/goods/goods_list.php?cateCd=003003";
const PRODUCT_LIST_RETURN_KEY = "eco-product-list-return";
const exportOnlyProductKeys = new Set(["aloeShampoo", "blackGarlic", "arganShampoo", "ginseng"]);

const ecoProductDetails = {
  aloeShampooNew: {
    slug: "eco-aloe-shampoo-new",
    name: "에코 알로에 헤어샴푸 NEW",
    brandName: "에코알로에",
    typeName: "헤어&바디",
    category: "헤어",
    volume: "750ml",
    price: "14,000원",
    image: "assets/eco-aloe-hair-shampoo-750-new.png",
    summary: "풍부하고 마일드한 거품으로 두피와 모발을 산뜻하게 씻어내는 750ml 데일리 알로에 샴푸입니다.",
    description: "유기농 알로에 콘셉트의 촉촉한 사용감과 자연스러운 향을 담아 온 가족이 매일 사용하기 좋은 헤어 케어 제품입니다.",
  },
  aloeConditionerNew: {
    slug: "eco-aloe-conditioner-new",
    name: "에코 알로에 헤어 컨디셔너 NEW",
    brandName: "에코알로에",
    typeName: "헤어&바디",
    category: "헤어",
    volume: "750ml",
    price: "14,000원",
    image: "assets/eco-aloe-hair-conditioner-750-new.png",
    summary: "샴푸 후 엉키기 쉬운 모발을 한 올 한 올 부드럽게 정돈해주는 750ml 알로에 컨디셔너입니다.",
    description: "알로에 라인의 산뜻한 보습감을 더해 머릿결을 매끄럽게 가꾸고, 데일리 샴푸 루틴을 부드럽게 마무리합니다.",
  },
  aloeShampoo: {
    slug: "eco-aloe-shampoo",
    name: "에코 알로에 헤어샴푸",
    brandName: "에코알로에",
    typeName: "헤어&바디",
    category: "헤어",
    volume: "760ml",
    price: "14,000원",
    image: "assets/best-aloe-shampoo.png",
    summary: "유기농 알로에 15%와 나노 입자화 공법을 담은 에코알로에 대표 헤어 샴푸입니다.",
    description: "풍부하고 마일드한 거품이 두피를 깨끗하게 세정하고, 알로에의 보습감으로 건조한 두피와 모발을 산뜻하게 케어합니다.",
  },
  blackGarlic: {
    slug: "eco-black-garlic-shampoo",
    name: "에코 흑마늘 헤어샴푸",
    brandName: "에코알로에",
    typeName: "헤어&바디",
    category: "헤어",
    volume: "760ml",
    price: "15,000원",
    image: "assets/best-black-garlic.png",
    summary: "흑마늘 콘셉트의 영양감을 담아 약해진 모발에 생기와 윤기를 더하는 샴푸입니다.",
    description: "두피와 모발에 영양감을 주는 헤어 케어 라인으로, 푸석한 모발을 탄력 있고 건강한 인상으로 관리하고 싶은 고객에게 어울립니다.",
  },
  arganShampoo: {
    slug: "eco-argan-shampoo",
    name: "에코 아르간 헤어샴푸",
    brandName: "에코알로에",
    typeName: "헤어&바디",
    category: "헤어",
    volume: "760ml",
    price: "15,000원",
    image: "assets/best-argan.png",
    summary: "아르간커넬오일의 풍부한 영양감으로 푸석하고 손상된 모발을 케어하는 샴푸입니다.",
    description: "건조하고 윤기 잃은 모발에 부드러운 세정감과 보습감을 더해, 매일 사용하는 샴푸만으로도 정돈된 머릿결을 느낄 수 있도록 돕습니다.",
  },
  ginseng: {
    slug: "eco-ginseng-shampoo",
    name: "에코 진생 리바이탈 헤어샴푸",
    brandName: "에코알로에",
    typeName: "헤어&바디",
    category: "헤어",
    volume: "760ml",
    price: "18,000원",
    image: "assets/best-ginseng.png",
    summary: "진생 리바이탈 콘셉트로 약하고 손상된 모발에 생기와 영양감을 더하는 샴푸입니다.",
    description: "에코 헤어 라인 안에서 프리미엄 케어 인상을 주는 제품으로, 힘없이 지친 모발을 윤기 있게 관리하고 싶을 때 사용하기 좋습니다.",
  },
  aloeConditioner: {
    slug: "eco-aloe-conditioner",
    name: "에코 알로에 헤어 컨디셔너",
    brandName: "에코알로에",
    typeName: "헤어&바디",
    category: "헤어",
    volume: "760ml",
    price: "14,000원",
    image: "assets/cat-aloe-conditioner-pack.png",
    summary: "머릿결을 한 올 한 올 실크처럼 부드럽게 정돈해주는 알로에 헤어 컨디셔너입니다.",
    description: "샴푸 후 거칠어진 모발에 부드러운 사용감을 더해 엉킴을 줄이고, 촉촉하고 매끄러운 데일리 헤어 루틴을 완성합니다.",
  },
  treatment: {
    slug: "eco-aloe-treatment",
    name: "에코 알로에 헤어 트리트먼트",
    brandName: "에코알로에",
    typeName: "헤어&바디",
    category: "헤어",
    volume: "760ml",
    price: "14,000원",
    image: "assets/cat-treatment-pack.png",
    summary: "모발 끝까지 찰랑찰랑 건강한 트리트먼트 효과를 전하는 대용량 헤어 케어 제품입니다.",
    description: "건조하고 거칠어진 모발에 보습감과 매끄러운 마무리를 더해, 샴푸 후 집중 케어가 필요한 날 사용하기 좋습니다.",
  },
  hairGel: {
    slug: "eco-aloe-hair-gel",
    name: "에코 알로에 헤어젤",
    brandName: "에코알로에",
    typeName: "헤어&바디",
    category: "헤어",
    volume: "530ml",
    price: "13,000원",
    image: "assets/cat-hair-gel-pack.png",
    summary: "부드럽고 내추럴한 스타일 연출을 도와주는 알로에 헤어젤입니다.",
    description: "강하게 굳는 느낌보다 자연스러운 세팅을 선호하는 고객에게 어울리며, 데일리 스타일링을 깔끔하게 마무리합니다.",
  },
  multiEssence: {
    slug: "eco-aloe-multi-essence",
    name: "에코 알로에 헤어 멀티에센스",
    brandName: "에코알로에",
    typeName: "헤어&바디",
    category: "헤어",
    volume: "530ml",
    price: "16,000원",
    image: "assets/cat-multi-essence-pack.png",
    summary: "보습 케어와 내추럴 세팅을 함께 도와 자연스러운 스타일을 연출하는 헤어 멀티에센스입니다.",
    description: "푸석한 모발에 촉촉한 마무리감을 더하면서 가볍게 스타일을 정돈해, 외출 전후 부담 없이 사용하기 좋은 데일리 에센스입니다.",
  },
  hairSpray: {
    slug: "eco-aloe-hair-spray",
    name: "에코 알로에 헤어 스프레이",
    brandName: "에코알로에",
    typeName: "헤어&바디",
    category: "헤어",
    volume: "300ml",
    price: "8,000원",
    image: "assets/cat-hair-spray-pack.png",
    summary: "원하는 헤어 스타일을 간편하게 고정하고 오래 유지하도록 돕는 슈퍼하드 타입 스프레이입니다.",
    description: "스타일링 후 마무리 단계에서 사용하면 흐트러짐을 줄여주어 하루 종일 깔끔한 헤어 스타일을 유지하는 데 도움을 줍니다.",
  },
  coatingEssence: {
    slug: "eco-aloe-coating-essence",
    name: "에코 알로에 헤어 코팅 에센스",
    brandName: "에코알로에",
    typeName: "헤어&바디",
    category: "헤어",
    volume: "200ml",
    price: "17,000원",
    image: "assets/cat-coating-essence-pack.png",
    summary: "손상된 모발 표면을 촉촉하게 감싸 강력한 수분 코팅감을 주는 헤어 에센스입니다.",
    description: "건조함과 잦은 스타일링으로 푸석해진 모발에 윤기와 매끄러움을 더해 정돈된 머릿결로 마무리합니다.",
  },
  strongMist: {
    slug: "eco-aloe-strong-mist",
    name: "에코 알로에 초강력 헤어미스트",
    brandName: "에코알로에",
    typeName: "헤어&바디",
    category: "헤어",
    volume: "250ml",
    price: "10,000원",
    image: "assets/hair-mist-product.png",
    summary: "강력한 세팅력과 지속력으로 스타일을 완성하는 초강력 헤어 미스트입니다.",
    description: "알로에베라잎추출물 콘셉트의 보습감을 담아 모발 보호와 스타일 고정을 함께 원하는 고객에게 어울립니다. 원하는 스타일 연출 후 약 20cm 거리에서 분사해 사용합니다.",
  },
  arganOil: {
    slug: "eco-aloe-argan-hair-oil",
    name: "에코 알로에 아르간 헤어오일",
    brandName: "에코알로에",
    typeName: "헤어&바디",
    category: "헤어",
    volume: "200ml",
    price: "21,000원",
    image: "assets/aloe-argan-hair-oil.png",
    summary: "극손상 모발의 집중 영양 케어를 위한 가벼운 사용감의 아르간 헤어 오일입니다.",
    description: "아르간 오일과 알로에베라잎추출물 콘셉트로 손상된 모발에 윤기와 보습감을 더하고, 머리 엉킴을 줄여 매끄러운 마무리를 돕습니다.",
  },
  hairColor: {
    slug: "eco-aloe-gray-cover-color",
    name: "에코 알로에 헤어 칼라크림 새치용",
    brandName: "에코알로에",
    typeName: "헤어&바디",
    category: "헤어",
    volume: "60ml",
    price: "11,000원",
    image: "assets/hair-color-gray-cover.png",
    summary: "새치 커버와 두피 진정 콘셉트를 함께 고려한 저자극 웰빙 염모제입니다.",
    description: "알로에, 올리브오일, 호호바오일, 동백오일 등 두피와 모발 보호 성분 콘셉트를 담아 잦은 염색으로 인한 자극이 걱정되는 고객에게 어울립니다.",
    colorGuide: {
      code: "C11",
      title: "새치머리용",
      colors: [
        { code: "N1", name: "흑색", swatch: "#080000" },
        { code: "N3", name: "흑갈색", swatch: "#17160f" },
        { code: "N5", name: "진한갈색", swatch: "#2c210f" },
        { code: "N6", name: "자연갈색", swatch: "#3b2116" },
      ],
    },
  },
  aloeHairColor: {
    slug: "eco-aloe-fashion-color",
    name: "에코 알로에 헤어칼라 크림 멋내기용",
    brandName: "에코알로에",
    typeName: "헤어&바디",
    category: "헤어",
    volume: "60ml",
    price: "11,000원",
    image: "assets/hair-color-fashion.png",
    summary: "새치 커버는 물론 헤어 컬러 변화까지 고려한 알로에 헤어칼라 크림입니다.",
    description: "알로에 성분 콘셉트로 모발과 두피 손상을 최소화하고 진정감을 더하도록 기획된 염모제로, 자극적인 향이 적은 컬러 제품을 찾는 고객에게 적합합니다.",
    colorGuide: {
      code: "C11",
      title: "새치머리+멋내기",
      colors: [
        { code: "C6", name: "밝은 자연갈색", swatch: "#6d482e" },
        { code: "C7", name: "구리빛밝은갈색", swatch: "#60301f" },
        { code: "C8", name: "밝은 황갈색", swatch: "#9a713d" },
      ],
    },
  },
  curlingEssence: {
    slug: "eco-aloe-curling-essence",
    name: "에코 알로에 헤어 컬링 에센스",
    brandName: "에코알로에",
    typeName: "헤어&바디",
    category: "헤어",
    volume: "150ml",
    price: "10,000원",
    image: "assets/cat-silk-curling-essence.png",
    summary: "에센스와 스타일링 효과를 동시에 전하는 촉촉한 컬링 마무리제입니다.",
    description: "알로에베라잎추출물 콘셉트로 푸석한 모발에 수분과 영양감을 더하고, 드라이 전후 사용 순서에 따라 자연스러운 컬 또는 탄탄한 컬 고정을 연출할 수 있습니다.",
  },
  bodyCleanser: {
    slug: "eco-aloe-body-cleanser",
    name: "에코 알로에 바디 클렌저",
    brandName: "에코알로에",
    typeName: "헤어&바디",
    category: "바디",
    volume: "750ml",
    price: "16,000원",
    image: "assets/cat-body-cleanser-pack.png",
    summary: "친환경 알로에 성분 콘셉트가 담긴 풍부한 거품의 부드러운 바디워시입니다.",
    description: "건조하고 자극받은 피부를 산뜻하게 씻어내고, 유기농 알로에의 수분 공급과 진정 이미지를 담아 매일 사용하기 좋은 바디 클렌저입니다.",
  },
  bodyEssence: {
    slug: "eco-aloe-body-essence",
    name: "에코 알로에 바디 에센스",
    brandName: "에코알로에",
    typeName: "헤어&바디",
    category: "바디",
    volume: "500ml",
    price: "16,000원",
    image: "assets/cat-body-essence-pack.png",
    summary: "끈적임 없이 빠르게 흡수되어 보습과 진정 케어를 돕는 알로에 바디 에센스입니다.",
    description: "목욕 후 물기를 닦아낸 피부에 부드럽게 펴 바르면 메마른 바디 피부에 촉촉한 사용감과 매끄러운 마무리를 더합니다.",
  },
  roseCleanser: {
    slug: "eco-rose-body-cleanser",
    name: "에코 로즈 바디 클렌저",
    brandName: "에코알로에",
    typeName: "헤어&바디",
    category: "바디",
    volume: "760ml",
    price: "16,000원",
    image: "assets/eco-rose-body-cleanser.png",
    summary: "다마스크 로즈 성분 콘셉트와 풍부한 거품으로 부드럽게 씻어내는 로즈 바디 클렌저입니다.",
    description: "은은한 장미향과 저자극 바디케어 이미지를 담아 샤워 시간을 향기롭고 편안하게 만들어주는 데일리 바디워시입니다.",
  },
  roseEssence: {
    slug: "eco-rose-body-essence",
    name: "에코 로즈 바디 에센스",
    brandName: "에코알로에",
    typeName: "헤어&바디",
    category: "바디",
    volume: "530ml",
    price: "16,000원",
    image: "assets/eco-rose-body-essence.png",
    summary: "끈적임 없이 빠르게 흡수되는 수분 공급 로즈 바디 에센스입니다.",
    description: "유기농 다마스크 로즈 꽃수 콘셉트와 오트밀, 콜라겐 이미지를 담아 은은한 향과 촉촉한 바디 피부 마무리를 제안합니다.",
  },
  limeMintSet: {
    slug: "eco-lime-mint-body-set",
    name: "에코 라임민트 바디 2종세트",
    brandName: "에코알로에",
    typeName: "헤어&바디",
    category: "바디",
    volume: "세트구성",
    price: "38,000원",
    image: "assets/eco-lime-mint-body-set.jpg",
    summary: "산뜻한 라임민트 향으로 바디 클렌징과 보습 루틴을 함께 구성한 2종 세트입니다.",
    description: "바디 클렌저와 바디 케어 제품을 함께 제안할 수 있는 세트 구성으로, 상쾌한 사용감과 선물용 구성을 원하는 고객에게 어울립니다.",
  },
  bodySet: {
    slug: "eco-aloe-moisture-cleansing-foam",
    name: "에코 알로에 모이스처 클렌징폼",
    brandName: "에코알로에",
    typeName: "클렌징",
    category: "페이스",
    volume: "200ml",
    price: "15,000원",
    image: "assets/aloe-moisture-cleansing-foam.jpg",
    summary: "알로에의 촉촉한 콘셉트를 담아 세안 후에도 편안한 사용감을 주는 모이스처 클렌징폼입니다.",
    description: "부드러운 거품으로 피부 노폐물을 씻어내고, 데일리 세안 후 당김을 줄인 산뜻하고 촉촉한 마무리를 제안합니다.",
  },
};

const detailRoot = document.querySelector("[data-product-detail]");
const params = new URLSearchParams(window.location.search);
const selectedProductKey = params.get("product") || "aloeShampooNew";
const product = ecoProductDetails[selectedProductKey];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getProductListReturnHref() {
  try {
    const saved = JSON.parse(window.sessionStorage?.getItem(PRODUCT_LIST_RETURN_KEY) || "null");
    if (saved?.url) return saved.url;
  } catch {}
  return "aloe-shampoo.html#catalog";
}

function renderColorGuide(item) {
  if (!item.colorGuide) return "";
  const guide = item.colorGuide;
  return `
    <section class="detail-color-guide" aria-label="타입별 색상 설명">
      <div class="detail-color-head">
        <span>${escapeHtml(guide.code)}</span>
        <strong>&lt;${escapeHtml(guide.title)}&gt;</strong>
      </div>
      <ul class="detail-color-list">
        ${guide.colors
          .map(
            (color) => `
              <li>
                <span class="detail-color-swatch" style="--swatch-color: ${escapeHtml(color.swatch)}"></span>
                <span><b>${escapeHtml(color.code)}</b> ${escapeHtml(color.name)}</span>
              </li>
            `
          )
          .join("")}
      </ul>
    </section>
  `;
}

function renderMissingProduct() {
  if (!detailRoot) return;
  document.title = "제품 정보를 찾을 수 없습니다 | 에코알로에";
  detailRoot.innerHTML = `
    <div class="detail-empty">
      <span>Eco Aloe</span>
      <h1>제품 정보를 찾을 수 없습니다</h1>
      <p>스토어에서 제품을 다시 선택해 주세요.</p>
      <a class="detail-button primary" href="aloe-shampoo.html#catalog">스토어로 돌아가기</a>
    </div>
  `;
}

function renderProductDetail(item) {
  if (!detailRoot) return;
  const safeName = escapeHtml(item.name);
  const listReturnHref = escapeHtml(getProductListReturnHref());
  const isExportOnly = exportOnlyProductKeys.has(selectedProductKey);
  document.title = `${item.name} | 에코알로에 제품 자세히보기`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", item.summary);
  detailRoot.innerHTML = `
    <div class="detail-product-image">
      <img src="${escapeHtml(item.image)}" alt="${safeName} 제품 이미지" />
    </div>
    <div class="detail-product-info">
      <span>${escapeHtml(item.brandName)} · ${escapeHtml(item.category)}</span>
      <h1>${safeName}</h1>
      <p class="detail-summary">${escapeHtml(item.summary)}</p>
      <p>${escapeHtml(item.description)}</p>
      ${renderColorGuide(item)}

      <div class="detail-lines detail-info-lines">
        <details open>
          <summary>제품정보</summary>
          <p>용량 및 구성: ${escapeHtml(item.volume)}</p>
          <p>소비자가: ${escapeHtml(item.price)}</p>
          <p>브랜드: ${escapeHtml(item.brandName)}</p>
          <p>제품타입: ${escapeHtml(item.typeName)}</p>
        </details>
      </div>

      <div class="product-detail-actions">
        ${
          isExportOnly
            ? `<span class="detail-button primary is-disabled" aria-disabled="true">수출전용상품</span>`
            : `<a class="detail-button primary" href="${officialMallUrl}" target="_blank" rel="noopener noreferrer">제품 구매하기</a>`
        }
        <a class="detail-button outline" href="${listReturnHref}">목록</a>
        <a class="detail-button outline" href="proposal.html">제품 문의하기</a>
      </div>
    </div>
  `;
}

if (product) {
  renderProductDetail(product);
} else {
  renderMissingProduct();
}

window.addEventListener("eco:languagechange", () => {
  if (product) {
    renderProductDetail(product);
  } else {
    renderMissingProduct();
  }
});

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
