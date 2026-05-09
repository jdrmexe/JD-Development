/*
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
    id:          "loading-screen",
    name:        "JD Loading Screen",
    price:       0,
    category:    "Standalone",
    type:        "free",
    tag:         "Script",
    version:     "1.0",
    author:      "JD Development & Designs",
    downloadUrl: "https://drive.google.com/drive/folders/17_HLSJvH4Qa-EI0KF6jDA9ezB6ejgQ52?usp=sharing",
    description: "A simple loading screen for your FiveM server with smooth image loop transitions.",
    image: "https://cdn.discordapp.com/attachments/1498246763893751878/1498247097353240686/image.png?ex=69f076d8&is=69ef2558&hm=90e0779b427dc638589b6f9294797b613571acb36016d373e05c79bd2b4ca2cf&"
  },
  {
    id:          "cppd-liveries",
    name:        "Cayo Perico Police Department Livery Package.",
    price:       0,
    category:    "Vehicles",
    type:        "free",
    tag:         "Vehicles",
    version:     "1.0",
    author:      "JD Development & Designs",
    downloadUrl: "https://drive.google.com/drive/folders/18f7sO3F2u_bkpCyWbRPVdTPRBUD7wbmL?usp=drive_link",
    description: "A simple livery package for Cayo Perico Police Department vehicles.",
    image: "https://media.discordapp.net/attachments/1372494424931700787/1415474784422199357/Screenshot_2025-09-11_000257.png?ex=69f13e9e&is=69efed1e&hm=a106bf2be51d2181e4eef1a3cf4a916d163dc4ccb939fe3896961402cb718d07&animated=true"
  },
  {
    id:          "whitelist-eup",
    name:        "JD Whitelist EUP Script",
    price:       0,
    category:    "Standalone",
    type:        "free",
    tag:         "Script",
    version:     "1.0",
    author:      "JD Development & Designs",
    downloadUrl: "https://drive.google.com/drive/folders/18f7sO3F2u_bkpCyWbRPVdTPRBUD7wbmL?usp=drive_link",
    description: "GUIDE: Once installed and configured, you can run the command /whitelisteup and scroll through the list of EUP components to select which one you want to restrict. You can then restrict it via Discord role ID. You will need a Discord bot for this script to function properly, as it checks Discord roles to enable locking.\nAce Perm: command.whitelisteup,  Dependencies: ox_Lib, Badger_Discord_API, DiscordAcePerm",
    image: null
  },
  {
    id:          "duty-system",
    name:        "JD Duty System",
    price:       0,
    category:    "Standalone",
    type:        "free",
    tag:         "Script",
    version:     "1.0",
    author:      "JD Development & Designs",
    downloadUrl: "https://drive.google.com/drive/folders/1DacJWqiR8oGb6cFVz9ui2YupgE-MwIZf?usp=sharing",
    description: "Everything is completely editable from the departments, response grades and the commands in the provided config.lua, Base Commands: /duty, /999, /101, /wp [CAD], /clearcall [CAD]",
    image: null
  },
  {
    id:          "rp-chat-commands",
    name:        "JD RP Chat Commands",
    price:       0,
    category:    "Standalone",
    type:        "free",
    tag:         "Script",
    version:     "1.0",
    author:      "JD Development & Designs",
    downloadUrl: "https://drive.google.com/drive/folders/1DacJWqiR8oGb6cFVz9ui2YupgE-MwIZf?usp=sharing",
    description: "No dependecies, when installed you can do /me and /do, simply drag drop and start via tx-admin and they will work, you can config nearly everything in the provided config.lua like offset and the colours of them.",
    image: null
  },
  {
    id:          "taser-sound-replace",
    name:        "JD Taser SFX (Server Side)",
    price:       0,
    category:    "Standalone",
    type:        "free",
    tag:         "Script",
    version:     "1.0",
    author:      "JD Development & Designs",
    downloadUrl: "https://drive.google.com/drive/folders/1jaFJR7QBQJIbVl331FXrThVILr8cudzv?usp=drive_link",
    description: "No dependecies, Nothing super advanced just replaces the original taser sfx with the taser 2 demo sound for more immersive roleplay.",
    image: null
  },
    {
    id:          "mps-epaulette-pack",
    name:        "Metropolitan Police Epaullets",
    price:       0,
    category:    "Standalone",
    type:        "free",
    tag:         "Resource",
    version:     "1.0",
    author:      "JD Development & Designs",
    downloadUrl: "https://drive.google.com/drive/folders/1VNWjZx2JYgrPKM70f72klNTg5Pp4pC4F?usp=drive_link",
    description: "Not a script just some Epaulettes MPS style.",
    image: null
  },
    {
    id:          "jd-backseat",
    name:        "JD Backseat",
    price:       0,
    category:    "Standalone",
    type:        "free",
    tag:         "Script",
    version:     "1.0",
    author:      "JD Development & Designs",
    downloadUrl: "https://drive.google.com/drive/folders/1fOTYs0QSKK_gIpvwnjndm1zCu-tVl0eV?usp=sharing",
    description: "You can now run /backseat to enter a vehicle within 3.0 meter's backseat or press K by deafult",
    image: null
  }
];
