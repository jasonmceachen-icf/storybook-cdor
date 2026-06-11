# Phosphor icons (self-hosted)

Vendored from the npm package `@phosphor-icons/web` v2.1.2. The package is **not**
a tracked dependency — these files are committed directly, like the other webfonts
in this directory. The library is registered as `uswds_base_subtheme/phosphor` in
`uswds_base_subtheme.libraries.yml` and attached globally in the theme `.info.yml`.

## Weights and usage

All six weights are included. Use the weight's base class plus the icon name:

| Weight  | Base class   | Example                                |
|---------|--------------|----------------------------------------|
| Thin    | `ph-thin`    | `<i class="ph-thin ph-smiley"></i>`    |
| Light   | `ph-light`   | `<i class="ph-light ph-smiley"></i>`   |
| Regular | `ph`         | `<i class="ph ph-smiley"></i>`         |
| Bold    | `ph-bold`    | `<i class="ph-bold ph-smiley"></i>`    |
| Fill    | `ph-fill`    | `<i class="ph-fill ph-smiley"></i>`    |
| Duotone | `ph-duotone` | `<i class="ph-duotone ph-smiley"></i>` |

Regular uses `ph` (not `ph-regular`). Icon catalog: https://phosphoricons.com

## What was modified from upstream

Each weight's `style.css` had its `@font-face` `src` trimmed to woff2 only; the
upstream `.woff`, `.ttf`, and `.svg` fallbacks were dropped, since every browser
USWDS 3 targets supports woff2. Only the `.woff2` file is committed per weight.

## Updating

1. `npm install @phosphor-icons/web@<version>` (temporary; do not `--save`).
2. Copy each `node_modules/@phosphor-icons/web/src/<weight>/style.css` and its
   `.woff2` into the matching folder here.
3. Re-apply the woff2-only `@font-face` trim (drop the woff/ttf/svg `src` lines).
4. `npm uninstall @phosphor-icons/web`.
5. Bump `version:` on the `phosphor` library in `uswds_base_subtheme.libraries.yml`.
