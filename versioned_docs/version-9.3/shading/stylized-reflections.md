---
sidebar_position: 12
title: Stylized Reflections
description: Stylized Reflections applies a stylized specular highlight effect to the Material, useful for creating a more toon-like stylized effect.
keywords: [stylized, specular, style, toon, effect, highlight, poiyomi, shader]
toc_min_heading_level: 2
toc_max_heading_level: 4
---

Stylized Reflections is a module that applies a stylized specular highlight or reflective effect to the material. It's useful for creating a more toon-like, stylized effect than the standard specular highlights or reflections from [Reflections & Specular](/docs/shading/reflections-and-specular.md).

:::info Changes in 9.1
All features of the previously-named module, Stylized Specular, was merged into the [UnityChan](#unity-chan-specular) Mode documented below.
:::

## Mode

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `UnityChan`/`lilToon`

Choice of which style of Stylized Reflections that you wish to use.

The default mode is `UnityChan`, which creates a cartoon-styled specular highlight in a style that is similar to Unity-Chan Toon Shader.

The mode `lilToon` adds both specular and environmental reflections in a more stylized fashion, a feature commonly found in lilToon Shader.

:::note Documentation Info
This page is split into two separate sections, as each of the Modes vastly differ from each other. Use the Table of Contents to navigate.
:::

## Unity-Chan Specular

Unity-Chan Specular is the default style, applying specular highlight effects to the material in a toon-like fashion.

### Specular Map

- `Type`: <PropertyIcon name="texture" />**Color** Texture (sRGB **ON**)

The specular map defines what color the specular highlight should have at different points along the model. The way this map is used varies depending on the `Color Blend Mode` setting.

### Tint

- `Type`: <PropertyIcon name="color" />**Color**

Tint color applied to the specular highlights. This color is multiplied with the specular map, if defined.

### Mask

- `Type`: <PropertyIcon name="texture" />**Data** Texture (sRGB **OFF**)

A mask that defines where to apply the specular highlight. Black indicates where the specular highlight should not be applied, and white indicates where it should be applied.

### Specular Mode

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Toon`/`Realistic`

Specular mode provides different options for how the specular highlight should be calculated. This modifies the options available for each layer, and how these options are used.

- `Toon`: Uses a simplified specular highlight calculation that provides direct control over the edge smoothness and size.
- `Realistic`: The standard specular highlight calculation. This is essentially equivalent to the specular highlights from Reflections & Specular.

### Color Blend Mode

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Replace`/`Add`

Determines how the specular highlight is blended with the base color of the material.

- `Replace`: The base color is replaced with the specular highlight. In this mode, the Specular Map color is used directly, and allows the specular highlight to darken the color of the material.
- `Add`: The specular highlight is added to the base color. In this mode, the Specular Map color is used to add to the base color, meaning that darker colors will not contribute to the specular highlight, while light colors will brighten the highlight.

### Strength

- `Type`: <PropertyIcon name="float" />**Float**

Controls the strength of the Stylized Specular Highlight. Generally, the `0-1` range is the most useful. Negative values are not used, and values above 1.0 will make the highlight brighter than standard specular highlights. This value is used to scale both highlight layers.

### Use Light Color

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Determines whether the Stylized Specular Highlight should use the light color or the color defined with the specular map and tint. This is useful for creating a more toon-like effect by forcing a specific color.

### Layer 1/2

Two highlight layers are available, each with the same options, allowing for a multi-layer specular highlight effect.

#### Size

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Size of the highlight layer. In the `Toon` mode, this determines where the edge of the  highlight is. In the `Realistic` mode, this is analogous to the `Smoothness` setting in the standard specular highlights, but is reversed, with a larger value indicating a larger highlight.

#### Feather

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

*Only visible if `Toon` mode is selected.*

Controls softness of the highlight. This is similar to changing smoothness in the standard specular highlights, but is independent of the size of the highlight.

#### Strength

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Strength of the individual highlight layer. This is used to scale the highlight layer, and stacks with the main `Strength` setting.

### Advanced

#### Show on Back

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Shows the Specular result on the backface.

#### Ignore Shadow

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Ignores shadows on the Specular results.

#### Ignore Casted Shadows

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Ignores casted shadows on the Specular results.

## Lil Reflections

In Lil Reflections mode, this creates the appearance of metallic or smooth surfaces as if it was in a cartoon. It closely matches the Reflections feature in LilToon shader.

### sReflection

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables Lil Reflections.

### Smoothness

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = OFF`)
- <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

How smooth Lil Reflections should be. Smoothness is a value that controls how diffuse, or blurred, highlights and reflections are. A value of `0.0` means that the material is completely diffuse, meaning reflections will be highly blurred, and specular reflections will be large and not very bright. A value of `1.0` means that the material is completely smooth, and will have very small and concentrated specular.

This value is multiplied with the value of the Smoothness Map. If no smoothness map is defined, this setting is used directly.

### GSAA

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

GSAA (Geometric Specular Anti-Aliasing) is a technique that improves the quality of specular reflections. It uses the geometry of the model to modify the specular reflections in order to reduce Specular Aliasing, which is a visible artifact that occurs at high smoothness levels, especially with highly detailed models or normal maps.

### Metallic

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = OFF`)
- <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

How metallic Lil Reflections should be. Metallics are usually used for (as would be expected) metals. However,The defining feature of metallic surfaces is that reflections are tinted with the color of the material. For non-metallic, the reflections are not tinted.

This value is multiplied with the value of the Metallic Map. If no metallic map is defined, this setting is used directly.

### Color / Mask

- `Type`: <PropertyIcon name="color" />**Color**

Defines the Color and Tint of the surface used for Lil Reflections.

### Reflectance

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Defines the intensity of the reflectivity.

### Specular

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Creates a toon-style specular appearance on the Material.

#### Specular Mode

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Toon`/`Realistic`

Specular mode provides different options for how the specular highlight should be calculated. This modifies the options available for each layer, and how these options are used.

- `Toon`: Uses a simplified specular highlight calculation that provides direct control over the edge smoothness and size.
- `Realistic`: The standard specular highlight calculation. This is essentially equivalent to the specular highlights from Reflections & Specular.

#### Normal Strength

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

How much to blend the speculars with the Normals of your Material.

#### Border

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Defines the border of the specular.

#### Blur

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Blurs the border of the specular. Lower values are more sharper, while higher values are more soft.

#### MultiLight Specular

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Allows MultiLight specular to be used.

### Environmental Reflections

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables the ability to render Environmental Reflections from the World onto the specular reflections.

#### Normal Strength

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

How much to blend the Environmental Reflections with the Normals of your Material.

#### Color

- `Type`: <PropertyIcon name="color" />**Color**
- <PropertyIcon name="texture" />**Color** Texture (`sRGB = ON`)

Tints the color of the environmental reflections.

#### Cubemap Fallback

- `Type`: <PropertyIcon name="texture" />**Cubemap** Texture (`sRGB = ON`)

#### Override

- `Type`: <PropertyIcon name="texture" />**Toggle**

If enabled, will strictly enforce the Cubemap Fallback to always be used regardless.

#### Enable Lighting Fallback

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Enables the Lighting Fallback in a variable value.

#### Apply Transparency

- `Type`: <PropertyIcon name="toggle" />**Toggle**

If enabled, will apply transparency to the material.

#### Blend Modes

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Replace`/`Add`/`Screen`/`Multiply`

Choice of blending operations to use.