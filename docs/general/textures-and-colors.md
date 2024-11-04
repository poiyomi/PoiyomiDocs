---
sidebar_position: 3
title: Textures and Colors
description: Knowledge on how to use Textures and Colors within Poiyomi Shaders.
keywords: [texture, size, color, format, tiling, offset, vram, compression, size, mipmap, alpha, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

Textures and Colors are used everywhere in the shader, so it's important to understand how they work. Much of the information explained on this page can greatly impact the final appearance of your Textures.

## Textures

A texture is a 2D image (typically a square-shaped image) containing multiple channels of data. Textures are used to define how a material looks, how it responds to light, where effects are applied, what they look like, and more.

### Source Texture Formats

Unity supports a wide range of texture import formats, including PNG, TGA, BMP, DDS, PSD, and more. These textures are re-encoded by Unity for use in-game, so it's best to keep them in a lossless format.

:::danger Never use JPG/JPEG for textures!
While Unity does support it, JPG is a *lossy* format, meaning that your source files aren't kept at full quality. Use lossless formats like PNG, TGA, or PSD instead.
:::

### Source Texture Resolution

Your texture resolution is the number of pixels in each direction. For most cases, you want your textures to be square (or rectangular with integer multipliers on dimensions), and have dimensions that are a power-of-two; 256, 512, 1024, 2048, etc. This is because Unity works best when textures are powers of two, especially when resizing textures.

You can author and store your textures at high resolution, and downscale them to a lower resolution with the texture import settings.

:::tip
**Use a power-of-two resolution (16, 32, 64, 128, 256, 512, 1024, 2048, 4096) whenever possible!** Saving your source texture files at a non-power-of-two resolution can result in blurry results when resizing to a power-of-two resolution.
:::

### UV Maps

Textures need a way to know how to map their texels (texture pixels) to the object. Most often, this is done with UV maps. The name UV comes from the dimensions - U for horizontal, V for vertical.

<!-- EASTER EGG
*To understand how a UV map works in a more simplistic term, [think about how a piece of wrapped chocolate candy is made <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://www.reddit.com/r/blender/comments/18xnl6l/show_this_to_those_who_havent_yet_understood_uv/?utm_source=share&utm_medium=mweb3x&utm_name=mweb3xcss&utm_term=1&utm_content=share_button). When you fully unwrap the paper to get to the chocolate, laying the unwrapped paper flat on the table would be considered the UV layout.* 
-->

UV maps are stored in and defined by the mesh you are using. In Unity, a mesh can contain a maximum amount of 4 UV layouts. When used in Poiyomi, all of the first 4 UV maps (`UV0`, `UV1`, `UV2`, `UV3`) can be directly used for almost any texture. Although most commonly, the main primary UV map (`UV0`), also known as the default UV, would be used for the Main Texture.

Poiyomi also has a number of modified UV maps that can be used for various effects, including Panosphere mapping, Polar UV, UV Distortion, and more.

### Tiling and Offset

Tiling and Offset are used to determine how a texture should repeat and where it should sit on a UV map.

**Tiling** is simply how many times a texture should repeat in a direction on its UV mapping. A value of 2 would result in the texture repeating twice, while 0.5 would result in only half the texture showing.

**Offset** is used to shift the texture on its UV mapping. This can be used to fine tune the location of a texture, or adjust it at runtime.

### Panning

Panning is an option available on most textures. It will move the texture at a constant rate in time. This is useful for creating a panning effect, or for creating a moving texture.

### Channels

Textures store their data in multiple channels. In unity, these are the Red, Green, Blue, and Alpha channels. These channels are independent of each other, and can be used to store different data.

For most color textures, `R`, `G`, and `B` channels are used for color. If the `A` channel is present, it will be used for opacity.

For data textures, different channels can be used for different purposes. For example, in most masks, the `R` channel is used for the mask, and the other channels go unused. In the Reflections and Specular maps, the `R` and `G` channels are used for the metallic and glossiness maps, while the `B` and `A` channels are used for reflection and specular masking.

Channels not present in a texture's encoding are set to 1 (white).

## Texture Import Settings

These settings can be found when clicking on a texture in the project view, and can be changed in the inspector.

### VRAM Usage

<!-- EDITOR'S NOTE: To coincide with VRChat Glossary, I will have the term "VRAM" be referred to as "Texture Memory" instead. -BluWizard10 -->

VRAM (Video Random Access Memory) usage is the amount of memory that will be used by a texture when it is loaded. In VRChat, this is referred to as *Texture Memory*.

All assets used by the GPU must be loaded into VRAM before they can be used, and there's only a limited amount of VRAM available on a given card. When the GPU is running out of VRAM, it will start to move textures into system memory, which causes latency and slows down the game.

Textures are the largest contributors to VRAM usage. Reducing the size and amount of textures will reduce VRAM usage and make your avatar more performant.

To determine the Texture Memory usage of an avatar, you can download [Thry's VRC Avatar Performance Tools <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://github.com/Thryrallo/VRC-Avatar-Performance-Tools) and use the `Thry -> Avatar -> VRAM` menu. This will show you the amount of VRAM consumption of your avatar, and what assets are using the most VRAM.

:::danger Save VRAM, Save Lives!
Multiple Textures set at or above 2048px will consume a vast amount of Texture Memory, contributing to serious performance issues for both yourself and others.

**Please do your part by avoiding the use of High Res Textures on your Avatar!**
:::

### sRGB

sRGB is a setting that determines whether the texture should be stored in [gamma-corrected <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://learnopengl.com/Advanced-Lighting/Gamma-Correction) space. This is necessary for color textures, but should always be off for data textures.

:::warning Turn this OFF for Non-color Maps
It's **very** important to set the sRGB setting to `Off` for textures that are not being used directly as color. Any masks, non-color maps, or other data textures will have incorrect values if sRGB is enabled. Color Textures should keep sRGB `On`.
:::

### Texture Encoding & Compression

Unity re-encodes all textures into formats that are more efficient for the GPU. This is done by using a compression algorithm. The most common compression algorithm is the DXT compression algorithm, which has a few different modes depending on what channels are being used.

Most of the formats Unity uses have a fixed amount of bits per pixel. This means that, for a texture of a given resolution, it will always have the same size in video memory (VRAM). This is important to note for performance and memory usage, as VRAM usage can be a major factor for avatar performance.

For most color and data textures, it's simplest to use `DXT1`. This is what Unity uses when set to "Normal" compression. When set to "High" quality, it will use `BC7`, which is a higher quality format, but will always store an alpha channel even if it's not present in the source texture. This can result in higher VRAM usage than `DXT1`.

To have full control over what format Unity uses, you can select the tab to the right of the `Default` tab of compression options, and select `Override for PC, Mac, & Linux Standalone`. This will give you a full list of available compression options.

> Community member **Zanariyo** has compiled an excellent document that explains some of the most common texture formats in Unity and when it's appropriate to use them for your Avatar. [You can view the document here <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.google.com/document/d/1WvgJ2lzyNXJuzFa1cr1YKC8xu5-L124VXQ4JI11wJoc).

To learn more about the different compression formats in further detail, visit the [Unity Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/class-TextureImporterOverride.html).

#### Crunch Compression

Crunch compression is an aggressive compression algorithm that is often used for color textures. It is a highly lossy algorithm, and will result in some amount of quality degradation. Unity reports that file size is decreased with crunch compression, but it's important to note that asset bundles are generally compressed already, mitigating much of the benefit of crunch compression.

Crunch compression will not reduce the size of the texture in VRAM, as it has to be decompressed before it can be loaded and accessed by the GPU.

Hai-vr has written some notes about crunch compression on [their Notion <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://hai-vr.notion.site/Crunch-Compression-2119cc1366574068809250fafedbe27a), which outline some of the controversies and limitations of crunch compression.

Consider carefully before using crunch compression for your textures, and always look at the actual differences in visual quality.

:::danger
Using Crunch Compression on Textures set to 2048px or higher may cause a much longer import time in the Unity Editor.

If you are an Avatar Creator, consider leaving this OFF in your Packages.
:::

### Max Size

This setting determines the maximum resolution of the texture after Unity compresses it. Texture resolution is the biggest driver of VRAM (Texture Memory) consumption, and it's important to keep your textures as low resolution as they can be while maintaining acceptable visual quality.

4096px and 8192px square textures, in particular, **use large amounts of VRAM**. Where possible, make your textures smaller, and use features like [RGBA Color Masking](/docs/color-and-normals/rgba-color-masking.md), alternate UV maps, [Decals](/docs/color-and-normals/decals.md), etc., to reduce the need for large, high resolution textures. Using those features can both help improve performance and cut down on VRAM consumption.

:::info VRChat Avatar Size Limits
Make sure to keep the Max Size of your textures <u>as low as you can</u>, as it will greatly contribute to the final **Download Size** and **Uncompressed Size** of your Avatar. Failure to take this into account may prevent VRChat from even loading your Avatar at all!

To see the Size Limits that are currently enforced for both PC and Mobile Platforms, refer to the VRChat Creators Documentation on [Avatar Size Limits <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://creators.vrchat.com/avatars/avatar-size-limits).
:::

### Mipmaps

Mipmaps are a feature of Unity (and most modern game engines) that store shrunken versions of a texture alongside the full resolution. These are used to create less aliasing, and are essential for textures to look good. They also improve performance, as they allow the GPU to access smaller, more localized areas of the texture.

:::warning
**DO NOT turn mipmaps off!** While it does reduce VRAM usage a bit, much of the performance bump is mitigated by the GPU having to always access full-resolution textures.

Turning off mipmaps should only be done for very specific data textures that should not be mipped.
:::

#### Mipmap Filtering

When using mipmaps, there is a choice on the type of filtering to use.  In Unity, you can choose `Box` or `Kaiser`. It specifies which method Unity should use when filtering mipmaps to optimize image quality.

- `Box`: Makes mipmap levels smoother as they decrease in dimension size.
- `Kaiser`: Runs a sharpening algorithm on mipmaps as they decrease in dimension size.

:::tip VRChat Recommends Kaiser
As of VRChat SDK 3.7.1 and newer, VRChat now recommends you use `Kaiser`. This is due to a new Detail Preserving Image Downscaling (DPID) algorithm introduced in the SDK, that expands on Kaiser by focusing on the perception by intentionally over-emphasizing pixels. This makes Textures look far more legible and sharp from a distance.

In order to take advantage of this feature, you must set your **Mipmap Filtering** settings to `Kaiser` on all of your Textures.
:::

### Wrap Mode

Wrap Mode defines how a texture should repeat when it is tiled. This has various options,

**Repeat** is self-explanatory. It will repeat (tile) the texture infinitely.

**Clamp** will stretch the edges of the texture to each end of the UV's boundaries.

**Mirror** will simply flip the texture in reverse as if it was inside a mirror.

This option has a caveat. For most textures, the wrap mode defined for the *Main Texture* will be used. This is due to a limitation within the DirectX Graphics API, which limits the amount of samplers that can be defined.

## Colors

### Standard Colors

Most colors in the shader are standard RGBA colors. This means they are stored as four floating point values, with each value ranging from 0 to 1.

Most color pickers have the option to draw from a [Global Theme](/docs/modifiers/global-themes.md), or from a world's AudioLink theme colors. This can be used to create an easy-to-change color palette for your avatar.

### HDR Colors

HDR colors are similar to standard colors, but they can contain much higher intensity values. Intensities above 1 act similarly to emission, and accordingly, these colors are generally used for modules like emission.

In the Unity Standard Shader, the HDR Color `Intensity` slider serves as the Emission Intensity by itself.

### Alpha

The Alpha channel is used to store opacity. It is a floating point value from 0 to 1. Generally, this is used to determine how much an effect or a part of an effect. For example, in [RGBA Color Masking](/docs/color-and-normals/rgba-color-masking.md), the Alpha channel is used to determine how much of a channel's texture should be used.

One notable exception is the base color, where the Alpha channel is used to determine the amount of opacity for the material.

### Vertex Colors

[Vertex Colors](/docs/color-and-normals/vertex-colors.md) are colors stored on each vertex of a mesh. They can be used to color the mesh, or to store data about the mesh, like each vertex's position, or smoothed vertex normals, both of which can be baked into the mesh using the `Poi -> Vertex Color Baker` tool.

### Color Blending/Tinting

In most cases, feature colors are blended multiplicative with their respective texture. For example, a black and white noise map used as an emission map will be tinted with the Emission Color. This is perceptually equivalent to "Tinting" the texture with the color. Note that this can *only* darken a texture.
