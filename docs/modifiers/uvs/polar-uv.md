---
sidebar_position: 5
title: Polar UV
description: Set of texture coordinate remapping properties, which converts the UVs into Polar coordinates by wrapping the texture in a circular/radial fashion.
keywords: [polar, uv, fx, shading, poiyomi, shaders]
---

Polar UV is a set of texture coordinate remapping properties, which converts the UVs into Polar coordinates. When used, your texture will be wrapped in a circular/radial fashion around the mesh rather than stretched flat.

This section houses the global settings for Polar UV. To use it, select it as a UV option in supported sections of the shader.

## UV

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `UV0`/`UV1`/`UV2`/`UV3`/`Panosphere`/`World Pos`/`Local Pos`

## Center Coordinate

- `Type`: <PropertyIcon name="vector2" />**Vector2**

Sets the center coordinate of the Polar UVs.

| Axis | Function |
| --- | --- |
| X | (Horizontal) translates to an angle (θ, theta) around the center point. |
| Y | (Vertical) translates to a radius (r) outward from that center. |

## Radial Scale

- `Type`: <PropertyIcon name="float" />**Float**

Sets the radial scale of the Polar UV.

## Length Scale

- `Type`: <PropertyIcon name="float" />**Float**

Sets the length scale of the Polar UV.

## Spiral Power

- `Type`: <PropertyIcon name="float" />**Float**

Sets the spiral power of the Polar UV.