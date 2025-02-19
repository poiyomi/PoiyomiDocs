---
sidebar_position: 15
title: LTCGI
description: Poiyomi Shaders support the use of LTCGI, which provides optimized plug-and-play realtime area lighting solutions for Unity and VRChat.
keywords: [ltcgi, realtime, area, lighting, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

LTCGI is an optimized plug-and-play realtime area light solution using the linearly transformed cosine algorithm for standalone Unity and VRChat. For more information on LTCGI visit https://ltcgi.dev/

:::warning Future Rework
The LTCGI feature in Poiyomi Shaders is being reworked in a future version of Poiyomi Shaders. Everything here is subject to change at any time.
:::

<PoiVideo url='/vid/shading/ltcgi_demo.mp4'/>  
<em>In this demonstration, the video player reflecting off of the avatar's eye, and the light dynamically illuminating the face and environment are produced by LTCGI.</em>

## Anim Toggle

- `Type`: **Checkbox**

A checkbox you can animate to enable/disable LTCGI lighting and reflections.

## Diffuse Tint

- `Type`: **Color** (RGBA)

This color will be blended multiplicatively with LTCGI to tint the lighting. Use shades of gray to darken lighting as desired.

## Specular Tint

- `Type`: **Color** (RGBA)

This color will be blended multiplicatively with LTCGI to tint the reflection. Use shades of gray to darken reflections as desired.

## Use Reflection and Specular

- `Type`: **Checkbox**

When enabled, will sample the metallicity and smoothness values from [Reflections & Specular](/docs/shading/reflections-and-specular.md) for LTCGI.

:::info
If **Reflections & Specular** module is turned off, the sliders below will appear and serve as a fallback.

These sliders will also appear if you turn off this checkbox.
:::

## Metallic

- `Type`: **Float**, Range: `0.0 - 1.0`

Determines how metallic the surface is.

## Smoothness

- `Type`: **Float**, Range: `0.0 - 1.0`

Determines how rough or smooth the specular reflections are.