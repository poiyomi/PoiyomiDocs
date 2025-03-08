---
sidebar_position: 14
title: Screen Space Ambient Occlusion
description: Simulates Ambient Occlusion in the Screen-Space with custom colors and effects.
keywords: [ambient occlusion, ao, ambient, occlusion, shader effect, shading, screen space ambient occlusion, screen space ao, screen space]
---
import PoiVideo from '@site/src/components/PoiVideo'

# Screen Space Ambient Occlusion <span class="badge badge--primary">Pro</span>

In 3D graphics, ambient occlusion is a global illumination term that measures how much ambient light can reach a surface. Poiyomi SSAO is an approximation of this shadowing that is useful for adding depth and crisp detail shadows.

:::info Pro Only
**This Feature is only available in Poiyomi Pro!** Subscribe to the [Patreon](https://www.patreon.com/poiyomi) at the $10 tier or higher in order to see this module.
:::

:::warning Requires Depth Buffer
In order to use SSAO, you will need to place the `DepthGet` Prefab found in the `Assets/_PoiyomiShaders/Prefabs` on your avatar.
:::

:::tip Recommended Toggle Setup
SSAO is a performance heavy effect, so use it mindfully. Add a toggle for [Animatable Toggle](#animatable-toggle) below, and for toggling the `DepthGet` object. Both should be disabled by default and unsaved. In some Worlds, you can get away without activating your depth light!
:::

## Animatable Toggle

- `Type`: Boolean

<!-- 
EDITORS NOTE: This H2 Header only has this Message Box below. Adding additional words above or below it may make it look repetitive. Let's avoid that. -BluWizard10
-->

:::tip
Animate this boolean (checkbox) when creating toggles for SSAO on this Material. Animating the [Section Header](/docs/general/locking.md#section-header-checkboxes) will not work!
:::

## AO Intensity

- `Type`: **Float**, Range: `0.0 - 5.0`

Determines how intensely AO will be blended.

## AO Radius

- `Type`: **Float**, Range: `0.0001 - 0.02`

Determines the radius tested for hemispheric visibility check. This controls how far AO shadows can spread out.

## AO Quality

- `Type`: **Float**, Range: `2.0 - 10.0`

:::warning Performance
This directly controls how many samples from the depth buffer AO takes for each pixel it is run on. If you fill your display with SSAO pixels (common when cuddling, for example) this performance cost adds up. Try starting at 4, and adding .05 jitter. Make sure you evaluate changes in-game and in VR - artifacting isn't generally as noticeable in motion.
:::

Determines how many samples are taken and how they're distributed, whether that would be sharper or smoothened.

Lower Values will make it look more like a cel-shader, while Higher Values will make it look more smooth and cleaner.

## Center Importance

- `Type`: **Float**, Range: `0.0 - 1.0`

Weights shadows towards the source of occlusion, making shadow falloff more gradual.

## Depth Bias

- `Type`: **Float**, Range: `0.0 - 0.2`

Clips away the least intense shadows to help reduce visual artifacts.

## Cone Bias

- `Type`: **Float**, Range: `0.0 - 1.0`

Reduces shadowing on geometry that isn't actually occluded. Generally, you should use this instead of Depth bias.

## Random Jitter

- `Type`: **Float**, Range: `0.0 - 1.0`

Adds a dithered jitter effect which can help mask lower sample counts.

## Use Normals

- `Type`: **Float**, Range: `0.0 - 1.0`

0 uses vertex normals, 1 uses per-pixel normals when calculating the SSAO.

## Color and Masking

### Use Color Texture?

- `Type`: **Boolean**

Enables the Color Map texture slot for SSAO.

#### Color Map

- `Type`: **Color** Texture (`sRGB = On`)

Color Map allows the user to map SSAO shadow color using a texture.

### Use Color Mask?

- `Type`: **Boolean**

Enables the Color Mask texture slot for SSAO.

#### Mask

- `Type`: **Data** Texture (`sRGB = Off`)

Color Mask allows the user to mask out certain areas from being affected by SSAO.

### HSVG

- `Type`: **Float4**

Color Adjust fields for SSAO. Refers to Hue, Saturation, Brightness, and Gamma.

| Channel | Function |
| --- | --- |
| X | Hue |
| Y | Saturation |
| Z | Value/Brightness |
| W | Gamma |

### Color

- `Type`: **Color**

SSAO shadow color. Black by default.

### Use Surface Color

- `Type`: **Float**, Range: `0.0 - 1.0`

Samples the color from the surface of the Material to use for the SSAO color.

### Blend Mode

- `Type`: **Dropdown**, Options: `Repalce`/`Darken`/`Multiply`/`Lighten`/`Screen`/`Subtract`/`Add`/`Overlay`

Which blending operation to use for the SSAO color.

## Advanced & Global Masks

### Hide In Light

- `Type`: **Float**, Range: `0.0 - 1.0`

Stylistically hide SSAO under bright lighting conditions.

### Quality Falloff Start

- `Type`: **Float**

The distance from the camera, in meters, beyond which AO will steadily reduce quality to improve performance.

### Quality Falloff End

- `Type`: **Float**

The distance from the camera, in meters, beyond which AO will be completely disabled to improve performance.

### Max Distance Falloff

- `Type`: **Float2**

Reduce these if your AO looks like it's "reaching too far". X determines the difference in depth (beyond the radius) beyond which AO shadows will begin to attenuate. Y determines the difference in depth (beyond the radius) beyond which AO shadows will completely terminate.

### Apply From Global Mask

- `Type`: **Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Select which [Global Mask](/docs/modifiers/global-masks.md) to apply to SSAO.

### Apply To Global Mask

- `Type`: **Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Select which [Global Mask](/docs/modifiers/global-masks.md) SSAO writes to.
