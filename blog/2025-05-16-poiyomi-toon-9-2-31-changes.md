---
slug: poiyomi-toon-9-2-31-changes
title: 'Poiyomi Toon 9.2.31 & Pro 9.3.1 Changelog'
description: Information regarding the release of Poiyomi Toon 9.2.31 & Pro 9.3.1.
hide_table_of_contents: true
authors:
  poiyomi
tags: [shader, vrchat, updates, update]
---

Introducing Poiyomi 9.2.31, a major update containing a significant amount of UI updates, improvements, as well as bug fixes! This is the first release of the publicly-accessible version of Poiyomi 9.2.

The Toon version is now available in the VCC Repository, GitHub, and on BOOTH.

:::warning Vertex Users: Heads Up!
This update significantly reorganized ALL Vertex-related features into a new dedicated section! They have all been moved underneath the new **Vertex Options** section, located <u>in-between</u> **AudioLink** and **Global Modifiers & Data** sections.

Documentation has been updated to match this change.
:::

### Added
- Added a `Circle Mask` option for **Matcap**, allowing you to have smaller matcaps without having them repeat.
  - *You can smooth the falloff of a matcap by blurring the mask, using the sliders exposed when enabling this feature.*
- Added `Light Color Mix` to **Matcap** as a blending option, which blends the Matcap with the Light color.
- Added an option to mask parts of your Material via UDIM as blocking volumes, for dealing with Worlds that have Post Processing Ambient Occlusion. You can use this to prevent your eyes from turning black.
- Added **Truchet** tiling feature.
- Added the ability to write notes on headers. To use it, Right-Click the 3 Dots on the right side for the option.

### Changes
- **ALL Vertex Options have been renamed and reorganized into a dedicated section.** You can find this new section located <u>in-between</u> **AudioLink** and **Global Modifiers & Data** sections.
  - Renamed **Vertex Options** to **Basics & Fun** as a sub-category of **Vertex Options**.
  - Renamed **Vertex Glitching** to simply **Glitching** as a sub-category of **Vertex Options**.
  - Moved **Vertex Colors** as a sub-category of **Vertex Options**.
- **RGBA Color Masking** now has a per-channel `Scale & Offset` option to hopefully make things less annoying to creators using it.
- **RGBA Color Masking** Normals can now be optionally blended with only the Base Normals and not the RGBA Layers before it.
- **Emissions** have been converted from a 4 in 1 module to a 1 in 1 module. This means the extra 3 slots are now generated from the base code.
  - *Appearance wise, you shouldn't notice a difference!*
- **Emissions** now has support for the Color and Texture Alpha.
  - *Textures with `0` Alpha will not be emissive, while `1` Alpha will be fully emissive.*
  - *Lowering the Alpha channel of the `Emission Color` to `0` will also disable emissions.*
- The Material Property `_EmissionFluorescence` has been added to the code for Shader Translation purposes.
- `DepthGet` Prefab changed to `Non Important`. This should solve some issues and improve performance in some cases.

### Fixes
- Fixed a bug causing Post Processing AO to not function property with specific settings.
- Improved the fidelity of Matcaps at long range and steep angles.
  - *This should be super obvious on jewelry.*
- Fixed missing labels in UV Tile Discard.
- Fixed a bug with RGBA Color Masking breaking due to latest changes.
- Fixed a bug causing Color Themes to not work with LilToon-style Rim Lighting.

### Pro Changes
- Added **LookAt** as a Vertex Option, allowing you to orient your Mesh to face the Camera.