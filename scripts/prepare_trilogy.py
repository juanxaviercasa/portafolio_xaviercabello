import os, shutil, struct
from faststart import faststart

def ensure_faststart(src_path, dst_path):
    print(f"Processing {src_path} -> {dst_path}")
    # First check if faststart is needed
    with open(src_path, 'rb') as f:
        atoms = []
        while True:
            cur = f.tell()
            header = f.read(8)
            if len(header) < 8:
                break
            size, atom_type = struct.unpack('>I4s', header)
            name = atom_type.decode('latin1', 'replace')
            if size == 1:
                size = struct.unpack('>Q', f.read(8))[0]
            atoms.append((name, cur, size))
            if size == 0:
                break
            f.seek(cur + size)
            
    moov = [a for a in atoms if a[0] == 'moov']
    mdat = [a for a in atoms if a[0] == 'mdat']
    
    if moov and mdat and moov[0][1] < mdat[0][1]:
        print(f"  {src_path} is ALREADY faststart. Just copying.")
        shutil.copyfile(src_path, dst_path)
    else:
        print(f"  {src_path} needs faststart reordering.")
        faststart(src_path, dst_path)

# Scene 1: Embers Awakening
ensure_faststart(
    'out/videos/Phoenix_rising_from_glowing_embers_20261017181512.mp4',
    'public/videos/phoenix-scene-1.mp4'
)

# Scene 2: Ascending Roar
ensure_faststart(
    'public/videos/phoenix-rising-720p.mp4',
    'public/videos/phoenix-scene-2.mp4'
)

# Scene 3: Cosmic Flight
ensure_faststart(
    'public/videos/phoenix-hero.mp4',
    'public/videos/phoenix-scene-3.mp4'
)

print("All 3 scenes prepared in public/videos!")
