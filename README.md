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

## Default login (CHANGE IT)
- User name: `Dmurad` or email `didarmurad2019@gmail.com`
- Password: `Dmurad@1984`

## Add / change / disable a user
Edit `assets/auth/users.json`:
```
{ "username": "Name", "email": "name@email.com", "password": "Pass@123", "active": true }
```
Set `"active": false` to disable a user without deleting them.

## Security note
DEMO ONLY: GitHub Pages is static, so `users.json` is public to anyone who opens its URL, and passwords are visible in plain text. This login only hides the Bylaws link from casual visitors. Do not use real or reused passwords. For real protection use server-side authentication (Cloudflare Access, Firebase, Netlify Identity, or a private Pages site).
