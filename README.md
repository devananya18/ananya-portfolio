# Ananya Gupta — Portfolio (Next.js + TypeScript + Tailwind + Framer Motion)

A premium, highly interactive personal portfolio: cursor glow, magnetic
buttons, parallax hero image, 3D tilt project cards with cursor-following
previews, scroll-reveal animations, animated gradient background, floating
sparkles, and a smooth-scroll (Lenis) experience — fully responsive.

---

## 1. What you're getting

```
ananya-portfolio/
├── app/
│   ├── layout.tsx        # Fonts, providers, global chrome
│   ├── page.tsx           # Assembles all sections
│   └── globals.css        # Tailwind + glassmorphism + cursor styles
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── Skills.tsx
│   ├── Journey.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── MagneticButton.tsx
│   ├── CursorGlow.tsx
│   ├── ScrollProgress.tsx
│   ├── ParticlesBackground.tsx
│   └── SmoothScrollProvider.tsx
├── lib/
│   └── data.ts             # Edit this to change your projects/skills/socials
├── public/                 # Put your real photos here
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── postcss.config.mjs
└── .gitignore
```

Every file listed above is complete and working — nothing is a stub.

---

## 2. Install prerequisites (one-time, on your computer)

### Step 1 — Install Node.js
You need Node.js 18.17 or newer (Node 20 LTS recommended).

- Go to https://nodejs.org and download the **LTS** installer for your OS, then run it, **or**
- If you use a version manager (recommended):
  ```bash
  # nvm (Mac/Linux/WSL)
  nvm install 20
  nvm use 20
  ```

Verify it installed correctly:
```bash
node -v      # should print v18.x or v20.x
npm -v       # should print 9.x or 10.x
```

### Step 2 — A code editor
Install [VS Code](https://code.visualstudio.com/) if you don't have one.

---

## 3. Get the project onto your machine

1. Download/unzip the `ananya-portfolio` folder you received from this chat.
2. Open a terminal and move into the folder:
   ```bash
   cd path/to/ananya-portfolio
   ```

---

## 4. Install dependencies

Inside the project folder, run:

```bash
npm install
```

This reads `package.json` and installs: `next`, `react`, `react-dom`,
`framer-motion`, `react-icons`, `lenis`, `typescript`, `tailwindcss`,
`postcss`, `autoprefixer`, and the type packages. It creates a
`node_modules` folder (don't edit or commit this — it's already in
`.gitignore`).

If you ever add a new package later, install it the same way, e.g.:
```bash
npm install some-package
```

---

## 5. Run it locally

```bash
npm run dev
```

Then open **http://localhost:3000** in your browser. The site hot-reloads —
edit any file in `components/` or `app/` and the browser updates instantly.

---

## 6. Add your real photos

The hero and "about" sections currently use placeholder Unsplash images so
the site works out of the box. To use your own photos:

1. Put your image files in `/public`, e.g. `public/hero.jpg`, `public/about.jpg`.
2. In `components/Hero.tsx`, find:
   ```tsx
   <img
     src="https://images.unsplash.com/photo-1531123897727-..."
     alt="Ananya Gupta"
     ...
   />
   ```
   Replace the `src` with `/hero.jpg`.
3. Do the same in `components/About.tsx` for the mini photo/video card
   (`src="https://images.unsplash.com/..."` → `/about.jpg`).

---

## 7. Edit your content (no design work needed)

Almost everything text-based lives in **`lib/data.ts`**:
- `socials` — your GitHub / LinkedIn / email links
- `projects` — title, description, tech stack, demo/details links per project
- `skillGroups` — your Frontend/Backend/Database/Tools lists
- `journey` — your education timeline entries

Edit that one file to update projects, skills and links without touching any
component.

To change headline text ("Hi, I'm Ananya Gupta", the tagline, the about
paragraph, form copy), edit the relevant component directly — the text is
plain JSX, easy to find and change.

To wire up the **Download CV** button (`components/Navbar.tsx`), put your
PDF at `public/Ananya-Gupta-CV.pdf` and change the button to:
```tsx
<MagneticButton href="/Ananya-Gupta-CV.pdf" variant="secondary" ...>
```

To make the **contact form** actually send messages, hook `handleSubmit` in
`components/Contact.tsx` up to an email service such as
[Resend](https://resend.com), [EmailJS](https://www.emailjs.com/), or a
serverless API route — right now it only shows the success toast as a UI
demo.

---

## 8. Build for production

```bash
npm run build
npm run start
```
`build` compiles an optimized production bundle; `start` serves it on
http://localhost:3000 so you can sanity-check the production build locally.

---

## 9. Deploy it for free (recommended: Vercel)

1. Push the project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/ananya-portfolio.git
   git push -u origin main
   ```
2. Go to https://vercel.com → **New Project** → import that GitHub repo.
3. Leave all settings on default (Vercel auto-detects Next.js) → **Deploy**.
4. You'll get a live URL like `ananya-portfolio.vercel.app` in about a
   minute. Every future `git push` auto-deploys.

(Netlify and Cloudflare Pages also support Next.js if you'd rather use
those.)

---

## 10. Troubleshooting

- **`npm install` fails / permission errors** → make sure Node is installed
  correctly (`node -v`), and avoid using `sudo npm install`.
- **Port 3000 already in use** → run `npm run dev -- -p 3001` and open
  `localhost:3001` instead.
- **Fonts or icons don't load** → check your internet connection on first
  run; `next/font` fetches Google Fonts at build time and caches them.
- **Cursor glow doesn't show** → it's intentionally desktop-only
  (`hover: hover` + `pointer: fine` media query), so it won't appear on
  touch devices — that's expected behavior, not a bug.
- **Animations feel heavy on an older laptop** → this is expected with many
  simultaneous `framer-motion` animations; the site still works, just
  slightly less silky on low-end hardware. Reduced-motion users automatically
  get animations minimized via the `prefers-reduced-motion` media query in
  `globals.css`.

---

## 11. Customizing the look

- **Colors**: edit the palette in `tailwind.config.ts` under `theme.extend.colors`
  (`blush`, `peach`, `lavender`, `rose`, `plum`, `gold`) and the `aurora`
  background gradient under `backgroundImage`.
- **Fonts**: `app/layout.tsx` loads `Fraunces` (headings) and `Outfit`
  (body) from Google Fonts via `next/font/google` — swap the font names
  there to change typefaces sitewide.
- **Animation speed/feel**: most motion is defined inline via Framer
  Motion's `transition={{ duration, ease }}` props in each component —
  tweak per-section as you like.

Enjoy — and good luck with recruiters! 🎀
