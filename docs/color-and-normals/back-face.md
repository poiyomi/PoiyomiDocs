---
sidebar_position: 7
title: Back Face
description: Back Face properties of the Material in Poiyomi Shaders.
keywords: [backface, back, face, inverted normal, poiyomi, shader, material]
---
import PoiVideo from '@site/src/components/PoiVideo'

Back Face provides options for modifying the base color, emission, and alpha for the back faces of a mesh.

To use this section, Culling should be set to `Off` or `Front` in order for backfaces to be visible.

## Color

- `Type`: **Color**

Tint color to multiply the backface by.

## Emission Strength

- `Type`: **Float**, Range: `0.0 - 20.0`

How much emission to add to the backface. Draws from the backface color.

## Alpha

- `Type`: **Float**, Range: `0.0 - 1.0`

Alpha multiplier for the backface. 

## Texture

- `Type`: **Color** Texture (sRGB **ON**)

Texture to override the backface base color with.

## Mask

- `Type`: **Data** Texture (sRGB **OFF**)

Texture used to mask the effect of backface color, texture, emission, and alpha modifiers.

## Detail Intensity

- `Type`: **Float**, Range: `0.0 - 5.0`

Detail Intensity backface multiplier for detail textures in the [Details](details.md) section.

## Replace Alpha

- `Type`: **Checkbox**

Whether to replace the alpha value for the backface with the alpha calculated from the Backface Texture and Alpha settings.

## Emission Limiter

- `Type`: **Float**, Range: `0.0 - 1.0`

Emission multiplier to limit the emission on the backface.

## Hue Shift

- `Type`: **Checkbox**

Enable or Disable hue shift for the backface base color.

### Hue Shift

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to shift the backface base color around the hue circle. 

This value is circular, and will have the same result at 0 and 1. 

### Hue Shift Speed

- `Type`: **Float**

How much to constantly shift the hue with time. A value of 1 will result in a full hue shift cycle every 20 seconds.
