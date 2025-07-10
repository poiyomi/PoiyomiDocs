---
sidebar_position: 10
title: Stats Overlay
description: Stats Overlay displays a variety of unique statistics about the viewer, including the FPS, World Position, and Instance Time in Poiyomi Shaders.
keywords: [stats, overlay, stats overlay, statistics, text, fps, position, time, special fx, effect, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

Stats Overlay is a feature that can display a variety of unique statistics about the viewer, including their FPS, world position, and time in instance. These statistics can be placed and scaled like decals, anywhere on a material UV.

Stats overlay uses an [MSDF (Multichannel Signed Distance Field) Font Format](https://github.com/Chlumsky/msdfgen) efficiently draw very sharp text. This font array texture must be specified in the **Font Array** slot!

:::info
Stats overlay only shows stats for the viewer - not for the person with the material! That means that the values will be different for each viewer.
:::

## Font Array

- `Type`: **Data** Texture (sRGB **OFF**)

Texture that defines the font data to use. Two fonts in four variations are included in the package:

- `T_DigitalBold_FONT`: Bold digital-display style font
- `T_RobotoBlack_FONT`: "Roboto" typeface, Black styling
- `T_RobotoMedium_FONT`: "Roboto" typeface, Medium Bold styling
- `T_RobotoRegular_FONT`: "Roboto" typeface, Regular styling

## Pixel Range

- `Type`: **Float**

Pixel range to use to sample the edge of the font SDF. Can generally be left at the default value of `4`.

## FPS

- `Type`: **Toggle**

Enables or Disables the FPS counter.

### FPS UV

- `Type`: **Dropdown**, Options: `UV0`/`UV1`/`UV2`/`UV3`/`Panosphere`/`World Pos XZ`/`Polar UV`/`Distorted UV`

UV Map to use for the FPS counter.

### Color

- `Type`: **Color**

Color of the FPS Counter text.

### Emission Strength

- `Type`: **Float**, Range: `0.0 - 20.0`

Emission strength of the FPS Counter text. Draws from the color.

### Offset

- `Type`: **Vector2**

Where the FPS Counter text should be placed on the UV, relative to the bottom left corner of the UV. A value of `1,1` would place the bottom left of the text at the top right of the UV.

### Rotation

- `Type`: **Float**, Range: `0.0 - 360.0`

How much rotation to apply to the FPS Counter text, around its center position.

### Scale

- `Type`: **Vector2**

How large the text should be, in UV space. `1.0, 1.0` would map the text to the entire UV square. Generally, the Y Value should be a fraction of the X value, as the text is much wider than it is tall.

### Padding Reduction

- `Type`: **Vector4**

How much additional padding to remove from the edges of the FPS Counter text. The Z value is particularly useful for slightly increasing the size of characters.

## Position

- `Type`: **Toggle**

Enables or Disables the World Position display.

### Position UV

- `Type`: **Dropdown**, Options: `UV0`/`UV1`/`UV2`/`UV3`/`Panosphere`/`World Pos XZ`/`Polar UV`/`Distorted UV`

UV Map to use for the World Position text.

### Color

- `Type`: **Color**

Color of the World Position text.

### Emission Strength

- `Type`: **Float**, Range: `0.0 - 20.0`

Emission strength of the World Position text. Draws from the color.

### Offset

- `Type`: **Vector2**

Where the World Position text should be placed on the UV, relative to the bottom left corner of the UV. A value of `1,1` would place the bottom left of the text at the top right of the UV.

### Rotation

- `Type`: **Float**, Range: `0.0 - 360.0`

How much rotation to apply to the World Position text, around its center position.

### Scale

- `Type`: **Vector2**

How large the text should be, in UV space. `1.0, 1.0` would map the text to the entire UV square. Generally, the Y Value should be a fraction of the X value, as the text is much wider than it is tall.

### Padding Reduction

- `Type`: **Vector4**

How much additional padding to remove from the edges of the World Position text. The Z value is particularly useful for slightly increasing the size of characters.

## Instance Time

- `Type`: **Toggle**

Enables or Disables display of the time in the instance.

### Time UV

- `Type`: **Dropdown**, Options: `UV0`/`UV1`/`UV2`/`UV3`/`Panosphere`/`World Pos XZ`/`Polar UV`/`Distorted UV`

UV Map to use for the Instance Time text.

### Color

- `Type`: **Color**

Color of the Instance Time text.

### Emission Strength

- `Type`: **Float**, Range: `0.0 - 20.0`

Emission strength of the Instance Time text. Draws from the color.

### Offset

- `Type`: **Vector2**

Where the Instance Time text should be placed on the UV, relative to the bottom left corner of the UV. A value of `1,1` would place the bottom left of the text at the top right of the UV.

### Rotation

- `Type`: **Float**, Range: `0.0 - 360.0`

How much rotation to apply to the Instance Time text, around its center position.

### Scale

- `Type`: **Vector2**

How large the text should be, in UV space. `1.0, 1.0` would map the text to the entire UV square. Generally, the Y Value should be a fraction of the X value, as the text is much wider than it is tall.

### Padding Reduction

- `Type`: **Vector4**

How much additional padding to remove from the edges of the Instance Time text. The Z value is particularly useful for slightly increasing the size of characters.
