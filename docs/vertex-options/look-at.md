---
sidebar_position: 1
title: LookAt
description: Distorts the mesh to make it face towards the Camera in a billboard-like fashion.
keywords: [vertex, lookat, look at, vertex look, vertex options]
draft: true
---

<!-- THIS PAGE IS A DRAFT! CONTRIBUTORS, PLEASE ADD INFO. -->

**LookAt** is a special Vertex Options feature that manipulates the Vertices to face towards the Camera in a billboard-like fashion. It can be used to allow your model's Eyes to always focus towards the third-person's point of view.

LookAt is considered an **Advanced Feature**. Therefore, it is not made for beginners. Please carefully read the required setup below before attempting to use LookAt.

:::danger Breaks with Avatar Scaling
LookAt does not work with Avatar Scaling! Therefore, you may need to do some math to account for scaling changes if opting for scaling-related Animator Parameters.
:::

<!-- Ensure Pivot Point is set for this to work (e.g Skinned Mesh Renderer Root Bone) 

Best to turn off Mipmaps for Eye Masks. Otherwise, other parts of the Model could start deforming. Vertex Colors could fix this issue.

Doesn't work with with Avatar Scaling.

-->

## Required Setup

In order to use LookAt, you must set a proper Pivot Point. This is an offset from your mesh's `Root Bone` as defined in the model's `Skinned Mesh Renderer` that your Material will be using.

## Look-At Mask

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = Off`)

Mask slot that determines the Controls for each of the Channels defined in the Mask.

:::warning Mipmapping Issues
Mipmaps can create vertex-related issues on LookAt, causing possible neighboring parts to start deforming. Therefore, it may be beneficial to turn off `Generate Mipmaps` for this texture.
:::

## Controls (Color Mask)

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables the Controls for the mentioned Mask.

:::info Documentation Info
The following properties below will appear for each Color Mask you are customizing the Controls for. They are independent of each other.
:::

### Alpha

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Controls the overall visibility of the LookAt effect. `0` would be no effect, `0.5` would be half of the effect, and `1.0` would be the full effect.

:::tip
Animate this slider when creating toggles for LookAt on this Material. Animating the [Section Header](/docs/general/locking.md#section-header-checkboxes) will not work!
:::

### Target Up Direction

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `View Dir Up`, `World Up`, `Camera Up`, `Model Up`

Sets the target upwards direction for the LookAt.

### Forward Direction

- `Type`: <PropertyIcon name="float3" />**Vector3**

Sets the forwards direction of LookAt. By default, this would be `Z = 1`, as this is the common forward direction in Unity.

### Up Direction

- `Type`: <PropertyIcon name="float3" />**Vector3**

Sets the upwards direction of LookAt. By default, this would be `Y = 1`, as this is the common upwards direction in Unity.

### Pivot Position

- `Type`: <PropertyIcon name="float3" />**Vector3**

Sets the main Pivot of the area affected by the Mask.

### View From Position

- `Type`: <PropertyIcon name="float3" />**Vector3**

Sets how the Pivot should focus to the camera, like a rotational offset.

### Distance Falloff

- `Type`: <PropertyIcon name="float2" />**Vector2**

Controls the falloff distance of LookAt.

### FoV Falloff

- `Type`: <PropertyIcon name="float2" />**Vector2**

Controls the Field of View falloff.

### Max Pitch (X)

- `Type`: <PropertyIcon name="multislider" />**Multislider**, Range: `-180 - 180`

Clamps the maximum rotational Pitch of the affected mask on the X-axis (Up/Down).

### Max Yaw (Y)

- `Type`: <PropertyIcon name="multislider" />**Multislider**, Range: `-180 - 180`

Clamps the maximum rotational Yaw of the affected mask on the Y-axis (Left/Right).

### Max Roll (Z)

- `Type`: <PropertyIcon name="multislider" />**Multislider**, Range: `-180 - 180`

Clamps the maximum rotational Roll of the affected mask on the Z-axis (Camera Rotation).

## Visibility

- `Type`: <PropertyIcon name="toggle" />**Toggle**WW

Enables the visibility modifier, which includes features similar to the [Mirror/Camera Visibility](/docs/special-fx/mirror.md) feature. This can affect how LookAt appears either Normally, in the Mirror, or in the Camera.

Use this section to specifically control how LookAt should appear in specific scenarios.

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