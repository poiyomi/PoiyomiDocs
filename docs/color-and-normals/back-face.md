---
sidebar_position: 6
title: Back Face
description: Back Face properties of the Material in Poiyomi Shaders.
keywords: [backface, back, face, inverted normal, poiyomi, shader, material]
---
import PoiVideo from '@site/src/components/PoiVideo'

Back Face provides options for modifying the base color, emission, and alpha for the backfaces of a mesh.

On 3D models, meshes typically only show it's faces on one side, that being the front-facing side. The back-facing side of the mesh is usually see-through, an effect that you can get when you are looking from inside a model. Shaders can control this behavior, forcing the back-facing side of the mesh to also render if the user desires for whatever reason.

:::caution Disable Culling to use this feature!
To use this section, [Cull](/docs/rendering/main.md#cull) must be set to `Off` in order for backfaces to be visible. Find this option under [Rendering](/docs/rendering/main.md).
:::

## Color

- `Type`: **Color**

Tint color to multiply the backface by.

## Texture

- `Type`: **Color** Texture (`sRGB = ON`)

Texture to override the backface base color with instead.

## Mask

- `Type`: **Data** Texture (`sRGB = OFF`)

Texture used to mask the effect of backface color, texture, emission, and alpha modifiers.

## Emission Strength

- `Type`: **Float**, Range: `0.0 - 20.0`

How much Emission to add to the backface. Draws from the backface color.

## Hue Shift

- `Type`: **Boolean**

Enable or Disable Hue Shift for the backface base color.

### Color Space

- `Type`: **Dropdown**, Options: `OKLab`/`HSV`

Choice of Color Space to use for the Hue Shift. By default, it will be set to `OKLab`.

Learn about the difference of Color Spaces as documented here in [Color Adjust](/docs/color-and-normals/color-adjust.md#oklab-vs-hsv).

### Select or Shift

- `Type`: **Dropdown**, Options: `Hue Select`/`Hue Shift`
  - Default: `Hue Shift`

This dropdown allows you to select how the Color Adjustment should behave when the Hue Shift is used. By default, this will be set to `Hue Shift`.

<details>
<summary><b>Select or Shift Options</b></summary>

- `Hue Select`: Directly applies the selected Hue as an override to the entire Backface.
- `Hue Shift`: Only tints the Backface based on the lerped value. This is the default behavior.

</details>

### Shift

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to shift the backface base color around the hue circle. 

This value is circular, and will have the same result at 0 and 1. 

### Shift Speed

- `Type`: **Float**

How much to constantly shift the hue with time. A value of 1 will result in a full hue shift cycle every 20 seconds.

## Backface Mods

### Detail Intensity

- `Type`: **Float**, Range: `0.0 - 5.0`

Detail Intensity backface multiplier for detail textures in the [Details](/docs/color-and-normals/details.md) section.

### Replace Alpha

- `Type`: **Boolean**

Whether to replace the alpha value for the backface with the alpha calculated from the Backface Texture and Alpha settings.

### Global Emission Multiplier

- `Type`: **Float**

Custom Multiplier to limit the [Emissions](/docs/special-fx/emission.md) shown on the backface.