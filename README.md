# TerraNexa Intelligence, LLC – GitHub Pages Website

## Structure
```
index.html            Main website (Home, About, Technologies, Solutions, Approach, Contact)
portal.html           Login portal (User Name / Email + Password)
bylaws.html           Protected Bylaws viewer (needs login)
404.html              Not-found page
json/bylaws.json      Bylaws link & title
assets/auth/users.json  Users (name, email, role, SHA-256 hash)
assets/css/style.css  Styles
assets/js/main.js     Navigation, animation, contact form
assets/js/auth.js     Login logic
assets/img/favicon.svg
```
## Deploy
Repo → Settings → Pages → Branch `main` / root → Save.

## Default logins (CHANGE THEM)
- admin@terranexa.com / TerraNexa@2026
- board@terranexa.com / Board@2026

## Add / change a user
Hash = SHA-256 of `email:password` (lowercase email):
```
printf '%s' "new@email.com:MyPassword" | sha256sum
```
Add `{ "name": "...", "email": "...", "role": "...", "hash": "..." }` to `assets/auth/users.json`.

## Security note
GitHub Pages is static, so this login is a front-end gate only: it hides the link from casual visitors but cannot truly protect it. The Bylaws URL is public if someone knows it. For real protection use a private repo/Pages (GitHub Enterprise), Cloudflare Access, or Netlify/Firebase auth.
