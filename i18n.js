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
    title: "ROSEE ECO ALOE | 브랜드 페이지",
    description: "로제 에코 알로에 브랜드 페이지. 알로에 헤어 케어와 수출 시장을 위한 에코 라인 소개.",
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
        "알로에의 산뜻한 수분감과 데일리 케어 감성을 담은 로제의 에코 라인. 국내를 넘어 수출 시장에서 다시 찾는 헤어 케어 브랜드로 성장하고 있습니다.",
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
      title1: "청결한 제조 환경",
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
      hairTitle: "헤어 제품",
      bodyTitle: "바디 제품",
      faceTitle: "페이스 제품",
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
      hairColor: "에코 헤어 칼라크림 새치용",
      aloeHairColor: "에코 알로에 헤어칼라 크림 멋내기용",
      curlingEssence: "에코 알로에 헤어 컬링 에센스",
      silkCurling: "에코 알로에 헤어 실크 컬링 에센스",
      bodyCleanser: "에코 알로에 바디 클렌저",
      bodyEssence: "에코 알로에 바디 에센스",
      roseCleanser: "에코 로즈 바디 클렌저",
      roseEssence: "에코 로즈 바디 에센스",
      limeMintSet: "로제 에코 라임민트 바디 2종세트",
      bodySet: "에코 알로에 모이스처 클렌징폼",
    },
  },
  proposal: {
    metaTitle: "ROSEE ECO | 수출&협력업체 제안",
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
    title: "ROSEE ECO ALOE | Brand Page",
    description: "ROSEE ECO ALOE brand page for aloe hair care and export-ready ECO line introductions.",
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
        "ROSEE ECO blends fresh aloe moisture with everyday care sensibility, growing into a hair care brand that export markets return to.",
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
    faceDesc: "Daily care lineup coming soon",
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
      facePanelDesc: "Daily care lineup coming soon",
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
      limeMintSet: "Rosee Eco Lime Mint Body 2-piece Set",
      bodySet: "Eco Aloe Moisture Cleansing Foam",
    },
  },
  proposal: {
    metaTitle: "ROSEE ECO | Export & Partner Proposal",
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
    meta: { title: "ROSEE ECO ALOE | ブランドページ" },
    nav: { lineup: "製品ライン", store: "ストア", brand: "ブランド", export: "輸出国", proposal: "輸出・協力提案", allProducts: "全製品" },
    home: {
      hero: { copy: "アロエのみずみずしさとデイリーケアの感性を込めたROSEEのECOライン。国内を越えて輸出市場でも選ばれるヘアケアブランドへ成長しています。", viewProducts: "製品を見る", exportInquiry: "輸出のお問い合わせ" },
      signature: { more: "もっと見る" },
      film: { title: "ブランド<br />フィルム" },
      support: { title: "ブランド<br />サポート", label1: "製造環境", title1: "清潔な製造環境", desc1: "徹底した衛生管理と体系的な生産工程で信頼できる製品をつくります。", label2: "包装システム", title2: "安全な<br />包装システム", desc2: "丈夫な包装と厳格な検品で国内外へ安全に配送します。", label3: "マーケティング支援", title3: "マーケティング支援", desc3: "POPやバナーなど販促物を支援し、ブランド成長を共に進めます。" },
    },
    store: { hair: "ヘア", hairDesc: "シャンプー · コンディショナー · ヘアケア", body: "ボディ", bodyDesc: "クレンザー · ボディエッセンス · セット", face: "フェイス", faceDesc: "デイリーケアライン準備中", allProducts: "全製品", category: { all: "全体", hair: "ヘア", body: "ボディ", face: "フェイス", hairTitle: "ヘア製品", bodyTitle: "ボディ製品", faceTitle: "フェイス製品", hairPanel: "ヘア", hairPanelDesc: "シャンプー · コンディショナー · ヘアケア", bodyPanel: "ボディ", bodyPanelDesc: "クレンザー · ボディエッセンス · セット", facePanel: "フェイス", facePanelDesc: "デイリーケアライン準備中", emptyTitle: "{category}製品準備中", emptyDesc: "現在登録された{category}製品はありません。今後更新予定です。" }, buy: "購入する", pendingPrice: "価格確認中" },
    proposal: { metaTitle: "ROSEE ECO | 輸出・協力提案", title: "輸出・協力会社 製品/商品 提案案内", required: "* 必須入力", companyInfo: "協力会社情報", inquiry: "相談書作成", reset: "初期化", complete: "完了" },
  },
  "zh-CN": {
    meta: { title: "ROSEE ECO ALOE | 品牌页面" },
    nav: { lineup: "产品系列", store: "商店", brand: "品牌", export: "出口国家", proposal: "出口&合作提案", allProducts: "全部产品" },
    home: { hero: { copy: "ROSEE ECO 以清爽芦荟水润感和日常护理理念打造产品线，正在成长为出口市场持续复购的护发品牌。", viewProducts: "查看产品", exportInquiry: "出口咨询" }, signature: { more: "查看更多" }, film: { title: "品牌<br />影片" }, support: { title: "品牌<br />支持", label1: "生产环境", title1: "洁净生产环境", desc1: "以严格卫生管理和系统化生产流程打造可信赖产品。", label2: "包装系统", title2: "安全<br />包装系统", desc2: "通过坚固包装和严格检查，安全配送至国内外。", label3: "营销支持", title3: "营销支持", desc3: "提供POP、横幅等宣传物料，共同推动品牌成长。" } },
    store: { hair: "头发护理", hairDesc: "洗发水 · 护发素 · 头发护理", body: "身体护理", bodyDesc: "沐浴露 · 身体精华 · 套装", face: "面部护理", faceDesc: "日常护理系列准备中", allProducts: "全部产品", category: { all: "全部", hair: "头发", body: "身体", face: "面部", hairTitle: "头发护理产品", bodyTitle: "身体护理产品", faceTitle: "面部护理产品", hairPanel: "头发护理", hairPanelDesc: "洗发水 · 护发素 · 头发护理", bodyPanel: "身体护理", bodyPanelDesc: "沐浴露 · 身体精华 · 套装", facePanel: "面部护理", facePanelDesc: "日常护理系列准备中", emptyTitle: "{category}产品准备中", emptyDesc: "目前暂无{category}产品信息，后续将更新。" }, buy: "购买", pendingPrice: "价格待确认" },
    proposal: { metaTitle: "ROSEE ECO | 出口&合作提案", title: "出口&合作企业产品/商品提案指南", required: "* 必填", companyInfo: "合作企业信息", inquiry: "填写咨询", reset: "重置", complete: "完成" },
  },
  vi: {
    meta: { title: "ROSEE ECO ALOE | Trang thương hiệu" },
    nav: { lineup: "Dòng sản phẩm", store: "Cửa hàng", brand: "Thương hiệu", export: "Thị trường xuất khẩu", proposal: "Đề xuất xuất khẩu & hợp tác", allProducts: "Tất cả sản phẩm" },
    home: { hero: { copy: "ROSEE ECO mang cảm giác dưỡng ẩm tươi mát từ lô hội vào chăm sóc hằng ngày, phát triển thành thương hiệu chăm sóc tóc được thị trường xuất khẩu tìm lại.", viewProducts: "Xem sản phẩm", exportInquiry: "Liên hệ xuất khẩu" }, signature: { more: "Xem thêm" }, film: { title: "Phim<br />thương hiệu" }, support: { title: "Hỗ trợ<br />thương hiệu", label1: "Sản xuất", title1: "Môi trường sản xuất sạch", desc1: "Quản lý vệ sinh nghiêm ngặt và quy trình có hệ thống tạo nên sản phẩm đáng tin cậy.", label2: "Đóng gói", title2: "Hệ thống<br />đóng gói an toàn", desc2: "Bao bì chắc chắn và kiểm tra kỹ giúp giao hàng an toàn trong và ngoài nước.", label3: "Marketing", title3: "Hỗ trợ marketing", desc3: "Hỗ trợ POP, banner và tài liệu quảng bá để cùng phát triển thương hiệu." } },
    store: { hair: "Tóc", hairDesc: "Dầu gội · Dầu xả · Chăm sóc tóc", body: "Cơ thể", bodyDesc: "Sữa tắm · Tinh chất body · Bộ sản phẩm", face: "Mặt", faceDesc: "Dòng chăm sóc hằng ngày sắp ra mắt", allProducts: "Tất cả sản phẩm", category: { all: "Tất cả", hair: "Tóc", body: "Cơ thể", face: "Mặt", hairTitle: "Sản phẩm tóc", bodyTitle: "Sản phẩm body", faceTitle: "Sản phẩm mặt", hairPanel: "Tóc", hairPanelDesc: "Dầu gội · Dầu xả · Chăm sóc tóc", bodyPanel: "Cơ thể", bodyPanelDesc: "Sữa tắm · Tinh chất body · Bộ sản phẩm", facePanel: "Mặt", facePanelDesc: "Dòng chăm sóc hằng ngày sắp ra mắt", emptyTitle: "Sản phẩm {category} đang chuẩn bị", emptyDesc: "Hiện chưa có sản phẩm {category}; thông tin sẽ được cập nhật sau." }, buy: "Mua hàng", pendingPrice: "Đang xác nhận giá" },
    proposal: { metaTitle: "ROSEE ECO | Đề xuất xuất khẩu & hợp tác", title: "Hướng dẫn đề xuất sản phẩm/hàng hóa đối tác", required: "* Bắt buộc", companyInfo: "Thông tin đối tác", inquiry: "Viết nội dung tư vấn", reset: "Đặt lại", complete: "Hoàn tất" },
  },
  th: {
    meta: { title: "ROSEE ECO ALOE | หน้าแบรนด์" },
    nav: { lineup: "ไลน์สินค้า", store: "สโตร์", brand: "แบรนด์", export: "ตลาดส่งออก", proposal: "ข้อเสนอส่งออกและพาร์ตเนอร์", allProducts: "สินค้าทั้งหมด" },
    home: { hero: { copy: "ROSEE ECO ถ่ายทอดความสดชื่นของว่านหางจระเข้สู่การดูแลประจำวัน และเติบโตเป็นแบรนด์ดูแลเส้นผมที่ตลาดส่งออกเลือกซ้ำ", viewProducts: "ดูสินค้า", exportInquiry: "ติดต่อส่งออก" }, signature: { more: "ดูเพิ่มเติม" }, film: { title: "แบรนด์<br />ฟิล์ม" }, support: { title: "การสนับสนุน<br />แบรนด์", label1: "การผลิต", title1: "สภาพแวดล้อมการผลิตที่สะอาด", desc1: "การจัดการสุขอนามัยอย่างเข้มงวดและกระบวนการผลิตที่เป็นระบบสร้างสินค้าที่น่าเชื่อถือ", label2: "บรรจุภัณฑ์", title2: "ระบบ<br />บรรจุภัณฑ์ปลอดภัย", desc2: "บรรจุภัณฑ์แข็งแรงและการตรวจสอบละเอียดช่วยให้จัดส่งได้ปลอดภัย", label3: "การตลาด", title3: "สนับสนุนการตลาด", desc3: "สนับสนุน POP แบนเนอร์ และสื่อส่งเสริมการขายเพื่อเติบโตไปด้วยกัน" } },
    store: { hair: "ผม", hairDesc: "แชมพู · คอนดิชันเนอร์ · ดูแลเส้นผม", body: "ผิวกาย", bodyDesc: "คลีนเซอร์ · เอสเซนส์ผิวกาย · เซต", face: "ผิวหน้า", faceDesc: "ไลน์ดูแลประจำวันกำลังเตรียม", allProducts: "สินค้าทั้งหมด", category: { all: "ทั้งหมด", hair: "ผม", body: "ผิวกาย", face: "ผิวหน้า", hairTitle: "ผลิตภัณฑ์ผม", bodyTitle: "ผลิตภัณฑ์ผิวกาย", faceTitle: "ผลิตภัณฑ์ผิวหน้า", hairPanel: "ผม", hairPanelDesc: "แชมพู · คอนดิชันเนอร์ · ดูแลเส้นผม", bodyPanel: "ผิวกาย", bodyPanelDesc: "คลีนเซอร์ · เอสเซนส์ผิวกาย · เซต", facePanel: "ผิวหน้า", facePanelDesc: "ไลน์ดูแลประจำวันกำลังเตรียม", emptyTitle: "กำลังเตรียมสินค้า {category}", emptyDesc: "ยังไม่มีสินค้า {category} ที่ลงทะเบียน ข้อมูลจะอัปเดตภายหลัง" }, buy: "ซื้อ", pendingPrice: "รอยืนยันราคา" },
    proposal: { metaTitle: "ROSEE ECO | ข้อเสนอส่งออกและพาร์ตเนอร์", title: "คู่มือข้อเสนอสินค้า/ผลิตภัณฑ์พาร์ตเนอร์", required: "* จำเป็น", companyInfo: "ข้อมูลบริษัทพาร์ตเนอร์", inquiry: "เขียนคำปรึกษา", reset: "รีเซ็ต", complete: "เสร็จสิ้น" },
  },
  ru: {
    meta: { title: "ROSEE ECO ALOE | Страница бренда" },
    nav: { lineup: "Линейка", store: "Магазин", brand: "Бренд", export: "Экспортные рынки", proposal: "Экспорт и партнерство", allProducts: "Все продукты" },
    home: { hero: { copy: "ROSEE ECO сочетает свежую увлажняющую силу алоэ и ежедневный уход, становясь брендом для повторных продаж на экспортных рынках.", viewProducts: "Смотреть продукты", exportInquiry: "Запрос по экспорту" }, signature: { more: "Подробнее" }, film: { title: "Фильм<br />бренда" }, support: { title: "Поддержка<br />бренда", label1: "Производство", title1: "Чистая производственная среда", desc1: "Строгая гигиена и системный процесс производства создают надежные продукты.", label2: "Упаковка", title2: "Безопасная<br />система упаковки", desc2: "Прочная упаковка и тщательная проверка обеспечивают безопасную доставку.", label3: "Маркетинг", title3: "Маркетинговая поддержка", desc3: "Мы поддерживаем POP-материалы, баннеры и рекламные инструменты для роста бренда." } },
    store: { hair: "Волосы", hairDesc: "Шампунь · Кондиционер · Уход", body: "Тело", bodyDesc: "Очищение · Эссенция · Набор", face: "Лицо", faceDesc: "Линейка ежедневного ухода готовится", allProducts: "Все продукты", category: { all: "Все", hair: "Волосы", body: "Тело", face: "Лицо", hairTitle: "Продукты для волос", bodyTitle: "Продукты для тела", faceTitle: "Продукты для лица", hairPanel: "Волосы", hairPanelDesc: "Шампунь · Кондиционер · Уход", bodyPanel: "Тело", bodyPanelDesc: "Очищение · Эссенция · Набор", facePanel: "Лицо", facePanelDesc: "Линейка ежедневного ухода готовится", emptyTitle: "Продукты {category} готовятся", emptyDesc: "Пока нет зарегистрированных продуктов {category}. Информация будет обновлена позже." }, buy: "Купить", pendingPrice: "Цена уточняется" },
    proposal: { metaTitle: "ROSEE ECO | Экспорт и партнерство", title: "Руководство по предложению продуктов для партнеров", required: "* Обязательно", companyInfo: "Информация о партнере", inquiry: "Форма запроса", reset: "Сброс", complete: "Готово" },
  },
  uz: {
    meta: { title: "ROSEE ECO ALOE | Brend sahifasi" },
    nav: { lineup: "Mahsulotlar", store: "Do‘kon", brand: "Brend", export: "Eksport bozorlari", proposal: "Eksport va hamkorlik taklifi", allProducts: "Barcha mahsulotlar" },
    home: { hero: { copy: "ROSEE ECO aloe namligini kundalik parvarish hissi bilan birlashtirib, eksport bozorlarida qayta izlanadigan soch parvarishi brendiga aylanmoqda.", viewProducts: "Mahsulotlarni ko‘rish", exportInquiry: "Eksport bo‘yicha aloqa" }, signature: { more: "Ko‘proq" }, film: { title: "Brend<br />filmi" }, support: { title: "Brend<br />qo‘llab-quvvatlovi", label1: "Ishlab chiqarish", title1: "Toza ishlab chiqarish muhiti", desc1: "Qattiq gigiyena nazorati va tizimli jarayon ishonchli mahsulot yaratadi.", label2: "Qadoqlash", title2: "Xavfsiz<br />qadoqlash tizimi", desc2: "Mustahkam qadoq va puxta tekshiruv mahsulotni xavfsiz yetkazadi.", label3: "Marketing", title3: "Marketing yordami", desc3: "POP, banner va reklama materiallari bilan brend o‘sishini qo‘llab-quvvatlaymiz." } },
    store: { hair: "Soch", hairDesc: "Shampun · Konditsioner · Soch parvarishi", body: "Tana", bodyDesc: "Tozalagich · Tana essensiyasi · To‘plam", face: "Yuz", faceDesc: "Kundalik parvarish liniyasi tayyorlanmoqda", allProducts: "Barcha mahsulotlar", category: { all: "Barchasi", hair: "Soch", body: "Tana", face: "Yuz", hairTitle: "Soch mahsulotlari", bodyTitle: "Tana mahsulotlari", faceTitle: "Yuz mahsulotlari", hairPanel: "Soch", hairPanelDesc: "Shampun · Konditsioner · Soch parvarishi", bodyPanel: "Tana", bodyPanelDesc: "Tozalagich · Tana essensiyasi · To‘plam", facePanel: "Yuz", facePanelDesc: "Kundalik parvarish liniyasi tayyorlanmoqda", emptyTitle: "{category} mahsulotlari tayyorlanmoqda", emptyDesc: "Hozircha {category} mahsulotlari yo‘q. Ma’lumot keyin yangilanadi." }, buy: "Xarid qilish", pendingPrice: "Narx aniqlanmoqda" },
    proposal: { metaTitle: "ROSEE ECO | Eksport va hamkorlik taklifi", title: "Hamkor mahsulot taklifi bo‘yicha qo‘llanma", required: "* Majburiy", companyInfo: "Hamkor kompaniya ma’lumoti", inquiry: "Murojaat shakli", reset: "Tozalash", complete: "Yakunlash" },
  },
};

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
