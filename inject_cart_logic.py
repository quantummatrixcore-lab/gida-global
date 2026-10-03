import re

with open('assets/js/main.js', 'r', encoding='utf-8') as f:
    js = f.read()

cart_logic = """
  // Quote Cart Logic (Evre 2)
  let quoteCart = JSON.parse(localStorage.getItem('gg_cart')) || [];
  const cartBtn = document.getElementById('floating-cart-btn');
  const cartCount = document.getElementById('floating-cart-count');
  const cartDisplay = document.getElementById('cart-count-display');
  const cartSidebar = document.getElementById('cart-sidebar');
  const cartClose = document.getElementById('cart-close-btn');
  const cartItems = document.getElementById('cart-items');
  const checkoutBtn = document.getElementById('cart-checkout-btn');

  function updateCartUI() {
    if(cartCount) cartCount.textContent = quoteCart.length;
    if(cartDisplay) cartDisplay.textContent = quoteCart.length;
    
    if(checkoutBtn) checkoutBtn.disabled = quoteCart.length === 0;
    
    if(cartItems) {
      if(quoteCart.length === 0) {
        cartItems.innerHTML = `<div style="color: var(--text-muted); text-align: center; margin-top: 2rem; font-size: 0.9rem;">Sepetiniz boş. Ürün ekleyerek teklif isteyebilirsiniz.</div>`;
      } else {
        cartItems.innerHTML = quoteCart.map((item, index) => `
          <div style="display:flex; align-items:center; gap:1rem; padding: 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); background: var(--bg-card);">
            <img src="${item.image}" style="width:50px; height:50px; object-fit:contain; border-radius: var(--radius-sm);">
            <div style="flex:1;">
              <div style="font-size:0.85rem; font-weight:800; color:var(--navy);">${item.name}</div>
              <div style="font-size:0.75rem; color:var(--text-muted);">${item.unit}</div>
            </div>
            <button onclick="removeFromCart(${index})" style="background:none; border:none; color:#ef4444; font-size:1.2rem; cursor:pointer;">&times;</button>
          </div>
        `).join('');
      }
    }
  }

  window.addToCart = function(product, unit) {
    quoteCart.push({ ...product, unit });
    localStorage.setItem('gg_cart', JSON.stringify(quoteCart));
    updateCartUI();
    // Add brief animation
    if(cartBtn) {
      cartBtn.style.transform = 'scale(1.2)';
      setTimeout(() => cartBtn.style.transform = 'scale(1)', 200);
    }
  };

  window.removeFromCart = function(index) {
    quoteCart.splice(index, 1);
    localStorage.setItem('gg_cart', JSON.stringify(quoteCart));
    updateCartUI();
  };

  if(cartBtn) cartBtn.addEventListener('click', () => cartSidebar.classList.add('active'));
  if(cartClose) cartClose.addEventListener('click', () => cartSidebar.classList.remove('active'));
  
  if(checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      let msg = "Merhaba, aşağıdaki ürünler için toptan fiyat teklifi almak istiyorum:%0A%0A";
      quoteCart.forEach(item => {
        msg += `- ${item.code} | ${item.name} (${item.unit})%0A`;
      });
      window.open(`https://wa.me/905320623935?text=${msg}`, '_blank');
      cartSidebar.classList.remove('active');
      quoteCart = [];
      localStorage.setItem('gg_cart', JSON.stringify(quoteCart));
      updateCartUI();
    });
  }

  // Initialize cart
  updateCartUI();
"""

# Replace modal logic to show "Add to Cart" instead of opening WhatsApp directly
js = js.replace("""window.selectUnitOpt = function(el, unit) {
    document.querySelectorAll('.unit-opt').forEach(opt => opt.classList.remove('active'));
    el.classList.add('active');
    
    const code = document.getElementById('modal-code').textContent;
    const title = document.getElementById('modal-title').textContent;
    const isEn = currentLang === 'en';
    
    const msg = isEn ?
      `Hello, I would like to get a wholesale quote for ${code} - ${title} based on ${unit}.` :
      `Merhaba, ${code} - ${title} ürünü için ${unit} bazında toptan fiyat teklifi almak istiyorum.`;

    waBtn.href = `https://wa.me/905320623935?text=${encodeURIComponent(msg)}`;
  };""", 
  """
  let currentActiveProduct = null;
  let currentActiveUnit = 'Koli';

  window.selectUnitOpt = function(el, unit) {
    document.querySelectorAll('.unit-opt').forEach(opt => opt.classList.remove('active'));
    el.classList.add('active');
    currentActiveUnit = unit;
  };
  """)

js = js.replace("""    // Reset unit selection
    document.querySelectorAll('.unit-opt').forEach(opt => opt.classList.remove('active'));
    document.querySelectorAll('.unit-opt')[1].classList.add('active');
    updateWaBtn(item, 'Koli');""",
  """    // Reset unit selection
    currentActiveProduct = item;
    currentActiveUnit = 'Koli';
    document.querySelectorAll('.unit-opt').forEach(opt => opt.classList.remove('active'));
    document.querySelectorAll('.unit-opt')[1].classList.add('active');""")

js = js.replace("""  function updateWaBtn(item, unit) {
    const isEn = currentLang === 'en';
    const title = isEn ? item.name_en : item.name_tr;
    const msg = isEn ? 
      `Hello, I would like to get a wholesale quote for ${item.code} - ${title} based on ${unit}.` : 
      `Merhaba, ${item.code} - ${title} ürünü için ${unit} bazında toptan fiyat teklifi almak istiyorum.`;
      
    waBtn.href = `https://wa.me/905320623935?text=${encodeURIComponent(msg)}`;
  }""", "")

# Override waBtn click to add to cart
js = js.replace("""  if (closeBtn) {""", 
  """
  if(waBtn) {
    waBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const isEn = currentLang === 'en';
      const prodToCart = {
        code: currentActiveProduct.code,
        name: isEn ? currentActiveProduct.name_en : currentActiveProduct.name_tr,
        image: currentActiveProduct.image
      };
      addToCart(prodToCart, currentActiveUnit);
      modal.classList.remove('active');
    });
  }

  if (closeBtn) {""")

# Change waBtn text
js = js.replace("""💬 WhatsApp ile Özel Fiyat Teklifi Al""", """🛒 Teklif Sepetine Ekle""")

with open('assets/js/main.js', 'w', encoding='utf-8') as f:
    f.write(js + "\n" + cart_logic)

print("Cart logic added to main.js")
