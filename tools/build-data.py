"""Turns data/onboarding-data.json into data.js so the page works without fetch.

The JSON is a copy of the setup-moment prototype's docs/tools/onboarding-data.json
(roles, use motivations, welcome slides, main feature, flow, and JTBD per slide).
Edit the JSON, then run:
    python3 tools/build-data.py
"""
import json
import os

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
data = json.load(open(os.path.join(ROOT, "data", "onboarding-data.json"), encoding="utf-8"))
out = "window.OB_DATA = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n"
open(os.path.join(ROOT, "data.js"), "w", encoding="utf-8").write(out)
print(f"Wrote data.js ({sum(len(r['motivations']) for r in data)} use motivations)")
