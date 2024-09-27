---
slug: 2024-09-12-poiyomi-toon-9-0-60-changelog
title: 'Poiyomi Toon 9.0.60 Update'
description: Details on the latest major update, Toon v9.0.60 and Pro v9.1.12.
hide_table_of_contents: true
authors:
  teeh
keywords: [shader, docs, documentation, updates]
---

Hi! I'm Teeh. After a long wait, a new version of Poiyomi Shaders is finally ready to release! There's been a lot of bug fixes and new features added, so let me show you the highlights for Poiyomi Toon 9.0.60, and Poiyomi Pro 9.1.12.

See the video patch notes below for more information.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/5xrYYcP4EkE?si=TO5iXVR7NWWw4xNw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Major Changes

### AMD Fixes

Some previously Pro-only AMD fixes are being rolled back into Toon. There's still work to be done, but we're not ignoring you guys! Keep an eye out for more details later on.

### Unity 2019 Fixes

Compatibility with Unity 2019 has been fixed! This should now allow you to use the Shader for either ChilloutVR, Beat Saber, and VSeeFace (or other V-tubing software of your preference).

### Bakery

We fixed issues with Emissive Materials on the Poiyomi World shader not appearing in Bakery, a third-party GPU Lightmapper.

This also includes the ability to preview the Emissive properties from Poiyomi World materials in Bakery as well.

### Missing Locked Materials

If a Locked Material is missing for whatever reason, the UI will now indicate this and prompt you to unlock it. This should help alleviate issues with Materials unable to Unlock in cases where the generated `OptimizedShaders` files went missing or were accidentally deleted.

### Major Shader Translator Upgrades

Last, but not least, is the Poiyomi Material Translator. The goal of this Tool is to easily translate Materials from any other Shader, including from older versions of Poiyomi, as accurate as possible. Shaders such as lilToon can be translated to Poiyomi Shaders easily, with all properties completely converted without any major differences. No more fiddling with MatCap masks and shading settings!

To use the new feature, a new context menu option was added in Unity. `Right-Click` on an Avatar or Mesh in the Hierarchy OR on a Material in your Files, and in the context menu, click `Poiyomi -> Materials -> Translate to Poiyomi Toon` to run the program. This will seamlessly convert the configuration of those Materials to appear properly in Poiyomi Shaders.

You can also have it make a Copy of the Material(s) with the converted properties. To use that, select `Translate Copy to Poiyomi Toon` from the same context menu instead. If there are multiple Materials, they will be organized automatically.

## Full Changelog

- Added new Documentation Links in the UI to the following sections (thanks @BluWizard10 for all the hard work on the Docs!)
  - Shading/Anisotropics
  - Shading/Backlight
  - Shading/LTCGI
  - Special FX/Depth FX
  - AudioLink
  - AudioLink/AL Spectrum
  - AudioLink/AL Volume Color
  - Global Modifiers & Data/Global Data & Masks/Global Mask
  - Global Modifiers & Data/UVs/Parallax Heightmapping
- **You can now translate from LilToon to Poiyomi.** Right-Click your Avatar or any Material basically anywhere, then click `Poiyomi -> Materials -> Translate to Poiyomi Toon`.
  - The `Translate to Poiyomi Toon` function will translate the Materials in-place.
  - If you select `Translate Copy to Poiyomi Toon`, the program will create copies of the Materials and then translate them. Use this if you want to preserve the original Materials.
  - *Pro Users: You can choose to `Translate to Poiyomi Pro` if you so wish.*
- **Shader:** Alpha Mask Blend Strength was internally named `_AlphaMaskScale` and had compatibility problems when converting from other Shaders to Poiyomi. It has been renamed to `_AlphaMaskBlendStrength`. If you were using this, the value will be reset to `1.0`.
- **Shader:** Added `Mirrored UV Mode` to Decals.
  - This helps control the visibility of Decals on models with overlapping UVs (or mirrored UVs). Set it to Flip on one side, or be on one side only.
- **Shader:** Added `Symmetry Mode` to Decals.
  - If enabled, will put the Decal on both sides by dividing the UV down the center.
  - *Works only on Models with perfect Symmetrized UVs.*
- **Shader:** Added `Z Clip` to Rendering, which commands the ZClip command in the Shader. [ZClip on Unity Documentation](https://docs.unity3d.com/Manual/SL-ZClip.html)
- **Shader:** Added `Color Space` dropdown to various Color Adjust settings.
  - `OKLab` provides better and more accurate perceptive color changes. This can eliminate issues with noise and colors being washed out when adjusting the Hue.
  - `HSV` is the "legacy" method, reflecting how the Hue Shift behaved in 8.1 and older.
- **Fix:** Fixed Alpha Offset being backwards when Alpha was inverted. It now functions the same way, inverted or not.
- **Fix:** Grayscale for Cloth Shading now works as intended.
- **Fix:** The first round of fixes for AMD computers have been implemented.
- **Fix:** Improved compatibility with Unity 2019 all the way thru Unity 2022.
- **Fix:** Fixed lightmapping code in `Poiyomi World` shaders, causing Emissive Materials to not work properly with Bakery.
- **UI:** Added an Unlock Button to Locked Materials that have missing files, fixing an issue with Material properties being lost when the `OptimizedShaders` folder goes missing.
- **UI:** Redesigned the Material UI Header. *[Example](https://pbs.twimg.com/media/GOiSuTFWwAAaU1O?format=png&name=900x900)*
  - `Search` is now shown as a Text field, instead of an Icon.
  - `Presets` is now a Button, instead of an Icon.
  - Both the `Presets` button and `Rendering Presets` dropdown are now aligned opposite of each other, underneath the Lock/Unlock button.
- **UI:** ThryEditor updated to v2.56.5.

*Some patch notes were lost because Poiyomi's Hard Drive failed. You may find some of them as Easter Eggs instead. Happy hunting!*