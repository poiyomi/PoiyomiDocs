---
title: Poiyomi Toon & Poiyomi Pro 9.3.52 Changelog
description: Information regarding the release of Poiyomi Toon & Poiyomi Pro 9.3.52
hide_table_of_contents: true
authors:
  poiyomi
tags: [shader, vrchat, updates, update, free, pro]
---

## This is a major release!

Poiyomi Toon has been graduated to version 9.3 and introduces a new shading feature called **Constellation**, exclusive to Poiyomi Pro.

The Toon version is now available to download in our Discord server. Please test it out! As soon as we can confirm this version is bug-free, this will be the version released on the VCC, GitHub, and on BOOTH.

Poiyomi Pro Users: Download the latest Pro version from [pro.poiyomi.com](https://pro.poiyomi.com) by logging in with your Patreon account.

## Toon

### Changes
- Added Lil Fur and Lil Fur Two Pass shaders.
  - The Lil Fur shaders are independent and do not stack with each other. This is vastly different from the Poiyomi Fur shader.
  - Please read more on how Lil Fur functions in Poiyomi Shaders on the Documentation page [here](https://www.poiyomi.com/extended-features/lilfur).
- All Documentation Links have been updated.
- Fixed a bug when Decal was set to Back Only or Front Only, the Alpha Blend Mode still affected the other side of the mesh.

## Pro

### Changes
- Includes all changes in Toon (see above).
- Fixed Audio Link settings being broken in the Particle shader.
- Added a Constellation module to Special FX.
  - Pro Only for now because it could be buggy.
  - Started with this lil [Tutorial](https://www.youtube.com/watch?v=3CycKKJiwis) and played around.
- TPS Changes by NoachiCode
  - Added a Toggle for two-sided rings.
  - Fixed light direction to work with all types of DPS lights.
  - Improved behavior when the Orifice moves past the penetrator
    - It will still try to go into the orifice instead of the current behavior, where it just gives up, which causes the penetrator to clip through things because it's no longer deforming or being affected by the hole
  - Redesigned the Bezier curve evaluation to use Bishop Frame instead of Frenet Frame for more stable normal calculation
    - This results in much smoother deformation and eliminates weird twist behavior
