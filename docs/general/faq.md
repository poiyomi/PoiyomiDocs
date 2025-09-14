---
sidebar_position: 8
title: FAQ / Troubleshooting
description: List of Frequently Asked Questions and Troubleshooting Information regarding Poiyomi Shaders.
keywords: [faq, frequently, asked, questions, troubleshoot, troubleshooting, poiyomi, shader]
hide_table_of_contents: true
---
import TOCInline from '@theme/TOCInline';

This is a list of Frequently Asked Questions regarding Poiyomi Shaders. If you are having trouble with certain issues in Poiyomi Shaders, refer to this page.

<TOCInline toc={toc} />

## Poiyomi Shaders

### What is the Poiyomi Shaders Terms of Service?

A dedicated page is available which shows important information about the usage of the Shader. Please see [Terms of Service](/docs/terms-of-service/terms-of-service.md) for more details.

### I'm trying to import a version that's in-between the versions the Unity Package specifies. How do I install them?

If you download a package with 2 revision numbers, that package contains <u>all in-between versions</u> as standard.

For example, if you import 7.3-9.0, it will include all 7.3/8.0/8.1/9.0 versions.

### If an Avatar Base asks for a specific version, will it still work if I import a version that is slightly newer?

It is always recommended to use the latest version of the Shader. If an Avatar Base asks for something like 9.0.52 and you are importing 9.0.57, it is expected to still work perfectly fine as it's just a patch-version increase.

### I am receiving Errors when attempting to use Poiyomi Shaders. What should I do?

If you are having issues with Poiyomi Shaders such as the Material Inspector not working properly, please follow these troubleshooting steps in the following order:

1. Delete the `_PoiyomiShaders` Folder from your Assets entirely.
2. Download the latest version of the Package if you haven't already.
3. Import the Unity Package.

This should help solve most issues with the Shader not behaving as expected in Unity, including issues with double-importing the Shader from an Avatar that included the Shader when it wasn't supposed to.

If you are still running into issues, post some screenshots in the [Discord](https://discord.gg/poiyomi) and we'll be happy to help you out.

### When I Upload an Avatar, I get a message saying "Unlocked Shaders were found and will not be included in the build."

This message indicates there was a problem with the Auto-Lock function. For context, your Materials must be locked in order to upload to VRChat in order to prevent unused features from being included.

If this function fails to work and you get that message, ensure there are no scripts interfering with the Upload. Some tools and certain optimizers can interfere with the optimizer, even though they're not supposed to.
- Remove any third-party tools and Packages you suspect are interfering until the message no longer appears when uploading. If you find the culprit issue, we encourage you to inform the creator of said scripts/utilities that are interfering with the Auto-Lock so that it doesn't happen again.

:::tip Manual Lock-In
**Try manually Locking your Materials before uploading.** You can do this by `Right-Click` on your Avatar in the Hierarchy, followed by `Thry -> Materials -> Lock All` in the context menu. This function will Lock ALL Poiyomi Materials found on your Avatar.
:::

### How do I upgrade Poiyomi Shaders to a newer version?

To upgrade the shader, refer to the instructions found in [Download & Install](/docs/download/download.md) for the Method you used when you first installed the Shader.

Sometimes when updating your locked materials may get stuck in the locked state. This happens because the name of the shader changed. Avoid this by unlocking materials before updating. To Fix this, reselect the correct Poiyomi shader for the broken materials.

:::warning
If you are jumping from much older versions (7.3 or older) to the latest, [please refer to this documentation to learn how to account for these major changes](/docs/general/upgrade/upgrade.md).
:::

### I'm trying to animate a property in the Material which kind of works, but it STOPS working when the Material gets Locked. What can I do?

You need to mark properties that you are animating by `Right-Clicking` on them and selecting `Animated` or `Renamed`, which are specific tags that ensure the property remains accessible when the Shader is locked. For more information, see the Documentation page [Locking and Animation](/docs/general/locking.md#marking-properties-for-animation) for further reading.

Keep in mind that properties marked as `Renamed` will only work when the Material is Locked. **Make sure you Lock the Material prior to recording your animations!**

<a target="_blank" href="/img/general/locking_animated.png">
<img src="/img/general/locking_animated.png" alt="Animation Tags" width="400px"/>
</a>

### Where do AO Maps go in Poiyomi Shaders?

Place AO (Ambient Occlusion) Maps in the [AO Maps](/docs/shading/light-data.md#ao-maps) Texture Slot, located in `Shading -> Light Data`.

It is recommended to use a [Lighting Type](/docs/shading/main.md#lighting-type) that supports AO Maps. Most of them (except for `Flat`) will work with AO Maps.

### Where does Height Maps go in Poiyomi Shaders?

Height maps are generally used to change the shape of the surface of a material. Generally, if it's small displacements, 
You can often get the same detail by using a Normal Map (make sure your shading is set to something other than Flat, though!). 

If you have a height map but not a normal map, you can convert it in Unity by setting the texture to a Normal map and selecting "Convert from Grayscale".

If you need the displacement, you can use it with [Parallax Heightmapping](/docs/modifiers/uvs/parallax.md), which creates a displacement-like effect. You can also use a shader that tessellates, which will add geometry to create the height detail.

**Vertex Displacement** takes a height map, but it's limited to the vertex density on the mesh, and often will not provide the desired results.

### What is the difference between Roughness vs. Smoothness Maps?

Roughness and Smoothness have the same information, just flipped!

You can invert it in an image editor or use the invert checkboxes.

**For v8+**, Roughness goes in [Reflections & Specular](/docs/shading/reflections-and-specular.md).

Open Packed Maps by clicking on the triangle and place the Roughness in the [G Smoothness Map](/docs/shading/reflections-and-specular.md#packed-maps) slot. It is important that you checkmark `Invert` so that it matches the Unity PBR Shading Pipeline. [Refer to the Documentation Page](/docs/shading/reflections-and-specular.md#packed-maps) for more information.

### How do I test Audio Link in Poiyomi Shaders?

You will need to install the Audio Link Package into your Project. [Read the Documentation Page for instructions here.](/docs/audio-link/audio-link.md#how-to-test-audio-link-using-poiyomi-shaders)

### I am using a feature that is supposed to animate, but it doesn't show it's animating. Why is that?

In order to preview animations from Poiyomi Materials (such as Glitter or continuous Hue Shift) outside of Play Mode, you must toggle on this button/option in your Scene View:

<a target="_blank" href="/img/general/mat-animation.png">
<img src="/img/general/mat-animation.png" alt="Material Animations Toggle" width="400px"/>
</a>

### Can I use Poiyomi Shaders in World Projects?

Yes! Make sure to select `.poiyomi/Poiyomi Toon World` as the shader so that it can receive and contribute to Global Illumination. This special shader version includes all the same features in the Free version, but introduces the meta passes necessary for baking Global Illumination. Additionally, it exposes a category called `Shading -> Baked Lighting` that houses all the GI settings for the Material.

You may want to consider setting it to Realistic Shading from the Shading settings so that it can look it’s best with Baked Lighting.

### I've un-tagged a property that I don't want to be animated, but it still animates regardless when using an Emulator. Why does it still animate while in Play Mode?

You may have left the Material Unlocked! When a Material is Unlocked, all animated properties, regardless of it's animation tag, are still exposed in Play Mode.

To test your Animator against animated properties that are no longer tagged with `A` or `RA`, Lock your Material(s) prior to starting Play Mode.

### How can I quickly copy over the properties of a certain feature to a different Material?

You can do this by clicking the 3 dots on the Header of the feature you wish to copy the properties of. Click on it, then hit `Copy`.

<a target="_blank" href="/img/general/copy-module.png">
<img src="/img/general/copy-module.png" alt="How to Copy a module's Properties" width="500px"/>
</a>

Then, go under the same sub-menu in your other material and hit `Paste` to apply the copied properties from the Unity clipboard.

### Can I swap/animate texture slots?

Due to Unity Editor limitations, you cannot do this as it can cause problems at runtime.

While it is not possible to animate texture slots, Poiyomi Shaders has features that can make up for this. Try out using these modules:

- [Decals](/docs/color-and-normals/decals.md), a decorative feature. You can animate the `Alpha` slider to control the visibility of the Texture using a Decal.
- [Dissolve](/docs/special-fx/dissolve.md), a Special FX feature that can gradually introduce a different Texture through a visual transition.
- [Geometric Dissove](/docs/extended-features/geometric-dissolve.md). Like Dissolve, but uses your Mesh's Geometry to transition to a different Texture.
- [UV Tile Discard](/docs/special-fx/uv-tile-discard.md), to animate offsets when needed.

### Why use OKLab for Hue Shift instead of HSV?

OKLab has varying hue with constant lightness and chroma. It is more *even* in lightness for various hues. The reason for this is because OKLab takes the perceived lighting, including on how Green/Red and Blue/Yellow the color is, and calculates it to be a more accurate perception of the color being seen.

This eliminates issues with noise and colors being washed out when changing the Hue.

The usage of perceptual color space is desirable when using the Color Adjust feature. OKLab provides better perceptual properties that allow more accurate color changes, compared to the legacy HSV method. For more technical information on how this works, [see this external webpage](https://bottosson.github.io/posts/oklab/).

## Unity Editor

### Why does Unity Editor constantly crash when editing the Shader?

You may be encountering the so-called "64 Crash" issue. This refers to a longtime Unity issue where if you reach or exceed 64 Texture Slots, the Editor will outright crash regardless if there's a texture or not in the slots.

This can happen when you have a large number of materials using Poiyomi while unlocked, with many different sections enabled.

To circumvent this issue, you can lock materials when not in use, as that will generate unique shaders for each material.

More information documented [here](/docs/general/textures-64-texture-slot-crash.md).

### Why does lighting change randomly while moving in a World?

Without setting an `Anchor Override` on the meshes, Unity can sample the world's lighting from unwanted spots. This can lead to undesired behavior with your Avatar's Lighting.

To fix this, we recommend assigning a Bone (such as the `Chest`) from your Armature into the `Anchor Override` on all Meshes.

:::tip
ThryEditor will run this automatic fix to you if there's no Anchor Override set. A one-time "Bad Lighting Fix" message (Example below) will appear when Uploading for the first time. We recommend you to keep it enabled if prompted.

<a target="_blank" href="/img/general/bad-lighting-fix-message.png">
<img src="/img/general/bad-lighting-fix-message.png" alt="ThryEditor Bad Lighting Auto-Fix Dialogue" width="400px"/>
</a>
:::

### Why can't I use Poiyomi Shaders on Quest?

**You can only use the VRChat mobile shaders that come with the SDK on your Quest/Android Avatars!**

Quest and Android hardware is underpowered and doesn't support features that Poiyomi Shaders need to work properly. Even if you managed to upload an avatar with unsupported shaders on it, the VRChat client will override them at runtime.

## VRChat

### What is the recommended SDK and Unity Version to use with Poiyomi Shaders?

As of May 2024, we recommend VRChat SDK `v3.5.0` or newer in order to use Poiyomi Shaders. Ensure the VRChat Creator Companion App is the latest version in order to access the latest SDKs.

For the Unity Version, we currently actively support Unity 2022. To learn what specific version you should use, refer to the [VRC Creators Documentation](https://creators.vrchat.com/sdk/upgrade/current-unity-version/).

## Other Resourceful Info

### How can I test my Lighting in the Unity Editor without having to Upload and test in the VRChat Client?

We recommend **Haï Lightbox Viewer**, a Utility that simulates your Avatar's Shading and Lighting Behavior in various different Scenes, all at once. This is an excellent tool that can give a visual representation of how your Shading and Lighting setup is expected to be shown as in the client.

[You can download Haï Lightbox Viewer here.](https://docs.hai-vr.dev/docs/products/lightbox-viewer)

### Why does my Avatar get super bright in some Worlds?

This is generally because of additive lights which add up. If you want to set a max overall brightness for additive lights, hit the `Presets` button at the top left of the Material UI and select `Maximum Add Intensity of 1`. You can change the max value in the `Light Data` section.

### Curated Tools

Here is a list of recommended plugins and tools that we use when building our Avatars, with or without Poiyomi Toon Shader:

**MUST HAVES:**
- **Haï Lightbox Viewer:** Test your Avatar’s lighting behavior in the Unity Editor. Highly Recommended for testing Poiyomi’s lighting behavior in various conditions! [Download Haï Lightbox Viewer](https://docs.hai-vr.dev/docs/products/lightbox-viewer)
- **Gesture Manager:** A lightweight and powerful Emulator, allowing you to test your Avatar’s animations and toggles directly in the Editor. [Download Gesture Manager](https://github.com/BlackStartx/VRC-Gesture-Manager)
- **Thry’s VRC Avatar Performance Tools:** Texture Memory calculator that measures the VRAM consumption of your Avatar’s Textures and Mesh, exposing greater detail on how your Avatar impacts other users in VRChat. [Download VRC Avatar Performance Tools](https://github.com/Thryrallo/VRC-Avatar-Performance-Tools)

**Other Awesome Tools:**
- **Pumkin’s Tools:** Avatar Component Copier and in-editor tool for capturing screenshots directly from your Scene. [Download Pumkin's Avatar Tools](https://github.com/rurre/PumkinsAvatarTools) | [Download Editor Screenshot](https://github.com/rurre/Editor-Screenshot)
- **Avatars 3.0 Manager:** Manages your Avatar Descriptor, including editing, merging and copying your Animators, Menus, and Parameters. [Download Avatars 3.0 Manager](https://github.com/VRLabs/Avatars-3.0-Manager)

**Honorable Mention:**
- **ALCOM:** An excellent and *faster* alternative to the VRChat Creator Companion App (VCC). Works on both Windows and Linux. [Download ALCOM](https://vrc-get.anatawa12.com/en/alcom/)