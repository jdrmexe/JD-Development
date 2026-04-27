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
      description: "A fully customisable, performance-friendly HUD system for FiveM. Includes health, armour, hunger, thirst, stress bars, and a minimap enhancement. Easy config file included.",
      image:       null
    },
    {
      id:          "vehicle-keys",
      name:        "Vehicle Keys System",
      price:       12.99,
      category:    "Vehicles",
      type:        "premium",
      tag:         "Script",
      version:     "1.4",
      downloadUrl: "https://drive.google.com/your-link-here",
      description: "A realistic vehicle key system that prevents players from entering vehicles they don't own. Supports sharing keys, hotwiring, and integration with most QB/ESX frameworks.",
      image:       null
    },
    {
      id:          "job-creator",
      name:        "Job Creator Pro",
      price:       24.99,
      category:    "Jobs",
      type:        "premium",
      tag:         "Script",
      version:     "3.0",
      downloadUrl: "https://drive.google.com/your-link-here",
      description: "Create fully custom jobs via an in-game menu — no restart required. Supports grades, salaries, uniform outfits, and vehicle garages. Works with QB-Core and ESX.",
      image:       null
    },
    {
      id:          "drug-system",
      name:        "Drug Processing System",
      price:       0,
      category:    "Crafting",
      type:        "free",
      tag:         "Script",
      version:     "1.0",
      downloadUrl: "https://drive.google.com/your-link-here",
      description: "A lightweight drug processing script with configurable locations, timers, and items. Includes police evidence integration and configurable police alerts.",
      image:       null
    },
    {
      id:          "phone",
      name:        "JD Phone",
      price:       34.99,
      category:    "UI",
      type:        "premium",
      tag:         "Script",
      version:     "1.2",
      downloadUrl: "https://drive.google.com/your-link-here",
      description: "A sleek, modern in-game phone with messaging, contacts, banking app, map, and Twitter. Fully animated with NUI. QB-Core & ESX compatible.",
      image:       null
    },
    {
      id:          "garage",
      name:        "Advanced Garage",
      price:       19.99,
      category:    "Vehicles",
      type:        "premium",
      tag:         "Script",
      version:     "2.0",
      downloadUrl: "https://drive.google.com/your-link-here",
      description: "Feature-rich garage system supporting public, private, and job garages. Impound system included. Vehicle damage state, fuel, and mods saved per user.",
      image:       null
    },
    {
      id:          "chat",
      name:        "Enhanced Chat",
      price:       0,
      category:    "UI",
      type:        "free",
      tag:         "Script",
      version:     "1.1",
      downloadUrl: "https://drive.google.com/your-link-here",
      description: "A clean, modern chat replacement with custom commands, OOC, local, and me-chat channels. Fully themeable and lightweight.",
      image:       null
    },
    {
      id:          "hunting",
      name:        "Hunting System",
      price:       14.99,
      category:    "Activities",
      type:        "premium",
      tag:         "Script",
      version:     "1.0",
      downloadUrl: "https://drive.google.com/your-link-here",
      description: "A complete hunting experience — find animals in the wild, track them, harvest pelts, and sell at configured locations. Season system and configurable animals included.",
      image:       null
    }
  ];