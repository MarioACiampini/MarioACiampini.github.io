# Putting the site online at mariociampini.com

Total time: about 20 minutes of clicking, plus up to a few hours of waiting for DNS.
Cost: only the domain (about €10–15 per year). GitHub Pages hosting and HTTPS are free.

---

## Step 1: Publish the site on GitHub (free)

1. Log in to GitHub as **MarioACiampini**.
2. Create a new repository named exactly **`MarioACiampini.github.io`**. Make it *Public* and leave it empty, with no README.
3. Upload the website files to it (or let Claude push them).
4. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, branch **`main`**, folder **`/ (root)`**, and click **Save**.
5. After 1–2 minutes the site is live at **https://marioaciampini.github.io**.

## Step 2: Buy the domain

`mariociampini.com` expired after your HostGator period and is **available again** (checked 12 Nov 2026).
Register it at any registrar. Recommended, cheap and with no upselling:

- **Cloudflare Registrar** (sells at cost, about $10.50/yr for .com, free privacy) at https://dash.cloudflare.com → *Domain Registration*
- **Porkbun** (about $11/yr, free WHOIS privacy) at https://porkbun.com
- **Namecheap** at https://namecheap.com

Tips:
- Turn on **auto-renew** so it doesn't expire again.
- Keep **WHOIS privacy** on (usually free).
- Don't buy hosting, email or "website builder" add-ons. You don't need them.

## Step 3: Point the domain to GitHub (DNS records)

In the registrar's **DNS settings** for `mariociampini.com`, delete any default "parking" A/CNAME records and add:

| Type  | Name / Host | Value |
|-------|-------------|-------|
| A     | `@`         | `185.199.108.153` |
| A     | `@`         | `185.199.109.153` |
| A     | `@`         | `185.199.110.153` |
| A     | `@`         | `185.199.111.153` |
| AAAA  | `@`         | `2606:50c0:8000::153` |
| AAAA  | `@`         | `2606:50c0:8001::153` |
| AAAA  | `@`         | `2606:50c0:8002::153` |
| AAAA  | `@`         | `2606:50c0:8003::153` |
| CNAME | `www`       | `marioaciampini.github.io` |

(`@` means the bare domain. Some registrars leave the field empty instead.)
On **Cloudflare**, set these records to **DNS only** (grey cloud), at least until HTTPS works.

## Step 4: Verify the domain on GitHub (protects against takeover)

1. On GitHub: your profile picture → **Settings → Pages → Add a domain**, enter `mariociampini.com`.
2. GitHub shows a **TXT** record (name like `_github-pages-challenge-MarioACiampini`). Add it in your DNS.
3. Click **Verify**. You can do this before or after Step 5.

## Step 5: Connect the domain to the site

1. In the repository: **Settings → Pages → Custom domain** → type `mariociampini.com` → **Save**.
   GitHub creates a `CNAME` file in the repository automatically.
2. Wait for the DNS check to turn green (minutes to a few hours).
3. Tick **Enforce HTTPS**. The certificate can take up to 1 hour to be issued.
4. In `_config.yml`, set `url: "https://mariociampini.com"` (this improves search previews).

Done: **https://mariociampini.com** and **https://www.mariociampini.com** both show your site.

---

## Step 6: Help people find you

- **Google Search Console** (https://search.google.com/search-console): add the property `mariociampini.com`, verify it with a DNS TXT record, and submit `https://mariociampini.com/sitemap.xml`. Google usually indexes a new site within days to a few weeks.
- Add the URL to your **ORCID** profile (*Websites & social links*), your **IQOQI/univie staff page**, your **GitHub profile**, email signature and slides.
- Link back from Google Scholar and LinkedIn, if you create profiles later.

## Troubleshooting

| Problem | Fix |
|---|---|
| "Domain does not resolve to the GitHub Pages server" | DNS not propagated yet. Wait, and check at https://dnschecker.org |
| "Enforce HTTPS" is greyed out | Wait up to 1 hour after DNS turns green; on Cloudflare make sure records are *DNS only* |
| Site shows 404 | Check that Settings → Pages points to branch `main`, folder `/ (root)` |
| Changes don't appear | Check the **Actions** tab for a failed build; usually a typo in a `.yml` file (indentation!) |
