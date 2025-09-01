# CAPES Redirector

CAPES Redirector is a Chrome extension that makes it easy to access academic resources through the CAPES proxy. 
With a simple keyboard shortcut, it automatically redirects supported academic URLs to their CAPES-accessible counterparts.

Supported academic publishers:
  - IEEE Xplore
  - Science
  - Wiley Online Library
  - Nature
  - ACM Digital Library

## Installation

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select the folder containing this extension.

## Usage

1. Navigate to a supported academic page (e.g., `https://dl.acm.org/doi/...`).
2. Press the keyboard shortcut **Ctrl + .** (or Command + . on macOS).
3. The page will redirect through the CAPES proxy, allowing you to access full-text content if your institution has a subscription.

## Configuration

- The shortcut key is defined in `manifest.json` under `"commands"` as:

```json
"modify_url": {
  "suggested_key": {
    "default": "Ctrl+Period"
  },
  "description": "Modify URL"
}
