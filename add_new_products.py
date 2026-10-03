import json

with open('assets/js/products.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.strip()
if content.endswith(';'): content = content[:-1]
if content.endswith(']'): content = content[:-1]

new_products = """  ,{
    id: 13,
    category: "gida",
    type: "both",
    name_tr: "Çaykur Tiryaki Çay",
    name_en: "Çaykur Tiryaki Black Tea",
    desc_tr: "Tiryakilerine özel harman, yüksek dem oranı ve lezzetiyle öne çıkan klasik Çaykur siyah çay.",
    desc_en: "Special blend for tea addicts, classic Çaykur black tea standing out with high brew ratio and taste.",
    package_tr: "1 kg Paket / 10'lu Koli",
    package_en: "1 kg Pack / Box of 10",
    code: "GG-FOOD-007",
    image: "assets/images/products/product_13.jpg?v=5.0",
    moq_tr: "Minimum Sipariş: 1 Palet",
    moq_en: "MOQ: 1 Pallet",
    shelf_life_tr: "36 Ay",
    shelf_life_en: "36 Months",
    origin_tr: "Rize, Türkiye",
    origin_en: "Rize, Turkey",
    specs_tr: "1. Kalite Siyah Çay",
    specs_en: "1st Grade Black Tea"
  },
  {
    id: 14,
    category: "gida",
    type: "both",
    name_tr: "Balküpü Küp Şeker",
    name_en: "Balküpü Cube Sugar",
    desc_tr: "Çay ve kahve servisleri için ideal, hızlı eriyen %100 pancar şekerinden üretilmiş Balküpü küp şeker.",
    desc_en: "Ideal for tea and coffee services, fast dissolving Balküpü cube sugar made from 100% beet sugar.",
    package_tr: "1 kg Kutu / 20'li Koli",
    package_en: "1 kg Box / Box of 20",
    code: "GG-FOOD-008",
    image: "assets/images/products/product_14.jpg?v=5.0",
    moq_tr: "Minimum Sipariş: 1 Palet",
    moq_en: "MOQ: 1 Pallet",
    shelf_life_tr: "Süresiz",
    shelf_life_en: "Indefinite",
    origin_tr: "Türkiye",
    origin_en: "Turkey",
    specs_tr: "360 Adet / Kutu",
    specs_en: "360 Cubes / Box"
  }
];"""

with open('assets/js/products.js', 'w', encoding='utf-8') as f:
    f.write(content + new_products)
