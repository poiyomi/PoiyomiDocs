---
sidebar_position: 5
title: Cubemap
---
import PoiVideo from '@site/src/components/PoiVideo'

The Cubemap section is similar to the Matcap section, but allows you to use a [cubemap](https://docs.unity3d.com/Manual/class-Cubemap.html) texture instead of a matcap texture. Cubemaps can be used to simulate reflections and other effects, and avoid some of the projection artifacts that occur with matcaps.

<a target="_blank" href="/img/shading/PoiCubemapDemo.png">
<img src="/img/shading/PoiCubemapDemo.png" alt="Poiyomi Cubemap"/>
</a>

*Demonstration of two different Cubemap UV Modes (Left: Skybox) (Right: Reflection).*

## UV Mode

- `Type`: **Dropdown**, Options: `Skybox`/`Reflection`

Determines which projection mode should be used for the cubemap UV.

### Skybox

Skybox maps the cubemap based on the view direction. This creates a similar result to a Panosphere projection.

### Reflection

Reflection maps the cubemap based on the reflection vectors. This is similar to using a fallback cubemap for Reflections & Specular.

## Color

- `Type`: **Color**

Tint color applied to the cubemap texture. This color is multiplied with the cubemap texture.

## Cubemap

- `Type`: **Cubemap** Texture (sRGB **ON**)

Cubemap texture used. This must be in the cubemap format, which can be created from panoramic textures, or from 6 cube faces.

## Mask

- `Type`: **Data** Texture (sRGB **OFF**)

Mask that defines where to apply the cubemap effect. Black indicates where the cubemap should not be applied, and white indicates where it should be applied.

## Emission Strength

- `Type`: **Float**, Range: `0.0 - 20.0`

How much emission to apply to the cubemap.

## Color Strength

- `Type`: **Float**, Range: `0.0 - 5.0`

A scaling factor for the cubemap texture. This is useful for making the cubemap texture more or less visible, and defaults to `1.0`. Values above `1.0` will make the cubemap brighter.

## Hide in Shadow

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to hide the cubemap effect in shadowed areas of the mesh.

## Blending

The blending options define how the cubemap effect should be blended with the base color. Generally, only one at a time of these options should be used.

### Replace With Cubemap

- `Type`: **Float**, Range: `0.0 - 1.0`

Replaces the base color with the cubemap. At `1.0`, the base color is completely replaced with the cubemap. At `0.0`, the base color is completely unaffected. Values in between will blend the base color with the cubemap.

### Multiply Cubemap

- `Type`: **Float**, Range: `0.0 - 1.0`

Multiplies the base color with the cubemap. This generally darkens the base color. Black areas of the cubemap will always darken, white areas will not affect the base color, and colored areas will darken if the base color doesn't match the cubemap color in that area.

### Add Cubemap

- `Type`: **Float**, Range: `0.0 - 1.0`

Adds the cubemap to the base color. This generally brightens the base color. Black areas will be unaffected, while white areas will brighten. Colors are simply added on top of the base color.

## Normal to use

- `Type`: **Dropdown**, Options: `Pixel`/`Vertex`

Which normal to use if custom normals are not selected. `Pixel` normals are normals affected by normal maps, `Vertex` normals use only the base normals of the mesh. This is useful for applying the cubemap to a mesh that has been deformed by a normal map, while keeping the cubemap smooth.

## Hue Shift

- `Type`: **Checkbox**

Enables hue shifting of the cubemap texture.

### Shift Speed

- `Type`: **Float**

How much to constantly shift the hue with time. A value of 1 will result in a full hue shift cycle every 20 seconds.

### Hue Shift

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to shift the base color around the hue circle.

This value is circular, and will have the same result at 0 and 1.