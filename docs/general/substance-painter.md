---
sidebar_position: 5
title: Substance Painter
description: Using Substance Painter's Export Templates for Poiyomi Shaders.
keywords: [substance, 3d, painter, substance painter, export preset, export, preset, poiyomi, shader]
---

[Adobe Substance Painter](https://www.adobe.com/products/substance3d-painter.html) is frequently used for authoring PBR (Physically Based Rendering) texture maps, and works well for creating realistic looking textures. Provided on this page are some project settings and export presets for Substance Painter that can be used to easily export textures for use in a Poiyomi Material.

## Project Settings

For the most part, you'll be using whichever default Substance Shader was assigned in your Project. Usually that would be `pbr-metal-rough` or `asm-metal-rough`, etc.

To ensure you are using whichever one you prefer, click `Window -> Views -> Shading settings` from the Menu Bar in Substance Painter.

Most, if not all Shaders in Substance Painter, should work when previewing the Material. However, if you plan to use `Opacity` to control levels of transparency, choose a version that supports it. If you are painting areas for things such as Glass, you would want to use something like `pbr-metal-rough-with-alpha-blending` or similar. *In Substance Painter v9.1.0 and newer versions, `asm-metal-rough` added support for transparency, which can be enabled in the Shading settings by toggling `Enable alpha test` or `Enable alpha blending`.*

## Export Presets

:::info Recently Updated!
These templates were updated to include new workflows that were introduced between 8.0 and 9.0. However, the naming of the Texture files have been changed for simplicity.
:::

To use these presets, download them and add them to your substance project either by navigating to `File -> Import Resources` and adding them, or dragging them onto the shelf (which will open the same interface with the presets pre-selected)

Alternatively, place these presets in your exports folder. For most people, this is located in one of the following locations:

- **v7.2 and newer:** `C:\Users\*UserName*\Documents\Adobe\Adobe Substance 3D Painter\assets\export-presets`
- **Legacy Versions:** `C:\Users\*UserName*\Documents\Substance 3D Painter\shelf\export-presets`

## Download

:::tip Latest 9.0+ Export Templates
<h3> 📥 <a target="_blank" href="/assets/substance/Unity Poiyomi V9 r2024-03-20.spexp" download="Unity Poiyomi V9 r2024-03-20.spexp"><b><code>Unity Poiyomi V9 r2024-03-20.spexp</code></b></a></h3>
<h3> 📥 <a target="_blank" href="/assets/substance/Unity Poiyomi V9_ExtraMaps r2024-03-20.spexp" download="Unity Poiyomi V9_ExtraMaps r2024-03-20.spexp"><b><code>Unity Poiyomi V9_ExtraMaps r2024-03-20.spexp</code></b></a></h3>
:::

## Usage

### Textures

Textures have a specific prefix when exported: `t_$textureSet_`. `t` indicates it's a texture (and groups textures together when sorted), `$textureSet` which the name of the Material set set being used. At the end of the filename is the type of texture, which will be one of the following:

- `BaseColor`: Place in the [`Main Texture`](/docs/color-and-normals/color-and-normals.md#main-texture) slot in [Color & Normals](/docs/color-and-normals/color-and-normals.md).
- `NormalMap`: Place in the [`Normal Map`](/docs/color-and-normals/color-and-normals.md#normal-map) texture slot in [Color & Normals](/docs/color-and-normals/color-and-normals.md). Make sure to mark it as a normal map in the texture import settings.
- `AmbientOcclusion`: Place in the [`AO`](docs/shading/light-data.md#ao-maps) texture slot in [Light Data](/docs/shading/light-data.md). Make sure to **uncheck sRGB** in the texture import settings.
- `MetallicSmoothnessMaps`: Place in the [`Packed Maps`](/docs/shading/reflections-and-specular.md#packed-maps) texture slot in [Reflections & Specular](/docs/shading/reflections-and-specular.md). Make sure to **uncheck sRGB** in the texture import settings, and that all of your sliders are set to 1.0, which uses the map's value. Note that this uses `User0` and `User1` channels in Substance Painter for the Reflection and Specular masks respectively, which can be hand-authored to control the amount of reflection and specular.
- `EmissionMap`: Place in the [`Emission Map`](/docs/special-fx/emission.md#emission-map) texture slot in [`Emission`](/docs/special-fx/emission.md).
- `GlobalMask`: Place in one of the Global Mask texture slots in [`Global Mask`](/docs/modifiers/global-masks.md). Make sure to **uncheck sRGB** in the texture import settings. Note that this uses the custom **User channels** in Substance for your Masks. This Template is programmed to use `User10` for the `R` channel, `User11` for the `G` channel, `User12` for the `B` channel, and `User13` for the `A` channel.

<a target="_blank" href="/img/general/substance_texturelocations.png">
<img src="/img/general/substance_texturelocations.png" alt="V8 Export Texture Locations"/>
</a>

*V9 Export Texture Locations (click to zoom)*

### Usage Notes

PBR textures look best when paired with realistic lighting. To take best advantage of this, good [Shading](docs/shading/main.md) settings are recommended. Some good starting points include:

- [Realistic](/docs/shading/main.md#realistic) shading
- [Multilayer Math](/docs/shading/main.md#multilayer-math) shading, using only the first layer with a Border between `0.4` and `0.7` and a Blur of `0.4-0.6`
- [Wrapped](/docs/shading/main.md#wrapped) shading with a wrap of around `1.0` and a normalization of around `0.5`

Matcaps are not recommended, as they don't respond to the lighting environment the way metallics and specular do.

PBR shading relies on the world lighting being well-defined and correct. In worlds that are not lit correctly, base shading and metallic/specular effects may look wrong, or may be completely invisible.

### ExtraMaps

When using the `ExtraMaps` preset, additional textures are exported:

- All textures from the [v8 preset](#textures).
- The `v7MetallicGlossiness` texture for poiyomi v7 metallics and smoothness, which is also compatible with the Unity Standard Shader.
- `AlphaMap`: Separate alpha/opacity map for the base texture. Can be used to optimize the base texture, or for other effects based around the opacity of the material.
    - *You should not use Alpha Map unless it's absolutely necessary. This is because the Alpha is already encoded into the Main Texture when using the `Opacity` channel in Substance Painter.*
- `Height`: Height map. Currently best used as a height texture in Parallax Heightmapping. Can also be used directly as a vertex offset, though this usually does not have the same effect.

## Legacy (v7)

A legacy export preset is provided for compatibility with Poiyomi v7. It is recommended that you upgrade to Poiyomi v8, as v7 is no longer actively supported or developed.

### Poiyomi V7 Preset Download

:::info Legacy v7 Template
<h3> 📥 <a target="_blank" href="/assets/substance/Unity Poiyomi V7 r2022-07-07.spexp" download="Unity Poiyomi V7 r2022-07-07.spexp"><b><code>Unity Poiyomi V7 r2022-07-07.spexp </code></b></a> </h3>
:::

### Usage

- `BaseColor`: Place in the `Main Texture` slot in **Main**.
- `NormalMap`: Place in the `Normal Map` texture slot in **Main**. Make sure to mark it as a normal map in the texture import settings.
- `AmbientOcclusion`: Place in the `Ambient Occlusion` texture slot in **Light & Shadow**. Make sure to **uncheck sRGB** in the texture import settings.
- `v7MetallicGlossiness`: Place in the `Metallic Gloss Map` texture slot in **Metallics & Specular**. Make sure to **uncheck sRGB** in the texture import settings. This texture is also compatible with the Unity Standard Shader.
- `EmissionMap`: Place in the `Emission Map` texture slot in **Emission**.
