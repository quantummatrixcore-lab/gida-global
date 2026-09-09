document.addEventListener('DOMContentLoaded', () => {
  let currentLang = localStorage.getItem('gida_global_lang') || 'tr';
  let currentCategory = 'all';
  let selectedUnit = 'Koli (24\'lü)';

  const productsGrid = document.getElementById('products-grid');
  const searchInput = document.getElementById('search-input');
  const pillBtns = document.querySelectorAll('.pill-btn');
  const langToggleBtn = document.getElementById('lang-toggle');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const contactForm = document.getElementById('quote-form');

  // Modal Elements
  const modalOverlay = document.getElementById('product-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  // Theme Management
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

  // i18n Language Management
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('gida_global_lang', lang);
    langToggleBtn.textContent = lang === 'tr' ? 'EN 🇬🇧' : 'TR 🇹🇷';

    const dict = window.I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict && dict[key]) {
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

  // Render Products Bento Grid
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
      productsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; color: var(--text-muted);">
        <p style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</p>
        <p style="font-size: 1.1rem; font-weight: 700;">${currentLang === 'tr' ? 'Aramanıza uygun ürün bulunamadı.' : 'No products found matching your search.'}</p>
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

      const moq = currentLang === 'tr' ? item.moq_tr : item.moq_en;
      const waMsg = encodeURIComponent(`Merhaba Gıda Global, ${item.code} - ${name} ürünü hakkında fiyat teklifi ve detaylı bilgi almak istiyorum.`);
      const waUrl = `https://wa.me/905320623935?text=${waMsg}`;

      return `
        <div class="product-card">
          <div>
            <div class="product-img-wrapper">
              <img src="${item.image}" alt="${name}" class="product-img" loading="lazy" onerror="this.onerror=null; this.src='assets/images/logo.svg';">
              <div class="moq-tag">⚖️ ${moq}</div>
            </div>
            <div class="product-badges">
              ${categoryBadge}
              ${typeBadge}
            </div>
            <h3 class="product-title">${name}</h3>
            <p class="product-desc">${desc}</p>
          </div>
          <div>
            <div class="product-package">📦 ${pkg}</div>
            <div class="product-actions" style="display: flex; gap: 0.5rem;">
              <button onclick="openProductModal(${item.id})" class="btn btn-outline" style="flex: 1; padding: 0.6rem; font-size: 0.85rem;">
                🔍 ${dict.btn_quick_view || 'İncele'}
              </button>
              <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="flex: 1.2; padding: 0.6rem; font-size: 0.85rem;">
                💬 ${dict.btn_whatsapp_quote}
              </a>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Open Quick View Modal
  window.openProductModal = function(id) {
    const item = window.PRODUCTS.find(p => p.id === id);
    if (!item || !modalOverlay) return;

    const name = currentLang === 'tr' ? item.name_tr : item.name_en;
    const desc = currentLang === 'tr' ? item.desc_tr : item.desc_en;
    const pkg = currentLang === 'tr' ? item.package_tr : item.package_en;
    const origin = currentLang === 'tr' ? item.origin_tr : item.origin_en;
    const shelf = currentLang === 'tr' ? item.shelf_life_tr : item.shelf_life_en;
    const specs = currentLang === 'tr' ? item.specs_tr : item.specs_en;
    const moq = currentLang === 'tr' ? item.moq_tr : item.moq_en;

    const modalImg = document.getElementById('modal-img');
    if (modalImg) {
      modalImg.src = item.image;
      modalImg.alt = name;
    }

    const modalMoq = document.getElementById('modal-moq');
    if (modalMoq) modalMoq.textContent = `⚖️ ${moq}`;

    document.getElementById('modal-title').textContent = name;
    document.getElementById('modal-code').textContent = `KOD: ${item.code}`;
    document.getElementById('modal-desc').textContent = desc;
    document.getElementById('modal-pkg').textContent = pkg;
    document.getElementById('modal-origin').textContent = origin;
    document.getElementById('modal-shelf').textContent = shelf;
    document.getElementById('modal-specs').textContent = specs;

    updateModalWaButton(item.code, name, selectedUnit);

    modalOverlay.classList.add('active');
  };

  window.selectUnitOpt = function(btn, unitName) {
    document.querySelectorAll('.unit-opt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedUnit = unitName;
    
    const name = document.getElementById('modal-title').textContent;
    const code = document.getElementById('modal-code').textContent.replace('KOD: ', '');
    updateModalWaButton(code, name, selectedUnit);
  };

  function updateModalWaButton(code, name, unit) {
    const waBtn = document.getElementById('modal-wa-btn');
    if (!waBtn) return;
    const text = encodeURIComponent(`Merhaba Gıda Global, ${code} - ${name} ürünü için [ ${unit} ] biriminde B2B fiyat teklifi almak istiyorum.`);
    waBtn.href = `https://wa.me/905320623935?text=${text}`;
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.remove('active');
    });
  }

  // Filter Buttons Event Listener
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

  // Form Submit
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
