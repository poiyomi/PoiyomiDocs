---
title: Poiyomi Toon 9.2.79 & Pro 9.3.49 Changelog
description: Information regarding the release of Poiyomi Toon 9.2.79 & Pro 9.3.49
hide_table_of_contents: true
authors:
  poiyomi
tags: [shader, vrchat, updates, update, free, pro]
---

This update includes some important bug fixes and changes. If there aren't any more big bugs, there will be one more big 9.3 feature and then it's time for Poiyomi v10.0 alpha.

The Toon version is now available in the VCC Repository, GitHub, and on BOOTH.

Poiyomi Pro Users: Download the latest Pro version from [pro.poiyomi.com](https://pro.poiyomi.com) by logging in via your Patreon account.

## Toon 9.2.79

### Changes
- Added a new UI element to RGBA Color Masking which allows you to select exactly which layers you can blend the Normals with.
- Added a few more Texture Slots so people shouldn't run into the 64 texture crash as much.
- Fixed Light Direction being completely broken for like 10 patches. 🙂
- Fixed a bug with RGBA Masking Normal Blending where it was improperly blending with the selected normal layer.

### Thry Editor
- Updated to 2.68.2.
- New Drawers: FourFloatCurveDrawer, Ramp4Drawer, and ThryVector.
- Several DataStructs additions.
- Several updates to Helpers.
- Major ShaderHeader and ShaderProperty script changes.
- Fixed Notes overlapping some icons in Section Headers. (BluWizard10)

## Pro 9.3.49

### Changes
- Includes all changes in Toon (see above).
- Fixed a bug with DPS/TPS/SPS and Vertex IDs in the Tessellated shader.