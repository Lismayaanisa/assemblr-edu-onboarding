"""Static server for the prototype with live reload.

Serves this folder with caching off, and answers /__version with the latest
change time of the files, which live-reload.js polls to refresh open pages.
"""
import json
import os
import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.dirname(os.path.abspath(__file__))
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
SKIP_DIRS = {".git", "node_modules", "__pycache__"}


def latest_mtime(paths):
    return max((os.stat(p).st_mtime_ns for p in paths if os.path.exists(p)), default=0)


def versions():
    css, code = [], []
    for base, dirs, files in os.walk(ROOT):
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS and not d.startswith(".")]
        for name in files:
            if name.startswith(".") or name.endswith(".py"):
                continue
            (css if name.endswith(".css") else code).append(os.path.join(base, name))
    return {"css": latest_mtime(css), "code": latest_mtime(code)}


class Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def do_GET(self):
        if self.path.split("?")[0] == "/__version":
            body = json.dumps(versions()).encode()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        super().do_GET()

    def log_message(self, fmt, *args):
        if "/__version" not in (args[0] if args else ""):
            super().log_message(fmt, *args)


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", PORT), partial(Handler, directory=ROOT))
    print(f"Serving {ROOT} on http://127.0.0.1:{PORT} with live reload", flush=True)
    server.serve_forever()
