---
sidebar_position: 12
title: Stylized Reflections
description: Stylized Reflections applies a stylized specular highlight effect to the Material, useful for creating a more toon-like stylized effect.
keywords: [stylized, specular, style, toon, effect, highlight, poiyomi, shader]
toc_min_heading_level: 2
toc_max_heading_level: 4
---
import PoiVideo from '@site/src/components/PoiVideo'

Stylized Reflections is a module that applies a stylized specular highlight or reflective effect to the material. It's useful for creating a more toon-like, stylized effect than the standard specular highlights or reflections from [Reflections & Specular](/docs/shading/reflections-and-specular.md).

<!--

## Mode

- `Type`: **Dropdown**, Options: `UnityChan`/`lilToon`

Choice of which style of Stylized Reflections that you wish to use.

The default mode is `UnityChan`, which reflects all the features of "Stylized Specular," used in previous versions of Poiyomi Shaders prior to 9.2.10.

The mode `lilToon` adds both specular and environmental reflections in a more stylized fashion, a feature commonly found in lilToon.

:::info Documentation Info
This page is split into two separate sections, as each of the Modes vastly differ from each other. Use the Table of Contents to navigate.
:::

## Unity Chan Specular

-->

### Specular Map

- `Type`: **Color** Texture (sRGB **ON**)

The specular map defines what color the specular highlight should have at different points along the model. The way this map is used varies depending on the `Color Blend Mode` setting.

### Tint

- `Type`: **Color**

Tint color applied to the specular highlights. This color is multiplied with the specular map, if defined.

### Mask

- `Type`: **Data** Texture (sRGB **OFF**)

A mask that defines where to apply the specular highlight. Black indicates where the specular highlight should not be applied, and white indicates where it should be applied.

### Specular Mode

- `Type`: **Dropdown**, Options: `Toon`/`Realistic`

Specular mode provides different options for how the specular highlight should be calculated. This modifies the options available for each layer, and how these options are used.

- `Toon`: Uses a simplified specular highlight calculation that provides direct control over the edge smoothness and size.
- `Realistic`: The standard specular highlight calculation. This is essentially equivalent to the specular highlights from Reflections & Specular.

### Color Blend Mode

- `Type`: **Dropdown**, Options: `Replace`/`Add`

Determines how the specular highlight is blended with the base color of the material.

- `Replace`: The base color is replaced with the specular highlight. In this mode, the Specular Map color is used directly, and allows the specular highlight to darken the color of the material.
- `Add`: The specular highlight is added to the base color. In this mode, the Specular Map color is used to add to the base color, meaning that darker colors will not contribute to the specular highlight, while light colors will brighten the highlight.

### Strength

- `Type`: **Float**

Controls the strength of the Stylized Specular Highlight. Generally, the `0-1` range is the most useful. Negative values are not used, and values above 1.0 will make the highlight brighter than standard specular highlights. This value is used to scale both highlight layers.

### Use Light Color

- `Type`: **Checkbox**

Determines whether the Stylized Specular Highlight should use the light color or the color defined with the specular map and tint. This is useful for creating a more toon-like effect by forcing a specific color.

### Layer 1/2

Two highlight layers are available, each with the same options, allowing for a multi-layer specular highlight effect.

#### Size

- `Type`: **Float**, Range: `0.0 - 1.0`

Size of the highlight layer. In the `Toon` mode, this determines where the edge of the  highlight is. In the `Realistic` mode, this is analogous to the `Smoothness` setting in the standard specular highlights, but is reversed, with a larger value indicating a larger highlight.

#### Feather

- `Type`: **Float**, Range: `0.0 - 1.0`

*Only visible if `Toon` mode is selected.*

Controls softness of the highlight. This is similar to changing smoothness in the standard specular highlights, but is independent of the size of the highlight.

#### Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

Strength of the individual highlight layer. This is used to scale the highlight layer, and stacks with the main `Strength` setting.

### Advanced

#### Show on Back

- `Type`: **Checkbox**

Shows the Specular result on the backface.

#### Ignore Shadow

- `Type`: **Checkbox**

Ignores shadows on the Specular results.

#### Ignore Casted Shadows

- `Type`: **Checkbox**

Ignores casted shadows on the Specular results.

<!--

## Lil Reflections

### sReflection

- `Type`: **Float**

### Smoothness

- `Type`: **Data** Texture (`sRGB = OFF`)
  - Float, Range: `0.0 - 1.0`

### GSAA

- `Type`: **Float**, Range: `0.0 - 1.0`

### Metallic

- `Type`: **Data** Texture (`sRGB = OFF`)
  - Float, Range: `0.0 - 1.0`

### Color / Mask

- `Type`: **Color**

### Reflectance

- `Type`: **Float**, Range: `0.0 - 1.0`

### Specular

- `Type`: **Checkbox**

#### Specular Mode

- `Type`: **Dropdown**, Options: `Toon`/`Realistic`

#### Normal Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

#### Border

- `Type`: **Float**, Range: `0.0 - 1.0`

#### Blur

- `Type`: **Float**, Range: `0.0 - 1.0`

#### MultiLight Specular

- `Type`: **Checkbox**

### Environmental Reflections

- `Type`: **Checkbox**

#### Normal Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

#### Color

- `Type`: **Color**
  - **Color** Texture (`sRGB = ON`)

#### Cubemap Fallback

- `Type`: **Cubemap** Texture (`sRGB = ON`)

#### Override

- `Type`: **Checkbox**

#### Enable Lighting Fallback

- `Type`: **Float**, Range: `0.0 - 1.0`

#### Apply Transparency

- `Type`: **Checkbox**

#### Blend Modes

- `Type`: **Dropdown**, Options: `Replace`/`Add`/`Screen`/`Multiply`

-->