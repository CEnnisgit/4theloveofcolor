"""Pairwise near-duplicate check across prerendered pages.

Doorway pages are the real risk with service x city URLs, so measure the
overlap instead of trusting that the copy "feels" different. Shared chrome
(header/footer/nav) is stripped first, since every page legitimately shares it.
"""
import re
import io
import glob

def text(p):
    h = io.open(p, encoding="utf-8").read()
    h = re.sub(r"(?s)<script.*?</script>", " ", h)
    h = re.sub(r"(?s)<style.*?</style>", " ", h)
    h = re.sub(r"(?s)<header.*?</header>", " ", h)
    h = re.sub(r"(?s)<footer.*?</footer>", " ", h)
    h = re.sub(r"(?s)<!--.*?-->", " ", h)
    h = re.sub(r"<[^>]+>", " ", h)
    h = re.sub(r"&[a-z]+;|&#x?[0-9a-f]+;", " ", h, flags=re.I)
    return re.sub(r"\s+", " ", h).strip().lower()

def shingles(t, n=6):
    w = t.split()
    return {" ".join(w[i:i + n]) for i in range(max(0, len(w) - n + 1))}

pages = {}
for p in sorted(glob.glob("dist/**/index.html", recursive=True)):
    norm = p.replace("\\", "/")
    url = "/" + norm[len("dist/"):-len("/index.html")]
    pages[url if url != "/" else "/"] = shingles(text(p))

print("page                                           shingles  worst overlap with another page")
print("-" * 100)
worst_overall = 0.0
for u, s in sorted(pages.items()):
    best_u, best = None, 0.0
    for u2, s2 in pages.items():
        if u2 == u or not s or not s2:
            continue
        j = len(s & s2) / len(s | s2)
        if j > best:
            best, best_u = j, u2
    worst_overall = max(worst_overall, best)
    flag = "  <-- CHECK" if best > 0.35 else ""
    print(f"{u:<46} {len(s):>7}   {best * 100:5.1f}%  vs {best_u}{flag}")
print("-" * 100)
print(f"highest pairwise overlap anywhere: {worst_overall * 100:.1f}%")
