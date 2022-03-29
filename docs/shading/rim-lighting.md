---
sidebar_position: 5
title: Rim Lighting
---
import PoiVideo from '@site/src/components/PoiVideo'

# Rim Lighting

![Docusaurus logo](/img/CirclelogoBig.png)

**Rim Lighting** can be used to add a highlight or glow around the edges (or center) of a material. It uses the angle between your view and the normal of the surface to define the intensity of the effect.

Rim Lighting is sometimes referred to in conjunction with or as Fresnel, in reference to the [Fresnel Effect](https://docs.unity3d.com/Manual/StandardShaderFresnel.html).

## Normal Select

Options: `pixel/vertex`

Defines which normal to sample for rim lighting.

In `pixel` mode, the normal is sampled from the per-pixel normal, which can be affected with normal maps.

In `vertex` mode, the normal is sampled from the base normal of the mesh, and will be unaffected by normal maps.

<!-- ![Rim Lighting Normal Select side-by-side]() -->

## Invert Rim Lighting

Inverts the sense of the rim lighting. When unchecked, rim lighting goes from "outside-in" (facing away from viewer has maximum intensity). When checked, rim lighting goes from "inside-out" (facing toward viewer has maximum intensity).

<!-- ![Rim Lighting Invert Off/On]() -->

## Rim Color

Base color of the rim lighting. Blended with the base color and affected by [**Rim Color Brighten**](##Rim-Color-Brighten) and [**Rim Color Bias**](##Rim-Color-Bias).

This color is blended multiplicatively with the [**Rim Texture**](##Rim-Texture), if defined.

This color can be set to a [Theme Color](global-themes.md).

## Rim Width

Range: `0-1`

Controls the width of the rim lighting. Affects how far from the edge (or center) the rim extends.

<!-- ![Rim Lighting Width Variations 0 -> 0.5 -> 1]() -->

## Rim Sharpness

Range: `0-1`

Controls the sharpness of the transition between minimum and maximum rim lighting. At `0`, the rim will be a gradual transition, with the maximum color only present at the very outer edge. As **Rim Sharpness** increases, the maximum color extends further toward the edge (defined by the [**Rim Width**](##Rim-Width)). At `1`, there is a sharp transition between no rim lighting and rim lighting.

<!-- ![Rim Lighting Sharpness 0 -> 0.5 -> 1]() -->

## Rim Emission

Range: `0-20`

Controls the emission value of the rim lighting color. Emission emulates a part of a material that produces light, and adds directly on top of the base color. This value is unaffected by [**Rim Color Brighten**](##Rim-Color-Brighten) and [**Rim Color Bias**](##Rim-Color-Bias).

Total emission values above 1 will generally cause glow in worlds with bloom.

## Rim Color Brighten

Range: `0-1`

Changes how the rim color is blended with the base color. Higher values create a stronger rim color. The closer the rim color is to black, the less effect this option has.

## Rim Color Bias

Range: `0-1`

Changes how much the rim color is blended with the base color. At `1`, the rim lighting has maximum effect. At `0`, the rim color will not be mixed at all with the base color.

## Rim Texture

A texture overlaid on the mesh defining the color of the rim lighting.

When expanded, the Rim Texture has options for **Tiling** and **Offset**. The assigned **UV Map** and the **Panning** of the Rim Texture can be adjusted.

<!-- ![Rim Lighting Texture Example]() -->

## Rim Mask

A texture overlaid on the mesh defining the intensity of the rim lighting at each point. It should generally be black and white, as only its value (specifically the red channel value) will be used, not the color.

When expanded, the Rim Mask texture has options for **Tiling** and **Offset**. The assigned **UV Map** and the **Panning** of the Rim Mask can be adjusted.

<!-- ![Rim Lighting With & Without Mask]() -->

## Hue Shifting

### Shift Speed

Range: `0-1`

Sets the speed at which the rim color's hue value is shifted. At a value of `1`, it will go through a complete cycle of the color wheel once every 20 seconds.

### Hue Shift

Range: `0-1`

A fixed value by which to hue shift the material. At values of `0` and `1`, there will be no change to the material. In between, the hue will shift through the color wheel.
