# Putting the site online at mariociampini.eu

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

Register **mariociampini.eu** at **easyname** (Austrian registrar). Eligibility: EU citizen or EU/EEA resident.

- Buy **only the domain**. You don't need web hosting, email, SSL certificates or website builders: GitHub Pages hosts the site and provides free HTTPS.
- Turn on **auto-renew** and check that the account email is one you read, so it doesn't expire again.
- Turn on **two-factor authentication for your easyname account login** (free, under account/security settings).
- WHOIS privacy isn't needed: the .eu registry does not publish private individuals' personal data.

## Step 3: Point the domain to GitHub (DNS records)

In easyname's **DNS settings** for `mariociampini.eu` (domain → DNS / DNS-Einträge), delete any default "parking" A/CNAME records and add:

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
Remove any default easyname records for `@` and `www` that point to a parking page, otherwise they conflict.

## Step 4: Verify the domain on GitHub (protects against takeover)

1. On GitHub: your profile picture → **Settings → Pages → Add a domain**, enter `mariociampini.eu`.
2. GitHub shows a **TXT** record (name like `_github-pages-challenge-MarioACiampini`). Add it in your DNS.
3. Click **Verify**. You can do this before or after Step 5.

## Step 5: Connect the domain to the site

1. In the repository: **Settings → Pages → Custom domain** → type `mariociampini.eu` → **Save**.
   GitHub creates a `CNAME` file in the repository automatically.
2. Wait for the DNS check to turn green (minutes to a few hours).
3. Tick **Enforce HTTPS**. The certificate can take up to 1 hour to be issued.
4. In `_config.yml`, set `url: "https://mariociampini.eu"` (this improves search previews).

Done: **https://mariociampini.eu** and **https://www.mariociampini.eu** both show your site.

---

## Step 6: Help people find you

- **Google Search Console** (https://search.google.com/search-console): add the property `mariociampini.eu`, verify it with a DNS TXT record, and submit `https://mariociampini.eu/sitemap.xml`. Google usually indexes a new site within days to a few weeks.
- Add the URL to your **ORCID** profile (*Websites & social links*), your **IQOQI/univie staff page**, your **GitHub profile**, email signature and slides.
- Link back from Google Scholar and LinkedIn, if you create profiles later.

## Troubleshooting

| Problem | Fix |
|---|---|
| "Domain does not resolve to the GitHub Pages server" | DNS not propagated yet. Wait, and check at https://dnschecker.org |
| "Enforce HTTPS" is greyed out | Wait up to 1 hour after DNS turns green; check no old parking records remain |
| Site shows 404 | Check that Settings → Pages points to branch `main`, folder `/ (root)` |
| Changes don't appear | Check the **Actions** tab for a failed build; usually a typo in a `.yml` file (indentation!) |
