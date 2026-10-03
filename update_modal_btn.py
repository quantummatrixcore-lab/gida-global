import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(
    r'<a id="modal-wa-btn"[^>]*>.*?</a>',
    '<button id="modal-wa-btn" class="btn btn-primary" style="width: 100%; justify-content: center;">🛒 Sepete Ekle</button>',
    content,
    flags=re.DOTALL
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
