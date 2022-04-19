---
sidebar_position: 2
title: Shading
toc_max_heading_level: 5
---
import PoiVideo from '@site/src/components/PoiVideo'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The **Shading** section defines the base shading of the material. It controls how the material reflects light in a diffuse way, and how it is affected by other lighting. Options in the [Light Data](docs/../../shading/light-data) section heavily affect how shading is performed.

:::tip
This section often uses some terms interchangeably.

- **Lighting** and **Shading** are both talking about how the material is affected by light.
- Ramp and Gradient are both terms for a 1-dimensional function, using one input and producing one output.

:::

# Base Pass

Options relating to the base pass shading. This affects shading from baked lighting in worlds.

## Base Pass Lighting Type

- `Type`: **Dropdown**, Options: `TextureRamp`/`MathRamp`/`Wrapped`/`Skin`/`ShadeMap`/`Flat`/`Realistic`/`Cloth`

Lighting mode to use. Each of these models uses the same lighting data in different ways to produce different lighting effects.

:::caution
This option cannot be animated at runtime - consider a material swap if you need to change 
:::

### TextureRamp

TextureRamp is a Toon lighting method that uses a gradient texture to determine the lighting level. This texture can be edited using the Thry gradient editor by clicking the gradient slot.

Texture Ramp lighting is useful for creating cartoon-like lighting, especially when specific color gradients are desired.

<details>
<summary>TextureRamp Options</summary>

- `Lighting Ramp`
- `Ramp Offset`
- `Shadow Strength`
- `Ignore Ambient Color`

</details>

### MathRamp

MathRamp is a Toon Lighting method that uses a mathematically defined gradient to determine the lighting level. This gradient can be edited using the settings.

Math Ramp lighting is useful for creating robust lighting that performs well in most lighting conditions.

<details>
<summary>MathRamp Options</summary>

- `Shadow Tint`
- `Gradient Start`
- `Gradient End`
- `Shadow Strength`
- `Ignore Ambient Color`

</details>

### Wrapped

Wrapped lighting is a semi-realistic lighting method that uses a mathematical gradient to determine the lighting level, like MathRamp. However, it wraps the gradient around the edges of the material. This creates a softer, more realistic lighting effect. The [details of this method](http://www.cim.mcgill.ca/~derek/files/jgt_wrap.pdf) are more technical, but using wrapped lighting is simple.

Wrapped lighting is useful for creating flexible, realistic lighting that performs well in most lighting conditions.

<details>
<summary>Wrapped Options</summary>

- `Shadow Tint`
- `Wrap`
- `Normalization`
- `Gradient Start`
- `Gradient End`
- `Shadow Strength`
- `Ignore Ambient Color`

</details>

### Skin

Skin lighting is a semi-realistic lighting method that uses a Lookup table (LUT) to determine the lighting level. An example LUT (`SkinLUT.png`) is included in the shader package. The [details of this method](https://www.slideshare.net/leegoonz/penner-preintegrated-skin-rendering-siggraph-2011-advances-in-realtime-rendering-course) are more technical, but using skin lighting is simple. 

Skin lighting is useful for achieving a realistic human skin lighting effect.

:::note
This lighting mode is not fully implemented yet, as it requires more data to work fully. This will be improved in the future.
:::

<details>
<summary>Skin Options</summary>

- `LUT`
- `Shadow Tint`
- `Scale`
- `Shadow Strength`
- `Ignore Ambient Color`

</details>

### ShadeMap

ShadeMap lighting uses textures to determine the lighting level. Options are available for using specific ShadeMap images, or to use the base color map as the ShadeMap, with a specific ShadeColor tint added.

ShadeMap lighting is useful for creating highly stylized lighting effects. [It's similar to UnityChan Toon Shader 2's](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/blob/release/legacy/2.0/Manual/UTS2_Manual_en.md#2-basic-three-colors-and-control-maps-setups-menu) three-color shading system. 

This lighting mode uses the following options:

<details>
<summary>ShadeMap Options</summary>

- `Shadow Tint`
- `1st ShadeColor`
- `1st ShadeMap`
- `Use BaseMap as 1st ShadeMap`
- `2nd ShadeColor`
- `2nd ShadeMap`
- `Use BaseMap as 2nd ShadeMap`
- `BaseColor_Step`
- `Base/Shade_Feather`
- `ShadeColor_Step`
- `1st/2nd_Shades_Feather`
- `Blend Mode`
- `Shadow Strength`

</details>

### Flat

Flat Lighting is a toon lighting mode that uniformly lights the model at the same level. The direct and indirect lighting data is used to calculate an average across the entire model. It does not incorporate the model normals, or any normal maps, to determine lighting.

Flat Light is useful for creating models that are highly robust to local lighting, but sacrifices detail.

*This lighting mode has no user-configurable options.*

### Realistic

Realistic lighting is a physically-based lighting model that behaves similar to the lighting found in the Unity Standard shader. It's useful for creating models that are realistic and perform well in many lighting conditions.

<details>
<summary>Realistic Options</summary>

- `Shadow Tint`
- `Smoothness`

</details>

### Cloth

Cloth shading is a physically-based lighting model that draws from the Cloth shading model used in [Google's Filament engine](https://google.github.io/filament/Materials.html#materialmodels/clothmodel). It uses a packed mask to determine physically-based components of the lighting.

<details>
<summary>Cloth Options</summary>

- `Shadow Tint`
- `Clothmask Lerp`
- `Metallic`
- `Reflectance`
- `Smoothness`

</details>

## Base Pass Lighting Options

### General

#### Shadow Tint

#### Shadow Strength

#### Ignore Ambient Color

#### Gradient Start

#### Gradient End

#### Smoothness

### Toon Ramp

#### Lighting Ramp

#### Ramp Offset

#### 

#### 

#### 

#### 

#### 

#### 

#### 

#### 



## Add Pass Shading

These options affect how shading is performed in the Add pass. This pass is used for realtime lights like Point, Spot, and Directional lights.

### Add Pass Lighting Type

- `Type`: **Dropdown**, Options: `Toon`/`Realistic`, `Wrapped` (future)

Which lighting model to use for the Add pass.

#### Toon

Toon add pass lighting behaves somewhat like the math gradient lighting mode. It uses gradient settings to determine the high and low points of the added lighting.

#### Realistic

Realistic add pass lighting uses a physically-based lighting model to determine the added lighting. It is appropriate for most non-heavily-styled models.

### Gradient Start

- `Type`: **Float**, Range: `0.0 - 1.0`

Start point of the ramp gradient. Any lighting below this point will be set to maximum lighting.

### Gradient End

- `Type`: **Float**, Range: `0.0 - 1.0`

End point of the ramp gradient. Any lighting above this point will be set to minimum lighting.
