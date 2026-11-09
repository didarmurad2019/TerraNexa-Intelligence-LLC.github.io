# Add or update a portal user in assets/users.json (passwords are stored only as salted SHA-256 hashes).
# Usage: python tools/add_user.py "Full Name" email@domain.com username 'Password' [role]
import sys, json, hashlib, secrets, os
if len(sys.argv) < 5: sys.exit(__doc__)
name, email, user, pw = sys.argv[1:5]; role = sys.argv[5] if len(sys.argv) > 5 else "member"
p = os.path.join(os.path.dirname(__file__), "..", "assets", "users.json")
d = json.load(open(p)) if os.path.exists(p) else {"users": []}
salt = secrets.token_hex(16)
rec = {"name": name, "email": email, "username": user, "role": role, "salt": salt,
       "hash": hashlib.sha256((salt + pw).encode()).hexdigest()}
d["users"] = [u for u in d["users"] if u["email"].lower() != email.lower()] + [rec]
json.dump(d, open(p, "w"), indent=2); print("Saved", email)
