---
slug: poiyomi-toon-9-2-49-changes
title: 'Poiyomi Toon 9.2.49 Changelog'
description: Information regarding the release of Poiyomi Toon 9.2.49.
hide_table_of_contents: true
authors:
  poiyomi
tags: [shader, vrchat, updates, update]
---

:::danger
This version has been pulled due to a critical UI bug causing the Rendering Presets to disappear! A patch will be released soon to fix this.

If you have upgraded to this version, please downgrade back to version `9.2.43` in the meantime. We apologize for the inconvenience!
:::

This update includes some general improvements to the shader and is recommended for all users. The Toon version is now available in the VCC Repository, GitHub, and on BOOTH.

### Added
- Added a Toggle in **Light Data** for Light Volumes, as per popular request. Enabled by default.
  - *Apparently, VRC Light Volumes can take up around 80% of the compile time on a default material. Disabling Light Volumes may show a great improvement to shader compilation time.* 
- Added Vertex Color support to `Vertex Options -> Basics & Fun`.
- Added `"changelogUrl"` string to `package.json` in VCC Package, allowing VCC clients to directly link to this website on Changelogs.

### Changes
- Speeded up compile times across the board, with focus on the base functionality of the shader.
  - You may not see huge differences when you have gigantic materials but baby steps, we're getting there.
- Overhauled `Vertex Options -> Basics & Fun` section.
  - Cleaned up all the code, improving performance and compilation times.
  - Added Wind.
  - Added Masking Support.

### Fixes
- Fixed two reported issues with d4rk's Avatar Optimizer.
- Fixed a compilation bug with shiny materials.
- Fixed a bug with LookAt being used in the World shader.
- Fixed a few missing functions from compilation time improvements.
- Fixed a bug with `Poiyomi Toon World`'s LookAt causing it to go pink if used.
- Fixed a bug with Stochastic Sampling causing the shader to error on Lock In.
- Fixed Vertex Colors targeting the wrong channels in Dissolve.
- Fixed a million warnings being thrown when using the Material Inspector.
- Fixed an issue where Emission settings were being applied after lighting, causing the color to be unlit even when Emission was `0`.