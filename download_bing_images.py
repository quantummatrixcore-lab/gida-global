import urllib.request
import urllib.parse
import re
import os

queries = {
    2: "biryag 5 lt teneke aycicek yagi",
    3: "torku toz seker 5 kg",
    4: "yayla kirmizi mercimek 2 kg",
    5: "duru baldo pirinc 2.5 kg",
    6: "tat domates salcasi 830 gr",
    7: "omo matik toz deterjan 10 kg",
    8: "fairy bulasik deterjani 5 lt",
    9: "domestos camasir suyu 5 lt",
    10: "activex sivi sabun 1.5 lt",
    11: "selpak kagit havlu 12 li",
    12: "asperox yuzey temizleyici 5 lt"
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}

for pid, q in queries.items():
    print(f"Searching for {q}")
    url = f"https://www.bing.com/images/search?q={urllib.parse.quote(q)}"
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode('utf-8')
            # Extract first image URL using regex
            match = re.search(r'murl&quot;:&quot;(http[^&]+)&quot;', html)
            if match:
                img_url = match.group(1)
                print(f"Found image: {img_url}")
                try:
                    img_req = urllib.request.Request(img_url, headers=headers)
                    with urllib.request.urlopen(img_req, timeout=10) as img_resp:
                        with open(f"assets/images/products/product_{pid}.jpg", 'wb') as f:
                            f.write(img_resp.read())
                    print(f"Saved product_{pid}.jpg")
                except Exception as e:
                    print(f"Error downloading {img_url}: {e}")
            else:
                print(f"No image found in HTML for {q}")
    except Exception as e:
        print(f"Error searching {q}: {e}")
