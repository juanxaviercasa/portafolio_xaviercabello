import os
from playwright.sync_api import sync_playwright

abs_dir = os.path.abspath('public/videos').replace('\\', '/')
v2_path = f"{abs_dir}/phoenix-scene-2.mp4"

html = f"""<!DOCTYPE html><html><body style="margin:0;background:black;"><video id="v" src="file:///{v2_path}" width="1280" height="720" muted playsinline></video></body></html>"""

with open('temp_poster2.html', 'w') as f:
    f.write(html)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1280, 'height': 720})
    file_url = 'file:///' + os.path.abspath('temp_poster2.html').replace('\\', '/')
    page.goto(file_url)
    page.wait_for_function("document.getElementById('v').readyState >= 2")
    page.evaluate("document.getElementById('v').currentTime = 0.1")
    page.wait_for_timeout(400)
    page.screenshot(path='public/images/phoenix-scene-2-poster.webp')
    print("Generated public/images/phoenix-scene-2-poster.webp")
    browser.close()

if os.path.exists('temp_poster2.html'):
    os.remove('temp_poster2.html')
