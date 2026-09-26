import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectDirectory = resolve(scriptDirectory, "..");
const palettePath = resolve(projectDirectory, "palette.json");
const palette = JSON.parse(readFileSync(palettePath, "utf8"));

const requiredPaletteNames = [
  "ink",
  "muted",
  "canvas",
  "soft",
  "visualSoft",
  "paper",
  "line",
  "lineStrong",
  "accent",
  "accentDark",
  "accentSoft",
  "brand",
  "brandDark",
  "brandSoft",
  "highlight",
  "highlightSoft",
  "portraitBackdrop",
  "claret",
  "loden",
  "terracotta",
  "blueSlate",
  "sageVeil",
  "warmCanvas",
  "eucalyptus",
  "mutedMustard",
  "rosewood",
  "espresso",
  "mushroom",
  "plotOrange",
];
const missingPaletteNames = requiredPaletteNames.filter((name) => !palette[name]);

if (missingPaletteNames.length > 0) {
  throw new Error(`Missing palette values: ${missingPaletteNames.join(", ")}`);
}

const entries = Object.entries(palette);
const invalidEntries = entries.filter(([, value]) => !/^#[0-9a-f]{6}$/i.test(value));

if (invalidEntries.length > 0) {
  throw new Error(`Invalid palette values: ${invalidEntries.map(([name]) => name).join(", ")}`);
}

const kebabCase = (value) => value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
const pascalCase = (value) => value.charAt(0).toUpperCase() + value.slice(1);

const css = [
  "/* Generated from palette.json. Edit that file, then run `pnpm palette`. */",
  ":root {",
  ...entries.map(([name, value]) => `  --${kebabCase(name)}: ${value};`),
  "}",
  "",
].join("\n");

const tex = [
  "% Generated from palette.json. Edit that file, then run `pnpm palette`.",
  ...entries.map(([name, value]) => `\\definecolor{Site${pascalCase(name)}}{HTML}{${value.slice(1)}}`),
  "",
].join("\n");

const favicon = [
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">',
  "  <!-- Generated from palette.json. Edit that file, then run `pnpm palette`. -->",
  `  <rect width="64" height="64" rx="14" fill="${palette.brand}"/>`,
  `  <circle cx="19" cy="20" r="5" fill="${palette.paper}"/>`,
  `  <circle cx="45" cy="18" r="5" fill="${palette.highlight}"/>`,
  `  <circle cx="42" cy="45" r="5" fill="${palette.paper}"/>`,
  `  <circle cx="18" cy="44" r="5" fill="${palette.paper}"/>`,
  `  <path d="M23 21.5 40 18.8M43.5 23l-1 17M37.7 45H23M19 39V25" fill="none" stroke="${palette.paper}" stroke-width="3" stroke-linecap="round"/>`,
  "</svg>",
  "",
].join("\n");

writeFileSync(resolve(projectDirectory, "src/styles/palette.generated.css"), css);
writeFileSync(resolve(projectDirectory, "public/favicon.svg"), favicon);

const illustrationPaletteOutput = process.env.ILLUSTRATION_PALETTE_OUTPUT;

if (illustrationPaletteOutput) {
  writeFileSync(resolve(projectDirectory, illustrationPaletteOutput), tex);
}
