# Pitch Black Cyber | Official Website

Welcome to the official repository for **Pitch Black Cyber** (pitchblackcyber.com). 

Pitch Black Cyber is a local cybersecurity and IT consulting business based in Cache Valley, Utah. We focus on helping small businesses, healthcare clinics, and families navigate cybersecurity, HIPAA compliance, and digital safety in plain English—without the enterprise jargon or fearmongering.

This repository houses our public-facing website, blog, and service portfolio. It is designed to act as a fast, secure, and accessible "Mission Control" for our clients.

## 🎯 Core Business Pillars Represented in this Codebase

The site architecture is built around our three main service areas:

1. **Small Business Cybersecurity & IT:** Practical assessments, endpoint protection, and IT hardening for local businesses. (`src/app/services`)
2. **Compliance Security Readiness:** Translating complex cyber safeguards (Administrative, Physical, Technical) into actionable security roadmaps for businesses. (`src/app/services`)
3. **Family Cyber Safety:** Parent-focused education, home network router hardening, and community workshops to protect kids online. (`src/app/family-safety`)

## 🛠 Tech Stack & Architecture

While the focus of this site is the content and the community, it is built on a modern, highly performant web stack:

* **Framework:** [Next.js](https://nextjs.org/) (React)
* **Styling:** Tailwind CSS (Customized with our "Dark Space / Cyber" brand palette: Deep Black, Cyan, Magenta, and Purple)
* **Architecture:** Static Site Generation (SSG). The site is exported as pure, static HTML/CSS/JS for maximum speed and security.
* **Hosting/Deployment:** GitHub Pages via automated GitHub Actions.

## 📝 How to Manage Content (Blog Posts)

Our blog is completely statically generated. You do not need a complex CMS to add new articles or workshop announcements.

To add a new blog post:
1. Open `src/lib/posts.ts`.
2. Add a new object to the `posts` array using the existing format (requires a `slug`, `title`, `date`, `category`, `excerpt`, and HTML `content`).
3. Commit and push your changes to the `main` branch. 
4. The site will automatically rebuild and generate the new page at `/blog/your-new-slug`.

## 🚀 Deployment

This site uses GitHub Actions (`.github/workflows/deploy.yml`) to automatically build and deploy to GitHub Pages whenever code is pushed to the `main` branch. Because it relies on Next.js Static Export, ensure `output: 'export'` remains in the `next.config.ts` file.

---
*Securing the Dark Spaces. Proudly serving Cache Valley and Northern Utah.*
