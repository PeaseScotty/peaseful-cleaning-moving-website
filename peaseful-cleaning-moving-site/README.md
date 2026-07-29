# Peaseful Cleaning N Moving Website

Static production website for Peaseful Cleaning N Moving.

## Project Overview

The site is a lightweight static build for cleaning, moving, packing, loading, hauling, move-out support, person-centered planning, disability-inclusive communication, reduced-cost inquiry language, and contact options.

Confirmed public details:

- Public brand: Peaseful Cleaning N Moving
- Phone: (406) 258-8558
- Phone URL: tel:+14062588558
- Email: peasefulcleaningmoving@gmail.com
- Email URL: mailto:peasefulcleaningmoving@gmail.com
- Website: https://peasefulcleaningmoving.com/
- Google Form: https://docs.google.com/forms/d/e/1FAIpQLSd6QsJS59XAuS-vF_X2EAfSVpB3HetuZB6QCgkYr1fngPyiOQ/viewform

## Preview Locally

From the project folder:

```bash
python -m http.server 8000
```

Open http://localhost:8000/.

Check these pages:

- http://localhost:8000/
- http://localhost:8000/privacy.html
- http://localhost:8000/accessibility.html

## Deploy

This project is suitable for GitHub Pages or another static host. Upload the project root so these files remain at the top level:

- index.html
- privacy.html
- accessibility.html
- robots.txt
- sitemap.xml
- CNAME
- assets/

## GitHub Pages Setup

1. Create or open the GitHub repository.
2. Upload the project files to the publishing branch.
3. Go to Settings > Pages.
4. Choose the publishing branch and root folder.
5. Confirm the custom domain is set to peasefulcleaningmoving.com.
6. Keep Enforce HTTPS enabled when GitHub allows it.

## CNAME

The CNAME file must contain only:

```text
peasefulcleaningmoving.com
```

GitHub Pages uses this file to associate the site with the custom domain.

## DNS Verification

Confirm DNS records with the domain provider and GitHub Pages documentation. After DNS changes, allow time for propagation, then check:

- https://peasefulcleaningmoving.com/
- https://peasefulcleaningmoving.com/privacy.html
- https://peasefulcleaningmoving.com/accessibility.html

## Google Search Console

After the live domain works:

1. Add the property for https://peasefulcleaningmoving.com/.
2. Verify ownership using the method selected in Search Console.
3. Submit https://peasefulcleaningmoving.com/sitemap.xml.
4. Recheck indexing after Google processes the sitemap.

## Update Contact Information

Update contact details in:

- index.html
- privacy.html
- accessibility.html
- assets/js/site-config.js
- README.md
- JSON-LD structured data inside index.html

After updating, search the entire project for old phone numbers, emails, and domains.

## Update the Google Form

If the Google Form changes, update every visible button/link and assets/js/site-config.js. Every Google Form link should:

- Use the exact form URL
- Open in a new tab
- Include target="_blank"
- Include rel="noopener noreferrer"
- Have an accessible label that says it opens in a new tab

## Replace the Logo

Current live assets:

- assets/images/peaseful-logo-primary.png
- assets/images/peaseful-logo-header.png
- assets/images/peaseful-icon.png
- assets/images/favicon.svg

Use optimized image files, preserve the logo proportions, and update width/height attributes if replacement dimensions change.

## Test Phone and Email Links

Before launch, click:

- Call or Text links
- Email links
- Send an Email button
- Website links

Phone links should use tel:+14062588558. Email links should use mailto:peasefulcleaningmoving@gmail.com.

## Test Mobile Layouts

Use browser responsive tools or device testing for:

- 320 x 568
- 360 x 640
- 375 x 667
- 390 x 844
- 430 x 932
- 768 x 1024
- 1024 x 768
- 1366 x 768
- 1440 x 900
- 1920 x 1080

Check for horizontal scroll, clipped text, menu collisions, button overflow, logo distortion, footer readability, and tap targets.

## Privacy Page Updates

Update privacy.html when contact methods, Google Form behavior, or information collection details change. Do not add unconfirmed retention schedules, legal review claims, encryption guarantees, or medical privacy claims.

## Accessibility Page Updates

Update accessibility.html when contact methods or accessibility-planning language changes. Do not claim formal certification unless that has been separately completed and documented.

## Maintenance Notes

- Keep the site static and lightweight.
- Avoid fake reviews, ratings, awards, locations, street addresses, legal names, and unconfirmed hours.
- Do not add a custom form unless it has a real backend and cannot show false success messages.
- Keep reduced-cost service language cautious and clear.
