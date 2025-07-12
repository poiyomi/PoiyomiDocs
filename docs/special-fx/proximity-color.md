---
sidebar_position: 11
title: Proximity Color
description: Proximity Color is a special effect that allows the user to change the color of a Mesh based on the distance from the Camera or the user's POV.
keywords: [proximity color, proximity, color, pixel, object, color, special fx, effect, poiyomi, shader]
---

Proximity Color is a special effect that allows you to change the color of a mesh based on the distance from the camera. This can be used to darken a mesh when it gets close, simulating local occlusion of light.

<PoiVideo url='/vid/special-fx/proximity-color.mp4'/>
<em>Demonstration of Proximity Color affecting the appearance of the Material based on the Camera's distance to the object.</em>

## Pos To Use

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Pixel Position`/`Object Position`

Which position to use to determine distance.

- `Pixel Position`: The distance is determined for each pixel, allowing different parts of the mesh to have different colors applied.
- `Object Position`: The distance is determined for the entire object, meaning that the whole mesh will have the same color applied.

## Min Color

- `Type`: <PropertyIcon name="color" />**Color**

What color to multiply the base color by when the distance is at or below the [Min Distance](#min-distance). Typically, this would be set to Black in most cases.

## Max Color

- `Type`: <PropertyIcon name="color" />**Color**

What color to multiply the base color by when the distance is at or above the [Max Distance](#max-distance). Typically, this would be set to White.

## Min Distance

- `Type`: <PropertyIcon name="float" />**Float**

Distance from the camera at which the [Min Color](#min-color) should be applied.

## Max Distance

- `Type`: <PropertyIcon name="float" />**Float**

Distance from the camera at which the [Max Color](#max-color) should be applied.

## Force BackFace Color

- `Type`: <PropertyIcon name="toggle" />**Toggle**

If enabled, applies the above set [Min Color](#min-color) to show on the Back Face, as if the Camera is going inside the mesh.

:::caution Disable Culling for this setting to work
In order to use **Force BackFace Color**, you must set the [Cull](/docs/rendering/main.md#cull) to `Off` under your [Rendering](/docs/rendering/main.md) settings.
:::