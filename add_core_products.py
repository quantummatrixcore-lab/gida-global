import json

with open('assets/js/products.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.strip()
if content.endswith(';'): content = content[:-1]
if content.endswith(']'): content = content[:-1]

new_products = """  ,{
    id: 15,
    category: "gida",
    type: "both",
    name_tr: "Nuh'un Ankara Makarnası",
    name_en: "Nuh'un Ankara Pasta",
    desc_tr: "Yüksek proteinli %100 durum buğdayından üretilmiş ihracat kalitesinde makarna çeşitleri (Burgu, Kalem, Spagetti).",
    desc_en: "Export quality pasta varieties made from 100% durum wheat with high protein (Fusilli, Penne, Spaghetti).",
    package_tr: "500g x 20'li Koli / 5kg Paket",
    package_en: "500g x 20 Carton / 5kg Pack",
    code: "GG-FOOD-009",
    image: "assets/images/products/product_15.jpg?v=5.2",
    moq_tr: "Minimum Sipariş: 1 Palet",
    moq_en: "MOQ: 1 Pallet",
    shelf_life_tr: "24 Ay",
    shelf_life_en: "24 Months",
    origin_tr: "Ankara, Türkiye",
    origin_en: "Ankara, Turkey",
    specs_tr: "%100 Durum Buğdayı",
    specs_en: "100% Durum Wheat"
  },
  {
    id: 16,
    category: "gida",
    type: "both",
    name_tr: "Komili Sızma Zeytinyağı",
    name_en: "Komili Extra Virgin Olive Oil",
    desc_tr: "Ege zeytinlerinden özenle sıkılmış, asit oranı düşük, soğuk lezzetler için ideal birinci sınıf sızma zeytinyağı.",
    desc_en: "Carefully pressed from Aegean olives, low acidity, premium extra virgin olive oil ideal for cold dishes.",
    package_tr: "5 L Teneke / 18 L Teneke",
    package_en: "5 L Tin / 18 L Tin",
    code: "GG-FOOD-010",
    image: "assets/images/products/product_16.jpg?v=5.2",
    moq_tr: "Minimum Sipariş: 1 Palet",
    moq_en: "MOQ: 1 Pallet",
    shelf_life_tr: "24 Ay",
    shelf_life_en: "24 Months",
    origin_tr: "Ege Bölgesi, Türkiye",
    origin_en: "Aegean Region, Turkey",
    specs_tr: "Maks %0.8 Asit / Sızma",
    specs_en: "Max 0.8% Acidity / Extra Virgin"
  },
  {
    id: 17,
    category: "gida",
    type: "both",
    name_tr: "Billur İyotlu Sofra Tuzu",
    name_en: "Billur Iodized Table Salt",
    desc_tr: "Topaklanmayı önleyici yapıya sahip, kristalize formda yüksek kaliteli klasik Türk sofra tuzu.",
    desc_en: "High quality classic Turkish table salt in crystallized form with anti-caking properties.",
    package_tr: "3 kg / 25 kg Çuval",
    package_en: "3 kg / 25 kg PP Bag",
    code: "GG-FOOD-011",
    image: "assets/images/products/product_17.jpg?v=5.2",
    moq_tr: "Minimum Sipariş: 1 Palet",
    moq_en: "MOQ: 1 Pallet",
    shelf_life_tr: "Süresiz (Kuru Ortam)",
    shelf_life_en: "Indefinite (Dry Environment)",
    origin_tr: "İzmir, Türkiye",
    origin_en: "Izmir, Turkey",
    specs_tr: "İyot Katkılı / Kristal",
    specs_en: "Iodized / Crystal"
  }
];"""

with open('assets/js/products.js', 'w', encoding='utf-8') as f:
    f.write(content + new_products)
