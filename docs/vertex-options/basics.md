---
sidebar_position: 0
title: Basics & Fun
description: Basic properties that can manipulate the Mesh's Vertices.
keywords: [vertex, vertices, options, offset, vertex options, poiyomi, shader]
---

**Vertex Options** provides properties related to the position of a model vertices, and can be used to manipulate a material's vertices in various ways without actually modifying the mesh.

This section can be described by Poiyomi as *"the silly options"* due to the amount of weird and strange things that can be accomplished with Vertex Options.

:::note Z-fighting Issues
Vertex Options can cause nasty Z-fighting when seen against projection-based shaders, as they re-render the mesh using a shader of their own. This is a known limitation in Unity.
:::

<ReactVideo src='/vid/color-and-normals/VertexOptionsDemo.webm'/>
<em>Demonstration of two Material Spheres being manipulated by various settings.</em>

## Local Translation

- `Type`: <PropertyIcon name="float3" />**Vector3**

How much to move the vertices of the mesh (in units of meters) with respect to its local coordinate system, on a per-axis basis. This means that it will line up with the mesh regardless of the mesh's rotation, and will be scaled with the scaling of the mesh's axes.

## World Translation

- `Type`: <PropertyIcon name="float3" />**Vector3**

How much to move the vertices of the mesh (in units of meters) with respect to the world coordinate system, on a per-axis basis. This means that it will not necessarily line up with the mesh if the mesh is rotated, and will always uniformly move the mesh regardless of the mesh's scaling.

## Scale

- `Type`: <PropertyIcon name="float4" />**Vector4**

How much to scale the mesh relative to its local coordinate system, on a per-axis basis. The **X**, **Y**, and **Z** value affect their respective axes, while the **W** value scales all axes uniformly.

## Rotation

- `Type`: <PropertyIcon name="float3" />**Vector3**

How much to rotate the vertices of the mesh (in units of degrees) with respect to its local coordinate system, on a per-axis basis.

## Rotation Speed

- `Type`: <PropertyIcon name="float3" />**Vector3**

How much constant rotation speed to apply to the vertices of the mesh, on a per-axis basis. This is defined in degrees per `20` seconds, so a value of `360` will complete one rotation in `20` seconds, while a value of `7200` would complete one rotation per second.

<!-- Height Map Section -->

## Height Map

### Height Map

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = Off`)

A texture used to modify the vertex height adjustment. This represents the low and high points to be used for vertex modification.

### Height

- `Type`: <PropertyIcon name="float" />**Float**

How much to offset the vertices of the mesh (in units of meters) along the vertex normals. This will apply a constant value regardless of the mesh's scaling. The modified height is scaled by the Height Map and modified by the Mask Bias.

### Map Bias

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

How much to offset the vertex height for the mask. A value of `0` will mean that the vertex height will only move up from the unmodified position. A value of `0.5` will mean the vertex height will go down by half the vertex height where the mask is pure black, up by half the vertex height where the mask is pure white. A value of `1.0` means the vertex height will only move down from the unmodified position.

<!-- Vertex Rounding Section -->

## Vertex Rounding (Blocky/PS1)

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Vertex Rounding snaps vertices to specific intervals in the world coordinate system. The amount of snap interval is defined by the Rounding Interval. This option can be used to create retro effects or pixelation.

<ReactVideo src='/vid/color-and-normals/VertexOptionsPS1Mode.webm'/>
<em>Example of how adjusting the Rounding Interval can influence how many pixelation is performed.</em>

### Rounding Space

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Local`/`World`

Defines where to calculate the Rounding Interval from. If set to `Local`, it will calculate from the scale of the Mesh it's using. If set to `World`, it will calculate from the World's scale.

### Rounding Interval

- `Type`: <PropertyIcon name="float" />**Float**

Defines the interval for vertex rounding. This is defined as the distance between points in local space, in base units of meters. For example, a value of `0.1` will round vertices to the nearest tenth of a meter (if the object is scaled uniformly).

<!-- Barrel Distortion Section -->

## Barrel Distortion

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Barrel Distortion allows the vertices to snap and morph the mesh into a cylinder/barrel-shape form.

<ReactVideo src='/vid/color-and-normals/VertexOptionsBarrelAMOGUS.webm'/>
<em>Example of what Barrel Distortion will do to the mesh. Notice how it makes it shape close to a cylinder.</em>

### Barrel Width

- `Type`: <PropertyIcon name="float" />**Float**

The width of the Barrel in world space, measured in meters.

### Barrel Alpha

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Determines how much to distort and morph into the barrel-shape.

### Barrel Height

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Determines how much to stretch the edges of the "barrel" outside of the shape.

<!-- Sphere Distortion Section -->

## Sphere Distortion

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables the ability to snap and morph the mesh into a spherical shape and form.

<ReactVideo src='/vid/color-and-normals/VertexOptionsSphere.webm'/>
<em>Example of Sphere Distortion. Notice how adjusting the settings can make it morph closer to an actual Sphere, based on the Sphere Center defined.</em>

### Sphere Radius

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Determines how circular the spherical shape is morphed into.

### Sphere Height

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Determines how tall the spherical shape is morphed.

### Sphere Alpha

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Main slider. Determines how much to distort and morph into a spherical shape and form.

### Sphere Center

- `Type`: <PropertyIcon name="float3" />**Vector3**

Determines the center origin of the morphed spherical shape and form in the local axis.

<!-- Tornado Section -->

## Tornado

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables the ability to morph the mesh into an animated swirling funnel, or a "Tornado" effect.

:::note Follows Y-axis
The location of the [Top Height](#top-height) and [Bottom Height](#bottom-height) is determined by the current direction of the Y-axis on the mesh.
:::

<ReactVideo src='/vid/color-and-normals/VertexOptionsTornado.webm'/>
<em>Example of the swirling funnel effect created by the Tornado function.</em>

### Radius

- `Type`: <PropertyIcon name="float" />**Float**

Determines the maximum width of the funnel.

### Spiral Intensity

- `Type`: <PropertyIcon name="float" />**Float**

Determines the visual intensity of the funnel. Lower values are less intensive and can emulate a funky water effect, while values over `100` will intensify the swirl even further to emulate a twister.

### Rotation Speed

- `Type`: <PropertyIcon name="float" />**Float**

How fast should each swirl rotate. The higher the value, the faster the swirl.

### Top Height

- `Type`: <PropertyIcon name="float" />**Float**

Determines the top height of the funnel.

### Bottom Height

- `Type`: <PropertyIcon name="float" />**Float**

Determines the bottom lower height of the funnel.

<!-- Audio Link Section -->

## Audio Link

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables the ability to manipulate the Vertex Options in response to Audio Link.

:::info
The settings in this section will only be visible when [Audio Link](/docs/audio-link/audio-link.md) is activated on the Material.
:::

<ReactVideo src='/vid/color-and-normals/VertexOptionsAudioLink.webm'/>
<em>Example of Audio Link making two sides of the Sphere look like a Subwoofer by using the Local Translation modifier. (Un-mute to hear Audio)</em>

### Local Translation

Options for adjusting the Local Translation in response to Audio Link bands.

#### Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Audio Link Band to use for Local Translation adjustments.

#### Translation Min

- `Type`: <PropertyIcon name="float3" />**Vector3**

Translation adjustment used when Local Translate Band has no audio.

#### Translation Max

- `Type`: <PropertyIcon name="float3" />**Vector3**

Translation adjustment used when Local Translate Band has max audio.

### Local Rotation

Options for rotating directly in response to Audio Link bands.

#### Band X

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Audio Link band to use for rotation in X.

#### Band Y

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Audio Link band to use for rotation in Y.

#### Band Z

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Audio Link band to use for rotation in Z.

#### Rotation

- `Type`: <PropertyIcon name="float3" />**Vector3**

How much the rotation to apply to the vertices of the mesh, on a per-axis basis, for the given band. 

### Continuous Rotation

Options for rotating continuously in response to Audio Link bands.

#### Band X

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Audio Link band to use for continuous rotation in X.

#### Motion Type X

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**

Which continuous motion mode to use for the X rotation.

<details>
<summary><b>Motion Type X Options</b></summary>

- Motion Increases as intensity of the band increases
- Above but Smooth
- Motion moves back and forth as a function of intensity
- Above but Smoooth
- Fixed Speed Increase when the band is dark Stationary when light
- Above but Smooooth
- Fixed Speed Increase when the band is dark Fixed speed decrease when light

</details>

#### Band Y

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Audio Link band to use for continuous rotation in Y.

#### Motion Type Y

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**

Which continuous motion mode to use for the Y rotation.

<details>
<summary><b>Motion Type Y Options</b></summary>

- Motion Increases as intensity of the band increases
- Above but Smooth
- Motion moves back and forth as a function of intensity
- Above but Smoooth
- Fixed Speed Increase when the band is dark Stationary when light
- Above but Smooooth
- Fixed Speed Increase when the band is dark Fixed speed decrease when light

</details>

#### Band Z

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Audio Link band to use for continuous rotation in Z.

#### Motion Type Z

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**

Which continuous motion mode to use for the Z rotation.

<details>
<summary><b>Motion Type Z Options</b></summary>

- Motion Increases as intensity of the band increases
- Above but Smooth
- Motion moves back and forth as a function of intensity
- Above but Smoooth
- Fixed Speed Increase when the band is dark Stationary when light
- Above but Smooooth
- Fixed Speed Increase when the band is dark Fixed speed decrease when light

</details>

#### Rotation

- `Type`: <PropertyIcon name="float3" />**Vector3**

Scaler for continuous rotation on each axis.

### Vertex Scale

Options for local vertex scaling in response to Audio Link.

#### Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Audio Link band to use for vertex scale.

#### Scale Min

- `Type`: <PropertyIcon name="float3" />**Vector3**

Scale state used when Scale Band has no audio.

#### Scale Max

- `Type`: <PropertyIcon name="float3" />**Vector3**

Scale state used when Scale Band has max audio.

### World Translation

Options for world translation in response to Audio Link.

#### Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Audio Link band to use for World Translation.

#### World Translation Min

- `Type`: <PropertyIcon name="float3" />**Vector3**

World Translation state used when Scale Band has no audio.

#### World Translation Max

- `Type`: <PropertyIcon name="float3" />**Vector3**

World Translation state used when Scale Band has max audio.

### Vertex Height

Options for vertex height in response to Audio Link.

#### Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Audio Link band to use for World Translation.

#### Height

- `Type`: <PropertyIcon name="float2" />**Vector2**

How much to add (or subtract) from vertex height. The **X** value is the height added with no volume in the Vertex Height Band, and the **Y** value is the height added with maximum volume.

### Vertex Rounding

Options for rounding in response to Audio Link.

#### Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Audio Link band to use for World Translation.

#### Range

- `Type`: <PropertyIcon name="float2" />**Vector2**

How much to add (or subtract) from vertex rounding. The **X** value is the height added with no volume in the Vertex Height Band, and the **Y** value is the height added with maximum volume.

### Spectrum Motion

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables a very interesting effect where the entirety of the Mesh is morphed to look like a visualizer in response to Audio Link.

#### UV

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `UV0`/`UV1`/`UV2`/`UV3`

Selection of UV to use. This selection will determine which vertices the Spectrum Motion will affect.

#### UV Direction

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `X`/`Y`

Which direction on the UV will Spectrum Motion be manipulated from. `X` will be the left-right direction of the UV, while `Y` will be the up-down direction of the UV.

#### Offset Min

- `Type`: <PropertyIcon name="float4" />**Vector4**

How much to offset the Spectrum Motion when no audio is present.

#### Offset Max

- `Type` <PropertyIcon name="float4" />**Vector4**

How much to offset the Spectrum Motion when full audio from Audio Link peaks.