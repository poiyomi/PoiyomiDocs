---
sidebar_position: 6
title: Parallax Heightmapping
description: Parallax Heightmapping simulates large bumps and protrusions on a Material using a specialized linear texture that determines depth.
keywords: [parallax, height, map, heightmap, bump, bumpmapping, heightmapping, protrustion, poiyomi, shader]
---

Parallax Heightmapping is a feature that can simulate large bumps and protrusions on a Material. It utilizes a specialized linear texture that determines how much depth there is on the Material.

This feature is similar to the Height Map function found in the Unity Standard Shader, but with some more options available for additional tweaks.

:::warning
Parallax Heightmapping is an expensive feature. We recommend you use [Normal Maps](https://www.poiyomi.com/color-and-normals/main#normal-map) instead.
:::

## Applies To

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `UV0`/`UV1`/`UV2`/`UV3`/`Panosphere`/`World Pos`/`Local Pos`/`Polar UV`/`Distorted UV`

Choice of UV to use for the Parallax Heightmapping feature.

## Heightmap

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = Off`)

The main Height Map texture slot, defining where the bumps and protrusions should be simulated. Darker colors in Grayscale will yield larger depth.

## Mask

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = Off`)

Optional Mask that can be used to constrain the Height Map to only affect a specified area.

## Strength

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Determines the strength of the Height Map. Higher values will yield larger depth.

## Curvature U

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 100.0`

Adjusts the curvature of the parallax on the Local Horizontal axis.

## Curvature V

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 30.0`

Adjusts the curvature of the parallax on the Local Vertical axis.

## Steps Min

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 128.0`

Minimum amount of parallax steps to generate at the beginning of the parallax.

## Steps Max

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 128.0`

Maximum amount of parallax steps to generate at the end of the parallax.

## Curvature Bias

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Adjusts the bias of the curvature when rendering the parallax.
