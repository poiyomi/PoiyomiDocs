---
sidebar_position: 11
title: LTCGI
---
import PoiVideo from '@site/src/components/PoiVideo'

:::info
LTCGI is an optimized plug-and-play realtime area light solution using the linearly transformed cosine algorithm for standalone Unity and VRChat. For more information on LTCGI visit https://ltcgi.dev/
:::
:::tip
**This is a patreon-only feature!** Subscribe to the [Patreon](https://www.patreon.com/poiyomi) at the $10 tier or higher to unlock it.
:::

## Anim Toggle

- `Type`: **Checkbox**

A checkbox you can animate to enable/disable LTCGI reflections.

## Diffuse Tint

- `Type`: **Color** (RGBA)

This color will be blended multiplicatively with LTCGI to tint the reflection. This is useful if LTCGI makes your material look too 'metallic'. Use shades of gray to darken reflections as desired.

## Specular Tint

- `Type`: **Color** (RGBA)

This color will be blended multiplicatively with LTCGI to tint the reflection. This is useful if LTCGI makes your material look too 'metallic'. Use shades of gray to darken reflections as desired.

## Use R&S's Smoothness

- `Type`: **Checkbox**

When enabled, will sample smoothness values defined in [Reflections & Specular](./reflections-and-specular.md)

## Smoothness

- `Type`: **Float**, Range: `0.0 - 1.0`

Blends mip-maps into reflections to approximate more diffuse materials.