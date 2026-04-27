/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║         JD Development & Designs — Product Config        ║
 * ║                                                          ║
 * ║  Edit this file to add, remove, or update products.      ║
 * ║  No other file needs to be touched for product changes.  ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 * FIELD REFERENCE:
 *   id          — Unique identifier (no spaces, use hyphens). Used for download tracking.
 *   name        — Display name shown on cards and detail page.
 *   price       — Number. Set to 0 for free resources.
 *   category    — Short label shown on the card tag (e.g. "UI", "Vehicles", "Jobs").
 *   type        — "free" or "premium". Used by the availability filter.
 *   tag         — Badge label on the detail page (e.g. "Script", "Resource", "Pack").
 *   version     — Current version string shown on the detail page.
 *   downloadUrl — External link opened when the user clicks Download.
 *                 Use Google Drive, Dropbox, GitHub Releases, etc.
 *   description — Full description shown on the product detail page.
 *   image       — URL string for a product preview image, or null for the placeholder.
 *
 * EXAMPLE PRODUCT:
 *   {
 *     id:          "my-script",
 *     name:        "My Awesome Script",
 *     price:       9.99,
 *     category:    "UI",
 *     type:        "premium",
 *     tag:         "Script",
 *     version:     "1.0",
 *     downloadUrl: "https://drive.google.com/your-link",
 *     description: "A short description of what the script does.",
 *     image:       null
 *   },
 */

const PRODUCTS = [
  {
    id:          "advanced-hud",
    name:        "Advanced HUD",
    price:       0,
    category:    "UI",
    type:        "free",
    tag:         "Script",
    version:     "2.1",
    downloadUrl: "https://drive.google.com/your-link-here",
    description: "A fully customizable, performance-friendly HUD system for FiveM. Includes health, armor, hunger, thirst, stress bars, and a minimap enhancement. Easy config file included.",
    image:       null
  }
];