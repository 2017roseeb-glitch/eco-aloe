const ECO_LANG_STORAGE_KEY = "eco-language";

const baseKo = {
  meta: {
    title: "에코알로에ㅣeco aloe 헤어,바디 케어브랜드",
    description:
      "에코알로에는 알로에의 산뜻한 수분감과 데일리 케어 감성을 담은 헤어, 바디 케어 브랜드입니다.",
  },
  nav: { lineup: "제품라인", export: "수출국가", sales: "100만 판매", contact: "비즈니스 문의" },
  common: { explore: "Explore", learnMore: "더 알아보기", backHome: "메인으로" },
  home: {
    hero: {
      eyebrow: "ECO ALOE HAIR & BODY CARE",
      title: "ECO SERIES",
      tagline: "Where Daily Care Begins.",
      copy:
        "알로에의 산뜻한 수분감과 데일리 케어 감성을 담은 에코알로에. 헤어와 바디를 위한 데일리 케어 브랜드로 성장하고 있습니다.",
      bottom1: "Eco Aloe Shampoo",
      bottom2: "Hair & Body Care Brand",
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
      brand: "에코알로에의 생활 밀착형 헤어 & 바디 케어 브랜드로, 실사용 중심의 제품 구성을 강조합니다.",
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
    address: "주소 : 경기도 포천시 소흘읍 죽엽산로 385-89",
  },
};

const baseEn = {
  meta: {
    title: "ecoaloe | eco aloe hair and body care brand",
    description:
      "Ecoaloe is a hair and body care brand with fresh aloe moisture and daily care sensibility.",
  },
  nav: { lineup: "Line Up", export: "Export", sales: "1M Sales", contact: "Business" },
  common: { explore: "Explore", learnMore: "Learn more", backHome: "Home" },
  home: {
    hero: {
      eyebrow: "ECO ALOE HAIR & BODY CARE",
      title: "ECO SERIES",
      tagline: "Where Daily Care Begins.",
      copy:
        "Ecoaloe brings fresh aloe moisture and daily care sensibility to hair and body routines.",
      bottom1: "Eco Aloe Shampoo",
      bottom2: "Hair & Body Care Brand",
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
        "With practical sizing, a familiar aloe concept, and a clear lineup, ecoaloe is easy to introduce through overseas distribution channels.",
    },
    company: {
      title: "Company information for brand and export proposals",
      brand: "A practical ecoaloe hair and body care brand built around real daily use.",
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

function mergeDict(base, extra) {
  const output = { ...base };
  Object.entries(extra).forEach(([key, value]) => {
    output[key] =
      value && typeof value === "object" && !Array.isArray(value)
        ? mergeDict(output[key] || {}, value)
        : value;
  });
  return output;
}

const siteKo = {
  meta: {
    title: "에코알로에ㅣeco aloe 헤어,바디 케어브랜드",
    description: "에코알로에는 알로에의 산뜻한 수분감과 데일리 케어 감성을 담은 헤어, 바디 케어 브랜드입니다.",
  },
  nav: {
    lineup: "제품라인",
    store: "스토어",
    brand: "브랜드",
    export: "수출국가",
    proposal: "수출&협력 제안",
    allProducts: "전제품",
  },
  home: {
    hero: {
      eyebrow: "HAIR & BODY CARE",
      tagline: "Fresh Aloe Care, Everyday.",
      copy:
        "알로에의 산뜻한 수분감과 데일리 케어 감성을 담은 에코알로에. 헤어와 바디를 위한 데일리 케어 브랜드로 성장하고 있습니다.",
      viewProducts: "제품 보기",
      exportInquiry: "수출 문의",
      point1: "Aloe Daily Care",
      point2: "1,000,000+ Shampoo Sales",
      point3: "Export Ready Line",
    },
    signature: {
      kicker: "ECO SERIES",
      title: "BEST SELLER",
      more: "더보기",
    },
    film: {
      eyebrow: "BRAND FILM",
      title: "브랜드<br />필름",
    },
    support: {
      eyebrow: "BRAND SUPPORT",
      title: "브랜드<br />지원",
      label1: "제조 환경",
      title1: "청결한<br />제조 환경",
      desc1: "엄격한 위생 관리와 체계적인 생산 공정으로 신뢰할 수 있는 제품을 만듭니다.",
      label2: "포장 시스템",
      title2: "안전한<br />포장 시스템",
      desc2: "튼튼한 포장과 철저한 검수로 국내외 어디든 안전하게 배송합니다.",
      label3: "마케팅 지원",
      title3: "마케팅 지원",
      desc3: "POP, 배너 등 다양한 홍보물을 지원하여 브랜드 성장을 함께합니다.",
    },
  },
  store: {
    hair: "헤어",
    hairDesc: "샴푸 · 컨디셔너 · 헤어 케어",
    body: "바디",
    bodyDesc: "클렌저 · 바디 에센스 · 세트",
    face: "페이스",
    faceDesc: "데일리 케어라인",
    allProducts: "전제품",
    category: {
      all: "전체",
      hair: "헤어",
      body: "바디",
      face: "페이스",
      hairTitle: "헤어라인",
      bodyTitle: "바디라인",
      faceTitle: "페이스라인",
      hairPanel: "헤어",
      hairPanelDesc: "샴푸 · 컨디셔너 · 헤어 케어",
      bodyPanel: "바디",
      bodyPanelDesc: "클렌저 · 바디 에센스 · 세트",
      facePanel: "페이스",
      facePanelDesc: "데일리 케어라인",
      emptyTitle: "{category} 제품 준비중",
      emptyDesc: "현재 등록된 {category} 제품이 없습니다. 추후 제품 정보가 업데이트됩니다.",
    },
    buy: "구매하기",
    exportOnly: "수출전용상품",
    pendingPrice: "가격 확인 예정",
    productNames: {
      aloeShampoo: "에코 알로에 헤어샴푸",
      blackGarlic: "에코 흑마늘 헤어샴푸",
      arganShampoo: "에코 아르간 헤어샴푸",
      ginseng: "에코 진생 리바이탈 헤어샴푸",
      aloeConditioner: "에코 알로에 헤어 컨디셔너",
      treatment: "에코 알로에 헤어 트리트먼트",
      hairGel: "에코 알로에 헤어젤",
      multiEssence: "에코 알로에 헤어 멀티에센스",
      hairSpray: "에코 알로에 헤어 스프레이",
      coatingEssence: "에코 알로에 헤어 코팅 에센스",
      strongMist: "에코 알로에 초강력 헤어미스트",
      arganOil: "에코 알로에 아르간 헤어오일",
      hairColor: "에코 알로에 헤어 칼라크림 새치용",
      aloeHairColor: "에코 알로에 헤어칼라 크림 멋내기용",
      curlingEssence: "에코 알로에 헤어 컬링 에센스",
      silkCurling: "에코 알로에 헤어 실크 컬링 에센스",
      bodyCleanser: "에코 알로에 바디 클렌저",
      bodyEssence: "에코 알로에 바디 에센스",
      roseCleanser: "에코 로즈 바디 클렌저",
      roseEssence: "에코 로즈 바디 에센스",
      limeMintSet: "에코 라임민트 바디 2종세트",
      bodySet: "에코 알로에 모이스처 클렌징폼",
    },
  },
  brand: {
    metaTitle: "ECO ALOE | 브랜드 소개",
    hero: {
      title: "자연의 순수함을 담은<br />데일리 헤어 & 바디 케어",
      copy: "유기농 알로에의 보습 에너지와 자연 유래 성분을 담아<br />건강하고 편안한 라이프스타일을 제안합니다.",
    },
    story: {
      eyebrow: "Brand Story",
      title: "자연에서 찾은<br />건강한 아름다움",
      copy1: "에코알로에는 피부와 모발이 매일 사용하는 제품인 만큼 편안한 사용감과 세정력을 가장 중요하게 생각합니다.",
      copy2: "알로에를 중심으로 한 식물 유래 성분과 현대적인 화장품 기술을 결합하여 온 가족이 함께 사용할 수 있는 제품을 연구합니다.",
    },
    global: {
      eyebrow: "GLOBAL EXPORT",
      title: "세계로 뻗어가는<br />에코 알로에",
      copy: "에코알로에는 대한민국을 넘어 전 세계 소비자들에게 사랑받고 있습니다. 현재 아시아, 북미, 중앙아시아 등 다양한 국가에 수출되며 글로벌 시장에서 한국 화장품의 가치를 전하고 있습니다.",
      countriesTitle: "Export Countries",
      expanding: "Expanding to More Global Markets",
      expandingCopy: "전 세계 소비자들에게 더 가까이 다가가기 위해 지속적으로 글로벌 시장을 확대하고 있습니다.",
    },
    countries: {
      korea: "대한민국",
      uzbekistan: "우즈베키스탄",
      china: "중국",
      japan: "일본",
      vietnam: "베트남",
      thailand: "태국",
      taiwan: "대만",
      indonesia: "인도네시아",
      malaysia: "말레이시아",
      singapore: "싱가포르",
      usa: "미국",
      canada: "캐나다",
    },
    sales: {
      eyebrow: "SALES RECORD",
      label: "누적 판매량",
      trusted: "Trusted by Customers",
      copy: "에코알로에는 오랜 기간 동안 국내외 소비자들의 신뢰를 바탕으로 성장해왔습니다. 누적 판매 100만 개 이상을 기록하며 매일 수많은 고객들이 선택하는 브랜드로 자리매김하고 있습니다.",
      point1: "누적 판매 100만 개 이상",
      point2: "국내외 수출 진행",
      point3: "Made in Korea",
      point4: "엄격한 품질관리 시스템",
    },
    why: {
      eyebrow: "WHY ECO ALOE",
      title: "에코알로에를<br />선택하는 이유",
      card1Title: "식물유래성분",
      card1Copy: "유기농 알로에를 함유하여<br />건강한 수분 케어를 제공합니다.",
      card2Title: "데일리 케어",
      card2Copy: "매일 사용해도 부담 없는<br />순한 사용감을 추구합니다.",
      card3Title: "세계적인 신뢰",
      card3Copy: "전 세계 다양한 국가에서<br />사랑받고 있는 브랜드입니다.",
      card4Title: "Made in Korea",
      card4Copy: "엄격한 품질관리 시스템을 통해<br />대한민국에서 생산합니다.",
    },
    ingredient: {
      eyebrow: "Key Ingredient",
      title: "Organic Aloe Vera",
      subtitle: "유기농 알로에 함유",
      point1: "수분 공급",
      point2: "진정 케어",
      point3: "건강한 두피 컨디션 유지",
      point4: "산뜻한 사용감",
    },
    quality: {
      eyebrow: "Quality & Manufacturing",
      title: "믿을 수 있는<br />품질 관리",
      copy: "에코알로에는 엄격한 품질관리 기준에 따라 생산됩니다. 제품의 기획부터 생산, 품질관리까지 소비자가 안심하고 사용할 수 있도록 관리하고 있습니다.",
    },
    company: {
      eyebrow: "Company Information",
      distributor: "책임판매업자",
      manufacturer: "제조업자",
      roseeAddress: "경기도 포천시 소흘읍 죽엽산로 385-89",
      cosmocosAddress: "인천광역시 남동구 앵고개로 404",
    },
  },
  proposalContact: {
    metaTitle: "에코알로에 | 수출 및 유통 파트너십 문의",
    kicker: "CONTACT",
    title: "유통 파트너십 문의는<br />아래 메일로 보내주세요",
    partnership: "DISTRIBUTION PARTNERSHIP",
    copy: "주소 복사",
    copied: "복사 완료",
    note: "본 메일은 유통 파트너십 문의 전용입니다 · 일반 소비자 문의는 공식 채널을 이용해 주세요",
  },
  proposal: {
    metaTitle: "에코알로에 | 수출&협력업체 제안",
    breadcrumb: "홈 · <strong>수출&협력업체 제품/상품 제안 안내</strong>",
    title: "수출&협력업체 제품/상품 제안 안내",
    consentTitle: "제안 개인정보 수집 및 이용 동의",
    consentStrong: "개인정보 수집 및 이용 동의",
    consentIntro: "온라인 상담 접수 및 처리를 위한 개인정보 수집 및 이용 동의",
    consent1: "1. 개인정보의 수집 및 이용 목적",
    consent2: "- 협력업체 제안 서비스 이용을 위한 본인 식별",
    consent3: "- 의사소통 경로 확보 및 제안 내용 검토",
    consent4: "2. 수집하는 개인정보 항목",
    consent5: "- 업체명, 담당자명, 이메일주소, 연락처, 문의 내용",
    agree: "위와 같이 개인정보를 수집 및 이용하는데 동의합니다.",
    companyInfo: "협력업체 정보",
    required: "* 필수 입력",
    companyName: "업체명",
    businessNumber: "사업자등록번호",
    manager: "담당자명",
    email: "담당자 이메일",
    emailPlaceholder: "이메일 입력",
    select: "선택",
    direct: "직접 입력",
    phone: "담당자 연락처",
    mobile: "휴대폰번호",
    tel: "일반전화",
    phoneHelp: "연락 가능한 번호를 입력해 주세요.",
    inquiry: "상담서 작성",
    type: "상담 구분",
    exportProposal: "수출 제안",
    distribution: "유통 제안",
    productProposal: "제품 제안",
    marketing: "마케팅 제안",
    other: "기타",
    subject: "제목",
    message: "문의 내용",
    messagePlaceholder: "내용 입력",
    file: "첨부파일",
    browse: "찾아보기",
    fileHelp: "첨부파일은 jpg, png, pdf, xlsx 파일로 최대 5MB까지만 등록 가능합니다.",
    fileAlert: "대용량 파일은 2017roseeb@gmail.com 으로 송부바랍니다.",
    captcha: "자동 등록 방지",
    refresh: "새로고침",
    doneTitle: "협력사 제품 제안 안내",
    done1: "제안 주신 제품 검토 내용은 이메일을 통하여 진행됩니다.",
    done2: "기재 오류 시 답변이 불가할 수 있으니 메일 주소 및 전화번호를 확인해 주시기 바랍니다.",
    reset: "초기화",
    complete: "완료",
  },
};

const siteEn = {
  meta: {
    title: "ecoaloe | eco aloe hair and body care brand",
    description: "Ecoaloe is a hair and body care brand with fresh aloe moisture and daily care sensibility.",
  },
  nav: {
    lineup: "Lineup",
    store: "Store",
    brand: "Brand",
    export: "Export Markets",
    proposal: "Export & Partner Proposal",
    allProducts: "All Products",
  },
  home: {
    hero: {
      eyebrow: "HAIR & BODY CARE",
      tagline: "Fresh Aloe Care, Everyday.",
      copy:
        "Ecoaloe blends fresh aloe moisture with everyday care sensibility for daily hair and body care.",
      viewProducts: "View Products",
      exportInquiry: "Export Inquiry",
      point1: "Aloe Daily Care",
      point2: "1,000,000+ Shampoo Sales",
      point3: "Export Ready Line",
    },
    signature: { kicker: "ECO SERIES", title: "BEST SELLER", more: "More" },
    film: { eyebrow: "BRAND FILM", title: "Brand<br />Film" },
    support: {
      eyebrow: "BRAND SUPPORT",
      title: "Brand<br />Support",
      label1: "Manufacturing",
      title1: "Clean Manufacturing",
      desc1: "Strict hygiene management and systematic production create products you can trust.",
      label2: "Packaging",
      title2: "Safe<br />Packaging System",
      desc2: "Durable packaging and careful inspection help products ship safely at home and abroad.",
      label3: "Marketing",
      title3: "Marketing Support",
      desc3: "We support POP materials, banners, and sales tools to grow the brand together.",
    },
  },
  store: {
    hair: "Hair",
    hairDesc: "Shampoo · Conditioner · Hair Care",
    body: "Body",
    bodyDesc: "Cleanser · Body Essence · Set",
    face: "Face",
    faceDesc: "Daily care line",
    allProducts: "All Products",
    category: {
      all: "All",
      hair: "Hair",
      body: "Body",
      face: "Face",
      hairTitle: "Hair Products",
      bodyTitle: "Body Products",
      faceTitle: "Face Products",
      hairPanel: "Hair",
      hairPanelDesc: "Shampoo · Conditioner · Hair Care",
      bodyPanel: "Body",
      bodyPanelDesc: "Cleanser · Body Essence · Set",
      facePanel: "Face",
      facePanelDesc: "Daily care line",
      emptyTitle: "{category} products coming soon",
      emptyDesc: "There are no registered {category} products yet. Product information will be updated later.",
    },
    buy: "Buy",
    exportOnly: "Export Only",
    pendingPrice: "Price TBC",
    productNames: {
      aloeShampoo: "Eco Aloe Hair Shampoo",
      blackGarlic: "Eco Black Garlic Hair Shampoo",
      arganShampoo: "Eco Argan Hair Shampoo",
      ginseng: "Eco Ginseng Revital Hair Shampoo",
      aloeConditioner: "Eco Aloe Hair Conditioner",
      treatment: "Eco Aloe Hair Treatment",
      hairGel: "Eco Aloe Hair Gel",
      multiEssence: "Eco Aloe Hair Multi Essence",
      hairSpray: "Eco Aloe Hair Spray",
      coatingEssence: "Eco Aloe Hair Coating Essence",
      strongMist: "Eco Aloe Strong Hair Mist",
      arganOil: "Eco Aloe Argan Hair Oil",
      hairColor: "Eco Hair Color Cream Gray Cover",
      aloeHairColor: "Eco Aloe Hair Color Cream Fashion",
      curlingEssence: "Eco Aloe Hair Curling Essence",
      silkCurling: "Eco Aloe Hair Silk Curling Essence",
      bodyCleanser: "Eco Aloe Body Cleanser",
      bodyEssence: "Eco Aloe Body Essence",
      roseCleanser: "Eco Rose Body Cleanser",
      roseEssence: "Eco Rose Body Essence",
      limeMintSet: "Eco Lime Mint Body 2-piece Set",
      bodySet: "Eco Aloe Moisture Cleansing Foam",
    },
  },
  brand: {
    metaTitle: "ECO ALOE | Brand Story",
    hero: {
      title: "Pure care inspired by nature<br />for daily hair & body routines",
      copy: "With the moisturizing energy of organic aloe and plant-derived ingredients,<br />we suggest a healthy and comfortable lifestyle.",
    },
    story: {
      eyebrow: "Brand Story",
      title: "Healthy beauty<br />found in nature",
      copy1: "Because hair and skin use these products every day, ECO ALOE puts comfortable use and effective cleansing first.",
      copy2: "We combine aloe-centered plant-derived ingredients with modern cosmetic technology to create products the whole family can use.",
    },
    global: {
      eyebrow: "GLOBAL EXPORT",
      title: "ECO ALOE<br />reaching the world",
      copy: "Beyond Korea, ECO ALOE is loved by consumers worldwide. Exported across Asia, North America, and Central Asia, the brand shares the value of Korean cosmetics with global markets.",
      countriesTitle: "Export Countries",
      expanding: "Expanding to More Global Markets",
      expandingCopy: "We continue to expand into new global markets to move closer to consumers around the world.",
    },
    countries: {
      korea: "Korea",
      uzbekistan: "Uzbekistan",
      china: "China",
      japan: "Japan",
      vietnam: "Vietnam",
      thailand: "Thailand",
      taiwan: "Taiwan",
      indonesia: "Indonesia",
      malaysia: "Malaysia",
      singapore: "Singapore",
      usa: "United States",
      canada: "Canada",
    },
    sales: {
      eyebrow: "SALES RECORD",
      label: "Cumulative Sales",
      trusted: "Trusted by Customers",
      copy: "ECO ALOE has grown through the trust of customers in Korea and abroad. With more than one million products sold, it has become a daily choice for consumers around the world.",
      point1: "More than 1 million products sold",
      point2: "Exported to markets worldwide",
      point3: "Made in Korea",
      point4: "Strict quality control system",
    },
    why: {
      eyebrow: "WHY ECO ALOE",
      title: "Why choose<br />ECO ALOE",
      card1Title: "Plant-derived Ingredients",
      card1Copy: "Organic aloe supports<br />healthy moisturizing care.",
      card2Title: "Daily Care",
      card2Copy: "A gentle, comfortable feel<br />designed for everyday use.",
      card3Title: "Global Trust",
      card3Copy: "A brand loved by consumers<br />across diverse markets.",
      card4Title: "Made in Korea",
      card4Copy: "Produced in Korea under<br />strict quality standards.",
    },
    ingredient: {
      eyebrow: "Key Ingredient",
      title: "Organic Aloe Vera",
      subtitle: "Formulated with organic aloe",
      point1: "Moisture care",
      point2: "Soothing care",
      point3: "Supports a healthy scalp condition",
      point4: "Fresh, lightweight feel",
    },
    quality: {
      eyebrow: "Quality & Manufacturing",
      title: "Quality you<br />can trust",
      copy: "ECO ALOE is produced under strict quality standards. Every stage, from product planning and manufacturing to quality control, is managed for dependable everyday use.",
    },
    company: {
      eyebrow: "Company Information",
      distributor: "Responsible Distributor",
      manufacturer: "Manufacturer",
      roseeAddress: "385-89 Jugeopsan-ro, Soheul-eup, Pocheon-si, Gyeonggi-do, Korea",
      cosmocosAddress: "404 Aenggogae-ro, Namdong-gu, Incheon, Korea",
    },
  },
  proposalContact: {
    metaTitle: "ecoaloe | Distribution Partnership",
    kicker: "CONTACT",
    title: "For distribution partnership inquiries,<br />please contact us by email",
    partnership: "DISTRIBUTION PARTNERSHIP",
    copy: "Copy address",
    copied: "Copied",
    note: "This email is for distribution partnership inquiries · Please use the official channel for consumer inquiries",
  },
  proposal: {
    metaTitle: "ecoaloe | Export & Partner Proposal",
    breadcrumb: "Home · <strong>Export & Partner Product Proposal Guide</strong>",
    title: "Export & Partner Product Proposal Guide",
    consentTitle: "Consent to Collect and Use Personal Information",
    consentStrong: "Consent to collect and use personal information",
    consentIntro: "Consent for collecting and using personal information to receive and process online inquiries",
    consent1: "1. Purpose of collection and use",
    consent2: "- Identity verification for partner proposal service use",
    consent3: "- Securing a communication channel and reviewing proposal details",
    consent4: "2. Personal information collected",
    consent5: "- Company name, manager name, email, phone number, inquiry details",
    agree: "I agree to the collection and use of personal information as above.",
    companyInfo: "Partner Company Information",
    required: "* Required",
    companyName: "Company Name",
    businessNumber: "Business Registration No.",
    manager: "Contact Person",
    email: "Contact Email",
    emailPlaceholder: "Enter email",
    select: "Select",
    direct: "Enter directly",
    phone: "Contact Number",
    mobile: "Mobile",
    tel: "Landline",
    phoneHelp: "Please enter a reachable phone number.",
    inquiry: "Inquiry Form",
    type: "Inquiry Type",
    exportProposal: "Export Proposal",
    distribution: "Distribution Proposal",
    productProposal: "Product Proposal",
    marketing: "Marketing Proposal",
    other: "Other",
    subject: "Subject",
    message: "Message",
    messagePlaceholder: "Enter message",
    file: "Attachment",
    browse: "Browse",
    fileHelp: "Attachments may be jpg, png, pdf, or xlsx files up to 5MB.",
    fileAlert: "For large files, please send them to 2017roseeb@gmail.com.",
    captcha: "Anti-spam Check",
    refresh: "Refresh",
    doneTitle: "Partner Product Proposal Guide",
    done1: "Submitted product review details will be handled by email.",
    done2: "Please check your email address and phone number, as errors may prevent a reply.",
    reset: "Reset",
    complete: "Submit",
  },
};

const localized = {
  ja: {
    meta: { title: "ecoaloe | ヘア・ボディケアブランド" },
    nav: { lineup: "製品ライン", store: "ストア", brand: "ブランド", export: "輸出国", proposal: "輸出・協力提案", allProducts: "全製品" },
    home: {
      hero: { copy: "アロエのみずみずしさとデイリーケアの感性を込めたecoaloe。国内を越えて輸出市場でも選ばれるヘアケアブランドへ成長しています。", viewProducts: "製品を見る", exportInquiry: "輸出のお問い合わせ" },
      signature: { more: "もっと見る" },
      film: { title: "ブランド<br />フィルム" },
      support: { title: "ブランド<br />サポート", label1: "製造環境", title1: "清潔な製造環境", desc1: "徹底した衛生管理と体系的な生産工程で信頼できる製品をつくります。", label2: "包装システム", title2: "安全な<br />包装システム", desc2: "丈夫な包装と厳格な検品で国内外へ安全に配送します。", label3: "マーケティング支援", title3: "マーケティング支援", desc3: "POPやバナーなど販促物を支援し、ブランド成長を共に進めます。" },
    },
    store: { hair: "ヘア", hairDesc: "シャンプー · コンディショナー · ヘアケア", body: "ボディ", bodyDesc: "クレンザー · ボディエッセンス · セット", face: "フェイス", faceDesc: "デイリーケアライン", allProducts: "全製品", category: { all: "全体", hair: "ヘア", body: "ボディ", face: "フェイス", hairTitle: "ヘア製品", bodyTitle: "ボディ製品", faceTitle: "フェイス製品", hairPanel: "ヘア", hairPanelDesc: "シャンプー · コンディショナー · ヘアケア", bodyPanel: "ボディ", bodyPanelDesc: "クレンザー · ボディエッセンス · セット", facePanel: "フェイス", facePanelDesc: "デイリーケアライン", emptyTitle: "{category}製品準備中", emptyDesc: "現在登録された{category}製品はありません。今後更新予定です。" }, buy: "購入する", pendingPrice: "価格確認中" },
    proposal: { metaTitle: "ecoaloe | 輸出・協力提案", title: "輸出・協力会社 製品/商品 提案案内", required: "* 必須入力", companyInfo: "協力会社情報", inquiry: "相談書作成", reset: "初期化", complete: "完了" },
  },
  "zh-CN": {
    meta: { title: "ecoaloe | 头发与身体护理品牌" },
    nav: { lineup: "产品系列", store: "商店", brand: "品牌", export: "出口国家", proposal: "出口&合作提案", allProducts: "全部产品" },
    home: { hero: { copy: "ecoaloe 以清爽芦荟水润感和日常护理理念打造产品线，正在成长为出口市场持续复购的护发品牌。", viewProducts: "查看产品", exportInquiry: "出口咨询" }, signature: { more: "查看更多" }, film: { title: "品牌<br />影片" }, support: { title: "品牌<br />支持", label1: "生产环境", title1: "洁净生产环境", desc1: "以严格卫生管理和系统化生产流程打造可信赖产品。", label2: "包装系统", title2: "安全<br />包装系统", desc2: "通过坚固包装和严格检查，安全配送至国内外。", label3: "营销支持", title3: "营销支持", desc3: "提供POP、横幅等宣传物料，共同推动品牌成长。" } },
    store: { hair: "头发护理", hairDesc: "洗发水 · 护发素 · 头发护理", body: "身体护理", bodyDesc: "沐浴露 · 身体精华 · 套装", face: "面部护理", faceDesc: "日常护理系列", allProducts: "全部产品", category: { all: "全部", hair: "头发", body: "身体", face: "面部", hairTitle: "头发护理产品", bodyTitle: "身体护理产品", faceTitle: "面部护理产品", hairPanel: "头发护理", hairPanelDesc: "洗发水 · 护发素 · 头发护理", bodyPanel: "身体护理", bodyPanelDesc: "沐浴露 · 身体精华 · 套装", facePanel: "面部护理", facePanelDesc: "日常护理系列", emptyTitle: "{category}产品准备中", emptyDesc: "目前暂无{category}产品信息，后续将更新。" }, buy: "购买", pendingPrice: "价格待确认" },
    proposal: { metaTitle: "ecoaloe | 出口&合作提案", title: "出口&合作企业产品/商品提案指南", required: "* 必填", companyInfo: "合作企业信息", inquiry: "填写咨询", reset: "重置", complete: "完成" },
  },
  vi: {
    meta: { title: "ecoaloe | Thương hiệu chăm sóc tóc và cơ thể" },
    nav: { lineup: "Dòng sản phẩm", store: "Cửa hàng", brand: "Thương hiệu", export: "Thị trường xuất khẩu", proposal: "Đề xuất xuất khẩu & hợp tác", allProducts: "Tất cả sản phẩm" },
    home: { hero: { copy: "ecoaloe mang cảm giác dưỡng ẩm tươi mát từ lô hội vào chăm sóc hằng ngày, phát triển thành thương hiệu chăm sóc tóc được thị trường xuất khẩu tìm lại.", viewProducts: "Xem sản phẩm", exportInquiry: "Liên hệ xuất khẩu" }, signature: { more: "Xem thêm" }, film: { title: "Phim<br />thương hiệu" }, support: { title: "Hỗ trợ<br />thương hiệu", label1: "Sản xuất", title1: "Môi trường sản xuất sạch", desc1: "Quản lý vệ sinh nghiêm ngặt và quy trình có hệ thống tạo nên sản phẩm đáng tin cậy.", label2: "Đóng gói", title2: "Hệ thống<br />đóng gói an toàn", desc2: "Bao bì chắc chắn và kiểm tra kỹ giúp giao hàng an toàn trong và ngoài nước.", label3: "Marketing", title3: "Hỗ trợ marketing", desc3: "Hỗ trợ POP, banner và tài liệu quảng bá để cùng phát triển thương hiệu." } },
    store: { hair: "Tóc", hairDesc: "Dầu gội · Dầu xả · Chăm sóc tóc", body: "Cơ thể", bodyDesc: "Sữa tắm · Tinh chất body · Bộ sản phẩm", face: "Mặt", faceDesc: "Dòng chăm sóc hằng ngày", allProducts: "Tất cả sản phẩm", category: { all: "Tất cả", hair: "Tóc", body: "Cơ thể", face: "Mặt", hairTitle: "Sản phẩm tóc", bodyTitle: "Sản phẩm body", faceTitle: "Sản phẩm mặt", hairPanel: "Tóc", hairPanelDesc: "Dầu gội · Dầu xả · Chăm sóc tóc", bodyPanel: "Cơ thể", bodyPanelDesc: "Sữa tắm · Tinh chất body · Bộ sản phẩm", facePanel: "Mặt", facePanelDesc: "Dòng chăm sóc hằng ngày", emptyTitle: "Sản phẩm {category} đang chuẩn bị", emptyDesc: "Hiện chưa có sản phẩm {category}; thông tin sẽ được cập nhật sau." }, buy: "Mua hàng", pendingPrice: "Đang xác nhận giá" },
    proposal: { metaTitle: "ecoaloe | Đề xuất xuất khẩu & hợp tác", title: "Hướng dẫn đề xuất sản phẩm/hàng hóa đối tác", required: "* Bắt buộc", companyInfo: "Thông tin đối tác", inquiry: "Viết nội dung tư vấn", reset: "Đặt lại", complete: "Hoàn tất" },
  },
  th: {
    meta: { title: "ecoaloe | แบรนด์ดูแลเส้นผมและผิวกาย" },
    nav: { lineup: "ไลน์สินค้า", store: "สโตร์", brand: "แบรนด์", export: "ตลาดส่งออก", proposal: "ข้อเสนอส่งออกและพาร์ตเนอร์", allProducts: "สินค้าทั้งหมด" },
    home: { hero: { copy: "ecoaloe ถ่ายทอดความสดชื่นของว่านหางจระเข้สู่การดูแลประจำวัน และเติบโตเป็นแบรนด์ดูแลเส้นผมที่ตลาดส่งออกเลือกซ้ำ", viewProducts: "ดูสินค้า", exportInquiry: "ติดต่อส่งออก" }, signature: { more: "ดูเพิ่มเติม" }, film: { title: "แบรนด์<br />ฟิล์ม" }, support: { title: "การสนับสนุน<br />แบรนด์", label1: "การผลิต", title1: "สภาพแวดล้อมการผลิตที่สะอาด", desc1: "การจัดการสุขอนามัยอย่างเข้มงวดและกระบวนการผลิตที่เป็นระบบสร้างสินค้าที่น่าเชื่อถือ", label2: "บรรจุภัณฑ์", title2: "ระบบ<br />บรรจุภัณฑ์ปลอดภัย", desc2: "บรรจุภัณฑ์แข็งแรงและการตรวจสอบละเอียดช่วยให้จัดส่งได้ปลอดภัย", label3: "การตลาด", title3: "สนับสนุนการตลาด", desc3: "สนับสนุน POP แบนเนอร์ และสื่อส่งเสริมการขายเพื่อเติบโตไปด้วยกัน" } },
    store: { hair: "ผม", hairDesc: "แชมพู · คอนดิชันเนอร์ · ดูแลเส้นผม", body: "ผิวกาย", bodyDesc: "คลีนเซอร์ · เอสเซนส์ผิวกาย · เซต", face: "ผิวหน้า", faceDesc: "ไลน์ดูแลประจำวัน", allProducts: "สินค้าทั้งหมด", category: { all: "ทั้งหมด", hair: "ผม", body: "ผิวกาย", face: "ผิวหน้า", hairTitle: "ผลิตภัณฑ์ผม", bodyTitle: "ผลิตภัณฑ์ผิวกาย", faceTitle: "ผลิตภัณฑ์ผิวหน้า", hairPanel: "ผม", hairPanelDesc: "แชมพู · คอนดิชันเนอร์ · ดูแลเส้นผม", bodyPanel: "ผิวกาย", bodyPanelDesc: "คลีนเซอร์ · เอสเซนส์ผิวกาย · เซต", facePanel: "ผิวหน้า", facePanelDesc: "ไลน์ดูแลประจำวัน", emptyTitle: "กำลังเตรียมสินค้า {category}", emptyDesc: "ยังไม่มีสินค้า {category} ที่ลงทะเบียน ข้อมูลจะอัปเดตภายหลัง" }, buy: "ซื้อ", pendingPrice: "รอยืนยันราคา" },
    proposal: { metaTitle: "ecoaloe | ข้อเสนอส่งออกและพาร์ตเนอร์", title: "คู่มือข้อเสนอสินค้า/ผลิตภัณฑ์พาร์ตเนอร์", required: "* จำเป็น", companyInfo: "ข้อมูลบริษัทพาร์ตเนอร์", inquiry: "เขียนคำปรึกษา", reset: "รีเซ็ต", complete: "เสร็จสิ้น" },
  },
  ru: {
    meta: { title: "ecoaloe | Бренд ухода за волосами и телом" },
    nav: { lineup: "Линейка", store: "Магазин", brand: "Бренд", export: "Экспортные рынки", proposal: "Экспорт и партнерство", allProducts: "Все продукты" },
    home: { hero: { copy: "ecoaloe сочетает свежую увлажняющую силу алоэ и ежедневный уход, становясь брендом для повторных продаж на экспортных рынках.", viewProducts: "Смотреть продукты", exportInquiry: "Запрос по экспорту" }, signature: { more: "Подробнее" }, film: { title: "Фильм<br />бренда" }, support: { title: "Поддержка<br />бренда", label1: "Производство", title1: "Чистая производственная среда", desc1: "Строгая гигиена и системный процесс производства создают надежные продукты.", label2: "Упаковка", title2: "Безопасная<br />система упаковки", desc2: "Прочная упаковка и тщательная проверка обеспечивают безопасную доставку.", label3: "Маркетинг", title3: "Маркетинговая поддержка", desc3: "Мы поддерживаем POP-материалы, баннеры и рекламные инструменты для роста бренда." } },
    store: { hair: "Волосы", hairDesc: "Шампунь · Кондиционер · Уход", body: "Тело", bodyDesc: "Очищение · Эссенция · Набор", face: "Лицо", faceDesc: "Линейка ежедневного ухода", allProducts: "Все продукты", category: { all: "Все", hair: "Волосы", body: "Тело", face: "Лицо", hairTitle: "Продукты для волос", bodyTitle: "Продукты для тела", faceTitle: "Продукты для лица", hairPanel: "Волосы", hairPanelDesc: "Шампунь · Кондиционер · Уход", bodyPanel: "Тело", bodyPanelDesc: "Очищение · Эссенция · Набор", facePanel: "Лицо", facePanelDesc: "Линейка ежедневного ухода", emptyTitle: "Продукты {category} готовятся", emptyDesc: "Пока нет зарегистрированных продуктов {category}. Информация будет обновлена позже." }, buy: "Купить", pendingPrice: "Цена уточняется" },
    proposal: { metaTitle: "ecoaloe | Экспорт и партнерство", title: "Руководство по предложению продуктов для партнеров", required: "* Обязательно", companyInfo: "Информация о партнере", inquiry: "Форма запроса", reset: "Сброс", complete: "Готово" },
  },
  uz: {
    meta: { title: "ecoaloe | Soch va tana parvarishi brendi" },
    nav: { lineup: "Mahsulotlar", store: "Do‘kon", brand: "Brend", export: "Eksport bozorlari", proposal: "Eksport va hamkorlik taklifi", allProducts: "Barcha mahsulotlar" },
    home: { hero: { copy: "ecoaloe aloe namligini kundalik parvarish hissi bilan birlashtirib, eksport bozorlarida qayta izlanadigan soch parvarishi brendiga aylanmoqda.", viewProducts: "Mahsulotlarni ko‘rish", exportInquiry: "Eksport bo‘yicha aloqa" }, signature: { more: "Ko‘proq" }, film: { title: "Brend<br />filmi" }, support: { title: "Brend<br />qo‘llab-quvvatlovi", label1: "Ishlab chiqarish", title1: "Toza ishlab chiqarish muhiti", desc1: "Qattiq gigiyena nazorati va tizimli jarayon ishonchli mahsulot yaratadi.", label2: "Qadoqlash", title2: "Xavfsiz<br />qadoqlash tizimi", desc2: "Mustahkam qadoq va puxta tekshiruv mahsulotni xavfsiz yetkazadi.", label3: "Marketing", title3: "Marketing yordami", desc3: "POP, banner va reklama materiallari bilan brend o‘sishini qo‘llab-quvvatlaymiz." } },
    store: { hair: "Soch", hairDesc: "Shampun · Konditsioner · Soch parvarishi", body: "Tana", bodyDesc: "Tozalagich · Tana essensiyasi · To‘plam", face: "Yuz", faceDesc: "Kundalik parvarish liniyasi", allProducts: "Barcha mahsulotlar", category: { all: "Barchasi", hair: "Soch", body: "Tana", face: "Yuz", hairTitle: "Soch mahsulotlari", bodyTitle: "Tana mahsulotlari", faceTitle: "Yuz mahsulotlari", hairPanel: "Soch", hairPanelDesc: "Shampun · Konditsioner · Soch parvarishi", bodyPanel: "Tana", bodyPanelDesc: "Tozalagich · Tana essensiyasi · To‘plam", facePanel: "Yuz", facePanelDesc: "Kundalik parvarish liniyasi", emptyTitle: "{category} mahsulotlari tayyorlanmoqda", emptyDesc: "Hozircha {category} mahsulotlari yo‘q. Ma’lumot keyin yangilanadi." }, buy: "Xarid qilish", pendingPrice: "Narx aniqlanmoqda" },
    proposal: { metaTitle: "ecoaloe | Eksport va hamkorlik taklifi", title: "Hamkor mahsulot taklifi bo‘yicha qo‘llanma", required: "* Majburiy", companyInfo: "Hamkor kompaniya ma’lumoti", inquiry: "Murojaat shakli", reset: "Tozalash", complete: "Yakunlash" },
  },
};

const extendedLocalized = {
  ja: {
    store: {
      exportOnly: "輸出専用商品",
      productNames: {
        aloeShampoo: "エコアロエ ヘアシャンプー",
        blackGarlic: "エコ黒ニンニク ヘアシャンプー",
        arganShampoo: "エコアルガン ヘアシャンプー",
        ginseng: "エコ高麗人参リバイタル ヘアシャンプー",
        aloeConditioner: "エコアロエ ヘアコンディショナー",
        treatment: "エコアロエ ヘアトリートメント",
        hairGel: "エコアロエ ヘアジェル",
        multiEssence: "エコアロエ ヘアマルチエッセンス",
        hairSpray: "エコアロエ ヘアスプレー",
        coatingEssence: "エコアロエ ヘアコーティングエッセンス",
        strongMist: "エコアロエ ストロングヘアミスト",
        arganOil: "エコアロエ アルガンヘアオイル",
        hairColor: "エコ ヘアカラークリーム 白髪用",
        aloeHairColor: "エコアロエ ヘアカラークリーム おしゃれ染め用",
        curlingEssence: "エコアロエ ヘアカーリングエッセンス",
        bodyCleanser: "エコアロエ ボディクレンザー",
        bodyEssence: "エコアロエ ボディエッセンス",
        roseCleanser: "エコローズ ボディクレンザー",
        roseEssence: "エコローズ ボディエッセンス",
        limeMintSet: "エコ ライムミント ボディ2点セット",
        bodySet: "エコアロエ モイスチャークレンジングフォーム",
      },
    },
    brand: {
      metaTitle: "ECO ALOE | ブランド紹介",
      hero: {
        title: "自然の純粋さを込めた<br />デイリーヘア＆ボディケア",
        copy: "オーガニックアロエの保湿力と植物由来成分で<br />健やかで心地よいライフスタイルを提案します。",
      },
      story: {
        eyebrow: "ブランドストーリー",
        title: "自然から見つけた<br />健やかな美しさ",
        copy1: "毎日髪と肌に使う製品だからこそ、ECO ALOEは快適な使用感と洗浄力を大切にしています。",
        copy2: "アロエを中心とした植物由来成分と現代の化粧品技術を組み合わせ、家族で使える製品を研究しています。",
      },
      global: {
        eyebrow: "グローバル輸出",
        title: "世界へ広がる<br />ECO ALOE",
        copy: "ECO ALOEは韓国を越え、アジア・北米・中央アジアなど世界各地へ輸出されています。",
        countriesTitle: "輸出国",
        expanding: "さらに広い世界市場へ",
        expandingCopy: "世界のお客様により近づくため、グローバル市場を継続して拡大しています。",
      },
      countries: {
        korea: "韓国", uzbekistan: "ウズベキスタン", china: "中国", japan: "日本",
        vietnam: "ベトナム", thailand: "タイ", taiwan: "台湾", indonesia: "インドネシア",
        malaysia: "マレーシア", singapore: "シンガポール", usa: "米国", canada: "カナダ",
      },
      sales: {
        eyebrow: "販売実績", label: "累計販売数", trusted: "お客様からの信頼",
        copy: "ECO ALOEは国内外のお客様の信頼を基に成長し、累計100万個以上の販売を記録しました。",
        point1: "累計販売100万個以上", point2: "国内外へ輸出", point3: "韓国製", point4: "厳格な品質管理",
      },
      why: {
        eyebrow: "WHY ECO ALOE", title: "ECO ALOEが<br />選ばれる理由",
        card1Title: "植物由来成分", card1Copy: "オーガニックアロエ配合で<br />健やかな保湿ケアを。",
        card2Title: "デイリーケア", card2Copy: "毎日使いやすい<br />やさしい使用感。",
        card3Title: "世界からの信頼", card3Copy: "さまざまな国で<br />愛されるブランド。",
        card4Title: "韓国製", card4Copy: "厳格な品質管理のもと<br />韓国で生産。",
      },
      ingredient: {
        eyebrow: "主要成分", title: "オーガニックアロエベラ", subtitle: "オーガニックアロエ配合",
        point1: "保湿ケア", point2: "鎮静ケア", point3: "健やかな頭皮環境をサポート", point4: "さっぱりした使用感",
      },
      quality: {
        eyebrow: "品質と製造", title: "信頼できる<br />品質管理",
        copy: "企画から製造、品質管理まで厳格な基準で管理し、安心して使える製品を生産しています。",
      },
      company: {
        eyebrow: "会社情報", distributor: "責任販売業者", manufacturer: "製造業者",
        roseeAddress: "韓国 京畿道抱川市蘇屹邑竹葉山路385-89",
        cosmocosAddress: "韓国 仁川広域市南洞区エンゴゲ路404",
      },
    },
  },
  "zh-CN": {
    store: {
      exportOnly: "出口专用商品",
      productNames: {
        aloeShampoo: "ECO芦荟洗发水", blackGarlic: "ECO黑蒜洗发水",
        arganShampoo: "ECO摩洛哥坚果洗发水", ginseng: "ECO人参焕活洗发水",
        aloeConditioner: "ECO芦荟护发素", treatment: "ECO芦荟发膜",
        hairGel: "ECO芦荟发胶", multiEssence: "ECO芦荟多效护发精华",
        hairSpray: "ECO芦荟定型喷雾", coatingEssence: "ECO芦荟护发精华",
        strongMist: "ECO芦荟强力护发喷雾", arganOil: "ECO芦荟摩洛哥坚果护发油",
        hairColor: "ECO遮白发染发霜", aloeHairColor: "ECO芦荟时尚染发霜",
        curlingEssence: "ECO芦荟卷发精华", bodyCleanser: "ECO芦荟沐浴露",
        bodyEssence: "ECO芦荟身体乳", roseCleanser: "ECO玫瑰沐浴露",
        roseEssence: "ECO玫瑰身体乳", limeMintSet: "ECO青柠薄荷身体护理两件套",
        bodySet: "ECO芦荟保湿洁面泡沫",
      },
    },
    brand: {
      metaTitle: "ECO ALOE | 品牌介绍",
      hero: { title: "蕴含自然纯净力量的<br />日常头发与身体护理", copy: "融合有机芦荟的保湿能量与植物源成分，<br />为您带来健康舒适的生活方式。" },
      story: {
        eyebrow: "品牌故事", title: "源自自然的<br />健康之美",
        copy1: "作为每天接触头发与肌肤的产品，ECO ALOE重视舒适使用感与洁净力。",
        copy2: "以芦荟为核心，将植物源成分与现代化妆品技术结合，研发适合全家使用的产品。",
      },
      global: {
        eyebrow: "全球出口", title: "走向世界的<br />ECO ALOE",
        copy: "ECO ALOE已出口至亚洲、北美和中亚等多个地区，向全球传递韩国化妆品的价值。",
        countriesTitle: "出口国家", expanding: "拓展更多全球市场",
        expandingCopy: "为了更贴近全球消费者，我们持续拓展海外市场。",
      },
      countries: {
        korea: "韩国", uzbekistan: "乌兹别克斯坦", china: "中国", japan: "日本",
        vietnam: "越南", thailand: "泰国", taiwan: "中国台湾", indonesia: "印度尼西亚",
        malaysia: "马来西亚", singapore: "新加坡", usa: "美国", canada: "加拿大",
      },
      sales: {
        eyebrow: "销售记录", label: "累计销量", trusted: "深受消费者信赖",
        copy: "ECO ALOE凭借国内外消费者的信赖不断成长，累计销量已超过100万件。",
        point1: "累计销量超过100万件", point2: "出口多个国家和地区", point3: "韩国制造", point4: "严格的质量管理体系",
      },
      why: {
        eyebrow: "WHY ECO ALOE", title: "选择<br />ECO ALOE的理由",
        card1Title: "植物源成分", card1Copy: "蕴含有机芦荟，<br />提供健康保湿护理。",
        card2Title: "日常护理", card2Copy: "追求每天使用也舒适的<br />温和使用感。",
        card3Title: "全球信赖", card3Copy: "深受世界多个国家<br />消费者喜爱的品牌。",
        card4Title: "韩国制造", card4Copy: "通过严格质量管理体系<br />在韩国生产。",
      },
      ingredient: {
        eyebrow: "核心成分", title: "有机芦荟", subtitle: "蕴含有机芦荟",
        point1: "补充水分", point2: "舒缓护理", point3: "维持健康头皮状态", point4: "清爽使用感",
      },
      quality: {
        eyebrow: "质量与制造", title: "值得信赖的<br />质量管理",
        copy: "从产品策划、生产到质量管理，均按照严格标准进行管理，让消费者安心使用。",
      },
      company: {
        eyebrow: "公司信息", distributor: "责任销售商", manufacturer: "制造商",
        roseeAddress: "韩国京畿道抱川市蘇屹邑竹叶山路385-89",
        cosmocosAddress: "韩国仁川广域市南洞区莺谷路404",
      },
    },
  },
  vi: {
    store: {
      exportOnly: "Sản phẩm chỉ dành cho xuất khẩu",
      productNames: {
        aloeShampoo: "Dầu gội Eco Aloe", blackGarlic: "Dầu gội Eco Tỏi Đen",
        arganShampoo: "Dầu gội Eco Argan", ginseng: "Dầu gội Eco Nhân Sâm Revital",
        aloeConditioner: "Dầu xả Eco Aloe", treatment: "Kem ủ tóc Eco Aloe",
        hairGel: "Gel tóc Eco Aloe", multiEssence: "Tinh chất tóc đa năng Eco Aloe",
        hairSpray: "Keo xịt tóc Eco Aloe", coatingEssence: "Tinh chất phủ tóc Eco Aloe",
        strongMist: "Xịt dưỡng tóc siêu giữ nếp Eco Aloe", arganOil: "Dầu dưỡng tóc Argan Eco Aloe",
        hairColor: "Kem nhuộm tóc Eco che tóc bạc", aloeHairColor: "Kem nhuộm tóc thời trang Eco Aloe",
        curlingEssence: "Tinh chất tạo xoăn Eco Aloe", bodyCleanser: "Sữa tắm Eco Aloe",
        bodyEssence: "Tinh chất dưỡng thể Eco Aloe", roseCleanser: "Sữa tắm Eco Rose",
        roseEssence: "Tinh chất dưỡng thể Eco Rose", limeMintSet: "Bộ đôi dưỡng thể Eco Chanh Bạc Hà",
        bodySet: "Sữa rửa mặt dưỡng ẩm Eco Aloe",
      },
    },
    brand: {
      metaTitle: "ECO ALOE | Giới thiệu thương hiệu",
      hero: { title: "Chăm sóc tóc và cơ thể hằng ngày<br />với sự tinh khiết từ thiên nhiên", copy: "Năng lượng dưỡng ẩm từ lô hội hữu cơ và thành phần nguồn gốc thực vật<br />mang đến lối sống khỏe mạnh, dễ chịu." },
      story: {
        eyebrow: "Câu chuyện thương hiệu", title: "Vẻ đẹp khỏe mạnh<br />từ thiên nhiên",
        copy1: "Vì sản phẩm tiếp xúc với tóc và da mỗi ngày, ECO ALOE ưu tiên cảm giác dễ chịu và khả năng làm sạch.",
        copy2: "Chúng tôi kết hợp thành phần thực vật lấy lô hội làm trung tâm với công nghệ mỹ phẩm hiện đại để cả gia đình cùng sử dụng.",
      },
      global: {
        eyebrow: "XUẤT KHẨU TOÀN CẦU", title: "ECO ALOE<br />vươn ra thế giới",
        copy: "ECO ALOE được xuất khẩu tới nhiều thị trường tại châu Á, Bắc Mỹ và Trung Á.",
        countriesTitle: "Quốc gia xuất khẩu", expanding: "Mở rộng thêm thị trường toàn cầu",
        expandingCopy: "Chúng tôi liên tục mở rộng thị trường để đến gần hơn với người tiêu dùng toàn cầu.",
      },
      countries: {
        korea: "Hàn Quốc", uzbekistan: "Uzbekistan", china: "Trung Quốc", japan: "Nhật Bản",
        vietnam: "Việt Nam", thailand: "Thái Lan", taiwan: "Đài Loan", indonesia: "Indonesia",
        malaysia: "Malaysia", singapore: "Singapore", usa: "Hoa Kỳ", canada: "Canada",
      },
      sales: {
        eyebrow: "THÀNH TÍCH BÁN HÀNG", label: "Doanh số tích lũy", trusted: "Được khách hàng tin chọn",
        copy: "ECO ALOE đã phát triển nhờ niềm tin của khách hàng trong và ngoài Hàn Quốc, với hơn một triệu sản phẩm được bán ra.",
        point1: "Hơn 1 triệu sản phẩm đã bán", point2: "Xuất khẩu trong và ngoài nước", point3: "Sản xuất tại Hàn Quốc", point4: "Hệ thống quản lý chất lượng nghiêm ngặt",
      },
      why: {
        eyebrow: "WHY ECO ALOE", title: "Lý do chọn<br />ECO ALOE",
        card1Title: "Thành phần thực vật", card1Copy: "Lô hội hữu cơ hỗ trợ<br />chăm sóc dưỡng ẩm khỏe mạnh.",
        card2Title: "Chăm sóc hằng ngày", card2Copy: "Cảm giác dịu nhẹ,<br />phù hợp sử dụng mỗi ngày.",
        card3Title: "Niềm tin toàn cầu", card3Copy: "Thương hiệu được yêu thích<br />tại nhiều quốc gia.",
        card4Title: "Sản xuất tại Hàn Quốc", card4Copy: "Sản xuất tại Hàn Quốc<br />theo tiêu chuẩn nghiêm ngặt.",
      },
      ingredient: {
        eyebrow: "Thành phần chính", title: "Lô hội hữu cơ", subtitle: "Chứa lô hội hữu cơ",
        point1: "Cấp ẩm", point2: "Làm dịu", point3: "Hỗ trợ da đầu khỏe mạnh", point4: "Cảm giác tươi mát",
      },
      quality: {
        eyebrow: "Chất lượng & Sản xuất", title: "Quản lý chất lượng<br />đáng tin cậy",
        copy: "Từ hoạch định, sản xuất đến kiểm soát chất lượng, mọi công đoạn đều được quản lý theo tiêu chuẩn nghiêm ngặt.",
      },
      company: {
        eyebrow: "Thông tin công ty", distributor: "Đơn vị chịu trách nhiệm phân phối", manufacturer: "Nhà sản xuất",
        roseeAddress: "385-89 Jugeopsan-ro, Soheul-eup, Pocheon-si, Gyeonggi-do, Hàn Quốc",
        cosmocosAddress: "404 Aenggogae-ro, Namdong-gu, Incheon, Hàn Quốc",
      },
    },
  },
  th: {
    store: {
      exportOnly: "สินค้าสำหรับส่งออกเท่านั้น",
      productNames: {
        aloeShampoo: "แชมพูสระผม Eco Aloe", blackGarlic: "แชมพูสระผม Eco กระเทียมดำ",
        arganShampoo: "แชมพูสระผม Eco Argan", ginseng: "แชมพูสระผม Eco Ginseng Revital",
        aloeConditioner: "ครีมนวดผม Eco Aloe", treatment: "ทรีตเมนต์ผม Eco Aloe",
        hairGel: "เจลแต่งผม Eco Aloe", multiEssence: "มัลติเอสเซนส์บำรุงผม Eco Aloe",
        hairSpray: "สเปรย์จัดแต่งทรงผม Eco Aloe", coatingEssence: "เอสเซนส์เคลือบเส้นผม Eco Aloe",
        strongMist: "สเปรย์บำรุงผมสูตรอยู่ทรงพิเศษ Eco Aloe", arganOil: "น้ำมันบำรุงผมอาร์แกน Eco Aloe",
        hairColor: "ครีมเปลี่ยนสีผม Eco สำหรับปิดผมขาว", aloeHairColor: "ครีมเปลี่ยนสีผมแฟชั่น Eco Aloe",
        curlingEssence: "เอสเซนส์จัดลอนผม Eco Aloe", bodyCleanser: "ครีมอาบน้ำ Eco Aloe",
        bodyEssence: "เอสเซนส์บำรุงผิวกาย Eco Aloe", roseCleanser: "ครีมอาบน้ำ Eco Rose",
        roseEssence: "เอสเซนส์บำรุงผิวกาย Eco Rose", limeMintSet: "ชุดดูแลผิวกาย Eco Lime Mint 2 ชิ้น",
        bodySet: "โฟมล้างหน้าเพิ่มความชุ่มชื้น Eco Aloe",
      },
    },
    brand: {
      metaTitle: "ECO ALOE | แนะนำแบรนด์",
      hero: { title: "การดูแลเส้นผมและผิวกายในทุกวัน<br />ด้วยความบริสุทธิ์จากธรรมชาติ", copy: "พลังความชุ่มชื้นจากว่านหางจระเข้ออร์แกนิกและส่วนผสมจากพืช<br />ช่วยเติมเต็มไลฟ์สไตล์ที่สุขภาพดีและสบายผิว" },
      story: {
        eyebrow: "เรื่องราวของแบรนด์", title: "ความงามสุขภาพดี<br />ที่ค้นพบจากธรรมชาติ",
        copy1: "เพราะเป็นผลิตภัณฑ์ที่ใช้กับเส้นผมและผิวทุกวัน ECO ALOE จึงให้ความสำคัญกับความสบายในการใช้และประสิทธิภาพการทำความสะอาด",
        copy2: "เราผสานส่วนผสมจากพืชที่มีว่านหางจระเข้เป็นหัวใจเข้ากับเทคโนโลยีเครื่องสำอางสมัยใหม่ เพื่อผลิตภัณฑ์ที่ทุกคนในครอบครัวใช้ได้",
      },
      global: {
        eyebrow: "การส่งออกทั่วโลก", title: "ECO ALOE<br />ก้าวสู่ตลาดโลก",
        copy: "ECO ALOE ส่งออกไปยังตลาดต่าง ๆ ในเอเชีย อเมริกาเหนือ และเอเชียกลาง พร้อมส่งต่อคุณค่าของเครื่องสำอางเกาหลี",
        countriesTitle: "ประเทศที่ส่งออก", expanding: "ขยายสู่ตลาดโลกมากยิ่งขึ้น",
        expandingCopy: "เราขยายตลาดอย่างต่อเนื่องเพื่อเข้าใกล้ผู้บริโภคทั่วโลกมากขึ้น",
      },
      countries: {
        korea: "เกาหลีใต้", uzbekistan: "อุซเบกิสถาน", china: "จีน", japan: "ญี่ปุ่น",
        vietnam: "เวียดนาม", thailand: "ไทย", taiwan: "ไต้หวัน", indonesia: "อินโดนีเซีย",
        malaysia: "มาเลเซีย", singapore: "สิงคโปร์", usa: "สหรัฐอเมริกา", canada: "แคนาดา",
      },
      sales: {
        eyebrow: "ยอดขายสะสม", label: "ยอดขายสะสม", trusted: "ได้รับความไว้วางใจจากลูกค้า",
        copy: "ECO ALOE เติบโตจากความไว้วางใจของลูกค้าในเกาหลีและต่างประเทศ โดยมียอดขายสะสมมากกว่าหนึ่งล้านชิ้น",
        point1: "ยอดขายมากกว่า 1 ล้านชิ้น", point2: "ส่งออกสู่หลายประเทศ", point3: "ผลิตในเกาหลี", point4: "ระบบควบคุมคุณภาพอย่างเข้มงวด",
      },
      why: {
        eyebrow: "WHY ECO ALOE", title: "เหตุผลที่เลือก<br />ECO ALOE",
        card1Title: "ส่วนผสมจากพืช", card1Copy: "ว่านหางจระเข้ออร์แกนิก<br />ช่วยดูแลความชุ่มชื้น",
        card2Title: "ดูแลได้ทุกวัน", card2Copy: "สัมผัสอ่อนโยนสบาย<br />เหมาะสำหรับใช้ทุกวัน",
        card3Title: "ความไว้วางใจทั่วโลก", card3Copy: "แบรนด์ที่ได้รับความรัก<br />จากหลากหลายประเทศ",
        card4Title: "ผลิตในเกาหลี", card4Copy: "ผลิตในเกาหลีภายใต้<br />มาตรฐานคุณภาพเข้มงวด",
      },
      ingredient: {
        eyebrow: "ส่วนผสมสำคัญ", title: "ว่านหางจระเข้ออร์แกนิก", subtitle: "มีว่านหางจระเข้ออร์แกนิก",
        point1: "เติมความชุ่มชื้น", point2: "ดูแลปลอบประโลม", point3: "ช่วยคงสภาพหนังศีรษะที่ดี", point4: "สัมผัสสดชื่น",
      },
      quality: {
        eyebrow: "คุณภาพและการผลิต", title: "การควบคุมคุณภาพ<br />ที่ไว้วางใจได้",
        copy: "ทุกขั้นตอนตั้งแต่การวางแผน การผลิต ไปจนถึงการควบคุมคุณภาพ อยู่ภายใต้มาตรฐานที่เข้มงวด",
      },
      company: {
        eyebrow: "ข้อมูลบริษัท", distributor: "ผู้รับผิดชอบการจำหน่าย", manufacturer: "ผู้ผลิต",
        roseeAddress: "385-89 Jugeopsan-ro, Soheul-eup, Pocheon-si, Gyeonggi-do, เกาหลีใต้",
        cosmocosAddress: "404 Aenggogae-ro, Namdong-gu, Incheon, เกาหลีใต้",
      },
    },
  },
  ru: {
    store: {
      exportOnly: "Только для экспорта",
      productNames: {
        aloeShampoo: "Шампунь Eco Aloe", blackGarlic: "Шампунь Eco с черным чесноком",
        arganShampoo: "Шампунь Eco Argan", ginseng: "Восстанавливающий шампунь Eco Ginseng",
        aloeConditioner: "Кондиционер Eco Aloe", treatment: "Маска для волос Eco Aloe",
        hairGel: "Гель для волос Eco Aloe", multiEssence: "Мультиэссенция для волос Eco Aloe",
        hairSpray: "Спрей для волос Eco Aloe", coatingEssence: "Защитная эссенция для волос Eco Aloe",
        strongMist: "Сильный мист для волос Eco Aloe", arganOil: "Аргановое масло для волос Eco Aloe",
        hairColor: "Крем-краска Eco для седых волос", aloeHairColor: "Модная крем-краска Eco Aloe",
        curlingEssence: "Эссенция для локонов Eco Aloe", bodyCleanser: "Гель для душа Eco Aloe",
        bodyEssence: "Эссенция для тела Eco Aloe", roseCleanser: "Гель для душа Eco Rose",
        roseEssence: "Эссенция для тела Eco Rose", limeMintSet: "Набор для тела Eco Lime Mint, 2 предмета",
        bodySet: "Увлажняющая пенка для умывания Eco Aloe",
      },
    },
    brand: {
      metaTitle: "ECO ALOE | О бренде",
      hero: { title: "Ежедневный уход за волосами и телом<br />с чистотой природы", copy: "Увлажняющая сила органического алоэ и растительные компоненты<br />для здорового и комфортного образа жизни." },
      story: {
        eyebrow: "История бренда", title: "Здоровая красота<br />из природы",
        copy1: "Поскольку средства используются каждый день, ECO ALOE уделяет особое внимание комфорту и эффективному очищению.",
        copy2: "Мы сочетаем растительные компоненты на основе алоэ с современными косметическими технологиями для всей семьи.",
      },
      global: {
        eyebrow: "МИРОВОЙ ЭКСПОРТ", title: "ECO ALOE<br />выходит на мировой рынок",
        copy: "ECO ALOE экспортируется в страны Азии, Северной Америки и Центральной Азии.",
        countriesTitle: "Страны экспорта", expanding: "Расширение мировых рынков",
        expandingCopy: "Мы продолжаем расширять присутствие, чтобы быть ближе к покупателям во всем мире.",
      },
      countries: {
        korea: "Южная Корея", uzbekistan: "Узбекистан", china: "Китай", japan: "Япония",
        vietnam: "Вьетнам", thailand: "Таиланд", taiwan: "Тайвань", indonesia: "Индонезия",
        malaysia: "Малайзия", singapore: "Сингапур", usa: "США", canada: "Канада",
      },
      sales: {
        eyebrow: "РЕЗУЛЬТАТЫ ПРОДАЖ", label: "Совокупные продажи", trusted: "Доверие покупателей",
        copy: "ECO ALOE растет благодаря доверию покупателей в Корее и за рубежом. Продано более одного миллиона товаров.",
        point1: "Более 1 миллиона проданных товаров", point2: "Экспорт в разные страны", point3: "Сделано в Корее", point4: "Строгий контроль качества",
      },
      why: {
        eyebrow: "WHY ECO ALOE", title: "Почему выбирают<br />ECO ALOE",
        card1Title: "Растительные компоненты", card1Copy: "Органическое алоэ для<br />здорового увлажнения.",
        card2Title: "Ежедневный уход", card2Copy: "Мягкое комфортное ощущение<br />для ежедневного применения.",
        card3Title: "Мировое доверие", card3Copy: "Бренд, любимый покупателями<br />в разных странах.",
        card4Title: "Сделано в Корее", card4Copy: "Производство в Корее<br />по строгим стандартам.",
      },
      ingredient: {
        eyebrow: "Ключевой ингредиент", title: "Органическое алоэ вера", subtitle: "Содержит органическое алоэ",
        point1: "Увлажнение", point2: "Успокаивающий уход", point3: "Поддержка здоровья кожи головы", point4: "Свежее ощущение",
      },
      quality: {
        eyebrow: "Качество и производство", title: "Надежный<br />контроль качества",
        copy: "Все этапы от разработки и производства до контроля качества выполняются по строгим стандартам.",
      },
      company: {
        eyebrow: "Информация о компании", distributor: "Ответственный дистрибьютор", manufacturer: "Производитель",
        roseeAddress: "385-89 Jugeopsan-ro, Soheul-eup, Pocheon-si, Gyeonggi-do, Республика Корея",
        cosmocosAddress: "404 Aenggogae-ro, Namdong-gu, Incheon, Республика Корея",
      },
    },
  },
  uz: {
    store: {
      exportOnly: "Faqat eksport uchun",
      productNames: {
        aloeShampoo: "Eco Aloe soch shampuni", blackGarlic: "Eco qora sarimsoq shampuni",
        arganShampoo: "Eco Argan soch shampuni", ginseng: "Eco Ginseng Revital shampuni",
        aloeConditioner: "Eco Aloe soch konditsioneri", treatment: "Eco Aloe soch niqobi",
        hairGel: "Eco Aloe soch geli", multiEssence: "Eco Aloe ko‘p funksiyali soch essensiyasi",
        hairSpray: "Eco Aloe soch spreyi", coatingEssence: "Eco Aloe himoya soch essensiyasi",
        strongMist: "Eco Aloe kuchli soch misti", arganOil: "Eco Aloe argan soch moyi",
        hairColor: "Eco oq sochlar uchun bo‘yoq kremi", aloeHairColor: "Eco Aloe moda soch bo‘yoq kremi",
        curlingEssence: "Eco Aloe jingalak soch essensiyasi", bodyCleanser: "Eco Aloe tana yuvish geli",
        bodyEssence: "Eco Aloe tana essensiyasi", roseCleanser: "Eco Rose tana yuvish geli",
        roseEssence: "Eco Rose tana essensiyasi", limeMintSet: "Eco Lime Mint tana parvarishi 2 talik to‘plami",
        bodySet: "Eco Aloe namlantiruvchi yuz yuvish ko‘pigi",
      },
    },
    brand: {
      metaTitle: "ECO ALOE | Brend haqida",
      hero: { title: "Tabiat musaffoligi bilan<br />kundalik soch va tana parvarishi", copy: "Organik aloe namligi va o‘simlik asosidagi tarkiblar<br />sog‘lom va qulay turmush tarzini taklif etadi." },
      story: {
        eyebrow: "Brend tarixi", title: "Tabiatdan topilgan<br />sog‘lom go‘zallik",
        copy1: "Mahsulotlar soch va teriga har kuni ishlatilgani uchun ECO ALOE qulaylik va samarali tozalashni birinchi o‘ringa qo‘yadi.",
        copy2: "Aloe asosidagi o‘simlik tarkiblarini zamonaviy kosmetika texnologiyasi bilan birlashtirib, butun oila uchun mahsulotlar yaratamiz.",
      },
      global: {
        eyebrow: "GLOBAL EKSPORT", title: "ECO ALOE<br />jahon sari",
        copy: "ECO ALOE Osiyo, Shimoliy Amerika va Markaziy Osiyodagi turli bozorlarga eksport qilinadi.",
        countriesTitle: "Eksport davlatlari", expanding: "Yangi global bozorlarga kengayish",
        expandingCopy: "Dunyo iste’molchilariga yanada yaqin bo‘lish uchun bozorlarimizni muntazam kengaytiramiz.",
      },
      countries: {
        korea: "Janubiy Koreya", uzbekistan: "O‘zbekiston", china: "Xitoy", japan: "Yaponiya",
        vietnam: "Vyetnam", thailand: "Tailand", taiwan: "Tayvan", indonesia: "Indoneziya",
        malaysia: "Malayziya", singapore: "Singapur", usa: "AQSh", canada: "Kanada",
      },
      sales: {
        eyebrow: "SAVDO NATIJALARI", label: "Jami sotuv", trusted: "Mijozlar ishonchi",
        copy: "ECO ALOE Koreya va xorijdagi mijozlar ishonchi bilan o‘sdi va bir milliondan ortiq mahsulot sotildi.",
        point1: "1 milliondan ortiq mahsulot sotilgan", point2: "Turli davlatlarga eksport", point3: "Koreyada ishlab chiqarilgan", point4: "Qat’iy sifat nazorati",
      },
      why: {
        eyebrow: "WHY ECO ALOE", title: "Nega<br />ECO ALOE",
        card1Title: "O‘simlik tarkiblari", card1Copy: "Organik aloe bilan<br />sog‘lom namlantirish.",
        card2Title: "Kundalik parvarish", card2Copy: "Har kuni ishlatish uchun<br />muloyim va qulay.",
        card3Title: "Global ishonch", card3Copy: "Turli mamlakatlarda<br />sevilgan brend.",
        card4Title: "Koreyada ishlab chiqarilgan", card4Copy: "Qat’iy sifat standartlari asosida<br />Koreyada ishlab chiqariladi.",
      },
      ingredient: {
        eyebrow: "Asosiy tarkib", title: "Organik aloe vera", subtitle: "Organik aloe bilan",
        point1: "Namlantirish", point2: "Tinchlantiruvchi parvarish", point3: "Sog‘lom bosh terisini qo‘llab-quvvatlash", point4: "Yengil va tetik his",
      },
      quality: {
        eyebrow: "Sifat va ishlab chiqarish", title: "Ishonchli<br />sifat nazorati",
        copy: "Rejalashtirishdan ishlab chiqarish va sifat nazoratigacha bo‘lgan barcha jarayonlar qat’iy standartlar asosida boshqariladi.",
      },
      company: {
        eyebrow: "Kompaniya ma’lumoti", distributor: "Mas’ul distribyutor", manufacturer: "Ishlab chiqaruvchi",
        roseeAddress: "385-89 Jugeopsan-ro, Soheul-eup, Pocheon-si, Gyeonggi-do, Janubiy Koreya",
        cosmocosAddress: "404 Aenggogae-ro, Namdong-gu, Incheon, Janubiy Koreya",
      },
    },
  },
};

Object.entries(extendedLocalized).forEach(([lang, content]) => {
  localized[lang] = mergeDict(localized[lang], content);
});

const dictionaries = {
  ko: mergeDict(baseKo, siteKo),
  en: mergeDict(baseEn, siteEn),
  ja: mergeDict(mergeDict(baseEn, siteEn), localized.ja),
  "zh-CN": mergeDict(mergeDict(baseEn, siteEn), localized["zh-CN"]),
  vi: mergeDict(mergeDict(baseEn, siteEn), localized.vi),
  th: mergeDict(mergeDict(baseEn, siteEn), localized.th),
  ru: mergeDict(mergeDict(baseEn, siteEn), localized.ru),
  uz: mergeDict(mergeDict(baseEn, siteEn), localized.uz),
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
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      node.setAttribute("placeholder", this.t(node.dataset.i18nPlaceholder));
    });
    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.lang === this.currentLanguage);
    });
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", this.t("meta.description"));
    document.title = this.t(document.body?.dataset.titleKey || "meta.title");
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
