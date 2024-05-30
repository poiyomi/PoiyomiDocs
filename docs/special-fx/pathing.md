---
sidebar_position: 6
title: Pathing
description: Pathing enables a special effect that follows along a path defined from a gradient. It is used for complex effects, such as an Emission traveling across a Material.
keywords: [pathing, gradient, special effect, special fx, effect, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

Pathing is a powerful and flexible way to create effects that follow along paths defined using gradients. It can be used for complex effects like emissions traveling across a material, or selectively showing an underlying texture based on a defined path.

Options in this section labelled "R/G/B/A" each correspond to a common option with separate values for each different channel of the gradient.

## Gradient Type

- `Type`: **Dropdown**, Options: `Split Channels`/`Merged Channels`

Determines whether to sample the Path Map texture. There are two modes:

- `Split Channels`: Samples the Path Map texture independently for each channel of the gradient. Makes 4 separate paths, with each being able to be independently set up or disabled.
- `Merged Channels`: Samples the Path Map texture as a single channel. This makes each channel use the same extended path, with four times the path levels available, allowing for more precise effects. This mode should generally be created with the help of the Poiyomi Pathing tool.

## Override Alpha

- `Type`: **Checkbox**

If enabled, multiplies the base alpha of the material with the Path's final alpha.

## RGB Path Map

- `Type`: **Data** Texture (sRGB **OFF**)

Defines the gradients for the path. If using `Split Channels` mode, this texture should consist of between 1 and 4 channels of gradient data, with each channel representing a different path. Each channel used will flow between a value of `1` to a value of `255` (in 0-255 range), and should be defined from linear textures. 

When expanded, 4 slots will be visible, one for each path. You can define individual gradient paths for each channel, and press "Confirm Merge" to create a single merged gradient.

If using `Merged Channels` mode, this texture should be the output of the Poiyomi Pathing tool. The 4 channels will be sampled in order, from R -> G -> B -> A.

## Color & Mask

- `Type`: **Color** Texture (sRGB **ON**)

Defines the underlying color for the paths, and a mask for the paths. Both the RGB Color and the Alpha Mask will apply to all paths.

The RGB Color can be used to show textures or colors where the path is active. The Alpha Mask can be used to define where the path is shown, and is very useful for creating clean paths, by creating "wider" paths on the path map, and masking out the edges (which often cause artifacts).

## R/G/B/A Path Types

- `Type`: **Dropdown**, Options: `Fill`/`Path`/`Loop`

Defines the path type for each path channel.

`Fill`: The path will fill the gradient from `0-255`, then restart.
`Path`: The path will follow the gradient from `0-255` and will completely disappear before re-appearing at the beginning.
`Loop`: The path will follow the gradient from `0-255` and will immediately start showing at the beginning while the end disappears.

## R/G/B/A Path Colors

- `Type`: **HDR Color**

Colors for each path channel. This is overlain on the `Color` texture, if defined. Otherwise, the `Color` will be used directly.

The **Alpha** value of these colors determines the strength of the path. Path channels can be disabled by setting their colors' alpha to `0`.

## Path Settings

Each of these settings has 4 slots, one for each path channel. They correspond as such:

- `X` = `R`
- `Y` = `G`
- `Z` = `B`
- `W` = `A`

### Emission Strength

- `Type`: **Float** (4)

How strong the emission of the active part of the path should be.

### Softness

- `Type`: **Float** (4)

How sharp the edges of the active path segment should be. This smooths and softens the appearance of the path.

### Speed

- `Type`: **Float** (4)

How fast the path should move from minimum to maximum along the gradient. A value of `1` will result in a complete path cycle every `20` seconds.

### Length

- `Type`: **Float** (4)

How long the path should be, relative to the gradient. A value of `1` will result in a path that extends across the entire gradient.

## Timing Options

Each of these settings has 4 slots, one for each path channel.

### Manual Timing

- `Type`: **Float** (4)

Determines whether to use manual timing, useful for animating a path in response to avatar parameters.

A value of `-999` will result in automatic timing; any other value will offset in terms of path cycles, looping every `1`.

### Timing Offset

- `Type`: **Float** (4)

How much to offset the time by, in terms of path cycles. This can be used whether automatic or manual timing is active.

### Path Segments

- `Type`: **Float** (4)

How many segments to split the path into. At a value of `0`, this defaults to the texture precision. If set to a value greater than `0`, the path will be split into that many segments - for most paths, this will be `255` by default, so lower values can be used to break up the path into blockier segments.

## Audio Link

For any audio link values with a **Vector2** offset, the **X** represents the value to add when the audio is at minimum (no audio), and the **Y** represents the value to add when the audio is at maximum (full audio).

### Time Offset

- `Type`: **Checkbox**

Time Offset adds an offset to the time based on the audio. This can be used to make the path "bounce" in response to the audio.

#### R/G/B/A Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Band of audio to use for the time offset.

#### R/G/B/A Offset

- `Type`: **Vector2**

How much time offset to apply to the path based on audio.

### Emission Offset

- `Type`: **Checkbox**

Emission Offset adds emission strength to the path based on the audio. This can be used to make the path "glow" in response to the audio.

#### R/G/B/A Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Band of audio to use for the emission offset.

#### R/G/B/A Offset

- `Type`: **Vector2**

How much emission offset to apply to the path based on audio.

### Width Offset

- `Type`: **Checkbox**

Width Offset adds width to the path based on the audio. This can be used to make the path "thicken" in response to the audio.

#### R/G/B/A Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Band of audio to use for the width offset.

#### R/G/B/A Offset

- `Type`: **Vector2**

How much width offset to apply to the path based on audio.

### History

- `Type`: **Checkbox**

History applies a mask on top of the path that corresponds to the history of the audio in the selected channel. This consists of about a second of audio data.

This is often useful when applied to a path that's completely filled, which can be achieved by setting `Softness` to `0`, `Speed` to `0`, and `Length` to `1`.

#### R/G/B/A Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Band to use for history masking.

#### R/G/B/A History

- `Type`: **Checkbox**

Whether to apply history masking to the path.

### Chrono Time

- `Type`: **Checkbox**

Chrono (Chronotensity) Time is a very useful feature for advancing the path based on audio, while maintaining how far the path has already progressed.

#### R/G/B/A Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Band to use for Chrono Time.

#### R/G/B/A Motion Type

- Type: **Dropdown**, Options:

<details>
<summary><b>Chronotensity Options</b></summary>

- Motion Increases as intensity of the band increases
- Above but Smooth
- Motion moves back and forth as a function of intensity
- Above but Smoooth
- Fixed Speed Increase when the band is dark Stationary when light
- Above but Smooooth
- Fixed Speed Increase when the band is dark Fixed speed decrease when light

</details>

Chrontensity mode to use for the chrono time offset.

#### R/G/B/A Speed

- `Type`: **Float**

How much to incorporate the chronotensity adjustment into the path timing. Good starting values are `0.1 - 0.5`.

### Auto Correlator

- `Type`: **Checkbox**

Whether to apply the autocorrelator as a mask along the path. Autocorrelatior roughly corresponds to the intensity of the audio at various frequencies.

#### R/G/B/A Type

- `Type`: **Dropdown**, Options: `Off`/`On`/`Mirrored`

Autocorrelator mode to use for the autocorrelator mask in each channel. `Mirrored` will mirror the autocorrelator mask to the other side of the path.

### R/G/B/A Color Chord Strip

- `Type`: **Checkbox**

Color Chord assigns a color to each segment of the path based on the audio. This can be used to create a unique colorful rainbow effect.
