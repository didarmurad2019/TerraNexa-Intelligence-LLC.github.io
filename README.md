# TerraNexa Intelligence, LLC — Website

A responsive, static homepage for **TerraNexa Intelligence, LLC** and **EIAS Lab — Environmental AI**.

**Tagline:** *Intelligent Systems for a Smarter Planet.*

## Project structure

```text
terranexa-website/
├── index.html
├── README.md
└── assets/
    ├── favicon.svg
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    └── images/
        ├── terranexa-logo.png
        └── terranexa-logo.svg
```

## Preview locally

No build tools or package installation are required.

1. Download and extract the project ZIP.
2. Open `index.html` in a browser, or use a local static server (recommended).
3. For example, if Python is installed, run `python -m http.server 8000` from this directory and open `http://localhost:8000`.

The Google Fonts stylesheet is optional; if the visitor is offline, the page uses the specified sans-serif fallbacks.

## Deploy to GitHub Pages

1. Create a GitHub repository for the site. For a user/organization site, the repository is usually named `YOUR-USERNAME.github.io`. For a project site, any repository name is fine.
2. Upload the contents of this folder to the repository root. Make sure `index.html` is at the root, not inside an extra nested folder.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)`, then save.
6. Wait for the Pages deployment to finish. The published URL will be shown in Settings → Pages.

All asset paths are relative, so the page works on a standard GitHub Pages project site without a custom build step.

## Before publishing

- **Replace the example contact address.** In `index.html`, find `hello@terranexa.example` and replace it with an official monitored email address. The `.example` address is intentionally a placeholder and cannot receive messages.
- **Confirm company details.** Review all wording to ensure the capability descriptions accurately represent current plans and services.
- **Optional SEO updates.** Once the final domain is known, add a canonical URL and update the Open Graph image metadata if needed.
- **Custom domain (optional).** Configure the domain in GitHub Pages settings and add the required DNS records with your domain provider.
- The supplied logo is included as `assets/images/terranexa-logo.png`. The SVG file is a scalable wrapper that references the PNG so the approved artwork remains unchanged. Keep both files in the same directory.

## Design and accessibility notes

- Responsive layouts for desktop, tablet, and mobile.
- Mobile navigation with keyboard Escape support.
- Semantic landmarks, descriptive image text, a skip link, and reduced-motion support.
- No external JavaScript libraries or build dependencies.

## Brand

- **Company:** TerraNexa Intelligence, LLC
- **Lab:** EIAS Lab — Environmental AI
- **Meaning:** “Terra” evokes Earth and the environment; “Nexa” suggests connection and next-generation systems.
- **Focus:** Environmental AI, autonomous monitoring, geospatial intelligence, climate analytics, and ecological technologies.
- **Tagline:** *Intelligent Systems for a Smarter Planet.*
