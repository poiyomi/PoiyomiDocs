---
sidebar_position: 3
title: Fur (Pro)
description: The Poiyomi Fur Shader enables simulation of fabrics and hairs using a specialized technique similar to Height, at a notable performance cost.
keywords: [fur, fur shader, poiyomi fur, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

# Fur

The Poiyomi Fur Shader is a system that uses a height-based technique to enable simulation of fabrics and hairs. It can look similar to how fur is simulated in animated films but with some differences.

To use Poiyomi Fur, select the shader version `.poiyomi/Poiyomi Pro Fur`. This exposes the Fur category with the following settings shown below.

:::info Pro Only
**This Feature is only available in Poiyomi Pro!** Subscribe to the [Patreon](https://www.patreon.com/poiyomi) at the $10 tier or higher to access it.
:::

:::danger
Poiyomi Fur is a very expensive feature, as it must render every frame in order to simulate the effect. As such, this will cause a huge performance impact, so use it carefully!
:::

## Layer Count

- `Type`: **Float**, Range: `1.0 - 31.0`

How many fur layers to use. The higher the value, the more fur simulation will occur.

## Length

- `Type`: **Float**, Range: `0.0 - 0.05`

How much length the fur should be from the surface of the Mesh.

## Gravity Strength

- `Type`: **Float**, Range: `-1.0 - 1.0`

How much Gravity should be simulated on the fur.

## Color

- `Type`: **Color**

The Base Color of the Fur, if no Texture is defined.

## Fur Texture

- `Type`: **Color** Texture (`sRGB = ON`)

Texture pattern to use as the fur.

## Apply Fur Texture to Skin

- `Type`: **Boolean**

If enabled, applies the Fur Texture to the skin's surface.

## Mask

- `Type`: **Data** Texture (`sRGB = OFF`)

Texture slot to use for masking areas where Fur should only simulate.

## Height Map

- `Type`: **Data** Texture (`sRGB = OFF`)

Specify which Height Map to use for the Fur. This is the main driver for the Fur simulation.

## Height Map Min Max

- `Type`: **Variable Float**, Range: `0.0 - 1.0`

Determines the intensity of the Height range as determined by the Height Map.

## AO

- `Type`: **Float**, Range: `0.0 - 1.0`

Intensity of Ambient Occlusion to use on the Fur simulation.

## AO Min Max

- `Type`: **Variable Float**, Range: `0.0 - 1.0`

Determines the intensity of the AO range.

## Hue Shift

- `Type`: **Boolean**

Enables options to change the Hue of the fur color using the Animator.

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

- `Hue Select`: Directly applies the selected Hue as an override to the entire Fur.
- `Hue Shift`: Only tints the Fur based on the lerped value. This is the default behavior.

</details>

### Shift Speed

- `Type`: **Float**

How much to constantly shift the hue with time. A value of 1 will result in a full hue shift cycle every 20 seconds.

### Hue Shift

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to shift the fur color around the hue circle. 

This value is circular, and will have the same result at 0 and 1.

## Advanced

### Vertex Color Normals

- `Type`: **Boolean**

If enabled, uses Vertex Color Normals for the Fur surface.

### Min Distance

- `Type`: **Float**

The minimum distance of the Fur.

### Max Distance

- `Type`: **Float**

The maximum distance of the Fur.