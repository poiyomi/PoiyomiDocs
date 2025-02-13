---
sidebar_position: 2
title: Color Adjust
description: Color Adjust provides options for modifying the base color of the material. This includes settings for adjusting the HUE and Color on your Material.
keywords: [hue, color, saturation, gamma, hue shift, poiyomi]
---
import PoiVideo from '@site/src/components/PoiVideo'

The Color Adjust section provides options for modifying the base color of the material. This is applied directly after the main [Color and Normals](/docs/color-and-normals/main.md) section, and will not affect any other sections that modify the Base Color.

Color Adjust can be used to quickly change the colors presented from the main texture to a different hue of color either directly or indirectly. The results of the hue shift can vary depending on which [Color Space](#color-space) is chosen, and how much [Saturation](#saturation), [Brightness](#brightness), and [Gamma](#gamma), is set by the user.

<PoiVideo url='/vid/color-and-normals/ColorAdjustDemo2.mp4'/>
<em>Demonstration of the Color Adjust feature on this Avatar's Suit. Watch how the Saturation, Brightness, and Gamma, can influence how shifting the Hue will look.</em>

## Mask

- `Type`: **Data** Texture (`sRGB = OFF`)

A texture that defines where to apply the color adjustments. If this texture is not defined, the adjustments will apply everywhere.

| Channel | Mask |
|--|--|
| Red | Hue |
| Green |  Brightness  |
| Blue | Saturation |

## Saturation

- `Type`: **Float**, Range: `-1.0 - 10.0`
  - Normal: `0.0`

Adjusts the saturation of the base color. 

A value of -1 will make the base color fully de-saturate (grayscale). A value of 0 will not alter the color at all. A value greater than 0 will increase the saturation of the base color.

This is implemented as a lerp between the base color and a grayscale version of the base color.

## Brightness

- `Type`: **Float**, Range: `-1.0 - 1.0`
  - Normal: `0.0`

Adjusts the brightness of the base color. 

This adds brightness directly on top of the existing color, without regard for its hue or tone. 

## Gamma

- `Type`: **Float**, Range: `0.0 - 5.0`
  - Normal: `1.0`

Adjusts the gamma of the base color.

This can lerp the brightness of the color in regards to its hue or tone. Lower values are more lighter, while higher values are more bolder.

## Hue Shift

- `Type`: **Checkbox**

Enable or Disable the Hue Shifting functionality. Turn this ON to enable the Hue Shifting feature.

### Color Space

- `Type`: **Dropdown**, Options: `OKLab`/`HSV`
  - Default: `OKLab`

Choice of Color Space to use for the Hue Shift. By default, it will be set to `OKLab`.

The usage of perceptual color space is desirable when using the Color Adjust feature. OKLab provides better perceptual properties that allow more accurate color changes, compared to the legacy HSV method. For more technical information on how this works, [see this external webpage <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://bottosson.github.io/posts/oklab/).

<details>
<summary><b>Differences between OKLab vs. HSV</b></summary>

#### OKLab vs. HSV

OKLab has varying hue with constant lightness and chroma. It is more *even* in lightness for various hues. The reason for this is because OKLab takes the perceived lighting, including on how Green/Red and Blue/Yellow the color is, and calculates it to be a more accurate perception of the color being seen. When you compare this to HSV, the results are more worse when using HSV.

Because of OKLab's accuracy, this eliminates issues with noise and colors being washed out when changing the Hue.

<PoiVideo url='/vid/color-and-normals/HueShift2.mp4'/>

*Demonstration of the difference between OKLab (Left) vs. HSV (Right) in Unity.*

As you can see above, the difference is quite obvious. OKLab is better at changing one thing while keeping the rest visually correct - changing the Hue while maintaining perceived Brightness and Saturation.

On Legacy HSV, you will see that it makes the color look more washed out. This can lead to very undesirable results.

**We strongly recommend using OKLab when setting up a Hue Shift system for your Avatar.** In addition, consider using the Saturation, Brightness, and Gamma options that are available to you alongside your Hue Shift for more accurate results.

</details>

### Select or Shift

- `Type`: **Dropdown**, Options: `Hue Select`/`Hue Shift`
  - Default: `Hue Shift`

This dropdown allows you to select how the Color Adjustment should behave when the Hue Shift is used. By default, this will be set to `Hue Shift`.

<details>
<summary><b>Select or Shift Options</b></summary>

- `Hue Select`: Directly applies the selected Hue as an override. If there are multiple colors, this will also directly override them to your selected Hue.
- `Hue Shift`: Only tints the Base Color based on the lerped value. This is the default behavior.

</details>

<PoiVideo url='/vid/color-and-normals/HueSelectShiftDemo.mp4'/>
<em>Demonstration of the Select and Shift behavior. Pay attention to how multiple colors are treated when using Select instead of Shift.</em>

### Hue Replace

- `Type`: **Checkbox**
  - Default: `On`

Changes how the hue shift is applied when a hue shift mask is present. 

If enabled, the base color will be lerped with the hue shifted color based on the mask's red channel value. Generally, this will result in more of the base color being present.

If disabled, the base color will be directly hue shifted, with the amount of hue shift determined by both the slider and the mask's red channel. 

### Hue Shift

- `Type`: **Float**, Range: `0.0 - 1.0`
  - Normal: `0.0`

How much to shift the base color around the hue circle. 

This value is circular, and will have the same result at 0 and 1. 

### Hue Shift Speed

- `Type`: **Float**

How much to constantly shift the hue with time. A value of 1 will result in a full hue shift cycle every 20 seconds.

### Hue Shift Audio Link

- `Type`: **Checkbox**

If enabled, allows the Hue Shift to be controlled with Audio Link chronotensity.

:::info
The settings in this section will only be visible when [AudioLink](/docs/audio-link/audio-link.md) is activated on the Material.
:::

#### Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which audio link frequency band to use for the hue shift motion.

#### Motion Type

- `Type`: **Dropdown**

Which chronotensity motion mode to use for the hue shift motion. These are somewhat self descriptive, but more information is available in the [Audio Link Docs](https://github.com/llealloo/vrc-udon-audio-link/tree/master/Docs#alpass_chronotensity).

#### Motion Speed

- `Type`: **Float**

How fast the audio link chronotensity should cycle the hue shift.

## Color Grading

- `Type`: **Checkbox**

If enabled, uses a `Gradation Map` as reference to determine how the Color Adjust should appear with the defined Color Grading style.

### Gradation Map

- `Type`: **Color** Texture (`sRGB = ON`)

Texture to use for the Color Grading

### Gradation Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

How strong should the Color Grading be applied to the Color Adjust.

## Global Mask

Use this section to instead use a [Global Mask](/docs/modifiers/global-masks.md) for the Color Adjust Mask.

### Hue

- `Type`: **Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Choice of which Global Mask channel to use for the Hue.

### Saturation

- `Type`: **Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Choice of which Global Mask channel to use for the Saturation.

### Brightness

- `Type`: **Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Choice of which Global Mask channel to use for the Brightness.