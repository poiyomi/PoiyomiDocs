---
sidebar_position: 3
title: Detail Normals & Texture
description: Details section provides options to apply additional textures and normals, often tiled, to the Material.
keywords: [details, tile, tiling, normals, base color, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

The Details section provides options to apply additional textures (often tiled) to the base color and normals. When tiled, this feature can grant the user to bring out additional small details on the model without sacrificing quality.

When coming from other shaders, Details can sometimes be referred to as *2nd Normal*.

## Detail Mask

- `Type`: **Data** Texture (`sRGB = OFF`)

A texture that defines how and where to apply different detail textures.

| Channel | Mask |
|--|--|
| Red | Detail Texture |
| Green |  Detail Normal  |
| Blue | n/a |

## Detail Texture

### Tint

- `Type`: **Color**

A tint color that's blended multiplicative with the Detail Texture.

### Detail Texture

- `Type`: **Color** Texture (`sRGB = ON`)

Texture used to add detail to the base color. This texture is blended multiplicative with the base color.

### Intensity

- `Type`: **Float**, Range: `0.0 - 10.0`

How much to blend the detail texture with the main texture.

### Brightness

- `Type`: **Float**, Range: `0.0 - 2.0`

Multiplier for the detail texture's base brightness. Can be used to emphasize darker parts of a detail texture.

### Global Mask

- `Type`: **Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Select which [Global Mask](/docs/modifiers/global-masks.md) to only affect the Detail Texture onto.

## Detail Normal

### Detail Normal

- `Type`: **Normal Map** Texture (`sRGB = OFF`)

A normal map texture that's blended with the base normal map. 

#### Normal Intensity

- `Type`: **Float**, Range: `0.0 - 10.0`

Intensity multiplier for the detail normal map. Expand the Detail Normal texture slot to see this property.

### Global Mask

- `Type`: **Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Select which [Global Mask](/docs/modifiers/global-masks.md) to only affect the Detail Normal onto.