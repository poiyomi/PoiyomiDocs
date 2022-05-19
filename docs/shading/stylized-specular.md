---
sidebar_position: 9
title: Stylized Specular
---
import PoiVideo from '@site/src/components/PoiVideo'

Stylized Specular is a module that applies a stylized Specular Highlight effect to the material. It's useful for creating a more toon-like, stylized effect than the standard Specular Highlights from Reflections & Specular.

## Specular Map

- `Type`: **Color** Texture (sRGB **ON**)

The specular map defines what color the specular highlight should have at different points along the model. The way this map is used varies depending on the `Color Blend Mode` setting.

## Tint

- `Type`: **Color**

Tint color applied to the specular highlights. This color is multiplied with the specular map, if defined.

## Mask

- `Type`: **Data** Texture (sRGB **OFF**)

A mask that defines where to apply the specular highlight. Black indicates where the specular highlight should not be applied, and white indicates where it should be applied.

## Specular Mode

- `Type`: **Dropdown**, Options: `Toon`/`Realistic`

Specular mode provides different options for how the specular highlight should be calculated. This modifies the options available for each layer, and how these options are used.

- `Toon`: Uses a simplified specular highlight calculation that provides direct control over the edge smoothness and size.
- `Realistic`: The standard specular highlight calculation. This is essentially equivalent to the specular highlights from Reflections & Specular.

## Color Blend Mode

- `Type`: **Dropdown**, Options: `Replace`/`Add`

Determines how the specular highlight is blended with the base color of the material.

- `Replace`: The base color is replaced with the specular highlight. In this mode, the Specular Map color is used directly, and allows the specular highlight to darken the color of the material.
- `Add`: The specular highlight is added to the base color. In this mode, the Specular Map color is used to add to the base color, meaning that darker colors will not contribute to the specular highlight, while light colors will brighten the highlight.

## Strength

- `Type`: **Float**

Controls the strength of the Stylized Specular Highlight. Generally, the `0-1` range is the most useful. Negative values are not used, and values above 1.0 will make the highlight brighter than standard specular highlights. This value is used to scale both highlight layers.

## Use Light Color

- `Type`: **Checkbox**

Determines whether the Stylized Specular Highlight should use the light color or the color defined with the specular map and tint. This is useful for creating a more toon-like effect by forcing a specific color.

## Layer 1/2

Two highlight layers are available, each with the same options, allowing for a multi-layer specular highlight effect.

### Size

- `Type`: **Float**, Range: `0.0 - 1.0`

Size of the highlight layer. In the `Toon` mode, this determines where the edge of the  highlight is. In the `Realistic` mode, this is analogous to the `Smoothness` setting in the standard specular highlights, but is reversed, with a larger value indicating a larger highlight.

### Feather

- `Type`: **Float**, Range: `0.0 - 1.0`

*Only visible if `Toon` mode is selected.*

Controls softness of the highlight. This is similar to changing smoothness in the standard specular highlights, but is independent of the size of the highlight.

### Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

Strength of the individual highlight layer. This is used to scale the highlight layer, and stacks with the main `Strength` setting.
