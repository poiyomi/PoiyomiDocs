---
sidebar_position: 3
title: Matcap / Sphere Textures
---
import PoiVideo from '@site/src/components/PoiVideo'

Matcaps, or sphere textures, are textures that are mapped to an object based on the relative angle of the view direction and the material's normal direction. This means that areas that are pointing up will be mapped to the top center of the matcap texture, areas pointing down and right will be mapped to the bottom right of the texture, and so on.

The word Matcap is a portmanteau of **M**aterial **C**apture. The technique was originally designed as a fast, low-overhead way to approximate the look of specific materials, baking in many details. With modern GPU performance and physically based shading techniques, matcaps are not as necessary for performance as they used to be.

## UV Mode

- `Type`: **Dropdown**, Options: `UTS Style`/`Top Pinch`/`Double Sided`

Defines how to apply the UV to the normals of the model.

### UTS Style



### Top Pinch

### Double Sided

## Color

- `Type`: **Color**

Description

## Matcap

- `Type`: **Color** Texture (sRGB **ON**)

Description

## Border

- `Type`: **Float**, Range: `0.0 - 0.5`

Description

## Mask

- `Type`: **Color** Texture (sRGB **ON**)

Description

## Emission Strength

- `Type`: **Float**, Range: `0.0 - 20.0`

Description

## Intensity

- `Type`: **Float**, Range: `0.0 - 5.0`

## Hide in Shadow

- `Type`: **Float**, Range: `0.0 - 1.0`

Description

## Blending

### Replace With Matcap

- `Type`: **Float**, Range: `0.0 - 1.0`

Description

### Multiply Matcap

- `Type`: **Float**, Range: `0.0 - 1.0`

Description

### Add Matcap

- `Type`: **Float**, Range: `0.0 - 1.0`

Description

## Override Alpha

- `Type`: **Float**, Range: `0.0 - 1.0`

Description

## Normal to use

- `Type`: **Dropdown**, Options: `Pixel`/`Vertex`

Description

## Custom Normal

- `Type`: **Checkbox**

### Normal Map

- `Type`: **Normal Map** Texture (sRGB **OFF**)

Description

## Hue Shift

- `Type`: **Checkbox**

Description

### Shift Speed

- `Type`: **Float**

Description

### Hue Shift

- `Type`: **Float**, Range: `0.0 - 1.0`

Description