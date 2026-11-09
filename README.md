# TerraNexa Intelligence, LLC – Bylaws Portal
Live: https://didarmurad2019.github.io/TerraNexa-Intelligence-LLC-Bylaws.github.io/

## Structure
- `index.html` public home · `login.html` member portal · `bylaws.html` protected bylaws viewer
- `json/site.json` site URL, company name, session length, **navigation menu** (edit links here)
- `assets/users.json` portal accounts (salted SHA-256 hashes, no plain-text passwords)
- `docs/bylaws.md` bylaws source · `docs/TerraNexa-Bylaws.pdf` (rebuild: `python build_pdf.py`)
- `js/`, `style.css`, `assets/*.svg`, `tools/add_user.py`

## Users
    python tools/add_user.py "Full Name" email@domain.com username 'Password' member
Demo accounts (CHANGE OR DELETE BEFORE PUBLISHING): admin@terranexa.com / TerraNexa-Admin#2026 and member@terranexa.com / TerraNexa#2026

## Deploy
Upload all files to the repo root (main) → Settings → Pages → Deploy from branch.

## Security note
GitHub Pages is static hosting, so this login is a client-side gate, not true security: `docs/bylaws.md` and the PDF are still reachable by direct URL. For confidential bylaws, use a private host or an authenticated service.
