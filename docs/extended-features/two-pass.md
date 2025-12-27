---
sidebar_position: 0
title: Two Pass
description: The Poiyomi Two Pass shader renders two rendering passes on the shader, commonly used on meshes that need double rendering passes.
keywords: [two pass, 2nd pass, two, pass, poiyomi, shader]
---

The Two Pass version does two rendering passes on the shader with the inside of the Mesh rendered first and the outside second (Cull Front > Cull Back). This special version should only be used when creating Meshes that need to have double the rendering pass, especially with Transparency.

To use the Two Pass shader, select the shader version `.poiyomi/Poiyomi Toon Two Pass`. When this shader is selected, a `2nd Pass` category will be exposed on the UI below Color & Normals with the properties shown below. Additionally, three additional sections will be exposed under [Rendering](/docs/rendering/rendering.md) and will appear as `2nd Pass Rendering`, `2nd Pass Blending`, and `2nd Pass Stencil`.

:::warning Performance Warning
Because the Two Pass shader renders everything twice, it can have a slight performance impact. Use it wisely!
:::

## 2nd Pass

### Rendering Preset

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**

Sets the Rendering Preset for the 2nd Pass. Refer to the [Rendering Presets](/docs/general/render-preset.md) for more information on what they do.

### First Pass Mask

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Sets which Global Mask should be used as the Mask for the Base Pass.

### 2nd Pass Mask

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Sets which Global Mask should be used as the Mask for the 2nd Pass.

### Override Main Color

- `Type`: <PropertyIcon name="toggle" />**Toggle**

If enabled, the Second Pass will override the Main Color of the Material.

### Alpha Cutoff

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Just like it was described in [Color & Normals](/docs/color-and-normals/color-and-normals.md#alpha-cutoff), the **Alpha Cutoff** value sets the alpha value for the 2nd Pass at which to [clip](https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-clip) a pixel. If the alpha value of a pixel is below this value, the pixel is [discarded](https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-discard).

### Invert Alpha Cutoff

- `Type`: <PropertyIcon name="toggle" />**Toggle**

This inverts the Alpha Cutoff.

### Force Opaque

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Just like it was described in [Alpha Options](/docs/color-and-normals/alpha-options.md#force-opaque), this option forces the 2nd Pass to have an alpha value of 1. Generally, this will result in any transparency on the 2nd Pass being disabled.

### Alpha Power

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 10.0`

Sets the power factor of the Alpha on the 2nd Pass.
