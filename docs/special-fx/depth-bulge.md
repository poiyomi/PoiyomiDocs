---
sidebar_position: 2
title: Depth Bulge
description: Depth Bulge causes the Mesh to bulge out towards other nearby meshes, like when touching it with a finger.
keywords: [depth, bulge, depth bulge, buffer, texture, special fx, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

Depth Bulge causes the Mesh to bulge out towards other nearby meshes when it's in proximity to it, like when touching it with a finger.

This effect relies on the [Depth Buffer/Depth Texture](https://docs.unity3d.com/Manual/SL-CameraDepthTexture.html) being active in the scene. Since this has some computational overhead, it's not always active. Some worlds will not have this enabled, and some will have it disabled.

To forcibly enable the depth buffer from an avatar, a reliable method is to add a realtime directional light to the scene, which will trigger the depth texture to be updated. A prefab called `DepthGet` is included in the Poiyomi Shaders package.

:::warning
Make sure to only enable the depth buffer when you need it! This can be a performance hit, and it's not always necessary.
:::

:::note
Depth Bulge doesn't write to depth, which can break certain transparent effects like Custom Fog and Raymarching.
:::

## Bulge Mask

- `Type`: **Data** Texture (`sRGB = Off`)

Mask to use for the Depth Bulge.

## Touch Distance

- `Type`: **Float**, Range: `0.0 - 1.0`

Minimum amount of distance for the Depth Bulge to affect the Mesh.

## Bulge Height

- `Type`: **Float**, Range: `-0.2 - 0.2`

The maximum Height of the Depth Bulge effect.