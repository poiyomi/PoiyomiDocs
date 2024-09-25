---
sidebar_position: 1
title: Rendering
description: The Rendering section sets various low-level properties that control how the shader is rendered. It directly influences how the Graphics Driver will interpret Poiyomi Shaders at runtime.
keywords: [render, rendering, cull, culling, ztest, zwrite, z, offset, instancing, gpu, early, early z, vrc, fallback, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

The Rendering section provides various low-level options for controlling how the shader is rendered. This plays an important part in how the Graphics Driver will interpret the shader at runtime.

:::info
Many of the settings in this section are automatically-configured depending on which [Rendering Preset](/docs/general/render-preset.md) you select.
:::

## Cull

- `Type`: **Dropdown**, Options: `Back`/`Front`/`Off`

Sets what faces should be culled. By default, back faces are culled, in order to improve performance. This can be set to `Off` in order to render both front and back faces. `Front` is useful for special effects.

:::tip
This option is usually the only one in this section that should be adjusted by most users.
:::

## ZTest

- `Type`: **Dropdown**, Options: `Disabled`/`Never`/`Less`/`Equal`/`LessEqual`/`Greater`/`NotEqual`/`GreaterEqual`/`Always`

Sets how the shader should test the depth buffer. By default, the depth buffer is tested, and if the depth value is not less than or equal to the current value, the pixel is discarded.

Learn more at [Unity's documentation](https://docs.unity3d.com/Manual/SL-ZTest.html).

## ZWrite

- `Type`: **Dropdown**, Options: `Off`/`On`

Determines whether the shader should write to the depth buffer. For opaque presets, this is usually `On`, but for transparent presets, this is usually `Off`.

Learn more at [Unity's documentation](https://docs.unity3d.com/Manual/SL-ZWrite.html).

## Color Mask

- `Type`: **Dropdown**

Color Mask determines which color channels should be rendered. By default, this is set to `RGBA`, which means that all colors are rendered. All permutations of color channels are available.

Learn more at [Unity's documentation](https://docs.unity3d.com/Manual/SL-ColorMask.html).

## Offset Factor

- `Type`: **Float**

Offset factor moves where a polygon is rendered in screenspace. This doesn't change the visual appearance of the polygon, but can be used to specially modify the depth value of the polygon.

Learn more at [Unity's documentation.](https://docs.unity3d.com/Manual/SL-Offset.html)

## Offset Units

- `Type`: **Float**

A fixed value to move the polygon away from or toward the camera, while keeping it visually the same size.

Learn more at [Unity's documentation.](https://docs.unity3d.com/Manual/SL-Offset.html)

## Reduce Clip Distance

- `Type`: **Checkbox**

Creates a smaller clip distance for the material. This can be used to make geometry not disappear when very close to the camera.

## Z Clip

- `Type`: **Checkbox**

If enabled, ignores the Near and Far Clip on Cameras when this Material is being rendered.

## Ignore Fog

- `Type`: **Checkbox**

If checked, this material will not be affected by fog, if present in the scene.

Learn more at [Unity's documentation.](https://docs.unity3d.com/2018.3/Documentation/Manual/PostProcessing-Fog.html)

## Enable GPU Instancing

- `Type`: **Checkbox**

Enables or disables GPU instancing for this material. GPU instancing allows for rendering multiple copies of the same mesh with the same material, given some specific conditions are met. This can be used to create more efficient rendering of objects with multiple copies.

Learn more at [Unity's documentation.](https://docs.unity3d.com/Manual/GPUInstancing.html)

## Early Z

- `Type`: **Checkbox**

Enables Early Z mode on the Material. This makes the Mesh first only render to Depth, culling anything behind the main Front Face.

This option is commonly used to solve Stacking Transparency problems.

## VRC Fallback

- `Type`: **Dropdown**

Defines what fallback shader to use if shaders are hidden on an avatar. This includes a large variety of shaders, with some of the more useful options being:

- `Hidden`: Material disappears if shaders are hidden (useful for things that are hidden by shader!)
- `Standard/Opaque`: Opaque standard shader material
- `Standard/Cutout`: Cutout standard shader material, drawing from base texture alpha
- `Toon/Opaque`: Opaque Toon-lit (flat lit) shader material
- `Toon/Cutout`: Cutout Toon-lit (flat lit) shader material, drawing from base texture alpha

For more information on VRC fallback shaders, including what specific properties will be copied to the fallback shader, read the [VRC Creators Documentation for the Shader Fallback System](https://creators.vrchat.com/avatars/shader-fallback-system/).
