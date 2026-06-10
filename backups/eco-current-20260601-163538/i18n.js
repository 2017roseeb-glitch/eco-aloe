const ECO_LANG_STORAGE_KEY = "eco-language";

const baseKo = {
  meta: {
    title: "ROSEE ECO | 알로에 헤어 & 바디 케어",
    description:
      "로제 에코 알로에 브랜드 사이트. 알로에 헤어 샴푸 누적 100만 개 판매와 해외 수출 국가에서 높아지는 에코 라인의 인기를 소개합니다.",
  },
  nav: { lineup: "제품라인", export: "수출국가", sales: "100만 판매", contact: "비즈니스 문의" },
  common: { explore: "Explore", learnMore: "더 알아보기", backHome: "메인으로" },
  home: {
    hero: {
      eyebrow: "ROSEE HAIR & BODY CARE",
      title: "ECO SERIES",
      tagline: "Where Daily Care Begins.",
      copy:
        "알로에의 산뜻한 수분감과 데일리 케어 감성을 담은 로제의 에코 라인. 국내를 넘어 수출 시장에서 다시 찾는 헤어 케어 브랜드로 성장하고 있습니다.",
      bottom1: "Eco Aloe Shampoo",
      bottom2: "Since 1991 Rosee Cosmetics",
    },
    sales: {
      title: "샴푸 누적 100만 개 판매",
      card1: "알로에 샴푸 누적 판매 어필",
      card2: "가족이 함께 쓰는 대용량 데일리 케어",
      card3: "수출 국가에서 꾸준히 넓어지는 재구매 기반",
    },
    lineup: {
      title: "알로에를 중심으로 넓어지는 데일리 케어",
      featured:
        "산뜻한 사용감과 넉넉한 용량으로 일상 속 사용 빈도를 높인 대표 제품입니다. 샴푸, 컨디셔너, 헤어 미스트, 바디 라인까지 에코 브랜드의 확장성을 보여줍니다.",
    },
    export: {
      title: "수출 국가에서 높아지는 에코 라인 인지도",
      copy:
        "합리적인 용량, 친숙한 알로에 콘셉트, 선명한 제품 라인업을 바탕으로 해외 유통 채널에서 소개하기 쉬운 브랜드 자산을 갖추고 있습니다.",
    },
    company: {
      title: "브랜드 운영과 수출 제안을 위한 회사 정보 영역",
      brand: "로제화장품의 생활 밀착형 헤어 & 바디 케어 브랜드로, 실사용 중심의 제품 구성을 강조합니다.",
      product: "샴푸와 컨디셔너를 중심으로 미스트, 오일, 바디 케어까지 확장 가능한 라인업을 보유합니다.",
      export: "수출국가 정보, 인기 상승 지표, 대표 판매 성과를 한 페이지에서 빠르게 전달하도록 구성했습니다.",
    },
    contact: {
      title1: "비즈니스 및 수출 문의는",
      title2: "아래 메일로 보내주세요",
      note: "본 메일은 에코 브랜드 유통, 수출, B2B 상담 문의 전용입니다.",
    },
  },
  products: {
    aloeShampoo: {
      name: "Eco Aloe Hair Shampoo",
      short: "산뜻한 사용감의 대표 대용량 알로에 샴푸",
      title: "누적 판매로 검증된 에코 알로에 샴푸",
      body:
        "에코 알로에 헤어 샴푸는 매일 쓰기 좋은 산뜻한 세정감과 넉넉한 750ml 용량을 중심으로 해외 유통 채널에서도 소개하기 쉬운 대표 제품입니다.",
      meta: "750ml | Aloe daily hair care",
    },
    aloeConditioner: {
      name: "Aloe Conditioner",
      short: "부드러운 머릿결을 위한 데일리 페어 제품",
      title: "샴푸와 함께 쓰는 알로에 컨디셔너",
      body:
        "샴푸 후 모발을 부드럽게 정돈해 주는 페어 제품입니다. 알로에 라인의 산뜻한 이미지를 유지하면서 데일리 케어 루틴을 완성합니다.",
      meta: "750ml | Daily smooth care",
    },
    hairMist: {
      name: "Hair Mist",
      short: "외출 전후 가볍게 더하는 산뜻한 헤어 케어",
      title: "가볍게 뿌리는 알로에 헤어 미스트",
      body:
        "휴대와 재사용이 쉬운 헤어 미스트는 에코 라인의 사용 접점을 넓혀 주는 제품입니다. 외출 전후 가볍게 더하는 산뜻한 케어를 제안합니다.",
      meta: "Aloe refreshing hair mist",
    },
    arganOil: {
      name: "Argan Hair Oil",
      short: "윤기와 마무리감을 강조하는 고보습 케어",
      title: "윤기 있는 마무리를 위한 아르간 헤어 오일",
      body:
        "아르간 헤어 오일은 모발 끝 윤기와 정돈감을 강조하는 고보습 마무리 제품입니다. 알로에 라인에 프리미엄 사용감을 더합니다.",
      meta: "Argan oil finishing care",
    },
    bodyCleanser: {
      name: "Body Cleanser",
      short: "헤어에서 바디로 이어지는 에코 알로에 라인",
      title: "바디까지 확장되는 에코 알로에 케어",
      body:
        "에코 알로에 바디 클렌저는 헤어 중심 브랜드 경험을 바디 케어까지 확장합니다. 친숙한 알로에 콘셉트로 세트 제안과 수출 구성이 쉽습니다.",
      meta: "Aloe body care line",
    },
  },
  footer: {
    company: "로제화장품 주식회사 | 대표 : 조종현",
    business: "사업자등록번호 : 132-86-15385",
    address: "주소 : 경기도 포천시 소흘읍 죽엽산로 고모리385-89",
  },
};

const baseEn = {
  meta: {
    title: "ROSEE ECO | Aloe Hair & Body Care",
    description:
      "ROSEE ECO aloe brand site, introducing the 1 million shampoo sales milestone and growing popularity in export markets.",
  },
  nav: { lineup: "Line Up", export: "Export", sales: "1M Sales", contact: "Business" },
  common: { explore: "Explore", learnMore: "Learn more", backHome: "Home" },
  home: {
    hero: {
      eyebrow: "ROSEE HAIR & BODY CARE",
      title: "ECO SERIES",
      tagline: "Where Daily Care Begins.",
      copy:
        "ROSEE ECO brings fresh aloe moisture and daily care sensibility to hair and body routines, growing as a repeatable export-market hair care brand.",
      bottom1: "Eco Aloe Shampoo",
      bottom2: "Since 1991 Rosee Cosmetics",
    },
    sales: {
      title: "Over 1 million shampoos sold",
      card1: "A proven aloe shampoo sales milestone",
      card2: "Large-capacity daily care for the whole family",
      card3: "A growing repeat-purchase base in export markets",
    },
    lineup: {
      title: "Daily care expanded around aloe",
      featured:
        "A representative product with a fresh feel and generous capacity. The line expands from shampoo and conditioner to hair mist, oil, and body care.",
    },
    export: {
      title: "Rising ECO line awareness across export markets",
      copy:
        "With practical sizing, a familiar aloe concept, and a clear lineup, ROSEE ECO is easy to introduce through overseas distribution channels.",
    },
    company: {
      title: "Company information for brand and export proposals",
      brand: "A practical hair and body care brand from Rosee Cosmetics, built around real daily use.",
      product: "An expandable lineup centered on shampoo and conditioner, with mist, oil, and body care products.",
      export: "Export market notes, popularity signals, and representative sales performance are organized on one page.",
    },
    contact: {
      title1: "For business and export inquiries,",
      title2: "please contact us by email",
      note: "This email is for ECO brand distribution, export, and B2B inquiries.",
    },
  },
  products: {
    aloeShampoo: {
      name: "Eco Aloe Hair Shampoo",
      short: "The signature large-capacity aloe shampoo",
      title: "A proven ECO aloe shampoo",
      body:
        "Eco Aloe Hair Shampoo is a representative 750ml product with a fresh daily cleansing feel, suitable for export channels and repeat everyday use.",
      meta: "750ml | Aloe daily hair care",
    },
    aloeConditioner: {
      name: "Aloe Conditioner",
      short: "A daily partner for soft hair texture",
      title: "Aloe conditioner paired with shampoo",
      body:
        "A daily conditioner that helps smooth hair after shampooing while completing the fresh aloe hair care routine.",
      meta: "750ml | Daily smooth care",
    },
    hairMist: {
      name: "Hair Mist",
      short: "Fresh hair care before and after going out",
      title: "A light aloe hair mist",
      body:
        "A portable hair mist that expands the daily touchpoints of the ECO line with light, refreshing care.",
      meta: "Aloe refreshing hair mist",
    },
    arganOil: {
      name: "Argan Hair Oil",
      short: "Moisturizing care with shine and finish",
      title: "Argan hair oil for a polished finish",
      body:
        "Argan Hair Oil adds shine and control to the ends of the hair, bringing a richer finishing feel to the aloe line.",
      meta: "Argan oil finishing care",
    },
    bodyCleanser: {
      name: "Body Cleanser",
      short: "ECO aloe care expanded from hair to body",
      title: "ECO aloe care for the body",
      body:
        "Eco Aloe Body Cleanser extends the brand from hair care into body care, making set proposals and export lineups easier to build.",
      meta: "Aloe body care line",
    },
  },
  footer: {
    company: "Rosee Cosmetics Co., Ltd. | CEO: Jonghyun Cho",
    business: "Business registration number: 132-86-15385",
    address: "Address: 385-89 Gomori, Jugeopsan-ro, Soheul-eup, Pocheon-si, Gyeonggi-do, Korea",
  },
};

const dictionaries = {
  ko: baseKo,
  en: baseEn,
  ja: baseEn,
  "zh-CN": baseEn,
  vi: baseEn,
  th: baseEn,
  ru: baseEn,
  uz: baseEn,
};

function getNestedValue(source, path) {
  return path.split(".").reduce((value, key) => value?.[key], source);
}

const ECO_I18N = {
  supported: Object.keys(dictionaries),
  dictionaries,
  getLanguage() {
    const params = new URLSearchParams(window.location.search);
    let saved = null;
    try {
      saved = window.localStorage?.getItem(ECO_LANG_STORAGE_KEY);
    } catch {}
    const requested = params.get("lang") || saved || "ko";
    return this.supported.includes(requested) ? requested : "ko";
  },
  t(key, lang = this.currentLanguage) {
    return getNestedValue(this.dictionaries[lang], key) ?? getNestedValue(this.dictionaries.en, key) ?? getNestedValue(this.dictionaries.ko, key) ?? "";
  },
  apply(lang = this.getLanguage()) {
    this.currentLanguage = this.supported.includes(lang) ? lang : "ko";
    try {
      window.localStorage?.setItem(ECO_LANG_STORAGE_KEY, this.currentLanguage);
    } catch {}
    document.documentElement.lang = this.currentLanguage;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = this.t(node.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((node) => {
      node.innerHTML = this.t(node.dataset.i18nHtml);
    });
    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.lang === this.currentLanguage);
    });
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", this.t("meta.description"));
    document.title = this.t("meta.title");
    window.dispatchEvent(new CustomEvent("eco:languagechange", { detail: { lang: this.currentLanguage } }));
  },
  setLanguage(lang) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url);
    this.apply(lang);
  },
};

window.ECO_I18N = ECO_I18N;
document.addEventListener("DOMContentLoaded", () => ECO_I18N.apply());
