#!/bin/bash
set -e

BASE_URL="https://weiterbildung.iwpro.de/pluginfile.php/20174/mod_scorm/content/8/res/data"
COOKIE="MoodleSession=u1t7mbmrsvctcnisit633b910q; MOODLEID1_=%253E%2513%251B%25A4%25B3%25F6%25E1%25C3%25FD%257EooP%25E5%25CE%255C%2560"
IMG_DIR="images"
OUTPUT_PDF="lca_schulung.pdf"

mkdir -p "$IMG_DIR"

echo "Downloading images 1-361..."
for i in $(seq 1 361); do
  FILE="$IMG_DIR/img${i}.png"
  if [ -f "$FILE" ]; then
    echo "  img${i}.png already exists, skipping"
    continue
  fi
  echo "  Downloading img${i}.png..."
  curl -s -o "$FILE" \
    "${BASE_URL}/img${i}.png" \
    -b "$COOKIE" \
    -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36' \
    -H 'accept: image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'

  # Check if download succeeded (file should be > 0 bytes)
  if [ ! -s "$FILE" ]; then
    echo "    WARNING: img${i}.png is empty, removing"
    rm -f "$FILE"
  fi
done

echo ""
echo "Downloaded $(ls "$IMG_DIR"/*.png 2>/dev/null | wc -l | tr -d ' ') images."
echo ""

# Generate PDF using ImageMagick (convert/magick)
echo "Generating PDF..."
if command -v magick &>/dev/null; then
  magick "$IMG_DIR"/img{1..361}.png "$OUTPUT_PDF" 2>/dev/null || \
  magick $(for i in $(seq 1 361); do [ -f "$IMG_DIR/img${i}.png" ] && echo "$IMG_DIR/img${i}.png"; done) "$OUTPUT_PDF"
elif command -v convert &>/dev/null; then
  convert $(for i in $(seq 1 361); do [ -f "$IMG_DIR/img${i}.png" ] && echo "$IMG_DIR/img${i}.png"; done) "$OUTPUT_PDF"
else
  echo "ERROR: ImageMagick not found. Install with: brew install imagemagick"
  echo "Then re-run this script."
  exit 1
fi

echo "Done! PDF saved as $OUTPUT_PDF"
