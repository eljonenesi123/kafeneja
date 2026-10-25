# Kafeneja

Website for a specialty coffee shop in Tirana: menu, story, team, a journal and table reservations.

**Live:** https://eljonenesi123.github.io/kafeneja/

## Pages

- **Home:** video hero, featured menu, gallery and reviews
- **Menu:** the full menu
- **About:** the story and the team
- **Journal:** short posts from the shop
- **Contact:** location, hours, contact form and table reservation

## Stack

- Next.js (App Router) with TypeScript
- Tailwind CSS
- GSAP for scroll and text animations

The site is exported as static files (`output: "export"` in `next.config.ts`), so it runs on GitHub Pages without a server.

## Running it locally

```bash
git clone https://github.com/eljonenesi123/kafeneja.git
cd kafeneja
npm install
npm run dev
```

Then open http://localhost:3000/kafeneja.

## Deploying

Pushing to `main` runs the GitHub Actions workflow, which builds the site and publishes the `out/` folder to GitHub Pages.

If you move it to its own domain, remove `basePath` from `next.config.ts`.

---

Built by [Script Line Studio](https://scriptlinestudio.com).
