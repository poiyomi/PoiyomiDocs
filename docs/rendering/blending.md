---
sidebar_position: 2
title: Blending
description: Blending defines how the shader should blend on top of pixels that are already drawn, typically set by the Rendering Preset.
keywords: [blending, render, rendering, poiyomi, shader]
---

The Blending section defines how the shader should blend on top of pixels that are already drawn. These options are set by the [Rendering Preset](/docs/general/render-preset.md) selected at the top of the shader, and almost always need not be set manually.

These blend options are exposed separately for the base pass and the add pass, as the add pass needs to blend on top of the base pass.

:::note Documentation Info
Outline Blending will also be visible here containing the same settings as described here. This allows you to control the Blending operator of the [Outlines](/docs/outlines/outlines.md) separate from the base Blending.
:::

## RGB Blend Op

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Add`/`Subtract`/`ReverseSubtract`/`Min`/`Max`/`LogicalClear`/`LogicalSet`/`LogicalCopy`/`LogicalCopyInverted`/`LogicalNoop`/`LogicalInvert`/`LogicalAnd`/`LogicalNand`/`LogicalOr`/`LogicalNor`/`LogicalXor`/`LogicalEquivalence`/`LogicalAndReverse`/`LogicalAndInverted`/`LogicalOrReverse`/`LogicalOrInverted`

Which blend operator to use for the RGB channels. This is almost always set to `Add`. See the [Unity Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/SL-BlendOp.html) for more information.

## RGB Source Blend

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Zero`/`One`/`DstColor`/`SrcColor`/`OneMinusDstColor`/`SrcAlpha`/`OneMinusSrcColor`/`DstAlpha`/`OneMinusDstAlpha`/`SrcAlphaSaturate`/`OneMinusSrcAlpha`

Which blend factors to use for the source. See the [Unity Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/SL-Blend.html) and [Rendering Presets](/docs/general/render-preset.md) page for more information.

## RGB Destination Blend

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Zero`/`One`/`DstColor`/`SrcColor`/`OneMinusDstColor`/`SrcAlpha`/`OneMinusSrcColor`/`DstAlpha`/`OneMinusDstAlpha`/`SrcAlphaSaturate`/`OneMinusSrcAlpha`

Which blend factors to use for the destination. See the [Unity Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/SL-Blend.html) and [Rendering Presets](/docs/general/render-preset.md) page for more information.

## Advanced Alpha Blending

These settings below control the Alpha of the Blending operation.

### Alpha Blend Op

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Add`/`Subtract`/`ReverseSubtract`/`Min`/`Max`/`LogicalClear`/`LogicalSet`/`LogicalCopy`/`LogicalCopyInverted`/`LogicalNoop`/`LogicalInvert`/`LogicalAnd`/`LogicalNand`/`LogicalOr`/`LogicalNor`/`LogicalXor`/`LogicalEquivalence`/`LogicalAndReverse`/`LogicalAndInverted`/`LogicalOrReverse`/`LogicalOrInverted`

What blend op to use for the Alpha channel. This is typically set by the Rendering Preset. See the [Unity Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/SL-BlendOp.html) for more information.

### Alpha Source Blend

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Zero`/`One`/`DstColor`/`SrcColor`/`OneMinusDstColor`/`SrcAlpha`/`OneMinusSrcColor`/`DstAlpha`/`OneMinusDstAlpha`/`SrcAlphaSaturate`/`OneMinusSrcAlpha`

Which blend factors to use for the Alpha source. See the [Unity Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/SL-Blend.html) and [Rendering Presets](/docs/general/render-preset.md) page for more information.

### Alpha Destination Blend

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Zero`/`One`/`DstColor`/`SrcColor`/`OneMinusDstColor`/`SrcAlpha`/`OneMinusSrcColor`/`DstAlpha`/`OneMinusDstAlpha`/`SrcAlphaSaturate`/`OneMinusSrcAlpha`

Which blend factors to use for the Alpha destination. See the [Unity Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/SL-Blend.html) and [Rendering Presets](/docs/general/render-preset.md) page for more information.