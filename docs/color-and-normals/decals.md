---
sidebar_position: 5
title: Decals
description: In Poiyomi Shaders, Decals are used to place images onto your UV with specific location, rotation, and blending.
image: /img/color-and-normals/Thumb-Decals.png
keywords: [decal, decals, decorative, decoration, sticker, logo, shape, blush, poiyomi, shader]
toc_max_heading_level: 4
---

Decals are used to place images onto a UV with specific location, rotation, and blending. 4 independent Decal sections are available, with extensive base and AudioLink options.

They can be used to add high resolution designs and details onto a mesh without the base texture having to be higher resolution, or to replace base textures entirely. This can allow fun and unique ways to decorate your Avatar with logos, shapes, stickers, or even as a blush emote toggle.

<a>
<img src="/img/color-and-normals/Decal_Example.png" alt="Decal Example" width="700px"/>
</a>

*Example of 3 Decals placed on this Avatar's Jacket; a Poiyomi Shaders wordmark, the Poi Logo, and a Snowflake.*

## Decal RGBA Mask

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = OFF`)

A mask texture that defines where to place different decals. Each decal section can define which channel of the mask to sample from.

This texture defaults to pure white, so no masking will be applied with no texture defined.

## Decal Slot

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables the mentioned Decal slot.

:::info Documentation Info
Each of the 4 decal sections (0, 1, 2, 3) have the following options listed below. They are independent of each other and colors are blended in order of ID, according to their blend operation. Decal Emissions are always added with one another when overlapping.
:::

### Positioning

:::tip
Decals supports the **Raycast** feature, which allows you to visually position a Decal on your Model without having to second-guess it's exact UV coordinates.

To use this feature, edit the Decal on your Material <u>directly from the Mesh</u> as shown here:

<PoiVideo url='/vid/color-and-normals/Decals_RaycastDemo.mp4' width='300px'/>

`Left-Click` on the **Raycast** button to enable the feature. Hover the Mouse over your Mesh to position it, then `Left-Click` again to finalize your placement.
:::

#### Position

- `Type`: <PropertyIcon name="float2" />**Vector2**

Where on the UV the decal's center should be.

#### Rotation

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 360.0`

How much rotation to apply to the decal, around its center position.

#### Rotation Speed

- `Type`: <PropertyIcon name="float" />**Float**

A constant roatation speed applied to the decal. A value of `180` will rotate the decal once per second.

#### Scale

- `Type`: <PropertyIcon name="float2" />**Vector2**

Scale of the decal, in UV space. `1.0, 1.0` would map the decal to the entire UV square.

#### Side Offset

- `Type`: <PropertyIcon name="float4" />**Vector4**

How much scale offset to define on each side of the decal.

#### Mirrored UV Mode

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Off`/`Flip`/`Left Only`/`Right Only`/`Flip Right Only`

This option allows you to place Decals on Meshes that have problematic overlapping UVs, where two or more UV islands stack above each other. Use this to put Decals on just one side, or flip them on one side as well.

:::info
If your Decals appear normally in the intended location without it appearing in another area, you shouldn't need to use this setting!

While models with Overlapping UVs are becoming less and less common, there are still many models out there that suffer from this mistake. Only use this setting if this is the case on your end.
:::

#### Symmetry Mode

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Off`/`Symmetry`/`Flipped`

This setting will divide the UV down the Center (at `X = 0.5`) and puts the Decal on Both Sides of the Symmetry, like a mirror. This only works on models that have a perfectly symmetrized UV layout.

#### Tiled

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Whether or not the decal texture should be tiled. By default, decals are not tiled.

### Color

- `Type`: <PropertyIcon name="color" />**Color**

Base color for the decal texture. This is blended multiplicative with the Decal.

### Decal

- `Type`: <PropertyIcon name="texture" />**Color** Texture (`sRGB = ON`)

The texture used for the decal. The alpha channel is used to define where the decal should be blended.

#### Mask Channel

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `R`/`G`/`B`/`A`

Which channel of the Decal RGBA mask to use for masking. ***Expand the [Decal](#decal) Texture Slot to see this property.***

### Emission Strength

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 20.0`

How much Emission to apply from the Decal's Base Color. Higher values will yield a bloom-like effect in certain Worlds.

### Color Blend Mode

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Replace`/`Darken`/`Multiply`/`Lighten`/`Screen`/`Subtract`/`Add`/`Overlay`/`Mixed`

Which blending operation to use for the Decal's base color.

These are the same blending operators that are used in Adobe Photoshop.[^1]

### Alpha Blend Mode

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**
    - Main Options: `Off`/`Replace`/`Multiply`/`Add`/`Subtract`/`Min`/`Max`
    - Secondary Options: `Everywhere`/`Decal Bounds`

Which blending operation to use from the Decal's Alpha channel.

### Alpha

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

How much to apply the blended color to the base color.

:::tip
This slider can be used to hide and show a decal by animating it's value.
:::

### Depth

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `-0.5 - 2.0`

How much parallax depth the decal should have. This can be used for layered parallax posters, or other unique designs.

### Hue Shift

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enable or Disable hue shifting of the Decal.

#### Color Space

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `OKLab`/`HSV`

Choice of Color Space to use for the Hue Shift. By default, it will be set to `OKLab`.

Learn about the difference of Color Spaces as documented here in [Color Adjust](/docs/color-and-normals/color-adjust.md#oklab-vs-hsv).

#### Select or Shift

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Hue Select`/`Hue Shift`
  - Default: `Hue Shift`

This dropdown allows you to select how the Color Adjustment should behave when the Hue Shift is used. By default, this will be set to `Hue Shift`.

<details>
<summary><b>Select or Shift Options</b></summary>

- `Hue Select`: Directly applies the selected Hue as an override to the entire Decal.
- `Hue Shift`: Only tints the Decal based on the lerped value. This is the default behavior.

</details>

#### Shift Speed

- `Type`: <PropertyIcon name="float" />**Float**

How much to constantly shift the decal hue with time. A value of 1 will result in a full hue shift cycle every 20 seconds.

#### Hue Shift

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

How much to shift the base color around the hue circle.

This value is circular, and will have the same result at `0` and `1`.

#### Hue Angle Power

- `Type`: <PropertyIcon name="float" />**Float**

How much to shift the hue with surface angle. A value of `1` will give maximum hue shift when looking straight-on, and no hue shift cycle when looking side-on. The opposite effect can be achieved with negative values. Higher or lower values will produce more or less hue shift as the surface angle changes, creating the kind of effect seen on some holographic trading cards and iridescent materials.

### Video Texture

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables Video Texture to project on the Decal.

:::warning
This feature enables a Video Texture to appear on the Decal. It will only work if a Video Player is broadcasting an `_Udon_VideoTex` Global Render Texture in the instance.
:::

<details>
<summary><b>How to test Decal Video Textures</b></summary>

1. Ensure you have the `AudioLinkAvatar` Prefab in your Scene, as described [here](/docs/audio-link/audio-link.md#how-to-test-audiolink-using-poiyomi-shaders).
2. Inside the `AudioLinkAvatar` Prefab, expand it and select the object `AudioLinkYtdlpPlayer`. *This is the same place where you specify a YouTube video to use when testing AudioLink.*
3. On the bottom line, **enable** the checkmark called `Enable Global Video Texture`.
4. The Decal Video Texture can now be tested and debugged in the Unity Editor while in Play Mode.

**REMEMBER: Global Video Texture is <u>NOT</u> a part of AudioLink and is only provided as a convenience!**

*It's also worth knowing that there are not many Worlds out there supporting this feature. Currently, only Worlds that utilize the latest versions of [ProTV <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://protv.dev/) 3.0 are able to broadcast Video Textures to shaders.*

</details>

#### Aspect Ratio

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Shrink2Fit`/`Grow2Fit`/`Off`

Determines the Aspect Ratio of the Video Texture. You can specify to either fit within the boundaries of your Decal, or fill in the entire Decal boundaries.

#### Fit To Scale

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Changes the sizing of the Video Texture to fit to the Scale of the Decal.

#### Use Decal Alpha

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Uses the Alpha of the Decal for the Video Texture.

#### Only Show Video

- `Type`: <PropertyIcon name="toggle" />**Toggle**

If enabled, will show ONLY the Video on the Decal.

#### Emission

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 20.0`

Adjusts the Emissive effect of the Video Texture. Higher values will yield a bloom-like effect in some Worlds.

### Chromatic Aberration

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables a feature that turns the specified Decal into a Chromatic Aberration effect, which splits the colors alongside a specified angle.

#### Intensity

- `Type`: <PropertyIcon name="float" />**Float**

Amount of aberration to use, increasing it's distance. Higher values will yield more intense aberration.

#### Surface Angle Intensity

- `Type`: <PropertyIcon name="float" />**Float**

Adjusts how the surface influences the Angle intensity.

#### Hue

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `-1.0 - 1.0`

Modifies the chromatic hue on the aberration.

#### Direction

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `-3.14 - 3.14`

Adjusts the direction of the aberration.

#### Premultiply Alpha

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables pre-multiplying the Alpha of your Decal for Chromatic Aberration.

### Masking

#### Face Mask

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Off`/`Front Only`/`Back Only`

Choice of where the Decal should appear on your Normals. You can choose it to appear only on the Front Face, the Back Face, or Both (default).

#### Apply From Global Mask

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Select which [Global Mask](/docs/modifiers/global-masks.md) to apply directly onto the Decal.

#### Apply To Global Mask

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Select which [Global Mask](/docs/modifiers/global-masks.md) to send your Decal's effects onto the specified Global Mask.

## AudioLink

:::info
The settings in this section will only be visible when [AudioLink](/docs/audio-link/audio-link.md) is activated on the Material.
:::

### Scale Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band of the audio to use for the Audio Link Scale Mod.

### Scale Mod

How much to modify (mod) the scale of the decal. These values are added to the current scale, and can be positive or negative.

- `Type`: <PropertyIcon name="float4" />**Vector4**

| Channel | Function |
| --- | --- |
| X | Amount Added to X Scale with no audio in Scale Band |
| Y | Amount Added to Y Scale with no audio in Scale Band |
| Z | Amount Added to X Scale with max audio in Scale Band |
| W | Amount Added to Y Scale with max audio in Scale Band |

### Side Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band to use for the Audio Link Side adjustment.

### Side Mod Min

- `Type`: <PropertyIcon name="float4" />**Vector4**

How much to modify (mod) the side adjustment of the decal when there is no audio in the Side Band. These values are added to the current scale, and can be positive or negative.

| Channel | Function |
| --- | --- |
| X | Amount Added to X Left with no audio in Side Band |
| Y | Amount Added to X Right with no audio in Side Band |
| Z | Amount Added to Y Up with no audio in Side Band |
| W | Amount Added to Y Down with no audio in Side Band |

### Side Mod Max

How much to modify (mod) the side adjustment of the decal when there is maximum audio in the Side Band. These values are added to the current scale, and can be positive or negative.

- `Type`: <PropertyIcon name="float4" />**Vector4**

| Channel | Function |
| --- | --- |
| X | Amount Added to X Left with max audio in Side Band |
| Y | Amount Added to X Right with max audio in Side Band |
| Z | Amount Added to Y Up with max audio in Side Band |
| W | Amount Added to Y Down with max audio in Side Band |

### Rotation Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band to use for the Audio Link Rotation adjustment.

### Rotation Mod

- `Type`: <PropertyIcon name="float2" />**Vector2**

How much to modify the rotation of the decal, in degrees.

| Channel | Function |
| --- | --- |
| X | Amount Added to rotation with no audio in Rotation Band |
| Y | Amount Added to rotation with max audio in Rotation Band |

### Alpha Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band to use for the Audio Link Alpha adjustment.

### Alpha Mod

- `Type`: <PropertyIcon name="float2" />**Vector2**

How much to modify the alpha of the decal.

| Channel | Function |
| --- | --- |
| X | Amount Added to alpha with no audio in alpha Band |
| Y | Amount Added to alpha with max audio in alpha Band |

### Emission Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band to use for the Audio Link Emission adjustment.

### Emission Mod

- `Type`: <PropertyIcon name="float2" />**Vector2**

How much to modify the Emission of the decal.

| Channel | Function |
| --- | --- |
| X | Amount Added to Emission with no audio in Emission Band |
| Y | Amount Added to Emission with max audio in Emission Band |

### CC Strip

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables or disables the ColorChord strip. ColorChord strip is a strip of colors that vary based on the audio, producing specific consistent colors for given chords.

### Chrono Rotation Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band to use for the Audio Link Chrono Rotation adjustment.

### Chrono Motion Type

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**

Which motion type to use for the Chrono Rotation. Chronotensity is an Audio Link feature that allows time-dependent features, which shaders alone cannot do. In this case, chronotensity is used to create a time-dependent rotation of the decal.

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

### Chrono Rotation Speed

- `Type`: <PropertyIcon name="float" />**Float**

How much chronotensity should affect the rotation of the decal. Good starting values are `0.1 - 0.5`.

## Footnotes

[^1]: [Blending modes in Adobe Photoshop](https://helpx.adobe.com/photoshop/using/blending-modes.html)