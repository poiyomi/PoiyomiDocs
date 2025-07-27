---
sidebar_position: 0
title: Rendering
description: The Rendering section sets various low-level properties that control how the shader is rendered. It directly influences how the Graphics Driver will interpret Poiyomi Shaders at runtime.
keywords: [render, rendering, cull, culling, ztest, zwrite, z, offset, instancing, gpu, early, early z, vrc, fallback, poiyomi, shader]
---

The Rendering section provides various low-level options for controlling how the shader is rendered. This plays an important part in how the Graphics Driver will interpret the shader at runtime.

:::info
Many of the settings in this section are automatically-configured depending on which [Rendering Preset](/docs/general/render-preset.md) you select.
:::

## Cull

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Back`/`Front`/`Off`
  - Default: `Back`

Sets what faces should be culled. By default, back faces are culled, in order to improve performance. This can be set to `Off` in order to render both front and back faces. `Front` is only useful for special effects.

:::tip
This option is usually the only one in this section that should be adjusted by most users.
:::

## ZTest

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Disabled`/`Never`/`Less`/`Equal`/`LessEqual`/`Greater`/`NotEqual`/`GreaterEqual`/`Always`
  - Default: `LessEqual`

Sets how the shader should test the depth buffer. By default, the depth buffer is tested, and if the depth value is not less than or equal to the current value, the pixel is discarded.

Learn more at [Unity's Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/SL-ZTest.html).

## ZWrite

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Off`/`On`
  - Default: Determined by [Rendering Preset](/docs/general/render-preset.md)

Determines whether the shader should write to the depth buffer. For Opaque presets, this is usually `On`, but for Transparent presets, this is usually `Off`.

Learn more at [Unity's Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/SL-ZWrite.html).

## Color Mask

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Multiple Options: `Everything`/`Alpha`/`Blue`/`Green`/`Red`
  - Default: `Everything`

Color Mask determines which color channels should be rendered. By default, this is set to `RGBA`, which means that all colors are rendered. All permutations of color channels are available.

Learn more at [Unity's Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/SL-ColorMask.html).

## Offset Factor

- `Type`: <PropertyIcon name="float" />**Float**
  - Default: `0`

Offset factor moves where a polygon is rendered in screen-space. This doesn't change the visual appearance of the polygon, but can be used to specially modify the depth value of the polygon.

Learn more at [Unity's Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/SL-Offset.html).

## Offset Units

- `Type`: <PropertyIcon name="float" />**Float**
  - Default: `0`

A fixed value to move the polygon away from or toward the camera, while keeping it visually the same size.

Learn more at [Unity's Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/SL-Offset.html).

## Reduce Clip Distance

- `Type`: <PropertyIcon name="toggle" />**Toggle**
  - Default: `Off`

Creates a smaller clip distance for the material. This can be used to make geometry not disappear when very close to the camera.

## Z Clip

- `Type`: <PropertyIcon name="toggle" />**Toggle**
  - Default: `On`

Enables or Disables the GPU's Depth Clip Mode, which determines how the GPU handles fragments of the Shader that are outside of the Near and Far Planes.

Learn more at [Unity's Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/SL-ZClip.html).

## Ignore Fog

- `Type`: <PropertyIcon name="toggle" />**Toggle**
  - Default: `Off`

If checked, this material will not be affected by fog, if present in the scene.

Learn more at [Unity's Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/2018.3/Documentation/Manual/PostProcessing-Fog.html).

## Flip Backface Normals

- `Type`: <PropertyIcon name="toggle" />**Toggle**
  - Default: `On`

If enabled, inverts the normal vectors of the mesh if you're looking at a backface. This ensures it renders correctly when the camera is looking towards the backface.

## Enable GPU Instancing

- `Type`: <PropertyIcon name="toggle" />**Toggle**
  - Default: `Off`

Enables or disables GPU instancing for this material. GPU instancing allows for rendering multiple copies of the same mesh with the same material, given some specific conditions are met. This can be used to create more efficient rendering of objects with multiple copies.

Learn more at [Unity's Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/GPUInstancing.html).

## Early Z

- `Type`: <PropertyIcon name="toggle" />**Toggle**
  - Default: `Off`

Enables Early Z mode on the Material. This makes the Mesh first only render to Depth, culling anything behind the main Front Face.

This option is commonly used to solve Stacking Transparency problems.

## VRC Fallback Shader

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `None`/`Hidden`/`Standard`/`Toon`/`Unlit`/`VertexLit`/`Particle`/`Sprite`/`Matcap`/`MobileToon`/`toonstandard`/`toonstandardoutline`
  - Default: `Standard/Opaque/OneSided`

Defines what Fallback Shader to use if shaders are hidden on the Avatar. Fallback Shaders are seen when a Remote User is blocking your shaders via their own Safety Settings.

This option includes a large variety of shaders, with some of the more useful options being:

- `Hidden`: Material disappears if shaders are hidden (useful for things that are hidden by the shader, or to avoid opaque glasses lens).
- `Standard/Opaque`: Opaque Standard shader material.
- `Standard/Cutout`: Cutout Standard shader material, drawing from base texture alpha.
- `Toon/Opaque`: Opaque Toon-lit (flat lit) shader material.
- `Toon/Cutout`: Cutout Toon-lit (flat lit) shader material, drawing from base texture alpha.
- `toonstandard/Opaque`: Uses VRChat's Toon Standard shader, introduced in SDK 3.8.1 and newer versions. **Only supports Opaque.**
- `toonstandardoutline/Opaque`: Uses VRChat's Toon Standard shader with Outlines, introduced in SDK 3.8.1 and newer versions. **Only supports Opaque.**

For more information on VRC Fallback Shaders, including what specific properties will be copied to the fallback shader, read the [VRC Creators Documentation for the Shader Fallback System <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://creators.vrchat.com/avatars/shader-fallback-system/).

:::tip Test Fallback Shaders in-game
You can test how the Fallback Shader setting behaves in-game by toggling a setting in the Action Menu!

To do this, open the Action Menu, go to `Tools -> Avatar` and toggle the `Fallback Shaders` to preview. Make sure to turn this off when you're done!
:::

## Render Queue

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `From Shader`/`Geometry`/`AlphaTest`/`Transparent`
  - `Type`: <PropertyIcon name="float" />**Index**

The Render Queue tells Unity to set the sorting behavior within the Rendering Pipeline, as Unity must sort and draw objects within the Scene so that it can be show to the Camera as requested by the Render Queue. This plays a vital part on how the shader is rendered in-game.

:::danger
**This setting is automatically set by the [Rendering Preset](/docs/general/render-preset.md) and should not be touched!**

Only modify this value if you *absolutely* know what you are doing.
:::

For more information on Render Queues and the Sorting Behaviors in the Built-in Rendering Pipeline, see the [Unity Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/built-in-rendering-order.html).