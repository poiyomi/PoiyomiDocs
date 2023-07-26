---
sidebar_position: 11
title: LTCGI
---
import PoiVideo from '@site/src/components/PoiVideo'

:::info
LTCGI is an optimized plug-and-play realtime area light solution using the linearly transformed cosine algorithm for standalone Unity and VRChat. For more information on LTCGI visit https://ltcgi.dev/
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

## Use R&S's Smoothness

- `Type`: **Checkbox**

When enabled, will sample smoothness and metallicity values defined in [Reflections & Specular](./reflections-and-specular.md)

## Smoothness

- `Type`: **Float**, Range: `0.0 - 1.0`

Determines how rough or smooth the specular reflections are.