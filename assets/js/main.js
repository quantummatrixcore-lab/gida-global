/**
 * GIDA GLOBAL - B2B Food & Cleaning Logistics Portal
 * Ultra-Premium Corporate JavaScript Engine & B2B Data Catalog
 * 
 * Features:
 * - 17-Product Comprehensive B2B Specification Catalog (productsData)
 * - Intelligent Turkish Normalization (normalizeTR) Search & Category Filtering
 * - Dual Theme (Dark / Light) Synchronization with System Preference & Early Loader
 * - Flawless i18n Translation (TR / EN) with SVG Icon Protection
 * - Interactive B2B Quotation Cart with Quantity Steppers (+/-) & Corporate WhatsApp Message Generator
 * - Mobile Drawer Navigation & Comprehensive Scroll Lock Management
 * - Live Currency Exchange Ticker (USD/EUR to TRY)
 */

// ==========================================
// 1. 17 ÜRÜNLÜK B2B VERİ KATALOĞU (productsData)
// ==========================================
const productsData = [
  {
    id: 1,
    code: "GG-FOOD-001",
    category: "gida",
    type: "both",
    name_tr: "Söke Geleneksel Buğday Unu",
    name_en: "Söke Traditional Wheat Flour",
    desc_tr: "Ekmeklik ve pastalık kullanıma uygun, yüksek proteinli birinci sınıf Söke buğday unu. Endüstriyel fırınlar, unlu mamul üreticileri ve HORECA için idealdir.",
    desc_en: "High-protein, premium Söke wheat flour for commercial baking and pastry. Specially milled for industrial bakeries, culinary facilities, and HORECA.",
    package_tr: "25 kg / 50 kg Kraft Torba",
    package_en: "25 kg / 50 kg Heavy-Duty Kraft Bag",
    moq_tr: "1 Palet (40 Torba / 1.000 Kg)",
    moq_en: "1 Pallet (40 Sacks / 1,000 Kg)",
    shelf_life_tr: "12 Ay (Serin ve Kuru Ortam)",
    shelf_life_en: "12 Months (Cool & Dry Storage)",
    shelf_tr: "12 Ay",
    shelf_en: "12 Months",
    origin_tr: "Aydın / Konya, Türkiye",
    origin_en: "Aydin / Konya, Turkey",
    specs_tr: "Protein: Min %11.5 | Tip 550 / 650 | Kül: Max %0.65",
    specs_en: "Protein: Min 11.5% | Type 550 / 650 | Ash: Max 0.65%",
    image: "assets/images/products/product_1.jpg?v=5.6"
  },
  {
    id: 2,
    code: "GG-FOOD-002",
    category: "gida",
    type: "both",
    name_tr: "Biryağ Rafine Ayçiçek Yağı",
    name_en: "Biryağ Refined Sunflower Seed Oil",
    desc_tr: "Kızartma, hamur işi ve sıcak yemekler için %100 saf rafine, kokusuz, yüksek yanma dereceli berrak ayçiçek yağı. Ağır sanayi mutfakları ve ihracat için optimize edilmiştir.",
    desc_en: "100% pure refined, odorless, high smoke point clear sunflower seed oil for commercial frying and food processing. Packaged for heavy-duty food service and export.",
    package_tr: "18 L Teneke / 5 L Pet (4'lü Koli)",
    package_en: "18 L Tin Can / 5 L PET (Carton of 4)",
    moq_tr: "1 Palet (60 Teneke / 1.080 L)",
    moq_en: "1 Pallet (60 Tins / 1,080 L)",
    shelf_life_tr: "24 Ay (Doğrudan Güneş Işığından Uzak)",
    shelf_life_en: "24 Months (Keep Away From Direct Sunlight)",
    shelf_tr: "24 Ay",
    shelf_en: "24 Months",
    origin_tr: "Trakya Bölgesi, Türkiye",
    origin_en: "Thrace Region, Turkey",
    specs_tr: "Serbest Yağ Asitliği: Max %0.1 | Trans Yağ İçermez",
    specs_en: "Free Fatty Acidity: Max 0.1% | Zero Trans Fat",
    image: "assets/images/products/product_2.jpg?v=5.6"
  },
  {
    id: 3,
    code: "GG-FOOD-003",
    category: "gida",
    type: "toptan",
    name_tr: "Balküpü Kristal Toz Şeker",
    name_en: "Balküpü Premium White Crystal Sugar",
    desc_tr: "Meşrubat, şekerleme, pastacılık ve gıda imalatı için ekstra beyaz, yüksek çözünürlüklü %100 doğal pancar şekeri. Dökme ve paletli sevkiyat.",
    desc_en: "Extra white, fast-dissolving 100% pure beet crystal sugar for beverage, confectionery, baking, and bulk food processing. Palletized and container delivery.",
    package_tr: "50 kg Polipropilen Çuval / 25 kg Torba",
    package_en: "50 kg Woven PP Sack / 25 kg Bag",
    moq_tr: "1 Palet (20 Çuval / 1.000 Kg) / FCL Tır",
    moq_en: "1 Pallet (20 Sacks / 1,000 Kg) / FCL Truck",
    shelf_life_tr: "Süresiz (Kuru ve Nemsiz Ortamda)",
    shelf_life_en: "Indefinite (In Dry, Moisture-Free Storage)",
    shelf_tr: "Süresiz (Kuru Ortam)",
    shelf_en: "Indefinite (Dry Storage)",
    origin_tr: "Kayseri / Aksaray, Türkiye",
    origin_en: "Central Anatolia, Turkey",
    specs_tr: "Polarizasyon: Min %99.8 | Renk: ICUMSA 45",
    specs_en: "Polarization: Min 99.8% | Color: ICUMSA 45 Max",
    image: "assets/images/products/product_3.jpg?v=5.6"
  },
  {
    id: 4,
    code: "GG-FOOD-004",
    category: "gida",
    type: "toptan",
    name_tr: "Yayla Kırmızı Mercimek",
    name_en: "Yayla Polished Red Split Lentils",
    desc_tr: "Güneydoğu Anadolu menşeili yeni mahsul, taşsız, çift elek ve optik ayıklamadan geçirilmiş 1. sınıf kırmızı mercimek. Bakliyat toptancıları ve hazır yemek fabrikaları için.",
    desc_en: "New crop Grade A sortex-cleaned red split lentils from Southeastern Anatolia. Double sorted, high protein for bulk wholesalers and commercial soup manufacturers.",
    package_tr: "25 kg / 50 kg Lamine PP Çuval",
    package_en: "25 kg / 50 kg Laminated PP Bag",
    moq_tr: "1 Palet (1.000 Kg) / 2 Ton",
    moq_en: "1 Pallet (1,000 Kg) / 2 Metric Tons",
    shelf_life_tr: "24 Ay (Serin ve Kuru Depolama)",
    shelf_life_en: "24 Months (Cool & Dry Warehousing)",
    shelf_tr: "24 Ay",
    shelf_en: "24 Months",
    origin_tr: "Gaziantep / Şanlıurfa, Türkiye",
    origin_en: "Southeastern Anatolia, Turkey",
    specs_tr: "Kalibre: 8-9 mm | Rutubet: Max %12 | Yabancı Madde: %0.05",
    specs_en: "Caliber: 8-9 mm | Moisture: Max 12% | Foreign Matter: 0.05%",
    image: "assets/images/products/product_4.jpg?v=5.6"
  },
  {
    id: 5,
    code: "GG-FOOD-005",
    category: "gida",
    type: "both",
    name_tr: "Duru Baldo Pirinç (Lüks Kalibre)",
    name_en: "Duru Grade A Baldo Rice",
    desc_tr: "Gönen yöresi çeltiklerinden üretilmiş, yüksek su çekme oranına sahip, kırık tanelerden tamamen arındırılmış lüks restoran ve HORECA tipi Baldo pirinç.",
    desc_en: "Premium Gönen origin large-grain Baldo rice with supreme water absorption and minimal broken grains. Designed for hospitality, catering, and fine dining.",
    package_tr: "25 kg Çuval / 10x1 kg Koli",
    package_en: "25 kg Sack / Carton of 10x1 kg",
    moq_tr: "1 Palet (40 Çuval / 1.000 Kg)",
    moq_en: "1 Pallet (40 Sacks / 1,000 Kg)",
    shelf_life_tr: "24 Ay (Nemsiz Ortamda)",
    shelf_life_en: "24 Months (Moisture-Free Storage)",
    shelf_tr: "24 Ay",
    shelf_en: "24 Months",
    origin_tr: "Balıkesir / Gönen, Türkiye",
    origin_en: "Gonen / Balikesir, Turkey",
    specs_tr: "Kırık Tane: Max %2 | Tane Boyu: Min 6.8 mm",
    specs_en: "Broken Grain: Max 2% | Grain Length: Min 6.8 mm",
    image: "assets/images/products/product_5.jpg?v=5.6"
  },
  {
    id: 6,
    code: "GG-FOOD-006",
    category: "gida",
    type: "both",
    name_tr: "Tat Çifte Konsantre Domates Salçası",
    name_en: "Tat Double Concentrated Tomato Paste",
    desc_tr: "Bursa Karacabey domateslerinden üretilmiş, Brix 28-30 yoğunluğunda katkısız, çifte konsantre endüstriyel ambalajlı Tat domates salçası.",
    desc_en: "Double concentrated 28-30 Brix premium tomato paste harvested from Karacabey region. 100% natural, additive-free for food processing and food service.",
    package_tr: "4.5 kg Teneke Kova (4'lü Koli) / 830g x 12 Teneke Koli",
    package_en: "4.5 kg Tin Bucket (Carton of 4) / 830g x 12 Tins",
    moq_tr: "1 Palet (48 Koli / 864 Kg)",
    moq_en: "1 Pallet (48 Cartons / 864 Kg)",
    shelf_life_tr: "24 Ay (Açıldıktan sonra buzdolabında)",
    shelf_life_en: "24 Months (Refrigerate after opening)",
    shelf_tr: "24 Ay",
    shelf_en: "24 Months",
    origin_tr: "Bursa / Karacabey, Türkiye",
    origin_en: "Bursa / Karacabey, Turkey",
    specs_tr: "Brix: 28-30% | Tuz: Max %2 | Katkısız",
    specs_en: "Brix: 28-30% | Salt: Max 2% | All-Natural",
    image: "assets/images/products/product_6.jpg?v=5.6"
  },
  {
    id: 7,
    code: "GG-CLEAN-001",
    category: "temizlik",
    type: "both",
    name_tr: "Omo Matik Profesyonel Toz Çamaşır Deterjanı",
    name_en: "Omo Matik Professional Laundry Powder Detergent",
    desc_tr: "Otel, hastane, yurt ve endüstriyel çamaşırhaneler için enzim teknolojili, ağır lekeleri düşük ısıda çıkaran profesyonel formüllü Omo toz deterjan.",
    desc_en: "Heavy-duty commercial laundry powder with active enzyme technology. Engineered for hotels, healthcare facilities, and laundromats to tackle tough stains at low temperatures.",
    package_tr: "10 kg Endüstriyel Torba / 20 kg Çuval",
    package_en: "10 kg Industrial Sack / 20 kg Commercial Bag",
    moq_tr: "1 Palet (72 Torba / 720 Kg)",
    moq_en: "1 Pallet (72 Bags / 720 Kg)",
    shelf_life_tr: "36 Ay (Kuru Ortam)",
    shelf_life_en: "36 Months (Dry Storage)",
    shelf_tr: "36 Ay",
    shelf_en: "36 Months",
    origin_tr: "Türkiye (Unilever Lisansı)",
    origin_en: "Turkey (Unilever License)",
    specs_tr: "Aktif Madde: %15+ | Renkliler ve Beyazlar İçin Ortak",
    specs_en: "Active Matter: 15%+ | Color & White Dual Action",
    image: "assets/images/products/product_7.jpg?v=5.6"
  },
  {
    id: 8,
    code: "GG-CLEAN-002",
    category: "temizlik",
    type: "both",
    name_tr: "Fairy Professional Yoğun Bulaşık Deterjanı 5L",
    name_en: "Fairy Professional Liquid Dishwashing Detergent 5L",
    desc_tr: "P&G Professional formüllü, yağ parçalama gücü normal deterjanlara göre 3 kat yüksek, kolay durulanan 5 litrelik endüstriyel mutfak deterjanı.",
    desc_en: "P&G Professional high-performance concentrated liquid dish soap with triple grease-cutting power. Easy rinse formulation for commercial kitchens and catering.",
    package_tr: "5 Litre Bidon (2'li Koli / 10 L)",
    package_en: "5 Liter Canister (Carton of 2 / 10 L)",
    moq_tr: "1 Palet (48 Koli / 96 Bidon - 480 L)",
    moq_en: "1 Pallet (48 Cartons / 96 Canisters - 480 L)",
    shelf_life_tr: "24 Ay (Donmadan Muhafaza Ediniz)",
    shelf_life_en: "24 Months (Protect From Freezing)",
    shelf_tr: "24 Ay",
    shelf_en: "24 Months",
    origin_tr: "Türkiye (P&G Lisansı)",
    origin_en: "Turkey (P&G License)",
    specs_tr: "pH: 8.5-9.2 | Yüksek Yüzey Aktif Yoğunluğu",
    specs_en: "pH: 8.5-9.2 | High Surfactant Concentration",
    image: "assets/images/products/product_8.jpg?v=5.6"
  },
  {
    id: 9,
    code: "GG-CLEAN-003",
    category: "temizlik",
    type: "both",
    name_tr: "Domestos Professional Yoğun Kıvamlı Çamaşır Suyu 5L",
    name_en: "Domestos Professional Thick Bleach 5L",
    desc_tr: "Yüzeylere tutunan kıvamlı yapısıyla maksimum hijyen ve dezenfeksiyon sağlayan, klor bazlı Domestos 5L endüstriyel sanitasyon serisi.",
    desc_en: "Hospital-grade thick clinging bleach providing deep disinfection and whitening. Chlorinated antimicrobial formula in 5L industrial canisters.",
    package_tr: "5 Litre Bidon (2'li veya 4'lü Koli)",
    package_en: "5 Liter Canister (Carton of 2 or 4)",
    moq_tr: "1 Palet (48 Koli / 96 Bidon)",
    moq_en: "1 Pallet (48 Cartons / 96 Canisters)",
    shelf_life_tr: "18 Ay (Serin ve Güneş Almayan Ortam)",
    shelf_life_en: "18 Months (Cool & Shaded Area)",
    shelf_tr: "18 Ay",
    shelf_en: "18 Months",
    origin_tr: "Türkiye (Unilever Lisansı)",
    origin_en: "Turkey (Unilever License)",
    specs_tr: "Aktif Klor: Min %4.5 | Kıvamlı Jel Formül",
    specs_en: "Active Chlorine: Min 4.5% | Viscous Clinging Gel",
    image: "assets/images/products/product_9.jpg?v=5.6"
  },
  {
    id: 10,
    code: "GG-CLEAN-004",
    category: "temizlik",
    type: "toptan",
    name_tr: "Maratem M105 Sıvı El Sabunu (Eczacıbaşı)",
    name_en: "Maratem M105 Commercial Liquid Hand Soap",
    desc_tr: "Cildi kurutmayan nemlendirici gliserin katkılı, dispanser uyumlu, sedefli lüks Eczacıbaşı Maratem 5L endüstriyel bidon sıvı el sabunu.",
    desc_en: "Glycerin-enriched moisturizing liquid hand soap with balanced skin pH. Formulated for bulk refill dispensers in hotels, shopping malls, and corporate towers.",
    package_tr: "5 Litre Endüstriyel Bidon (2'li Koli)",
    package_en: "5 Liter Industrial Canister (Carton of 2)",
    moq_tr: "1 Palet (48 Koli / 96 Bidon - 480 L)",
    moq_en: "1 Pallet (48 Cartons / 96 Canisters - 480 L)",
    shelf_life_tr: "24 Ay (Aşırı Sıcaktan Koruyunuz)",
    shelf_life_en: "24 Months (Protect From Excessive Heat)",
    shelf_tr: "24 Ay",
    shelf_en: "24 Months",
    origin_tr: "İstanbul, Türkiye (Eczacıbaşı)",
    origin_en: "Istanbul, Turkey (Eczacibasi)",
    specs_tr: "pH: 5.5 Cilt Uyumlu | Dermatolojik Test Onaylı",
    specs_en: "Skin-Friendly pH 5.5 | Dermatologically Tested",
    image: "assets/images/products/product_10.jpg?v=5.6"
  },
  {
    id: 11,
    code: "GG-CLEAN-005",
    category: "temizlik",
    type: "both",
    name_tr: "Selpak Professional Z-Katlama Kağıt Havlu",
    name_en: "Selpak Professional Z-Fold Paper Hand Towels",
    desc_tr: "Yüksek su emiciliğine sahip %100 saf selülozdan üretilmiş, dispanser uyumlu, laminasyonlu Selpak Professional Z-katlama havlu kolisi.",
    desc_en: "Ultra-absorbent 100% virgin cellulose 2-ply laminated Z-fold hand towels. Designed for single-sheet dispensing in luxury hotels, airports, and clinics.",
    package_tr: "12 Paket x 200 Yaprak (Koli İçi 2.400 Yaprak)",
    package_en: "12 Packs x 200 Sheets (Case of 2,400 Sheets)",
    moq_tr: "50 Koli (1 Palet: 32 Koli / 2 Palet)",
    moq_en: "50 Cases (Approx 1.5 Pallets)",
    shelf_life_tr: "Süresiz (Kuru ve Nemsiz Ortamda)",
    shelf_life_en: "Indefinite (In Clean Dry Warehouse)",
    shelf_tr: "Süresiz",
    shelf_en: "Indefinite",
    origin_tr: "Yalova, Türkiye (Eczacıbaşı Tüketim)",
    origin_en: "Turkey (Eczacibasi Consumer Products)",
    specs_tr: "Çift Katlı | %100 Birinci Sınıf Beyaz Selüloz | 21x23 cm",
    specs_en: "2-Ply | 100% Virgin White Cellulose | 21x23 cm",
    image: "assets/images/products/product_11.jpg?v=5.6"
  },
  {
    id: 12,
    code: "GG-CLEAN-006",
    category: "temizlik",
    type: "both",
    name_tr: "Asperox Çok Amaçlı Yüzey Temizleyici & Yağ Çözücü",
    name_en: "Asperox Multi-Purpose Surface Degreaser & Cleaner",
    desc_tr: "Endüstriyel mutfak davlumbazları, ocaklar, tezgahlar ve zeminler için üstün yağ çözücü aktif formüllü konsantre Asperox hijyen solüsyonu.",
    desc_en: "Heavy-duty commercial degreaser and multi-surface cleaner formulated for industrial hoods, cooktops, countertops, and tiled floors.",
    package_tr: "5 Litre Bidon (2'li Koli) / 12x1000ml Sprey Koli",
    package_en: "5 Liter Drum (Case of 2) / 12x1000ml Spray Case",
    moq_tr: "1 Palet (48 Koli / 480 L)",
    moq_en: "1 Pallet (48 Cases / 480 L)",
    shelf_life_tr: "24 Ay (Kapalı Ambalajında)",
    shelf_life_en: "24 Months (Original Sealed Packaging)",
    shelf_tr: "24 Ay",
    shelf_en: "24 Months",
    origin_tr: "Adana, Türkiye (Beyaz Kağıt)",
    origin_en: "Adana, Turkey (Beyaz Kagit)",
    specs_tr: "Anında Etkili Yağ Çözücü | Kalıntı Bırakmaz",
    specs_en: "Instant Grease Dissolver | Zero Residue Formula",
    image: "assets/images/products/product_12.jpg?v=5.6"
  },
  {
    id: 13,
    code: "GG-FOOD-007",
    category: "gida",
    type: "both",
    name_tr: "Çaykur Tiryaki Siyah Çay (Dökme & İhracat)",
    name_en: "Çaykur Tiryaki Black Bulk Tea",
    desc_tr: "Rize Doğu Karadeniz çay bahçelerinin en taze filizlerinden harmanlanmış, yüksek dem oranlı, katkısız geleneksel Türk siyah çayı.",
    desc_en: "Harvested from the lush hillsides of Rize, Eastern Black Sea. High-brewing strength, additive-free traditional Turkish loose leaf black tea.",
    package_tr: "1 kg Vakumlu Paket (10'lu Koli) / 5 kg Çuval",
    package_en: "1 kg Vacuum Pack (Case of 10) / 5 kg Sack",
    moq_tr: "1 Palet (60 Koli / 600 Kg)",
    moq_en: "1 Pallet (60 Cases / 600 Kg)",
    shelf_life_tr: "36 Ay (Nemden ve Kokudan Uzak)",
    shelf_life_en: "36 Months (Keep in Odor & Moisture-Free Area)",
    shelf_tr: "36 Ay",
    shelf_en: "36 Months",
    origin_tr: "Rize, Türkiye (ÇAYKUR)",
    origin_en: "Rize, Turkey (CAYKUR)",
    specs_tr: "1. Sınıf Doğu Karadeniz Hasatı | Nem: Max %7",
    specs_en: "Grade 1 Black Sea Harvest | Moisture: Max 7%",
    image: "assets/images/products/product_13.jpg?v=5.6"
  },
  {
    id: 14,
    code: "GG-FOOD-008",
    category: "gida",
    type: "both",
    name_tr: "Balküpü Prestij Küp Şeker (360 Adet)",
    name_en: "Balküpü Prestige Cube Sugar (360 Pcs)",
    desc_tr: "Kafe, otel, ofis ve toplu tüketim alanları için %100 doğal şeker pancarından üretilmiş, çayda anında eriyen preslenmiş kristal küp şeker.",
    desc_en: "100% natural sugar beet pressed cubes tailored for cafes, hotels, corporate pantries, and tea catering. Fast dissolving with no residue.",
    package_tr: "1 kg Kutu (20'li Koli / 20 Kg)",
    package_en: "1 kg Box (Carton of 20 Boxes / 20 Kg)",
    moq_tr: "1 Palet (50 Koli / 1.000 Kg)",
    moq_en: "1 Pallet (50 Cartons / 1,000 Kg)",
    shelf_life_tr: "Süresiz (Kuru ve Serin Ortamda)",
    shelf_life_en: "Indefinite (In Cool, Dry Warehousing)",
    shelf_tr: "Süresiz",
    shelf_en: "Indefinite",
    origin_tr: "Kayseri, Türkiye",
    origin_en: "Central Anatolia, Turkey",
    specs_tr: "Kutu İçi: 360 Küp | %100 Saf Şeker Pancarı",
    specs_en: "360 Cubes Per Box | 100% Pure Sugar Beet",
    image: "assets/images/products/product_14.jpg?v=5.6"
  },
  {
    id: 15,
    code: "GG-FOOD-009",
    category: "gida",
    type: "both",
    name_tr: "Nuh'un Ankara Makarnası İhracat Serisi",
    name_en: "Nuh'un Ankara Export Grade Pasta Series",
    desc_tr: "%100 sert durum buğdayı irmiğinden üretilmiş, pişerken dağılmayan ve hamurlaşmayan ihracat kalitesinde makarna çeşitleri (Spagetti, Burgu, Kalem, Arpa Şehriye).",
    desc_en: "Produced from 100% durum wheat semolina. Retains firm 'al dente' texture without breaking. Available in bulk cartons for foodservice and retail export.",
    package_tr: "500g x 20'li Koli / 5 kg Endüstriyel Paket",
    package_en: "500g x 20 Bulk Carton / 5 kg Catering Sacks",
    moq_tr: "1 Palet (80 Koli / 800 Kg)",
    moq_en: "1 Pallet (80 Cartons / 800 Kg)",
    shelf_life_tr: "24 Ay (Serin ve Kuru Ortam)",
    shelf_life_en: "24 Months (Store in Cool & Dry Place)",
    shelf_tr: "24 Ay",
    shelf_en: "24 Months",
    origin_tr: "Ankara, Türkiye",
    origin_en: "Ankara, Turkey",
    specs_tr: "Protein: Min %12 | %100 Durum Buğdayı İrmiği",
    specs_en: "Protein: Min 12% | 100% Durum Wheat Semolina",
    image: "assets/images/products/product_15.jpg?v=5.6"
  },
  {
    id: 16,
    code: "GG-FOOD-010",
    category: "gida",
    type: "both",
    name_tr: "Komili Sızma Zeytinyağı 5L Teneke",
    name_en: "Komili Extra Virgin Olive Oil 5L Tin",
    desc_tr: "Ege zeytinlerinden soğuk sıkım yöntemiyle üretilmiş, düşük asitli, gurme restoranlar, oteller ve ihracat pazarları için ideal B2B HORECA sızma zeytinyağı.",
    desc_en: "Cold-pressed premium Aegean extra virgin olive oil with low acidity, specially packed for B2B HORECA, gourmet hotels, and global export.",
    package_tr: "5 L Teneke (4'lü İhracat Kolisi) / 18 L Teneke",
    package_en: "5 L Tin (Carton of 4 Tins) / 18 L Bulk Tin",
    moq_tr: "1 Palet (48 Koli / 192 Teneke - 960 L)",
    moq_en: "1 Pallet (48 Cartons / 192 Tins - 960 L)",
    shelf_life_tr: "24 Ay (Serin ve Işıksız Ortam)",
    shelf_life_en: "24 Months (Store in Cool & Dark Place)",
    shelf_tr: "24 Ay",
    shelf_en: "24 Months",
    origin_tr: "Ayvalık / Ege Bölgesi, Türkiye",
    origin_en: "Ayvalik / Aegean Region, Turkey",
    specs_tr: "Serbest Yağ Asitliği: Maks %0.8 | Soğuk Sıkım",
    specs_en: "Free Fatty Acidity: Max 0.8% | Cold Pressed",
    image: "assets/images/products/product_16.jpg?v=5.6"
  },
  {
    id: 17,
    code: "GG-FOOD-011",
    category: "gida",
    type: "both",
    name_tr: "Billur İyotlu Sofra Tuzu",
    name_en: "Billur Iodized Table Salt",
    desc_tr: "Endüstriyel gıda üretimi, fırınlar, turşu/konserve tesisleri ve HORECA için topaklanmayı önleyici formüllü %100 saf kristalize Billur iyotlu sofra tuzu.",
    desc_en: "100% pure crystallized iodized table salt with anti-caking agent for industrial food manufacturing, bakeries, pickling facilities, and HORECA.",
    package_tr: "25 Kg Polipropilen Çuval / 20x750g Koli",
    package_en: "25 Kg PP Woven Sack / 20x750g Bulk Carton",
    moq_tr: "1 Palet (1.000 Kg)",
    moq_en: "1 Pallet (1,000 Kg)",
    shelf_life_tr: "5 Yıl (Kuru ve Serin Ortamda)",
    shelf_life_en: "5 Years (Cool & Dry Storage)",
    shelf_tr: "5 Yıl",
    shelf_en: "5 Years",
    origin_tr: "İzmir / Çamaltı Tuzlası, Türkiye",
    origin_en: "Izmir, Turkey",
    specs_tr: "Saflık: Min %99.5 NaCl | Nem: Max %0.5 | İyot: 25-40 mg/kg",
    specs_en: "Purity: Min 99.5% NaCl | Moisture: Max 0.5% | Iodine: 25-40 ppm",
    image: "assets/images/products/product_17.jpg?v=5.6"
  }
];

// Global window exposure for compatibility across scripts
window.productsData = productsData;
window.products = productsData;

// ==========================================
// 2. TÜRKÇE AKILLI NORMALİZASYON (normalizeTR)
// ==========================================
function normalizeTR(str) {
  if (!str) return '';
  return String(str)
    .replace(/İ/g, 'i')
    .replace(/I/g, 'i')
    .replace(/ı/g, 'i')
    .replace(/ş/g, 's')
    .replace(/Ş/g, 's')
    .replace(/ğ/g, 'g')
    .replace(/Ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/Ü/g, 'u')
    .replace(/ö/g, 'o')
    .replace(/Ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/Ç/g, 'c')
    .toLowerCase()
    .trim();
}

// ==========================================
// 3. i18n SÖZLÜĞÜ VE YERELLEŞTİRME
// ==========================================
const I18N_FALLBACK = {
  tr: {
    brand_name: "Gıda Global",
    tagline: "Temel Gıda & Temizlik Ürünlerinde Küresel Tedarik Güveni",
    nav_home: "Ana Sayfa",
    nav_about: "Hakkımızda",
    nav_catalog: "Ürün Kataloğu",
    nav_b2b: "Toptan Satış",
    nav_process: "Tedarik Süreci",
    nav_contact: "İletişim",
    hero_badge: "🌐 Uluslararası Standartlarda B2B İhracat & Tedarik",
    hero_title: "Türkiye'nin Küresel Gıda ve Temizlik Tedarik Ağı",
    hero_sub: "Gıda Global; Torku, Söke, Yayla, Omo, Fairy gibi yerli ve global devlerin orijinal ürünlerini, konteyner ve tır bazlı en uygun toptan fiyatlarla uluslararası pazara taşır.",
    hero_cta_whatsapp: "Toptan Teklif İste",
    hero_cta_catalog: "Kataloğa Göz At",
    stat_clients: "Ülkeye İhracat",
    stat_products: "Orijinal Ürün",
    stat_delivery: "Lojistik & Gümrük Operasyon Desteği",
    filter_all: "Tüm Ürünler",
    filter_gida: "🌾 Temel Gıda",
    filter_temizlik: "🧼 Temizlik Malzemeleri",
    filter_toptan: "📦 Toptan Paketi (B2B)",
    search_placeholder: "Ürün adı, marka, ambalaj veya kod ara...",
    btn_detail: "İncele",
    btn_add_quote: "Teklife Ekle",
    cart_title: "Teklif Sepeti",
    cart_empty: "Sepetiniz henüz boş. Ürün ekleyerek toplu B2B teklif alabilirsiniz.",
    cart_send: "Toplu Teklif İste",
    cart_clear: "Sepeti Temizle",
    cart_unit_lbl: "Birim:",
    cart_qty_lbl: "Miktar:",
    search_empty: "Arama kriterlerinize uygun ürün bulunamadı.",
    unit_packet: "🛍️ Paket",
    unit_box: "📦 Koli Bazında",
    unit_pallet: "🏗️ Palet Bazında",
    unit_container: "🚚 Tır / Konteyner (FCL)",
    footer_rights: "Tüm Hakları Saklıdır."
  },
  en: {
    brand_name: "Gida Global",
    tagline: "Global Trust in Staple Food & Commercial Cleaning Supplies",
    nav_home: "Home",
    nav_about: "About Us",
    nav_catalog: "Product Catalog",
    nav_b2b: "Wholesale (B2B)",
    nav_process: "Supply Process",
    nav_contact: "Contact Us",
    hero_badge: "🌐 World-Class B2B Supply & Export Logistics",
    hero_title: "Turkey's Premier Food & Hygiene Supply Network",
    hero_sub: "Gida Global delivers authentic products from industry leaders like Söke, Biryağ, Tat, Omo, and Fairy with competitive full container load (FCL) and truckload (FTL) pricing.",
    hero_cta_whatsapp: "Request Wholesale Quote",
    hero_cta_catalog: "Explore Catalog",
    stat_clients: "Countries Exported",
    stat_products: "Authentic Products",
    stat_delivery: "Customs & Logistics Operations Support",
    filter_all: "All Products",
    filter_gida: "🌾 Basic Foods",
    filter_temizlik: "🧼 Cleaning Supplies",
    filter_toptan: "📦 Wholesale (B2B)",
    search_placeholder: "Search by product name, brand, packaging or code...",
    btn_detail: "View Detail",
    btn_add_quote: "Add to Quote",
    cart_title: "Quote Cart",
    cart_empty: "Your cart is empty. Add products to request a bulk B2B quote.",
    cart_send: "Request Bulk Quote",
    cart_clear: "Clear Cart",
    cart_unit_lbl: "Unit:",
    cart_qty_lbl: "Qty:",
    search_empty: "No products found matching your search.",
    unit_packet: "🛍️ Pack",
    unit_box: "📦 Carton / Box",
    unit_pallet: "🏗️ Pallet Load",
    unit_container: "🚚 Truck / Container (FCL)",
    footer_rights: "All Rights Reserved."
  }
};

// ==========================================
// 4. ANA UYGULAMA MOTORU (DOM Event Listener)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {

  // --- A. Durum Yönetimi (State) ---
  let currentLang = localStorage.getItem('site_lang') || 'tr';
  
  // Sistem tercihi ve kaydedilmiş temayı senkronize et
  const savedTheme = localStorage.getItem('site_theme') || localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

  // Teklif Sepeti Durumu
  let quoteCart = [];
  try {
    quoteCart = JSON.parse(localStorage.getItem('gg_cart')) || [];
  } catch (e) {
    quoteCart = [];
  }

  // Modal Aktif Ürün Seçimi
  let currentActiveProduct = null;
  let currentActiveUnit = 'Koli';

  // --- B. DOM Elementleri (Genişletilmiş Çift ID Desteği) ---
  const themeBtn = document.getElementById('theme-toggle');
  const langBtn = document.getElementById('lang-toggle');
  const productsGrid = document.getElementById('products-grid');
  const filterBtns = document.querySelectorAll('.filter-pills .pill-btn');
  const searchInput = document.getElementById('search-input');
  
  // Modal Elementleri
  const modal = document.getElementById('product-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn') || document.getElementById('modal-close');
  const modalWaBtn = document.getElementById('modal-wa-btn') || document.getElementById('modal-add-cart-btn');

  // Sepet (Cart Sidebar / Modal) Elementleri
  const cartSidebar = document.getElementById('cart-sidebar') || document.getElementById('cart-modal');
  const cartCloseBtn = document.getElementById('cart-close-btn') || document.getElementById('cart-close');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartCheckoutBtn = document.getElementById('cart-checkout-btn') || document.getElementById('send-cart-whatsapp');
  const floatingCartBtn = document.getElementById('floating-cart-btn') || document.getElementById('cart-btn');
  const floatingCartCount = document.getElementById('floating-cart-count') || document.getElementById('cart-count');
  const cartCountDisplay = document.getElementById('cart-count-display');

  // Mobil Menü Elementleri & İkon Şablonları
  const hamburgerSvg = '<svg class="hamburger-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
  const closeSvg = '<svg class="close-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';

  let mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links') || document.querySelector('.nav-links');

  // Mobil Menü Butonu DOM'da yoksa dinamik olarak oluştur
  if (!mobileMenuBtn && navLinks) {
    const navActions = document.querySelector('.nav-actions');
    mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.id = 'mobile-menu-btn';
    mobileMenuBtn.className = 'icon-btn mobile-menu-btn';
    mobileMenuBtn.setAttribute('aria-label', 'Menüyü Aç/Kapat');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileMenuBtn.innerHTML = hamburgerSvg;
    mobileMenuBtn.style.display = 'none'; // CSS medya sorguları devreye girince görünür
    if (navActions && navActions.parentNode) {
      navActions.parentNode.insertBefore(mobileMenuBtn, navActions);
    }
  }

  // Mobil Menü Karartma Katmanı (Overlay)
  let mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  if (!mobileMenuOverlay) {
    mobileMenuOverlay = document.createElement('div');
    mobileMenuOverlay.id = 'mobile-menu-overlay';
    mobileMenuOverlay.className = 'mobile-menu-overlay';
    mobileMenuOverlay.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:98; opacity:0; pointer-events:none; transition:opacity 0.3s ease;';
    document.body.appendChild(mobileMenuOverlay);
  }

  // --- C. Tema Yönetimi (Dark / Light) ---
  function applyTheme(theme) {
    currentTheme = theme;
    document.body.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('site_theme', theme);
    localStorage.setItem('theme', theme);

    if (themeBtn) {
      if (theme === 'dark') {
        themeBtn.textContent = '☀️';
        themeBtn.setAttribute('title', currentLang === 'en' ? 'Switch to Light Mode' : 'Aydınlık Temaya Geç');
        themeBtn.setAttribute('aria-label', currentLang === 'en' ? 'Switch to Light Mode' : 'Aydınlık Temaya Geç');
      } else {
        themeBtn.textContent = '🌙';
        themeBtn.setAttribute('title', currentLang === 'en' ? 'Switch to Dark Mode' : 'Karanlık Temaya Geç');
        themeBtn.setAttribute('aria-label', currentLang === 'en' ? 'Switch to Dark Mode' : 'Karanlık Temaya Geç');
      }
    }
  }

  // İlk tema kurulumu
  applyTheme(currentTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }

  // İşletim sistemi tema değişimini dinle
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('site_theme') && !localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  // --- D. Scroll Lock & Modal / Drawer Senkronizasyonu ---
  function syncScrollLock() {
    const isModalOpen = modal && modal.classList.contains('active');
    const isCartOpen = cartSidebar && cartSidebar.classList.contains('active');
    const isNavOpen = navLinks && navLinks.classList.contains('mobile-active');

    if (isModalOpen || isCartOpen || isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  function closeAllModalsAndDrawers() {
    if (modal) modal.classList.remove('active');
    if (cartSidebar) cartSidebar.classList.remove('active');
    if (navLinks) navLinks.classList.remove('mobile-active');
    if (mobileMenuBtn) {
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileMenuBtn.innerHTML = hamburgerSvg;
    }
    if (mobileMenuOverlay) {
      mobileMenuOverlay.classList.remove('active');
      mobileMenuOverlay.style.opacity = '0';
      mobileMenuOverlay.style.pointerEvents = 'none';
    }
    syncScrollLock();
  }

  // ESC tuşuyla hepsini temiz kapat
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      closeAllModalsAndDrawers();
    }
  });

  // --- E. Mobil Menü Etkileşimi ---
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.toggle('mobile-active');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen) {
        mobileMenuBtn.innerHTML = closeSvg;
        if (mobileMenuOverlay) {
          mobileMenuOverlay.classList.add('active');
          mobileMenuOverlay.style.opacity = '1';
          mobileMenuOverlay.style.pointerEvents = 'auto';
        }
      } else {
        mobileMenuBtn.innerHTML = hamburgerSvg;
        if (mobileMenuOverlay) {
          mobileMenuOverlay.classList.remove('active');
          mobileMenuOverlay.style.opacity = '0';
          mobileMenuOverlay.style.pointerEvents = 'none';
        }
      }
      syncScrollLock();
    });

    // Menüdeki linklere tıklanınca otomatik kapat
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-active');
        if (mobileMenuBtn) {
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
          mobileMenuBtn.innerHTML = hamburgerSvg;
        }
        if (mobileMenuOverlay) {
          mobileMenuOverlay.classList.remove('active');
          mobileMenuOverlay.style.opacity = '0';
          mobileMenuOverlay.style.pointerEvents = 'none';
        }
        syncScrollLock();
      });
    });
  }

  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', () => {
      closeAllModalsAndDrawers();
    });
  }

  // --- F. Dil ve i18n Mantığı (SVG Korumalı) ---
  function applyTranslations() {
    document.documentElement.lang = currentLang;

    if (langBtn) {
      langBtn.textContent = currentLang === 'tr' ? 'EN 🇬🇧' : 'TR 🇹🇷';
    }

    // Sözlük birleştirme
    const dict = Object.assign(
      {},
      I18N_FALLBACK[currentLang] || {},
      (window.I18N && window.I18N[currentLang]) ? window.I18N[currentLang] : {}
    );

    // [data-i18n] elementlerini güvenli şekilde güncelle
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = dict[key];
      if (!val) return;

      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else {
        // SVG ikonu varsa KORU, sadece metin kısmını güncelle
        const svg = el.querySelector('svg');
        const textSpan = el.querySelector('.btn-text, .i18n-text');
        if (textSpan) {
          textSpan.textContent = val;
        } else if (svg) {
          const svgClone = svg.cloneNode(true);
          el.innerHTML = '';
          el.appendChild(svgClone);
          el.appendChild(document.createTextNode(' ' + val));
        } else {
          el.textContent = val;
        }
      }
    });

    // Ürün listesini ve sepeti yeni dile göre yeniden çiz
    renderProducts(getActiveFilteredProducts());
    updateCartUI();
  }

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'tr' ? 'en' : 'tr';
      localStorage.setItem('site_lang', currentLang);
      applyTranslations();
      applyTheme(currentTheme); // Başlık/tooltip dillerini tazele
    });
  }

  // --- G. Ürün Filtreleme ve Arama (normalizeTR Destekli) ---
  function getActiveFilteredProducts() {
    const activeFilterBtn = document.querySelector('.filter-pills .pill-btn.active');
    const filter = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';
    const query = searchInput ? normalizeTR(searchInput.value) : '';

    return productsData.filter(p => {
      // Dil bazlı ve genel alanlar
      const nameTrNorm = normalizeTR(p.name_tr);
      const nameEnNorm = normalizeTR(p.name_en);
      const descTrNorm = normalizeTR(p.desc_tr);
      const descEnNorm = normalizeTR(p.desc_en);
      const codeNorm = normalizeTR(p.code);
      const pkgTrNorm = normalizeTR(p.package_tr);
      const pkgEnNorm = normalizeTR(p.package_en);
      const specsTrNorm = normalizeTR(p.specs_tr);
      const specsEnNorm = normalizeTR(p.specs_en);

      const matchesSearch = !query || 
        nameTrNorm.includes(query) ||
        nameEnNorm.includes(query) ||
        descTrNorm.includes(query) ||
        descEnNorm.includes(query) ||
        codeNorm.includes(query) ||
        pkgTrNorm.includes(query) ||
        pkgEnNorm.includes(query) ||
        specsTrNorm.includes(query) ||
        specsEnNorm.includes(query);

      const matchesFilter = (filter === 'all') ||
        (p.category === filter) ||
        (filter === 'toptan' && (p.type === 'toptan' || p.type === 'both'));

      return matchesSearch && matchesFilter;
    });
  }

  // --- H. Ürün Kartları Render Motoru ---
  function renderProducts(data) {
    if (!productsGrid) return;
    productsGrid.innerHTML = '';

    const isEn = currentLang === 'en';

    if (!data || data.length === 0) {
      const emptyMsg = isEn ? 'No products found matching your search.' : 'Arama kriterlerinize uygun ürün bulunamadı.';
      productsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
          <p style="font-size: 1.1rem; font-weight: 600;">${emptyMsg}</p>
        </div>
      `;
      return;
    }

    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'product-card';

      const name = isEn ? item.name_en : item.name_tr;
      const desc = isEn ? item.desc_en : item.desc_tr;
      const moq = isEn ? item.moq_en : item.moq_tr;
      const pkg = isEn ? item.package_en : item.package_tr;
      const catLabel = item.category === 'gida' 
        ? (isEn ? '🌾 Basic Food' : '🌾 Temel Gıda') 
        : (isEn ? '🧼 Hygiene' : '🧼 Temizlik');

      card.innerHTML = `
        <div class="product-img-wrapper" style="position:relative;">
          <img 
            src="${item.image}" 
            alt="${name}" 
            class="product-img" 
            loading="lazy"
            onerror="if(!this.dataset.fallback){this.dataset.fallback='1'; this.src=this.src.replace('assets/images/products/', 'assets/products/');}else{this.src='assets/images/logo.png';}"
          >
          <div class="moq-tag" style="background:#0f172a; color:#fff; font-size:0.75rem; font-weight:800;">${moq}</div>
        </div>
        <div class="product-content">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
            <span class="product-code" style="font-size:0.75rem; font-weight:800; color:var(--primary);">${item.code}</span>
            <span style="font-size:0.75rem; font-weight:700; color:var(--text-muted); background:var(--bg-main); padding:0.15rem 0.5rem; border-radius:1rem; border:1px solid var(--border-color);">${catLabel}</span>
          </div>
          <h3 class="product-title" style="font-size:1.1rem; font-weight:800; line-height:1.3; margin-bottom:0.4rem;">${name}</h3>
          <p class="product-desc" style="font-size:0.85rem; color:var(--text-muted); line-height:1.4; margin-bottom:0.75rem;">${desc}</p>
          
          <div class="product-specs-mini" style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-bottom:1rem;">
            <span class="spec-pill" style="font-size:0.75rem; background:var(--bg-main); padding:0.25rem 0.55rem; border-radius:0.4rem; border:1px solid var(--border-color); color:var(--text-main); font-weight:600;">📦 ${pkg}</span>
          </div>

          <div class="product-actions" style="display:flex; gap:0.5rem; align-items:center; margin-top:auto;">
            <button class="btn-view btn-detail" onclick="openProductModal(${item.id})" style="flex:1; padding:0.55rem 0.75rem; font-size:0.85rem; font-weight:700; cursor:pointer;">
              ${isEn ? 'View Detail' : 'İncele'}
            </button>
            <button class="btn btn-whatsapp btn-add-quote" onclick="quickAddToQuote(${item.id})" style="padding:0.55rem 0.75rem; font-size:0.85rem; font-weight:700; cursor:pointer;" title="${isEn ? 'Add to Quote Cart' : 'Teklife Ekle'}">
              🛒 ${isEn ? 'Add' : 'Teklife Ekle'}
            </button>
          </div>
        </div>
      `;
      productsGrid.appendChild(card);
    });
  }

  // Arama Girişi Dinleyicisi
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderProducts(getActiveFilteredProducts());
    });
  }

  // Filtre Butonları Dinleyicisi
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(getActiveFilteredProducts());
    });
  });

  // --- I. Ürün Hızlı İnceleme Modalı (Product Quick View Modal) ---
  window.openProductModal = function(id) {
    const item = productsData.find(p => p.id === id);
    if (!item || !modal) return;

    currentActiveProduct = item;
    const isEn = currentLang === 'en';

    const modalImg = document.getElementById('modal-img');
    if (modalImg) {
      modalImg.src = item.image;
      modalImg.alt = isEn ? item.name_en : item.name_tr;
      modalImg.onerror = function() {
        if (!this.dataset.fallback) {
          this.dataset.fallback = '1';
          this.src = this.src.replace('assets/images/products/', 'assets/products/');
        } else {
          this.src = 'assets/images/logo.png';
        }
      };
    }

    const modalCode = document.getElementById('modal-code');
    if (modalCode) modalCode.textContent = 'KOD: ' + item.code;

    const modalTitle = document.getElementById('modal-title');
    if (modalTitle) modalTitle.textContent = isEn ? item.name_en : item.name_tr;

    const modalDesc = document.getElementById('modal-desc');
    if (modalDesc) modalDesc.textContent = isEn ? item.desc_en : item.desc_tr;

    const modalMoq = document.getElementById('modal-moq');
    if (modalMoq) modalMoq.textContent = isEn ? item.moq_en : item.moq_tr;

    const modalPkg = document.getElementById('modal-pkg') || document.getElementById('modal-packaging');
    if (modalPkg) modalPkg.textContent = isEn ? item.package_en : item.package_tr;

    const modalOrigin = document.getElementById('modal-origin');
    if (modalOrigin) modalOrigin.textContent = isEn ? item.origin_en : item.origin_tr;

    // HATA 1 ONARIMI: Asla undefined çıkmayacak raf ömrü çözümlemesi
    const modalShelf = document.getElementById('modal-shelf');
    if (modalShelf) {
      const shelfText = isEn 
        ? (item.shelf_life_en || item.shelf_en || item.shelf_life_tr || item.shelf_tr || '-')
        : (item.shelf_life_tr || item.shelf_tr || item.shelf_life_en || '-');
      modalShelf.textContent = shelfText;
    }

    const modalSpecs = document.getElementById('modal-specs');
    if (modalSpecs) modalSpecs.textContent = isEn ? item.specs_en : item.specs_tr;

    // Varsayılan B2B birim seçimi
    currentActiveUnit = 'Koli';
    document.querySelectorAll('.unit-opt').forEach((opt, idx) => {
      opt.classList.remove('active');
      if (idx === 1) opt.classList.add('active'); // Varsayılan Koli
    });

    // Modaldaki butonu güncelle
    if (modalWaBtn) {
      modalWaBtn.innerHTML = `🛒 ${isEn ? 'Add to Quote Cart' : 'Sepete Ekle'}`;
    }

    modal.classList.add('active');
    syncScrollLock();
  };

  // Birim Seçimi
  window.selectUnitOpt = function(el, unit) {
    document.querySelectorAll('.unit-opt').forEach(opt => opt.classList.remove('active'));
    if (el) el.classList.add('active');
    currentActiveUnit = unit;
  };

  // Modaldan Sepete Ekleme
  if (modalWaBtn) {
    modalWaBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!currentActiveProduct) return;

      const isEn = currentLang === 'en';
      const itemToAdd = {
        id: currentActiveProduct.id,
        code: currentActiveProduct.code,
        name: isEn ? currentActiveProduct.name_en : currentActiveProduct.name_tr,
        package: isEn ? currentActiveProduct.package_en : currentActiveProduct.package_tr,
        moq: isEn ? currentActiveProduct.moq_en : currentActiveProduct.moq_tr,
        image: currentActiveProduct.image,
        unit: currentActiveUnit || 'Koli',
        quantity: 1
      };

      addToQuoteCart(itemToAdd);
      if (modal) modal.classList.remove('active');
      syncScrollLock();
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      if (modal) modal.classList.remove('active');
      syncScrollLock();
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        syncScrollLock();
      }
    });
  }

  // --- J. B2B Teklif Sepeti Motoru (Quote Cart Engine) ---
  function updateCartUI() {
    const totalCount = quoteCart.reduce((sum, item) => sum + (item.quantity || 1), 0);

    if (floatingCartCount) floatingCartCount.textContent = totalCount;
    if (cartCountDisplay) cartCountDisplay.textContent = totalCount;

    if (cartCheckoutBtn) {
      cartCheckoutBtn.disabled = quoteCart.length === 0;
    }

    if (cartItemsContainer) {
      const isEn = currentLang === 'en';
      if (quoteCart.length === 0) {
        cartItemsContainer.innerHTML = `
          <div style="color: var(--text-muted); text-align: center; margin-top: 3rem; font-size: 0.95rem; line-height: 1.6;">
            <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">🛒</div>
            ${isEn ? 'Your quote cart is empty.<br>Add products to request a bulk wholesale quotation.' : 'Teklif sepetiniz henüz boş.<br>Ürün ekleyerek toplu toptan teklif alabilirsiniz.'}
          </div>
        `;
      } else {
        cartItemsContainer.innerHTML = quoteCart.map((item, index) => `
          <div style="display:flex; align-items:center; gap:0.75rem; padding:0.85rem; border:1px solid var(--border-color); border-radius:var(--radius-sm, 8px); background:var(--bg-card); position:relative;">
            <img 
              src="${item.image}" 
              alt="${item.name}" 
              style="width:52px; height:52px; object-fit:contain; border-radius:4px; background:var(--bg-main); padding:2px;"
              onerror="this.src='assets/images/logo.png';"
            >
            <div style="flex:1; min-width:0;">
              <div style="font-size:0.85rem; font-weight:800; color:var(--navy); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${item.name}</div>
              <div style="font-size:0.75rem; color:var(--text-muted);">${item.code} | <strong>${item.unit}</strong></div>
              <div style="display:flex; align-items:center; gap:0.5rem; margin-top:0.35rem;">
                <button onclick="changeCartQty(${index}, -1)" style="width:24px; height:24px; border:1px solid var(--border-color); background:var(--bg-main); color:var(--text-main); font-weight:800; border-radius:4px; cursor:pointer;">-</button>
                <span style="font-size:0.85rem; font-weight:800; min-width:20px; text-align:center;">${item.quantity || 1}</span>
                <button onclick="changeCartQty(${index}, 1)" style="width:24px; height:24px; border:1px solid var(--border-color); background:var(--bg-main); color:var(--text-main); font-weight:800; border-radius:4px; cursor:pointer;">+</button>
              </div>
            </div>
            <button onclick="removeFromQuoteCart(${index})" style="background:none; border:none; color:#ef4444; font-size:1.3rem; line-height:1; cursor:pointer; padding:4px;" title="${isEn ? 'Remove' : 'Sil'}">&times;</button>
          </div>
        `).join('');
      }
    }
  }

  function saveCart() {
    localStorage.setItem('gg_cart', JSON.stringify(quoteCart));
    updateCartUI();
  }

  // Sepete ürün ekle (Doğrudan veya Modaldan)
  function addToQuoteCart(product) {
    const existingIndex = quoteCart.findIndex(p => p.code === product.code && p.unit === product.unit);
    if (existingIndex > -1) {
      quoteCart[existingIndex].quantity = (quoteCart[existingIndex].quantity || 1) + (product.quantity || 1);
    } else {
      quoteCart.push({
        ...product,
        quantity: product.quantity || 1
      });
    }
    saveCart();

    // Floating buton animasyonu
    if (floatingCartBtn) {
      floatingCartBtn.style.transform = 'scale(1.2)';
      setTimeout(() => { floatingCartBtn.style.transform = 'scale(1)'; }, 200);
    }
  }

  // Global erişilebilir sepet fonksiyonları
  window.addToCart = function(product, unit) {
    addToQuoteCart({ ...product, unit: unit || 'Koli', quantity: 1 });
  };

  window.quickAddToQuote = function(id) {
    const item = productsData.find(p => p.id === id);
    if (!item) return;

    const isEn = currentLang === 'en';
    addToQuoteCart({
      id: item.id,
      code: item.code,
      name: isEn ? item.name_en : item.name_tr,
      package: isEn ? item.package_en : item.package_tr,
      moq: isEn ? item.moq_en : item.moq_tr,
      image: item.image,
      unit: 'Koli',
      quantity: 1
    });
  };

  window.removeFromQuoteCart = function(index) {
    quoteCart.splice(index, 1);
    saveCart();
  };
  window.removeFromCart = window.removeFromQuoteCart;

  window.changeCartQty = function(index, delta) {
    if (!quoteCart[index]) return;
    quoteCart[index].quantity = (quoteCart[index].quantity || 1) + delta;
    if (quoteCart[index].quantity <= 0) {
      quoteCart.splice(index, 1);
    }
    saveCart();
  };

  // Sepet Sidebar Açma/Kapatma
  if (floatingCartBtn && cartSidebar) {
    floatingCartBtn.addEventListener('click', () => {
      cartSidebar.classList.add('active');
      syncScrollLock();
    });
  }

  if (cartCloseBtn && cartSidebar) {
    cartCloseBtn.addEventListener('click', () => {
      cartSidebar.classList.remove('active');
      syncScrollLock();
    });
  }

  if (cartSidebar) {
    cartSidebar.addEventListener('click', (e) => {
      if (e.target === cartSidebar) {
        cartSidebar.classList.remove('active');
        syncScrollLock();
      }
    });
  }

  // Kurumsal B2B WhatsApp Teklif Mesajı Oluşturucu
  if (cartCheckoutBtn) {
    cartCheckoutBtn.addEventListener('click', () => {
      if (quoteCart.length === 0) return;

      const isEn = currentLang === 'en';
      let message = isEn
        ? "*GIDA GLOBAL - B2B WHOLESALE QUOTATION INQUIRY*\n"
        : "*GIDA GLOBAL - B2B TOPTAN FİYAT TEKLİFİ TALEBİ*\n";
      
      message += "--------------------------------------\n";
      message += isEn
        ? "Dear Sales Executive,\nWe would like to receive your best wholesale price & delivery terms for the following items:\n\n"
        : "Sayın Yetkili,\nAşağıda listelenen ürünler için toptan (FCL/LTL/Palet) birim fiyat ve sevkiyat teklifinizi rica ederiz:\n\n";

      quoteCart.forEach((item, idx) => {
        message += `${idx + 1}. *[${item.code}]* ${item.name}\n`;
        message += `   - Miktar / Birim: ${item.quantity || 1} ${item.unit}\n`;
        if (item.package) message += `   - Ambalaj: ${item.package}\n`;
      });

      message += "\n--------------------------------------\n";
      message += isEn 
        ? "Company Name / Representative: \nDelivery Location (City/Country): \n"
        : "Firma Adı / Yetkili: \nTeslimat Yeri (İl / İlçe / Ülke): \n";
      message += isEn ? "Thank you." : "Hayırlı işler dileriz.";

      const waUrl = `https://wa.me/905320623935?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');

      if (cartSidebar) cartSidebar.classList.remove('active');
      syncScrollLock();
    });
  }

  // --- K. Canlı Döviz Kuru Ticker (USD / EUR -> TRY) ---
  fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
      if (data && data.rates && data.rates.TRY) {
        const tryRate = data.rates.TRY.toFixed(2);
        const eurRate = (data.rates.TRY / (data.rates.EUR || 1)).toFixed(2);
        const ticker = document.querySelector('.ticker-content');
        if (ticker) {
          ticker.innerHTML = `💵 USD/TRY: ${tryRate} &nbsp;&bull;&nbsp; 💶 EUR/TRY: ${eurRate} &nbsp;&bull;&nbsp; ` + ticker.innerHTML;
        }
      }
    })
    .catch(e => {
      console.log('Live currency ticker offline or blocked, continuing smoothly.', e);
    });

  // --- L. İletişim Teklif Formu Dinleyicisi ---
  const quoteForm = document.getElementById('quote-form') || document.getElementById('b2b-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (document.getElementById('form-name') || document.getElementById('comp-name'))?.value || '';
      const phone = (document.getElementById('form-phone') || document.getElementById('comp-phone'))?.value || '';
      const cat = (document.getElementById('form-category') || document.getElementById('comp-category'))?.value || '';
      const msg = (document.getElementById('form-message') || document.getElementById('comp-message'))?.value || '';

      const text = `*Yeni B2B Fiyat Teklifi Talebi*\n\n*Firma/İsim:* ${name}\n*Telefon:* ${phone}\n*Kategori:* ${cat}\n*Detay:* ${msg}`;
      window.open(`https://wa.me/905320623935?text=${encodeURIComponent(text)}`, '_blank');
    });
  }

  // --- M. İlk Render & Başlatma ---
  applyTranslations();
  updateCartUI();

});
