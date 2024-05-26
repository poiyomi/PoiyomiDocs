---
sidebar_position: 7
title: Depth Rim Lighting
---
import PoiVideo from '@site/src/components/PoiVideo'

Depth-based Rim Lighting is a rim lighting effect that creates a constant-size rim in screen space, meaning the rim has a more constant size, unlike traditional rim lighting.

This effect relies on the [Depth Buffer/Depth Texture](https://docs.unity3d.com/Manual/SL-CameraDepthTexture.html) being active in the scene. Since this has some computational overhead, it's not always active. Some worlds will not have this enabled, and some will have it disabled.

To forcibly enable the depth buffer from an avatar, a reliable method is to add a realtime directional light to the scene, which will trigger the depth texture to be updated. A prefab called `DepthGet` is included in the Poiyomi Shaders package.

:::warning
Make sure to only enable the depth buffer when you need it! This can be a performance hit, and it's not always necessary.
:::

## Normal To Use

- `Type`: **Dropdown**, Options: `Pixel`/`Vertex`

Normal to use for the depth rim light effect. `Pixel` uses the normal of the pixel after all normal maps have been applied. `Vertex` uses the normal from the mesh itself.

## Width

- `Type`: **Float**, Range: `0.0 - 1.0`

How wide the rim should extend from the edge.

## Sharpness

- `Type`: **Float**, Range: `0.0 - 1.0`

How sharp the edge of the rim should be. Generally, at higher sharpness, the rim will appear in less areas.

## Hide In Shadow

- `Type`: **Checkbox**

Hides the rim in shadowed areas.

## Color and Blending

### Use Base Color

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to incorporate the base color into the rim color. At `0`, only the Rim Color will be used. At `1`, only the base color of the mesh will be used.

### Light Color Mix

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to mix the rim color with the light color. The light color scaled to this value is multiplied with the rim color.

### Rim Color

- `Type`: **Color**

Base color of the rim.

### Emission

- `Type`: **Float**, Range: `0.0 - 20.0`

How much emission the rim should exhibit.

### Blending

In most application, choosing one blend mode to use will be sufficient.

#### Replace

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to replace the base color with the rim color.

#### Add

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to add the rim color to the base color.

#### Multiply

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to multiply the rim color with the base color.

#### Add To Light

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to add the rim color to the light intensity (base pass only).
