---
sidebar_position: 2
title: Blending
description: Blending defines how the shader should blend on top of pixels that are already drawn, typically set by the Rendering Preset.
keywords: [blending, render, rendering, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

The Blending section defines how the shader should blend on top of pixels that are already drawn. These options are set by the [Rendering Preset](/docs/general/render-preset.md) selected at the top of the shader, and almost always need not be set manually.

## Blending Options

These blend options are exposed separately for the base pass and the add pass, as the add pass needs to blend on top of the base pass.

### RGB/Alpha Blend Op

- `Type`: **Dropdown**

What blend op to use for the RGB and A channels. This is almost always set to `Add`. See the [Unity documentation](https://docs.unity3d.com/Manual/SL-BlendOp.html) for more information.

### Source/Destination Blend

- `Type`: **Dropdown**

Which blend factors to use for the source and destination. See the [Unity documentation](https://docs.unity3d.com/Manual/SL-Blend.html) and [Render Presets](/docs/general/render-preset.md) page for more information.
