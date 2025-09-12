---
title: Poiyomi Toon 9.2.73 & Pro 9.3.43 Changelog
description: Information regarding the release of Poiyomi Toon 9.2.73 & Pro 9.3.43
hide_table_of_contents: true
authors:
  poiyomi
tags: [shader, vrchat, updates, update, pro]
---

This update to the Shader contains some various improvements and bug fixes. The Toon version is now available in the VCC Repository, GitHub, and on BOOTH.

## Toon 9.2.73

### Changes
- Removed 3 samplers from the shader so the shader won't go pink from hitting the cap.
- Added links to the following new Docs pages:
  - Stochastic Sampling
  - Distortion UV
  - Local World UV
  - Panosphere UV
  - Polar UV
- Added `Anti Mesh Penetration` feature in Vertex Options.
  - This pushes the mesh back when the camera gets too close, which stops you from seeing the inside of the mesh. Makes things a little more immersive.

<PoiVideo url='/vid/vertex-options/anti-mesh-penetration-example.webm' width='300px'/>
<em>*Example of Anti Mesh Penetration in action.*</em>

### Fixes
- Dissolve Edge Hue Shift no longer Hue Shifts when the Hue Shift section is disabled.
- Fixed enabling "Color Intensity to Alpha" causing Flipbooks to become tiled even if tiling was disabled.
- Fixed a typo in Rim Lighting where Blend Mode "Normal" was written instead of "Replace."

## Pro 9.3.43

You can download the Pro version from [pro.poiyomi.com](https://pro.poiyomi.com) by logging in via your Patreon account.

### Changes
- Everything in Toon 9.2.73.
- Added an Aura Preset for the Two Pass Particle Shader.