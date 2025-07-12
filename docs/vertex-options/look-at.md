---
sidebar_position: 1
title: LookAt
description: Distorts the mesh to make it face towards the Camera in a billboard-like fashion.
keywords: [vertex, lookat, look at, vertex look, vertex options]
draft: true
---

<!-- THIS PAGE IS A DRAFT! CONTRIBUTORS, PLEASE ADD INFO. -->

**LookAt** is a special Vertex Options feature that manipulates the Vertices to face towards the Camera in a billboard-like fashion.

:::note Known Z-fighting Issues
Vertex Options can cause nasty Z-fighting issues when seen against projection-based shaders, as they re-render the mesh using a shader of their own. This is a known limitation in Unity.
:::

<!-- Ensure Pivot Point is set for this to work (e.g Skinned Mesh Renderer Root Bone) 

Best to turn off Mipmaps for Eye Masks. Otherwise, other parts of the Model could start deforming. Vertex Colors could fix this issue.

Doesn't work with with Avatar Scaling.

-->

## Look-At Mask

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = Off`)

Mask slot that determines the Controls for each of the Channels defined in the Mask.

## Controls (Color Mask)

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables the Controls for the mentioned Mask.

:::info Documentation Info
The following properties below will appear for each Color Mask you are customizing the Controls for.
:::

### Alpha

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Description.

### Target Up Direction

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `View Dir Up`, `World Up`, `Camera Up`, `Model Up`

Description.

### Forward Direction

- `Type`: <PropertyIcon name="float3" />**Vector3**

Description.

### Up Direction

- `Type`: <PropertyIcon name="float3" />**Vector3**

Description.

### Pivot Position

- `Type`: <PropertyIcon name="float3" />**Vector3**

Description.

### View From Position

- `Type`: <PropertyIcon name="float3" />**Vector3**

Description.

### Distance Falloff

- `Type`: <PropertyIcon name="float2" />**Vector2**

Description.

### FoV Falloff

- `Type`: <PropertyIcon name="float2" />**Vector2**

Description.

### Max Pitch (X)

- `Type`: <PropertyIcon name="multislider" />**Multislider**, Range: `-180 - 180`

Description.

### Max Yaw (Y)

- `Type`: <PropertyIcon name="multislider" />**Multislider**, Range: `-180 - 180`

Description.

### Max Roll (Z)

- `Type`: <PropertyIcon name="multislider" />**Multislider**, Range: `-180 - 180`

Description.

## Visibility

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables the visbility modifier, which includes features similar to the [Mirror/Camera Visibility](/docs/special-fx/mirror.md) feature. This can affect how LookAt appears either Normally, in the Mirror, or in the Camera.

### Mode

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `VRC`/`Generic`

Sets the behavioral mode for the LookAt visibility.

- `VRC`: Changes settings that cater to VRChat-specific functionality.
- `Generic`: Changes settings that are for general usages, with limited options available.

### VRC: Mode Settings

These settings below will show if [Mode](#mode) is set to `VRC`.

#### Normal (Outside Mirror/Camera)

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Toggles the visibility of LookAt in a normal situation, without the requirement of a Mirror or a Camera.

#### Mirror (VR)

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Toggles the visibility of LookAt in the Mirror in VR.

#### Mirror (Desktop)

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Toggles the visibility of LookAt in the Mirror while on Desktop Mode.

#### Camera (VR)

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Toggles the visibility of LookAt in Cameras in VR.

#### Camera (Desktop)

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Toggles the visibility of LookAt in Cameras while on Desktop Mode.

#### Screenshot

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Toggles the visibility of LookAt in Screenshots.

### Generic: Mode Settings

These settings below will show if [Mode](#mode) is set to `Generic`.

#### Mirror Visibility

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Show In Both`/`Show Only In Mirror`/`Don't Show In Mirror`

Mode to use for the LookAt visibility.

<details>
<summary><b>Mirror Visibility Options</b></summary>

- `Show In Both`: LookAt will be shown both outside and inside the mirror.
- `Show Only In Mirror`: LookAt will only be shown inside the mirror.
- `Don't Show In Mirror`: LookAt will only be shown outside the mirror.

</details>