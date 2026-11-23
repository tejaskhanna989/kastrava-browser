# Kastrava

A web browser you can actually read the source of. GPLv3, no telemetry, no account required, and nothing phones home.

Linux, Windows and Android builds live in this repo. The project site is [kastrava.in](https://kastrava.in).

---

## Free, forever

Kastrava is completely free, forever — full source, build scripts, pre-built binaries, every feature, no crippled free tier. `git clone` and go.

The browser is funded by donations from users like you. If you find Kastrava useful, please consider supporting the project through our donation options on the website.

## Privacy Features

All privacy features are free and unlocked:

* **Sessions live in RAM.** Cookies, cache, DOM storage and IndexedDB die with the process — quit or crash and website data is gone. Downloads in `~/Downloads` are never touched.
* **Ads and trackers are blocked before they load.** EasyList, EasyPrivacy and the annoyances lists, compiled down to regexes with a hostname fast-path (around 600× faster than a linear scan, same verdicts).
* **Cookie control** in three modes — block all, first-party only, allow — plus per-site shield exceptions. `Set-Cookie` headers are stripped at the network layer anyway.
* **Anti-fingerprinting**: a Chrome-compatible `navigator` spoof (webdriver, plugins, languages, platform, `hardwareConcurrency` via `userAgentData`), canvas readback noise, font enumeration protection, frozen Battery and Connection APIs, and selectable WebRTC IP handling (off / public only / default).
* **Network hygiene**: `Referer` stripped or rewritten per shield, `DNT: 1` sent, optional DNS-over-HTTPS (Cloudflare, Quad9, Google — needs a restart), mixed-content controls.
* **Kill switches** for JavaScript and images, globally or per site, alongside the per-site shield toggles.
* **Storage partitioning** between the app shell and web content. Guest popups (payment flows, for instance) run in the volatile session, so those cookies die with it too.
* **Zero telemetry**: no analytics, no crash reports, no update pings with identifiers.
* **Chrome extension support**: Install Chrome extensions directly within Kastrava for additional functionality.

## What talks to what, and when

No account, no browsing telemetry, ever. The core browser works offline after install. Beyond that:

* **Update check (automatic, anonymous)**: on launch the app asks GitHub for `latest.yml` — version numbers only, no identifiers. AppImage builds skip it by choice, and blocking it breaks nothing.
* **Store, support**: ordinary HTTPS page loads, only when you open them. Browsing the web never touches our servers.

## How the privacy part works

I'd rather you verify this than take my word for it. Everything below is in the open source (`src/privacy.js`, `src/adblock.js`, `src/main.js`):

* **Sessions live in RAM.** Cookies, cache, DOM storage and IndexedDB die with the process — quit or crash and website data is gone. Downloads in `~/Downloads` are never touched.
* **Ads and trackers are blocked before they load.** EasyList, EasyPrivacy and the annoyances lists, compiled down to regexes with a hostname fast-path (around 600× faster than a linear scan, same verdicts).
* **Cookie control** in three modes — block all, first-party only, allow — plus per-site shield exceptions. `Set-Cookie` headers are stripped at the network layer anyway.
* **Anti-fingerprinting**: a Chrome-compatible `navigator` spoof (webdriver, plugins, languages, platform, `hardwareConcurrency` via `userAgentData`), canvas readback noise, font enumeration protection, frozen Battery and Connection APIs, and selectable WebRTC IP handling (off / public only / default).
* **Network hygiene**: `Referer` stripped or rewritten per shield, `DNT: 1` sent, optional DNS-over-HTTPS (Cloudflare, Quad9, Google — needs a restart), mixed-content controls.
* **Kill switches** for JavaScript and images, globally or per site, alongside the per-site shield toggles.
* **Storage partitioning** between the app shell and web content. Guest popups (payment flows, for instance) run in the volatile session, so those cookies die with it too.
* **Zero telemetry**: no analytics, no crash reports, no update pings with identifiers.
* **Chrome extension support**: Install Chrome extensions directly within Kastrava for additional functionality.

## What talks to what, and when

No account, no browsing telemetry, ever. The core browser works offline after install. Beyond that:

* **Update check (automatic, anonymous)**: on launch the app asks GitHub for `latest.yml` — version numbers only, no identifiers. AppImage builds skip it by choice, and blocking it breaks nothing.
* **License refresh (Premium only)**: logged-in Premium installs re-validate the key once on launch (device ID + key, once). Free tier and logged-out installs contact nothing.
* **Sync (only if logged in)**: encrypted blobs go up on local change and down on login. The server never sees plaintext.
* **Store, account dashboard, support**: ordinary HTTPS page loads, only when you open them. Browsing the web never touches our servers.
* **Zero telemetry**: no analytics, no crash reports, no update pings with identifiers. License activation sends one device ID and the key, once, and the app works fully offline after that.
* **Sync**, if you turn it on, uploads encrypted blobs the server stores but cannot read. Changing your password deliberately destroys the old synced copy — new password means new key.
* **Store, account dashboard, support**: ordinary HTTPS page loads, only when you open them. Browsing the web never touches our servers.
* **Zero telemetry**: no analytics, no crash reports, no update pings with identifiers. License activation sends one device ID and the key, once, and the app works fully offline after that.
* **Sync**, if you turn it on, uploads encrypted blobs the server stores but cannot read. Changing your password deliberately destroys the old synced copy — new password means new key.
* **Store, account dashboard, support**: ordinary HTTPS page loads, only when you open them. Browsing the web never touches our servers.

## Chrome Extensions

Kastrava supports Chrome extensions, allowing you to extend functionality with your favorite privacy and productivity extensions. Install Chrome extensions directly from the Chrome Web Store or from extension files (.crx, .zip).

## Building it

You need Node 18+, npm and Git.

```bash
git clone https://github.com/tejaskhanna989/kastrava.git
cd kastrava
npm install
npm start        # run from source, development mode
npm run dist     # production packages → release/
```

Android builds come from `android/` with the usual Gradle tasks.

## Contributing

Fork it, make a branch (`git checkout -b feature/whatever`), commit, push, open a PR. That's the whole process.

Kastrava is funded by donations from users like you. If you find Kastrava useful, please consider supporting the project through our donation options on the website.

## License

Kastrava

Copyright (C) 2026 Tejas Khanna

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the LICENSE file for details.

## Building it

You need Node 18+, npm and Git.

```bash
git clone https://github.com/tejaskhanna989/kastrava.git
cd kastrava
npm install
npm start        # run from source, development mode
npm run dist     # production packages → release/
```

Android builds come from `android/` with the usual Gradle tasks.

## Contributing

Fork it, make a branch (`git checkout -b feature/whatever`), commit, push, open a PR. That's the whole process.

Premium funds the project ([pricing here](https://kastrava.in/#premium)). For priority support, consultation or sponsorship, write to email-center@kastrava.in.

## License

Kastrava

Copyright (C) 2026 Tejas Khanna

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the LICENSE file for details.