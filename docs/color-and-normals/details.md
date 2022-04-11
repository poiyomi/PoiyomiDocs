---
sidebar_position: 4
title: Details
---
import PoiVideo from '@site/src/components/PoiVideo'

# Details

The Details section provides options to apply additional textures (often tiled) to the base color and normals.

## Detail Mask

A texture that defines how and where to apply different detail textures.

| Channel | Mask |
|--|--|
| Red | Detail Texture |
| Green |  Detail Normal  |
| Blue | n/a |

## Detail Texture Tint

A tint color that's blended multiplicatively with the Detail Texture.

## Detail Texture

Texture used to add detail to the base color. This texture is blended multiplicatively with the base color. 

## Detail Tex Intensity

Range: `0-10`

How much to blend the detail texture with the main texture.

## Detail Brightness

Range: `0-2`

Multiplier for the detail texture's base brightness. Can be used to emphasize darker parts of a detail texture.

## Detail Normal

A normal map texture that's blended with the base normal map. 

### Detail Normal Intensity

Range: `0-10`

Intensity multipler for the detail normal map.
