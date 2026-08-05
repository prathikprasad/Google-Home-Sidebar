<p align="center">
  <img src="icon.png" width="96" alt="Google Home Sidebar icon">
</p>

<h1 align="center">Google Home Sidebar</h1>

<p align="center">
  A Chrome extension that puts your <a href="https://home.google.com">Google Home</a> devices in your browser's side panel — control your smart home without leaving your tab.
</p>

<p align="center">
  <img alt="Manifest Version" src="https://img.shields.io/badge/manifest-v3-blue">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-brightgreen">
  <img alt="Platform" src="https://img.shields.io/badge/platform-Chrome-yellow">
</p>

---

## Features

- **Side panel access** — opens your Google Home devices page in Chrome's native side panel via a single click on the toolbar icon.
- **Any account, any home** — point the sidebar at the exact Google Home devices URL you use, including specific accounts (`/u/1/...`) or homes.
- **Right-click settings** — right-click the toolbar icon for quick access to Home Settings.

## Installation

This extension isn't on the Chrome Web Store — install it as an unpacked extension:

1. Download or clone this repository.
2. Open `chrome://extensions` in Chrome.
3. Enable **Developer mode** (top-right toggle).
4. Click **Load unpacked** and select the project folder.
5. Pin the extension for quick access from the toolbar.

## Usage

1. Go to [home.google.com](https://home.google.com) in a regular tab, navigate to your **Devices** page, and copy the full URL from the address bar.
2. Click the extension icon (or right-click it and choose **Home Settings**).
3. Paste the URL and click **Save Settings**.
4. Click the toolbar icon — your devices now open directly in the side panel.

## How it works

`home.google.com` doesn't allow itself to be embedded in an iframe by default. This extension uses the `declarativeNetRequest` API ([rules.json](rules.json)) to strip the `X-Frame-Options` and `Content-Security-Policy` headers from its responses, and sets the `sec-fetch-*`/`referer` request headers it expects from a same-origin navigation, so the devices page loads correctly inside the side panel's iframe.

## Permissions

| Permission | Why it's needed |
|---|---|
| `sidePanel` | Renders Google Home inside Chrome's side panel |
| `storage` | Saves your configured devices URL (`chrome.storage.sync`) |
| `declarativeNetRequest` | Removes/rewrites the headers blocking iframe embedding |
| `contextMenus` | Adds the "Home Settings" right-click menu item |
| `host_permissions: home.google.com` | Required to modify headers and load the page for that domain |

## Privacy

Your saved devices URL is stored locally via `chrome.storage.sync` and synced through your own Chrome profile. Nothing is sent to any third-party server — the extension only talks to `home.google.com`.

## License

[MIT](LICENSE) © Prathik Prasad
