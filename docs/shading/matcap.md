---
sidebar_position: 3
title: Matcap / Sphere Textures
---
import PoiVideo from '@site/src/components/PoiVideo'

Matcaps, or sphere textures, are textures that are mapped to an object based on the relative angle of the view direction and the material's normal direction. This means that areas that are pointing up will be mapped to the top center of the matcap texture, areas pointing down and right will be mapped to the bottom right of the texture, and so on.

The word Matcap is a portmanteau of **M**aterial **C**apture. The technique was originally designed as a fast, low-overhead way to approximate the look of specific materials, baking in many details. With modern GPU performance and physically based shading techniques, matcaps are not as necessary for performance as they used to be.

Two matcap sections are provided in the shader.

## UV Mode

- `Type`: **Dropdown**, Options: `UTS Style`/`Top Pinch`/`Double Sided`

Defines how to apply the UV to the normals of the model.

### UTS Style

UTS Style maps the texture based on the view normals, with no correction for the angle of view. This results in slightly more distortion in the top and bottom of the texture, but is generally acceptable.

### Top Pinch

Top Pinch maps the texture based on the view normals, with a correction for the angle of view. This results in a more uniform texture, but has artifacts in the top and bottom of the texture.

### Double Sided

Double Sided uses the object's orientation and the reflection vectors to determine the matcap projection. This results in a consistent, unique matcap effect.

## Color

- `Type`: **Color**

Tint color applied to the matcap texture. This color is multiplied with the matcap texture.

## Matcap

- `Type`: **Color** Texture (sRGB **ON**)

Texture used for the matcap. This can be any color texture, but is typically a sphere texture.

## Border

- `Type`: **Float**, Range: `0.0 - 0.5`

How far toward the edge the matcap texture should be applied. At 0.0, it would only project the very center. At 0.5, it would project all the way to the edge. This option defaults to `0.43`.

## Mask

- `Type`: **Data** Texture (sRGB **OFF**)

Mask that defines where to apply the matcap effect. Black indicates where the matcap should not be applied, and white indicates where it should be applied.

## Emission Strength

- `Type`: **Float**, Range: `0.0 - 20.0`

How much emission to apply to the matcap.

## Intensity

- `Type`: **Float**, Range: `0.0 - 5.0`

A scaling factor for the matcap texture. This is useful for making the matcap texture more or less visible, and defaults to `1.0`. Values above `1.0` will make the matcap brighter.

## Hide in Shadow

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to hide the matcap effect in shadowed areas of the mesh.

## Blending

The blending options define how the matcap effect should be blended with the base color. Generally, only one at a time of these options should be used.

### Replace With Matcap

- `Type`: **Float**, Range: `0.0 - 1.0`

Replaces the base color with the matcap. At `1.0`, the base color is completely replaced with the matcap. At `0.0`, the base color is completely unaffected. Values in between will blend the base color with the matcap.

### Multiply Matcap

- `Type`: **Float**, Range: `0.0 - 1.0`

Multiplies the base color with the matcap. This generally darkens the base color. Black areas of the matcap will always darken, white areas will not affect the base color, and colored areas will darken if the base color doesn't match the matcap color in that area.

### Add Matcap

- `Type`: **Float**, Range: `0.0 - 1.0`

Adds the matcap to the base color. This generally brightens the base color. Black areas will be unaffected, while white areas will brighten. Colors are simply added on top of the base color.

## Override Alpha

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to override the alpha channel of the base color. At `1.0`, this will fully replace the base alpha with the matcap mask.

## Normal to use

- `Type`: **Dropdown**, Options: `Pixel`/`Vertex`

Which normal to use if custom normals are not selected. `Pixel` normals are normals affected by normal maps, `Vertex` normals use only the base normals of the mesh. This is useful for applying the matcap to a mesh that has been deformed by a normal map, while keeping the matcap smooth.

## Custom Normal

- `Type`: **Checkbox**

Whether to apply a custom Normal Map for the matcap.

### Normal Map

- `Type`: **Normal Map** Texture (sRGB **OFF**)

Normal map texture to apply when Custom Normal is enabled. 

### Intensity

- `Type`: **Float**, Range: `0.0 - 10.0`

How much to scale the normal map. This option is visible in the normal map dropdown.

## Hue Shift

- `Type`: **Checkbox**

Enables hue shifting of the matcap texture.

### Shift Speed

- `Type`: **Float**

How much to constantly shift the hue with time. A value of 1 will result in a full hue shift cycle every 20 seconds.

### Hue Shift

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to shift the base color around the hue circle.

This value is circular, and will have the same result at 0 and 1.