---
sidebar_position: 1
title: LookAt
description: Distorts the mesh to make it face towards the Camera in a billboard-like fashion.
keywords: [vertex, lookat, look at, vertex look, vertex options]
---

**LookAt** is a special Vertex Options feature that manipulates the Vertices to face towards the Camera in a billboard-like fashion. It can be used to allow your model's Eyes to always focus towards the third-person's point of view.

LookAt is considered an **Advanced Feature**. Therefore, it is not made for beginners. <!-- Please carefully read the required setup below before attempting to use LookAt. -->

:::warning Breaks with Avatar Scaling!
LookAt does not behave correctly with Avatar Scaling due to shader limitations! Therefore, you may need to do some math to account for scaling changes if opting for scaling-related Animator Parameters.
:::

<!-- WORK IN PROGRESS INSTRUCTIONS

## Required Setup

In order to use LookAt, you must set a proper Pivot Position (aka the Root Bone). This is an offset from your mesh's `Root Bone` as defined in the model's `Skinned Mesh Renderer` that your Material will be using. Without a proper Root Bone set, LookAt will not appear correctly as it will work off of the rotation of the Hips instead (not good!).

Yes, it's normal for your Eyes to disappear and appear in a strange fashion when initially enabling LookAt. So it's extremely important that you set your Pivot Position correctly. The most effective way of doing so is getting reference of your Eye's transform location and using that as your target.

:::tip Remember
The `Root Bone` of your Skinned Mesh Renderer plays an important part in how LookAt functions. Do not skip setting this up!
:::

1. Create an Empty GameObject inside one of your Eye Bones and zero out the Transform values.
2. Then, move the Empty GameObject from inside your Eye Bone into your Head Bone. Set the X value of it back to 0.
3. Set the `Root Bone` of your Skinned Mesh Renderer (where the Material is being used on) to the Empty GameObject you created.
4. You can then start calculating the X offset of the [Pivot Position](#pivot-position) based on the location of the new Root Bone you created.

// VIDEO GOES HERE //

After you finish setting up the Pivot for each Mask, you can then start manipulating the `Max Pitch (X)`, `Max Yaw (Y)`, and `Max Roll (Z)` for your Eyes. These multisliders will define the maximum area the vertices are allowed to rotate, such as when the Eyes are seen from the side.

:::tip Toggle Recommended
Because of how LookAt can have possible unpredictable vertex behavior in certain situations when always on (especially when scaling your Avatar in-game), we highly recommend controlling that behavior on the fly by creating a toggle for it. Use the [Alpha](#alpha) slider on each Mask to toggle it.

You can also control it by setting how the effect appears in VRC-specific POV's such as in Mirrors and Cameras. Set this behavior under [Visibility](#visibility).
:::

# Material Properties

-->

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

Clamps the maximum rotational Roll of the affected mask on the Z-axis (Barrel Roll).

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

Toggles the visibility of LookAt in a normal situation, without the requirement of a Mirror or a Camera. This will also affect the Editor preview.

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

## Audio Link

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables [AudioLink](/docs/audio-link/audio-link.md) to control LookAt. This will affect ALL `Alpha` properties in LookAt.

:::info
The settings in this section will only be visible when [AudioLink](/docs/audio-link/audio-link.md) is activated on the Material.
:::

### Alpha Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Choice of which Band to use for the Alpha.

### Alpha AudioLink

- `Type`: <PropertyIcon name="float2" />**Vector2**

How much to add to or subtract from the Alpha with Audio.

| Modifier | Function |
| --- | --- |
| Off | Amount changed to Alpha with No Audio in Alpha Band |
| On | Amount changed to Alpha with Max Audio in Alpha Band |