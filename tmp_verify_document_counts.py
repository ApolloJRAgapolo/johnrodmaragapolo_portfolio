from pathlib import Path
import re

text = Path('lib/data/documents.ts').read_text(encoding='utf-8')
start = text.index('const baseDocumentCollections = {')
brace_depth = 0
end = None
for i, ch in enumerate(text[start:], start=start):
    if ch == '{':
        brace_depth += 1
    elif ch == '}':
        brace_depth -= 1
        if brace_depth == 0:
            end = i
            break
if end is None:
    raise SystemExit('Could not find end of baseDocumentCollections object')

block = text[start:end + 1]
collection_regex = re.compile(r"\n  ([a-zA-Z0-9_-]+): \{")
keys = [match.group(1) for match in collection_regex.finditer(block)]

counts = {}
for i, name in enumerate(keys):
    start_idx = block.index(f"{name}: {{")
    end_idx = block.index(f"{keys[i + 1]}: {{") if i + 1 < len(keys) else len(block)
    collection_text = block[start_idx:end_idx]
    items_index = collection_text.index('items: [') if 'items: [' in collection_text else -1
    if items_index == -1:
        counts[name] = 0
        continue

    bracket_depth = 0
    in_string = False
    escape = False
    items_start = collection_text.index('[', items_index)
    items_end = None
    for j, ch in enumerate(collection_text[items_start:], start=items_start):
        if in_string:
            if escape:
                escape = False
            elif ch == '\\':
                escape = True
            elif ch == '"':
                in_string = False
            continue
        if ch == '"':
            in_string = True
            continue
        if ch == '[':
            bracket_depth += 1
        elif ch == ']':
            bracket_depth -= 1
            if bracket_depth == 0:
                items_end = j
                break
    if items_end is None:
        counts[name] = 0
        continue

    items_block = collection_text[items_start:items_end + 1]
    counts[name] = len(re.findall(r'\{\s*id:\s*"[^"]+"', items_block))

pending = counts.get('pending', 0)
verified = sum(v for k, v in counts.items() if k != 'pending')
total = verified + pending
print(counts)
print('total_verified=' + str(verified))
print('pending=' + str(pending))
print('total=' + str(total))
