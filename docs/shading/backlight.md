---
sidebar_position: 13
title: Backlight
description: Backlight expresses lighting from behind a character or model, which can look similar to how Japanese-style illustrations are drawn.
keywords: [backlight, back, light, shading, lighting, liltoon, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

Backlight is a shading feature that is used to express lighting from *behind* a character or model, which can look similar to how Japanese-style illustrations are drawn.

While it may seem similar to some form of Rim Lighting, it's instead rendered quite differently. Lights can receive shadows and follow the light source, which can be effective when the light hits from behind. This feature behaves in a similar fashion to LilToon's Backlighting.

## Color

- `Type`: **HDR Color**

Color of the light background.

## Texture

- `Type`: **Color** Texture (`sRGB: ON`)

Texture that can be used as the Color of the Backlight.

## Main Color Blend

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to blend the color of the Backlight with the Base Color.

## Normal Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to blend the lighting with the Normals on your Model or Material.

## Border

- `Type`: **Float**, Range: `0.0 - 1.0`

The range of light that can be used with the Backlight.

## Blur

- `Type`: **Float**, Range: `0.0 - 1.0`

The amount of blur on the Backlight.

## Directivity

- `Type`: **Float**

Determines the amount of brightness *in degrees* that change according to the direction of the light source.

## View Direction Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

The *degree* to which the brightness is changed according to the direction of light.

## Receive Shadow

- `Type`: **Checkbox**

If enabled, receive Shadows from other objects.

## Backface Mask

- `Type`: **Checkbox**

Enables/Disables the visibility of the backlight's light on the backface.