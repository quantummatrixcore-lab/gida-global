with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

hamburger = '''
        <button id="mobile-menu-btn" style="display:none; background:none; border:none; color:var(--text-main); font-size:1.5rem; cursor:pointer;">
          &#9776;
        </button>
'''
content = content.replace('<div class="header-actions">', hamburger + '<div class="header-actions">')
content = content.replace('?v=5.4', '?v=5.5')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

js = '''
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.querySelector('.nav-links');
  if(mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-active');
    });
  }
'''
with open('assets/js/main.js', 'a', encoding='utf-8') as f:
    f.write(js)

css = '''
@media (max-width: 768px) {
  #mobile-menu-btn { display: block !important; margin-right: 1rem; }
  .nav-links {
    display: none !important;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background: var(--bg-glass);
    backdrop-filter: blur(10px);
    flex-direction: column;
    padding: 1rem;
    box-shadow: var(--shadow-md);
  }
  .nav-links.mobile-active { display: flex !important; }
}
'''
with open('assets/css/style.css', 'a', encoding='utf-8') as f:
    f.write(css)
