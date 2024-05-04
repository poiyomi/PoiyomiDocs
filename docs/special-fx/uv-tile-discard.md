---
sidebar_position: 1
title: UV Tile Discard
---
import PoiVideo from '@site/src/components/PoiVideo' 

UV Tile Discard (previously known as UDIM Discard) provides an efficient way to toggle portions of a model on and off at runtime. This is done by placing portions of the model on different UV Tiles, and then discarding specific tiles at runtime.

Traditionally, UDIMs are used to create a grid of tiles, with specific textures placed on different tiles. UV Tile Discard simply uses the concept of UV tiles, not doing anything with any textures. You can learn more about UV Tiles and UDIMs from [Foundry Learn](https://learn.foundry.com/modo/901/content/help/pages/uving/udim_workflow.html).

:::caution Known Issues with Screen-Space AO
UV Tile Discard can have some side-effects in Worlds that use a heavy amount of Screen-Space AO Post Processing. If a Tile is discarded in a World with this, heavy shadows will be visible around the discarded area.

Although many Worlds in VRChat do not utilize Screen-Space AO, a small percentage still do. Keep this in mind when using this feature.
:::

## Discard UV

- `Type`: **Dropdown**, Options: `UV0`/`UV1`/`UV2`/`UV3`

Which UV to draw from for discarding. This can be the base UV or an alternative UV made specifically for UV Tile discard.

## Discard Mode

- `Type`: **Dropdown**, Options: `Vertex (Faster)`/`Pixel (Slower)`

Defines how the discarding is performed. Generally, this should be set to `Vertex` unless there is a good reason to use `Pixel`.

`Vertex` mode discards the vertices that are inside the discard UV by evicting the vertices (and any attached triangles) to an invalid position, causing the GPU to never run the fragment shader stage. This is faster than `Pixel` mode, but is not exact to UV tile edges.

`Pixel` mode discards the pixels that are inside the discard UV by using the `clip` HLSL operation. This performs the discarding in the fragment shader, which is slower than `Vertex` mode, but is exact to UV tile edges.

## Discard Coordinates

- `Type`: **Checkboxes**

Defines which UV tiles to discard. These are organized into 4 rows (v) of 4 tiles (u), defining a grid of 16 discard tiles. The bottom left is the origin, and the top right is the maximum. The bottom left tile (0,0) is where most UV mapping is performed.

When a box is checked, that tile is discarded. When animating these checkboxes, each one is its own independent property.


## UV Tile Setup

For an example of a correct setup using Blender, we can take an existing mesh, and add an extra UV channel to it:

<PoiVideo url='/vid/special-fx/uv-tile-discard_setup_blender1.mp4'/>

While it's not strictly necessary, the `UDIM Grid` setting allows us to visualise our tiles. To change this setting your mesh has to be in `Edit Mode`. In blender 3.2 and later, this setting can be found in the overlays dropdown.

![Overlays](/img/special-fx/uv-tile-discard_overlays.png)

On that extra UV channel, move different UV islands to different uv tiles. Using whole number offsets lets you map textures to it, but since we made an alternate UV, all that's necessary is that the islands are on different UV tiles:

<PoiVideo url='/vid/special-fx/uv-tile-discard_setup_blender2.mp4'/>

With the UVs set up, we can use enable UV tile discard on the material, set the UV to the one we created (they're matched by slot position), and use UV tile discard successfully:

<PoiVideo url='/vid/special-fx/uv-tile-discard_setup_unity1.mp4'/>
