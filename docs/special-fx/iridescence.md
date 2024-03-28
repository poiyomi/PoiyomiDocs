---
sidebar_position: 9
title: Iridescence
---
import PoiVideo from '@site/src/components/PoiVideo'

:::danger Deprecated Feature
Iridescence was merged with [Matcap](../shading/matcap.md) in version 9.0. See: [UV Mode: Gradient](../shading/matcap.md#gradient).
:::

Iridescence is a feature that maps a gradient texture to a mesh using the angle between the viewer and the surface normal. This can create an effect similar to iridescence on a surface, as well as many stylized effects.

## Ramp

- `Type`: **Color Gradient** Texture (sRGB **ON**)

Ramp texture to be used for the iridescence effect. It's applied as a gradient, from left-to-right, and can be edited using the Thry Gradient Editor by clicking on the gradient display.

This texture can contain alpha to define the opacity of the iridescence effect.

## Mask

- `Type`: **Data** Texture (sRGB **OFF**)

Mask that defines where to place the iridescence effect. Black will apply no iridescence, while white will apply full iridescence.

## Custom Normals

- `Type`: **Checkbox**

Whether or not a custom normal map should be used for the iridescence effect. This normal map is blended with the normal selected with Normal Select.

## Normal Map

- `Type`: **Normal Map** Texture (sRGB **OFF**)

### Normal Intensity

- `Type`: **Float**, Range: `0.0 - 10.0`

When using a custom normal map, this defines how intense the normal map should be.

## Normal Select

- `Type`: **Dropdown**, Options: `Pixel`/`Vertex`

Defines which normal to use for the iridescence effect.

- `Pixel`: Use the base normal with all prior normal maps (if any) applied.
- `Vertex`: Use the vertex normal with no prior normal maps applied.

## Intensity

- `Type`: **Float**, Range: `0.0 - 10.0`

How intense the iridescence effect should be. This can cause colors to clamp, so it's recommended to keep the value at or below 1.

## Blending

The blending options define how the iridescence effect should be blended with the base color. Generally, only one at a time of these options should be used.

### Blend Add

- `Type`: **Float**, Range: `0.0 - 1.0`

Adds the iridescence color to the base color. This generally brightens the base color. Black areas will be unaffected, while white areas will brighten. Colors are simply added on top of the base color.

### Blend Replace

- `Type`: **Float**, Range: `0.0 - 1.0`

Replaces the base color with the iridescence color. At `1.0`, the base color is completely replaced with the iridescence color. At `0.0`, the base color is completely unaffected. Values in between will blend the base color with the iridescence color.

### Blend Multiply

- `Type`: **Float**, Range: `0.0 - 1.0`

Multiplies the base color with the iridescence color. This generally darkens the base color. Black areas of the iridescence color will always darken, white areas will not affect the base color, and colored areas will darken if the base color doesn't match the iridescence color in that area.

## Emission Strength

- `Type`: **Float**, Range: `0.0 - 20.0`

How much emission the iridescence should apply to the final color.

## Hue Shift

- `Type`: **Checkbox**

Enables hue shifting of the iridescence color.

### Speed

- `Type`: **Float**

How much to constantly shift the hue with time. A value of 1 will result in a full hue shift cycle every 20 seconds.

### Shift

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to shift the base color around the hue circle.

This value is circular, and will have the same result at 0 and 1.

## Audio Link

Only visible if Audio Link is enabled.

### Scale Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band to use for the Audiolink scale effect.

### Scale Mod

- `Type`: **Vector2**

How much to add or subtract from the scale (Ramp X Tiling).

| Channel | Function |
| --- | --- |
| X | Amount Added to scale with no audio in Scale Band |
| Y | Amount Added to scale with max audio in Scale Band |
