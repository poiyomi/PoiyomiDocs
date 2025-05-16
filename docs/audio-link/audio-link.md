---
sidebar_position: 1
title: AudioLink
description: AudioLink features for Poiyomi Toon Shader.
keywords: [audiolink, audio, link, udon audiolink, poiyomi]
---
import PoiVideo from '@site/src/components/PoiVideo'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

AudioLink is a system that analyzes and processes in-world audio into many different highly reactive data streams and exposes the data to both Udon and custom shaders. For Avatars, this allows the ability to create a wide variety of visual effects that react to in-world audio in real time.

*For more information on AudioLink, visit the website at [https://audiolink.dev/ <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://audiolink.dev/) or view the [GitHub Repository <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://github.com/llealloo/audiolink)*

In Poiyomi Shaders, there are various features that support AudioLink. However, they will only be available when [AudioLink is activated on the Material](#audiolink).

<PoiVideo url='/vid/audio-link/ALDemo-MoveYourBody-Short.mp4'/>
<em>Demonstration of various AudioLink effects on this Avatar, with the AudioLink Controller on the left. (Un-mute to hear sound)</em>

## AudioLink

- `Type`: **Boolean**

If enabled, activates AudioLink features and exposes AudioLink parameter controls for supported modules and effects.

:::info
When this feature activates, the following sections in Poiyomi Shaders will have their AudioLink properties exposed for you to use. Refer to each of their Documentation Entries for more information.
- [Color Adjust](/docs/color-and-normals/color-adjust.md#hue-shift-audio-link)
- [Alpha Options](/docs/color-and-normals/alpha-options.md#alpha-audio-link)
- [Vertex Options](/docs/color-and-normals/vertex-options.md#audio-link)
- [Vertex Glitching](/docs/color-and-normals/vertex-glitching.md#audio-link)
- [Decals](/docs/color-and-normals/decals.md#audiolink)
- [Matcap](/docs/shading/matcap.md#audiolink)
- [Rim Lighting](/docs/shading/rim-lighting.md#audiolink)
- [Outlines](/docs/outlines/outlines.md#audiolink)
- [Dissolve](/docs/special-fx/dissolve.md#audiolink)
- [Flipbook](/docs/special-fx/flipbook.md#audio-link)
- [Emission](/docs/special-fx/emission.md#audio-link)
- [Glitter / Sparkle](/docs/special-fx/glitter.md#audiolink)
- [Pathing](/docs/special-fx/pathing.md#audio-link)
- [Voronoi](/docs/special-fx/voronoi.md#audio-link)
- [Truchet](/docs/special-fx/truchet.md#audiolink)
:::

### Anim Toggle

- `Type`: **Boolean**

<!-- 
EDITORS NOTE: This H2 Header only has this Message Box below. Adding additional words above or below it may make it look repetitive. -BluWizard10
-->

:::tip
Animate this checkbox when creating toggles for AudioLink on this Material. Animating the [Section Header](/docs/general/locking.md#section-header-checkboxes) will not work!
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

Properties that allow animated overrides of the Audio Bands against AudioLink data from the World.

### Band Overrides

- `Type`: **Boolean**

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

<div class="videobox">
<iframe class="iframe-element" src="https://www.youtube-nocookie.com/embed/Gp1woO9RzGY?si=TO5iXVR7NWWw4xNw" title="YouTube Video Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

### Instructions

Here are text instructions on how to set up AudioLink, as explained in the video above:

1. Use the VRChat Creator Companion and click **Manage Project** for your Unity Project.
2. Under **Manage Project**, ensure you have **Curated** enabled in your `Selected Repos`. Look for `AudioLink` in your list.
3. Click the + Button on the listing for `AudioLink` to add it to your project.
    - *If you cannot use Creator Companion, you can alternatively download the AudioLink "Minimal" Unity Package and install it to your Project. Get it here: https://github.com/llealloo/vrc-udon-audio-link/releases*
4. Launch Unity.
5. In Unity, on the Menu Bar, click `Tools -> AudioLink -> Add AudioLink Prefab to Scene`. A prefab named `AudioLinkAvatar` should be added to your Scene.
    - *Alternatively, you can add `AudioLinkAvatar.prefab` to your Scene by navigating in your Project Files to `Packages/AudioLink/Runtime`. You can then drag & drop the `AudioLinkAvatar.prefab` Prefab from there into your Scene's Hierarchy.*
6. If you haven't already, activate AudioLink on your Poiyomi Material(s).
7. Enter Play Mode and a music track should be audible. If you hear this, then AudioLink is now playing.

As the audio plays, you can fiddle around with the AudioLink settings on your Material while the music is continuously playing in the background. As you do this, the changes should be instantly reflected on your Avatar.

:::danger Only use Play Mode to test AudioLink!
While in Play Mode, nothing will be saved other than your Materials. Make sure you exit Play Mode before you intend to do further edits to your Avatar!
:::

### Changing the Music

If you are not a fan of the music that is playing, feel free to change it! To do this, expand the `AudioLinkAvatar` Object in your Hierarchy. Select the Object named `AudioLinkYtdlpPlayer`.

You can then change the URL from the Inspector. Paste the new URL into the field as shown below. If you're already in Play Mode, click `Reload URL` to switch it.

<a target="_blank" href="/img/audio-link/AudioLinkAvatarPrefabCap.png">
<img src="/img/audio-link/AudioLinkAvatarPrefabCap.png" alt="AudioLinkAvatar Prefab Ytdlp Player" width="600px"/>
</a>
<br></br>
<a target="_blank" href="/img/audio-link/theYtdlpPlayer.png">
<img src="/img/audio-link/theYtdlpPlayer.png" alt="Ytdlp URL field" width="600px"/>
</a>

### Using a Custom YTDL Location

The `AudioLinkAvatar` Prefab uses the [yt-dlp](https://github.com/yt-dlp) plugin from VRChat's installation files in order to test AudioLink in Unity. However oftentimes, the plugin provided by VRChat may sometimes break due to YouTube's destructive changes to the format. In cases where this happens, you can manually download the latest `yt-dlp.exe` and use it as the executable instead of the potentially outdated version provided by VRChat.

:::warning Only do this if AudioLink is not working!
Setting a Custom YTDL Location is intended for Advanced Users. You do not need to do this if AudioLink is already working normally!
:::

1. Download the latest version of the `yt-dlp.exe` executable from the [GitHub Repository](https://github.com/yt-dlp/yt-dlp/releases).
2. Place it in a location somewhere on your Computer that you'll remember.
3. In Unity, navigate to the Menu option `Tools -> AudioLink -> Select Custom YTDL Location`. This will open a pop-up window asking you to locate the `yt-dlp.exe` program that you downloaded.
   - *Keep in mind, this is a global setting! It will apply to ALL Unity Projects!*
4. If successful, the Menu option `Select Custom YTDL Location` will show a checkmark. This is indicating it's now using the custom `yt-dlp.exe` you've chosen.
5. Enter Play Mode and cross your fingers!

To debug if it's pointing to the custom location, select the `AudioLinkYtdlpPlayer` GameObject in the Scene and a Info message should appear in the Console. It may say something like, "`[AudioLink:ytdlp] Custom YTDL location found: J:/ytdlp.exe`"

If later on you wish to go back to using VRChat's provided `yt-dlp.exe` instead, click the option `Tools -> AudioLink -> Select Custom YTDL Location` again to disable it.