---
sidebar_position: 8
title: RGBA Color Masking
---
import PoiVideo from '@site/src/components/PoiVideo'

RGBA Color Masking provides a flexible way to apply different color tints, textures, and normal maps with the main color.

RGBA Color masking does not affect the alpha of the material.

By default, all 4 channels of RGBA color masking will be set to pure white and `1.0` alpha. Any unused channels should be set to `0.0` alpha.

## Use Vertex Colors

- `Type`: **Checkbox**

Whether to use the mesh's vertex colors to set the RGBA mask. If enabled, the Mask texture will not be used.

## Multiplicative

- `Type`: **Checkbox**

Whether the channel textures should be appled multiplicatively to the base texture. If not enabled, the textures will be blended normally, with a replace function.

## Mask

- `Type`: **Data** Texture (sRGB **OFF**)

Texture used to mask the R, G, B, and A colors, textures, and normals. Each channel is treated independendently.

Note that textures without an A channel will default that channel to pure white (1.0), so the A color/texture/normal will apply everywhere.

## R Color

- `Type`: *Color*

Color to use for the R masked area. This is blended multiplicatively with the R texture, and the resulting base color is blended with the main base color as defined by the **Multiplicative** setting.

### R Texture

- `Type`: **Color** Texture (sRGB **ON**)

Texture to use for the R masked area. This is pure white by default, if a texture is not defined.

## G Color

- `Type`: *Color*

Color to use for the G masked area. This is blended multiplicatively with the G texture, and the resulting base color is blended with the main base color as defined by the **Multiplicative** setting.

### G Texture

- `Type`: **Color** Texture (sRGB **ON**)

Texture to use for the G masked area. This is pure white by default, if a texture is not defined.

## B Color

- `Type`: *Color*

Color to use for the B masked area. This is blended multiplicatively with the B texture, and the resulting base color is blended with the main base color as defined by the **Multiplicative** setting.

### B Texture

- `Type`: **Color** Texture (sRGB **ON**)

Texture to use for the B masked area. This is pure white by default, if a texture is not defined.

## A Color

- `Type`: *Color*

Color to use for the A masked area. This is blended multiplicatively with the A texture, and the resulting base color is blended with the main base color as defined by the **Multiplicative** setting.

### A Texture

- `Type`: **Color** Texture (sRGB **ON**)

Texture to use for the A masked area. This is pure white by default, if a texture is not defined.

## Enable Normals

- `Type`: **Checkbox**

Enable normal maps for each of the 4 masked areas.

### Blend with Base

- `Type`: **Checkbox**

Whether the normal maps should override the main and detail normal maps, or be blended on top of them.

## R Normal

- `Type`: **Normal Map** Texture (sRGB **OFF**)

Normal Map texture to be used for the R masked area.

### Intensity

- `Type`: **Float**, Range: `0.0 - 10.0`

Intensity of the R Normal.

## G Normal

- `Type`: **Normal Map** Texture (sRGB **OFF**)

Normal Map texture to be used for the G masked area.

### Intensity

- `Type`: **Float**, Range: `0.0 - 10.0`

Intensity of the G Normal.

## B Normal

- `Type`: **Normal Map** Texture (sRGB **OFF**)

Normal Map texture to be used for the B masked area.

### Intensity

- `Type`: **Float**, Range: `0.0 - 10.0`

Intensity of the B Normal.

## A Normal

- `Type`: **Normal Map** Texture (sRGB **OFF**)

Normal Map texture to be used for the A masked area.

### Intensity

- `Type`: **Float**, Range: `0.0 - 10.0`

Intensity of the A Normal.
