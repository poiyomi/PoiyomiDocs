---
sidebar_position: 14
title: Voronoi
description: Generates a voronoi noise pattern, either in 2D or 3D.
keywords: [voronoi, noise, pattern, special fx, effect, poiyomi, shader]
---

Voronoi is an effect that generates a noise pattern across the Material, either in 2D or 3D, making for very interesting stylized effects.

## Type

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `2D (Fast)`/`3D (Fast with color bugs)`/`3D (Slow with no bugs)`

Choice of Voronoi effect to use. Each of these are self-explanatory due to the way they function.

## Space

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Local`/`World`/`UV`

Where should the Voronoi effects be simulated on.

## Blend

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Color and Emission`/`Just Emission`

Chooses how you want the Voronoi to Blend with the Material.

## Affects Material Alpha

- `Type`: <PropertyIcon name="toggle" />**Toggle**

If enabled, the Voronoi will also affect the Material's Alpha.

## Mask

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = Off`)

Determines where to contain the Voronoi effects and where it should only appear in.

## Global Mask

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Same as above, but uses a [Global Mask](/docs/modifiers/global-masks.md) instead to determine the Mask.

## Noise

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = Off`)

Which Noise Map to use for the Voronoi effect.

## Noise Intensity

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

How much intensity to add to the Noise Map, if provided.

## Outer Color

- `Type`: <PropertyIcon name="color" />**Color**

Choice of Color to use for the Outer Voronoi.

## Outer Emission

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 20.0`

How much Emission to add to the Outer Voronoi's color.

## Inner Color

- `Type`: <PropertyIcon name="color" />**Color**

Choice of Color to use for the Inner Voronoi.

## Inner Emission

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 20.0`

How much Emission to add to the Inner Voronoi's color.

## Gradient

- `Type`: <PropertyIcon name="float2" />**Vector2**

In X and Y coordinates, determines the Gradient location of the Voronoi in the 2D space.

## Power

- `Type`: <PropertyIcon name="float" />**Float**

How much power to add to the Voronoi.

## Scale

- `Type`: <PropertyIcon name="float" />**Float**

How large or small to scale the Voronoi effects.

## Speed

- `Type`: <PropertyIcon name="float3" />**Float3**

How fast to move the Voronoi effect among the simulated space.

## Voronoi Random Cell Color

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables the ability to apply random saturation and brightness to each Voronoi cell simulated.

### Saturation Range

- `Type`: <PropertyIcon name="multislider" />**Multislider**, Range: `0.0 - 1.0`

Minimum and Maximum range of Saturation to apply to each randomized Voronoi Cell.

### Brightness Range

- `Type`: <PropertyIcon name="multislider" />**Multislider**, Range: `0.0 - 1.0`

Minimum and Maximum range of Brightness to apply to each randomized Voronoi Cell.

## Audio Link

:::info
The settings in this section will only be visible when [Audio Link](/docs/audio-link/audio-link.md) is activated on the Material.
:::

### Inner Emission Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which band to use for the Inner Emission Mod.

### Inner Emission Mod

- `Type`: <PropertyIcon name="float2" />**Vector2**

How much to add or subtract from the Inner Emission.

| Modifier | Function |
| --- | --- |
| Min | Amount changed to Inner Emission with No Audio in Size Band |
| Max | Amount changed to Inner Emission with Max Audio in Size Band |

### Outer Emission Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which band to use for the Outer Emission Mod.

### Outer Emission Mod

- `Type`: <PropertyIcon name="float2" />**Vector2**

How much to add or subtract from the Outer Emission.

| Modifier | Function |
| --- | --- |
| Min | Amount changed to Outer Emission with No Audio in Size Band |
| Max | Amount changed to Outer Emission with Max Audio in Size Band |

### Gradient Min Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which band to use for the Gradient Min Add

### Gradient Min Add

- `Type`: <PropertyIcon name="float" />**Float**

How much to add or subtract from the Gradient Min value.

### Gradient Max Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which band to use for the Gradient Max Add

### Gradient Max Add

- `Type`: <PropertyIcon name="float" />**Float**

How much to add or subtract from the Gradient Max value.

### Speed X Motion Type

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**

Which motion type to use for the Speed X.

<details>
<summary><b>Speed X Motion Type Options</b></summary>

- Motion Increases as intensity of the band increases
- Above but Smooth
- Motion moves back and forth as a function of intensity
- Above but Smoooth
- Fixed Speed Increase when the band is dark Stationary when light
- Above but Smooooth
- Fixed Speed Increase when the band is dark Fixed speed decrease when light

</details>

### Speed X Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which band to use for the Speed X.

### Speed X

- `Type`: <PropertyIcon name="float" />**Float**

How much to add or subtract from the Speed X value.

### Speed Y Motion Type

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**

Which motion type to use for the Speed Y.

<details>
<summary><b>Speed Y Motion Type Options</b></summary>

- Motion Increases as intensity of the band increases
- Above but Smooth
- Motion moves back and forth as a function of intensity
- Above but Smoooth
- Fixed Speed Increase when the band is dark Stationary when light
- Above but Smooooth
- Fixed Speed Increase when the band is dark Fixed speed decrease when light

</details>

### Speed Y Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which band to use for the Speed Y.

### Speed Y

- `Type`: <PropertyIcon name="float" />**Float**

How much to add or subtract from the Speed Y value.

### Speed Z Motion Type

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**

Which motion type to use for the Speed Z.

<details>
<summary><b>Speed Z Motion Type Options</b></summary>

- Motion Increases as intensity of the band increases
- Above but Smooth
- Motion moves back and forth as a function of intensity
- Above but Smoooth
- Fixed Speed Increase when the band is dark Stationary when light
- Above but Smooooth
- Fixed Speed Increase when the band is dark Fixed speed decrease when light

</details>

### Speed Z Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which band to use for the Speed Z.

### Speed Z

- `Type`: <PropertyIcon name="float" />**Float**

How much to add or subtract from the Speed Z value.