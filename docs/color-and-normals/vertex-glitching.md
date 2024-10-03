---
sidebar_position: 6
title: Vertex Glitching
description: Distorts the mesh for brief moments to give it a "glitchy" look.
keywords: [vertex, glitching, vertex glitching]
---
import PoiVideo from '@site/src/components/PoiVideo'

Vertex Glitching is a shader effect that distorts the mesh for brief moments to give it a "glitchy" look.

Each Glitch is triggered through a rolling [sine wave](https://mathematicalmysteries.org/sine-wave/), whereas the Interval is the wavelength and the Threshold is the amplitude of the frequency.

<PoiVideo url='/vid/color-and-normals/VertexGlitchingDemo.mp4'/>
<em>Demonstration of the Vertex Glitching shader effect.</em>

## Glitch Interval

- `Type`: **Float**

Sets the wavelength of the glitching effect. Higher values will yield more tighter gaps.

## Glitch Threshold

- `Type`: **Float**, Range: `0.0 - 1.0`

Sets the amplitude of the triggering threshold in the sine wave. Lower values will yield more noticeable glitches.

## Glitch Strength

- `Type`: **Float**, Range: `0.0 - 10.0`

Sets the intensity of the glitching effect.

## Glitch Texture

- `Type`: **Checkbox**

Enables the ability to use a Texture for the glitching effect.

### Glitch Map

- `Type`: **Data** Texture (`sRGB = Off`)

Map to use for the glitching effect. `R` channel is used for Both Directions, `G` channel is used for Right, and `B` channel is used for Left.

### Glitch Density

- `Type`: **Float**, Range: `0.0 - 50.0`

How dense should the glitching occur based on the define Glitch Map.

### Glitch Map Pan Speed

- `Type`: **Float**, Range: `0.0 - 100.0`

How much to pan the Glitch Map for the effect.

## Mirror

- `Type`: **Checkbox**

Enables the ability to choose where the glitching should appear.

### Show in Mirror

- `Type`: **Dropdown**, Options: `Show In Both`/`Show Only in Mirror`/`Don't Show in Mirror`

## Audio Link

- `Type`: **Checkbox**

Enables the ability to use AudioLink to control the Glitching Intensity.

:::info
This section allows control of Vertex Glitching through [AudioLink](/docs/audio-link/audio-link.md). It will only be exposed when AudioLink is activated on the Material.
:::

### Glitch Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`VU Intensity`

Choice of which music band to use when triggering Vertex Glitching.

### Override Glitch Intensity with AudioLink

- `Type`: **Checkbox**

If enabled, will override the [Glitch Strength](#glitch-strength) with the selected music band in AudioLink.