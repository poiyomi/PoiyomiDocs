---
sidebar_position: 2
title: Distortion UV
description: Offsets or warps the UV coordinates of the texture to create the illusion of distortion or other wobbly effects.
keywords: [distortion, uv, fx, shading, poiyomi, shaders]
toc_min_heading_level: 3
toc_max_heading_level: 4
---

Distortion UV refers to a shader technique where the UV coordinates used to sample a texture are offset or warped to create the illusion of distortion or other wobbly effects.

This section houses the global settings for Distortion UV in the material.

## Distortion UV

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables Distortion UV effects on the material. Make sure to select which Texture Slots across the material should use Distortion UV.

### Distorted UV

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `UV0`/`UV1`/`UV2`/`UV3`/`Panosphere`/`World Pos XZ`/`Local Pos`/`Polar UV`

Sets which UV set to use for the distortion effect.

### Mask

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = OFF`)

Masks where the Distortion effect should only appear in.

### Distortion Texture 1

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = OFF`)

Linear texture of the first distortion.

### Distortion Texture 2

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = OFF`)

Linear texture of the second distortion.

### Strength 1

- `Type`: <PropertyIcon name="float" />**Float**

Sets the strength of the Distortion from Texture 1.

### Strength 1

- `Type`: <PropertyIcon name="float" />**Float**

Sets the strength of the Distortion from Texture 2.

### Audio Link

:::info
The settings in this section will only be visible when [Audio Link](/docs/audio-link/audio-link.md) is activated on the Material.
:::

#### Strength 1 Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which Band to use for adjusting Strength 1 when Audio Link is present.

#### Strength 1 Offset Range

- `Type`: <PropertyIcon name="vector2" />**Vector2**

How much to add or subtract from Strength 1 in reaction to the selected Audio Link Band.

| Modifier | Function |
| --- | --- |
| Min | Amount changed to Strength 1 with No Audio in Strength 1 Band |
| Max | Amount changed to Strength 1 with Max Audio in Strength 1 Band |

#### Strength 2 Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which Band to use for adjusting Strength 2 when Audio Link is present.

#### Strength 2 Offset Range

- `Type`: <PropertyIcon name="vector2" />**Vector2**

How much to add or subtract from Strength 2 in reaction to the selected Audio Link Band.

| Modifier | Function |
| --- | --- |
| Min | Amount changed to Strength 2 with No Audio in Strength 2 Band |
| Max | Amount changed to Strength 2 with Max Audio in Strength 2 Band |
