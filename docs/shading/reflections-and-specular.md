---
sidebar_position: 6
title: Reflections & Specular
---
import PoiVideo from '@site/src/components/PoiVideo'

The Reflections & Specular section adds physically-based reflection and specular highlights to a material. This is a core component of a physically-based rendering (PBR) material. 

Reflections and Specular are heavily influenced by the lighting setup of the scene. For these features to look correct, the scene should have well-defined lighting and reflection probes.

## Reflection Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

How strong reflections should be across the material. These are blended with the base color of the material, and if a reflection mask is used, this value is multiplied with the reflection mask.

## Specular Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

How strong specular highlights should be across the material. These are blended with the base color of the material, and if a specular mask is used, this value is multiplied with the specular mask.

## Metallic

- `Type`: **Float**, Range: `0.0 - 1.0`

How metallic the material should be. Metallic materials are usually used for metals, with the defining feature of metallic surfaces being that reflections are tinted with the color of the material. For non-metallic materials, the reflections are not tinted.

This value is multiplied with the value of the Metallic Map. If no metallic map is defined, this setting is used directly.

This is an equivalent setting to the `Metallic` setting in the Unity Standard shader.

## Smoothness

- `Type`: **Float**, Range: `0.0 - 1.0`

How smooth the material should be. Smoothness is a value that controls how diffuse, or blurred, highlights and reflections are. A value of `0.0` means that the material is completely diffuse, meaning reflections will be highly blurred, and specular reflections will be large and not very bright. A value of `1.0` means that the material is completely smooth, and will have very small and concentrated specular.

This value is multiplied with the value of the Smoothness Map. If no smoothness map is defined, this setting is used directly.

This is an equivalent setting to the `Smoothness` setting in the Unity Standard shader.

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

### R Metallic Map

- `Type`: **Data** Texture (sRGB **OFF**)


### G Smoothness Map

- `Type`: **Data** Texture (sRGB **OFF**)


### B Reflection Mask

- `Type`: **Data** Texture (sRGB **OFF**)

### A Specular Mask

- `Type`: **Data** Texture (sRGB **OFF**)


## Split Mask Sampling

- `Type`: **Checkbox**


### ScaleXY TileZW

- `Type`: **Vector4**


### UV

- `Type`: **Dropdown**, Options:


### Panning

- `Type`: **Vector2**

## 2nd Specular

- `Type`: **Checkbox**

### Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

### Smoothness

- `Type`: **Float**, Range: `0.0 - 1.0`

## Fallback Cubemap

- `Type`: **Cubemap** Texture (sRGB **ON**)

### Force Fallback

- `Type`: **Checkbox**

### Lit Fallback

- `Type`: **Checkbox**

## GSAA

- `Type`: **Checkbox**



### GSAA Variance

- `Type`: **Float**, Range: `0.0 - 1.0`


### GSAA Threshold

- `Type`: **Float**, Range: `0.0 - 1.0`
