---
sidebar_position: 11
title: Proximity Color
---
import PoiVideo from '@site/src/components/PoiVideo'

Proximity Color is a special effect that allows you to change the color of a mesh based on the distance from the camera. This can be used to darken a mesh when it gets close, simulating local occlusion of light.

## Pos To Use

- `Type`: **Dropdown**, Options: `Pixel Position`/`Object Position`

Which position to use to determine distance.

- `Pixel Position`: The distance is determined for each pixel, allowing different parts of the mesh to have different colors applied.
- `Object Position`: The distance is determined for the entire object, meaning that the whole mesh will have the same color applied.

## Min Distance Alpha/Color

- `Type`: **Color**

What color to multiply the base color by when the distance is at or below the **Min Distance**.

## Max Distance Alpha/Color

- `Type`: **Color**

What color to multiply the base color by when the distance is at or above the **Max Distance**.

## Min Distance

- `Type`: **Float**

Distance from the camera at which the **Min Distance Alpha/Color** should be applied.

## Max Distance

- `Type`: **Float**

Distance from the camera at which the **Max Distance Alpha/Color** should be applied.
