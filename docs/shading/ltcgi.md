---
sidebar_position: 15
title: LTCGI
description: Poiyomi Shaders support the use of LTCGI, which provides optimized plug-and-play realtime area lighting solutions for Unity and VRChat.
keywords: [ltcgi, realtime, area, lighting, poiyomi, shader]
---

LTCGI is an optimized plug-and-play realtime area lighting solution using the linearly transformed cosine algorithm for standalone Unity and VRChat. When enabled in Poiyomi Shaders, it can dynamically illuminate your mesh and sample realtime reflections from a World that is actively producing LTCGI.

For more detailed information on this system, [visit the LTCGI Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://ltcgi.dev/).

<PoiVideo url='/vid/shading/ltcgi_demo.mp4'/>  
<em>In this demonstration, the video player is reflecting off of the avatar's eye, and the light is dynamically illuminating the face and the environment from LTCGI.</em>

## Anim Toggle

- `Type`: <PropertyIcon name="toggle" />**Toggle**

<!-- 
EDITORS NOTE: This H2 Header only has this Message Box below. Adding additional words above or below it may make it look repetitive. -BluWizard10
-->

:::tip
Animate this Toggle (checkbox) when creating toggles for LTCGI on this Material. Animating the [Section Header](/docs/general/locking.md#section-header-checkboxes) will not work!
:::

## Diffuse Tint

- `Type`: <PropertyIcon name="color" />**Color**

Color to blend multiplicatively with LTCGI to tint the lighting. Use shades of gray to darken lighting as desired.

## Specular Tint

- `Type`: <PropertyIcon name="color" />**Color**

Color to blend multiplicatively with LTCGI to tint the reflection. Use shades of gray to darken reflections as desired.

## Use Reflection and Specular

- `Type`: <PropertyIcon name="toggle" />**Toggle**
  - Default: `On`

When enabled, will sample the metallicity and smoothness values from [Reflections & Specular](/docs/shading/reflections-and-specular.md) for LTCGI.

:::info
If **Reflections & Specular** module is turned off, the **Metallic** and **Smoothness** sliders will appear below and serve as a fallback.

Those sliders will also appear if you turn off this checkbox.
:::

### Metallic

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Determines how metallic the surface is.

### Smoothness

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Determines how rough or smooth the specular reflections are.

## Use Exposure Occlusion

- `Type`: <PropertyIcon name="toggle" />**Toggle**
  - Default: `Off`

Enables LTCGI to use Exposure Occlusion.