---
title: Download & Install
description: Where to Download and Install Poiyomi Toon Shader.
keywords: [download, install, update, poiyomi, shader]
hide_table_of_contents: true
---

The latest version of Poiyomi Toon Shader can be installed in one of two ways. Choose one of the methods below that you prefer.

## Method 1. Manual Unity Package

<div style={{marginBottom: '20px'}}>

<a class="button button--primary" href="https://discord.gg/poiyomi" target="_blank"><FAIcon icon="fa-brands fa-discord"/> Join the Discord</a>&nbsp;<a class="button button--outline button--secondary" href="https://github.com/poiyomi/PoiyomiToonShader/releases/latest" target="_blank"><FAIcon icon="fa-solid fa-circle-down"/> Download from GitHub</a>&nbsp;<a class="button button--outline button--secondary" href="https://poiyomi.booth.pm/items/4841309" target="_blank"><FAIcon icon="fa-solid fa-circle-down"/> Download from BOOTH</a>

</div>

1. Join the [Poiyomi Discord Server](https://discord.gg/poiyomi) and download the latest `.unitypackage` posted in `#free-shader` channel.
    - OR you can download a stable, but likely outdated version of Poiyomi Toon Shader from either [GitHub](https://github.com/poiyomi/PoiyomiToonShader/releases/latest) or [BOOTH](https://poiyomi.booth.pm/items/4841309).
2. Import the Unity Package into your Unity Project from the Menu Bar via `Assets > Import Package > Custom Package`.
3. Click `Import` when prompted.
4. Done! Enjoy using Poiyomi Shaders.

### Upgrading the Shader Unity Package

When replacing or upgrading versions, you must do the following:
1. Delete the `Assets/_PoiyomiShaders` folder in your Project. **DO NOT SKIP THIS STEP!**
2. Import the newest Unity Package into your Project from the Menu Bar via `Assets > Import Package > Custom Package`.
3. Click `Import` when prompted.
4. Done! You are now on the latest version.

:::danger
**DO NOT ATTEMPT to import Poiyomi Shaders over another, or your project may break!**
:::

## Method 2. Creator Companion

<div style={{marginBottom: '20px'}}>

<a class="button button--primary" href="vcc://vpm/addRepo?url=https%3A%2F%2Fpoiyomi.github.io/vpm/index.json"><FAIcon icon="fa-solid fa-square-arrow-up-right"/> Add to VCC</a>

</div>

1. Click the `Add to VCC` button above to add Poiyomi Toon Shader to the Creator Companion. The button will open the Creator Companion App.
    - Didn't work? In the VCC, go to `Settings > Packages > Add Repository`, type in `https://poiyomi.github.io/vpm/index.json` and then click `Add`.
2. When Prompted, click the button labeled `I Understand, Add Respository`.
3. In the list, make sure `Poiyomi's VPM Repo` is checkmarked.
4. Find your Project in the VCC Project List, click `Manage Project`, then click the `+` button on `Poiyomi Toon Shader` to add it to your project.
5. Done! Launch your Project after the Package is resolved. Enjoy using Poiyomi Shaders.

### Upgrading the Shader via VCC

To update the VCC Version later on, simply return to `Manage Project` and click the green-highlighted version to update to the specified version.

:::note
The VCC version of Poiyomi Shaders will automatically replace any existing copy of the `_PoiyomiShaders` folder in your Project's Assets in favor of the VCC Version, if it exists. Keep this in mind if you have any other versions, such as the Pro version, in your Project.
:::

## Poiyomi Pro

The Pro version of the shader (also known as Poiyomi Pro) is a Paid Version of the shader, available as a subscription model for $10/month on Patreon.

<div style={{marginBottom: '20px'}}>

<a class="button button--warning" href="https://www.patreon.com/poiyomi" target="_blank"><FAIcon icon="fa-brands fa-patreon"/> Subscribe on Patreon ($10/month)</a>&nbsp;<a class="button button--secondary" href="https://discord.gg/poiyomi" target="_blank"><FAIcon icon="fa-brands fa-discord"/> Join the Discord</a>

</div>

:::info Pro Shader is only available exclusively through Discord
In order to download Poiyomi Pro, you must:
1. Subscribe to the [Poiyomi Patreon](https://www.patreon.com/poiyomi) for $10/month USD.
2. Link your Patreon Account to your Discord Account.
3. Join the [Poiyomi Discord Server](https://discord.gg/poiyomi) in order to gain access to the `#paid-shader` channel, where you can then download it. **Only Pro Versions of the Shader will be offered through Discord, and will never be distributed from anywhere else.**

As a reminder, the Pro Shader only includes extra features. Therefore, it is not required if you are trying to access features already available in the Free version.
:::

:::danger Incompatible with VCC Repo
As Poiyomi Pro is exclusive to Discord, it is incompatible with the VCC Version of Poiyomi Toon.

You must uninstall Poiyomi Toon from the VCC prior to importing Poiyomi Pro!

**DO NOT ATTEMPT TO IMPORT BOTH VERSIONS OR YOUR PROJECT MAY BREAK!**
:::

### Patreon Features Chart

To see the different features offered between the Free vs. Pro version, refer to the table below:

| Role Access | Public | $2/month | $5/month | $10/month | $20/month | $50/month |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Toon/Pro Features** | | Nano | Micro | Mega | Giga | Tera |
| [Flipbook](/docs/special-fx/flipbook.md), [Dissolve](/docs/special-fx/dissolve.md), Panosphere, [Glitter](/docs/special-fx/glitter.md), [Voronoi](/docs/special-fx/voronoi.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Text Overlay, [Mirror](/docs/special-fx/mirror.md), [Distance/Angular Fade](/docs/color-and-normals/alpha-options.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| UV Distortion, [Vertex Glitching](/docs/color-and-normals/vertex-glitching.md), Black Light Mask | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [AudioLink](/docs/audio-link/audio-link.md), [Global Themes](/docs/modifiers/global-themes.md) and [Global Masks](/docs/modifiers/global-masks.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [UV Tile Discard](/docs/special-fx/uv-tile-discard.md), [Depth Bulge/FX](/docs/special-fx/depth-bulge.md), [Pathing](/docs/special-fx/pathing.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Stats Overlay](/docs/special-fx/stats-overlay.md), [Proximity Color](/docs/special-fx/proximity-color.md), [Internal Parallax](/docs/special-fx/internal-parallax.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Video Effects](/docs/special-fx/video-effects.md), Stochastic Sampling, UV Options+ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Grab Pass](/docs/extended-features/grabpass.md), [LTCGI](/docs/shading/ltcgi.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Parallax Heightmapping](/docs/modifiers/uvs/parallax.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [RGBA Color Masking](/docs/color-and-normals/rgba-color-masking.md), [Decals](/docs/color-and-normals/decals.md), [Color Adjust (Hue Shift)](/docs/color-and-normals/color-adjust.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Opaque, Cutout, TransClipping, Fade, Transparent | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Additive, Soft Additive, Multiplicative, 2x Multiplicative | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Pro Features** | | | | | | |
| [Screen Space Ambient Occlusion](/docs/shading/ssao.md) | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Two-Pass Transparency | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Custom Modules | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| [Geometric Dissolve](/docs/extended-features/geometric-dissolve.md) | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| [Fur and World Fur](/docs/extended-features/fur.md) | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Shatterwave | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Tessellated | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Tessellated Geometric | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Wireframe | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| DPS/TPS | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| NameTag | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Cubed | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| EyeFX | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Particle2 (7.3 Only) | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Spawn In (7.3 Only) | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| **Extras** | | | | | | |
| StencilInvis | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Can Request a New Feature | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Prioritized Features and Shader Request | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |