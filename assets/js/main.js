document.addEventListener('DOMContentLoaded', () => {
  let currentLang = localStorage.getItem('gida_global_lang') || 'tr';
  let currentCategory = 'all';

  const productsGrid = document.getElementById('products-grid');
  const searchInput = document.getElementById('search-input');
  const pillBtns = document.querySelectorAll('.pill-btn');
  const langToggleBtn = document.getElementById('lang-toggle');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const contactForm = document.getElementById('quote-form');

  const savedTheme = localStorage.getItem('gida_global_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('gida_global_theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    themeToggleBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
  }

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('gida_global_lang', lang);
    langToggleBtn.textContent = lang === 'tr' ? 'EN 🇬🇧' : 'TR 🇹🇷';

    const dict = window.I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    renderProducts();
  }

  langToggleBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'tr' ? 'en' : 'tr';
    applyLanguage(nextLang);
  });

  function renderProducts() {
    if (!productsGrid) return;
    const query = (searchInput.value || '').toLowerCase().trim();
    const dict = window.I18N[currentLang];

    const filtered = window.PRODUCTS.filter(item => {
      const name = currentLang === 'tr' ? item.name_tr : item.name_en;
      const desc = currentLang === 'tr' ? item.desc_tr : item.desc_en;
      
      const matchesCategory = 
        currentCategory === 'all' ? true :
        currentCategory === 'gida' ? item.category === 'gida' :
        currentCategory === 'temizlik' ? item.category === 'temizlik' :
        currentCategory === 'toptan' ? (item.type === 'toptan' || item.type === 'both') :
        currentCategory === 'perakende' ? (item.type === 'perakende' || item.type === 'both') : true;

      const matchesSearch = !query || name.toLowerCase().includes(query) || desc.toLowerCase().includes(query) || item.code.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      productsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <p style="font-size: 1.5rem; margin-bottom: 0.5rem;">🔍</p>
        <p>${currentLang === 'tr' ? 'Aramanıza uygun ürün bulunamadı.' : 'No products found matching your search.'}</p>
      </div>`;
      return;
    }

    productsGrid.innerHTML = filtered.map(item => {
      const name = currentLang === 'tr' ? item.name_tr : item.name_en;
      const desc = currentLang === 'tr' ? item.desc_tr : item.desc_en;
      const pkg = currentLang === 'tr' ? item.package_tr : item.package_en;
      
      const categoryBadge = item.category === 'gida' ? 
        `<span class="badge badge-gida">${dict.badge_gida}</span>` : 
        `<span class="badge badge-temizlik">${dict.badge_temizlik}</span>`;

      const typeBadge = item.type === 'toptan' ? 
        `<span class="badge badge-toptan">${dict.badge_toptan}</span>` : 
        item.type === 'perakende' ? `<span class="badge badge-perakende">${dict.badge_perakende}</span>` :
        `<span class="badge badge-toptan">${dict.badge_toptan}</span> <span class="badge badge-perakende">${dict.badge_perakende}</span>`;

      const waMsg = encodeURIComponent(`Merhaba Gıda Global, ${item.code} - ${name} ürünü hakkında fiyat teklifi ve detaylı bilgi almak istiyorum.`);
      const waUrl = `https://wa.me/905320623935?text=${waMsg}`;

      return `
        <div class="product-card">
          <div>
            <div class="product-badges">
              ${categoryBadge}
              ${typeBadge}
            </div>
            <div class="product-icon">${item.icon}</div>
            <h3 class="product-title">${name}</h3>
            <p class="product-desc">${desc}</p>
          </div>
          <div>
            <div class="product-package">📦 ${pkg}</div>
            <div class="product-actions">
              <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="width: 100%;">
                💬 ${dict.btn_whatsapp_quote}
              </a>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  pillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      pillBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      renderProducts();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', renderProducts);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value.trim();
      const phone = document.getElementById('form-phone').value.trim();
      const category = document.getElementById('form-category').value;
      const message = document.getElementById('form-message').value.trim();

      const text = `*YENİ TOPTAN/PERAKENDE TEKLİF TALEBİ*

` +
                   `👤 *Müşteri/Firma:* ${name}
` +
                   `📞 *Telefon:* ${phone}
` +
                   `📦 *Kategori:* ${category}
` +
                   `📝 *Mesaj/Detay:* ${message}`;

      const waUrl = `https://wa.me/905320623935?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');
    });
  }

  applyLanguage(currentLang);
});
