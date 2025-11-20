---
sidebar_position: 6
title: Geometric Particles
description: Poiyomi Geometric Particles is a mesh-based shader that can generate particles from the surface of a mesh.
keywords: [particle, geometric, particles, poiyomi, shader]
---

Poiyomi Pro Particle is a special shader that spawns particles from the surface of the mesh in a way that is similar to a Particle System in Unity, without the need of a Particle System.

To use Poiyomi Pro Particle, select the shader version `.poiyomi/Poiyomi Pro Particle` or `.poiyomi/Poiyomi Pro Two Pass Particle` for the Two Pass version. This exposes the Geometric Particles category with the following options shown below.

<!-- POIYOMI PRO LABEL -->
<a target="_blank" href="https://www.patreon.com/poiyomi">
<img src="/img/Poiyomi-Pro-Label.png" alt="Pro Feature" width="600px"/>
</a>

:::tip Works best with Cutout or Transparent Rendering
Like many Particles, they each spawn with square-shaped planes that contains a texture. Most commonly, those textures have transparent backgrounds.

When using a Texture or Sprite Sheet with a transparent background, change your [Rendering Preset](/docs/general/render-preset.md) to `Cutout` or a preferred transparent preset (if using Alpha transitions) for the best effect.
:::

<ReactVideo src='/vid/extended-features/overkillparticles.webm'/>
<em>This is somewhat a ridiculous demonstration of the Geometric Particles being spawned from the Suit's mesh.</em>

## Random Seed Offset

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

This slider will adjust each offset on where the Particles randomly spawn from.

## Apply to Global Mask

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

When set, this will set whichever target Global Mask to "White" and allow you to filter where the effects are applied in **other** modules.

## MainTex Color Override

- `Type`: <PropertyIcon name="toggle" />**Toggle**
  - `Type`: <PropertyIcon name="color" />**Color**

If set, overrides the Main Texture with the defined Color set.

## Spawning

### Render Base Mesh

- `Type`: <PropertyIcon name="toggle" />**Toggle**

This toggle controls if the Mesh itself should be shown. If turned off, the mesh will be discarded so that only the Particles are shown.

### Particles Per cm<sup>2</sup>

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 4.0`

Sets how many Particles should spawn in each square-Centimeter, the formula being $A = l \times w$

### Spawn Distance

- `Type`: <PropertyIcon name="vector2" />**Vector2** (`Off`/`Ratio`/`Delta`)

Sets the distance of how each Particle will spawn from. `Min` is the minimum spawn distance, while `Max` is the maximum spawn distance (in Centimeters).

### Spawn Mask

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = OFF`)

Mask that isolates where the Particles should only spawn from. By default, the `R` channel is used.

### Vertex Color Mask

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Off`/`Red`/`Green`/`Blue`/`Alpha`

Use a Vertex Color Channel from your mesh as the Spawn Mask.

## Appearance

### Texture

- `Type`: <PropertyIcon name="texture" />**Color** Texture (`sRGB = ON`)

This should be the main texture you wish to use for the Particle's overall appearance.

:::tip Use a texture with Transparency
We recommend using a texture that has a transparent background. For best results, use Cutout or a Transparent [Rendering Preset](/docs/general/render-preset.md) on your Material for your Particles to appear correctly.
:::

### Color

- `Type`: <PropertyIcon name="color" />**Color**

Like your Main Texture's Color property, this will blend the color with the attached Texture above.

### Color Blend Alpha

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Sets how much the Color or Texture is blended overall on the Particle. Typically, this should be left at `1`.

### Color Blend Mode

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Replace`/`Darken`/`Multiply`/`Lighten`/`Screen`/`Subtract`/`Add`/`Overlay`/`Mix`

Sets the blending operator to use with your defined Color or Texture.

### Emission Blend Mode

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Replace`/`Add`

Sets the blending operator to use for the Emission.

### Emission Range

- `Type`: <PropertyIcon name="vector2" />**Vector2**

Sets the range of the Emission of your Particles. `Min` is the lowest amount, while `Max` is the highest amount.

### Alpha Range

- `Type`: <PropertyIcon name="vector2" />**Vector2**

Sets the range of the Alpha of your Particles. This typically works best with a Transparent Rendering Preset.

### Particle Size

- `Type`: <PropertyIcon name="vector2" />**Vector2**

Sets the range of how small or large each Particles should appear. `Min` is the lowest size, while `Max` is the largest size.

### Inherit Mesh Normal

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

This slider will apply your mesh normals to the Particles.

## Motion

### Motion Mode

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Still`/`Outward`/`Ping Pong`

Which animation style to use for the Particle motion. `Still` keeps things stationary, `Outward` animates the Particles to travel outwards from the mesh, and `Ping Pong` will make the Particles travel back and forth from the mesh.

### Cycle Duration (Seconds)

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.1 - 10.0`

### Rotation Speed

- `Type`: <PropertyIcon name="vector2" />**Vector2**

### Travel Distance

- `Type`: <PropertyIcon name="vector2" />**Vector2**
  - Conditional: Requires [Motion Mode](#motion-mode) set to `Outward` or `Ping Pong`

### Noise Texture (RGB)

- `Type`: <PropertyIcon name="texture" />**Color** Texture (`sRGB = ON`)

Sets a Noise Texture to use, which will allow the Particles to follow the specified Noise direction.

### Noise Strength

- `Type`: <PropertyIcon name="vector2" />**Vector2**

Sets the strength of how the above Noise Texture influences the Particles.

### Noise Scroll Speed

- `Type`: <PropertyIcon name="vector2" />**Vector2**

Sets a scrolling speed for how the Noise Texture influences the Particles.

### World Direction (XYZ)

- `Type`: <PropertyIcon name="vector3" />**Vector3**
  - Conditional: Requires [Motion Mode](#motion-mode) set to `Outward` or `Ping Pong`

Sets a direction on where the Particles should travel.

### Direction Strength

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`
  - Conditional: Requires [Motion Mode](#motion-mode) set to `Outward` or `Ping Pong`

Sets how much the Particles should follow the World Direction.

### Align To Travel Direction

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`
  - Conditional: Requires [Motion Mode](#motion-mode) set to `Outward` or `Ping Pong`

Aligns the Particles to the Travel Direction.

### Direction Ramp

- `Type`: <PropertyIcon name="vectorcurve" />**Vector4 Curve**
  - Conditional: Requires [Motion Mode](#motion-mode) set to `Outward` or `Ping Pong`

Curve Graph that will visualize the direction of the Particles as it travels in the specified World Direction.

### Directional Cull

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`
  - Conditional: Requires [Motion Mode](#motion-mode) set to `Outward` or `Ping Pong`

Creates a culling area based on the World Direction of the Particles.

## Over Time

### Size

- `Type`: <PropertyIcon name="vectorcurve" />**Vector4 Curve**

Curve Graph that adjusts how each Particle is sized from the point it was spawned until the end of the animation (de-spawn).

### Alpha

- `Type`: <PropertyIcon name="vectorcurve" />**Vector4 Curve**

Curve Graph that adjusts how each Particle Alpha is adjusted from the point it was spawned until the end of the animation (de-spawn).

### Emission

- `Type`: <PropertyIcon name="vectorcurve" />**Vector4 Curve**

Curve Graph that adjusts how each Particle Emission is added from the point it was spawned until the end of the animation (de-spawn).

### Color

- `Type`: <PropertyIcon name="texture" />**Color Gradient** Texture (`sRGB = ON`)

Gradient Color slot that can determine how the Particles are colored from the point it was spawned until the end of the animation (de-spawn).

## Sprite Sheet

- `Type`: <PropertyIcon name="toggle" />**Toggle**

If enabled, will force the usage of a Sprite Sheet for each Particle. Usage of the Sprite Sheet will go to the Main Appearance's [Texture](#texture) slot.

### Columns

- `Type`: <PropertyIcon name="float" />**Float**

How many Columns should be set for the Sprite Sheet. This is the amount of columns on a single plane grid (left to right) where each Sprite is on.

### Rows

- `Type`: <PropertyIcon name="float" />**Float**

How many Rows should be set for the Sprite Sheet. This is the amount of rows on a single plane grid (top to bottom) where each Sprite is on.

### Frame Selection

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Random`/`Progress Based`/`Time Based`

### FPS

- `Type`: <PropertyIcon name="float" />**Float**
  - Conditional: Requires [Frame Selection](#frame-selection) set to `Time Based`

Sets the amount of Frames per Second of the Sprite Sheet.

### Random Start Frame

- `Type`: <PropertyIcon name="toggle" />**Toggle**
  - Conditional: Requires [Frame Selection](#frame-selection) set to `Time Based`

If enabled, the shader will randomly choose the starting frame of the Sprite Sheet.

### Total Frames (0 = auto)

- `Type`: <PropertyIcon name="float" />**Float**

Total amount of Frames on the Sprite Sheet. Set this to `0` for this to be automatic.

### Frame Inset (texels)

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 2.0`

How many texels of each Frame.

### Frame Bias

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 0.01`

The bias of how each Frame is treated.

## Audio Link

:::info
The settings in this section will only be visible when [Audio Link](/docs/audio-link/audio-link.md) is activated on the Material.
:::

### Gradient Source

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `X (Frequency)`/`Y (Height)`

Determines the source of how the Particles will react with Audio Link.

### Audio Link Type

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Waveform`/`DFT Spectrum`/`Four Band Random`/`Filtered Band`/`Auto Correlator`/`Bass`/`Low Mid`/`High Mid`/`Treble`

There are different types of Audio Link styles that can be used with the Particles. This involves a Waveform, DFT Spectrum, Auto Correlator, as well as the four bands from Audio Link itself.

### Height Scale

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 10.0`

Sets the scale of the Audio Link Particles with the Gradient Source.

### Emission

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables Emission effects using Audio Link with the following properties below.

#### Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which Band to use for the Emission effects on the Particles using Audio Link.

#### Add Ramp

- `Type`: <PropertyIcon name="vectorcurve" />**Vector4 Curve**

Curve Graph that adjusts the addition and/or subtraction of the Emission from Audio Link.

### Size

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables Size manipulation of the Particles using Audio Link with the following properties below.

#### Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which Band to use for the Size manipulation of the Particles from Audio Link.

#### Add Ramp

- `Type`: <PropertyIcon name="vectorcurve" />**Vector4 Curve**

Curve Graph that adjusts the sizing of the Particles in reaction to Audio Link.

### Rotation Speed

- `Type`: <PropertyIcon name="toggle" />**Toggle**

If enabled, enables Chrono Rotation of the Particles in reaction to Audio Link.

#### Chrono Rotation Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which band to use for the Chrono Rotation Audio Link.

#### Chrono Motion Type

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Motion increases as intensity of band increases`/`Above but Smooth`/`Motion moves back and forth as a function of intensity`/`Fixed speed increase when the band is dark Stationary when light`/`Fixed speed increase when the band is dark Fixed speed decrease when light`

Sets which motion type to use for the rotation of the Particles in reaction to the Audio Link chrono band. These options are pretty self-explanatory.

#### Chrono Rotation Speed

- `Type`: <PropertyIcon name="float" />**Float**

Sets the speed of the Particles Chrono Rotation in reaction to Audio Link, influenced by the settings above.

### Noise Strength

- `Type`: <PropertyIcon name="toggle" />**Toggle**

If enabled, the defined [Noise Texture](#noise-texture-rgb) Strength can be influenced in reaction to Audio Link.

#### Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which band to use to influence the Noise Strength in reaction to Audio Link.

#### Multiplier Ramp

- `Type`: <PropertyIcon name="vectorcurve" />**Vector4 Curve**

Curve Ramp that adjusts the multiplication of the Noise Strength in reaction to Audio Link.

### Alpha

- `Type`: <PropertyIcon name="toggle" />**Toggle**

If enabled, adjusts the Alpha of the Particles in reaction to Audio Link.

#### Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which band to use to influence the Alpha in reaction to Audio Link.

#### Add Ramp

- `Type`: <PropertyIcon name="vectorcurve" />**Vector4 Curve**

Curve Ramp that adjusts how much Alpha is added in reaction to Audio Link.

## UV Mod

### Particle Pos UV Source

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `UV0`/`UV1`/`UV2`/`UV3`

This will set the source of which UV from your mesh to use when positioning each Particle as they spawn.

### Apply to UV Destination

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Off`/`UV0`/`UV1`/`UV2`/`UV3`

If set, will apply the UV modifier to the destination UV of your mesh.

## Spawn Reduction

### Spawn Distances

- `Type`: <PropertyIcon name="vector2" />**Vector2**

This controls how each Particle is spawned based on how distant the Camera is from the mesh.

### Spawn Multiplier

- `Type`: <PropertyIcon name="vector2" />**Vector2**

Sets the multiplier of how they are spawned.
