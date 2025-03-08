---
sidebar_position: 6
title: Rim Lighting
description: Rim Lighting is used to add a highlight or glow around the edges of a Material. It samples from the angle between your POV and the Normal of the surface to define the effect.
keywords: [rim, lighting, rim lighting, highlight, glow, edge, edges, shading, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Rim Lighting

**Rim Lighting** can be used to add a highlight or glow around the edges (or center) of a material. It uses the angle between your view and the normal of the surface to define the intensity of the effect.

Rim Lighting is sometimes referred to in conjunction with or as Fresnel, in reference to the [Fresnel Effect](https://docs.unity3d.com/Manual/StandardShaderFresnel.html).

<a target="_blank" href="/img/shading/RL_Demo.png">
<img src="/img/shading/RL_Demo.png" alt="Rim Lighting Demo"/>
</a>

*Demonstration of 3 different Rim Lighting effects with low sharpness (left), high sharpness (middle), and colored rim lighting (right).*

## Style

- `Type`: **Dropdown**, Options: `Poiyomi`/`UTS2`/`LilToon`

Choose the style of Rim Lighting that you wish to use.

### Poiyomi

Uses the in-house Rim style made exclusively for Poiyomi Shaders.

### UTS2

Uses the Rim style that is known in Unity-Chan Toon Shader 2.

### LilToon

Uses the Rim style that is well known in LilToon Shader.

## Mask & Bias

- `Type`: **Data** Texture (`sRGB: OFF`)

A texture overlaid on the mesh defining the intensity of the rim lighting at each point. It should generally be black and white, as only its value (specifically the red channel value) will be used, not the color.

When expanded, the Rim Mask texture has options for **Tiling** and **Offset**. The assigned **UV Map** and the **Panning** of the Rim Mask can be adjusted.

### Bias Intensity

Bias of the Mask Intensity.

## Color & Blending

<PoiVideo url='/vid/shading/RL_ColorBlending.mp4'/>

*Demonstration of the Rim Lighting Color & Blending options.*

### Rim Texture

- `Type`: **Color** Texture (`sRGB: ON`)

A texture overlaid on the mesh defining the color of the rim lighting.

When expanded, the Rim Texture has options for **Tiling** and **Offset**. The assigned **UV Map** and the **Panning** of the Rim Texture can be adjusted.

### Color

- `Type`: **Color**

The Color of your Rim Lighting. Blended with the base color.

This color is blended multiplicative with the Rim Texture, if defined.

:::info
This will instead be an HDR Color field if using `LilToon` Rim Lighting mode.
:::

### Blend Mode

- `Type`: **Dropdown**, Options: `Add`/`Replace`/`Multiply`/`Mixed`/`Screen`

Choice of how the Rim Lighting will blend with the base texture.

### Blend Alpha

- `Type`: **Float**, Range: `0.0 - 1.0`

Controls the Alpha visibility of the Rim Lighting. `0` is invisible, while `1` is fully visible.

### Mix Base Color

- `Type`: **Float**, Range: `0.0 - 1.0`

Controls how much the Rim Lighting's Color will blend with the Base Color.

### Brightness

- `Type`: **Float**, Range: `0.0 - 10.0`

Controls how bright the Rim Lighting will be overall.

### Emission

- `Type`: **Float**, Range: `0.0 - 20.0`

Controls the emission value of the rim lighting color. Emission emulates a part of a material that produces light, and adds directly on top of the base color.

Total emission values above 1 will generally cause glow in worlds with bloom.

## Shape Controls

<PoiVideo url='/vid/shading/RL_ShapeControls.mp4'/>

*Demonstration of the Rim Lighting Shape Controls.*

### Width

- `Type`: **Float**, Range: `0.0 - 1.0`

Controls the width of the rim lighting. Affects how far from the edge (or center) the rim extends.

### Sharpness

- `Type`: **Float**, Range: `0.0 - 1.0`

Controls the sharpness of the transition between minimum and maximum rim lighting. At `0`, the rim will be a gradual transition, with the maximum color only present at the very outer edge. As **Rim Sharpness** increases, the maximum color extends further toward the edge as defined by the [Rim Width](#width). At `1`, there is a sharp transition between no rim lighting and rim lighting.

### Rim Power

- `Type`: **Float**, Range: `0.0 - 10.0`

Controls how intense the Rim Lighting has an effect.

### Normal Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

Controls how the Rim Lighting will blend with your Normals. A value of `0` ignores your Normals, while a value of `1` will fully blend within your Normals.

### Invert Rim

- `Type`: **Boolean**

Inverts the Rim Lighting direction. When unchecked, rim lighting goes from "outside-in" (facing away from viewer has maximum intensity). When checked, rim lighting goes from "inside-out" (facing toward viewer has maximum intensity).

## Light Direction Mask

- `Type`: **Boolean**

Enables the ability to mask the Rim Lighting to a Lighting Direction Mask, whether that would be Custom or to use the Shadow Map.

### Light Falloff Type

- `Type`: **Dropdown**, Options: `Shadow Map`/`Custom`

Choice of the Light Falloff Map it's going to use as a Mask.

### Invert Shadow Mask

- `Type`: **Boolean**

Inverts the values of the Shadow Mask

### Shadow Mask Strength

Controls the intensity of that Mask.

### Shrink In Shadow

Lowers the size of the Rim Light Width in the Masked area.

## Hue Shift

- `Type:` **Boolean**

Enables the Hue Shift feature in Rim Lighting.

### Color Space

- `Type`: **Dropdown**, Options: `OKLab`/`HSV`

Choice of Color Space to use for the Hue Shift. By default, it will be set to `OKLab`.

Learn about the difference of Color Spaces as documented here in [Color Adjust](/docs/color-and-normals/color-adjust.md#oklab-vs-hsv).

### Select or Shift

- `Type`: **Dropdown**, Options: `Hue Select`/`Hue Shift`
  - Default: `Hue Shift`

This dropdown allows you to select how the Color Adjustment should behave when the Hue Shift is used. By default, this will be set to `Hue Shift`.

<details>
<summary><b>Select or Shift Options</b></summary>

- `Hue Select`: Directly applies the selected Hue as an override to the entire Rim Lighting color.
- `Hue Shift`: Only tints the Rim Lighting based on the lerped value. This is the default behavior.

</details>

### Shift Speed

- `Type`: **Float**

Sets the speed at which the rim color's hue value is shifted. At a value of `1`, it will go through a complete cycle of the color wheel once every 20 seconds.

### Hue Shift

- `Type`: **Float**, Range: `0.0 - 1.0`

A fixed value by which to hue shift the material. At values of `0` and `1`, there will be no change to the material. In between, the hue will shift through the color wheel.

## Alpha & Global Masking

### Apply to Alpha

- `Type`: **Dropdown**, Options: `Off`/`Add`/`Multiply`

Choice to apply the Rim Lighting to the Material Alpha.

### Apply to Alpha Blend

- `Type`: **Float**, Range: `0.0 - 1.0`

Controls how much to Apply the Rim to your Alpha.

### Global Mask

- `Type`: **Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Choose to use a [Global Mask](/docs/modifiers/global-masks.md) to constrain the Rim Lighting to the specified Mask instead. Overrides [Mask & Bias](#mask--bias).

### Apply to Global Mask

- `Type`: **Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Allows you to add the currently set Rim Lighting setup to be applied to an existing Global Mask of your choice.

## AudioLink

:::info
The settings in this section will only be visible when [AudioLink](/docs/audio-link/audio-link.md) is activated on the Material.
:::

<PoiVideo url='/vid/shading/RL_AudioLink.mp4'/>

*Demonstration of the AudioLink Controls on the Bass Band for Rim Lighting.*

### Width Add Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which Band to use for the Width.

#### Width Add

- `Type`: **Vector2**

How much to add to or subtract from the Rim Lighting Width with Audio.

| Modifier | Function |
| --- | --- |
| Min | Amount changed to Rim Width with No Audio in Width Add Band |
| Max | Amount changed to Rim Width with Max Audio in Width Add Band |

### Emission Add Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which Band to use for the Rim Emission.

#### Emission Add

- `Type`: **Vector2**

How much to add to or subtract from the Rim Lighting Emission with Audio.

| Modifier | Function |
| --- | --- |
| Min | Amount changed to Rim Emission with No Audio in Emission Add Band |
| Max | Amount changed to Rim Emission with Max Audio in Emission Add Band |

### Brightness Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which Band to use for the Rim Brightness.

#### Brightness Add

- `Type`: **Vector2**

How much to add to or subtract from the Rim Lighting Brightness with Audio.

| Modifier | Function |
| --- | --- |
| Min | Amount changed to Rim Brightness with No Audio in Brightness Band |
| Max | Amount changed to Rim Brightness with Max Audio in Brightness Band |