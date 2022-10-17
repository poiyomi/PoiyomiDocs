---
slug: 2022-10-17-texture-optimization
title: 'Optimizing Texture Memory & Size'
description: Tips and guidelines for optimizing texture memory and filesize for VRChat creation.
authors:
  razgriz
tags: [textures, optimization, tips, vrchat]
---

import PoiVideo from '@site/src/components/PoiVideo'

:::tip TL;DR
- **MEASURE TEXTURE VRAM USAGE AND DOWNLOAD SIZE** using [Lox9973's Assetbundle Stat tool](https://vsk.lox9973.com/abstat/) and [Thry's VRAM estimator](https://github.com/Thryrallo/VRCAvatarTools/).
- **Reduce Resolution** *in the texture import settings*! Not every texture needs to be 4k.
- **Don't disable mipmaps** - It reduces VRAM usage a bit, but will look and perform worse!
- **Crunch doesn't change VRAM usage** at all, but can reduce final filesize. Not a magic bullet!
- **For alpha, Use High Quality (BC7)**. Normal Quality (DXT5) uses the same VRAM but looks worse.
- **Don't use JPG (or other lossy formats)!** It reduces quality with no benefit.
:::

## Background

In VRChat Creation, texture assets comprise a large portion (often the majority!) of map/avatar video memory (VRAM) usage, and a significant chunk of map/avatar download size (assetbundle size). In the latest update, VRChat has added an estimate of texture memory to the avatar stats menu, as it's an important component of GPU performance. 

When the GPU can't store more assets in its memory, it has to swap them back and forth to the system memory (RAM). This works fine, but at best slows things down and causes hitching, and at worst decreases framerates.

Here's some notes on optimizing texture size, on both worlds and avatars, to reduce VRAM usage and download size. These are geared toward PC optimization, but outside of specific formats, they apply to mobile platforms (like Quest) as well.

## Details

### Compression Stages

In the VRC creation pipeline, textures are compressed multiple times: when they're imported to Unity, to a gpu-readable format (determining the VRAM size), and when an assetbundle is built, with LZMA compression (kind of like a zip archive!), which reduces download size. Technically, there's also the source asset's compression (most formats have some, for efficiency), but as long as it's lossless, we don't need to care about it.

Knowing this, we can safely store source assets at their original resolution, losslessly (using formats like PSD, TGA, PNG, etc - don't use lossy ones like JPG, *especially* with data textures like normal maps!). The source asset filesize (at least in regards to how it affects the final build) doesn't matter, as the image data will be re-encoded in its entirety. 

### Resolution

Textures in Unity are always re-encoded on import according to the texture import settings. That means you can non-destructively change the resolution size - you can always set the resolution in the texture import settings *Lower* to optimize, without modifying the source texture.

For optimizing both VRAM usage and download size, prefer reducing resolution wherever and whenever possible. Every time you double the resolution of an image, you quadruple the amount of pixels - that means that while a square 2k BC7-encoded texture may take up 5.3 megabytes in memory, the 4k version would be over 20! Use tiling textures and make use of different UV maps to do this more effectively.

### Compression Formats

:::info
GPU texture formats almost always have a fixed amount of data per pixel when loaded in memory. This means that (for example) a square BC7 texture at 512px with mipmapping on will always be `341.4 KB` in VRAM, no matter what's inside it.
:::

Crunch compression is frequently talked about around the topic of avatar and world optimization. When optimizing filesize, you can use crunch compression for things that you can afford lose quality on, and verify visually that it still looks OK. Test different crunch quality levels and measure the difference it makes in VRAM and filesize, and choose what works out best for your application.

![Crunch Compression Comparison](texture-optimization-crunch.png)

*Left-to-Right: `DXT1` Crunch (25 Quality), `DXT1` Crunch (75 Quality), `DXT1`, `BC7`* [(Open for full quality)](texture-optimization-crunch.png)

For things that you can't crunch (it's ok if this is a lot of your textures!), prefer the following formats where possible:
- `DXT1` ("Normal Quality") (low quality but 3-channel, so it stays small). This format should not be used if the source has an alpha channel, or if it contains smooth gradients - skin textures often look especially bad.
- `BC7` ("High Quality") for anything else, especially if it needs an alpha channel. It adds an alpha channel, but even if you're not using it, `BC7` uses the data more smartly than any other format.
- `R BC4`/`RG BC5` can be used for specific use cases, like single and dual channel masks. These formats can give high quality when you only need specific channels.
- "None" for very small (smaller than 256px) textures that benefit from storing exact colors, like color ramps used for lighting and small gradients. These formats tend to be large, so be careful!

If you are using an alpha channel, either use `BC7` ("High Quality") or crunch it (`DXT5`), depending on the application. using "Normal Quality" on a texture with an alpha channel is just a waste, as the `DXT5` format it uses is the same size as BC7. If your source texture has an alpha channel, but you don't need alpha, you can set "Alpha Source" to "None" in the texture import settings, which will let you either use `DXT1` ("Normal quality") or use BC7 at higher quality.

:::caution Crunch compression does not affect VRAM usage.
Crunch pre-compresses textures in a way that's easy for the CPU to decompress at runtime, so it brings disk size down a bit (though not as much as it would appear from the preview, since there's assetbundle LZMA compression too!), but it always has to be uncrunched into DXT1 or DXT5 anyway.
:::

For *non-crunched* textures, the size in the texture preview will give the VRAM usage of an imported texture asset. *For crunched textures, the preview size doesn't match vram usage!* the usage will be the same as "Normal Quality" (DXT1/DXT5) for that texture. VRAM usage can be calculated using the Bits per pixel for a given format, which can be found in the [Unity Documentation](https://docs.unity3d.com/Manual/class-TextureImporterOverride.html#texture-compression-by-quality).

You can use the preview and game build views as a guide for (non-crunched) VRAM, and a very rough indicator of disk size, but verify with [Lox9973's Assetbundle Stat tool](https://vsk.lox9973.com/abstat/) to confirm both VRAM usage contribution and final compressed bundle size. [Thry's VRAM estimator](https://github.com/Thryrallo/VRCAvatarTools/) and the vram estimation built into ThryEditor (used in Poiyomi) are also useful for this.

## Guidelines

In terms of what numbers to shoot for, we can think in terms of average GPU VRAM. According to the [September 2022 Steam Hardware Survey](https://store.steampowered.com/hwsurvey/Steam-Hardware-Software-Survey-Welcome-to-Steam), the most common VRAM amount for steam users is 8 GB, with about 35-40% of users having 8 GB or more - we'll use 8 GB as our reference number.

Doing some quick-and-dirty math, in a an instance with 80 avatars, if someone were to show every avatar and have it in view, each model would need to be under 100 MB of VRAM usage to stay below 8 GB total. That's before accounting for overhead from the operating system, the game itself, and the world hosting the instance. With that in mind, optimized avatars should shoot for under this - **I usually aim for `80 MB` or less on optimized avatars**, but higher is ok on models that will be used in less crowded spaces.

For worlds, it depends entirely on the content and intended usecase of the world. If you're building an event or party venue that's intended to host 80 people and heavy effects, you'll want to drop VRAM usage as low as it can go. The same is true for mobile-optimized worlds. However, for a more atmospheric world, intended to be experienced in small groups or alone, or where the focus is on beautiful, rich environments, higher resource usage can be justified. Exercise judgement and keep low-spec users in mind.

## Don'ts

### Don't Disable Mipmaps
:::warning **Seriously, don't disable mipmaps!**
[Mipmaps improve both visual quality and performance](https://blog.imaginationtech.com/why-you-really-should-be-using-mipmapping-in-your-graphics-applications/). Disabling them isn't actually beneficial.
:::

You should only disable mipmaps if it's something like a lookup table (LUT) or data texture (ex. font textures) that always needs the full texture resolution. While disabling them may reduce VRAM usage, it's not worth the hit to performance, and will make things look worse.

<PoiVideo url='/vid/blog/texture-optimization-bgolus-mipmaps.mp4'/>

*Please don't turn off mipmaps. Image courtesy [Ben Golus](https://bgolus.medium.com/sharper-mipmapping-using-shader-based-supersampling-ed7aadb47bec)*

### Don't just look at the build report

Unity's editor log will contain a breakdown of the build process, which some tools break out into a nice interface. While this can be useful, it won't be entirely accurate in describing how much space assets take up in the final bundle.

## Conclusions

Choosing to optimize your creations benefits everyone that uses and experiences them, and improves the platform in general - when everything runs better, everything feels better.

Always measure and profile your usage. Tools like [Lox9973's Assetbundle Stat tool](https://vsk.lox9973.com/abstat/) and [Thry's VRAM estimator](https://github.com/Thryrallo/VRCAvatarTools/) are massivley helpful in creating more optimized content.

Recognize that how materials, and their textures, are viewed is different between the creator building it (and often heavily self-scrutinizing) and other people that experience it. Make sure to step back and recognize that not everyone is going to be looking at the tiny details - focus on what matters in reasonable use cases.
