---
title: Download & Install
description: Where to Download and Install Poiyomi Toon Shader.
keywords: [download, install, update, poiyomi, shader]
hide_table_of_contents: true
---

The latest version of Poiyomi Shaders can be installed in one of two ways. Two different versions are offered in terms of feature availability. Choose one of the methods below that you prefer.

## Method 1. Manual Unity Package

<div style={{marginBottom: '20px'}}>

<a class="button button--primary" href="https://discord.gg/poiyomi" target="_blank"><FAIcon icon="fa-brands fa-discord"/> Join the Discord</a>&nbsp;<a class="button button--outline button--secondary" href="https://github.com/poiyomi/PoiyomiToonShader/releases/latest" target="_blank"><FAIcon icon="fa-solid fa-circle-down"/> Download from GitHub</a>&nbsp;<a class="button button--outline button--secondary" href="https://poiyomi.booth.pm/items/4841309" target="_blank"><FAIcon icon="fa-solid fa-circle-down"/> Download from BOOTH</a>

</div>

1. Join the [Poiyomi Discord Server](https://discord.gg/poiyomi) and download the latest `.unitypackage` posted in `#free-shader` channel.
    - OR you can download a stable, but likely outdated version of Poiyomi Toon Shader from either [GitHub <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://github.com/poiyomi/PoiyomiToonShader/releases/latest) or [BOOTH <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://poiyomi.booth.pm/items/4841309).
2. Import the Unity Package into your Unity Project from the Menu Bar via `Assets > Import Package > Custom Package`.
3. Click `Import` when prompted.
4. Done! Enjoy using Poiyomi Shaders.

If you are encountering an issue where the shader cannot be imported due to a script telling you "it already exists in the project," please follow the steps below.

### Updating the Shader Unity Package

When replacing or upgrading versions, you must do the following:
1. Delete the `Assets/_PoiyomiShaders` folder in your Project. **DO NOT SKIP THIS STEP!**
   - *Sometimes, Avatar Creators may attempt to hide the folder elsewhere in the project. If this is the case, make sure you delete it!*
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

1. Click the `Add to VCC` button above to add Poiyomi Toon Shader to the Creator Companion. The button will open the Creator Companion App of your choice.
    - Didn't work? In the VCC, go to `Settings > Packages > Add Repository`, type in `https://poiyomi.github.io/vpm/index.json` and then click `Add`.
2. When Prompted, click the button labeled `I Understand, Add Respository`.
3. In the list, make sure `Poiyomi's VPM Repo` is checkmarked.
4. Find your Project in the VCC Project List, click `Manage Project`, then click the `+` button on `Poiyomi Toon Shader` to add it to your project.
5. Done! Launch your Project after the Package is resolved. Enjoy using Poiyomi Shaders.

### Upgrading the Shader via VCC

To update the VCC Version later on, simply return to `Manage Project` and click the green-highlighted version to update to the specified version.

:::warning
The VCC version of Poiyomi Shaders will automatically replace any existing copy of the `_PoiyomiShaders` folder in your Project's Assets in favor of the VCC Version, if it exists. Keep this in mind if you have any other versions, such as the Pro version, in your Project.
:::

## Poiyomi Pro

The Pro version of the shader (also known as Poiyomi Pro) is a Paid Version of the shader, available as a subscription model for $10/month on Patreon. It contains extra special features that are [outlined below](#features-chart).

Before using Poiyomi Pro, please ensure you agree to the [EULA](/docs/terms-of-service/terms-of-service.md#pro-version).

<div style={{marginBottom: '20px'}}>

<a class="button button--warning" href="https://www.patreon.com/poiyomi" target="_blank"><FAIcon icon="fa-brands fa-patreon"/> Subscribe on Patreon ($10/month)</a>&nbsp;<a class="button button--secondary" href="https://pro.poiyomi.com/" target="_blank"><FAIcon icon="fa-solid fa-key"/> Log In</a>

</div>

In order to download and install Poiyomi Pro, please follow these updated instructions:
1. Subscribe to the shader on [Patreon <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://www.patreon.com/poiyomi) for $10/month USD or higher.
2. Login to [pro.poiyomi.com <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://pro.poiyomi.com/) and follow the instructions to authenticate with your Patreon Account.
   - *If you don't see the pop-up Patreon Login window, check with your Browser to see if a pop-up window was blocked.*
3. If successful, you can then immediately download the latest version of the Pro shader by going to the Downloads page.
4. You may now proceed with **Step 2** of installing Poiyomi Shaders as described above in [Method 1.](#method-1-manual-unity-package)

- If you use Discord, please link your Discord to your Patreon Account. **This is required if you wish to receive Tech Support on the Pro version!**
   - *If successfully linked, you'll receive a fancy role, some perks, and access to the `#paid-shader` channel where you can also download the Pro shader from.*

**Only Pro Versions will be offered through <u>pro.poiyomi.com</u> or through <u>Discord</u>, and will never be distributed anywhere else!**

As a reminder, the Pro Shader only includes extra features. Therefore, it is not required if you are trying to access features already available in the Free version.

:::warning Currently Incompatible with VCC Version
The VCC version of Poiyomi Pro is currently under development. In the meantime, you must uninstall Poiyomi Toon from VCC prior to importing Poiyomi Pro!

**DO NOT ATTEMPT TO IMPORT BOTH TOON AND PRO VERSIONS OR YOUR PROJECT MAY BREAK!**
:::

By using Poiyomi Pro, you agree to the EULA stated [here](/docs/terms-of-service/terms-of-service.md#pro-version).

### Features Chart

To see the different features offered between the Free vs. Pro version, refer to the table below:

| Role Access | Public | $2/month | $5/month | $10/month | $20/month | $50/month |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Toon/Pro Features** | | Nano | Micro | Mega | Giga | Tera |
| [Color & Normals](/docs/color-and-normals/color-and-normals.md), [Color Adjust (Hue Shift)](/docs/color-and-normals/color-adjust.md), [Details](/docs/color-and-normals/details.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Alpha Options](/docs/color-and-normals/alpha-options.md), [Back Face](/docs/color-and-normals/back-face.md), [Normal Correct](/docs/color-and-normals/normal-correct.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Decals](/docs/color-and-normals/decals.md), [RGBA Color Masking](/docs/color-and-normals/rgba-color-masking.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Anisotropics](/docs/shading/anisotropics.md), [Matcaps](/docs/shading/matcap.md), [CubeMap](/docs/shading/cubemap.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Rim Lighting](/docs/shading/rim-lighting.md), [Depth Rim Lighting](/docs/shading/depth-rim-lighting.md), [Subsurface Scattering](/docs/shading/subsurface-scattering.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Reflections & Specular](/docs/shading/reflections-and-specular.md), [Clear Coat](/docs/shading/clear-coat.md), [Environmental Rim](/docs/shading/environmental-rim.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Stylized Reflections](/docs/shading/stylized-reflections.md), [Backlight](/docs/shading/backlight.md), [LTCGI](/docs/shading/ltcgi.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Outlines](/docs/outlines/outlines.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [UV Tile Discard](/docs/special-fx/uv-tile-discard.md), [Proximity Color](/docs/special-fx/proximity-color.md), [Mirror/Camera Visibility](/docs/special-fx/mirror.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Depth Bulge](/docs/special-fx/depth-bulge.md), [Depth FX](/docs/special-fx/depth-fx.md), [Internal Parallax](/docs/special-fx/internal-parallax.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Emissions](/docs/special-fx/emission.md), [Glitter/Sparkle](/docs/special-fx/glitter.md), [Dissolve](/docs/special-fx/dissolve.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Flipbook](/docs/special-fx/flipbook.md), [Pathing](/docs/special-fx/pathing.md), [Stats Overlay](/docs/special-fx/stats-overlay.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Stats Overlay](/docs/special-fx/stats-overlay.md), [Video Effects](/docs/special-fx/video-effects.md), [Voronoi](/docs/special-fx/voronoi.md), [Truchet](/docs/special-fx/truchet.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Audio Link](/docs/audio-link/audio-link.md), [Global Themes](/docs/modifiers/global-themes.md), [Global Mask](/docs/modifiers/global-masks.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [VRC Light Volumes <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://github.com/REDSIM/VRCLightVolumes) Support | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [BlackLight Masking](/docs/modifiers/blacklight-masking.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Stochastic Sampling, Distortion UV, Panosphere UV, Polar UV | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Parallax Heightmapping](/docs/modifiers/uvs/parallax.md), [Post Processing Animations](/docs/modifiers/post-processing/pp-animations.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Vertex Options |  |  |  |  |  |  |
| [Basics & Fun](/docs/vertex-options/basics.md), [Glitching](/docs/vertex-options/glitching.md), [LookAt](/docs/vertex-options/look-at.md), [Vertex Colors](/docs/vertex-options/vertex-colors.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Shading Styles](/docs/shading/main.md) |  |  |  |  |  |  |
| Texture Ramp, Multilayer Math, Wrapped, Skin | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| ShadeMap, Flat, Realistic, Cloth, SDF | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Rendering Presets](/docs/general/render-preset.md) |  |  |  |  |  |  |
| Opaque, Cutout, TransClipping, Fade, Transparent | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Additive, Soft Additive, Multiplicative, 2x Multiplicative | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Two Pass Transparency | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Grab Pass](/docs/extended-features/grabpass.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Pro Features** | | | | | | |
| [Screen Space Ambient Occlusion](/docs/shading/ssao.md) | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Custom Modules | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| [Geometric Dissolve](/docs/extended-features/geometric-dissolve.md) | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| [Fur and World Fur](/docs/extended-features/fur.md) | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| [Shatterwave](/docs/extended-features/shatterwave.md) | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| [Tessellated](/docs/extended-features/tessellated.md) | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Tessellated Geometric | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Particle (Coming Soon) | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Wireframe | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| NameTag | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Cubed | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| EyeFX | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| **Extras** | | | | | | |
| StencilInvis | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Can Request a New Feature | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Prioritized Features and Shader Request | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |