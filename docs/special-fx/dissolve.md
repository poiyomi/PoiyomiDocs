---
sidebar_position: 2
title: Dissolve
---
import PoiVideo from '@site/src/components/PoiVideo'

# Dissolve

![Docusaurus logo](/img/CirclelogoBig.png)

The Dissolve module provides an aesthetically pleasing tool for transitioning between a base appearance and a modified appearance. It can be used to transition from one base texture to another, or from the base color to a transparent appearance.

## Dissolve Type

Options: `Basic/Point2Point`

Defines the mode dissolve is operating in. In `Basic`, the 0-1 value of the [**Dissolve Gradient**](##Dissolve-Gradient) texture is used to define the scale from 0 to 1. In `Point2Point`, the pixel's position is used to define the scale.

## Edge Width

Range: `0-0.5`

Defines the range over which the edge effects apply. The larger this is, the more area the edge will cover during the dissolve. Combines with [**Dissolve Noise**](##Dissolve-Noise) and its associated [**Dissolve Detail Strength**](##Dissolve-Detail-Strength) to produce the final edge.

<!-- ![Dissolve Edge Width 0 -> 0.25 -> 0.5]() -->

## Edge Hardness

Range: `0-1`

Defines how sharply to transition from no edge to edge. At `0`, the material will  smoothly [lerp](https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-lerp) between the base color and the edge. At `1`, the material will sharply transition between the base color and the edge color.

## Edge Color

Defines the color used for the edge. Blended multiplicatively with the [**Edge Gradient**](##Edge-Gradient).

This color can be set to a [Theme Color](docs/color-and-normals/global-themes.md).

## Edge Gradient

Defines a gradient used for the edge color. Will apply across the range of the edge.

## Edge Emission

Range: `0-20`

Defines how much

## Dissolved Color

Description

## Dissolved Texture

Description

## Dissolved Emission Strength

Description

## Dissolve Gradient

Description

## Dissolve Noise

Description

## Dissolve Detail Strength

Description

## Dissolve Alpha

Description

## Dissolve Mask

Description

## VertexColor.g Mask

Description

## Continuous Dissolve Speed

Description

## Hue Shift

Description

## Dissolved Speed

Description

## Dissolved Shift

Description

## Edge Enabled

Description

## Edge Speed

Description

## Edge Shift

Description

## Locked In Anim Sliders

Description
