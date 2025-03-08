---
sidebar_position: 3
title: Anisotropics
description: Anisotropics emulates the rendering of anisotropic fabrics, used as a way to create shiny fabric effects like silk, satin, nylon, and polyester.
keywords: [anisotropics, emulate, fabric, silk, satin, nylon, polyester, shading, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

Anisotropics is a feature that emulates the rendering of anisotropic fabrics. This can be used as a way to create shiny fabric effects such as silk, satin, nylon, and polyester.

While this may look similar to a Silk Shader found in other rendering engines, the options provided can provide a way to make it similar to how it looks in Unity. However, the results may not always be accurate due to the limitations of the Built-In Render Pipeline (BIRP).

## Color & Offset

- `Type`: **Color** Texture (`sRGB = ON`)

Texture Slot that defines the main RGB Color of your Anisotropics. The Alpha channel can be used to define the offset.

## Replace Blending

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to replace the Anisotropic from the Base Color.

## Add Blending

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to add the Anisotropic to the Base Color.

## Hide In Shadow

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to hide the Anisotropic in Shadows.

## Mix Light Color

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to mix the Light Color to the Anisotropic.

## Mix Base Color

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to mix the Base Color to the Anisotropic.

## Global Mask

- `Type`: **Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Option to use a Global Mask for the Anisotropics.

## Top Layer

### Power

- `Type`: **Float**, Range: `0.0 - 1.0`

Amount of power the Top Layer is applied to the Anisotropic.

### Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

How strong the Top Layer apples to the Anisotropic.

### Offset

- `Type`: **Float**, Range: `-10.0 - 10.0`

The offset amount of the Top Layer.

### Map Offset Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

Amount of strength to the offset.

### Tint

- `Type`: **Color**

The Color Tint of the Top Layer.

### Switch Direction

- `Type`: **Boolean**

If enabled, flips the direction of the Top Layer.

### Stylized Mode

- `Type`: **Boolean**

Enables Edge and Blur adjustment sliders for the Top Layer.

<details>
<summary><b>Stylized Mode Options</b></summary>

#### Edge

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to adjust the Edge of the Top Layer.

#### Blur

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to Blur the Edge of the Top Layer.

</details>

## Bottom Layer

### Power

- `Type`: **Float**, Range: `0.0 - 1.0`

Amount of power the Bottom Layer is applied to the Anisotropic.

### Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

How strong the Bottom Layer apples to the Anisotropic.

### Offset

- `Type`: **Float**, Range: `-10.0 - 10.0`

The offset amount of the Bottom Layer.

### Map Offset Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

Amount of strength to the offset.

### Tint

- `Type`: **Color**

The Color Tint of the Bottom Layer.

### Switch Direction

- `Type`: **Boolean**

If enabled, flips the direction of the Bottom Layer.

### Stylized Mode

- `Type`: **Boolean**

Enables Edge and Blur adjustment sliders for the Bottom Layer.

<details>
<summary><b>Stylized Mode Options</b></summary>

#### Edge

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to adjust the Edge of the Bottom Layer.

#### Blur

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to Blur the Edge of the Bottom Layer.

</details>