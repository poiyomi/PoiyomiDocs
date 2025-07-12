---
sidebar_position: 3
title: Vertex Colors
description: Vertex Colors provide options for using Vertex Colors from your Mesh to affect the Base Color and Alpha.
keywords: [vertex, colors, vertex colors, linear, alpha, poiyomi, shader]
---

The Vertex Colors section provides options for using a Mesh's Vertex Colors to affect the Base color and Alpha. Vertex Colors are determined by the embedded Color Attributes of a Mesh, which were painted on from 3D Software such as Blender.

Vertex Colors can also be used as Masks in different parts of the Shader, such as [RGBA Color Masking](/docs/color-and-normals/rgba-color-masking.md#vertex-colors) and [Global Masks](/docs/modifiers/global-masks.md#vertex-colors).

<PoiVideo url='/vid/color-and-normals/PoiVertexColors.mp4'/>
<em>This video shows how the shader will read Vertex Colors if the Mesh itself has assigned Color Attributes.</em>

## Linear Colors

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Whether to convert the mesh vertex colors from gamma space to linear space.

## Use Vertex Color

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

How much to blend vertex colors with the base color. Colors are blended multiplicative with the base color.

## Use Vertex Color Alpha

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

How much to blend vertex alpha with the base alpha. Alpha is blended multiplicative with the base alpha.
