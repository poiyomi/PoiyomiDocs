---
sidebar_position: 7
title: Vertex Colors
description: Vertex Colors provide options for using Vertex Colors from your Mesh to affect the Base Color and Alpha.
keywords: [vertex, colors, vertex colors, linear, alpha, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

The Vertex Colors section provides options for using a mesh's vertex colors to affect the base color and alpha. 

## Linear Colors

- `Type`: **Checkbox**

Whether to convert the mesh vertex colors from gamma space to linear space.

## Use Vertex Color

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to blend vertex colors with the base color. Colors are blended multiplicative with the base color.

## Use Vertex Color Alpha

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to blend vertex alpha with the base alpha. Alpha is blended multiplicative with the base alpha.
