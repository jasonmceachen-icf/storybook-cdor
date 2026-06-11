# Custom icons for the USWDS sprite

This directory stores project-specific SVG icons that are compiled into the USWDS sprite.

In `gulpfile.js`, this directory is configured as:

`uswds.paths.src.projectIcons = "./assets/custom/icons";`

When you run `npx gulp compile` or `npx gulp compileIcons`, these icons are merged into:

`dist/images/sprite.svg`

By default, custom icons are added alongside the standard USWDS icon set. If `uswds.sprite.projectIconsOnly = true`, only icons from this directory are included.

## SVG requirements and recommendations

- Put one icon in each `.svg` file.
- Use a root `<svg>` element with a `viewBox` attribute (required for reliable scaling in a sprite).
- Recommended for consistency with USWDS icons: `viewBox="0 0 24 24"` and a 24x24 artboard.
- Use clean, simple vector paths; avoid scripts, external resources, and embedded fonts.
- Do not place a prebuilt sprite file here (no multi-icon sprite sources).
- If the SVG contains internal IDs (`id`, `clipPath`, `mask`, `linearGradient`, etc.), make them unique and prefixed with the icon name to avoid collisions in the combined sprite.

## File naming and sprite IDs

USWDS compile uses `gulp-svgstore` to build the sprite. `gulp-svgstore` sets each `<symbol id>` from the source filename.

Example:

- `custom_alert.svg` becomes `#custom_alert` in `sprite.svg`

Use lowercase, descriptive filenames with underscores (or hyphens) and avoid spaces.

Also avoid filenames that duplicate default USWDS icon names unless you intentionally want a conflicting symbol ID.

## Usage example (Twig in this project)

```twig
<svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use href="{{ uswds_images }}sprite.svg#custom_alert"></use>
</svg>
```

This theme's preprocess currently provides:

- `active_theme_path`
- `uswds_images` (derived from `active_theme_path` + `/dist/images/`)

For sprite usage in Twig, use `uswds_images` directly. It already contains the full theme-relative image path, so you do not need to concatenate both variables unless you are building a custom path manually.

## Quick verification

1. Add/update SVG files in this directory.
2. Run `npx gulp compileIcons`.
3. Confirm your icon symbol exists in `dist/images/sprite.svg`.
4. Verify it renders with `<use href="...#icon_name">` in your templates.
