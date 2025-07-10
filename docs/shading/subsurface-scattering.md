---
sidebar_position: 8
title: Subsurface Scattering
description: Subsurface Scattering is an effect that simulates how light penetrates a translucent surface, such as skin, and exits the surface at a potentially different point.
keywords: [subsurface scattering, subsurface, scattering, light, translucency, skin]
---

Subsurface Scattering is a lighting effect that simulates how light can penetrate a translucent surface and exit at a potentially different point. This allows you to have the effect where thin parts of flesh get tinted red when a light (such as a flashlight) is behind them.

<PoiVideo url='/vid/shading/SubsurfaceScatteringDemo.mp4'/>
<em>Brief demonstration of basic Subsurface Scattering effect using a relatively bright Realtime Light Source.</em>

## Subsurface Color

- `Type`: **Color**

The main color that will be used for the Subsurface Scattering effect.

## Color & Thickness

- `Type`: **Color** Texture (`sRGB = On`)

Texture to use for the Subsurface Color and Thickness Map.

### Packed Maps Slots

#### RGB Color

- `Type`: **Color** Texture (`sRGB = On`)

The RGB Color defines where on the UV to use color to use for Subsurface Scattering. If empty, [Subsurface Color](#subsurface-color) will be used instead.

#### A Thickness

- `Type`: **Color** Texture (`sRGB = On`)

The A Thickness defines where the effect should come out and scatter on surfaces.

## Thickness Mod

- `Type`: **Float**, Range: `-1.0 - 1.0`

Amount to add or subtract to the Thickness modifier of the scattering.

## Light Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

Strength of the scattered light on the surface. Higher values will yield brighter intensity.

## Light Spread

- `Type`: **Float**, Range: `1.0 - 100.0`

How much to spread the light on the surface.

## Light Distortion

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to distort the lighting on the surface.

## Base Color Mix

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to blend the Subsurface Scattering with the Base Color (Main Texture) of your Material.