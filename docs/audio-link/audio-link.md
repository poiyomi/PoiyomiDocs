---
sidebar_position: 1
title: AudioLink
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

AudioLink is a system that analyzes and processes in-world audio into many different highly reactive data streams and exposes the data to VRChat Udon, world shaders, and avatar shaders. For more information on AudioLink visit https://audiolink.dev/

There are various features in Poiyomi Shaders that support AudioLink effects. However, they will only be exposed when AudioLink is activated on the Material.

## AudioLink

- `Type`: **Checkbox**

If enabled, activates AudioLink features and exposes AudioLink parameter controls for supported modules and effects.

:::info
When this feature activates, the following sections in Poiyomi Shaders will have their AudioLink properties exposed for you to use. Refer to their Documentation Entries for more information.
- [Alpha Options](../color-and-normals/alpha-options)
- [Vertex Options](../color-and-normals/vertex-options)
- Vertex Glitcing
- [Decals](../color-and-normals/decals.md)
- [Matcap / Sphere Textures](../shading/matcap.md)
- [Rim Lighting](../shading/rim-lighting.md)
- [Outlines](../outlines/main.md)
- [Dissolve](../special-fx/dissolve.md)
- [Flipbook](../special-fx/flipbook.md)
- [Emission](../special-fx/emission.md)
- [Glitter / Sparkle](../special-fx/glitter.md)
- [Pathing](../special-fx/pathing.md)
- Voroni
:::

### Anim Toggle

- `Type`: **Checkbox**

Toggleable AudioLink checkbox. Used to enable and disable AudioLink effects on the fly.

:::tip
You can use this checkbox to turn AudioLink effects On or Off using Animations on the fly. See [Locking and Animation](https://www.poiyomi.com/general/locking#marking-properties-for-animation) for more information.
:::

## Smoothing

### Bass

- `Type`: **Float**, Range: `0.0 - 1.0`

Modifier for smoothing the Bass Band.

### Low Mid

- `Type`: **Float**, Range: `0.0 - 1.0`

Modifier for smoothing the Low Mid Band.

### High Mid

- `Type`: **Float**, Range: `0.0 - 1.0`

Modifier for smoothing the High Mid Band.

### Treble

- `Type`: **Float**, Range: `0.0 - 1.0`

Modifier for smoothing the Treble Band.

## Overrides

Animatable sections that allow manual override of the Audio Bands against AudioLink data from the World.

### Band Overrides

- `Type`: **Checkbox**

Enables the Band Overrides function. These sliders will manually override the mentioned Band as if music is playing, except that now you're manually animating it's values.

This can be useful if you for some reason wish to use the `Voice` VRChat Parameter to also animate the forementioned Overrides in your Animator. As an example, you could use `Voice` to make those Bands have an effect when you speak.

<details>
<summary><b>Band Overrides Options</b></summary>

#### Bass

- `Type`: **Float4**, Range: `0.0 - 1.0`

How much to override the Bass Band. A value greater than `0` will override the Band to the specified value.

#### Low Mid

- `Type`: **Float4**, Range: `0.0 - 1.0`

How much to override the Low Mid Band. A value greater than `0` will override the Band to the specified value.

#### High Mid

- `Type`: **Float4**, Range: `0.0 - 1.0`

How much to override the High Mid Band. A value greater than `0` will override the Band to the specified value.

#### Treble

- `Type`: **Float4**, Range: `0.0 - 1.0`

How much to override the Treble Band. A value greater than `0` will override the Band to the specified value.

</details>

<!---------- HOW TO SECTION ---------->

## How to test AudioLink using Poiyomi Shaders

In order to see how AudioLink functions on your Material, you must set up the AudioLink package in Unity.

Below is a Video Tutorial on how to set it up, courtesy of Community Member **Teeh**.
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Gp1woO9RzGY?si=TO5iXVR7NWWw4xNw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Instructions

Here are text instructions on how to set up AudioLink, as explained in the video above:

1. Use the VRChat Creator Companion and click **Manage Project** for your Unity Project.
2. Under **Manage Project**, ensure you have **Curated** enabled in your `Selected Repos`. Look for `AudioLink` in your list.
3. Click the + Button on the listing for `AudioLink` to add it to your project.
    - *If you cannot use Creator Companion, you can alternatively download the AudioLink "Minimal" Unity Package and install it to your Project. Get it here: https://github.com/llealloo/vrc-udon-audio-link/releases*
4. Launch Unity.
    - *You may receive a dialogue asking to "Upgrade AudioLink compatible Shaders" or similar. It doesn't matter which one you select, but for now click `No Thanks`.*
5. In Unity, on the Menu Bar, click `Tools -> AudioLink -> Add AudioLink Prefab to Scene`. A prefab named `AudioLinkAvatar` should be added to your Scene.
    - *Alternatively, you can add `AudioLinkAvatar.prefab` to your Scene by navigating in your Project Files to `Packages/AudioLink/Runtime`. You can then drag & drop the `AudioLinkAvatar.prefab` Prefab from there into your Scene's Hierarchy.*
6. If you haven't already, activate AudioLink on your Poiyomi Material(s).
7. Enter Play Mode and a music track should be audible. If you hear this, then AudioLink is now playing.

As the audio plays, you can fiddle around with the AudioLink settings on your Material while the music is continuously playing in the background. As you do this, the changes should be instantly reflected on your Avatar.

:::danger
While in Play Mode, nothing will be saved other than your Materials. Make sure you exit Play Mode before you intend to do further edits to your Avatar!
:::

:::tip
If you are not a fan of the music that is playing, feel free to change it! To do this, expand the `AudioLinkAvatar` Object in your Hierarchy. Select the Object named `AudioLinkYtdlpPlayer`.

You can then change the URL from the Inspector. Paste the new URL into the field as shown below. If you're already in Play Mode, click `Reload URL` to switch it.

![AudioLinkAvatar Prefab](/img/audio-link/AudioLinkAvatarPrefabCap.png)
![YtdlpPlayer Screenshot](/img/audio-link/theYtdlpPlayer.png)
:::