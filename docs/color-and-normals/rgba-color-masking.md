---
sidebar_position: 7
title: RGBA Color Masking
description: RGBA Color Masking provides flexible ways to apply different Color Tints, Textures, and Normals within the Material without affecting Alpha.
keywords: [rgba, color, masking, tint, texture, normals, poiyomi, shader]
---

RGBA Color Masking provides a flexible way to apply different color tints, textures, and normal maps with the main color. This allows the user to seamlessly blend between Materials for situations where the need for blending vertex colors is necessary and for consolidating Detail Normals for greater efficiency.

By default, all 4 channels of RGBA color masking will be set to pure white and `1.0` alpha. Any unused channels should be disabled.

:::info Changes in 9.0
RGBA Color Masking has been completely redone from scratch as of Poiyomi 9.0.

If you are upgrading from previous versions, please take the time to go over the newly reorganized properties as documented below.
:::

## Using RGBA Color Masking

Usage of RGBA Color Masking can greatly increase efficiency for various types of usage scenarios. Community member **Teeh** has put together this video that demonstrates how to use RGBA Color Masking, which you can watch below:

<div class="videobox">
<iframe class="iframe-element" src="https://www.youtube-nocookie.com/embed/3efrO8dauec?si=TO5iXVR7NWWw4xNw" title="YouTube Video Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

# Material Properties

Below are the list of properties available to use in RGBA Color Masking.

## Mask Type

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Texture`/`Vertex Colors`

### Texture

Use a Texture Mask to set the RGBA Mask. If enabled, it exposes the [Masks](#masks) slot.

### Vertex Colors

Use the mesh's [Vertex Colors](/docs/vertex-options/vertex-colors.md) to set the RGBA Mask.

:::note Linear Vertex Colors Recommended
When using Vertex Colors as the RGBA Mask, make sure the Color Attributes on the Mesh are in **Linear** Color so that the shader can accurately read them.
:::

## Masks and Maps

### Masks

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB OFF`)

Slot for the masks that you wish to use for your RGBA Masking. This will only be exposed when Mask Type is set to Texture.

:::info
This slot is only exposed when **Mask Type** is set to `Texture`.
:::

### Metallic Maps

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB OFF`)

Slot to use for Metallics & Smoothness effect on your RGBA Masks. Use this for the Metallics mapping in each channel.

### Smoothness Maps

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB OFF`)

Slot to use for Metallics & Smoothness effect on your RGBA Masks. Use this for the Smoothness mapping in each channel.

## Channel Module

:::info Documentation Info
The following properties below will appear for each Channel you are customizing. We will refer to them as **"Channel"** on this Documentation. This means the word **"Channel"** would be the RGBA Mask Channel, such as `Red`, `Green`, `Blue`, or `Alpha`.
:::

### Channel

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables the mentioned Channel to be used.

### Scale & Offset

- `Type`: <PropertyIcon name="float4" />**Float4**
  - Default: `X = 1`, `Y = 1`, `Z = 0`, `W = 0`

Determines both the Scale and Offset of the affected area.

| Coordinate | Function |
| --- | --- |
| X | Scale on the X-axis |
| Y | Scale on the Y-axis |
| Z | Offset value on the X-axis |
| W | Offset value on the Y-axis |

### Blend Mode

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Replace`/`Darken`/`Multiply`/`Lighten`/`Screen`/`Subtract`/`Add`/`Overlay`/`Mixed`

Choice of Blend mode you wish to use for this channel.

### Color

- `Type`: <PropertyIcon name="color" />**Color**

Set the Color of the Channel to use.

### Texture

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB ON`)

Texture to use for the **Channel** masked area. This is pure white by default, if a texture is not defined.

### Normal

- `Type`: <PropertyIcon name="texture" />**Normal Map** Texture (`sRGB OFF`)

Normal Map texture to be used for the **Channel** masked area.

#### Blend Mode

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Replace`/`Blend All`/`Blend Base Normal`

Adjust how the Normal Map blends with the Base, also defined by your RGBA Mask. **Expand the Normal Texture Slot to see this property.**

`Replace` is the default setting, overwriting the Normals already existing on your Base with the one defined instead.

If set to `Blend Base Normal`, it will combine the bump Normal with the Base Normal of your Material, if defined.

If set to `Blend All`, it will combine the bump Normal with ALL Normals of your Material.

### Normal Intensity

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 10.0`

Intensity for the Normals in your mask, if defined.

By default, a standard Normal intensity would be `1`, for reference.

### Emission Strength

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 20.0`

Set the Emission strength to the masked area. High values can create a "bloom" effect in worlds with Post Processing.

### Metallics & Smoothness

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables the usage of your [Metallic Map](#metallic-maps) and [Smoothness Map](#smoothness-maps) to be used in the Channel, if defined.

#### Custom Sampling

- `Type`: <PropertyIcon name="toggle" />**Toggle**

If enabled, exposes more options for sampling your Metallic Maps and Smoothness Maps.