---
sidebar_position: 5
title: Vertex Options
---
import PoiVideo from '@site/src/components/PoiVideo'

# Vertex Options

The **Vertex Offset** section provides options related to the position of model vertices, and can be used to modify a material's vertices in various ways without actually modifying the mesh.

## Local Translation

How much to move the vertices of the mesh (in base units of meters) with respect to its local coordinate system, on a per-axis basis. This means that it will line up with the mesh regardless of the mesh's rotation, and will be scaled with the scaling of the mesh's axes.

## Local Rotation

How much to rotate the vertices of the mesh (in units of degrees) with respect to its local coordinate system, on a per-axis basis.

## Local Rotation Speed

How much constant rotation speed to apply to the vertices of the mesh, on a per-axis basis. This is defined in degrees per `20` seconds, so a value of `360` will complete one rotation in `20` seconds, while a value of `7200` would complete one rotation per second.

## Local Scale

How much to scale the mesh relative to its local coordinate system, on a per-axis basis. The **X**, **Y**, and **Z** value affect their respective axes, while the **W** value scales all axes uniformly.

## World Translation

How much to move the vertices of the mesh (in units of meters) with respect to the world coordinate system, on a per-axis basis. This means that it will not necissarily line up with the mesh if the mesh is rotated, and will always uniformly move the mesh regardless of the mesh's scaling.

## Vertex Height

How much to offset the vertices of the mesh (in units of meters) along the vertex normals. This will apply a constant value regardless of the mesh's scaling. The modified height is scaled by the Height Map and modified by the Mask Bias.

### Height Map

A texture used to modify the vertex height adjustment. This represents the low and high points of to be used for vertex modification.

### Mask Bias

Range: `0-1`

How much to offset the vertex height for the mask. A value of `0` will mean that the vertex height will only move up from the unmodified position. A value of `0.5` will mean the vertex height will go down by half the vertex height where the mask is pure black, up by half the vertex height where the mask is pure white. A value of `1.0` means the vertex height will only move down from the unmodified position.

## Rounding Enabled

Vertex Rounding snaps vertices to specific intervals in the world coordinate system. The amount snap interval is defined by the Division Amount. This option can be used to create retro effects, or pixelization.

### Division Amount

Defines the interval for vertex rounding. This is defined as the number of divisions per meter in world space. 

## Audio Link

## Local Translate Band

Options: `Bass/Low Mid/High Mid/Treble`

Audio Link band to use for local translation adjustments.

### Local Translate Min

Translation adjustment used when Local Translate Band has no audio.

### Local Translate Max

Translation adjustment used when Local Translate Band has max audio.

## Rotation

Options for rotating directly in response to audio link bands.

### Rotation Band X

Options: `Bass/Low Mid/High Mid/Treble`

Audio Link band to use for rotation in X.

### Rotation Band Y

Options: `Bass/Low Mid/High Mid/Treble`

Audio Link band to use for rotation in Y.

### Rotation Band Z

Options: `Bass/Low Mid/High Mid/Treble`

Audio Link band to use for rotation in Z.

## Chronotensity Rotation

Options for rotating continuously in response to audio link bands.

### Band X

Options: `Bass/Low Mid/High Mid/Treble`

Audio Link band to use for chronotensity rotation in X.

### Motion Type X

Which chronotensity motion mode to use for the X rotation. These are somewhat self descriptive, but more information is available in the [Audio Link Docs](https://github.com/llealloo/vrc-udon-audio-link/tree/master/Docs#alpass_chronotensity).

### Band Y

Options: `Bass/Low Mid/High Mid/Treble`

Audio Link band to use for chronotensity rotation in Y.

### Motion Type Y

Which chronotensity motion mode to use for the Y rotation.

### Band Z

Options: `Bass/Low Mid/High Mid/Treble`

Audio Link band to use for chronotensity rotation in Z.

### Motion Type Z

Which chronotensity motion mode to use for the Z rotation.

### Rotation Speed

Scaler for chronotensity rotation for each axis.

## Scale

Options for local vertex scaling in response to audio link.

### Scale Band

Options: `Bass/Low Mid/High Mid/Treble`

Audio Link band to use for vertex scale.

### Scale Min

Scale state used when Scale Band has no audio.

### Scale Max

Scale state used when Scale Band has max audio.

## World Translation

Options for world translation in response to audio link.

### World Translation Band

Options: `Bass/Low Mid/High Mid/Treble`

Audio Link band to use for World Translation.

### World Translation Min

World Translation state used when Scale Band has no audio.

### World Translation Max

World Translation state used when Scale Band has max audio.

## Vertex Height

Options for vertex height in response to audio link.

### Vertex Height Band

Options: `Bass/Low Mid/High Mid/Treble`

Audio Link band to use for World Translation.

### Vertex Height

How much to add (or subtract) from vertex height. The **X** value is the height added with no volume in the Vertex Height Band, and the **Y** value is the height added with maximum volume.

## Rounding

Options for rounding in response to audio link.

### Rounding Band

Options: `Bass/Low Mid/High Mid/Treble`

Audio Link band to use for World Translation.

### Rounding Range

How much to add (or subtract) from vertex rounding. The **X** value is the height added with no volume in the Vertex Height Band, and the **Y** value is the height added with maximum volume.
