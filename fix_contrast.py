import re

with open('assets/css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

css = css.replace('background: var(--navy);\n  color: #fff;', 'background: #0f172a;\n  color: #fff;')

dark_overrides = """
[data-theme="dark"] .btn-primary,
[data-theme="dark"] .pill-btn.active,
[data-theme="dark"] .product-card:hover .btn-view {
  color: #0f172a !important;
}
[data-theme="dark"] .footer {
  background: #0f172a !important;
  color: #fff !important;
}
[data-theme="dark"] .footer * {
  color: #94a3b8;
}
[data-theme="dark"] .footer h4 {
  color: #fff;
}
"""

with open('assets/css/style.css', 'w', encoding='utf-8') as f:
    f.write(css + dark_overrides)

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace('background: var(--navy); color: white;', 'background: #0f172a; color: white;')
html = html.replace('color: var(--navy);', 'color: var(--navy, #0f172a);') # Failsafe
html = html.replace('?v=5.5', '?v=5.6')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print('Contrast fixed.')
