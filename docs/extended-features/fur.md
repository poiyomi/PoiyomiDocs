---
sidebar_position: 3
title: Fur
description: The Poiyomi Fur Shader enables simulation of fabrics and hairs using a specialized technique similar to Height, at a notable performance cost.
keywords: [fur, fur shader, poiyomi fur, poiyomi, shader]
---

The Poiyomi Fur Shader is a system that uses a height-based technique to enable simulation of fabrics and hairs. It can look similar to how fur is simulated in animated films but with some differences.

To use Poiyomi Fur, select the shader version `.poiyomi/Poiyomi Pro Fur`. This exposes the Fur category with the following settings shown below.

<!-- POIYOMI PRO LABEL -->
<a target="_blank" href="https://www.patreon.com/poiyomi">
<img src="/img/Poiyomi-Pro-Label.png" alt="Pro Feature" width="600px"/>
</a>

:::danger
Poiyomi Fur is an expensive feature, each layer increases the number of times your mesh must be rendered. Use it conservatively!
:::

## Layer Count

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `1.0 - 31.0`

How many fur layers to use. The higher the value, the more fur simulation will occur.

## Length

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 0.05`

How much length the fur should be from the surface of the Mesh.

## Gravity Strength

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `-1.0 - 1.0`

How much Gravity should be simulated on the fur.

## Color

- `Type`: <PropertyIcon name="color" />**Color**

The Base Color of the Fur, if no Texture is defined.

## Fur Texture

- `Type`: <PropertyIcon name="texture" />**Color** Texture (`sRGB = On`)

Texture pattern to use as the fur.

## Apply Fur Texture to Skin

- `Type`: <PropertyIcon name="toggle" />**Toggle**

If enabled, applies the Fur Texture to the skin's surface.

## Mask

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = Off`)

Texture slot to use for masking areas where Fur should only simulate.

## Height Map

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = Off`)

Specify which Height Map to use for the Fur. This is the main driver for the Fur simulation.

## Height Map Min Max

- `Type`: <PropertyIcon name="multislider" />**Multislider**, Range: `0.0 - 1.0`

Determines the intensity of the Height range as determined by the Height Map.

## AO

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Intensity of Ambient Occlusion to use on the Fur simulation.

## AO Min Max

- `Type`: <PropertyIcon name="multislider" />**Multislider**, Range: `0.0 - 1.0`

Determines the intensity of the AO range.

## Hue Shift

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables options to change the Hue of the fur color using the Animator.

### Color Space

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `OKLab`/`HSV`

Choice of Color Space to use for the Hue Shift. By default, it will be set to `OKLab`.

Learn about the difference of Color Spaces as documented here in [Color Adjust](/docs/color-and-normals/color-adjust.md#oklab-vs-hsv).

### Select or Shift

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Hue Select`/`Hue Shift`
  - Default: `Hue Shift`

This dropdown allows you to select how the Color Adjustment should behave when the Hue Shift is used. By default, this will be set to `Hue Shift`.

<details>
<summary><b>Select or Shift Options</b></summary>

- `Hue Select`: Directly applies the selected Hue as an override to the entire Fur.
- `Hue Shift`: Only tints the Fur based on the lerped value. This is the default behavior.

</details>

### Shift Speed

- `Type`: <PropertyIcon name="float" />**Float**

How much to constantly shift the hue with time. A value of 1 will result in a full hue shift cycle every 20 seconds.

### Hue Shift

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

How much to shift the fur color around the hue circle. 

This value is circular, and will have the same result at 0 and 1.

## Advanced

### Vertex Color Normals

- `Type`: <PropertyIcon name="toggle" />**Toggle**

If enabled, uses Vertex Color Normals for the Fur surface.

### Min Distance

- `Type`: <PropertyIcon name="float" />**Float**

The minimum distance of the Fur.

### Max Distance

- `Type`: <PropertyIcon name="float" />**Float**

The maximum distance of the Fur.
