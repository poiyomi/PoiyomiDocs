---
sidebar_position: 14
title: Screen Space Ambient Occlusion
description: Simulates Ambient Occlusion in the Screen-Space with custom colors and effects.
keywords: [ambient occlusion, ao, ambient, occlusion, shader effect, shading, screen space ambient occlusion, screen space ao, screen space]
---
import PoiVideo from '@site/src/components/PoiVideo'

# Screen Space Ambient Occlusion <span class="badge badge--primary">Pro</span>

Screen Space Ambient Occlusion (SSAO) is a feature that allows simulation of shadow details to be brought out from the model through the use of the Screen-Space. This allows more rich shadows and details to be brought out more instead of using Textures or World Post Processing to create a suitable AO effect.

:::info Pro Only
**This Feature is only available in Poiyomi Pro!** Subscribe to the [Patreon](https://www.patreon.com/poiyomi) at the $10 tier or higher in order to see this module.
:::

:::warning Requires Depth Buffer
SSAO requires Depth in order for it to render in all Worlds! Therefore, the World needs to support the Depth Buffer.

To preview the effect in Unity, you will need to use the `DepthGet` Prefab found in the `Assets/_PoiyomiShaders/Prefabs` folder and place it directly into your Scene.

***If you upload your Avatar with the `DepthGet` Prefab included for it to work in ALL Worlds, please note that this will risk dropping your Performance Rank down to POOR!***
:::

## Animatable Toggle

- `Type`: Checkbox

Toggleable SSAO checkbox. Use this to exclusively animate the visibility of SSAO.

## AO Intensity

- `Type`: **Float**, Range: `0.0 - 5.0`

Controls the intensity of the SSAO effect. Higher values will yield more deeper results.

## AO Radius

- `Type`: **Float**, Range: `0.0001 - 0.02`

Determines the radius tested fo hemispheric visibility check. This controls how far AO shadows can spread out.

## AO Quality

- `Type`: **Float**, Range: `2.0 - 10.0`

Determines how many samples are taken and how they're distributed, whether that would be sharper or smoothened.

Lower Values will make it look more like a cel-shader, while Higher Values will make it look more smooth and cleaner.

## Center Importance

- `Type`: **Float**, Range: `0.0 - 1.0`

Sets the weight of the shadow towards center samples. This can make the falloff more softer, if desired.

## Depth Bias

- `Type`: **Float**, Range: `0.0 - 0.2`

Clips away the least intense shadows to help reduce visual artifacts.

## Cone Bias

- `Type`: **Float**, Range: `0.0 - 1.0`

Reduces shadowing on geometry that isn't actually occluded, instead of bias.

## Random Jitter

- `Type`: **Float**, Range: `0.0 - 1.0`

Adds noise and animated jitter to the SSAO effect. This is only useful for very stylized looks.

## Use Normals

- `Type`: **Float**, Range: `0.0 - 1.0`

Samples from the main [Normal Map](/docs/color-and-normals/main.md#normal-map) when calculating the SSAO.

## Color and Masking

### Use Color Texture?

- `Type`: **Checkbox**

Enables the Color Map texture slot for SSAO.

#### Color Map

- `Type`: **Color** Texture (`sRGB = On`)

Color Map allows the user to determine a Texture that will define how the SSAO colors will be rendered on the Material.

### Use Color Mask?

- `Type`: **Checkbox**

Enables the Color Mask texture slot for SSAO.

#### Mask

- `Type`: **Data** Texture (`sRGB = Off`)

Color Mask allows the user to mask out certain areas from being affected by color.

### HSVG

- `Type`: **Float4**

Color Adjust fields for SSAO. Refers to Hue, Saturation, Brightness, and Gamma.

| Channel | Function |
| --- | --- |
| H | Hue |
| S | Saturation |
| V | Brightness |
| G | Gamma |

### Color

- `Type`: **Color**

Main Color of SSAO. By default, it will be Black.

### Use Surface Color

- `Type`: **Float**, Range: `0.0 - 1.0`

Samples the color from the surface of the Material to use for the SSAO color.

### Blend Mode

- `Type`: **Dropdown**, Options: `Repalce`/`Darken`/`Multiply`/`Lighten`/`Screen`/`Subtract`/`Add`/`Overlay`

Which blending operation to use for the SSAO color.

## Advanced & Global Masks

### Hide In Light

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to hide the SSAO under bright lighting conditions.

### Quality Falloff Start

- `Type`: **Float**

The Starting Point of the AO Quality Falloff.

### Quality Falloff End

- `Type`: **Float**

The End POint of the AO Quality Falloff.

### Max Distance Falloff

- `Type`: **Float2**

Maximum distance of the AO Falloff.

### Apply From Global Mask

- `Type`: **Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Select which [Global Mask](/docs/modifiers/global-masks.md) to apply directly onto SSAO.

### Apply To Global Mask

- `Type`: **Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Select which [Global Mask](/docs/modifiers/global-masks.md) to send your SSAO's effects onto the specified Global Mask.