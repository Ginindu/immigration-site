#!/bin/bash
# Helper script (not executed here) for moving HTML files into pages/
mkdir -p pages
mv *.html pages/
for f in pages/*.html; do
  sed -i 's/href="css\//href="..\/css\//g' "$f"
  sed -i 's/href="lib\//href="..\/lib\//g' "$f"
  sed -i 's/src="lib\//src="..\/lib\//g' "$f"
  sed -i 's/src="js\//src="..\/js\//g' "$f"
  sed -i 's/src="img\//src="..\/img\//g' "$f"
  sed -i 's/href="img\//href="..\/img\//g' "$f"
done