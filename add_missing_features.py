import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Add Hakkımızda link to nav
nav_link = '<li><a href="#about" class="nav-link" data-i18n="nav_about">Hakkımızda</a></li>'
html = html.replace('<li><a href="#catalog"', nav_link + '\n          <li><a href="#catalog"')

# 2. Add Hakkımızda section before Catalog
about_section = """
  <!-- About Us Section -->
  <section id="about" class="why-section" style="background: var(--bg-main);">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title" data-i18n="about_title">Hakkımızda</h2>
        <p class="section-sub" data-i18n="about_text_1">Gıda Global, temel gıda ve endüstriyel/evsel temizlik ürünleri alanında toptan ve perakende tedarik hizmeti sunan öncü bir markadır. Oteller, restoranlar, marketler, yemekhaneler ve bireysel tüketiciler için en kaliteli ürünleri en uygun fiyatlarla ulaştırmayı ilke edindik.</p>
        <p class="section-sub" style="margin-top: 1rem;" data-i18n="about_text_2">Geniş ürün yelpazemiz, kesintisiz stok imkanımız ve uzman kadromuz ile ticaretinizi büyütmenize destek oluyoruz.</p>
      </div>
    </div>
  </section>
"""
html = html.replace('<!-- Catalog Section -->', about_section + '\n  <!-- Catalog Section -->')

# 3. Add Exchange Rate API logic to main.js
js_append = """
  // Live Currency Ticker
  fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
      const tryRate = data.rates.TRY.toFixed(2);
      const eurRate = (data.rates.TRY / data.rates.EUR).toFixed(2);
      const ticker = document.querySelector('.ticker-content');
      if(ticker) {
        ticker.innerHTML = `💵 USD/TRY: ${tryRate} &nbsp;&bull;&nbsp; 💶 EUR/TRY: ${eurRate} &nbsp;&bull;&nbsp; ` + ticker.innerHTML;
      }
    }).catch(e => console.log('Currency API failed', e));
"""

with open('assets/js/main.js', 'a', encoding='utf-8') as f:
    f.write(js_append)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
