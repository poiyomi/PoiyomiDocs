---
sidebar_position: 3
title: Lil Fur
description: The Lil Fur Shader enables simulation of fabrics and hairs using a specialized technique from LilToon.
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

The Fur Normal Map determines the direction of the Fur.

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

Sets how much the Fur will face down from the force of gravity.

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

Sets the degree of amount to apply shading to the fur.

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

### DstBlend RGB

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Zero`/`One`/`DstColor`/`SrcColor`/`OneMinusDstColor`/`SrcAlpha`/`OneMinusSrcColor`/`DstAlpha`/`OneMinusDstAlpha`/`SrcAlphaSaturate`/`OneMinusSrcAlpha`

### SrcBlend Alpha

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Zero`/`One`/`DstColor`/`SrcColor`/`OneMinusDstColor`/`SrcAlpha`/`OneMinusSrcColor`/`DstAlpha`/`OneMinusDstAlpha`/`SrcAlphaSaturate`/`OneMinusSrcAlpha`

### DstBlend Alpha

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Zero`/`One`/`DstColor`/`SrcColor`/`OneMinusDstColor`/`SrcAlpha`/`OneMinusSrcColor`/`DstAlpha`/`OneMinusDstAlpha`/`SrcAlphaSaturate`/`OneMinusSrcAlpha`

### BlendOp RGB

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Add`/`Subtract`/`ReverseSubtract`/`Min`/`Max`/`LogicalClear`/`LogicalSet`/`LogicalCopy`/`LogicalCopyInverted`/`LogicalNoop`/`LogicalInvert`/`LogicalAnd`/`LogicalNand`/`LogicalOr`/`LogicalXor`/`LogicalEquivalence`/`LogicalAndReverse`/`LogicalAndInverted`/`LogicalOrReverse`/`LogicalOrInverted`/`Multiply`/`Screen`/`Overlay`/`Darken`/`Lighten`/`ColorDodge`/`ColorBurn`/`HardLight`/`SoftLight`/`Difference`/`Exclusion`/`HSLHue`/`HSLSaturation`/`HSLColor`/`HSLLuminosity`

### BlendOp Alpha

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Add`/`Subtract`/`ReverseSubtract`/`Min`/`Max`/`LogicalClear`/`LogicalSet`/`LogicalCopy`/`LogicalCopyInverted`/`LogicalNoop`/`LogicalInvert`/`LogicalAnd`/`LogicalNand`/`LogicalOr`/`LogicalXor`/`LogicalEquivalence`/`LogicalAndReverse`/`LogicalAndInverted`/`LogicalOrReverse`/`LogicalOrInverted`/`Multiply`/`Screen`/`Overlay`/`Darken`/`Lighten`/`ColorDodge`/`ColorBurn`/`HardLight`/`SoftLight`/`Difference`/`Exclusion`/`HSLHue`/`HSLSaturation`/`HSLColor`/`HSLLuminosity`

### ZClip

- `Type`: <PropertyIcon name="toggle" />**Toggle**
  - Default: `On`

### ZWrite

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Off`/`On`
  - Default: Determined by [Fur Mode](#fur-mode)

### ZTest

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Disabled`/`Never`/`Less`/`Equal`/`LessEqual`/`Greater`/`NotEqual`/`GreaterEqual`/`Always`
  - Default: `LessEqual`

### Offset Factor

- `Type`: <PropertyIcon name="float" />**Float**
  - Default: `0`

### Offset Units

- `Type`: <PropertyIcon name="float" />**Float**
  - Default: `0`

### Color Mask

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `None`/`R`/`G`/`B`/`A`/`RGB`/`RGBA`
  - Default: `Everything`

### Alpha To Mask

- `Type`: <PropertyIcon name="toggle" />**Toggle**

## Stencil

:::warning Heads Up
Most, if not all properties that are listed here are the same descriptions as notated in [Stencil](/docs/rendering/stencil.md). However, these settings are completely independent of the material's overall Stencil settings.
:::

### Stencil Type

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Simple`/`Front Face vs Back Face`

### Stencil Reference Value

- `Type`: <PropertyIcon name="int" />**Integer**, Range: `0 - 255`, Default: `0`

### Stencil ReadMask Value

- `Type`: <PropertyIcon name="int" />**Integer**, Range: `0 - 255`, Default: `255`

### Stencil WriteMask Value

- `Type`: <PropertyIcon name="int" />**Integer**, Range: `0 - 255`, Default: `255`

### Stencil Pass Op

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Keep`/`Zero`/`Replace`/`Increment`/`Decrement`/`Invert`/`IncrementWrap`/`DecrementWrap`

### Stencil Fail Op

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Keep`/`Zero`/`Replace`/`Increment`/`Decrement`/`Invert`/`IncrementWrap`/`DecrementWrap`

### Stencil ZFail Op

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Keep`/`Zero`/`Replace`/`Increment`/`Decrement`/`Invert`/`IncrementWrap`/`DecrementWrap`

### Stencil Compare Function

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Disabled`/`Never`/`Less`/`Equal`/`LessEqual`/`Greater`/`NotEqual`/`GreaterEqual`/`Always`
