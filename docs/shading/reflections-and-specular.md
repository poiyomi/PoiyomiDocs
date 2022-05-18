---
sidebar_position: 6
title: Reflections & Specular
---
import PoiVideo from '@site/src/components/PoiVideo'

The Reflections & Specular section adds physically-based reflection and specular highlights to a material. This is a core component of a physically-based rendering (PBR) material.

To learn more about the principles of PBR shading, guides are available from [Adobe Substance](https://substance3d.adobe.com/tutorials/courses/the-pbr-guide-part-1) and [Google Filament](https://google.github.io/filament/Materials.html#materialmodels/litmodel).

Reflections and Specular are heavily influenced by the lighting setup of the scene. For these features to look correct, the scene should have well-defined lighting and reflection probes.

## Reflection Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

How strong reflections should be across the material. These are blended with the base color of the material, and if a reflection mask is used, this value is multiplied with the reflection mask.

## Specular Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

How strong specular highlights should be across the material. These are blended with the base color of the material, and if a specular mask is used, this value is multiplied with the specular mask.

## Metallic

- `Type`: **Float**, Range: `0.0 - 1.0`

How metallic the material should be. Metallic materials are usually used for (as would be expected) metals. The defining feature of metallic surfaces is that reflections are tinted with the color of the material. For non-metallic materials, the reflections are not tinted.

This value is multiplied with the value of the Metallic Map. If no metallic map is defined, this setting is used directly.

This setting is equivalent to the `Metallic` setting in the Unity Standard shader.

## Smoothness

- `Type`: **Float**, Range: `0.0 - 1.0`

How smooth the material should be. Smoothness is a value that controls how diffuse, or blurred, highlights and reflections are. A value of `0.0` means that the material is completely diffuse, meaning reflections will be highly blurred, and specular reflections will be large and not very bright. A value of `1.0` means that the material is completely smooth, and will have very small and concentrated specular.

Smoothness is the opposite of Roughness, and they can be converted by inverting the value - `0.2` roughness is `1.0 - 0.2` = `0.8` smoothness, and `0.7` smoothness would be `1.0 - 0.7` = `0.3` roughness.

This value is multiplied with the value of the Smoothness Map. If no smoothness map is defined, this setting is used directly.

This setting is equivalent to the `Smoothness` setting in the Unity Standard shader.

## Reflection Tint

- `Type`: **Color**

A tint color applied to the reflections. This is multiplied with the material's reflections, and is generally used to create a non-physically based stylized effect.

## Specular Tint

- `Type`: **Color**

A tint color applied to the specular. This is multiplied with the material's specular highlights, and is generally used to create a non-physically based stylized effect.

## Maps

- `Type`: **Data** Texture (sRGB **OFF**)

The map texture defines multiple settings of the Reflections and Specular across different parts of the material. These maps are *packed* into a single texture, which increases performance and reduces memory usage.

This texture can be exported from programs like Adobe Substance Painter as a pre-packed map, or packed using the inline packing tool included with the Poiyomi Shaders package.

This tool can be used by expanding the Maps texture. Each channel will have its own texture slot, and the channel to be used can be selected. If no texture is defined, a fallback value can be selected for that channel; generally, this fallback should be kept at `1.0`, allowing the slider to control this value. Note that all textures will be combined to a single texture with certain default settings; be sure to check this texture's import settings for options like resolution and texture format once it has been saved.

### R Metallic Map

- `Type`: **Data** Texture (sRGB **OFF**)

The metallic map defines where the material should be metallic, and where it should be non-metallic (dielectric). This should generally be black or white, with few situations requiring in-between values.

### G Smoothness Map

- `Type`: **Data** Texture (sRGB **OFF**)

The Smoothness map defines where the material should be smoother, and where it should be rougher. This value can vary smoothly between `0.0` and `1.0` according to variations and different parts of a material.

### B Reflection Mask

- `Type`: **Data** Texture (sRGB **OFF**)

The reflection mask defines where reflections should be allowed, and where they should be disabled. This is mostly useful for stylized models, and for purely physically-based shading, this channel should be left at `1.0`.

### A Specular Mask

- `Type`: **Data** Texture (sRGB **OFF**)

The specular mask defines where specular highlights should be allowed, and where they should be disabled. This is mostly useful for stylized models, and for purely physically-based shading, this channel should be left at `1.0`.

## Split Mask Sampling

- `Type`: **Checkbox**

Split Mask Sampling defines whether to differentiate the Metallic/Smoothness components of the packed map texture from the Reflection/Specular mask components. This is useful when using highly tiled or panned metallic and smoothness maps, while keeping the masks un-tiled, or on a separate UV map.

### ScaleXY TileZW

- `Type`: **Vector4**

Scale and Tiling selection for the Reflection and Specular masks, if Split Mask Sampling is enabled.

The first two values (`X` and `Y`) set the *tiling* for the mask channels. The second two values (`Z` and `W`) set the *offset* for the mask channels.

### UV

- `Type`: **Dropdown**, Options:

UV selection for the Reflection and Specular masks, if Split Mask Sampling is enabled.

### Panning

- `Type`: **Vector2**

X/Y Panning for the Reflection and Specular masks, if Split Mask Sampling is enabled.

## 2nd Specular

- `Type`: **Checkbox**

2nd Specular enables an additional specular reflection. This can be used to create a multi-layered specular effect, with a different smoothness for each layer.

### Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

Strength of the 2nd specular layer. This value scales the same way as Specular Strength.

### Smoothness

- `Type`: **Float**, Range: `0.0 - 1.0`

Smoothness of the 2nd specular layer. This value scales the same way as Smoothness.

## Fallback Cubemap

- `Type`: **Cubemap** Texture (sRGB **ON**)

Cubemap to use if a reflection probe is not defined. This is used to provide a fallback reflection for maps, or areas of maps, that don't have a reflection probe defined.

### Force Fallback

- `Type`: **Checkbox**

Forces the material to always use the fallback cubemap. This is useful for forcing a specific reflection for stylized models.

### Lit Fallback

- `Type`: **Checkbox**

Lit Fallback applies the lighting of the map to the fallback cubemap. This allows the fallback cubemap to fit more closely with the environmental lighting.

## GSAA

- `Type`: **Checkbox**

GSAA (Geometric Specular Anti-Aliasing) is a technique that improves the quality of specular reflections. It uses the geometry of the model to modify the specular reflections in order to reduce Specular Aliasing, which is a visible artifact that occurs at high smoothness levels, especially with highly detailed models or normal maps.

In general, GSAA should be left on.

### GSAA Variance

- `Type`: **Float**, Range: `0.0 - 1.0`

GSAA Variance is used to scale the per-pixel geometric change of the model in order to determine how much GSAA should be applied.

The default `0.15` value works well to balance the quality of the specular reflections with the quality of the specular anti-aliasing.

### GSAA Threshold

- `Type`: **Float**, Range: `0.0 - 1.0`

GSAA Threshold is used to determine the point at which GSAA should be applied.

The default `0.1` value works well to balance the quality of the specular reflections with the quality of the specular anti-aliasing.
