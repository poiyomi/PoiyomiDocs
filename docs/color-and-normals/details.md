---
sidebar_position: 4
title: Details
description: Details section provides options to apply additional textures and normals, often tiled, to the Material.
keywords: [details, tile, tiling, normals, base color, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

The Details section provides options to apply additional textures (often tiled) to the base color and normals.

## Detail Mask

- `Type`: **Data** Texture (sRGB **OFF**)

A texture that defines how and where to apply different detail textures.

| Channel | Mask |
|--|--|
| Red | Detail Texture |
| Green |  Detail Normal  |
| Blue | n/a |

## Detail Texture Tint

- `Type`: **Color**

A tint color that's blended multiplicative with the Detail Texture.

## Detail Texture

- `Type`: **Color** Texture (sRGB **ON**)

Texture used to add detail to the base color. This texture is blended multiplicative with the base color.

## Detail Tex Intensity

- `Type`: **Float**, Range: `0.0 - 10.0`

How much to blend the detail texture with the main texture.

## Detail Brightness

- `Type`: **Float**, Range: `0.0 - 2.0`

Multiplier for the detail texture's base brightness. Can be used to emphasize darker parts of a detail texture.

## Detail Normal

- `Type`: **Normal Map** Texture (sRGB **OFF**)

A normal map texture that's blended with the base normal map. 

### Detail Normal Intensity

- `Type`: **Float**, Range: `0.0 - 10.0`

Intensity multiplier for the detail normal map.
