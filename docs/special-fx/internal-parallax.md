---
sidebar_position: 12
title: Internal Parallax
description: Internal Parallax creates an illusion of layers inside of the Mesh, like an infinite mirror.
keywords: [internal parallax, internal, parallax, infinite mirror, special fx, effect, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

Internal Parallax creates an illusion of layers going inside the Mesh. Similar to an "infinite mirror" effect, it can be used to create stylized parallax effects in the specified areas.

## Parallax Mode

- `Type`: **Dropdown**, Options: `Basic`/`HeightMap`

Determines the Parallax Mode to use for the Internal Parallax.

### Basic

Basic Parallax as determined by the Map.

### HeightMap

Uses the Height Map technique to create the Internal Parallax.

## Internal Map

- `Type`: **Color** Texture (`sRGB = On`)

Color Map to use for the Internal Map. `RGB` for Color, and `A` channel for the Height.

## Mask

- `Type`: **Data** Texture (`sRGB = Off`)

Clamps the Internal Parallax to only affect a specified area as determined by the Mask.

## Layer Controls

### Parallax Internal Iterations

- `Type`: **Float**, Range: `1.0 - 50.0`

How many iterations should there be for the Parallax. Higher numbers yield more iterations.

### Min Depth

- `Type`: **Float**

The Minimum Depth for the Parallax.

### Max Depth

- `Type`: **Float**

The Maximum Depth for the Parallax.

## Layer Colors

### Min Depth Brightness

- `Type`: **Float**, Range: `0.0 - 5.0`

Minimum Brightness intensity of the Minimum Depth Color.

### Max Depth Brightness

- `Type`: **Float**, Range: `0.0 - 5.0`

Maximum Brightness intensity fo the Maximum Depth Color.

### Min Depth Color

- `Type`: **Color**

Color to use for the Minimum Depth.

### Max Depth Color

- `Type`: **Color**

Color to use for the Maximum Depth.

### Internal Blend Mode

- `Type`: **Dropdown**, Options: `Add`/`Max`

How much to blend the Internal Parallax with the Base Color.

### Surface Blend Mode

- `Type`: **Dropdown**, Options: `Replace`/`Darken`/`Multiply`/`Lighten`/`Screen`/`Subtract`/`Add`/`Overlay`/`Mixed`

How much to blend the Surface of the Internal Parallax to the Base Color.

## Hue Shift

- `Type`: **Boolean**

Enables the Hue Shift feature of the Internal Parallax.

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

- `Hue Select`: Directly applies the selected Hue as an override to the entire Parallax.
- `Hue Shift`: Only tints the Parallax based on the lerped value. This is the default behavior.

</details>

### Hue Shift

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to shift the base color around the hue circle. 

This value is circular, and will have the same result at 0 and 1.

### Hue Shift Speed

- `Type`: **Float**

How much to constantly shift the hue with time. A value of 1 will result in a full hue shift cycle every 20 seconds.

### Hue Shift Per Level

- `Type`: **Float**

How much to constantly shift the hue with each level of the Parallax.