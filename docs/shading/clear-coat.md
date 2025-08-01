---
sidebar_position: 10
title: Clear Coat
description: Clear Coat is an effect that simulates thin and often glossy layers on the outer surface of a Material. It is used to simulate the appearance of automotive paint, lacquered wood, carbon fiber, and many others.
keywords: [clear, coat, clearcoat, glossy, reflective, poiyomi, shader]
---

Clear Coat (often referred to as one word, clearcoat) is an effect that simulates thin, often glossy layers on the outer surface of a material. It can be used to create the appearance of materials like automotive paint, lacquered wood, carbon fiber composite, and many others.

<a>
<img src="/img/shading/PoiClearCoatDemo.png" alt="Poiyomi Clear Coat Demo"/>
</a>

*Example of Clear Coat used on two Material Spheres.*

## ClearCoat Visibility

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Strength of the clearcoat effect. Controls how much of the clearcoat should be applied to the base color. 

This option scales the **Clearcoat Mask** if defined. If not defined, this option directly controls the clearcoat strength.

## Smoothness

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Smoothness of the clearcoat surface. Lower values result in more blurred reflections, and more diffuse (larger but dimmer) specular highlights.

This option scales the **Smoothness Map** if defined. If not defined, this option directly controls the smoothness of the clearcoat.

## Reflections Visibility

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Strength of the clearcoat layer's reflections.

This option scales the **Reflection Mask** if defined. If not defined, this option directly controls the strength of clearcoat reflections.

## Specular Visibility

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Strength of the clearcoat layer's specular highlights.

This option scales the **Reflection Mask** if defined. If not defined, this option directly controls the strength of clearcoat specular highlights.

## Fresnel Strength

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

How strong the low-angle reflective rim should affect the material. This is similar to Unity Standard's fresnel effect by default, but allows further control of how intense it should be.

## Exposure Occlusion

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Controls how much to darken reflections for areas that are not receiving as much lighting, such as in shadowed areas. This matches similar behavior to Filamented-based shaders.

This effect typically looks best when seen in VRC Light Volumes rather than Light Probes.

## Reflection Tint

- `Type`: <PropertyIcon name="color" />**Color**

Tint color applied to the clearcoat reflections. This can be used to add a metallic look to the clearcoat layer.

## Specular Tint

- `Type`: <PropertyIcon name="color" />**Color**

Tint color applied to the clearcoat specular highlights. This can be used to add a stylized look to the clearcoat layer.

## Packed Maps

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = OFF`)

The Maps texture is composed of 4 channels. These channels can be packed by adding individual textures to the packer. If you only have one mask or map to apply, the packer can be used to create a texture that defaults undefined channels to white, so their effects can be properly defined by the effect sliders. 

When using the packer, make sure to press confirm before saving the scene, as the texture is not stored on disk before the confirm button is pressed.

Note that all channels/textures in the packed Maps texture will use the same texture properties, including tiling, offset, panning, and UV.

### ClearCoat Mask

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = OFF`)

Defines how much intensity to apply the clearcoat with at different areas on the material. This can be useful for only applying the clearcoat in specific areas.

### Smoothness Map

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = OFF`)

Defines the clearcoat smoothness at different areas on the material.

### Reflection Mask

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = OFF`)

Defines how much to apply reflections at different areas on the material.

### Specular Mask

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = OFF`)

Defines how much to apply specular highlights at different areas on the material.

### Invert ClearCoat Mask

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Defines whether the clearcoat mask channel should be inverted.

### Invert Smoothness

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Defines whether the clearcoat smoothness channel should be inverted. Useful for reusing Roughness masks.

### Invert Reflection Mask

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Defines whether the clearcoat reflection mask channel should be inverted.

### Invert Specular Mask

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Defines whether the clearcoat specular mask channel should be inverted.

## Fallback Cubemap

- `Type`: <PropertyIcon name="texture" />**Cubemap** Texture (`sRGB = ON`)

A cubemap that can be used in cases where no reflection probe is present in the scene. This is useful for maps that have not been set up with proper reflection probes.

## Force Fallback

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Whether to use the fallback at all times instead of just when no reflection probe is defined.

## Lit Fallback

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Whether the fallback cubemap should be lit according to the environment when used. Useful for preventing the fallback from appearing too bright in dark world areas.

## GSAA

- `Type`: <PropertyIcon name="toggle" />**Toggle**
  - Default: `On`

GSAA (Geometric Specular Anti-Aliasing) is a corrective option that prevents high-smoothness specular highlights from disappearing on surfaces with sharp changes. This is especially useful on surfaces with sharp or sudden edges (hard-surfaced edges), or on surfaces with intense, high detail normal maps.

It's recommended to keep GSAA enabled unless it creates issues with specific models.

### GSAA Variance

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Controls how much to apply GSAA, relative to the amount of change in the screen-space world normal.

This value generally does not need to be adjusted.

### GSAA Threshold

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Controls at what level of roughness GSAA should be applied at.

This value generally does not need to be adjusted.
