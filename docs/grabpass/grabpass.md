---
sidebar_position: 1
title: Grabpass
---
import PoiVideo from '@site/src/components/PoiVideo'

:::warning
Grabpass is an expensive feature - it has to take a screenshot every frame. This will always cause some amount of performance hit, so use it judiciously.
:::

Grabpass transparency uses a grabpass, effectively a screenshot of the scene, to create special effects like refraction and blur. It's a powerful but expensive feature that enables unique effects.

## Grabpass Transparency

The main section defines how the grabpass is blended with the scene.

### Use Alpha

- `Type`: **Checkbox**

Directly uses the alpha of the material to define the blend amount (how much the grabpass color is blended with the base color).

If enabled, **Blend Map** and **Blend Amount** will not be used.

### Blend Map

- `Type`: **Data** Texture (sRGB **OFF**)

Texture that defines where the grabpass should be blended. White means the grabpass is fully blended, black means the grabpass is not blended at all. Can be thought of as an inverse opacity map.

### Blend Amount

- `Type`: **Float**, Range: `0.0 - 1.0`

Scaler for the blend amount. The grabpass color is blended with the base color by this amount. If a blend map is used, this should generally be set to 1.0.

### Source/Destination Blend

- `Type`: **Dropdown**

Blend factor to use for the source and destination factors, respectively.

For traditional transparent blending, `SrcFactor` should be set to `SrcAlpha` and `DstFactor` should be set to `OneMinusSrcAlpha`. Other factors can be used for other effects. Try some of the combinations listed in [Render Presets](/docs/general/render-preset.md#blending).

## Refraction

- `Type`: **Checkbox**

Enables or disables refraction.

Refraction is a special effect that makes the grabpass appear to be refracted by the surface. This is useful for things like glass, crystals, and water. 

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

Defines how much chromatic abberation to add. In areas where there is more refraction, more chromatic aberration is added.

Chromatic abberation separates certain colors by different amounts. This recreates a physical phenomenon in imperfect lenses, and can be aesthetically pleasing.

Note that if Chromatic Aberration is enabled, the Blur function will be disabled.

## Blur

### Blur Distance

- `Type`: **Float**, Range: `0.0 - 1.0`

How much blur to apply. The higher this value is, the blurrier the transparency will be.

### Blur Quality

- `Type`: **Integer**, Range: `0 - 10`

How many samples to draw for the blur. The higher this number, the more accurate the blur, but the more expensive it is to render. Good compromise values for quality are between 3 and 6, with higher values being more necessary for higher **Blur Distance**.

### Blur Directions

- `Type`: **Integer**, Range: `0 - 10`

How many directions to sample for the blur. The higher this number, the more accurate the blur, but the more expensive it is to render. Good compromise values for quality are between 4 and 8, with higher values being more necessary for higher **Blur Distance**.
