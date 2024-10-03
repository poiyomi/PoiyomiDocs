---
sidebar_position: 6
title: Special Versions
description: Information regarding the special alternate versions included in Poiyomi Shaders, such as Grab Pass and the World Shader.
keywords: [two pass, two-pass, grab pass, outline, early, world, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

Poiyomi Shaders has some special Shader versions included that are made for very specific purposes. These can have different performance impacts and should only be used when the need arises for it.

Typically you'll only be using `.poiyomi/Poiyomi Toon` on a daily basis, as it's the most optimized. If you are planning on only using the normal Shader version, you can stop reading here.

For those who need to use Poiyomi Shaders for very specific purposes, read on for more details.

:::warning
Some of these alternate Shader versions are not recommended for daily usage as they can have a performance impact, unless otherwise noted. Use them judiciously!
:::

## World

- `.poiyomi/Poiyomi Toon World`

The Poiyomi World Shader includes the necessary Global Illumination components needed for it to render properly in Worlds with Baked Lighting. It is primarily targeted for those who intend to use features found in Poiyomi Shaders in their VRChat Worlds.

:::tip Optimized for Worlds SDK users only
Poiyomi World matches the same features as the normal Poiyomi Toon Shader, with the only difference being that it includes Global Illumination support.

We recommend only using this Shader if you are using the Worlds SDK.
:::

## Two Pass

- `.poiyomi/Poiyomi Toon Two Pass`

The Two Pass version renders the inside of the Mesh first, rather than the outside (Cull Front > Cull Back). This special version should only be used when creating Meshes that need to have double the rendering pass, especially with Transparency.

Because this Shader renders everything twice, it can have a slight performance impact.

## Outline Early

- `.poiyomi/Poiyomi Toon Outline Early`

The Outline Early Shader renders the Outline before rendering the main Mesh, as opposed to normal Outline, which renders afterwards. This can be useful for certain situations where you want the Outline to be prioritized in the rendering pass.

As Outline Early renders the Outline twice, it can have a slight performance impact.

## Grab Pass

- `.poiyomi/Poiyomi Toon Grab Pass`

The Grab Pass Shader is used for specialized effects that require taking a screenshot every frame in order for it to render. See [Grab Pass](/docs/extended-features/grabpass.md) for more info.

Because this shader version uses a Grab Pass, it has the <u>strongest performance impact</u> as it has to take a screenshot every frame to render. If you wish to use this feature, use it judiciously!

## Geometric Dissolve <span class="badge badge--primary">Pro</span>

Poiyomi Pro Geometric Dissolve is an advanced version in Poiyomi Pro that expands beyond the features of what a typical Dissolve can offer. It uses the 3D Mesh to manipulate the vertices, creating an advanced 3D Dissolve animation. See [Geometric Dissolve](/docs/extended-features/geometric-dissolve.md) for more info.

## Fur <span class="badge badge--primary">Pro</span>

Poiyomi Pro Fur is a system in Poiyomi Pro that uses a height-based technique to enable simulation of fabrics and hairs. It can look similar to how fur is simulated in animated films but with some differences. See [Fur](/docs/extended-features/fur.md) for more info.

Fur simulation is a very expensive feature, as it must render every frame in order to simulate the effect. As such, this will cause a huge performance impact when used.