---
sidebar_position: 7
title: Back Face
---
import PoiVideo from '@site/src/components/PoiVideo'

# Back Face

![Docusaurus logo](/img/CirclelogoBig.png)

Back Face provides options for modifying the base color, emission, and alpha for the back faces of a mesh.

To use this section, Culling should be set to `Off` or `Front` in order for backfaces to be visible.

## Color

Tint color to multiply the backface by.

## Emission Strength

Range: `0-20`

How much emission to add to the backface. Draws from the backface color.

## Alpha

Range: `0-1`

Alpha multiplier for the backface. 

## Texture

Texture to override the backface base color with.

## Mask

Texture used to mask the effect of backface color, texture, emission, and alpha modifiers.

## Detail Intensity

Detail Intensity backface multipler for detail textures in the [Details](details.md) section.

## Replace Alpha

Whether to replace the alpha value for the backface with the alpha calculated from the Backface Texture and Alpha settings.

## Hue Shift

Enable or Disable hue shift for the backface base color.

### Hue Shift

Range: `0-1`

How much to shift the backface base color around the hue circle. 

This value is circular, and will have the same result at 0 and 1. 

### Hue Shift Speed

How much to constantly shift the hue with time. A value of 1 will result in a full hue shift cycle every 20 seconds.
