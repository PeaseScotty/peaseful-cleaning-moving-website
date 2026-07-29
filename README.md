# Peaseful Cleaning & Moving Website

Static production website for Peaseful Cleaning & Moving.

## Project Overview

This is a lightweight static website for cleaning, moving, packing, loading, hauling, move-out support, person-centered planning, accessibility-aware communication, reduced-cost inquiry language, and direct contact options.

Confirmed public details:

- Public brand: Peaseful Cleaning & Moving
- Legal business name: Peaseful Cleaning LLC
- Phone: (406) 258-8558
- Phone URL: tel:+14062588558
- Email: connect@peacefulcleaningmoving.com
- Email URL: mailto:connect@peacefulcleaningmoving.com
- Website: https://peasefulcleaningmoving.com/
- Google Form: https://docs.google.com/forms/d/e/1FAIpQLSd6QsJS59XAuS-vF_X2EAfSVpB3HetuZB6QCgkYr1fngPyiOQ/viewform
- Current build marker: 2026-07-28-live-deployment-fix

## Publishing Structure Detected

This repository folder currently contains the deployable site at the repository root:

- index.html
- privacy.html
- accessibility.html
- robots.txt
- sitemap.xml
- CNAME
- assets/

No docs folder, GitHub Actions workflow, Jekyll config, or local .git metadata was found in this working copy. For GitHub Pages, publish the repository root on the correct branch unless the GitHub repository settings say otherwise.

## Preview Locally

From the project folder:

```bash
python -m http.server 8000
```

Open http://localhost:8000/.

Check:

- http://localhost:8000/
- http://localhost:8000/privacy.html
- http://localhost:8000/accessibility.html
- http://localhost:8000/assets/images/Scottyupdatedlogo.png?v=20260728-2

## GitHub Pages Setup

1. Upload or commit the project files to the publishing branch.
2. Go to repository Settings, then Pages.
3. Choose the publishing branch and root folder.
4. Confirm the custom domain is set to peasefulcleaningmoving.com.
5. Keep Enforce HTTPS enabled when GitHub allows it.

## CNAME

The CNAME file must contain only:

```text
peasefulcleaningmoving.com
```

## Logo

The live website uses:

```text
assets/images/Scottyupdatedlogo.png?v=20260728-2
```

The exact logo file must remain at:

```text
assets/images/Scottyupdatedlogo.png
```

Old logo files may remain as unreferenced source/archive assets, but public HTML, metadata, and active website image paths should use the current Scottyupdatedlogo file.

## Why Changes May Not Appear on GitHub Pages

1. Confirm the changes were committed, not merely pasted into an editor.
2. Confirm the commit is on the branch GitHub Pages publishes.
3. Open repository Settings, then Pages.
4. Check the selected publishing source.
5. Confirm whether Pages uses the root folder, docs folder, gh-pages branch, or GitHub Actions.
6. Check the Actions or Deployments area for a successful Pages deployment.
7. Confirm the deployed artifact includes index.html, CSS, JavaScript, and the updated logo.
8. Wait for the deployment to complete.
9. Hard-refresh the browser.
10. Test in a private or incognito browser window.
11. Verify the live page source contains the current build marker.
12. Confirm the image filename and capitalization match exactly.
13. Confirm the CNAME and custom domain are correct.

Replacing a file locally does not update the live site until the updated file is committed to the correct publishing source and a successful deployment completes.

## Search Console

After the live domain works:

1. Add the property for https://peasefulcleaningmoving.com/.
2. Verify ownership using the method selected in Search Console.
3. Submit https://peasefulcleaningmoving.com/sitemap.xml.
4. Recheck indexing after Google processes the sitemap.

## Maintenance Checks

- Phone links should use tel:+14062588558.
- Email links should use mailto:connect@peacefulcleaningmoving.com.
- Website links should use https://peasefulcleaningmoving.com/.
- Google Form links should open in a new tab with target="_blank" and rel="noopener noreferrer".
- Keep reduced-cost service language cautious and clear.
- Avoid fake reviews, ratings, awards, locations, street addresses, unconfirmed hours, and unsupported guarantees.
