---
sidebar_position: 3
title: Textures and Colors
---
import PoiVideo from '@site/src/components/PoiVideo'

Textures and Colors are used everywhere in the shader, so it's important to understand how they work.

## Textures

A texture is a 2D image containing multiple channels of data. Textures are used to define how a material looks, how it responds to light, where effects are applied and what they look like, and more.

### Source Texture Formats

Unity supports a wide range of texture import formats, including PNG, TGA, BMP, DDS, PSD, and more. These textures are re-encoded by Unity for use in-game, so it's best to keep them in a lossless format.

:::danger
**Never use JPG/JPEG for textures!** While Unity does support it, JPG is a *lossy* format, meaning that your source files aren't kept at full quality. Use lossless formats like PNG, TGA, or PSD instead.
:::

### Source Texture Resolution

Your texture resolution is the number of pixels in each direction. For most cases, you want your textures to be square (or rectangular with integer multipliers on dimensions), and have dimensions that are a power of two - 256, 512, 1024, 2048, etc. This is because Unity works best when textures are powers of two, especially when resizing textures.

You can author and store your textures at high resolution, and downscale them to a lower resolution with the texture import settings.

:::tip
**Use a power-of-two resolution (256, 512, 1024, 2048, 4096) whenever possible!** Saving your source texture files at a non-power-of-two resolution can result in blurry results when resizing to a power-of-two resolution.
:::

### UV Maps

Textures need a way to know how to map their texels (texture pixels) to the object. Most often, this is done with UV maps. The name UV comes from the dimensions - U for horizontal, V for vertical.

UV maps are stored in and defined by the mesh. In poiyomi, the first 4 UV maps (UV0, UV1, UV2, UV3) can be directly used for almost any texture.

Poiyomi also has a number of modified UV maps that can be used for various effects, including panosphere mapping, polar UV, UV distortion, and more.

### Tiling and Offset

Tiling and Offset are used to determine how a texture should repeat and where it should sit on a UV map.

Tiling is simply how many times a texture should repeat in a direction on its UV mapping. A value of 2 would result in the texture repeating twice, while 0.5 would result in only half the texture showing.

Offset is used to shift the texture on its UV mapping. This can be used to fine tune the location of a texture, or adjust it at runtime.

### Panning

Panning is an option available on most textures. It will move the texture at a constant rate in time. This is useful for creating a panning effect, or for creating a moving texture.

### Channels

Textures store their data in multiple channels. In unity, these are the Red, Green, Blue, and Alpha channels. These channels are independent of each other, and can be used to store different data.

For most color textures, R, G, and B channels are used for color, and the A channel, if present is used for opacity.

For data textures, different channels can be used for different purposes. For example, in most masks, the R channel is used for the mask, and the other channels go unused. In the Reflections and Specular maps, the R and G channels are used for the metallic and glossiness maps, while the B and A channels are used for reflection and specular masking.

Channels not present in a texture's encoding are set to 1 (white).

## Texture Import Settings

These settings can be found when clicking on a texture in the project view, and can be changed in the inspector.

### VRAM Usage

VRAM (Video Random Access Memory) usage is the amount of memory that will be used by a texture when it is loaded. All assets used by the GPU must be loaded into VRAM before they can be used, and there's only a limited amount of VRAM available on a given card. When the GPU is running out of VRAM, it will start to move textures into system memory, which causes latency and slows down the game.

Textures are the largest contributors to VRAM usage. Reducing the size and amount of textures will reduce VRAM usage and make your avatar more performant.

To determine the VRAM usage of an avatar, you can download Thry's VRCAvatarTools and use the Thry > Avatar > VRAM menu. This will show you the VRAM usage of your avatar, and what assets are using the most VRAM.

### sRGB

sRGB is a setting that determines whether the texture should be stored in gamma-corrected space. This is necessary for color textures, but should always be off for data textures.

:::caution
It's **very** important to set the sRGB setting to `Off` for textures that are not being used directly as color. Any masks, non-color maps, or other data textures will have incorrect values if sRGB is enabled. Color Textures should keep sRGB `On`.
:::

### Texture Encoding & Compression

Unity re-encodes all textures into formats that are more efficient for the GPU. This is done by using a compression algorithm. The most common compression algorithm is the DXT compression algorithm, which has a few different modes depending on what channels are being used.

Most of the formats Unity uses have a fixed amount of bits per pixel. This means that, for a texture of a given resolution, it will always have the same size in video memory (VRAM). This is important to note for performance and memory usage, as VRAM usage can be a major factor for avatar performance.

For most color and data textures, it's simplest to use DXT1. This is what Unity uses when set to "Normal" compression. When set to "High" quality, it will use BC7, which is a higher quality format, but will always store an alpha channel even if it's not present in the source texture. This can result in higher VRAM usage than DXT1.

To have full control over what format Unity uses, you can select the tab to the right of the "Default" tab of compression options, and select "Override for PC, Mac, & Linux Standalone". This will give you a full list of available compression options.

To learn more about the different compression formats, visit the [Unity documentation](https://docs.unity3d.com/Manual/class-TextureImporterOverride.html).

#### Crunch Compression

Crunch compression is an aggressive compression algorithm that is often used for color textures. It is a highly lossy algorithm, and will result in some amount of quality degredation. Unity reports that filesize is decreased with crunch compression, but it's important to note that asset bundles are generally compressed already, mitigating much of the benefit of crunch compression.

Crunch compression will not reduce the size of the texture in VRAM, as it has to be decompressed before it can be loaded and accessed by the GPU.

Hai-vr has written some notes about crunch compression on [their Notion](https://hai-vr.notion.site/Crunch-Compression-2119cc1366574068809250fafedbe27a), which outline some of the controversies and limitations of crunch compression.

Consider carefully before using crunch compression for your textures, and always look at the actual differences in visual quality.

### Max Size

This setting determines the maximum resolution of the texture after Unity compresses it. Texture resolution is the biggest driver of VRAM usage, and it's important to keep your textures as low resolution as they can be while maintaining acceptable visual quality.

4096px and 8192px square textures, in particular, use large amounts of VRAM. Where possible, make your textures smaller, and use features like RGBA masking, alternate UV maps, decals, etc. to reduce the need for large, high resolution textures.

### Mipmaps

Mipmaps are a feature of Unity (and most modern game engines) that store shrunken versions of a texture alongside the full resolution. These are used to create less aliasing, and are essential for textures to look good. They also improve performance, as they allow the GPU to access smaller, more localized areas of the texture.

:::caution
**Don't turn mipmaps off!** While it does reduce VRAM usage a bit, much of the performance bump is mitigated by the GPU having to always access full-resolution textures.

Turning off mipmaps should only be done for very specific data textures that should not be mipped.
:::

### Wrap Mode

Wrap Mode defines how a texture should repeat when it is tiled. This has various options including Repeat (repeats the texture), Clamp (clamps the texture to the edge of the texture), and Mirror (mirrors the texture).

This option has a caveat. For most textures, the wrap mode defined for the *Main Texture* will be used. This is due to a limitation within the DirectX Graphics API, which limits the amount of samplers that can be defined.

## Colors

### Standard Colors

Most colors in the shader are standard RGBA colors. This means they are stored as four floating point values, with each value ranging from 0 to 1.

Most color pickers have the option to draw from a global [Theme Color](docs/color-and-normals/global-themes.md), or from a world's audiolink theme colors. This can be used to create an easy-to-change color palette for your avatar.

### HDR Colors

HDR colors are similar to standard colors, but they can contain much higher intensity values. Intensities above 1 act similarly to emission, and accordingly, these colors are generally used for modules like emission.

### Alpha

The alpha channel is used to store opacity. It is a floating point value from 0 to 1. Generally, this is used to determine how much an effect or a part of an effect. For example, in [RGBA Masking](docs/color-and-normals/rgba-color-masking.md), the alpha channel is used to determine how much of a channel's texture should be used.

One notable exception is the base color, where the alpha channel is used to determine the opacity of the material.

### Vertex Colors

Vertex colors are colors stored on each vertex of a mesh. They can be used to color the mesh, or to store data about the mesh, like each vertex's position, or smoothed vertex normals, both of which can be baked into the mesh using the **Poi** > **Vertex Color Baker** tool.

### Color Blending/Tinting

In most cases, feature colors are blended with their respective texture multiplicatively. For example, a black and white noise map used as an emission map will be tinted with the Emission Color. This is perceptually equivalent to "Tinting" the texture with the color. Note that this can *only* darken a texture.
