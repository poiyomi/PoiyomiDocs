---
sidebar_position: 4
title: Matcap
description: Matcaps are textures that are mapped to an object based on the relative angle of the view direction and the Material's normal direction.
keywords: [matcap, material capture, angle, normal, direction, relative angle, texture, mapping, poiyomi, shader, iridescence]
---
import PoiVideo from '@site/src/components/PoiVideo'

Matcaps, or "Sphere Textures," are textures that are mapped to an object based on the relative angle of the view direction and the material's normal direction. This means that areas that are pointing up will be mapped to the top center of the matcap texture, areas pointing down and right will be mapped to the bottom right of the texture, and so on.

The word Matcap is a portmanteau of **M**aterial **C**apture. The technique was originally designed as a fast, low-overhead way to approximate the look of specific materials, baking in many details. With modern GPU performance and physically based shading techniques, matcaps are not as necessary for performance as they used to be.

There are a total of 4 Matcap sections (0, 1, 2, 3) available to you, each being independent of each other.

:::info Changes in 9.0
All features from the deprecated **Iridescence** section has been merged into Matcap as the [Gradient](#gradient) UV Mode. This mode functions the same way as Iridescence.
:::

<a>
<img src="/img/shading/PoiMatcapDemo2.png" alt="Poiyomi Matcaps"/>
</a>

*Example of various Matcaps used on two Material Spheres.*

## UV Mode

- `Type`: **Dropdown**, Options: `UTS Style`/`Top Pinch`/`Double Sided`/`Gradient`
  
Defines how to apply the UV to the normals of the model.

### UTS Style

UTS Style maps the texture based on the view normals, with no correction for the angle of view. This results in slightly more distortion in the top and bottom of the texture, but is generally acceptable. In VR, however, moving your head results in a rotation and distortion of the matcap.

### Top Pinch

Top Pinch maps the texture based on the view normals, with a correction for the angle of view. This prevents rotation of the matcap when the head is tilted in VR. This results in a more uniform projection, but has artifacts in the top and bottom of the texture.

### Double Sided

Double Sided uses the object's orientation and the reflection vectors to determine the matcap projection. This results in a consistent, unique matcap effect.

### Gradient

Allows you to configure a radial gradient to be used as your matcap texture. Click the rectangle to the right of the Matcap texture slot to open the gradient editor.

:::tip For Iridescence Users
`Gradient` replicates the effect used in the old Iridescence feature in older versions of Poiyomi Shaders.
:::

## Color

- `Type`: **Color**

Tint color applied to the matcap texture. This color is multiplied with the matcap texture.

## Matcap

- `Type`: **Color** Texture (sRGB **ON**)

Texture used for the matcap. This can be any color texture, but is typically a sphere texture.

<details>
<summary><b>Matcap Slot Options</b></summary>

### UV To Blend

- `Type`: **Dropdown**, Options: `UV0`/`UV1`/`UV2`/`UV3`/`Panosphere`/`World Pos`/`Local Pos`/`Polar UV`/`Distorted UV`

Choice of UV to use for the Matcap.

### Blend UV X

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to blend on the UV's X-axis.

### Blend UV Y

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to blend on the UV's Y-axis.

### Panning

- `Type`: **Vector2**

How much to continuously pan the Matcap on the UV's X-axis and Y-axis.

| Axis | Function |
| --- | --- |
| X | How fast it pans on the X-axis in your UV |
| Y | How fast it pans on the Y-axis in your UV |

### Border

- `Type`: **Float**, Range: `0.0 - 0.5`

How far toward the edge the matcap texture should be applied. At 0.0, it would only project the very center. At 0.5, it would project all the way to the edge. This option defaults to `0.43`.

### Rotation

- `Type`: **Float**, Range: `-1.0 - 1.0`

How much to rotate the Matcap texture.

</details>

## Intensity

- `Type`: **Float**, Range: `0.0 - 5.0`

A scaling factor for the matcap texture. This is useful for making the matcap texture more or less visible, and defaults to `1.0`. Values above `1.0` will make the matcap brighter.

## Emission Strength

- `Type`: **Float**, Range: `0.0 - 20.0`

How much emission to apply to the matcap.

## Base Color Mix

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to blend with the Base Color or Main Texture.

## Light Color Mix

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to blend with the Light color.

## Normal Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to blend with the Normals of your Material.

## Masking

### Mask

- `Type`: **Data** Texture (sRGB **OFF**)

Mask that defines where to apply the Matcap effect. Black indicates where the matcap should not be applied, and white indicates where it should be applied.

### Hide in Shadow

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to hide the matcap effect in shadowed areas of the mesh.

### Circle Mask

- `Type`: **Toggle**

Enables the Circle Mask option for the Matcap, allowing the ability to have smaller matcaps without having them repeat.

<details>
<summary><b>Circle Mask Options</b></summary>

#### Radius

- `Type`: **Float**, Range: `0.0 - 0.5`

Sets the Radius of the Circle Mask.

#### Blur

- `Type`: **Float**, Range: `0.0 - 1.0`

Sets the Blurriness of the Circle Mask's edge.

</details>

### Global Mask

Use a Global Mask to define where to apply the Matcap effect.

## Blending

### Replace

- `Type`: **Float**, Range: `0.0 - 1.0`

Replaces the base color with the matcap. At `1.0`, the base color is completely replaced with the matcap. At `0.0`, the base color is completely unaffected. Values in between will blend the base color with the matcap.

### Multiply

- `Type`: **Float**, Range: `0.0 - 1.0`

Multiplies the base color with the matcap. This generally darkens the base color. Black areas of the matcap will always darken, white areas will not affect the base color, and colored areas will darken if the base color doesn't match the matcap color in that area.

### Add

- `Type`: **Float**, Range: `0.0 - 1.0`

Adds the matcap to the base color. This generally brightens the base color. Black areas will be unaffected, while white areas will brighten. Colors are simply added on top of the base color.

### Mixed

- `Type`: **Float**, Range: `0.0 - 1.0`

Mixes the Matcap to the base color. This generally changes certain areas of the base color by mixing colors together.

### Screen

- `Type`: **Float**, Range: `0.0 - 1.0`

Blends the Matcap with the base color by looking at each channel's color information and multiplies the inverse of the blend and base color. This results in always a lighter color, although areas with black leaves the color unchanged and white will produce white.

This is in a similar way to how various Photo Editing programs does it, such as Photoshop.

### Unlit Add

- `Type`: **Float**, Range: `0.0 - 1.0`

Same as Add, but instead blends an unlit/unshaded version of the Texture.

## Custom Normal Map

- `Type`: **Toggle**

Enables the ability to use a bump Normal Map with your Matcap.

### Normal Map

- `Type`: **Normal Map** Texture (sRGB **OFF**)

Normal map texture to apply when Custom Normal is enabled. 

### Intensity

- `Type`: **Float**, Range: `0.0 - 10.0`

How much to scale the normal map. This option is visible in the Normal Map dropdown.

## Hue Shift

- `Type`: **Toggle**

Enables hue shifting of the matcap texture.

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

- `Hue Select`: Directly applies the selected Hue as an override to the entire Matcap.
- `Hue Shift`: Only tints the Matcap based on the lerped value. This is the default behavior.

</details>

### Shift Speed

- `Type`: **Float**

How much to constantly shift the hue with time. A value of 1 will result in a full hue shift cycle every 20 seconds.

### Hue Shift

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to shift the base color around the hue circle.

This value is circular, and will have the same result at 0 and 1.

## Blur / Smoothness

### Smoothness

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to smooth the Matcap.

### Apply Mask for Smoothness

- `Type`: **Toggle**

Allows you to apply a Mask for your Smoothness value.

### Mask Channel for Smoothness

- `Type`: **Dropdown**, Options: `R`/`G`/`B`/`A`

Which Channel to use for the Smoothness Mask.

## Alpha Options

### Override Alpha

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to override the alpha channel of the base color. At `1.0`, this will fully replace the base alpha with the matcap mask.

### Intensity to Alpha

- `Type`: **Toggle**

Enables a section that allows you to Blend the intensity of your Matcap to the Alpha.

<details>
<summary><b>Intensity to Alpha Options</b></summary>

### Source Blend

- `Type`: **Dropdown**, Options: `Greyscale`/`Max`

Which Source to use when blending to Alpha.

### Blend Type

- `Type`: **Dropdown**, Options: `Add`/`Multiply`

Which Blending style to use for the Alpha.

### Blending

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to Blend the result.

</details>

## AudioLink

- `Type`: **Toggle**

Allows AudioLink to influence the Matcap.

:::info
The settings in this section will only be visible when [AudioLink](/docs/audio-link/audio-link.md) is activated on the Material.
:::

### Alpha Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which band to use to change the Alpha modifier of this Matcap.

### Alpha Mod

- `Type`: **Vector2**

How much to add to or subtract from the Alpha Modifier with Audio.

| Modifier | Function |
| --- | --- |
| Min | Amount changed to Alpha with No Audio in Size Band |
| Max | Amount changed to Alpha with Max Audio in Size Band |

### Emission Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which band to use to change the Emisison modifier of this Matcap.

### Emission Mod

- `Type`: **Vector2**

How much to add to or subtract from the Matcap Emission with Audio.

| Modifier | Function |
| --- | --- |
| Min | Amount changed to Matcap Emission with No Audio in Size Band |
| Max | Amount changed to Matcap Emission with Max Audio in Size Band |

### Intensity Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which band to use to change the Intensity modifier with Audio.

### Intensity Mod

- `Type`: **Vector2**

How much to add to or subtract from the Intensity with Audio.

| Modifier | Function |
| --- | --- |
| Min | Amount changed to Intensity with No Audio in Size Band |
| Max | Amount changed to Intensity with Max Audio in Size Band |