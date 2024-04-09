---
sidebar_position: 5
title: Rim Lighting
---
import PoiVideo from '@site/src/components/PoiVideo'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<!--
# Rim Lighting

**Rim Lighting** can be used to add a highlight or glow around the edges (or center) of a material. It uses the angle between your view and the normal of the surface to define the intensity of the effect.

Rim Lighting is sometimes referred to in conjunction with or as Fresnel, in reference to the [Fresnel Effect](https://docs.unity3d.com/Manual/StandardShaderFresnel.html).

## Normal Select

Options: `vertex/pixel`

Defines which normal to sample for rim lighting.

In `vertex` mode, the normal is sampled from the base normal of the mesh, and will be unaffected by normal maps.

In `pixel` mode, the normal is sampled from the per-pixel normal, which is affected by normal maps.

![Rim Lighting Normal Select](/img/shading/Rim-Lighting_Normal-Select.png)

*Rim Lighting Normal Select: Vertex/Pixel*

## Invert Rim Lighting

Inverts the sense of the rim lighting. When unchecked, rim lighting goes from "outside-in" (facing away from viewer has maximum intensity). When checked, rim lighting goes from "inside-out" (facing toward viewer has maximum intensity).

![Rim Lighting Invert](/img/shading/Rim-Lighting_Invert.png)

*Rim Lighting Invert: Off/On*

## Rim Color

Base color of the rim lighting. Blended with the base color and affected by [**Rim Color Brighten**](##Rim-Color-Brighten) and [**Rim Color Bias**](##Rim-Color-Bias).

This color is blended multiplicatively with the [**Rim Texture**](##Rim-Texture), if defined.

This color can be set to a [Theme Color](docs/color-and-normals/global-themes.md).

## Rim Width

Range: `0-1`

Controls the width of the rim lighting. Affects how far from the edge (or center) the rim extends.

![Rim Lighting Width](/img/shading/Rim-Lighting_Width.png)

*Rim Lighting Width: 0.2 / 0.4 / 0.6 / 0.8 / 1.0*

## Rim Sharpness

Range: `0-1`

Controls the sharpness of the transition between minimum and maximum rim lighting. At `0`, the rim will be a gradual transition, with the maximum color only present at the very outer edge. As **Rim Sharpness** increases, the maximum color extends further toward the edge (defined by the [**Rim Width**](##Rim-Width)). At `1`, there is a sharp transition between no rim lighting and rim lighting.

![Rim Lighting Sharpness](/img/shading/Rim-Lighting_Sharpness.png)

*Rim Lighting Sharpness: 0 / 0.25 / 0.5 / 0.75 / 1.0*

## Rim Emission

Range: `0-20`

Controls the emission value of the rim lighting color. Emission emulates a part of a material that produces light, and adds directly on top of the base color. This value is unaffected by [**Rim Color Brighten**](##Rim-Color-Brighten) and [**Rim Color Bias**](##Rim-Color-Bias).

Total emission values above 1 will generally cause glow in worlds with bloom.

![Rim Lighting Emission](/img/shading/Rim-Lighting_Emission.png)

*Rim Lighting Emission: 0 / 0.5 / 1 / 2 / 5*

## Rim Color Brighten

Range: `0-1`

Controls how the rim color is blended with the base color. Higher values create a stronger rim color. The closer the rim color is to black, the less effect this option has.

![Rim Color Brighten](/img/shading/Rim-Lighting_Brighten.png)

*Rim Color Brighten: 0 / 1 / 2 / 3*

## Rim Color Bias

Range: `0-1`

Controls how much the rim color is blended with the base color. At `1`, the rim lighting has maximum effect. At `0`, the rim color will not be mixed at all with the base color.

![Rim Color Bias](/img/shading/Rim-Lighting_Bias.png)

*Rim Color Bias: 0 / 0.5 / 1*

## Rim Texture

A texture overlaid on the mesh defining the color of the rim lighting.

When expanded, the Rim Texture has options for **Tiling** and **Offset**. The assigned **UV Map** and the **Panning** of the Rim Texture can be adjusted.

![Rim Texture](/img/shading/Rim-Lighting_Texture.png)

*Rim Texture Off/On using a rainbow texture*

## Rim Mask

A texture overlaid on the mesh defining the intensity of the rim lighting at each point. It should generally be black and white, as only its value (specifically the red channel value) will be used, not the color.

When expanded, the Rim Mask texture has options for **Tiling** and **Offset**. The assigned **UV Map** and the **Panning** of the Rim Mask can be adjusted.

![Rim Mask](/img/shading/Rim-Lighting_Mask.png)

*Rim Mask On/Off using a noise texture*

## Hue Shifting

### Shift Speed

Range: `0-1`

Sets the speed at which the rim color's hue value is shifted. At a value of `1`, it will go through a complete cycle of the color wheel once every 20 seconds.

### Hue Shift

Range: `0-1`

A fixed value by which to hue shift the material. At values of `0` and `1`, there will be no change to the material. In between, the hue will shift through the color wheel.

-->

# Rim Lighting

**Rim Lighting** can be used to add a highlight or glow around the edges (or center) of a material. It uses the angle between your view and the normal of the surface to define the intensity of the effect.

Rim Lighting is sometimes referred to in conjunction with or as Fresnel, in reference to the [Fresnel Effect](https://docs.unity3d.com/Manual/StandardShaderFresnel.html).

## Style

- `Type`: **Dropdown**, Options: `Poiyomi`/`UTS2`/`LilToon`

Choose the style of Rim Lighting that you wish to use.

<Tabs>

<TabItem value="poiyomi" label="Poiyomi" default>

### Poiyomi

</TabItem>

<TabItem value="uts2" label="UTS2">

### UTS2

</TabItem>

<TabItem value="liltoon" label="LilToon">

### LilToon

</TabItem>

</Tabs>

## Mask & Bias

- `Type`: **Data** Texture (`sRGB: OFF`)

A texture overlaid on the mesh defining the intensity of the rim lighting at each point. It should generally be black and white, as only its value (specifically the red channel value) will be used, not the color.

When expanded, the Rim Mask texture has options for **Tiling** and **Offset**. The assigned **UV Map** and the **Panning** of the Rim Mask can be adjusted.

![Rim Mask](/img/shading/Rim-Lighting_Mask.png)

*Rim Mask On/Off using a Noise texture.*

### Bias Intensity

Bias of the Mask Intensity.

## Color & Blending

### Rim Texture

- `Type`: **Data** Texture (`sRGB: ON`)

A texture overlaid on the mesh defining the color of the rim lighting.

When expanded, the Rim Texture has options for **Tiling** and **Offset**. The assigned **UV Map** and the **Panning** of the Rim Texture can be adjusted.

![Rim Texture](/img/shading/Rim-Lighting_Texture.png)

*Rim Texture Off/On using a rainbow texture.*

### Color

- `Type`: **Color**

The Color of your Rim Lighting. Blended with the base color.

This color is blended multiplicatively with the Rim Texture, if defined.

### Blend Mode

### Blend Alpha

### Mix Base Color

### Brightness

### Emission

- `Type`: **Float**, Range: `0.0 - 20.0`

Controls the emission value of the rim lighting color. Emission emulates a part of a material that produces light, and adds directly on top of the base color.

Total emission values above 1 will generally cause glow in worlds with bloom.

![Rim Lighting Emission](/img/shading/Rim-Lighting_Emission.png)

*Rim Lighting Emission: 0 / 0.5 / 1 / 2 / 5*

## Shape Controls

### Width

- `Type`: **Float**, Range: `0.0 - 1.0`

Controls the width of the rim lighting. Affects how far from the edge (or center) the rim extends.

![Rim Lighting Width](/img/shading/Rim-Lighting_Width.png)

*Rim Lighting Width: 0.2 / 0.4 / 0.6 / 0.8 / 1.0*

### Sharpness

- `Type`: **Float**, Range: `0.0 - 1.0`

Controls the sharpness of the transition between minimum and maximum rim lighting. At `0`, the rim will be a gradual transition, with the maximum color only present at the very outer edge. As **Rim Sharpness** increases, the maximum color extends further toward the edge (defined by the [**Rim Width**](##Rim-Width)). At `1`, there is a sharp transition between no rim lighting and rim lighting.

![Rim Lighting Sharpness](/img/shading/Rim-Lighting_Sharpness.png)

*Rim Lighting Sharpness: 0 / 0.25 / 0.5 / 0.75 / 1.0*

### Rim Power

### Normal Strength

### Invert Rim

- `Type`: **Checkbox**

Inverts the sense of the rim lighting. When unchecked, rim lighting goes from "outside-in" (facing away from viewer has maximum intensity). When checked, rim lighting goes from "inside-out" (facing toward viewer has maximum intensity).

![Rim Lighting Invert](/img/shading/Rim-Lighting_Invert.png)

Inverted Rim Lighting: Off/On

## Light Direction Mask

### Light Falloff Type

### Invert Shadow Mask

### Shadow Mask Strength

### Shrink In Shadow

## Hue Shift

### Shift Speed

- `Type`: **Float**

Sets the speed at which the rim color's hue value is shifted. At a value of `1`, it will go through a complete cycle of the color wheel once every 20 seconds.

### Hue Shift

- `Type`: **Float**, Range: `0.0 - 1.0`

A fixed value by which to hue shift the material. At values of `0` and `1`, there will be no change to the material. In between, the hue will shift through the color wheel.

## Alpha & Global Masking

### Apply to Alpha

### Apply to Alplha Blend

### Global Mask

### Apply to Global Mask

## AudioLink

:::info
This section allows control of the Rim Lighting through [AudioLink](../audio-link/audio-link.md). It will only be exposed when AudioLink is activated on the Material.
:::

### Width Add Band

#### Width Add

### Emission Add Band

#### Emission Add

### Brightness Band

#### Brightness Add