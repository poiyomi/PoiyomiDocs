---
sidebar_position: 1
title: AudioLink
---

AudioLink is a system that analyzes and processes in-world audio into many different highly reactive data streams and exposes the data to VRChat Udon, world shaders, and avatar shaders. For more information on AudioLink visit https://audiolink.dev/

There are various features in Poiyomi Shaders that support AudioLink effects. However, they will only be exposed when AudioLink is activated on the Material.

## AudioLink

- `Type`: **Checkbox**

If enabled, activates AudioLink features and exposes AudioLink parameter controls for supported modules and effects.

:::info
When this feature activates, the following sections in Poiyomi Shaders will have their AudioLink properties exposed for you to use. Refer to their Documentation Entries for more information.
- [Alpha Options](../color-and-normals/alpha-options)
- [Vertex Options](../color-and-normals/vertex-options)
- Vertex Glitcing
- [Decals](../color-and-normals/decals.md)
- [Matcap / Sphere Textures](../shading/matcap.md)
- [Rim Lighting](../shading/rim-lighting.md)
- [Outlines](../outlines/main.md)
- [Dissolve](../special-fx/dissolve.md)
- [Flipbook](../special-fx/flipbook.md)
- [Emission](../special-fx/emission.md)
- [Glitter / Sparkle](../special-fx/glitter.md)
- [Pathing](../special-fx/pathing.md)
- Voroni
:::

### Anim Toggle

- `Type`: **Checkbox**

Toggleable AudioLink checkbox. Used to enable and disable AudioLink effects on the fly.

:::tip
You can use this checkbox to turn AudioLink effects On or Off using Animations on the fly. See [Locking and Animation](https://www.poiyomi.com/general/locking#marking-properties-for-animation) for more information.
:::

## Smoothing

### Bass

- `Type`: **Float**, Range: `0.0 - 1.0`

Modifier for smoothing the Bass Band.

### Low Mid

- `Type`: **Float**, Range: `0.0 - 1.0`

Modifier for smoothing the Low Mid Band.

### High Mid

- `Type`: **Float**, Range: `0.0 - 1.0`

Modifier for smoothing the High Mid Band.

### Treble

- `Type`: **Float**, Range: `0.0 - 1.0`

Modifier for smoothing the Treble Band.
