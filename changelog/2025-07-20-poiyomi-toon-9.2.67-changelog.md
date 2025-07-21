---
slug: poiyomi-toon-9-2-67-changelog
title: 'Poiyomi Toon 9.2.67 Changelog'
description: Information regarding the release of Poiyomi Toon 9.2.67.
hide_table_of_contents: true
authors:
  poiyomi
tags: [shader, vrchat, updates, update]
---

This update contains finalized support for VRC Light Volumes 2.0 and is recommended for all users. The Toon version is now available in the VCC Repository, GitHub, and on BOOTH.

### Changes
- Updated to support the full release of VRC Light Volumes v2.0.0.
- Added Exposure Occlusion to Reflections & Specular and Clear Coat.
- Cam Z Offset in Outlines was overhauled into `Outline Z Offset`, allowing greater control over the clipping of Outlines in certain areas.
  - The equation used to set the Cam Z Offset has changed with this introduction. **This is a breaking change!**