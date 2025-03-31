---
sidebar_position: 1
title: Grab Pass
description: Grab Pass Transparency takes a screenshot of the scene every frame to create special effects, such as refraction and blur.
keywords: [grab, pass, grabpass, transparency, refraction, blur, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

Grab Pass transparency uses a Grab Pass, which takes a screenshot of the scene every frame to create special effects like refraction and blur. It's a powerful, but expensive feature that enables unique effects.

To use Grab Pass, select the Shader version `.poiyomi/Poiyomi Toon Grab Pass`. Included in this Shader version, a new Grab Pass category will appear with the following settings shown below.

:::warning
Grab Pass is an expensive feature - it has to take a screenshot every frame. This will always cause some amount of performance hit, so use it judiciously!
:::

## Refraction

- `Type`: **Boolean**

Enables or disables refraction.

Refraction is a special effect that makes the Grab Pass appear to be refracted by the surface. This is useful for things like glass, crystals, and water. 

### Refraction

- `Type`: **Float**, Range: `0.0 - 3.0`, Default: `1.0`

How much refraction to add. This is equivalent to the [refractive index](https://en.wikipedia.org/wiki/Refractive_index) of the material. A value of 1.0 means no refraction. Some common physical values include:

- Air: `1.0`
- Water: `1.33`
- Window Glass: `1.5`
- Sapphire: `1.8`
- Diamond: `2.4`

A refractive index of less than 1.0 is not physically accurate, but it can be used to create a unique effect.

### Chromatic Aberration

- `Type`: **Float**, Range: `0.0 - 1.0`

Defines how much chromatic aberration to add. In areas where there is more refraction, more chromatic aberration is added.

Chromatic aberration separates certain colors by different amounts. This recreates a physical phenomenon in imperfect lenses, and can be aesthetically pleasing.

Note that if Chromatic Aberration is enabled, the Blur function will be disabled.

### Fresnel Power

- `Type`: **Float**, Range: `0.0 - 10.0`

Controls the distortion of the Refraction.

## Blur

- `Type`: **Boolean**

If enabled, creates a realtime Gaussian Blur effect on the Material.

### Blur Distance

- `Type`: **Float**, Range: `0.0 - 1.0`

How much blur to apply. The higher this value is, the blurrier the transparency will be.

### Blur Quality

- `Type`: **Integer**, Range: `1 - 20`

How many samples to draw for the blur. The higher this number, the more accurate the blur, but the more expensive it is to render. Good compromise values for quality are between 3 and 6, with higher values being more necessary for higher **Blur Distance**.

### Blur Directions

- `Type`: **Integer**, Range: `1 - 10`

How many directions to sample for the blur. The higher this number, the more accurate the blur, but the more expensive it is to render. Good compromise values for quality are between 4 and 8, with higher values being more necessary for higher **Blur Distance**.

### Use Smoothness

- `Type`: **Float**, Range: `0.0 - 1.0`

Applies a Smoothness modifier to the Blur.

### Center Importance

- `Type`: **Float**, Range: `0.0 - 1.0`

Determines the importance of the Gaussian Blur of Opaque objects visible behind the Material.

## Color

### Color

- `Type`: **Color**

Color used for multiplicative and additive brightness of the Grab Pass

### Multiplicative Brightness

- `Type`: **Float**

Controls the multiplication value of the Grab Pass Color.

### Additive Brightness

- `Type`: **Float**

Controls the additive of additional brightness of the Grab Pass Color.

## Advanced

### Use Material Alpha

- `Type`: **Boolean**

Directly uses the alpha of the material to define the blend amount (how much the Grab Pass color is blended with the base color).

If enabled, the below **Blend Map** and **Blend Amount** settings will be ignored.

### Blend Map

- `Type`: **Data** Texture (`sRGB = OFF`)

Texture that defines where the Grab Pass should be blended. White means the Grab Pass is fully blended, black means the Grab Pass is not blended at all. Can be thought of as an inverse opacity map.

### Blend Amount

- `Type`: **Float**, Range: `0.0 - 1.0`

Scaler for the blend amount. The Grab Pass color is blended with the base color by this amount. If a blend map is used, this should generally be set to 1.0.

### Global Mask

- `Type`: **Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Select which [Global Mask](/docs/modifiers/global-masks.md) should be used as the Blend Map.

### Source/Destination Blend

- `Type`: **Dropdown**, Options: `Zero`/`One`/`DstColor`/`SrcColor`/`OneMinusDstColor`/`SrcAlpha`/`OneMinusSrcColor`/`DstAlpha`/`OneMinusDstAlpha`/`SrcAlphaSaturate`/`OneMinusSrcAlpha`

Blend factor to use for the source and destination factors, respectively.

For traditional transparent blending, `Source Blend` should be set to `SrcAlpha` and `Destination Blend` should be set to `OneMinusSrcAlpha`. Other factors can be used for other effects. Try some of the combinations listed in [Render Presets](/docs/general/render-preset.md#blending).