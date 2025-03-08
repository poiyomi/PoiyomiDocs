---
sidebar_position: 2
title: Post Processing
description: Post Processing provides advanced options for modifying the look of Poiyomi Shaders, in order to create a specific look or to be adjusted at runtime.
keywords: [post, processing, postprocessing, advanced, look, HDR, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

Post Processing provides some advanced options for modifying the look of the shader. These can be used to create a specific look, or adjusted at runtime to match the user's environment.

## Mask

- `Type`: **Data** Texture (sRGB **OFF**)

Mask that defines where to apply the post-processing effects. Black applies no effect, while white applies full effects.

## Hue

- `Type`: **Float**, Range: `0.0 - 1.0`

Global hue adjustment, applied to the final color of the shader.

## Tint

- `Type`: **HDR Color**

Global tint color, applied to the final color of the shader.

## RGB

- `Type`: **Vector3**

RGB vector multiplied with the final color of the shader. This can be thought of as equivalent to a color tint, but applied to the RGB channels.

## Contrast

- `Type`: **Float**

Contrast adjustment, applied to the final color of the shader. Increases the amount of contrast between low and high color values.

## Saturation

- `Type`: **Float**

Saturation adjustment, applied to the final color of the shader. Saturation determines how much color is present in the final color. If set to 0, the final color is grayscale. If set to 1, the final color is the same as the input color. Values greater than 1 increase the amount of color present.

## Brightness

- `Type`: **Float**

Brightness adjustment, applied to the final color of the shader. This represents a multiplier applied to the final color.

## Lightness

- `Type`: **Float**

Lightness adjustment, applied to the final color of the shader. This represents a value directly added to or removed from the final color, harshly affecting the intensity of the final color.

## HDR

- `Type`: **Float**

How much to move the final color towards its HDR equivalent color. This is a very niche feature.

## Posterization

- `Type`: **Boolean**

Enables or disables Posterization. Posterization is a technique that converts the final color to a limited number of colors.

### Steps

- `Type`: **Float**, Range: `1.0 - 30.0`

How many steps to use when using Posterization.
