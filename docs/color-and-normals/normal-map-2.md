---
sidebar_position: 1
title: Normal Map 2
description: The fundamental features of your Material in Poiyomi Shaders, including the Base Color, Main Texture, and Normal Mapping.
keywords: [normal map 2, normal, normals, map, 2nd normal, poiyomi, shader, unity]
---

The Normal Map 2 section adds an additional normal map to the surface, allowing additional detail to be added to a material without increasing the complexity of a mesh. This area is commonly referred to as "2nd Normal."

:::info
This section only contains basic features for a 2nd Normal, specifically for compatibility from other shaders. To use more advanced features, we recommend using [Detail Normals & Texture](/docs/color-and-normals/details.md) instead.
:::

## Normal Map

- `Type`: <PropertyIcon name="texture" />**Normal Map** Texture (`sRGB = OFF`)

The Normal Map texture changes the normal of the surface based on a normal map texture. When expanded, the Normal Map texture has options for **Tiling** and **Offset**.

:::info Use OpenGL Format
**Poiyomi Shaders, and across Unity as a whole, <u>requires OpenGL format</u> for Normal Maps.** Even though the game runs in DirectX, Unity always uses the OpenGL format.
:::

## Mask

- `Type`: <PropertyIcon name="texture" />**Normal Map** Texture (`sRGB = OFF`)

Sets a Mask that contains the Normal Map 2 to a specific area.
