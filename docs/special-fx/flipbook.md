---
sidebar_position: 4
title: Flipbook
description: Flipbook allows images from a Texture Array to be played as an animation on the Material.
keywords: [flipbook, texture array, texture, array, gif, 2d, animation, animated, special fx, poiyomi, shader]
---

Flipbook is a classic feature that allows images from a Texture Array to be played as an animation on the Material. This can be a way to play GIFs or a specific 2D animation that either animates in a loop or in a specified pattern.

Flipbooks use a `Texture Array`, which is a special type of file that consists of a multiple set of images that are sorted in a specified sequence. They can be created in Unity using ThryEditor TextureArray Utility.

:::warning
Texture Arrays can quickly add up to your VRAM consumption depending on the resolution and the amount of images used in your array! Please keep this in mind when creating your Texture Arrays.
:::

## Flipbook Controls Alpha

- `Type`: **Toggle**

Toggles whether the flipbook alpha should override the final alpha of the material. This allows the flipbook to be rendered on top of the material, even if the material is transparent.

## Intensity Controls Alpha

- `Type`: **Toggle**

Toggles whether the alpha's intensity (determined by the max value of any of the color channels) should be used to determine the flipbook's blending alpha. This allows black to be used as a no-render color, allowing the flipbook to be rendered cleanly without using the "Add" blend mode.

## Color Replaces Flipbook

- `Type`: **Toggle**

Determines if the flipbook's color should be replaced with the color from Color & Alpha, instead of being tinted.

## Texture Array

- `Type`: **Texture Array** (sRGB **ON**)

Flipbook texture array. This uses a [Texture2DArray](https://docs.unity3d.com/Manual/class-Texture2DArray.html) texture to store multiple flipbook frames.

Texture Arrays can be created from GIF files imported to unity, or a series of single frames. By right clicking the file (or files) to be made into a texture array and selecting `Thry -> Gif 2 Texture Array` or `Thry -> Images 2 Texture Array`, the texture array will be created. Make sure to take note of the "Slices" value, which is the number of frames in the array.

Note that Texture2DArrays can get very big very quickly - make sure your source image files are low resolution, such as 512x512 or lower.

## Mask

- `Type`: **Data** Texture (sRGB **OFF**)

Defines where on the UV the flipbook can be applied. Black indicates the flipbook can not be applied, while white indicates the flipbook can be applied. If this texture is not defined, the flipbook can apply everywhere.

## Color & Alpha

- `Type`: **Color**

Defines the color tint and alpha value (transparency) of the flipbook. This allows the flipbook to be tinted, or to blend only partially. Can generally be left at the default values.

## Total Frames

- `Type`: **Integer**

The total number of frames to be used in the flipbook. In almost all cases, this should be set to the number of frames in the texture array, which can be found by viewing the texture array in the inspector, expanding the preview, and looking at the "Slices" value at the bottom center.

## FPS

- `Type`: **Float**

How many frames per second the flipbook should play if "Manual Frame Control" is not enabled. This is used to determine how fast the flipbook should play. The default is 30 FPS.

## Scale / Offset 

- `Type`: **Vector4**

Determines the Scale (size) and Offset (position) of the flipbook. The first two values are the scale (in X/Y) and the second two are the position (in X/Y). This allows placing the flipbook like a Decal.

## Side Offset ←→↑↓

- `Type`: **Vector4**

Side Offset allows stretching and squishing the flipbook in the X and Y directions. Each value can be positive or negative values, with positive values stretching the flipbook in that direction, and negative values squishing the flipbook in that direction.

The first two values the left and right offsets, and the second two are the top and bottom offsets.

## Tiled

- `Type`: **Toggle**

Determines if the flipbook should be tiled. If this is enabled, the flipbook will tile across the selected UV.

## Emission Strength

- `Type`: **Float**, Range: `0.0 - 20.0`

How much emission the flipbook should have. This stacks with whatever blending options are selected.

## Rotation

- `Type`: **Float**, Range: `0.0 - 360.0`

How much to rotate the flipbook by, in degrees.

## Rotation Speed

- `Type`: **Float**

A constant roatation speed applied to the decal. A value of `180` will rotate the decal once per second, which is quite fast.

## Blending

These options control how to blend the flipbook with the material. Generally, only one of these should be used at a time.

### Replace

- `Type`: **Float**, Range: `0.0 - 1.0`

Replaces the base color with the flipbook. This is the default.

### Multiply

- `Type`: **Float**, Range: `0.0 - 1.0`

Multiplies the base color and the flipbook. This generally darkens the color, with white not affecting the color, and black completely darkening the color.

### Add

- `Type`: **Float**, Range: `0.0 - 1.0`

Adds the base color and the flipbook together. This generally brightens the color, with black not affecting the color, and white significantly brightening the color.

## Manual Frame Control

- `Type`: **Toggle**

Determines whether the flipbook should be manually controlled. If this is enabled, the flipbook will not play automatically, and the frame must manually advance via animations. This is useful for dynamically controlling the speed of the flipbook, or using the flipbook to show specific frames.

### Current Frame

- `Type`: **Float**

Determines which frame to show. Only visible when "Manual Frame Control" is enabled.

## Crossfade

- `Type`: **Toggle**

Enables or disables crossfading. This is used to smoothly transition between frames, which can be useful for reducing the number of frames needed in the flipbook.

### Fade Range

- `Type`: **Float Range**, Range: `0.0 - 1.0`

Determines how much to crossfade the flipbook between frames. Defined by a start and stop value.

## Hue Shift

- `Type`: **Toggle**

Enable or Disable the Hue Shifting functionality.

This toggle can be animated.

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

- `Hue Select`: Directly applies the selected Hue as an override to the entire Flipbook.
- `Hue Shift`: Only tints the Flipbook based on the lerped value. This is the default behavior.

</details>

### Shift Speed

- `Type`: **Float**

How much to constantly shift the hue with time. A value of 1 will result in a full hue shift cycle every 20 seconds.

### Hue Shift

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to shift the flipbook around the hue circle.

This value is circular, and will have the same result at 0 and 1.

## Audio Link

:::info
The settings in this section will only be visible when [AudioLink](/docs/audio-link/audio-link.md) is activated on the Material.
:::

### Scale

#### Scale Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band of the audio to use for the Audio Link Scale Mod.

#### Scale Mod

How much to modify (mod) the scale of the flipbook. These values are added to the current scale, and can be positive or negative.

- `Type`: **Vector4**

| Channel | Function |
| --- | --- |
| X | Amount Added to X Scale with no audio in Scale Band |
| Y | Amount Added to Y Scale with no audio in Scale Band |
| Z | Amount Added to X Scale with max audio in Scale Band |
| W | Amount Added to Y Scale with max audio in Scale Band |

### Alpha

#### Alpha Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band to use for the Audio Link Alpha adjustment.

#### Alpha Mod

- `Type`: **Vector2**

How much to modify (mod) the alpha of the flipbook, in degrees.

| Channel | Function |
| --- | --- |
| X | Amount Added to alpha with no audio in alpha Band |
| Y | Amount Added to alpha with max audio in alpha Band |

### Emission

#### Emission Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band to use for the Audio Link Emission adjustment.

#### Emission Mod

- `Type`: **Vector2**

How much to modify (mod) the alpha of the flipbook.

| Channel | Function |
| --- | --- |
| X | Amount Added to Emission with no audio in Emission Band |
| Y | Amount Added to Emission with max audio in Emission Band |

### Frame

#### Frame Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band to use for the frame adjustment.

#### Frame Control

How many frames to add. This is added to the current frame, and stacks with a constant FPS, or with Chronotensity frame control.

### Chronotensity?

#### Chrono Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band to use for the chronotensity frame adjustment.

#### Chrono Type

- `Type`: **Dropdown**, Options:

<details>
<summary><b>Chronotensity Options</b></summary>

- Motion Increases as intensity of the band increases
- Above but Smooth
- Motion moves back and forth as a function of intensity
- Above but Smoooth
- Fixed Speed Increase when the band is dark Stationary when light
- Above but Smooooth
- Fixed Speed Increase when the band is dark Fixed speed decrease when light

</details>

#### Chrono Speed

- `Type`: **Float**

How much chronotensity should affect the frame continuation of the decal. Good starting values are `5 - 30`. Combines well with FPS being set to `0`.
