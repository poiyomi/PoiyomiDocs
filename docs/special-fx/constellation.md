---
sidebar_position: 16
title: Constellation
description: Constellation creates a galactic special effect that replicates animated connected stars.
keywords: [constellation, galactic, stars, special effect, special fx]
---

Constellation is a unique special effect that replicates connected stars in an abstract pattern. It is continuously animated and can have a wide variety of different adjustments.

<!-- POIYOMI PRO LABEL -->
<a target="_blank" href="https://www.patreon.com/poiyomi">
<img src="/img/Poiyomi-Pro-Label.png" alt="Pro Feature" width="600px"/>
</a>

## Blend & UV

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Normal`/`Multiply`/`Add`
  - `Type`: <PropertyIcon name="dropdown" />**UV**, Options: `UV0`/`UV1`/`UV2`/`UV3`/`Panosphere`/`World Pos`/`Local Pos`/`Polar UV`/`Distorted UV`/`Matcap`

Sets the Color Blending mode and which UV to draw the Constellations on.

## Color

- `Type`: <PropertyIcon name="dropdown" />**Color**

Sets the Color of the overall Constellation patterns.

## Emission Strength

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 20.0`

Sets the overall Emissive effect of the Constellation.

## Density

- `Type`: <PropertyIcon name="float" />**Float**

Sets how much the Constellation pattern should be tiled across the UV.

## Z Center

- `Type`: <PropertyIcon name="float2" />**Float2**

Sets the target of the starting center of the Constellations. Changes to this value are best visualized with Pan Speed `Z` modifier adjusted as Panning is visualized based on the Z Center.

## Pan Speed

- `Type`: <PropertyIcon name="float3" />**Float3**

Sets the panning speed of the Constellations. `X` is left-right, `Y` is up-down, and `Z` is depth-zoom.

## Offset

- `Type`: <PropertyIcon name="float3" />**Float3**

Sets an offset, mainly for Panning.

## Star Movement

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 0.5`

This value sets the range of how the stars are moved across in constellations as it animates.

If this is set to `0`, the stars will freeze in place and won't move.

## Line Thickness

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Sets how much thickness the constellation lines should appear. Lower values are thin, while higher values are thicker.

## Line Thickness Variation

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

This can determine how much variation the lines should have in terms of thickness throughout the animation.

## Line Brightness

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 2.0`

Sets the base brightness of the lines.

## Star Size

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 20.0`

Sets how small or large each star should appear across the animation. Higher values will yield larger stars.

## Star Brightness

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 2.0`

Sets the base brightness of the stars.

## Twinkle Speed

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 10.0`

As the constellation animates, stars will twinkle in a blinking pattern. This slider will set how fast the stars should "blink" over time.

## Layer Fade

- `Type`: <PropertyIcon name="multislider" />**Multislider**, Range: `0.0 - 1.0`

This sets how the constellation should fade on it's depth distance.

## Mask

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = Off`)

Mask texture that limits where the constellation should only appear in. Black is nothing, while White shows constellations.

## Use Global Mask

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Uses a [Global Mask](/docs/modifiers/global-masks.md) to limit where the constellation should only appear in.

## Write to Global Mask

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

If set, constellations will write onto the selected [Global Mask](/docs/modifiers/global-masks.md) channel.

## Random Colors

- `Type`: <PropertyIcon name="toggle" />**Toggle**

This enables the following Hue Shifting properties, allowing the constellations to cycle through different saturation and values at random intervals.

### Saturation Range

- `Type`: <PropertyIcon name="multislider" />**Multislider**

Sets the range of saturation to apply to the constellations at random intervals.

### Value Range

- `Type`: <PropertyIcon name="multislider" />**Multislider**

Sets the range of value/brightness to apply to the constellations at random intervals.

## Audio Link

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables Audio Link features on Constellation.

:::info
The settings in this section will only be visible when [Audio Link](/docs/audio-link/audio-link.md) is activated on the Material.
:::

### Emission Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which Band to use for the Emission modifier.

### Emission Mod

- `Type`: <PropertyIcon name="float2" />**Float2**

How much the Emission should be added or subtracted in reaction to Audio Link.

### Star Brightness Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which Band to use for the Star Brightness modifier.

### Star Brightness Mod

- `Type`: <PropertyIcon name="float2" />**Float2**

How much the Star Brightness should be added or subtracted in reaction to Audio Link.

### Star Size Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which Band to use for the Star Size modifier.

### Star Size Mod

- `Type`: <PropertyIcon name="float2" />**Float2**

How much the Star Size should be added or subtracted in reaction to Audio Link.

### Line Thickness Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which Band to use for the Line Thickness modifier.

### Line Thickness Mod

- `Type`: <PropertyIcon name="float2" />**Float2**

How much the Line Thickness should be added or subtracted in reaction to Audio Link.

### Line Brightness Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which Band to use for the Line Brightness modifier.

### Line Brightness Mod

- `Type`: <PropertyIcon name="float2" />**Float2**

How much the Line Brightness should be added or subtracted in reaction to Audio Link.

### Twinkle Motion Type

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**

Which speed motion modifier should be applied for the Twinkle Speed modifier.

<details>
<summary><b>Twinkle Motion Type Options</b></summary>

- Motion Increases as intensity of the band increases
- Above but Smooth
- Motion moves back and forth as a function of intensity
- Above but Smoooth
- Fixed Speed Increase when the band is dark Stationary when light
- Above but Smooooth
- Fixed Speed Increase when the band is dark Fixed speed decrease when light

</details>

### Twinkle Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which Band to use for the Twinkle Speed Modifier.

### Twinkle Speed

- `Type`: <PropertyIcon name="float" />**Float**

How much twinkle speed should be added or subtracted in reaction to Audio Link.

### Movement Motion Type

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**

Which movement modifier should be applied for the Movement Speed modifier.

<details>
<summary><b>Movement Motion Type Options</b></summary>

- Motion Increases as intensity of the band increases
- Above but Smooth
- Motion moves back and forth as a function of intensity
- Above but Smoooth
- Fixed Speed Increase when the band is dark Stationary when light
- Above but Smooooth
- Fixed Speed Increase when the band is dark Fixed speed decrease when light

</details>

### Movement Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which Band to use for the Movement Speed Modifier.

### Movement Speed

- `Type`: <PropertyIcon name="float" />**Float**

How much movement speed should be added or subtracted in reaction to Audio Link.
