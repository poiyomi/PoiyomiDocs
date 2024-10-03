---
sidebar_position: 2
title: Rendering Preset
description: Rendering options in Poiyomi Shaders, such as Opaque, Cutout, and various Transparent Presets.
keywords: [render, rendering, preset, opaque, cutout, transparent, transclipping, fade, additive, soft, multiplicative, blending, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

At the top of the shader, there is a dropdown that may be labeled with something like `Opaque`, `Cutout`, `Transparent`, or something similar. It's located on the bottom-right from the Material Lock/Unlock button.

When you click on this, the dropdown will show the options that are documented on this page. The option you select will automatically configure your [Rendering](/docs/rendering/main.md) settings to ensure they appear as intended.

<a target="_blank" href="/img/general/RenderingPresets-new.png">
<img src="/img/general/RenderingPresets-new.png" alt="Rendering Presets Dropdown Menu" width="700px"/>
</a>

This setting is critical to determining how a material will render, and it's important to know what options are available. **This is always the most important step in your Avatar creation journey!**

## Base Presets

### Opaque

- Render Queue: `2000` (Geometry)
- ZWrite: `On`

Default rendering mode. Suitable for objects with no transparency at all.

### Cutout

- Render Queue: `2450` (AlphaTest)
- ZWrite: `On`

Similar to Opaque, but allows a yes/no for whether a pixel should be rendered. This is suitable for objects with general transparency, like clothing with holes in it, hair using hair cards, etc.

By default, cutout is binary: it either renders or it doesn't. You can use certain options to improve partially transparent areas and edges:

- [Dithering](/docs/color-and-normals/alpha-options.md#dithering) uses a technique that introduces noise in order to provide a perceptually smoother transition between two sharp differences in alpha.
- [Alpha to Coverage](/docs/color-and-normals/alpha-options.md#alpha-to-coverage) uses partial transparency values to provide variable transparency levels when the viewer is using Multi-Sampled Anti-Aliasing (MSAA). The number of transparency levels is equal to the MSAA level (x2, x4, x8, etc). VRChat allows users to select the number of MSAA levels they want to use, so it's best to make your material still look good with no MSAA.

:::tip
You can enable MSAA in your Unity project by going to **Edit** > **Project Settings** > **Quality** and finding the *Anti Aliasing* options, and setting them to *MSAA 4x*.

Alternatively, the [VRWorldToolkit](https://github.com/oneVR/VRWorldToolkit) can set up post-processing for you, which enables MSAA, even in avatar projects!
:::

## Transparent Presets

These presets are transparent, and primarily use the Alpha value to determine how to blend with the background. Transparent presets allow partial blending between the transparent material's color and the background color. This effect should be used sparingly, as it can cause a number of issues due to the problems inherent in realtime transparency stacking.

To learn more about transparency issues, and how to mitigate some of them, check out this video:

<center><iframe width="600px" height="338px"  src="https://www.youtube.com/embed/jvaoZJmjENs" title="How To Fix Transparency" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allow="fullscreen;"></iframe></center>

### Fade

- Render Queue: `3000` (Transparent)
- ZWrite: `Off`

Fade is a fully transparent preset, and allows an object to be completely faded away when its alpha value is 0. This is useful for things that need reliable partial transparency, but also need to disappear completely.

### Transparent

- Render Queue: `3000` (Transparent)
- ZWrite: `Off`

Transparent is like fade, but will keep specular highlights and reflections, like real transparent materials. This is more useful for rendering transparent physically-based materials, like glass, water, etc.

### TransClipping

- Render Queue: `2460` (AlphaTest+10)
- ZWrite: `On`

TransClipping is like Transparent, but will write to the Z-buffer and render on the AlphaTest queue +10. This can sometimes fix certain transparency issues, but may cause other issues.

## Color Blend Presets

These presets are transparent, but primarily use the color instead of the alpha to determine how the material should blend with the background. These are similar to the blending modes used in applications like Photoshop and Substance Painter. They tend to blend in more stable ways than the Transparent presets, but are less flexible and more suitable for stylistic effects.

### Additive

- Render Queue: `3000` (Transparent)
- ZWrite: `Off`

Additive adds the color of the material to the background. This tends to brighten the background. Black areas will be fully transparent, while white areas will be most visible.

The additive preset will always either keep or brighten the background color, by nature.

### Soft Additive

- Render Queue: `3000` (Transparent)
- ZWrite: `Off`

Soft Additive is similar to Additive, but instead of using the material color directly, it uses the material color multiplied by one minus the background color. This means that when the destination color is very bright, the amount of blending will be very little. This prevents the additive blending from being too strong.

The soft additive preset will always either keep or brighten the background color, by nature.

### Multiplicative

- Render Queue: `3000` (Transparent)
- ZWrite: `Off`

Multiplicative multiplies the background color by the material color. This tends to darken the background. It's useful for creating tinted effects. Black areas will be fully opaque, while white areas will be fully transparent.

The multiplicative preset will always either keep or darken the background color, by nature.

### 2x Multiplicative

- Render Queue: `3000` (Transparent)
- ZWrite: `Off`

2X Multiplicative is similar to Multiplicative, but instead of simply multiplying the material color by the background color, it ends up multiplying the result by 2. This means that it's capable of slightly brightening the background when white, but can still darken all the way to black.

## Technical Details

### Options

Render Presets Set a bunch of options for how a material should render. They are all set to the default values, but if you know what you're doing, you can adjust them in the [Rendering Settings](/docs/rendering/main.md) section.

The options that are set by default by rendering presets are:

- Render Queue
- Render Type (internal)
- Blend Op
- Blend Op Alpha
- Alpha Cutoff
- Source Blend Factor
- Distance Blend Factor
- Alpha To Coverage
- ZWrite
- ZTest
- Alpha Premultiply

### Blending

One of the core differentiating factors for a preset is how it blends with the background. This is defined by a blend operation, a source factor, and a destination factor. Assuming the blend operation is set to `Add`, which it is in all Poiyomi presets, They're blended as such:

`output = (source factor) * (source color) + (destination factor) * (destination color)`

This simple equation can be used to create a wide range of blending effects. To learn more about blending, you can read the [Unity Documentation for ShaderLab command: Blend](https://docs.unity3d.com/Manual/SL-Blend.html).

Here's a summary of the blend modes used in each preset:

| Preset              | Source Factor       | Distance Factor   | Effect Summary
| ------------------- | ------------------- | ----------------- | ----------------- |
| Opaque              | `One`               | `Zero`            | Opaque Blending |
| Cutout              | `One`               | `Zero`            | Opaque but with Cutouts |
| Fade                | `SrcAlpha`          | `OneMinusSrcAlpha`| Fully alpha-driven transparency |
| Transparent         | `One`               | `OneMinusSrcAlpha`| Alpha-driven transparency keeping reflections/highlights visible |
| TransClipping       | `SrcAlpha`          | `OneMinusSrcAlpha`| Fade, but with z-writing |
| Additive            | `One`               | `One`             | Color-based additive blending |
| Soft Additive       | `OneMinusDstColor`  | `One`             | Color-based additive blending that takes background color into account |
| Multiplicative      | `DstColor`          | `Zero`            | Color-based multiplicative blending (tinting) |
| 2x Multiplicative   | `DstColor`          | `SrcColor`        | Color-based multiplicative blending (tinting) that can brighten  |
