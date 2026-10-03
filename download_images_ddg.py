import os
import urllib.request
from duckduckgo_search import DDGS

queries = {
    1: "söke un 5 kg kraft", # Use 5kg as it looks like 25kg usually, or just "un 25 kg kraft"
    2: "biryağ 18 lt teneke",
    3: "torku toz şeker 50 kg çuval",
    4: "yayla kırmızı mercimek 25 kg çuval",
    5: "duru baldo pirinç 25 kg",
    6: "tat domates salçası 4300 gr",
    7: "omo matik toz deterjan 10 kg profesyonel",
    8: "fairy profesyonel bulaşık deterjanı 5 lt",
    9: "domestos profesyonel çamaşır suyu 5 lt",
    10: "maratem sıvı el sabunu 5 lt",
    11: "selpak z katlama havlu koli",
    12: "asperox yüzey temizleyici 5 lt"
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
ddgs = DDGS()

for pid, q in queries.items():
    print(f"Searching for product {pid}: {q}")
    results = list(ddgs.images(q, max_results=3))
    
    success = False
    for res in results:
        img_url = res.get('image')
        if not img_url:
            continue
            
        print(f"Found image: {img_url}")
        try:
            req = urllib.request.Request(img_url, headers=headers)
            with urllib.request.urlopen(req, timeout=10) as img_resp:
                with open(f"assets/images/products/product_{pid}.jpg", 'wb') as f:
                    f.write(img_resp.read())
            print(f"Saved product_{pid}.jpg")
            success = True
            break # Stop trying other images if one succeeds
        except Exception as e:
            print(f"Error downloading {img_url}: {e}")
            
    if not success:
        print(f"Failed to download any image for {q}")
