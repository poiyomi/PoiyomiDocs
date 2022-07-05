---
sidebar_position: 1
title: UDIM Discard
---
import PoiVideo from '@site/src/components/PoiVideo' 

UDIM Discard, or UV Tile Discarding, provides an efficient way to discard portions of a model at runtime. This is done by placing portions of the model on different UV Tiles, and then discarding specific tiles at runtime.

Traditionally, UDIMs are used to create a grid of tiles, with specific textures placed on different tiles. UDIM discard simply uses the concept of UV tiles, not doing anything with any textures. You can learn more about UV Tiles and UDIMs from [Foundry Learn](https://learn.foundry.com/modo/901/content/help/pages/uving/udim_workflow.html).

:::caution
When **Animating Discard Coordinates**, make sure to [read the notes below](#animating-discard-coordinates)! Unity's Animator has some bugs that affect UDIM discard.
:::

## Discard UV

- `Type`: **Dropdown**, Options: `UV0`/`UV1`/`UV2`/`UV3`

Which UV to draw from for discarding. This can be the base UV or a secondary UV made specifically for UDIM discard.

## Discard Mode

- `Type`: **Dropdown**, Options: `Pixel`/`Vertex`

Defines how the discarding is performed. Generally, this should be set to `Vertex` unless there is a good reason to use `Pixel`.

`Vertex` mode discards the vertices that are inside the discard UV by evicting the vertices (and any attached triangles) to an invalid position, causing the GPU to never run the fragment shader stage. This is faster than `Pixel` mode, but is not exact to UV tile edges.

`Pixel` mode discards the pixels that are inside the discard UV by using the `clip` HLSL operation. This performs the discarding in the fragment shader, which is slower than `Vertex` mode, but is exact to UV tile edges.

## Discard Coordinates

- `Type`: **Checkboxes**

Defines which UV tiles to discard. These are organized into 4 rows of 4 tiles, defining a grid of 16 discard tiles. The bottom left is the origin, and the top right is the maximum. The bottom left tile (0,0) is where most UV mapping is performed.

### Animating Discard Coordinates

Because Unity's Animator has some bugs that affect UDIM discard, it is recommended to animate the discard coordinates in a specific way.

When using **Write Defaults OFF**, each discard coordinate can be animated separately, but if only one channel is ever written, it can leave the other channels in an indeterminate state during certain animator situations - most notably, within VRChat, when an avatar is loading in or calibrating. This can cause all four channels to be written to `0`/Off, which can cause all 4 tiles to disappear, potentially causing the avatar to appear to be missing, or clothes to be gone.

This can be prevented by either animating all four channels in all states, or by forcing the discard coordinates to be written to `1`/On in a layer that evaluates before the actual layer that sets the discard properties.

When using **Write Defaults ON**, all four channels in a discard row should always be animated. Otherwise, unused channels will return to the written default state.
