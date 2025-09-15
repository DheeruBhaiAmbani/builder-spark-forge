import type { Lang } from "./i18n";

type Dict = Record<string, any>;

const en: Dict = {
  brand: "AgriConnect",
  nav: { home: "Home", buyer: "Buyer", agrigenie: "AgriGenie" },
  actions: {
    registerFarmer: "Register Farmer",
    registerBuyer: "Register Buyer",
    cancel: "Cancel",
    startNegotiation: "Start Negotiation",
    viewDetails: "View Details",
    backHome: "Back to Home",
    askAgrigenie: "Ask AgriGenie",
  },
  footer: {
    how: "How it works",
    features: "Features",
    contact: "Contact",
    copyright: "All rights reserved.",
  },
  home: {
    hero: {
      badge: "AI-powered • Transparent • Fair",
      title: "Unite. Sell. Thrive.",
      subtitle:
        "AgriConnect brings farmers together into AI-formed deal groups, giving collective bargaining power, real-time price analysis, and optimized logistics.",
      ctaFarmer: "Register as Farmer",
      ctaBuyer: "Register as Buyer",
      ctaBuyerDemo: "View Buyer Dashboard Demo",
      recLowball: "AI Recommendation: REJECT for lowball offers",
      marketAware: "Market-aware price guidance",
    },
    how: {
      title: "How it works",
      step1Title: "Register",
      step1Desc:
        "Farmers and buyers create verified accounts with pincode/location.",
      step2Title: "List & Group",
      step2Desc:
        "Farmers list harvests. AI groups same crop/grade across regions.",
      step3Title: "Negotiate",
      step3Desc:
        "Buyers submit offers. AI analyzes vs market, advises farmers via polls.",
      step4Title: "Collect & Close",
      step4Desc:
        "AI suggests central hub. Confirm location, finalize deal, arrange pickup.",
    },
    features: {
      snapshot: "Deal Group Snapshot",
      crop: "Crop",
      grade: "Grade",
      totalQty: "Total Quantity",
      regions: "Regions",
      aiAnalysis: "AI Analysis",
      lowOffer: "Buyer offer ₹10/kg is 78% below market (₹45/kg)",
      why: "Why AgriConnect",
      bullet1: "Collective bargaining for 20–30% better pricing.",
      bullet2: "AI transparency: market rate, fair price, and recommendations.",
      bullet3: "Poll-based decisions for offers and logistics.",
      bullet4: "Optimized collection hubs to reduce transport costs.",
    },
  },
  buyer: {
    title: "Buyer Dashboard",
    subtitle: "Demo of deal groups available for negotiation.",
    formed: "Formed",
    aiBacked: "AI-backed",
  },
  register: {
    farmer: {
      title: "Farmer Registration",
      subtitle:
        "Create your account to list harvests and join AI-formed deal groups.",
      fullName: "Full Name",
      username: "Username",
      password: "Password",
      phone: "Phone",
      pincode: "Pincode (auto-detects location)",
      locationHint: "East Godavari, Andhra Pradesh",
      submit: "Create Farmer Account",
    },
    buyer: {
      title: "Buyer Registration",
      subtitle: "Access bulk produce from verified farmer groups.",
      businessName: "Business Name",
      username: "Username",
      password: "Password",
      phone: "Phone",
      businessType: "Business Type (e.g., Wholesaler)",
      gst: "GST Number",
      pincode: "Pincode (auto-detects location)",
      locationHint: "Mumbai, Maharashtra",
      submit: "Create Buyer Account",
    },
  },
  agrigenie: {
    title: "AgriGenie Advisor",
    subtitle:
      "Ask about crops, prices, or government schemes. RAG-backed, coming soon.",
    sampleQ: "What is the price of onions in Bihar?",
    sampleA:
      "Based on current data, onion prices in Bihar range from ₹30-35/kg. For precise rates, check local mandi updates.",
  },
  notFound: { oops: "Oops! Page not found", home: "Return to Home" },
};

const hi: Dict = {
  brand: "एग्रीकनेक्ट",
  nav: { home: "होम", buyer: "खरीदार", agrigenie: "एग्रीजिनी" },
  actions: {
    registerFarmer: "किसान रजिस्टर करें",
    registerBuyer: "खरीदार रजिस्टर करें",
    cancel: "रद्द करें",
    startNegotiation: "बातचीत शुरू करें",
    viewDetails: "विवरण देखें",
    backHome: "होम पर जाएं",
    askAgrigenie: "एग्रीजिनी से पूछें",
  },
  footer: {
    how: "कैसे काम करता है",
    features: "विशेषताएँ",
    contact: "संपर्क",
    copyright: "सर्वाधिकार सुरक्षित।",
  },
  home: {
    hero: {
      badge: "एआई संचालित • पारदर्शी • निष्पक्ष",
      title: "जुड़ें। ��ेचें। आगे बढ़ें।",
      subtitle:
        "एग्रीकनेक्ट किसानों को एआई-निर्मित डील समूहों में जोड़ता है, सामूहिक सौदेबाजी शक्ति, वास्तविक समय मूल्य विश्लेषण और अनुकूलित लॉजिस्टिक्स देता है।",
      ctaFarmer: "किसान के रूप में रजिस्टर करें",
      ctaBuyer: "खरीदार के रूप में रजिस्टर करें",
      ctaBuyerDemo: "खरीदार डैशबोर्ड डेमो देखें",
      recLowball: "एआई अनुशंसा: बहुत कम ऑफर को अस्वीकार करें",
      marketAware: "बाजार-आधारित मूल्य मार्गदर्शन",
    },
    how: {
      title: "कैसे काम करता है",
      step1Title: "रजिस्टर करें",
      step1Desc: "किसान और खरीदार पिनकोड/स्थान के साथ सत्यापित खाते बनाते हैं।",
      step2Title: "सूची बनाएं और समूह बनाएं",
      step2Desc:
        "किसान फसलें सूचीबद्ध करते हैं। एआई समान फसल/ग्रेड को समूहित करता है।",
      step3Title: "बातचीत",
      step3Desc:
        "खरीदार ऑफर देते हैं। एआई बाजार के मुकाबले विश्लेषण कर किसानों को पोल के जरिए सलाह देता है।",
      step4Title: "संग्रह और समापन",
      step4Desc:
        "एआई केंद्र स्थान सुझाता है। स्थान की पुष्टि करें, सौदा फाइनल करें, पिकअप की व्यवस्था करें।",
    },
    features: {
      snapshot: "डील समूह सारांश",
      crop: "फसल",
      grade: "ग्रेड",
      totalQty: "कुल मात्रा",
      regions: "क्षेत्र",
      aiAnalysis: "एआई विश्लेषण",
      lowOffer: "खरीदार का ₹10/किग्रा ऑफर बाजार (₹45/किग्रा) से 78% कम है",
      why: "क्यों एग्रीकनेक्ट",
      bullet1: "सामूहिक सौदेबाजी से 20–30% बेहतर कीमत।",
      bullet2: "एआई पारदर्शिता: बाजार दर, उचित कीमत और सिफारिशें।",
      bullet3: "ऑफर और लॉजिस्टिक्स के लिए पोल आधारित निर्णय।",
      bullet4: "परिवहन लागत कम करने के लिए अनुकूलित संग्रह केंद्र।",
    },
  },
  buyer: {
    title: "खरीदार डैशबोर्ड",
    subtitle: "बातचीत के लिए उपलब्ध डील समूहों का डेमो।",
    formed: "निर्मित",
    aiBacked: "एआई समर्थित",
  },
  register: {
    farmer: {
      title: "किसान पंजीकरण",
      subtitle: "अपना खाता बनाएं, फसल सूचीबद्ध करें और एआई समूहों में जुड़ें।",
      fullName: "पूरा नाम",
      username: "यूज़रनेम",
      password: "पासवर्ड",
      phone: "फोन",
      pincode: "पिनकोड (स्थान स्वतः)",
      locationHint: "ईस्ट गोदावरी, आंध्र प्रदेश",
      submit: "किसान खाता बनाएं",
    },
    buyer: {
      title: "खरीदार पंजीकरण",
      subtitle: "सत्यापित किसान समूहों से थोक में खरीदें।",
      businessName: "व्यवसाय नाम",
      username: "यूज़रनेम",
      password: "पासवर्ड",
      phone: "फोन",
      businessType: "व्यवसाय प्रकार (जैसे, थोक विक्रेता)",
      gst: "जीएसटी नंबर",
      pincode: "पिनकोड (स्थान स्वतः)",
      locationHint: "मुंबई, महाराष्ट्र",
      submit: "खरीदार खाता बनाएं",
    },
  },
  agrigenie: {
    title: "एग्रीजिनी सलाहकार",
    subtitle:
      "फसल, कीमत या योजनाओं के बारे में पूछें। RAG आधारित, जल्द आ रहा है।",
    sampleQ: "बिहार में प्याज का दाम क्या है?",
    sampleA:
      "वर्तमान डेटा के अनुसार, बिहार में प्याज ₹30-35/किग्रा है। सटीक दरों के लिए स्थानीय मंडी देखें।",
  },
  notFound: { oops: "उफ़! पेज नही��� मिला", home: "होम पर लौटें" },
};

const ml: Dict = {
  brand: "അഗ്രികണക്ട്",
  nav: { home: "ഹോം", buyer: "ബയർ", agrigenie: "അഗ്രിജിനി" },
  actions: {
    registerFarmer: "കർഷകൻ രജിസ്റ്റർ ചെയ്യുക",
    registerBuyer: "ബയർ രജിസ്റ്റർ ചെയ്യുക",
    cancel: "റദ്ദാക്കുക",
    startNegotiation: "നേര്‍ച്ച ആരംഭിക്കുക",
    viewDetails: "വിശദാംശങ്ങൾ കാണുക",
    backHome: "ഹോത്തിലേക്ക് മടങ്ങുക",
    askAgrigenie: "അഗ്രിജിനിയോട് ചോദിക്കുക",
  },
  footer: {
    how: "എങ്ങനെ പ്രവർത്തിക്കുന്നു",
    features: "സവിശേഷതകൾ",
    contact: "ബന്ധപ്പെടുക",
    copyright: "എല്ലാ അവകാശങ്ങളും സുരക്ഷിതം.",
  },
  home: {
    hero: {
      badge: "എഐ-പവർഡ് • പരസ്യമായ • ന്യായമായ",
      title: "ഒന്നിക്കുക. വിൽക്കുക. വളരുക.",
      subtitle:
        "അഗ്രികണക്ട് കർഷകരെ ���ഐ ചേരിച്ച ഡീൽ ഗ്രൂപ്പുകളിലൂടെ കൂട്ടിയിടുന്നു; കൂട്ടായ ചർച്ചാ ശക്തി, തത്സമയ വില വിശകലനം, ലജിസ്റ്റിക്‌സ് ഒപ്റ്റിമൈസേഷൻ നൽകുന്നു.",
      ctaFarmer: "കർഷകനായി രജിസ്റ്റർ ചെയ്യുക",
      ctaBuyer: "ബയറായി രജിസ്റ്റർ ചെയ്യുക",
      ctaBuyerDemo: "ബയർ ഡാഷ്ബോർഡ് ഡെമോ കാണുക",
      recLowball: "എഐ ശുപാർശ: വളരെ കുറഞ്ഞ ഓഫർ നിഷേധിക്കുക",
      marketAware: "മാർക്കറ്റ്-അവെയർ വില മാർഗ്ഗനിർദ്ദേശം",
    },
    how: {
      title: "എങ്ങനെ പ്രവർത്തിക്കുന്നു",
      step1Title: "രജിസ്റ്റർ ചെയ്യുക",
      step1Desc:
        "കർഷകരും ബയറുകളും പിന്‍കോഡ്/ലൊക്കേഷൻ ഉപയോഗിച്ച് സ്ഥിരീകരിച്ച അക്കൗണ്ടുകൾ സൃഷ്ടിക്കുന്നു.",
      step2Title: "ലിസ്റ്റ് & ഗ്രൂപ്പ്",
      step2Desc:
        "കർഷകർ ഹാർവെസ്റ്റ് ലിസ്റ്റ് ചെയ്യുന്നു. എഐ അതേ വിള/ഗ്രേഡ് മേഖലയിലാകെ ഗ്രൂപ്പാക്കുന്നു.",
      step3Title: "നേര്‍ച്ച",
      step3Desc:
        "ബയറുകൾ ഓഫറുകൾ നൽകുന്നു. എഐ മാർക്കറ്റിനെതിരെ വിശകലനം ചെയ്ത് പോളുകളിലൂടെ കർഷകർക്ക് ഉപദേശം നൽകുന്നു.",
      step4Title: "ശേഖരിക്കുക & ക്ലോസ് ചെയ്യുക",
      step4Desc:
        "എഐ കേന്ദ്ര ഹബ് നിർദ്ദേശിക്കുന്നു. സ്ഥലം സ്ഥിരീകരിച്ച് ഡീൽ ഫൈനലൈസ് ചെയ്യുക, പിക്കപ്പ് ക്രമീകരിക്കുക.",
    },
    features: {
      snapshot: "ഡീൽ ഗ്രൂപ്പ് സ്നാപ്ഷോട്ട്",
      crop: "വിള",
      grade: "ഗ്രേഡ്",
      totalQty: "ആകെ അളവ്",
      regions: "പ്രദേശങ്ങൾ",
      aiAnalysis: "എഐ വിശകലനം",
      lowOffer:
        "ബയറിന്റെ ₹10/കിഗ്ര ഓഫർ മാർക്കറ്റിനേക്കാൾ (₹45/കിഗ്ര) 78% കുറവാണ്",
      why: "എന്തുകൊണ്ട് അഗ്രികണക്ട്",
      bullet1: "കൂട്ടായ ചർച്ചയിലൂടെ 20–30% മികച്ച വില.",
      bullet2: "എഐ പരസ്പരത: മാർക്കറ്റ് നിരക്ക്, നീതിയുള്ള വില, ശുപാർശകൾ.",
      bullet3: "ഓഫറുകളും ലജിസ്റ്റിക്സും പോളുകൾ വഴി തീരുമാനിക്കുന്നു.",
      bullet4: "ഗതാഗത ചെലവ് കുറയ്ക്കാൻ ഒപ്റ്റിമൈസ്ഡ് ശേഖരണ ഹബുകൾ.",
    },
  },
  buyer: {
    title: "ബയർ ഡാഷ്ബോർഡ്",
    subtitle: "നിർവ്വഹണത്തിനുള്ള ഡീൽ ഗ്രൂപ്പുകളുടെ ഡെമോ.",
    formed: "ഫോം ചെയ്തു",
    aiBacked: "എഐ പിന്തുണ",
  },
  register: {
    farmer: {
      title: "കർഷകൻ രജിസ്ട്രേഷൻ",
      subtitle: "എഐ ഗ്രൂ��്പുകളിൽ ചേരാൻ അക്കൗണ്ട് സൃഷ്ടിക്കുക.",
      fullName: "പൂർണ്ണ പേര്",
      username: "യൂസർനേം",
      password: "പാസ്വേഡ്",
      phone: "ഫോൺ",
      pincode: "പിൻകോഡ് (ലൊക്കേഷൻ സ്വയം)",
      locationHint: "ഇസ്റ്റ് ഗോഡാവരി, ആന്ധ്രപ്രദേശ്",
      submit: "കർഷക അക്കൗണ്ട് സൃഷ്ടിക്കുക",
    },
    buyer: {
      title: "ബയർ രജിസ്ട്രേഷൻ",
      subtitle: "സ്ഥിരീകരിച്ച കർഷക ഗ്രൂപ്പുകളിൽ നിന്ന് ബൾക്ക് ആക്സസ്.",
      businessName: "ബിസിനസ് പേര്",
      username: "യൂസർനേം",
      password: "പാസ്വേഡ്",
      phone: "ഫോൺ",
      businessType: "ബിസിനസ് തരം (ഉദാ., ഹോള്‍സെയിലർ)",
      gst: "ജിഎസ്ടി നമ്പർ",
      pincode: "പിൻകോഡ് (ലൊക്കേഷൻ സ്വയം)",
      locationHint: "മുംബൈ, മഹാരാഷ്ട്ര",
      submit: "ബയർ അക്കൗണ്ട് സൃഷ്ടിക്കുക",
    },
  },
  agrigenie: {
    title: "അഗ്രിജിനി ���പദേഷ്ടാവ്",
    subtitle:
      "വിളകൾ, വിലയോ പദ്ധതികളോ കുറിച്ച് ചോദിക്കുക. RAG അടിസ്ഥാനത്തിൽ, ഉടൻ വരുന്നു.",
    sampleQ: "ബിഹാറിലെ ഉള്ളിയുടെ വില എത്ര?",
    sampleA:
      "നിലവിലെ ഡേറ്റ പ്രകാരം, ബിഹാറിൽ ഉള്ളിയുടെ വില ₹30-35/കിഗ്ര. കൃത്യമായ നിരക്കുകൾക്കായി പ്രാദേശിക മണ്ടി പരിശോധിക്കുക.",
  },
  notFound: { oops: "അയ്യോ! പേജ് കണ്ടെത്തിയില്ല", home: "ഹോമിലേക്കു മടങ്ങുക" },
};

export const dictionaries: Record<Lang, Dict> = { en, hi, ml };
