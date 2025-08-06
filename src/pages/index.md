---
slug: /
title: Home
description: Official Website and Documentation for Poiyomi Shaders, a free, feature-rich Toon and PBR shader for Unity with a specific focus on VRChat.
image: /img/Poiyomi-Thumbnail-Basic.png
keywords: [poiyomi, shader, shaders, docs, documentation, unity, vrchat, vrc, pbr, toon, realistic, stylized, shading]
hide_title: true
hide_table_of_contents: true
---
import PoiyomiWordmark from '@site/static/img/Poiyomi-Wordmark.svg';
import Heading from '@theme/Heading';

<!-- ![Poiyomi Shaders Wordmark](/img/Poiyomi-Toon-Wordmark_NoBG.png) -->

<div style={{textAlign: 'center', marginTop: '20px', marginBottom: '20px', marginLeft: '70px', marginRight: '70px'}}>
<PoiyomiWordmark />
</div>

<h1 style={{textAlign: 'center', fontSize: '25px', margin: '2px', fontWeight: 'bold'}}>
Feature-rich Toon and PBR Shader for Unity, with a specific focus on VRChat
</h1>

<h2 style={{textAlign: 'center', fontSize: '15px', margin: '10px', fontWeight: 'normal'}}>
Toon |
Realistic |
Stylized Shading |
PBR Features |
Global Masking |
AudioLink Support |
LTCGI Support |
and more!
</h2>

<Columns style={{marginTop: '50px', marginBottom: '50px'}}> 
  <Column className='text--center'>
    <Card>
      <CardHeader>
        <h2>Documentation</h2>
      </CardHeader>
      <CardImage cardImageUrl='/img/custom-icons/Icon_Books.png'/>
      <CardBody>
        Learn how to use the features available in Poiyomi Shaders.
      </CardBody>
      <CardFooter>
        <a class="button button--block button--primary" href="/intro">Open Docs</a>
      </CardFooter>
    </Card>
  </Column>
  <Column className='text--center'>
    <Card>
      <CardHeader>
        <h2>Download & Install</h2>
      </CardHeader>
      <CardImage cardImageUrl='/img/custom-icons/Icon_Download.png'/>
      <CardBody>
        Instructions to Download & Install the shader.
      </CardBody>
      <CardFooter>
        <a class="button button--block button--secondary" href="/download">Go to Downloads</a>
      </CardFooter>
    </Card>
  </Column>
  <Column className='text--center'>
    <Card>
      <CardHeader>
        <h2>Blog</h2>
      </CardHeader>
      <CardImage cardImageUrl='/img/custom-icons/Icon_News.png'/>
      <CardBody>
        Read our Blog & Updates
      </CardBody>
      <CardFooter>
        <div className='button-group button-group--block'>
          <a class="button button--block button--secondary" href="/blog">Tips & Tricks</a>
          <a class="button button--block button--secondary" href="/changelog">Changelogs</a>
        </div>
      </CardFooter>
    </Card>
  </Column>
</Columns>

## Feature Highlights
- **Various Shading Styles**
  - Stylized Toon Shading presets with customizable options, such as Texture Ramp, Multilayer Math, and ShadeMap.
  - Realistic Shading presets, such as Wrapped, Skin, Realistic, and Cloth.
  - Sophisticated Light Data settings for changing how the lighting and shading is influenced on the Material.
  - Outline features for adding cartoon-style outer stencils to your Model, using the inverse-hull effect.
  - Grab Pass features, available as a separate shader variant.
- **Easy to Use**
  - User Interface with sophisticated organization and layout that sets it apart from other Toon shaders.
- **Fun, Decorative, and Powerful Features**
  - Up to 4 Decals, for fun and unique ways to decorate an Avatar with logos, shapes, stickers, and patterns.
  - Details, allowing you to apply (often tiled textures) to the Base Color and Normals.
  - Up to 4 Matcaps for creating fast and approximate looks from a spherical texture, can often add to a shading style.
  - UV Tile Discard support.
  - Cubemaps, for simulating reflections and other effects using an HDR cubemap texture.
  - Flipbooks, providing support for Texture Arrays that can be played as an animation on the Material.
  - Up to 4 Emission Slots, each with independent unique options for adding highlights or glow effects.
  - Dissolve effects with various transition styles. Also supports UV Tile Discarding using Dissolve.
  - Glitter, providing voronoi-based sparkles to the color of the mesh that can create glittery surfaces with specular lighting.
  - Various UV options such as support for UV0, UV1, UV2, UV3, Distortion, Panosphere, and Polar UV.
- **PBR Features**
  - Reflections & Specular, for metallics and reflective surfaces.
  - Clear Coat, creating glossy appearances that can be compared to automotive paint or carbon fiber composite.
  - Up to 2 Rim Lighting effects, allowing for fresnel-like highlights or glows around the edges of a Material.
  - Environmental Rim, simulating low-angle reflections from the surrounding environment.
- **Advanced Masking Features**
  - Vertex Colors support and various masking support for advanced customization.
  - RGBA Color Masking for applying different color tints, textures, and normal maps with the main color.
  - Signature Global Masking support, allowing for up to 16 Color Channels to use from up to 4 Global Masks across the Material.
- **The most advanced Material User Interface**
  - Integrated Texture Packers for merging Masks and Color Channels in various features.
  - Use Presets to easily apply features from a Material onto another Material.
  - Search functionality, allowing ease of access to common features.
  - Cross-Shader Editor for editing multiple Materials using Poiyomi Shaders, all at once.
  - All features of ThryEditor.
- **Full AudioLink Support**
  - Over 10+ modules in Poiyomi Shaders supporting various AudioLink effects!
  - AL Spectrum, projecting a waveform-like effect that react to the World's music onto the UV.
- **LTCGI Support**
  - Supports receiving LTCGI diffuse and specular lighting from Worlds actively producing LTCGI.
- **VRC Light Volumes Support**
  - Supports receiving volumetric and balanced lighting from Worlds baked with VRC Light Volumes.
