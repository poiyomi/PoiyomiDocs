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

## Color & Alpha

- `Type`: <PropertyIcon name="color" />**Color**

Defines the color tint and alpha value (transparency) of the flipbook. This allows the flipbook to be tinted, or to blend only partially. Can generally be left at the default values.

## Texture Array

- `Type`: <PropertyIcon name="texture" />**Texture Array** (`sRGB = On`)

Main Texture Slot to specify your Flipbook Texture Array. This uses a [Texture2DArray <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/class-Texture2DArray.html) texture to store multiple flipbook frames.

Texture Arrays can be created from GIF files imported to unity, or a series of single frames. By right clicking the file (or files) to be made into a texture array and selecting `Thry -> Gif 2 Texture Array` or `Thry -> Images 2 Texture Array`, the texture array will be created. Make sure to take note of the "Slices" value, which is the number of frames in the array.

Note that Texture2DArrays can get very big very quickly - make sure your source image files are low resolution, such as 512x512 or lower.

:::warning Automatic Conversion Warning
Attaching a GIF into the texture slot will automatically convert the file into a Texture Array. Please be aware that if your images are of large size (or have many frames), **Unity will freeze for a few moments** while it auto-converts the GIF.
:::

## Mask

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = Off`)

Defines where on the UV the flipbook can be applied. Black indicates the flipbook can not be applied, while white indicates the flipbook can be applied. If this texture is not defined, the flipbook can apply everywhere.

### Global Mask

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Select which [Global Mask](/docs/modifiers/global-masks.md) to use for the Flipbook overall.

:::note
Expand the **Mask** slot to see this property.
:::

## Tiling

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Off`/`Tiled (Seamless)`/`Tiled (Sprite)`

Sets the Tiling mode to use on the Flipbook.

## Blending

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Replace`/`Darken`/`Multiply`/`Lighten`/`Screen`/`Subtract`/`Add`/`Overlay`/`Mixed`

Controls how to blend the Flipbook with the Material.

## Alpha/Color Override

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Off`/`Replace Alpha`/`Replace Alpha and Color`

Optional setting to control if the Color and/or Alpha of the Flipbook should replace the final Color and/or Alpha. This allows the Flipbook to be rendered on top of the material, even if the material is transparent OR if the Flipbook should override the base color as well.

## Replace

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Replaces the base color with the Flipbook.

:::tip
You may animate this slider to toggle the Flipbook on the Material. Animating the [Section Header](/docs/general/locking.md#section-header-checkboxes) will not work!
:::

## Emission Strength

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 20.0`

How much emission the flipbook should have. This stacks with whatever blending options are selected.

## FPS

- `Type`: <PropertyIcon name="float" />**Float**

How many frames per second the flipbook should play if "Manual Frame Control" is not enabled. This is used to determine how fast the flipbook should play. The default is 30 FPS.

:::warning Heads Up
The FPS will be automatically configured based on the GIF shortly after conversion in the [Texture Array](#texture-array) slot.
:::

## Frame Offset

- `Type`: <PropertyIcon name="float" />**Float**

Sets an offset for the frames.

<!-- NOTE: DO NOT CHANGE THIS HEADER! This is linked to from the Shader UI! -->
## Positioning

:::tip
Flipbook supports **Raycast**, the same feature offered in Decals. This allows you to visually position your Flipbook on your Model without having to second-guess it's exact UV coordinates.

To use this feature, edit the Flipbook on your Material <u>directly from the Mesh</u> as shown here:

<!-- REPLACE WITH A VARIANT OF THIS EXAMPLE USING FLIPBOOKS! -->
<ReactVideo src='/vid/color-and-normals/Decals_RaycastDemo.webm'/>

`Left-Click` on the **Raycast** button to enable the feature. Hover the Mouse over your Mesh to position it, then `Left-Click` again to finalize your placement.
:::

### Position

- `Type`: <PropertyIcon name="float2" />**Vector2**

Where on the UV the Flipbook's center should be.

### Rotation

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 360.0`

How much rotation to apply to the Flipbook, around its center position.

### Rotation Speed

- `Type`: <PropertyIcon name="float" />**Float**

A constant rotation speed applied to the Flipbook. A value of `180` will rotate the Flipbook once per second.

### Scale

- `Type`: <PropertyIcon name="float2" />**Vector2**

Scale of the Flipbook in UV space. `1.0, 1.0` would map the decal to the entire UV square.

### Side Offset

- `Type`: <PropertyIcon name="float4" />**Vector4**

How much scale offset to define on each side of the Flipbook.

### Aspect Ratio

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Off`/`Shrink to Fit`/`Grow to Fit`

Determines the Aspect Ratio of the Flipbook, used to specify fitting within the boundaries of your Flipbook or to fill in the entire Decal boundaries.

### Mirrored UV Mode

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Off`/`Flip`/`Left Only`/`Right Only`/`Flip Right Only`

This option allows you to place the Flipbook on Meshes that have problematic overlapping UVs, where two or more UV islands stack above each other. Use this to put the Flipbook on just one side, or flip them on one side as well.

:::info
If your Flipbook appear normally in the intended location without it appearing in another area, you shouldn't need to use this setting!

While models with Overlapping UVs are becoming less and less common, there are still many models out there that suffer from this mistake. Only use this setting if this is the case on your end.
:::

### Symmetry Mode

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Off`/`Symmetry`/`Flipped`

This setting will divide the UV down the Center (at `X = 0.5`) and puts the Flipbook on Both Sides of the Symmetry, like a mirror. This only works on models that have a perfectly symmetrized UV layout.

### Tiled

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Whether or not the Flipbook texture should be tiled. By default, Flipbooks are not tiled.

## Manual Frame Control

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Determines whether the Flipbook should be manually controlled. If this is enabled, the Flipbook will not play automatically, and the frame must manually advance via animations. This is useful for dynamically controlling the speed of the Flipbook, or using the Flipbook to show specific frames.

### Current Frame

- `Type`: <PropertyIcon name="float" />**Float**

Determines which frame to show. Only works when the above toggle `Manual Frame Control` is enabled.

## Start/End Frame Loop

- `Type`: <PropertyIcon name="toggle" />**Toggle**

When enabled, the settings in this area can be used to clamp which frame the Flipbook should start and end from.

### Start Frame

- `Type`: <PropertyIcon name="float" />**Float**

Sets the first frame in the Flipbook.

### End Frame

- `Type`: <PropertyIcon name="float" />**Float**

Sets the last frame in the Flipbook before it loops back to the beginning Start Frame.

## Frame Crossfade

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables or disables crossfading. This is used to smoothly transition between frames, which can be useful for reducing the number of frames needed in the Flipbook.

### Fade Range

- `Type`: <PropertyIcon name="floatclamped" />**Multislider**, Range: `0.0 - 1.0`

Determines how much to crossfade the Flipbook between frames. Defined by a start and stop value.

## Hue Shift

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enable or Disable the Hue Shifting functionality.

### Color Space

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `OKLab`/`HSV`

Choice of Color Space to use for the Hue Shift. By default, it will be set to `OKLab`.

Learn about the difference of Color Spaces as documented here in [Color Adjust](/docs/color-and-normals/color-adjust.md#oklab-vs-hsv).

### Select or Shift

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Hue Select`/`Hue Shift`
  - Default: `Hue Shift`

This dropdown allows you to select how the Color Adjustment should behave when the Hue Shift is used. By default, this will be set to `Hue Shift`.

<details>
<summary><b>Select or Shift Options</b></summary>

- `Hue Select`: Directly applies the selected Hue as an override to the entire Flipbook.
- `Hue Shift`: Only tints the Flipbook based on the lerped value. This is the default behavior.

</details>

### Shift Speed

- `Type`: <PropertyIcon name="float" />**Float**

How much to constantly shift the hue with time. A value of 1 will result in a full hue shift cycle every 20 seconds.

### Hue Shift

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

How much to shift the flipbook around the hue circle.

This value is circular, and will have the same result at 0 and 1.

## Audio Link

:::info
The settings in this section will only be visible when [Audio Link](/docs/audio-link/audio-link.md) is activated on the Material.
:::

### Scale Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band of the audio to use for the Audio Link Scale Mod.

### Scale Mod

How much to modify (mod) the scale of the flipbook. These values are added to the current scale, and can be positive or negative.

- `Type`: <PropertyIcon name="float4" />**Vector4**

| Channel | Function |
| --- | --- |
| X | Amount Added to X Scale with no audio in Scale Band |
| Y | Amount Added to Y Scale with no audio in Scale Band |
| Z | Amount Added to X Scale with max audio in Scale Band |
| W | Amount Added to Y Scale with max audio in Scale Band |

### Alpha Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band to use for the Audio Link Alpha adjustment.

### Alpha Mod

- `Type`: <PropertyIcon name="float2" />**Vector2**

How much to modify (mod) the alpha of the flipbook, in degrees.

| Channel | Function |
| --- | --- |
| X | Amount Added to alpha with no audio in alpha Band |
| Y | Amount Added to alpha with max audio in alpha Band |

### Emission Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band to use for the Audio Link Emission adjustment.

### Emission Mod

- `Type`: <PropertyIcon name="float2" />**Vector2**

How much to modify (mod) the alpha of the flipbook.

| Channel | Function |
| --- | --- |
| X | Amount Added to Emission with no audio in Emission Band |
| Y | Amount Added to Emission with max audio in Emission Band |

### Frame Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band to use for the frame adjustment.

### Frame Control

- `Type`: <PropertyIcon name="float" />**Vector2**

How many frames to add. This is added to the current frame, and stacks with a constant FPS, or with Chronotensity frame control.

### Chronotensity

#### Chrono Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band to use for the chronotensity frame adjustment.

#### Chrono Type

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**

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

- `Type`: <PropertyIcon name="float" />**Float**

How much chronotensity should affect the frame continuation of the decal. Good starting values are `5 - 30`. Combines well with FPS being set to `0`.
