---
sidebar_position: 8
title: RGBA Color Masking
description: RGBA Color Masking provides flexible ways to apply different Color Tints, Textures, and Normals within the Material without affecting Alpha.
keywords: [rgba, color, masking, tint, texture, normals, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

RGBA Color Masking provides a flexible way to apply different color tints, textures, and normal maps with the main color. This does not affect the alpha of the material.

By default, all 4 channels of RGBA color masking will be set to pure white and `1.0` alpha. Any unused channels should be disabled.

:::info Changes in 9.0
RGBA Color Masking has been completely redone from scratch as of Poiyomi 9.0.

If you are upgrading from previous versions, please take the time to go over the newly reorganized properties as documented below.
:::

## Mask Type

- `Type`: **Dropdown**, Options: `Texture`/`Vertex Colors`

### Texture

Use a Texture Mask to set the RGBA Mask. If enabled, it exposes the Masks slot.

### Vertex Colors

Use the mesh's Vertex Colors to set the RGBA Mask.

## Masks and Maps

### Masks

- `Type`: **Data** Texture (`sRGB OFF`)

Slot for the masks that you wish to use for your RGBA Masking. This will only be exposed when Mask Type is set to Texture.

:::info
This slot is only exposed when **Mask Type** is set to `Texture`.
:::

### Metallic Maps

- `Type`: **Data** Texture (`sRGB OFF`)

Slot to use for Metallics & Smoothness effect on your RGBA Masks. Use this for the Metallics mapping in each channel.

### Smoothness Maps

- `Type`: **Data** Texture (`sRGB OFF`)

Slot to use for Metallics & Smoothness effect on your RGBA Masks. Use this for the Smoothness mapping in each channel.

## Channel Module

These following properties will appear for each Channel you are customizing. We will refer them to **"Channel"** on this Documentation. This means the word **Channel** would be the RGBA Mask Channel, such as `Red`, `Green`, `Blue`, or `Alpha`.

Please take the time to understand how these settings work and how to use them.

### Channel

- `Type`: **Checkbox**

Enables the mentioned Channel to be used.

### Blend Mode

- `Type`: **Dropdown**, Options: `Replace`/`Darken`/`Multiply`/`Lighten`/`Screen`/`Subtract`/`Add`/`Overlay`/`Mixed`

Choice of Blend mode you wish to use for this channel.

### Color

- `Type`: **Color**

Set the Color of the Channel to use.

### Texture

- `Type`: **Data** Texture (`sRGB ON`)

Texture to use for the **Channel** masked area. This is pure white by default, if a texture is not defined.

### Normal

- `Type`: **Normal Map** Texture (`sRGB OFF`)

Normal Map texture to be used for the **Channel** masked area.

#### Blend Mode

- `Type`: **Dropdown**, Options: `Replace`/`Blend`

Adjust how the Normal Map blends with the Base, also defined by your RGBA Mask. **Expand the Normal Texture Slot to see this property.**

`Replace` is the default setting, overwriting the Normals already existing on your Base with the one defined instead.

If set to `Blend`, it will combine the bump Normal with the Base Normal of your Material, if defined.

### Normal Intensity

- `Type`: **Float**, Range: `0.0 - 10.0`

Intensity for the Normals in your mask, if defined.

By default, a standard Normal intensity would be `1`, for reference.

### Emission Strength

- `Type`: **Float**, Range: `0.0 - 20.0`

Set the Emission strength to the masked area. High values can create a "bloom" effect in worlds with Post Processing.

### Metallics & Smoothness

- `Type`: **Checkbox**

Enables the usage of your [Metallic Map](#metallic-maps) and [Smoothness Map](#smoothness-maps) to be used in the Channel, if defined.

#### Custom Sampling

- `Type`: **Checkbox**

If enabled, exposes more options for sampling your Metallic Maps and Smoothness Maps.