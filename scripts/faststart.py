import struct
import os

def faststart(input_path, output_path):
    print(f"Optimizing {input_path} for fast-start web streaming...")
    with open(input_path, 'rb') as f:
        # Read atoms
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
            
    print("Found atoms:", [(a[0], a[2]) for a in atoms])
    
    # Locate ftyp, moov, mdat
    ftyp = [a for a in atoms if a[0] == 'ftyp']
    moov = [a for a in atoms if a[0] == 'moov']
    mdat = [a for a in atoms if a[0] == 'mdat']
    
    if not moov or not mdat:
        print("Error: moov or mdat not found")
        return False
        
    moov_atom = moov[0]
    mdat_atom = mdat[0]
    
    # If moov is already before mdat, nothing to do
    if moov_atom[1] < mdat_atom[1]:
        print("moov is already before mdat. Already faststart!")
        return True
        
    with open(input_path, 'rb') as f:
        # Read moov data
        f.seek(moov_atom[1])
        moov_bytes = bytearray(f.read(moov_atom[2]))
        
    # Patch chunk offsets in moov (stco / co64)
    # The shift is the size of moov
    shift = len(moov_bytes)
    
    # Also if there are other atoms between ftyp and mdat (e.g. uuid) that stay before mdat
    # The shift is simply shift = len(moov_bytes)
    
    # Find all stco and co64 in moov_bytes
    idx = 0
    stco_count = 0
    while idx < len(moov_bytes) - 8:
        if moov_bytes[idx:idx+4] == b'stco':
            # stco atom: 4 bytes length, 'stco', 1 byte version, 3 bytes flags, 4 bytes entry count
            entry_count = struct.unpack('>I', moov_bytes[idx+8:idx+12])[0]
            print(f"Found stco at {idx} with {entry_count} entries. Shifting by {shift} bytes...")
            offset_pos = idx + 12
            for i in range(entry_count):
                old_offset = struct.unpack('>I', moov_bytes[offset_pos:offset_pos+4])[0]
                new_offset = old_offset + shift
                moov_bytes[offset_pos:offset_pos+4] = struct.pack('>I', new_offset)
                offset_pos += 4
            stco_count += 1
            idx = offset_pos
        elif moov_bytes[idx:idx+4] == b'co64':
            entry_count = struct.unpack('>I', moov_bytes[idx+8:idx+12])[0]
            print(f"Found co64 at {idx} with {entry_count} entries. Shifting by {shift} bytes...")
            offset_pos = idx + 12
            for i in range(entry_count):
                old_offset = struct.unpack('>Q', moov_bytes[offset_pos:offset_pos+8])[0]
                new_offset = old_offset + shift
                moov_bytes[offset_pos:offset_pos+8] = struct.pack('>Q', new_offset)
                offset_pos += 8
            stco_count += 1
            idx = offset_pos
        else:
            idx += 1
            
    # Write output
    with open(input_path, 'rb') as f_in, open(output_path, 'wb') as f_out:
        # Write ftyp first
        if ftyp:
            f_in.seek(ftyp[0][1])
            f_out.write(f_in.read(ftyp[0][2]))
            
        # Write moov
        f_out.write(moov_bytes)
        
        # Write remaining atoms (like uuid, mdat, etc. except original moov and ftyp)
        for name, pos, size in atoms:
            if name not in ('ftyp', 'moov'):
                f_in.seek(pos)
                # Stream chunk by chunk to avoid RAM spike
                remaining = size
                chunk_size = 1024 * 1024 * 2 # 2MB chunks
                while remaining > 0:
                    read_len = min(remaining, chunk_size)
                    buf = f_in.read(read_len)
                    if not buf:
                        break
                    f_out.write(buf)
                    remaining -= len(buf)
                    
    print(f"Successfully created fast-start file at {output_path} ({os.path.getsize(output_path)} bytes)")
    return True

if __name__ == '__main__':
    faststart(
        'public/videos/Phoenix_rising_from_glowing_embers_20261017181512.mp4',
        'public/videos/phoenix-rising-optimized.mp4'
    )
