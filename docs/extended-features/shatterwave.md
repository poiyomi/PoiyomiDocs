---
sidebar_position: 4
title: ShatterWave
description: Poiyomi ShatterWave is an advanced special effect that uses the mesh's vertices to create a wavy effect.
keywords: [shatterwave, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

ShatterWave is an advanced special effect that uses the mesh's vertices to create a wavy effect across the mesh in variation. This effect is very similar to [Geometric Dissolve](/docs/extended-features/geometric-dissolve.md) with the exception of it being animated in an ocean wave-like effect instead.

To use Poiyomi ShatterWave, select the shader version `.poiyomi/Poiyomi Pro ShatterWave`. This exposes the ShatterWave category with the following settings shown below.

<!-- POIYOMI PRO LABEL -->
<a target="_blank" href="https://www.patreon.com/poiyomi">
<img src="/img/Poiyomi-Pro-Label.png" alt="Pro Feature" width="600px"/>
</a>

:::warning
ShatterWave can have a performance impact depending on the Mesh it is being used on. Use this feature wisely!
:::

## Wave Mask

- `Type`: **Data** Texture (`sRGB = OFF`)

Texture Mask to use for isolating the ShatterWave effect to a specific area only.

## Vertex Color Mask

- `Type`: **Dropdown**, Options: `Off`/`R`/`G`/`B`/`A`

Selection to use the mesh's Vertex Colors as the ShatterWave mask.

## Wave Color

- `Type`: **Color**

Color to use for the ShatterWave.

## Wave Texture

- `Type`: **Color** Texture (`sRGB = ON`)

Texture to use for the ShatterWave. Will be tinted based on the Wave Color.

## Wave Emission

- `Type`: **Float**, Range: `0.0 - 10.0`

Creates an Emissive effect on the ShatterWave's color.

## Apply to Global Mask

- `Type`: **Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Allows you to add the currently set ShatterWave setup to be applied to an existing [Global Mask](/docs/modifiers/global-masks.md) of your choice.

## Show Under Wave

- `Type`: **Toggle**

If enabled, shows the underneath mesh area beneath the affected ShatterWave area.

## Under Wave Color

- `Type`: **Color**

Sets the base color of the Under Wave.

## Under Wave Texture

- `Type`: **Color** Texture (`sRGB = ON`)

Sets the texture to use for the Under Wave. Will be tinted based on the Under Wave Color.

## Under Wave Emission

- `Type`: **Float**, Range: `0.0 - 10.0`

Creates an Emissive effect underneath the ShatterWave's mesh.

## Apply to Global Mask

- `Type`: **Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Allows you to add the currently set Under Wave setup to be applied to an existing [Global Mask](/docs/modifiers/global-masks.md) of your choice.

## Wave Speed X Y Z

- `Type`: **Float3**

How fast the waves move and in which direction.

## Wave Slope X Y Z

- `Type`: **Float3**

Measures the size of the wave slop and where it's being drawn at.

## Wave Density X Y Z

- `Type`: **Float3**

Measures how dense the waves are in tiled coordinates.

## Wave Width

- `Type`: **Float**, Range: `0.0 - 1.0`

## Wave Height

- `Type`: **Float**, Range: `0.0 - 1.0`

## AudioLink

- `Type`: **Toggle**

Enables AudioLink to manipulate the ShatterWave.

:::info
The settings in this section will only be visible when [AudioLink](/docs/audio-link/audio-link.md) is activated on the Material.
:::

## Emission Multiplier Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which band to use for the Emission multiplier.

## Emission Multiplier

- `Type`: **Vector4**
    - Default: `Min = 1`, `Max = 1`

How much to multiply the Emission Strength with Audio.

| Modifier | Function |
| --- | --- |
| Min | Amount of Emission being multiplied with no audio |
| Max | Amount of Emission being multiplied with max audio |

## Emission Add Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which band to use for adding Emission.

## Emission Add

- `Type`: **Vector4**

How much to add or subtract from the Emission with audio.

| Modifier | Function |
| --- | --- |
| Min | Amount of Emission being added or subtracted with no audio |
| Max | Amount of Emission being added or subtracted with max audio |

## Height Multiplier Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which band to use for the Height Multiplier.

## Height Multiplier

- `Type`: **Vector4**
    - Default: `Min = 1`, `Max = 1`

## Height Add Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which band to use for the Height Add.

## Height Add

- `Type`: **Vector4**

## Height Threshold Multiplier Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which band to use for the Threshold Multiplier.

## Height Threshold Multiplier

- `Type`: **Vector4**
    - Default: `Min = 1`, `Max = 1`

## Height Threshold Add Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which band to use for the Threshold Add.

## Height Threshold Add

- `Type`: **Vector4**

## ChronoTime Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which band to use for ChronoTime.

## ChronoTime Motion Type

- `Type`: **Dropdown**

Which motion type to use for the ChronoTime. ChronoTime is an Audio Link feature that allows time-dependent features, which shaders alone cannot do. In this case, ChronoTime is used to create a time-dependent speed of the motion.

<details>
<summary><b>ChronoTime Options</b></summary>

- Motion Increases as intensity of the band increases
- Above but Smooth
- Motion moves back and forth as a function of intensity
- Above but Smoooth
- Fixed Speed Increase when the band is dark Stationary when light
- Above but Smooooth
- Fixed Speed Increase when the band is dark Fixed speed decrease when light

</details>

## ChronoTime Speed

- `Type`: **Float**

How much should affect the ChronoTime speed. Good starting values are `0.1 - 0.5`.

## ChronoTime Intensity

- `Type`: **Float**, Range: `0.0 - 1.0`

Controls the intensity of the ChronoTime.