---
sidebar_position: 1
title: Stochastic Sampling
description: Shader technique involving collecting data or points randomly, and simples pixels randomly instead of normally.
keywords: [stochastic, sampling, poiyomi, shaders]
---

Stochastic Sampling involves collecting data or points randomly, rather than at fixed regular intervals. This leads to varied results even with identical inputs due to the inherent randomness of the sampling. This technique improves anti-aliasing by randomly sampling pixels instead of normally. A simple example of Stochastic Sampling can be visualized on [this webpage <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://hybriddog.github.io/stochastic_texture_sampling_demo/).

This section houses the global settings for Stochastic Sampling in the material.

## Sampling Mode

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Deliot Heitz`/`Hextile`/`Off`

Choice of which Sampling Mode to use, both of which are vastly significant in appearance. This will determine what settings are exposed below.

## Deliot Heitz

Referring to the method from [Thomas Deliot and Éric Heitz <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://thomasdeliot.wixsite.com/blog/single-post/2018/10/08/procedural-stochastic-textures-by-tiling-and-blending-gpu-zen-2?utm_source=chatgpt.com), this method takes a tileable texture and preprocesses it to produce two textures - A transform of the input that redistributes colors so that blending operations preserve contrast, and an inverse transform to map back to after blending. When rendering, each fragment is mapped into a lattice structure of tiles, but the tiles are assigned randomized offsets. Multiple samples are fetched from neighboring tiles, then blended using weights that factor in position, randomness, etc. After blending, the inverse transform restores correct color statistics, reducing visible repetition.

### Detiling Density

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.1 - 10.0`

How dense should the Deliot-Heitz detiling should be.

## Hextile

[Hextile <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://jcgt.org/published/0011/03/05/paper-lowres.pdf) refers to a slightly different approach to Stochastic Sampling by using hexagonal regions and tiles instead of square or rectangular tiles. It partitions the texture domain using a regular lattice of hexagonal-shaped regions and has a random offset. For each given UV or pixel, it determines which hex tile region it belongs to, sample from the relevant neighboring tiles, and blend it using barycentric weights.

### Hex Grid Density

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.1 - 10.0`

Sets the density of the hexagonal grid, higher numbers being more dense.

### Rotation Strength

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 2.0`

Sets the rotation strength of each tile.

### Falloff Contrast

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.01 - 0.99`

Sets the falloff contrast of the Hextile sampling.

### Falloff Power

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 20.0`

Sets the falloff power of the Hextile sampling.
