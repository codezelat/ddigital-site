import re

file_path = 'src/app/data/services.ts'

with open(file_path, 'r') as f:
    content = f.read()

# Add import if not present
if 'import { DEFAULT_BLUR_DATA_URL }' not in content:
    content = 'import { DEFAULT_BLUR_DATA_URL } from "./placeholders";\n' + content

# Regex to find blurUrl value
# It looks like: blurUrl:\n      "data:...",
# or blurUrl: "data:..."
pattern = r'blurUrl:\s*"data:image/[^"]*",'

replacement = 'blurUrl: DEFAULT_BLUR_DATA_URL,'

new_content = re.sub(pattern, replacement, content)

with open(file_path, 'w') as f:
    f.write(new_content)

print("Optimization complete.")
