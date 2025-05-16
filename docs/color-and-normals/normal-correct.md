---
sidebar_position: 8
title: Normal Correct
description: Normal Correct is used to force normals of the mesh to point towards a specific direction.
keywords: [normals, normal, normal correction, correction]
---

Normal Correct forces the normals of the mesh to point towards a certain direction. This can have the effect of "flattening" out the shading, commonly only useful for getting more out of toon shading on faces.

## Normal Correct Amount

- `Type`: **Float**, Range: `0.0 - 1.0`

Controls the intensity of how much it alters the normals.

## Origin

- `Type`: **Float3**

The point that acts as the center will be where the normals are aligned outwards from, on the XYZ axis.

:::info
The "center" of the Origin is an offset from the `Root Bone` of your mesh. This means the effect will appear differently depending on the specified `Root Bone` your mesh is set to.
:::