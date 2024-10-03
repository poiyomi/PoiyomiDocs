---
sidebar_position: 14
title: Voronoi
description: Generates a voronoi noise pattern, either in 2D or 3D.
keywords: [voronoi, noise, pattern, special fx, effect, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

Voronoi is an effect that generates a noise pattern across the Material, either in 2D or 3D, making for very interesting stylized effects.

## Type

- `Type`: **Dropdown**, Options: `2D (Fast)`/`3D (Fast with color bugs)`/`3D (Slow with no bugs)`

Choice of Voronoi effect to use. Each of these are self-explanatory due to the way they function.

## Space

- `Type`: **Dropdown**, Options: `Local`/`World`/`UV`

Where should the Voronoi effects be simulated on.

## Blend

- `Type`: **Dropdown**, Options: `Color and Emission`/`Just Emission`

Chooses how you want the Voronoi to Blend with the Material.

## Affects Material Alpha

- `Type`: **Checkbox**

If enabled, the Voronoi will also affect the Material's Alpha.

## Mask

- `Type`: **Data** Texture (`sRGB = Off`)

Determines where to contain the Voronoi effects and where it should only appear in.

## Global Mask

- `Type`: **Dropdown**, Options: `1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Same as above, but uses a [Global Mask](/docs/modifiers/global-masks.md) instead to determine the Mask.

## Noise

- `Type`: **Data** Texture (`sRGB = Off`)

Which Noise Map to use for the Voronoi effect.

## Noise Intensity

- `Type`: **Float**, Range: `0.0 - 1.0`

How much intensity to add to the Noise Map, if provided.

## Outer Color

- `Type`: **Color**

Choice of Color to use for the Outer Voronoi.

## Outer Emission

- `Type`: **Float**, Range: `0.0 - 20.0`

How much Emission to add to the Outer Voronoi's color.

## Inner Color

- `Type`: **Color**

Choice of Color to use for the Inner Voronoi.

## Inner Emission

- `Type`: **Float**, Range: `0.0 - 20.0`

How much Emission to add to the Inner Voronoi's color.

## Gradient

- `Type`: **Vector2**

In X and Y coordinates, determines the Gradient location of the Voronoi in the 2D space.

## Power

- `Type`: **Float**

How much power to add to the Voronoi.

## Scale

- `Type`: **Float**

How large or small to scale the Voronoi effects.

## Speed

- `Type`: **Float3**

How fast to move the Voronoi effect among the simulated space.

## Voronoi Random Cell Color

- `Type`: **Checkbox**

Enables the ability to apply random saturation and brightness to each Voronoi cell simulated.

### Saturation Range

- `Type`: **Clamped Float**, Range: `0.0 - 1.0`

Minimum and Maximum range of Saturation to apply to each randomized Voronoi Cell.

### Brightness Range

- `Type`: **Clamped Float**, Range: `0.0 - 1.0`

Minimum and Maximum range of Brightness to apply to each randomized Voronoi Cell.