---
sidebar_position: 5
title: Substance Painter Export
---
import PoiVideo from '@site/src/components/PoiVideo'

[Adobe Substance Painter](https://www.adobe.com/products/substance3d-painter.html) is frequently used for authoring PBR (Physically Based Rendering) texture maps, and works well for creating realistic looking textures. Provided on this page are some export presets for Substance Painter that can be used to easily export textures for use in a Poiyomi Material.

To use these presets, download them and place them in your exports folder. For most people, this is located in one of the following locations:

- `C:\Users\*UserName*\Documents\Substance 3D Painter\shelf\export-presets`
- `C:\Users\*UserName*\Documents\Adobe\Adobe Substance 3D Painter\assets\export-presets`

### Download

:::info
<h3> 📥 <a target="_blank" href="/assets/substance/Unity Poiyomi V8 r2022-07-07.spexp" download="Unity Poiyomi V8 r2022-07-07.spexp"><b><code>Unity Poiyomi V8 r2022-07-07.spexp</code></b></a></h3>

<h3> 📥 <a target="_blank" href="/assets/substance/Unity Poiyomi V8_ExtraMaps r2022-07-07.spexp" download="Unity Poiyomi V8_ExtraMaps r2022-07-07.spexp"><b><code>Unity Poiyomi V8_ExtraMaps r2022-07-07.spexp</code></b></a></h3>
:::

## Usage

### Textures

Textures have a specific prefix when exported: `t_$mesh_$textureSet_`. `t` indicates it's a texture (and groups textures together when sorted), `$mesh` which is the name of the mesh, `$textureSet` which the name of the texture set being used. At the end of the filename is the type of texture, which is one of the following:

- `BaseColor`: Place in the [`Texture`](docs/color-and-normals/main.md#main-texture) slot in [Color & Normals](docs/color-and-normals/main.md).
- `NormalMap`: Place in the [`Normal Map`](docs/color-and-normals/main.md#normal-map) texture slot in [Color & Normals](docs/color-and-normals/main.md). Make sure to mark it as a normal map in the texture import settings.
- `AmbientOcclusion`: Place in the [`AO Maps`](docs/shading/light-data.md#ao-maps) texture slot in [Light Data](docs/shading/light-data.md). Make sure to **uncheck sRGB** in the texture import settings.
- `MetallicSmoothnessMaps`: Place in the [`Maps`](docs/shading/reflections-and-specular.md#maps) texture slot in [Reflections & Specular](docs/shading/reflections-and-specular.md). Make sure to **uncheck sRGB** in the texture import settings, and that all of your sliders are set to 1.0, which uses the map's value. Note that this uses user channels 0 and 1 in Substance Painter for the Reflection and Specular masks respectively, which can be hand-authored to control the amount of reflection and specular.
- `EmissionMap`: Place in the [`Emission Map`](docs/special-fx/emission.md#emission-map) texture slot in [`Emission`](docs/special-fx/emission.md).

<a target="_blank" href="/img/general/substance_texturelocations.png">
<img src="/img/general/substance_texturelocations.png" alt="V8 Export Texture Locations"/>
</a>

*V8 Export Texture Locations (click to zoom)*

### Usage Notes

PBR textures look best when paired with realistic lighting. To take best advantage of this, good [Shading](docs/shading/main.md) settings are recommended. Some good starting points include:

- [Realistic](docs/shading/main.md#realistic) shading
- [Multilayer Math](docs/shading/main.md#multilayer-math) shading, using only the first layer with a Border between `0.4` and `0.7` and a Blur of `0.4-0.6`
- [Wrapped](docs/shading/main.md#wrapped) shading with a wrap of around `1.0` and a normalization of around `0.5`

Matcaps are not recommended, as they don't respond to the lighting environment the way metallics and specular do.

PBR shading relies on the world lighting being well-defined and correct. In worlds that are not lit correctly, base shading and metallic/specular effects may look wrong, or may be completely invisible.

### ExtraMaps

When using the `ExtraMaps` preset, additional textures are exported:

- All textures from the [v8 preset](#textures).
- The `v7MetallicGlossiness` texture for poiyomi v7 metallics and smoothness, which is also compatible with the Unity Standard Shader.
- `AlphaMap`: Separate alpha/opacity map for the base texture. Can be used to optimize the base texture, or for other effects based around the opacity of the material.
- `Height`: Height map. Currently best used as a height texture in Parallax Heightmapping. Can also be used directly as a vertex offset, though this usually does not have the same effect.
- `Metallic`/`Smoothness`: Metallic/smoothness maps. These can be used as separate textures for effects that go along with the metallic or smooth areas of the material.

## Legacy (v7)

A legacy export preset is provided for compatibility with Poiyomi v7. It is recommended that you upgrade to Poiyomi v8, as v7 is no longer actively supported or developed.

### Poiyomi V7 Preset Download

:::info
<h3> 📥 <a target="_blank" href="/assets/substance/Unity Poiyomi V7 r2022-07-07.spexp" download="Unity Poiyomi V7 r2022-07-07.spexp"><b><code>Unity Poiyomi V7 r2022-07-07.spexp </code></b></a> </h3>
:::

### Usage

- `BaseColor`: Place in the `Main Texture` slot in **Main**.
- `NormalMap`: Place in the `Normal Map` texture slot in **Main**. Make sure to mark it as a normal map in the texture import settings.
- `AmbientOcclusion`: Place in the `Ambient Occlusion` texture slot in **Light & Shadow**. Make sure to **uncheck sRGB** in the texture import settings.
- `v7MetallicGlossiness`: Place in the `Metallic Gloss Map` texture slot in **Metallics & Specular**. Make sure to **uncheck sRGB** in the texture import settings. This texture is also compatible with the Unity Standard Shader.
- `EmissionMap`: Place in the `Emission Map` texture slot in **Emission**.
