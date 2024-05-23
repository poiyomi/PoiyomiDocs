---
sidebar_position: 0
slug: /
title: Home
description: Official Documentation of Poiyomi Toon Shader, a free, feature-rich Toon and PBR shader for Unity, with a specific focus on usage with VRChat.
hide_title: true
hide_table_of_contents: true
---
import PoiVideo from '@site/src/components/PoiVideo';
import PoiyomiWordmark from '@site/static/img/Poiyomi-Wordmark.svg';

<!-- ![Poiyomi Shaders Wordmark](/img/Poiyomi-Toon-Wordmark_NoBG.png) -->

<div style={{textAlign: 'center', marginTop: '20px', marginBottom: '20px', marginLeft: '70px', marginRight: '70px'}}>
<PoiyomiWordmark />
</div>

<h1 style={{textAlign: 'center', fontSize: '25px', margin: '2px', fontWeight: 'normal'}}>
Feature-rich Toon and PBR Shader for Unity, with a specific focus on VRChat
</h1>

<h2 style={{textAlign: 'center', fontSize: '15px', margin: '10px', fontWeight: 'normal'}}>
Toon |
Realistic |
Stylized Shading |
PBR Features |
Global Masking |
AudioLink Support |
and more!
</h2>

<div style={{textAlign: 'center', margin: '40px'}}>

<a class="button button--lg button--primary" href="/download"> Download Poiyomi Shaders</a> <a class="button button--lg button--link" href="https://discord.gg/poiyomi"> Join the Discord</a>

</div>

## Features
- **Various Shading Styles**
  - Stylized Toon Shading presets with customizable options, such as Texture Ramp, Multilayer Math, and ShadeMap.
  - Realistic Shading presets, such as Wrapped, Skin, Realistic, and Cloth.
  - Sophisticated Light Data settings for changing how the lighting and shading is influenced on your Material.
  - Outline features for adding cartoon-style outer stencils to your Model, using the inverse-hull effect.
  - Grab Pass features, available as a separate shader variant.
- **Easy to Use**
  - User Interface with sophisticated organization and layout that sets it apart from other Toon shaders.
- **Fun, Decorative Functions**
  - Decals, for fun and unique ways to decorate your Avatar with logos, shapes, stickers, and patterns.
  - Details, allowing you to apply (often tiled textures) to your Base Color and Normals.
  - Up to 4 Matcaps for creating fast and approximate looks from a spherical texture.
  - Cubemaps, for simulating reflections and other effects using an HDR cubemap texture.
  - Flipbooks, providing support for Texture Arrays that can be played as an animation on the Material.
  - Up to 4 Emission Slots, each with independent unique options for adding highlights or glow effects.
  - Glitter, providing voronoi-based sparkles to the color of the mesh that can create glittery surfaces with specular lighting.
  - Various UV options such as support for UV0, UV1, UV2, UV3, Distortion, Panosphere, and Polar UV.
- **PBR Features**
  - Reflections & Specular, for metallics and reflective surfaces.
  - Clear Coat, creating glossy appearances that can be compared to automotive paint or carbon fiber composite.
  - Up to 2 Rim Lighting effects, allowing for fresnel-like highlights or glows around the edges of a Material.
  - Environmental Rim, simulating low-angle reflections from the surrounding environment.
- **Highly-acclaimed Masking Features**
  - Vertex Colors and various Masking support for advanced customization.
  - RGBA Color Masking for applying different color tints, textures, and normal maps with the main color.
  - Signature Global Masking support, allowing for up to 16 Color Channels to use from up to 4 Global Masks across the Material.
- **The most advanced Material User Interface for a Toon Shader**
  - Integrated Texture Packers for merging Masks and Color Channels in various features.
  - Use Presets to easily apply features from a Material onto another Material.
  - Search functionality, allowing ease of access to common features.
  - Cross-Shader Editor for editing multiple Materials using Poiyomi Shaders, all at once.
  - All features of ThryEditor.
- **Full AudioLink Support**
  - Over 10+ modules in Poiyomi Shaders supporting various AudioLink effects!
  - AL Spectrum, projecting a waveform-like effect that react to the World's music onto the UV.

## Documentation

On the sidebar, you'll find Documentation for each different feature of the shader. All features of the Shader in the UI will redirect here for further reading.

:::caution
*This documentation is geared towards* **Poiyomi 8.0 and newer**.

If you're using Poiyomi 7.3 or earlier, this documentation may not apply at all. [**An upgrade guide is available for moving from Poiyomi 7.0 to 8.0+**](/docs/general/v7-upgrade.md).
:::

:::tip Upgrading to 9.0
Poiyomi 9.0 is out now. If you are upgrading from 8.0 to 9.0, a lot of the existing documentation still applies to some extent. Notes are provided if otherwise. [**An upgrade guide is available for moving from Poiyomi 8.0 to 9.0+**](/docs/general/v8-to-v9-upgrade.md)
:::

### Completion Status

:::info
This documentation is continuously being developed! If you have any questions, or if you think you've found an issue, please [join the Discord](https://discord.gg/poiyomi) and ask! Our goal is to have a fully-fleshed out documentation site with rich visual examples and explanations for all of the shader features.

During the creation of this documentation, however, priority is placed on getting text-based documentation complete first, followed by images and videos, so don't panic if it seems like there's a lot of text for now!
:::

| Section                 | Status              |
| ----------------------- | ------------------- |
| General Shader Settings | 📓  Text Complete    |
| Color & Normals         | 📓  Text Complete    |
| Shading                 | 📓  Text Complete    |
| Outlines                | 📓  Text Complete    |
| Audio Link              | 📓  Text Complete    |
| Special FX              | 📓  Text Complete    |
| Modifiers               | ⚠️  Work-In-Progress |
| Post Processing         | 📓  Text Complete    |
| Rendering               | 📓  Text Complete    |
| Grab Pass               | 📓  Text Complete    |
