---
sidebar_position: 7
title: Pathing
description: Pathing enables a special effect that follows along a path defined from a gradient. It is used for complex effects, such as an Emission traveling across a Material.
keywords: [pathing, gradient, special effect, special fx, effect, poiyomi, shader]
---

Pathing is a powerful and flexible way to create effects that follow along paths defined using gradients. It can be used for complex effects like emissions traveling across a material, or selectively showing an underlying texture based on a defined path.

:::info Documentation Info
Options in this section will be labeled as **"R/G/B/A"**, each corresponding to a common option with separate values for each different channel of the gradient.

For example, "`R Path Type`" will be documented here as "`R/G/B/A Path Type`" instead.
:::

<PoiVideo url='/vid/special-fx/4paths.mp4' width='300px'/>
<em>Example of Paths used on the lines of this Jacket. Notice the timing of each Path as they animate.</em>

## Path Source

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Tex Gradient`/`UV Gradient`

Choice of what Path Gradient should be used.

- `Tex Gradient`: Uses a Texture to fetch the Gradient.
- `UV Gradient`: Fetches the gradient from the UV of the mesh.

## Blend Mode

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Replace`/`Add`/`Multiply`

Choice of blending operator to use for the Pathing gradient.

## Gradient Type

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Split Channels`/`Merged Channels`

Determines whether to sample the Path Map texture. There are two modes:

- `Split Channels`: Samples the Path Map texture independently for each channel of the gradient. Makes 4 separate paths, with each being able to be independently set up or disabled.
- `Merged Channels`: Samples the Path Map texture as a single channel. This makes each channel use the same extended path, with four times the path levels available, allowing for more precise effects. This mode should generally be created with the help of the Poiyomi Pathing tool.

:::info
The Gradient Type setting is only visible with [Path Source](#path-source) set to `Tex Gradient`.
:::

## UV

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `UV0`/`UV1`/`UV2`/`UV3`/`Panosphere`/`World Pos`/`Local Pos`/`Polar UV`/`Distorted UV`

Determines which UV to sample the Path Map from.

:::info
The UV setting is only visible with [Path Source](#path-source) set to `UV Gradient`.
:::

## Point Sampling

- `Type`: <PropertyIcon name="toggle" />**Toggle**

If enabled, will sample the Path from points.

## Override Alpha

- `Type`: <PropertyIcon name="toggle" />**Toggle**

If enabled, multiplies the base alpha of the material with the Path's final alpha.

## RGBA Path Gradient / Mask

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = Off`)

Defines the gradients for the path. If using `Split Channels` mode, this texture should consist of between 1 and 4 channels of gradient data, with each channel representing a different path. Each channel used will flow between a value of `1` to a value of `255` (in 0-255 range), and should be defined from linear textures. 

When expanded, 4 slots will be visible, one for each path. This is an integrated [Thry Texture Packer](/docs/thryeditor/enduser.md#texture-packer), which you can use to define gradient paths for each channel.

If using `Merged Channels` mode, this texture should be the output of the Poiyomi Pathing tool. The 4 channels will be sampled in order, from `R -> G -> B -> A`.

## Color & Mask

- `Type`: <PropertyIcon name="color" />**Color** Texture (`sRGB = On`)

Defines the underlying color for the paths, and a mask for the paths. Both the RGB Color and the Alpha Mask will apply to all paths.

The RGB Color can be used to show textures or colors where the path is active. The Alpha Mask can be used to define where the path is shown, and is very useful for creating clean paths, by creating "wider" paths on the path map, and masking out the edges (which often cause artifacts).

## Path Types

### R/G/B/A Path Type

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Fill`/`Path`/`Loop`/`Dashed`/`Off`

Defines the path type for each path channel.

<details>
<summary><b>R/G/B/A Path Type Options</b></summary>

- `Fill`: The path will fill the gradient from `0-255`, then restart.
- `Path`: The path will follow the gradient from `0-255` and will completely disappear before re-appearing at the beginning.
- `Loop`: The path will follow the gradient from `0-255` and will immediately start showing at the beginning while the end disappears.
- `Dashed`: The path will follow the gradient from `0-255` and will continue to fire every Gap specified.
- `Off`: The path will be disabled.

</details>

## Path Colors

### R/G/B/A Color

- `Type`: <PropertyIcon name="hdrcolor" />**HDR Color**

Colors for each path channel. This is overlain on the `Color` texture, if defined. Otherwise, the `Color` will be used directly.

The **Alpha** value of these colors determines the strength of the path. Path channels can be disabled by setting their colors' alpha to `0`.

## Path Source Directions

### R/G/B/A Direction

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `UV X Axis`/`UV Y Axis`

Choice of which direction the Path should travel on the UV's axis. X is left to right, and Y is bottom to top.

:::info
Path Source Directions will only appear when [Path Source](#path-source) is set to `UV Gradient`.
:::

## Path Appearance

Each of these settings below has 4 fields, one for each path channel. They are labeled accordingly as `R`, `G`, `B`, and `A`, referring to their respective channels.

### Emission Strength

- `Type`: <PropertyIcon name="float4" />**Float4**

How strong the emission of the active part of the path should be.

### Softness

- `Type`: <PropertyIcon name="float4" />**Float4**

How sharp the edges of the active path segment should be. This smooths and softens the appearance of the path.

### Speed

- `Type`: <PropertyIcon name="float4" />**Float4**

How fast the path should move from minimum to maximum along the gradient. A value of `1` will result in a complete path cycle every `20` seconds.

### Length

- `Type`: <PropertyIcon name="float4" />**Float4**

How long the path should be, relative to the gradient. A value of `1` will result in a path that extends across the entire gradient.

### Gap Length

- `Type`: <PropertyIcon name="float4" />**Float4**

Determines the Gap in between each Path fired when [R/G/B/A Path Type](#rgba-path-type) is set to `Dashed`.

:::info
This option is only visible when any [R/G/B/A Path Type](#rgba-path-type) is set to `Dashed`.
:::

## Timing Options

Each of these settings has 4 fields, one for each path channel.

### Manual Timing

- `Type`: <PropertyIcon name="float4" />**Float4**

Determines whether to use manual timing, useful for animating a path in response to avatar parameters.

A value of `-999` will result in automatic timing; any other value will offset in terms of path cycles, looping every `1`.

### Timing Offset

- `Type`: <PropertyIcon name="float4" />**Float4**

How much to offset the time by, in terms of path cycles. This can be used whether automatic or manual timing is active.

### Path Segments

- `Type`: <PropertyIcon name="float4" />**Float4**

How many segments to split the path into. At a value of `0`, this defaults to the texture precision. If set to a value greater than `0`, the path will be split into that many segments - for most paths, this will be `255` by default, so lower values can be used to break up the path into blockier segments.

## Path Remapping

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables Path Remapping, allowing the ability to change the entire range of the Path to a clamped range instead. This is especially useful when using `UV Gradient` as the [Path Source](#path-source).

### R/G/B/A Range

- `Type`: <PropertyIcon name="multislider" />**Multislider**, Range: `0.0 - 1.0`

Adjusts the mapping range of the specified Path.

## Audio Link

:::info
The settings in this section will only be visible when [Audio Link](/docs/audio-link/audio-link.md) is activated on the Material.
:::

For any audio link values with a **Vector2** offset, the **X** represents the value to add when the audio is at minimum (no audio), and the **Y** represents the value to add when the audio is at maximum (full audio).

### Time Offset

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Time Offset adds an offset to the time based on the audio. This can be used to make the path "bounce" in response to the audio.

#### R/G/B/A Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Band of audio to use for the time offset.

#### R/G/B/A Offset

- `Type`: <PropertyIcon name="float2" />**Vector2**

How much time offset to apply to the path based on audio.

### Emission Offset

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Emission Offset adds emission strength to the path based on the audio. This can be used to make the path "glow" in response to the audio.

#### R/G/B/A Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Band of audio to use for the emission offset.

#### R/G/B/A Offset

- `Type`: <PropertyIcon name="float2" />**Vector2**

How much emission offset to apply to the path based on audio.

### Width Offset

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Width Offset adds width to the path based on the audio. This can be used to make the path "thicken" in response to the audio.

#### R/G/B/A Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Band of audio to use for the width offset.

#### R/G/B/A Offset

- `Type`: <PropertyIcon name="float2" />**Vector2**

How much width offset to apply to the path based on audio.

### History

- `Type`: <PropertyIcon name="toggle" />**Toggle**

History applies a mask on top of the path that corresponds to the history of the audio in the selected channel. This consists of about a second of audio data.

This is often useful when applied to a path that's completely filled, which can be achieved by setting `Softness` to `0`, `Speed` to `0`, and `Length` to `1`.

#### History Mode

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Mask`/`Override`

Sets the History pattern mode.

#### R/G/B/A History

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Whether to apply history masking to the path.

#### R/G/B/A Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Band to use for history masking.

#### R/G/B/A Range

- `Type`: <PropertyIcon name="multislider" />**Multislider**, Range: `0.0 - 1.0`

Sets the range of the history masking in the path.

### Chrono Time

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Chrono (Chronotensity) Time is a very useful feature for advancing the path based on audio, while maintaining how far the path has already progressed.

#### R/G/B/A Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Band to use for Chrono Time.

#### R/G/B/A Motion Type

- Type: <PropertyIcon name="dropdown" />**Dropdown**

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

- `Type`: <PropertyIcon name="float" />**Float**

How much to incorporate the chronotensity adjustment into the path timing. Good starting values are `0.1 - 0.5`.

### Auto Correlator

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Whether to apply the autocorrelator as a mask along the path. Autocorrelatior roughly corresponds to the intensity of the audio at various frequencies.

#### Autocorrelator Mode

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Mask`/`Override`

Sets the autocorrelator mode.

#### R/G/B/A Type

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Off`/`On`/`Mirrored`

Autocorrelator mode to use for the autocorrelator mask in each channel. `Mirrored` will mirror the autocorrelator mask to the other side of the path.

### Color Chord

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables Color Chord Strip mode for the Path.

#### R/G/B/A Color Chord Strip

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Color Chord assigns a color to each segment of the path based on the audio. This can be used to create a unique colorful rainbow effect.
