---
sidebar_position: 3
title: Fur
description: The Poiyomi Fur Shader enables simulation of fabrics and hairs using a specialized technique similar to Height, at a notable performance cost.
keywords: [fur, fur shader, poiyomi fur, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

# Fur <span class="badge badge--primary">Pro</span>

The Poiyomi Fur Shader is a system that uses a height-based technique to enable simulation of fabrics and hairs. It can look similar to how fur is simulated in animated films but with some differences.

:::info Pro Only
**This Feature is only available in Poiyomi Pro!** Subscribe to the [Patreon](https://www.patreon.com/poiyomi) at the $10 tier or higher to access it.
:::

:::warning
Poiyomi Fur is a very expensive feature, as it must render every frame in order to simulate the effect. As such, this will cause a huge performance impact, so use it carefully!
:::

## Layer Count

- `Type`: **Float**, Range: `1 - 31`

How many fur layers to use. The higher the value, the more fur simulation will occur.

## Length

- `Type`: **Float**, Range: `0 - 0.05`

How much length the fur should be from the surface of the Mesh.

## Gravity Strength

- `Type`: **Float**, Range: `-1 - 1`

How much Gravity should be simulated on the fur.

## Color

- `Type`: **Color**

The Base Color of the Fur, if no Texture is defined.

## Fur Texture

- `Type`: **Color** Texture (`sRGB = On`)

Texture pattern to use as the fur.

## Apply Fur Texture to Skin

- `Type`: **Checkbox**

If enabled, applies the Fur Texture to the skin's surface.

## Mask

- `Type`: **Data** Texture (`sRGB = Off`)

Texture slot to use for masking areas where Fur should only simulate.

## Height Map

- `Type`: **Data** Texture (`sRGB = Off`)

Specify which Height Map to use for the Fur. This is the main driver for the Fur simulation.

## Height Map Min Max

- `Type`: **Variable Float**, Range: `0 - 1`

Determines the intensity of the Height range as determined by the Height Map.

## AO

- `Type`: **Float**, Range: `0.0 - 1.0`

Intensity of Ambient Occlusion to use on the Fur simulation.

## AO Min Max

- `Type`: **Variable Float**, Range: `0 - 1`

Determines the intensity of the AO range.

## Hue Shift

- `Type`: **Checkbox**

Enables options to change the Hue of the fur color using the Animator.

### Shift Speed

- `Type`: **Float**

How much to constantly shift the hue with time. A value of 1 will result in a full hue shift cycle every 20 seconds.

### Hue Shift

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to shift the fur color around the hue circle. 

This value is circular, and will have the same result at 0 and 1.

## Advanced

### Vertex Color Normals

- `Type`: **Checkbox**

If enabled, uses Vertex Color Normals for the Fur surface.

### Min Distance

- `Type`: **Float**

The minimum distance of the Fur.

### Max Distance

- `Type`: **Float**

The maximum distance of the Fur.