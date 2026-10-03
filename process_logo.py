from PIL import Image
import shutil

source_image_path = r"C:\Users\ercum\.gemini\antigravity\brain\f803f2d8-fdec-437d-b997-ce91cba3039b\.user_uploaded\media_1791049147768.png"
logo_dest_path = r"d:\09_MEDYA\06_Gıda_Global\assets\images\logo.png"
favicon_dest_path = r"d:\09_MEDYA\06_Gıda_Global\assets\images\favicon.png"

# 1. Copy the main logo
shutil.copy2(source_image_path, logo_dest_path)

# 2. Create Favicon (Extract the globe part if possible, or just resize it to square)
try:
    img = Image.open(source_image_path)
    
    # The logo has a globe at the top. Let's crop the top half to make a nice square favicon.
    width, height = img.size
    # Guessing the globe is in the top center. 
    # Let's crop a square from the top center
    crop_size = int(width * 0.6)
    left = (width - crop_size) // 2
    top = int(height * 0.05)
    right = left + crop_size
    bottom = top + crop_size
    
    icon = img.crop((left, top, right, bottom))
    icon = icon.resize((64, 64), Image.Resampling.LANCZOS)
    icon.save(favicon_dest_path, "PNG")
    print("Logo and Favicon created successfully.")
except Exception as e:
    print(f"Error processing image: {e}")
    # Fallback: just resize the whole image
    img = Image.open(source_image_path)
    icon = img.resize((64, 64), Image.Resampling.LANCZOS)
    icon.save(favicon_dest_path, "PNG")
    print("Fallback favicon created.")
