# Design patterns in Next.js

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**Live:** [bdlc-01-article-pattern-builder.vercel.app](https://bdlc-01-article-pattern-builder.vercel.app)

Small, focused examples of classic design patterns applied to real use cases in a modern Next.js app. Each pattern lives in its own folder with its code and a README, and has its own route in the demo.

## Patterns

| # | Pattern | Type | Example | Demo |
|---|---------|------|---------|------|
| 01 | [Builder](patterns/01-builder) | Creational | Bank transfer form validated with Server Actions | [/builder](https://bdlc-01-article-pattern-builder.vercel.app/builder) |

## Structure

```
patterns/
  index.ts          Pattern registry (feeds the home page)
  01-builder/       Code and README of the Builder pattern
app/
  page.tsx          Index of all patterns
  builder/page.tsx  Builder demo route
```

To add a pattern: create `patterns/NN-name/` with its code and README, add a route in `app/<slug>/page.tsx`, and register it in `patterns/index.ts`.

## Tech stack

Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
