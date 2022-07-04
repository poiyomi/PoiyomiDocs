---
sidebar_position: 2
title: Color Adjust
---
import PoiVideo from '@site/src/components/PoiVideo'

The **Color Adjust** section provides options for modifying the base color of the material. This is applied directly after the main **Color and Normals** section, and will not affect other sections that modify the base color.

## Mask

- `Type`: **Data** Texture (sRGB **OFF**)

A texture that defines where to apply the color adjustments. If this texture is not defined, the adjustments will apply everywhere.

| Channel | Mask |
|--|--|
| Red | Hue |
| Green |  Brightness  |
| Blue | Saturation |

## Saturation

- `Type`: **Float**, Range: `-1.0 - 10.0`

Adjusts the saturation of the base color. 

A value of -1 will make the base color fully desaturate (grayscale). A value of 0 will not alter the color at all. A value greater than 0 will increase the saturation of the base color.

This is implemented as a lerp between the base color and a grayscale version of the base color.

## Brightness

- `Type`: **Float**, Range: `-1.0 - 1.0`

Adjusts the brightness of the base color. 

This adds brightness directly on top of the existing color, without regard for its hue or tone. 

## Hue Shift

- `Type`: **Checkbox**

Enable or Disable the Hue Shifting functionality. 

This toggle can be animated. 

### Hue Replace

- `Type`: **Checkbox**

Changes how the hue shift is applied when a hue shift mask is present. 

If enabled, the base color will be lerped with the hue shifted color based on the mask's red channel value. Generally, this will result in more of the base color being present.

If disabled, the base color will be directly hue shifted, with the amount of hue shift determined by both the slider and the mask's red channel. 

### Hue Shift

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to shift the base color around the hue circle. 

This value is circular, and will have the same result at 0 and 1. 

### Hue Shift Speed

- `Type`: **Float**

How much to constantly shift the hue with time. A value of 1 will result in a full hue shift cycle every 20 seconds.

## Hue Shift Audio Link

- `Type`: **Checkbox**

With [Audio Link](../audio-link/controls.md) enabled, hue shift can be controlled with Audio Link chronotensity.

### Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which audio link frequency band to use for the hue shift motion.

### Motion Type

- `Type`: **Dropdown**

Which chronotensity motion mode to use for the hue shift motion. These are somewhat self descriptive, but more information is available in the [Audio Link Docs](https://github.com/llealloo/vrc-udon-audio-link/tree/master/Docs#alpass_chronotensity).

### Motion Speed

- `Type`: **Float**

How fast the audio link chronotensity should cycle the hue shift.
