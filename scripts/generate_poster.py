import os
from playwright.sync_api import sync_playwright

abs_dir = os.path.abspath('public/videos').replace('\\', '/')
video_path = f"{abs_dir}/phoenix-rising-optimized.mp4"

html = f"""<!DOCTYPE html>
<html>
<body style="margin:0; background:black; overflow:hidden;">
  <video id="v" src="file:///{video_path}" width="1920" height="1080" muted playsinline></video>
</body>
</html>"""

with open('temp_poster.html', 'w', encoding='utf-8') as f:
    f.write(html)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1920, 'height': 1080})
    file_url = 'file:///' + os.path.abspath('temp_poster.html').replace('\\', '/')
    page.goto(file_url)
    page.wait_for_function("document.getElementById('v').readyState >= 2")
    
    # Seek to first visible frame (0.1s)
    page.evaluate("document.getElementById('v').currentTime = 0.1")
    page.wait_for_timeout(500)
    
    # Capture posters
    page.screenshot(path='public/images/phoenix-rising-poster.webp')
    page.screenshot(path='public/images/phoenix-rising-poster.jpg')
    print("Updated public/images/phoenix-rising-poster.webp and .jpg")
    
    browser.close()

if os.path.exists('temp_poster.html'):
    os.remove('temp_poster.html')
