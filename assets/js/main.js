/**
 * GLOBAL EXPORT - World Class B2B Catalog App
 * Handles: Theme Toggle (Dark/Light), i18n Translation (TR/EN), Catalog Search & Filter, Modal
 */

document.addEventListener('DOMContentLoaded', () => {
  // Current State
  let currentLang = localStorage.getItem('site_lang') || 'tr';
  let currentTheme = localStorage.getItem('site_theme') || 'light';

  // Apply saved theme on boot
  document.body.setAttribute('data-theme', currentTheme);
  document.documentElement.lang = currentLang;

  // DOM Elements
  const themeBtn = document.getElementById('theme-toggle');
  const langBtn = document.getElementById('lang-toggle');
  const productsGrid = document.getElementById('products-grid');
  const filterBtns = document.querySelectorAll('.filter-pills .pill-btn');
  const searchInput = document.getElementById('search-input');
  
  // Modal Elements
  const modal = document.getElementById('product-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const waBtn = document.getElementById('modal-wa-btn');

  // Update Theme Toggle Icon & Logic
  function updateThemeUI() {
    if (themeBtn) {
      themeBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    }
  }

  if (themeBtn) {
    updateThemeUI();
    themeBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', currentTheme);
      localStorage.setItem('site_theme', currentTheme);
      updateThemeUI();
    });
  }

  // Language Toggle & i18n Logic
  function updateLanguageUI() {
    if (langBtn) {
      langBtn.textContent = currentLang === 'tr' ? 'EN 🇬🇧' : 'TR 🇹🇷';
    }
    
    // Translate data-i18n elements
    if (window.I18N && window.I18N[currentLang]) {
      const dict = window.I18N[currentLang];
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
    }

    // Re-render catalog with translated names
    renderProducts(getActiveFilteredProducts());
  }

  if (langBtn) {
    updateLanguageUI();
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'tr' ? 'en' : 'tr';
      document.documentElement.lang = currentLang;
      localStorage.setItem('site_lang', currentLang);
      updateLanguageUI();
    });
  }

  function getActiveFilteredProducts() {
    const activeFilterBtn = document.querySelector('.filter-pills .pill-btn.active');
    const filter = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';
    const term = searchInput ? searchInput.value.toLowerCase() : '';

    return products.filter(p => {
      const name = currentLang === 'en' ? p.name_en.toLowerCase() : p.name_tr.toLowerCase();
      const desc = currentLang === 'en' ? p.desc_en.toLowerCase() : p.desc_tr.toLowerCase();
      const matchesSearch = name.includes(term) || desc.includes(term) || p.code.toLowerCase().includes(term);
      const matchesFilter = filter === 'all' || p.category === filter || p.type === filter || p.type === 'both';
      
      return matchesSearch && matchesFilter;
    });
  }

  // Render Product Catalog
  function renderProducts(data) {
    if (!productsGrid) return;
    productsGrid.innerHTML = '';
    
    if (!data || data.length === 0) {
      const emptyMsg = currentLang === 'en' ? 'No products found matching your search.' : 'Arama kriterlerine uygun ürün bulunamadı.';
      productsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">${emptyMsg}</div>`;
      return;
    }

    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'product-card';
      
      const isEn = currentLang === 'en';
      const name = isEn ? item.name_en : item.name_tr;
      const desc = isEn ? item.desc_en : item.desc_tr;
      const moq = isEn ? item.moq_en : item.moq_tr;
      const pkg = isEn ? item.package_en : item.package_tr;

      card.innerHTML = `
        <div class="product-img-wrapper">
          <img src="${item.image}" alt="${name}" class="product-img" loading="lazy">
          <div class="moq-tag">${moq}</div>
        </div>
        <div class="product-content">
          <div class="product-code">${item.code}</div>
          <h3 class="product-title">${name}</h3>
          <p class="product-desc">${desc}</p>
          <div class="product-meta">
            <div class="product-pkg">📦 ${pkg}</div>
            <button class="btn-view" onclick="openProductModal(${item.id})">
              ${isEn ? 'View Detail' : 'İncele'}
            </button>
          </div>
        </div>
      `;
      productsGrid.appendChild(card);
    });
  }

  // Initial Render
  renderProducts(products);

  // Search Input Event
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderProducts(getActiveFilteredProducts());
    });
  }

  // Filter Buttons Event
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(getActiveFilteredProducts());
    });
  });

  // Modal Open Logic
  window.openProductModal = function(id) {
    const item = products.find(p => p.id === id);
    if (!item) return;

    const isEn = currentLang === 'en';
    
    document.getElementById('modal-img').src = item.image;
    document.getElementById('modal-code').textContent = 'KOD: ' + item.code;
    document.getElementById('modal-title').textContent = isEn ? item.name_en : item.name_tr;
    document.getElementById('modal-desc').textContent = isEn ? item.desc_en : item.desc_tr;
    document.getElementById('modal-moq').textContent = isEn ? item.moq_en : item.moq_tr;
    
    document.getElementById('modal-pkg').textContent = isEn ? item.package_en : item.package_tr;
    document.getElementById('modal-origin').textContent = isEn ? item.origin_en : item.origin_tr;
    document.getElementById('modal-shelf').textContent = isEn ? item.shelf_en : item.shelf_life_tr;
    document.getElementById('modal-specs').textContent = isEn ? item.specs_en : item.specs_tr;

    // Reset unit selection
    document.querySelectorAll('.unit-opt').forEach(opt => opt.classList.remove('active'));
    document.querySelectorAll('.unit-opt')[1].classList.add('active');
    updateWaBtn(item, 'Koli');

    modal.classList.add('active');
  };

  window.selectUnitOpt = function(el, unit) {
    document.querySelectorAll('.unit-opt').forEach(opt => opt.classList.remove('active'));
    el.classList.add('active');
    
    const code = document.getElementById('modal-code').textContent;
    const title = document.getElementById('modal-title').textContent;
    const isEn = currentLang === 'en';
    
    const msg = isEn ?
      `Hello, I would like to get a wholesale quote for ${code} - ${title} based on ${unit}.` :
      `Merhaba, ${code} - ${title} ürünü için ${unit} bazında toptan fiyat teklifi almak istiyorum.`;

    waBtn.href = `https://wa.me/905320623935?text=${encodeURIComponent(msg)}`;
  };

  function updateWaBtn(item, unit) {
    const isEn = currentLang === 'en';
    const title = isEn ? item.name_en : item.name_tr;
    const msg = isEn ? 
      `Hello, I would like to get a wholesale quote for ${item.code} - ${title} based on ${unit}.` : 
      `Merhaba, ${item.code} - ${title} ürünü için ${unit} bazında toptan fiyat teklifi almak istiyorum.`;
      
    waBtn.href = `https://wa.me/905320623935?text=${encodeURIComponent(msg)}`;
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  // Quote Form Handler
  const quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      const phone = document.getElementById('form-phone').value;
      const cat = document.getElementById('form-category').value;
      const msg = document.getElementById('form-message').value;

      const text = `*Yeni B2B Fiyat Teklifi Talebi*\n\n*Firma/İsim:* ${name}\n*Telefon:* ${phone}\n*Kategori:* ${cat}\n*Detay:* ${msg}`;
      window.open(`https://wa.me/905320623935?text=${encodeURIComponent(text)}`, '_blank');
    });
  }
});
