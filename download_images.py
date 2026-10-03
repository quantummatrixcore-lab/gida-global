import urllib.request
import json
import re

queries = {
    1: "söke un 25 kg",
    2: "biryağ ayçiçek yağı 18 lt teneke",
    3: "torku toz şeker 50 kg",
    4: "yayla kırmızı mercimek 25 kg",
    5: "duru baldo pirinç 25 kg",
    6: "tukaş domates salçası 4300 gr",
    7: "omo matik toz deterjan 10 kg",
    8: "fairy bulaşık deterjanı 5 lt",
    9: "domestos çamaşır suyu 5 lt",
    10: "maratem sıvı el sabunu 5 lt",
    11: "focus z katlama havlu",
    12: "asperox yüzey temizleyici 5 lt"
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for pid, q in queries.items():
    print(f"Searching for product {pid}: {q}")
    url = f"https://public.trendyol.com/discovery-web-searchgw-service/v2/api/infinite-scroll/sr?q={urllib.parse.quote(q)}"
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            if data and 'result' in data and 'products' in data['result'] and len(data['result']['products']) > 0:
                img_path = data['result']['products'][0]['images'][0]
                img_url = f"https://cdn.dsmcdn.com/{img_path}"
                print(f"Found image: {img_url}")
                # Download image
                img_req = urllib.request.Request(img_url, headers=headers)
                with urllib.request.urlopen(img_req) as img_resp:
                    with open(f"assets/images/products/product_{pid}.jpg", 'wb') as f:
                        f.write(img_resp.read())
                print(f"Saved product_{pid}.jpg")
            else:
                print(f"No results for {q}")
    except Exception as e:
        print(f"Error for {q}: {e}")
