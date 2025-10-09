---
title: Download & Install
description: How to Download and Install Poiyomi Toon Shaders.
image: /img/general/Thumb-DownloadInstall.png
keywords: [download, install, update, poiyomi, shader]
hide_table_of_contents: true
---

<ShowWhenRef equals="jinxxy">

:::tip Welcome Jinxxy Customers
Please ensure you use the right version of the shader as detailed by the Avatar Creator you purchased your Avatar from. It should be detailed in your Inventory, on the description of the Avatar's listing, or in a text file from the Avatar's archive you downloaded.

**Most commonly, you will be downloading the <u>FREE</u> version of the shader, which includes all of the features necessary for the Avatar to work.** To make things easier for you, we highly recommend installing the shader using the Creator Companion app of your choice. Jump to [Method 2: ALCOM / Creator Companion](#method-2-alcom--creator-companion) to read more on how to install it.

If your Avatar Creator asks you to use Poiyomi Pro, it is a PAID version of the shader and requires you to subscribe to access it ($10/month). **Only subscribe to Poiyomi Pro if the Avatar Creator explicitly states it's required, otherwise the FREE version should work without problems by switching your Materials to the Toon version of the shader.** For instructions on using Poiyomi Pro, jump to [Poiyomi Pro](#poiyomi-pro) on this page.
:::

</ShowWhenRef>

<ShowWhenRef equals="gumroad">

:::tip Welcome Gumroad Customers
Please ensure you use the right version of the shader as detailed by the Avatar Creator you purchased your Avatar from. It should be detailed in your Downloads, on the description of the product's listing, or in a text file from the Avatar's archive you downloaded.

**Most commonly, you will be downloading the <u>FREE</u> version of the shader, which includes all of the features necessary for the Avatar to work.** To make things easier for you, we highly recommend installing the shader using the Creator Companion app of your choice. Jump to [Method 2: ALCOM / Creator Companion](#method-2-alcom--creator-companion) to read more on how to install it.

If your Avatar Creator asks you to use Poiyomi Pro, it is a PAID version of the shader and requires you to subscribe to access it ($10/month). **Only subscribe to Poiyomi Pro if the Avatar Creator explicitly states it's required, otherwise the FREE version should work without problems by switching your Materials to the Toon version of the shader.** For instructions on using Poiyomi Pro, jump to [Poiyomi Pro](#poiyomi-pro) on this page.
:::

</ShowWhenRef>

The latest version of Poiyomi Shaders can be installed in one of two ways. Please be aware that there are different versions offered in terms of feature availability.

- For Poiyomi Toon (Free Version), choose which of the installation methods detailed below.
- If you're using Poiyomi Pro (Paid Version), [skip to the section by clicking here](#poiyomi-pro).

## Method 1: Manual Unity Package

The most common method used for installing Poiyomi Shaders is by importing the currently-provided Unity Package directly into your project. Read the instructions below to learn how to install the package:

<div style={{marginBottom: '20px'}}>

<a class="button button--primary" href="https://discord.gg/poiyomi" target="_blank"><FAIcon icon="fa-brands fa-discord"/> Join the Discord</a>&nbsp;<a class="button button--outline button--secondary" href="https://github.com/poiyomi/PoiyomiToonShader/releases/latest" target="_blank"><FAIcon icon="fa-solid fa-circle-down"/> Download from GitHub</a>&nbsp;<a class="button button--outline button--secondary" href="https://poiyomi.booth.pm/items/4841309" target="_blank"><FAIcon icon="fa-solid fa-circle-down"/> Download from BOOTH</a>

</div>

1. Join the [Poiyomi Discord Server](https://discord.gg/poiyomi) and download the latest `.unitypackage` posted in `#free-shader` channel.
    - OR you can download a stable, but likely outdated version of Poiyomi Toon Shader from either [GitHub <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://github.com/poiyomi/PoiyomiToonShader/releases/latest) or [BOOTH <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://poiyomi.booth.pm/items/4841309).
    - Make sure the file you download is a `.unitypackage` file, NOT a `.zip`!!
2. Import the Unity Package into your Unity Project from the Menu Bar via `Assets > Import Package > Custom Package` or by Drag & Dropping the file from your File Explorer directly into your Project's Assets folder.
3. Click `Import` when prompted.
   - *If you instead see a warning from another plugin claiming it's "already installed" then it's highly likely the Avatar Creator already included Poiyomi Shaders (which is bad practice). If this is the case, follow the [Updating Instructions](#updating-the-shader-unity-package) below instead.*
4. Done! Enjoy using Poiyomi Shaders.

### Updating the Shader Unity Package

When replacing or upgrading versions, you must do the following:
1. Delete the `Assets/_PoiyomiShaders` folder in your Project. **DO NOT SKIP THIS STEP!**
   - *Sometimes, Avatar Creators may attempt to hide the folder elsewhere in the project (which is bad practice). If this is the case, make sure you delete it!*
2. Import the newest Unity Package into your Project from the Menu Bar via `Assets > Import Package > Custom Package` or by Drag & Dropping the file from your File Explorer directly into your Project's Assets folder.
3. Click `Import` when prompted.
4. Done! You are now on the latest version.

:::danger
**DO NOT ATTEMPT to import Poiyomi Shaders over another, or your project may break!**
:::

## Method 2: ALCOM / Creator Companion

We recommend using [ALCOM <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://vrc-get.anatawa12.com/en/alcom/) to install Poiyomi Shaders **and for managing VRChat Projects overall** since it's way faster and easier to use compared to the default VRChat Creator Companion App. Although, using the VRChat Creator Companion is also supported.

<Tabs>

<TabItem value="alcom" label="ALCOM" default>

If you are using [ALCOM <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://vrc-get.anatawa12.com/en/alcom/) to install Poiyomi Shaders, follow these steps:

:::tip
If you have registered ALCOM to use the `vcc:` URL scheme, click the `Add to ALCOM` button below. If successful, skip to Step 3.

Otherwise, follow the instructions detailed below.
:::

<div style={{marginBottom: '20px'}}>

<a class="button button--primary" href="vcc://vpm/addRepo?url=https%3A%2F%2Fpoiyomi.github.io/vpm/index.json"><FAIcon icon="fa-solid fa-square-arrow-up-right"/> Add to ALCOM</a>

</div>
      
1. Open `Resources` and click `ADD REPOSITORY`.
2. Enter the URL under the "Enter information about the repository" line and click `ADD REPOSITORY`:
   - `https://poiyomi.github.io/vpm/index.json`
3. When prompted, confirm the following details are displayed, then click `ADD REPOSITORY`:
   - Name: `Poiyomi's VPM Repo`
   - URL: The URL you entered.
   - Packages:
     - `Poiyomi Toon Shader`
4. Afterwards, head back to `Projects`, click `MANAGE` for the project you want to add Poiyomi Shaders to, and look for `Poiyomi Toon Shader` in the list. Click the <FAIcon icon="fa-solid fa-circle-plus"/> icon for it. When prompted, click `APPLY`.
5. Done! Once ALCOM successfully installs the package, launch your Project and enjoy using Poiyomi Shaders.
      
**If an update becomes available, the `Latest` version number will be highlighted with a Green Box and a Green <FAIcon icon="fa-solid fa-circle-up"/> icon. Click it and hit `APPLY` when prompted to update to the latest version.**

</TabItem>

<TabItem value="vcc" label="VRChat Creator Companion">

If you are using the default VRChat Creator Companion App, follow the instructions below:

<div style={{marginBottom: '20px'}}>

<a class="button button--primary" href="vcc://vpm/addRepo?url=https%3A%2F%2Fpoiyomi.github.io/vpm/index.json"><FAIcon icon="fa-solid fa-square-arrow-up-right"/> Add to VCC</a>

</div>

1. Click the `Add to VCC` button above to add Poiyomi Toon Shader to the Creator Companion. The button will open the Creator Companion App.
          - Didn't work? In the VCC, go to `Settings > Packages > Add Repository`, type in `https://poiyomi.github.io/vpm/index.json` and then click `Add`.
2. When Prompted, click the button labeled `I Understand, Add Respository`.
3. In the list, make sure `Poiyomi's VPM Repo` is checkmarked.
4. Find your Project in the VCC Project List, click `Manage Project`, then click the `+` button on `Poiyomi Toon Shader` to add it to your project.
5.  Done! Once the package is resolved, launch your Project and enjoy using Poiyomi Shaders.
      
**If an update becomes available, click the Green <FAIcon icon="fa-solid fa-circle-up"/> icon to update to the latest version.**

</TabItem>

</Tabs>

:::warning
The VCC version of Poiyomi Shaders will automatically replace any existing copy of the `_PoiyomiShaders` folder in your Project's Assets in favor of the VCC Version, if it exists. Keep this in mind if you have any other versions, such as the Pro version, in your Project.
:::

## Poiyomi Pro

The Pro version of the shader (also known as Poiyomi Pro) is a Paid Version of the shader, available as a subscription model for $10/month on Patreon. It contains extra special features that are [outlined below](#features-chart).

Before using Poiyomi Pro, please ensure you agree to the [EULA](/docs/terms-of-service/terms-of-service.md#pro-version).

<div style={{marginBottom: '20px'}}>

<a class="button button--warning" href="https://www.patreon.com/poiyomi" target="_blank"><FAIcon icon="fa-brands fa-patreon"/> Subscribe on Patreon ($10/month)</a>&nbsp;<a class="button button--outline button--secondary" href="https://pro.poiyomi.com/" target="_blank"><FAIcon icon="fa-solid fa-key"/> Login & Download</a>

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