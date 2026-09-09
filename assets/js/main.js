/**
 * GLOBAL EXPORT - World Class B2B Catalog App
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const productsGrid = document.getElementById('products-grid');
  const filterBtns = document.querySelectorAll('.filter-pills .pill-btn');
  const searchInput = document.getElementById('search-input');
  
  // Modal Elements
  const modal = document.getElementById('product-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const waBtn = document.getElementById('modal-wa-btn');

  // Load Products
  function renderProducts(data) {
    if (!productsGrid) return;
    productsGrid.innerHTML = '';
    
    if (data.length === 0) {
      productsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">Arama kriterlerine uygun ürün bulunamadı.</div>`;
      return;
    }

    data.forEach(item => {
      // Create modern card
      const card = document.createElement('div');
      card.className = 'product-card';
      
      const isEn = document.documentElement.lang === 'en';
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
          <p class="product-desc">${desc.substring(0, 90)}...</p>
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

  // Search functionality
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      const isEn = document.documentElement.lang === 'en';
      
      const filtered = products.filter(p => {
        const name = isEn ? p.name_en.toLowerCase() : p.name_tr.toLowerCase();
        const desc = isEn ? p.desc_en.toLowerCase() : p.desc_tr.toLowerCase();
        return name.includes(term) || desc.includes(term) || p.code.toLowerCase().includes(term);
      });
      renderProducts(filtered);
    });
  }

  // Filtering
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      if (filter === 'all') {
        renderProducts(products);
      } else {
        const filtered = products.filter(p => p.category === filter || p.type === filter || p.type === 'both');
        renderProducts(filtered);
      }
    });
  });

  // Modal logic attached to window for inline onclick
  window.openProductModal = function(id) {
    const item = products.find(p => p.id === id);
    if (!item) return;

    const isEn = document.documentElement.lang === 'en';
    
    document.getElementById('modal-img').src = item.image;
    document.getElementById('modal-code').textContent = 'KOD: ' + item.code;
    document.getElementById('modal-title').textContent = isEn ? item.name_en : item.name_tr;
    document.getElementById('modal-desc').textContent = isEn ? item.desc_en : item.desc_tr;
    document.getElementById('modal-moq').textContent = isEn ? item.moq_en : item.moq_tr;
    
    document.getElementById('modal-pkg').textContent = isEn ? item.package_en : item.package_tr;
    document.getElementById('modal-origin').textContent = isEn ? item.origin_en : item.origin_tr;
    document.getElementById('modal-shelf').textContent = isEn ? item.shelf_en : item.shelf_life_tr;
    document.getElementById('modal-specs').textContent = isEn ? item.specs_en : item.specs_tr;

    // Reset unit selections
    document.querySelectorAll('.unit-opt').forEach(opt => opt.classList.remove('active'));
    document.querySelectorAll('.unit-opt')[1].classList.add('active'); // default to Koli/Carton
    window.currentUnit = 'Koli';
    updateWaBtn(item, 'Koli');

    modal.classList.add('active');
  };

  window.selectUnitOpt = function(el, unit) {
    document.querySelectorAll('.unit-opt').forEach(opt => opt.classList.remove('active'));
    el.classList.add('active');
    window.currentUnit = unit;
    
    // Update WA link
    const title = document.getElementById('modal-title').textContent;
    const code = document.getElementById('modal-code').textContent;
    const msg = encodeURIComponent(`Merhaba, ${code} - ${title} ürünü için ${unit} bazında toptan fiyat teklifi almak istiyorum.`);
    waBtn.href = `https://wa.me/905320623935?text=${msg}`;
  };

  function updateWaBtn(item, unit) {
    const isEn = document.documentElement.lang === 'en';
    const title = isEn ? item.name_en : item.name_tr;
    const baseMsg = isEn ? 
      `Hello, I would like to get a wholesale quote for ${item.code} - ${title} based on ${unit}.` : 
      `Merhaba, ${item.code} - ${title} ürünü için ${unit} bazında toptan fiyat teklifi almak istiyorum.`;
      
    waBtn.href = `https://wa.me/905320623935?text=${encodeURIComponent(baseMsg)}`;
  }

  // Close modal
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  // Quote form submission
  const quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      const phone = document.getElementById('form-phone').value;
      const cat = document.getElementById('form-category').value;
      const msg = document.getElementById('form-message').value;

      const text = `*Yeni Fiyat Teklifi Talebi*\n\n*Firma/İsim:* ${name}\n*Telefon:* ${phone}\n*Kategori:* ${cat}\n*Detay:* ${msg}`;
      window.open(`https://wa.me/905320623935?text=${encodeURIComponent(text)}`, '_blank');
    });
  }
});
