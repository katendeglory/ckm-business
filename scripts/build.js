#!/usr/bin/env node
/**
 * yarn build — copy the static site into dist/.
 * The site is plain HTML/JS/CSS, so "building" means collecting exactly the
 * files the page loads. dist/ is what a static host serves.
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const out = path.join(root, "dist");
const files = [
  "index.html",
  "app.js",
  "config.js",
  "favicon.png",
  "hero-image.png",
  "about-image.png",
  "services-image-1.jpg",
  "services-image-2.jpg",
  "services-image-3.jpg",
  "services-image-4.jpg",
];

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const f of files) {
  const src = path.join(root, f);
  if (!fs.existsSync(src)) {
    console.error(`build: missing ${f}`);
    process.exit(1);
  }
  fs.copyFileSync(src, path.join(out, f));
}
console.log(`build: ${files.length} files -> dist/`);
