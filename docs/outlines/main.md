---
sidebar_position: 1
title: Outlines
---
import PoiVideo from '@site/src/components/PoiVideo'

The Outline feature creates outlines using a simplified pass with the mesh offset by a small amount. This is also known as an "Inverted Hull" outline.

For smooth meshes, the inverted hull technique works well, but for hard-edged models, it can have noticable seams. To correct this, you can bake a version of the mesh with smoothed normals baked into the vertex color, using the Poi Vertex Color Baker. This will overwrite other vertex color data, and will create a unique version of the mesh.

:::tip
**To use outlines, choose an outline shader variant!**

Outline variants are separated from the main shader because they add a pass that's not necessary for the main shader.
:::

## Mode

- `Type`: **Dropdown**, Options: `Basic`/`Tint`/`Rim Light`/`Directional`/`Drop Shadow`

Changes the mode of the outline.

### Basic

Default mode. The width of the outline is constant around the model.

### Tint

Basic, but with the base color of the vertex applied as a tint to the outline color.

#### Tint Mix

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to mix the base color with the outline color. At 0, no tint is applied. At 1, the base color tint is fully applied.

*Only available when mode is set to `Tint`.*

### Rim Light

Rim Light actually uses the direction of the light to determine the width of the outline. Outlines will be thicker in the direction of the light. The color of the outline will be tinted with a value between the direct light color and the base color, according to the **Rim Light Blend.**

#### Rim Light Blend

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to blend between the base color and the direct light color as the tint of the outline. At 0, the outline will be tinted with the base color. At 1, the outline will be tinted with the direct light color.

*Only available when mode is set to `Rim Light`.*

### Directional

Directional is similar to Rim Light in that it biases the outline to a specific direction, but the **Directional Offset** directly specifies what direction to use.

#### Directional Offset X Y

- `Type`: **Vector4** (Only `X`/`Y` used)

Direction to use for the outline. Calculated from only the X (horizontal) and Y (vertical) values.

### Drop Shadow

Drop Shadow is similar to Directional in that it biases the outline to a specific direction, but drop shadow moves the outline in X, Y, and Z, instead of specifying a direction to bias the thickness.

In Drop Shadow mode, the **Width** is *not* used.

#### Drop Direction X Y

- `Type`: **Vector4** (Only `X`/`Y`/`Z` used)

How much to offset the outline in the X, Y, and Z directions, in unity base units.

## Fixed Size

- `Type`: **Checkbox**

Enables a fixed screen-space size for outlines, such that outlines do not get smaller when moving away from the model.

## Fixed Size Max Distance

- `Type`: **Float**

How far away from the model to use the fixed size outlines. Beyond this distance, the outlines will properly scale with distance.

## Vertex Color

- `Type`: **Dropdown**, Options: `Off`/`Normals`/`Mask VC.r`

How to use the vertex colors of the model, if they've been specially prepared.

- `Off`: No vertex color data is used.
- `Normals`: The (smoothed) vertex colors are used as the normal data.
- `Mask VC.r`: The vertex colors are used as the mask data. The mask data is the red channel of the vertex colors.

## Enable Lighting

- `Type`: **Checkbox**

Enables lighting for the outline. This darkens the outline color in shadowed areas.

## Width

- `Type`: **Float**

Width of the outline, in unity base units (scaled down by 100).

## Color

- `Type`: **Color**

Base color of the outline. Mixed in various ways depending on the **Mode** settings.

## Outline Emission

- `Type`: **Float**

How much emission the outline should have. Creates a glowing effect, especially in worlds with post-processing bloom.

## Outline Texture

- `Type`: **Color** Texture (sRGB **ON**)

Texture to use for the outline. This is tinted by the **Color** setting.

## Outline Mask

- `Type`: **Data** Texture (sRGB **OFF**)

Mask that determines the thickness of the outline in various places on the model.

Note that this determines the outline width *per-vertex*, not per-pixel.

## Shadow Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

How much shadows should be mixed into the outline color.

## Hue Shift

- `Type`: **Checkbox**

Enableas hue shifting of the outline color.

### Shift

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to shift the base color around the hue circle.

This value is circular, and will have the same result at `0` and `1`.

### Shift Speed

- `Type`: **Float**

How much to constantly shift the decal hue with time. A value of 1 will result in a full hue shift cycle every 20 seconds.

## Advanced

These settings are for advanced usage, and generally don't need to be modified.

### Clip 0 Width

- `Type`: **Checkbox**

Enables clipping of the outline if a vertex has `0` outline width.

### Override Base Alpha

- `Type`: **Checkbox**

Sets the base fragment alpha to the outline's alpha value.

### Cam Z Offset

- `Type`: **Float**

How much to offset the camera Z position when rendering the outline. This is useful for giving control over the clipping of the outline.

### Outline Distance Fade

- `Type`: **Vector2**

Determines how much to fade the outline based on distance.

### Cull

- `Type`: **Dropdown**, Options: `Off`/`Front`/`Back`

Which faces to cull. For the inverted hull technique, this should be set to `Front`.

### Offset Factor

- `Type`: **Float**

*Currently Unused.*

### Offset Units

- `Type`: **Float**

*Currently Unused.*
