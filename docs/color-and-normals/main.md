---
sidebar_position: 1
title: Overview
hide_title: true
description: The fundamental features of your Material in Poiyomi Shaders, including the Base Color, Main Texture, and Normal Mapping.
keywords: [main, texture, normals, map, color, alpha, poiyomi, shader, unity]
---
import PoiVideo from '@site/src/components/PoiVideo'

# Color & Normals

The **Color & Normals** section defines the fundamental attributes of a material, including many options that affect the Base Color and per-pixel Normals of the material. It is the first section that most users will utilize when editing the Material.

<a target="_blank" href="/img/color-and-normals/ColorAndNormalsSection.png">
<img src="/img/color-and-normals/ColorAndNormalsSection.png" alt="The main Color & Normals Section in Poiyomi Shaders" width="600px"/>
</a>

## Color & Alpha

- `Type`: **Color**

A tint Color that's blended multiplicative with the base texture. If no Main Texture is specified, this Color will be used instead overall.

## Main Texture

- `Type`: **Color** Texture (sRGB **ON**)

The Main Texture of the material. The base color of the material is set from the color of this texture. In transparent rendering modes, the Main Texture's Alpha sets the base alpha of the material.

Like most other textures, the **Tiling** and **Offset** values of the Main Texture can be adjusted when the options are expanded. However, they cannot be independently animated on a mesh[^1].

The assigned **UV Map** and the **Panning** of the Main Texture can be adjusted, and can be animated independently.

## Normal Map

- `Type`: **Normal Map** Texture (sRGB **OFF**)

The Normal Map texture changes the normal of the surface based on a normal map texture. This allows additional detail to be added to a material without increasing the complexity of a mesh.

When expanded, the Normal Map texture has options for **Tiling** and **Offset**, which like those of the Main Texture, will behave independent of their lock status if animated[^1].

The Normal Map texture has a slider for **Intensity**, which affects how much influence the normal map has on the surface. This is a special property and has unique considerations for animating[^1].

<PoiVideo url='/vid/color-and-normals/main_Normal-Map_Intensity.mp4'/>

*Adjusting the Intensity of a Normal Map on a Shaded material*

A normal map will affect anything that uses the normal of a mesh (specifically the Pixel normal, as opposed to the Vertex normal, which is the normal defined by the mesh itself). This includes features like [Shading](/docs/shading/main.md), [Rim Lighting](/docs/shading/rim-lighting.md), [Reflections and Specular](/docs/shading/reflections-and-specular.md), [Matcaps](/docs/shading/matcap.md), and many other lighting-based effects.

Poiyomi, and most Unity shaders, use [OpenGL formatted normal maps](https://help.poliigon.com/en/articles/4534195-normal-map-formats). If authoring your own normal maps, ensure that your creation program is set to output OpenGL formatted normal map textures. To learn more about normals, watch ["What is a normal?"](https://youtu.be/spuF6j87kPU) on Poiyomi's YouTube channel.

## Alpha Map

- `Type`: **Data** Texture (sRGB **OFF**)

The Alpha Map texture provides an additional slot to influence the base alpha of a material. This texture will be multiplied with the base alpha from the Main Texture. It should generally be black and white, as only its value (specifically the red channel value) will be used, not the color.

![Alpha Map](/img/color-and-normals/main_Alpha-Map_Comparison.png)

*Alpha Map: Opaque / Cutout (0.5 Cutoff) / Cutout (0 Cutoff, Alpha To Coverage and Dithering with MSAA) / Fade*

When expanded, the Alpha Map texture has options for **Tiling** and **Offset**. The assigned **UV Map** and the **Panning** of the Alpha Map can be adjusted.

The Alpha Map can be inverted with the **Invert** option.

![Alpha Map Invert](/img/color-and-normals/main_Alpha-Map_Invert.png)

*Alpha Map Invert: Off/On*

## Alpha Cutoff

- `Type`: **Float**, Range: `0.0 - 1.0`

The **Alpha Cutoff** value sets the alpha value at which to [clip](https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-clip) a pixel. If the alpha value of a pixel is below this value, the pixel is [discarded](https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-discard).

This is a special property and has unique considerations for animating[^1].

In the Cutout rendering mode, this value is set to `0.5` by default, and generally does not need to be adjusted.

![Alpha Cutoff Cutout GIF](/img/color-and-normals/main_Alpha-Cutoff_Cutout.png)
*Alpha Cutoff (Cutout Rendering Preset): 0 -> 0.25 -> 0.5 -> 0.75*

In Transparent rendering modes like Fade, Transparent, TransClipping, etc., this value defaults to `0.0`. It can be used as a hard cutoff below which a transparent material will render nothing.

<PoiVideo url='/vid/color-and-normals/main_Alpha-Cutoff_Fade.mp4'/> 

[^1]: [Special Unity Properties](/docs/general/locking.md#unity-special-properties)
