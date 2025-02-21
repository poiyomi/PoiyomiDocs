---
slug: poiyomi-toon-9-1-22-changes
title: 'Poiyomi Toon 9.1.22 & Pro 9.2.12 Changelog'
description: Information regarding the release of Poiyomi Toon 9.1.22 & Pro 9.2.12.
hide_table_of_contents: true
authors:
  poiyomi
tags: [shader, vrchat, updates, update]
---

This update contains a significant amount of bug fixes and is recommended for all users. The Toon version is now available in the VCC Repository, GitHub, and on BOOTH.

[See the previous blog post](/blog/2025-02-06-poiyomi-toon-9-1-20-changes.md) for an assortment of major features that were added in the last update.

### Changes
- The Color Grading texture now has a Thry Gradient Editor UI.
- **Outline Color Adjust is now 4 separate floats instead of a float4** so it's easier to animate individual values. Documentation has been updated.
  - **This will break existing settings!!**
  - Shader Translator was adjusted to accommodate this change.
- `Ignore Directional` in Light Data has been renamed to `Ignore Directional Lights` for clarity.
- Removed an extra visible Hue Shift checkbox from the Emission 2 Color Adjust. Why was that even there in the first place? The world may never know...
- Gamma can now be used with Global Masks.

### Fixes
- Fixed Rim Bias issue when Locking the Material.
  - The Bias wasn't working the same between Locked and Unlocked.
- Fixed an issue with the Pixel Normal Mix in Reflections & Specular not functioning correctly.
- Fixed a typo in the Material Property name for Gamma.
  - The Material Property name in question is now `_MainGamma` instead of `_MainGammma`.
- Fixed an issue with the Color Adjust Mask's Alpha value from being used with Gamma.
- Fixed an issue with Stylized Reflections not correctly detecting Reflection Probes in Worlds.