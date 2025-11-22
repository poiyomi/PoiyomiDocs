---
sidebar_position: 3
title: Lil Fur
description: The Lil Fur Shader enables simulation of fabrics and hairs using the same technique found on LilToon's Fur Shader.
keywords: [fur, lilfur, lil fur, liltoon, fur shader, poiyomi fur, poiyomi, shader]
draft: true
---

The Lil Fur feature module allows simulation of fabrics and hairs, looking similar to how fur is simulated in animated films. This uses the same simulation technique known in LilToon shader.

To use Poiyomi Lil Fur, select the shader version `.poiyomi/Poiyomi Toon + Lil Fur` or `.poiyomi/Poiyomi Pro + Lil Fur`. This exposes the Lil Fur category with the following settings shown below.

:::warning
Lil Fur renders on it's own independently, meaning it does not stack with other Poiyomi features used. This is slightly lighter than Poiyomi Fur, although it can still have a performance cost. Please keep this in mind when using Lil Fur.
:::

## Fur Mode

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Cutout`/`Transparent`

This chooses the rendering mode to use for Lil Fur. Settings will be applied to the module's [Rendering](#rendering) properties.

For reference on the meanings of these modes, see [Rendering Presets](/docs/general/render-preset.md).

## Fur

### Normal Map

- `Type`: <PropertyIcon name="texture" />**Normal Map** Texture (`sRGB = OFF`)
  - `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 10.0`

The Fur Normal Map determines the direction of the Fur strands.

### Length Mask

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = OFF`)

Determines and caps the length of the Fur.

### Fur Vector

- `Type`: <PropertyIcon name="float4" />**Float4**

Sets the vectors on the direction of the Fur in `X`, `Y`, `Z`, and `W`.

### Vertex Color -> Vector

- `Type`: <PropertyIcon name="toggle" />**Toggle**

If enabled, will use your mesh's Vertex Colors as the Fur Vector.

### Gravity

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Sets how much the Fur will face down from the force of gravity. The source of the Gravity is determined by the World's Z direction.

### Randomize

- `Type`: <PropertyIcon name="float" />**Float**

Sets a degree on how much each direction of the fur is random.

## Appearance

### Noise

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = OFF`)

Sets a noise texture to use in the fur generation.

### Alpha Mask

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = OFF`)

When specified, the fur is disabled on areas that are masked out.

### AO

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Sets the degree of amount to apply shading to the fur. This may show an darkened underlying structure of the furs (triangular patterns) from certain angles when increased.

## Layers

### Layer Counts

- `Type`: <PropertyIcon name="floatrange" />**Int**, Range: `1 - 3`

Amount of Fur that is produced. The higher the number, the denser and higher the load is.

### Root Width

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Sets the thickness of the root to increase density and make the main body less visible.

### Cutout Length

- `Type`: <PropertyIcon name="float" />**Float**

Sets the length of the cutout.

### Touch Strength

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Sets how much deformation is performed due to the contact function using a vertex light.

## Rim Light

### Color

- `Type`: <PropertyIcon name="color" />**Color**

Color of the Rim Lighting on the Fur.

### Fresnel Power

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.01 - 50.0`

Sets the Fresnel strength of the Rim Lighting on the Fur.

### Anti Light

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Sets the Anti Light factor on the Fur's Rim Lighting.

## Rendering

:::warning Heads Up
These properties are automatically set based on the [Fur Mode](#fur-mode) set. If you intend to modify these properties below, please do so with care.

Most, if not all properties that are listed here are the same descriptions as notated in [Rendering](/docs/rendering/rendering.md). However, these settings are completely independent of the material's overall Rendering settings.
:::

### Cull

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Back`/`Front`/`Off`
  - Default: `Off`

Sets what faces should be culled.

### SrcBlend RGB

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Zero`/`One`/`DstColor`/`SrcColor`/`OneMinusDstColor`/`SrcAlpha`/`OneMinusSrcColor`/`DstAlpha`/`OneMinusDstAlpha`/`SrcAlphaSaturate`/`OneMinusSrcAlpha`

Which blend factors to use for the source on the Fur. See the [Unity Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/SL-Blend.html) and [Rendering Presets](/docs/general/render-preset.md) page for more information.

### DstBlend RGB

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Zero`/`One`/`DstColor`/`SrcColor`/`OneMinusDstColor`/`SrcAlpha`/`OneMinusSrcColor`/`DstAlpha`/`OneMinusDstAlpha`/`SrcAlphaSaturate`/`OneMinusSrcAlpha`

Which blend factors to use for the destination on the Fur. See the [Unity Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/SL-Blend.html) and [Rendering Presets](/docs/general/render-preset.md) page for more information.

### SrcBlend Alpha

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Zero`/`One`/`DstColor`/`SrcColor`/`OneMinusDstColor`/`SrcAlpha`/`OneMinusSrcColor`/`DstAlpha`/`OneMinusDstAlpha`/`SrcAlphaSaturate`/`OneMinusSrcAlpha`

Which blend factors to use for the Alpha source on the Fur. See the [Unity Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/SL-Blend.html) and [Rendering Presets](/docs/general/render-preset.md) page for more information.

### DstBlend Alpha

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Zero`/`One`/`DstColor`/`SrcColor`/`OneMinusDstColor`/`SrcAlpha`/`OneMinusSrcColor`/`DstAlpha`/`OneMinusDstAlpha`/`SrcAlphaSaturate`/`OneMinusSrcAlpha`

Which blend factors to use for the Alpha destination on the Fur. See the [Unity Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/SL-Blend.html) and [Rendering Presets](/docs/general/render-preset.md) page for more information.

### BlendOp RGB

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Add`/`Subtract`/`ReverseSubtract`/`Min`/`Max`/`LogicalClear`/`LogicalSet`/`LogicalCopy`/`LogicalCopyInverted`/`LogicalNoop`/`LogicalInvert`/`LogicalAnd`/`LogicalNand`/`LogicalOr`/`LogicalXor`/`LogicalEquivalence`/`LogicalAndReverse`/`LogicalAndInverted`/`LogicalOrReverse`/`LogicalOrInverted`/`Multiply`/`Screen`/`Overlay`/`Darken`/`Lighten`/`ColorDodge`/`ColorBurn`/`HardLight`/`SoftLight`/`Difference`/`Exclusion`/`HSLHue`/`HSLSaturation`/`HSLColor`/`HSLLuminosity`

Which blend operator to use for the RGB channels on the Fur. This is almost always set to `Add`. See the [Unity Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/SL-BlendOp.html) for more information.

### BlendOp Alpha

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Add`/`Subtract`/`ReverseSubtract`/`Min`/`Max`/`LogicalClear`/`LogicalSet`/`LogicalCopy`/`LogicalCopyInverted`/`LogicalNoop`/`LogicalInvert`/`LogicalAnd`/`LogicalNand`/`LogicalOr`/`LogicalXor`/`LogicalEquivalence`/`LogicalAndReverse`/`LogicalAndInverted`/`LogicalOrReverse`/`LogicalOrInverted`/`Multiply`/`Screen`/`Overlay`/`Darken`/`Lighten`/`ColorDodge`/`ColorBurn`/`HardLight`/`SoftLight`/`Difference`/`Exclusion`/`HSLHue`/`HSLSaturation`/`HSLColor`/`HSLLuminosity`

What blend op to use for the Alpha channel on the Fur. This is typically set by the Rendering Preset. See the [Unity Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/SL-BlendOp.html) for more information.

### ZClip

- `Type`: <PropertyIcon name="toggle" />**Toggle**
  - Default: `On`

Enables or Disables the GPU's Depth Clip Mode on the Fur, which determines how the GPU handles fragments of the Shader that are outside of the Near and Far Planes.

Learn more at [Unity's Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/SL-ZClip.html).

### ZWrite

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Off`/`On`
  - Default: Determined by [Fur Mode](#fur-mode)

Determines whether the shader should write to the depth buffer on the Fur. For Cutout, this is usually `On`, but for Transparent, this is usually `Off`.

Learn more at [Unity's Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/SL-ZWrite.html).

### ZTest

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Disabled`/`Never`/`Less`/`Equal`/`LessEqual`/`Greater`/`NotEqual`/`GreaterEqual`/`Always`
  - Default: `LessEqual`

Sets how the shader should test the depth buffer on the Fur. By default, the depth buffer is tested, and if the depth value is not less than or equal to the current value, the pixel is discarded.

Learn more at [Unity's Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/SL-ZTest.html).

### Offset Factor

- `Type`: <PropertyIcon name="float" />**Float**
  - Default: `0`

Offset factor moves where a polygon is rendered in screen-space on the Fur. This doesn't change the visual appearance of the polygon, but can be used to specially modify the depth value of the polygon.

Learn more at [Unity's Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/SL-Offset.html).

### Offset Units

- `Type`: <PropertyIcon name="float" />**Float**
  - Default: `0`

A fixed value to move the polygon away from or toward the camera, while keeping it visually the same size on the Fur.

Learn more at [Unity's Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/SL-Offset.html).

### Color Mask

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `None`/`R`/`G`/`B`/`A`/`RGB`/`RGBA`
  - Default: `Everything`

Color Mask determines which color channels should be rendered on the Fur. By default, this is set to `RGBA`, which means that all colors are rendered. All permutations of color channels are available.

Learn more at [Unity's Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/SL-ColorMask.html).

### Alpha To Mask

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Sets the Alpha to affect the Mask of the Fur.

## Stencil

:::warning Heads Up
Most, if not all properties that are listed here are the same descriptions as notated in [Stencil](/docs/rendering/stencil.md). However, these settings are completely independent of the material's overall Stencil settings.
:::

### Stencil Type

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Simple`/`Front Face vs Back Face`

This controls the type of Stencil to use, whether to keep it simple or to compare it to the Front Face against the Back Face of the mesh. For the most part, this is usually set to `Simple`.

### Stencil Reference Value

- `Type`: <PropertyIcon name="int" />**Integer**, Range: `0 - 255`, Default: `0`

What reference value to use for the stencil test. This is the value that the stencil buffer is compared to or written from.

### Stencil ReadMask Value

- `Type`: <PropertyIcon name="int" />**Integer**, Range: `0 - 255`, Default: `255`

Value used to mask what bits of the stencil buffer are read from. This is best thought of as a binary number, which is bitwise ANDed with the stencil buffer value to determine if the read tests true.

### Stencil WriteMask Value

- `Type`: <PropertyIcon name="int" />**Integer**, Range: `0 - 255`, Default: `255`

Value used to mask what bits of the stencil buffer are read from. This is best thought of as a binary number, which is bitwise ANDed with the stencil buffer value to determine if the write tests true.

For a reference on stencil read/write masks, [this thread <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://old.reddit.com/r/Unity3D/comments/mz7b4h/what_does_stencil_readmask_writemask_do/gw06pie/) provides some useful information.

### Stencil Pass Op

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Keep`/`Zero`/`Replace`/`Increment`/`Decrement`/`Invert`/`IncrementWrap`/`DecrementWrap`

Defines the operation that the GPU performs on the Stencil buffer when a pixel passes both the Stencil test and the Depth test.

### Stencil Fail Op

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Keep`/`Zero`/`Replace`/`Increment`/`Decrement`/`Invert`/`IncrementWrap`/`DecrementWrap`

Defines the operation that the GPU performs on the Stencil buffer when a pixel fails the Stencil test.

### Stencil ZFail Op

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Keep`/`Zero`/`Replace`/`Increment`/`Decrement`/`Invert`/`IncrementWrap`/`DecrementWrap`

Defines the operation that the GPU performs on the Stencil buffer when a pixel passes the Stencil test, but fails the Depth test.

### Stencil Compare Function

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Disabled`/`Never`/`Less`/`Equal`/`LessEqual`/`Greater`/`NotEqual`/`GreaterEqual`/`Always`

What comparison function to use for the stencil test. This is the function that is used to compare the reference value and the value in the stencil buffer. This can be used to create effects where the stencil buffer is used to determine if a pixel should be drawn or not.
