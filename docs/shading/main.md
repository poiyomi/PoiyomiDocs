---
sidebar_position: 2
title: Shading
description: The Shading section determines the primary base shading of the Material, controlling how the Material reflects light diffuse and how it is affected by other lighting.
keywords: [shading, diffuse, lighting, base, style, stylized, base pass, add pass, texture ramp, math gradient, multilayer math, wrapped, skin, shademap, flat, realistic, cloth, toon, poiyomi, shader]
toc_max_heading_level: 3
---
import PoiVideo from '@site/src/components/PoiVideo'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The **Shading** section defines the base shading of the material. It controls how the material reflects light in a diffuse way, and how it is affected by other lighting. Options in the [Light Data](/docs/shading/light-data.md) section heavily affect how shading is performed.

<a target="_blank" href="/img/shading/Shading_All.png">
<img src="/img/shading/Shading_All.png" alt="Various Shading Styles on multiple Material Spheres."/>
</a>

*Various Shading Styles applied on these multiple Material Spheres.*

:::tip
This section often uses some terms interchangeably.

- **Lighting** and **Shading** are both talking about how the material is affected by light.
- Ramp and Gradient are both terms for a 1-dimensional function, using one input and producing one output.
:::

## Lighting Type

- `Type`: **Dropdown**, Options: `TextureRamp`/`Multilayer Math`/`Wrapped`/`Skin`/`ShadeMap`/`Flat`/`Realistic`/`Cloth`/`SDF`

Lighting mode to use. Each of these models uses the same lighting data in different ways to produce different lighting effects.

:::warning
This option cannot be animated at runtime - consider a material swap if you need to change the lighting mode for some reason!
:::

### TextureRamp

TextureRamp is a Toon lighting method that uses a gradient texture to determine the lighting level. This texture can be edited using the Thry gradient editor by clicking the gradient slot.

Texture Ramp lighting is useful for creating cartoon-like lighting, especially when specific color gradients are desired.

<PoiVideo url='/vid/shading/Shading_TextureRamp.mp4'/>

*Demonstration of Texture Ramp Shading using Thry Gradient Editor.*

<details>
<summary><b>TextureRamp Options</b></summary>

#### Shadow Tint

- `Type`: **Color**

Shadow Tint will tint the shadow map with a specific color, useful for creating a specific stylized shading effect. This color will be mixed with the Lighting Ramp and Ambient Color (if enabled) to produce the final shading.

#### Lighting Ramp

- `Type`: **Color Gradient** Texture (sRGB **ON**)

Ramp texture that controls the lighting. The lightmap is mapped from left-to-right, with the left-most pixel being the darkest, and the right-most pixel being the lightest. This texture generally uses a black-to-white gradient, but it can contain colors to create a more specific lighting effect.

This texture can be edited using the Thry gradient editor by clicking the gradient slot.

#### Ramp Offset

- `Type`: **Float**, Range: `-1.0 - 1.0`

Offsets the ramp from left to right. Negative values will bias the lighting toward the left (darker) side, and positive values will bias the lighting toward the right (lighter) side.

#### Shadow Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

Determines how strong of a shadow is applied. A value of `0.0` will not apply any shadow, and a value of `1.0` will apply a full shadow.

#### Ignore Indirect Shadow Color

- `Type`: **Float**, Range: `0.0 - 1.0`

Determines whether or not to incorporate the full ambient color into the lighting calculation. A value of `0.0` will ignore the ambient color, and a value of `1.0` will fully tint the shadow with the ambient color.

</details>

### Multilayer Math

Multilayer Math is a Toon Lighting method that uses mathematically defined gradients to determine the lighting level. These gradients can be edited using the defined settings, and set using colors or textures. Multilayer Math is similar to the lighting model used in the [LilToon](https://github.com/lilxyzw/lilToon) shader. Multilayer Math shading is useful for creating robust shading that performs well in most lighting conditions.

On a basic level, Multilayer Math has three shadow layers, and a border. Not all layers need to be used, nor the border. In previous versions of the shader, the *Math Gradient* shading mode was used to create a similar effect, but this mode was removed in favor of the more flexible Multilayer Math.

<PoiVideo url='/vid/shading/Shading_MultilayerMath.mp4'/>

*Demonstration of Multilayer Math Shading with the Shadow Layers.*

<details>
<summary><b>Multilayer Math Options</b></summary>

#### Shadow Layers

<details>
<summary><b>Shadow Layer 1 Options</b></summary>

#### Color Tex

- `Type`: **Color** Texture (`sRGB = ON`)

The Shadow Color texture, if defined, sets the base color of the shadow in different parts of the model. Will be tinted by the Shadow color.

#### Color

- `Type`: **Color**

Defines the basic shadow color for the Multilayer Math shading model. This color must have a non-zero alpha value to take effect.

#### Border

- `Type`: **Float**, Range: `0.0 - 1.0`

Defines the position on the lightmap of the border between the shadow color and light. In other words, this sets where the edge of the shadow is.

#### Blur

- `Type`: **Float**, Range: `0.0 - 1.0`

Defines how much to blur the shadow out from the border position. A value of `0.0` will not blur the shadow, and a value of `1.0` will blur the shadow to the edge of the lightmap.

#### Receive Shadow

- `Type`: **Float**, Range: `0.0 - 1.0`

How much this shadow layer should receive shadows.

</details>

<details>
<summary><b>Shadow Layer 2 Options</b></summary>

#### Color Tex

- `Type`: **Color** Texture (`sRGB = ON`)

The Shadow Color texture, if defined, sets the base color of the shadow in different parts of the model. Will be tinted by the Shadow color.

#### Color

- `Type`: **Color**

Defines the basic shadow color for the Multilayer Math shading model. This color must have a non-zero alpha value to take effect.

#### Border

- `Type`: **Float**, Range: `0.0 - 1.0`

Defines the position on the lightmap of the border between the shadow color and light. In other words, this sets where the edge of the shadow is.

#### Blur

- `Type`: **Float**, Range: `0.0 - 1.0`

Defines how much to blur the shadow out from the border position. A value of `0.0` will not blur the shadow, and a value of `1.0` will blur the shadow to the edge of the lightmap.

#### Receive Shadow

- `Type`: **Float**, Range: `0.0 - 1.0`

How much this shadow layer should receive shadows.

</details>

<details>
<summary><b>Shadow Layer 3 Options</b></summary>

#### Color Tex

- `Type`: **Color** Texture (`sRGB = ON`)

The Shadow Color texture, if defined, sets the base color of the shadow in different parts of the model. Will be tinted by the Shadow color.

#### Color

- `Type`: **Color**

Defines the basic shadow color for the Multilayer Math shading model. This color must have a non-zero alpha value to take effect.

#### Border

- `Type`: **Float**, Range: `0.0 - 1.0`

Defines the position on the lightmap of the border between the shadow color and light. In other words, this sets where the edge of the shadow is.

#### Blur

- `Type`: **Float**, Range: `0.0 - 1.0`

Defines how much to blur the shadow out from the border position. A value of `0.0` will not blur the shadow, and a value of `1.0` will blur the shadow to the edge of the lightmap.

#### Receive Shadow

- `Type`: **Float**, Range: `0.0 - 1.0`

How much this shadow layer should receive shadows.

</details>

#### Border

<details>
<summary><b>Border Options</b></summary>

#### Border Color

- `Type`: **Color**

The Border Color defines the color of a border, which is an extra color applied to the edge of the main shadow. This color must have a non-zero alpha value to take effect.

#### Border Range

- `Type`: **Float**, Range: `0.0 - 1.0`

How far off of the border the border color is applied. A value of `0.0` will apply the border color to the edge of the shadow, and a value of `1.0` will apply the border color to the dark edge of the lightmap.

</details>

#### Shadow Map

<details>
<summary><b>Shadow Map Options</b></summary>

#### Map Type

- `Type`: **Dropdown**, Options: `Strength`/`Flat`

Choice of what Shadow Map type should be used. `Strength` will go by the strength values determined by the map, while `Flat` will enable customized sliders to determine the appearance.

#### Color Tex

- `Type`: **Color** Texture (`sRGB = ON`)

Texture Slot that determines the Shadow Map.

#### Border

- `Type`: **Float**, Range: `-2.0 - 2.0`

Border intensity of the shadow map.

:::note
This slider only shows when Map Type is set to `Flat`.
:::

#### Blur

- `Type`: **Float**, Range: `0.001 - 2.0`

How much to blur the border of the shadow map.

:::note
This slider only shows when Map Type is set to `Flat`.
:::

</details>

#### Shadow Border Map

- `Type`: **Boolean**

Enables the Shadow Border Map feature, allowing control over AO-style Shadow boundaries on Multilayer Math.

<details>
<summary><b>Shadow Border Map Options</b></summary>

#### AO Map

- `Type`: **Data** Texture (`sRGB = OFF`)

Defines the AO (Ambient Occlusion) texture to use in Multilayer Math.

#### Border Map LOD

- `Type`: **Float**, Range: `0.0 - 1.0`

Amount of Level of Detail to use for the Border Map.

#### Ignore Border Properties

- `Type`: **Boolean**

If enabled, ignores the properties set in [Border](#border-3).

#### 1st Min

- `Type`: **Float**, Range: `0.0 - 1.0`

Minimum amount from the Shadow Border to apply to Layer 1.

#### 1st Max

- `Type`: **Float**, Range: `0.0 - 1.0`

Maximum amount from the Shadow Border to apply to Layer 1.

#### 2nd Min

- `Type`: **Float**, Range: `0.0 - 1.0`

Minimum amount from the Shadow Border to apply to Layer 2.

#### 2nd Max

- `Type`: **Float**, Range: `0.0 - 1.0`

Maximum amount from the Shadow Border to apply to Layer 2.

#### 3rd Min

- `Type`: **Float**, Range: `0.0 - 1.0`

Minimum amount from the Shadow Border to apply to Layer 3.

#### 3rd Max

- `Type`: **Float**, Range: `0.0 - 1.0`

Maximum amount from the Shadow Border to apply to Layer 3.

</details>

#### Blur Map

- `Type`: **Data** Texture (`sRGB = OFF`)

Texture Slot to define the Blur Map of Multilayer Math.

#### Non Linear Lightmap

- `Type`: **Boolean**

If enabled, changes the shadow gradient direction to be non-linear.

#### Base Color Blend

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to blend the shadow gradients to the Base Color.

#### Env Strength on Shadow Color

- `Type`: **Float**, Range: `0.0 - 1.0`

Determines how strong the environmental influences the shadow color.

#### Shadow Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

Determines how strong of a shadow is applied. A value of `0.0` will not apply any shadow, and a value of `1.0` will apply a full shadow.

#### Ignore Indirect Shadow Color

- `Type`: **Float**, Range: `0.0 - 1.0`

Determines whether or not to incorporate the full ambient color into the lighting calculation. A value of `0.0` will ignore the ambient color, and a value of `1.0` will fully tint the shadow with the ambient color.

</details>

### Wrapped

Wrapped lighting is a semi-realistic lighting method that uses a mathematical gradient to determine the lighting level, like Multilayer Math. However, it wraps the gradient around the edges of the material. This creates a softer, more realistic lighting effect. Wrapped lighting is useful for creating flexible, realistic lighting that performs well in most lighting conditions.

For technical details of this method, see Jordan Stevens' [Lighting Models In Unity](https://www.jordanstevenstechart.com/lighting-models) (*Half-Lambert (Diffuse Wrap)* section), Stephen Hill's [Righting Wrap](https://blog.selfshadow.com/2011/12/31/righting-wrap-part-1/), or Steve McAuley's [Energy-Conserving Wrapped Diffuse](https://web.archive.org/web/20210228210901/http://blog.stevemcauley.com/2011/12/03/energy-conserving-wrapped-diffuse/).

<PoiVideo url='/vid/shading/Shading_Wrapped.mp4'/>

*Demonstration of Wrapped Shading and the various adjustments.*

<details>
<summary><b>Wrapped Options</b></summary>

#### Shadow Tint

- `Type`: **Color**

Shadow Tint will tint the shadow map with a specific color, useful for creating a specific stylized shading effect. This color will be mixed with the Ambient Color (if enabled) to produce the final shading.

#### LightSide Color

- `Type`: **Color**

LightSide Color will tint the color of the side in Lighting.

#### Wrap

- `Type`: **Float**, Range: `0.0 - 2.0`

Determines how much to wrap the gradient around the edges of the model. A value of `0.0` will not wrap the gradient at all, producing a realistic, more aggressive shadow edge. Increase this value to wrap the gradient more significantly, producing a softer, more stylized shadow edge. At a value of `2.0` the gradient will produce an almost flat lit effect.

#### Normalization

- `Type`: **Float**, Range: `0.0 - 1.0`

Normalization is a value that determines how much to darken the wrapped gradient. This is usually kept at `0.5`, but can be adjusted (especially on the fly) to dynamically adjust the model's light level.

How much this value applies depends on the Wrap value. At a Wrap of `0.0`, Normalization will have no effect at all. At increasing Wrap values, Normalization will have an increasingly important effect.

#### Gradient Start

- `Type`: **Float**, Range: `0.0 - 1.0`

Gradient Start controls the start point of the lightmap gradient that the wrap is applied to. Generally, this value is kept between `0.0 - 0.2`, with higher values resulting in more bright areas on the model.

#### Gradient End

- `Type`: **Float**, Range: `0.0 - 1.0`

Gradient End controls the end point of the lightmap gradient that the wrap is applied to. Generally, this value is kept between `0.5 - 1.0`, with higher values resulting in less dark areas on the model. A wider range between the Gradient Start and Gradient End will result in a softer gradient, while a narrower range will result in a sharper gradient.

#### Shadow Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

Determines how strong of a shadow is applied. A value of `0.0` will not apply any shadow, and a value of `1.0` will apply a full shadow.

#### Ignore Indirect Shadow Color

- `Type`: **Float**, Range: `0.0 - 1.0`

Determines whether or not to incorporate the full ambient color into the lighting calculation. A value of `0.0` will ignore the ambient color, and a value of `1.0` will fully tint the shadow with the ambient color.

</details>

### Skin

Skin lighting is a semi-realistic lighting method that uses a Lookup table (LUT) to determine the lighting level. An example LUT (`SkinLUT.png`) is included in the shader package. The [details of this method](https://www.slideshare.net/leegoonz/penner-preintegrated-skin-rendering-siggraph-2011-advances-in-realtime-rendering-course) are more technical, but using skin lighting is simple. 

Skin lighting is useful for achieving a realistic human skin lighting effect.

:::note
This lighting mode is experimental and is not fully implemented yet, as it requires more data (thickness maps) to work fully. This will be improved in the future.
:::

<PoiVideo url='/vid/shading/Shading_Skin.mp4'/>

*Demonstration of Skin Shading and how a Thickness Map is used with it.*

<details>
<summary><b>Skin Options</b></summary>

#### Shadow Tint

- `Type`: **Float**, Range: `0.0 - 1.0`

Shadow Tint will tint the shadow with a specific color, useful for creating a specific stylized shading effect. This color will be mixed with the Ambient Color (if enabled) to produce the final shading.

#### LUT

- `Type`: **Data** Texture (`sRGB = OFF`)

The LUT is used to determine the lighting ramp at various scales. This texture consists of a series of RGB values, with the horizontal axis representing the light level, and the vertical axis representing the thickness of the skin.

#### Scale

- `Type`: **Float**, Range: `0.0 - 1.0`

Scales the Subsurface Scattering (SSS) effect. A value of `0.0` will disable the SSS effect, and a value of `1.0` will apply the SSS effect at full strength.

#### Thickness Map

- `Type`: **Data** Texture (`sRGB = OFF`)

#### Thickness Power

- `Type`: **Float**, Range: `0.0 - 3.0`

Modifies the amount of influence the Thickness Map has on the LUT.

#### Bump Blur

- `Type`: **Float**, Range: `0.0 - 1.0`

Sets how much to blur the Bumps from the Thickness Map.

#### Shadow Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

Determines how strong of a shadow is applied. A value of `0.0` will not apply any shadow, and a value of `1.0` will apply a full shadow.

#### Ignore Indirect Shadow Color

- `Type`: **Float**, Range: `0.0 - 1.0`

Determines whether or not to incorporate the full ambient color into the lighting calculation. A value of `0.0` will ignore the ambient color, and a value of `1.0` will fully tint the shadow with the ambient color.

</details>

### ShadeMap

ShadeMap lighting uses textures to determine the lighting level. Options are available for using specific ShadeMap images, or to use the base color map as the ShadeMap, with a specific ShadeColor tint added.

ShadeMap lighting is useful for creating highly stylized lighting effects. [It's similar to UnityChan Toon Shader 2's](https://github.com/unity3d-jp/UnityChanToonShaderVer2_Project/blob/release/legacy/2.0/Manual/UTS2_Manual_en.md#2-basic-three-colors-and-control-maps-setups-menu) three-color shading system.

For a basic ShadeMap shading setup, you can enable *Use BaseMap as 1st ShadeMap* and *Use BaseMap as 2nd ShadeMap*, set the *1st ShadeColor* and *2nd ShadeColor* to a lighter and darker tone respectively, and set the BaseColor Step and ShadeColor Step to a larger (`0.4 - 0.6`) and smaller (`0.1 - 0.3`), respectively.

<PoiVideo url='/vid/shading/Shading_ShadeMap.mp4'/>

*Demonstration of ShadeMap and it's properties.*

<details>
<summary><b>ShadeMap Options</b></summary>

#### 1st ShadeColor

- `Type`: **Color**

Primary tint applied to the 1st ShadeMap. If ShadeMap texture is defined, this color will be mixed with the ShadeMap texture. If not, it should generally be set lighter than the 2nd ShadeColor.

#### 1st ShadeMap

- `Type`: **Color** Texture (`sRGB = ON`)

Shading map used for the 1st ShadeColor. If this is not defined, the 1st ShadeColor alone will be used. Shading maps define what the shadow should look like in this area.

#### Use BaseMap as 1st ShadeMap

- `Type`: **Boolean**

Whether to use the BaseColor map as the 1st ShadeMap. With no 1st ShadeMap defined, this should generally be enabled.

#### 2nd ShadeColor

- `Type`: **Color**

Primary tint applied to the 1st ShadeMap. If ShadeMap texture is defined, this color will be mixed with the ShadeMap texture. If not, it should generally be set lighter than the 2nd ShadeColor.

#### 2nd ShadeMap

- `Type`: **Color** Texture (`sRGB = ON`)

Shading map used for the 1st ShadeColor. If this is not defined, the 1st ShadeColor alone will be used.

#### Use BaseMap as 2nd ShadeMap

- `Type`: **Boolean**

Whether to use the BaseColor map as the 2nd ShadeMap. With no 2nd ShadeMap defined, this should generally be enabled.

#### BaseColor_Step

- `Type`: **Float**, Range: `0.01 - 1.0`

Defines where the edge should lie between the base lit color and the 1st shadow. A value of `0.0` will result in a completely lit area, and a value of `1.0` will result in a completely shadowed area.

#### Base/Shade_Feather

- `Type`: **Float**, Range: `0.0001 - 1.0`

How much to feather the edge of the base color and shading. A value of `0.0` will result in a sharp edge, and a value of `1.0` will result in a very smooth edge.

#### ShadeColor_Step

- `Type`: **Float**, Range: `0.01 - 1.0`

Defines where the edge should lie between the 1st shadow and the 2nd shadow. A value of `0.0` will result in no 2nd shadow, and a value of `1.0` will make the 2nd shadow dominate the overall shadow. This value is dependent on the BaseColor_Step value.

#### 1st/2nd_Shades_Feather

- `Type`: **Float**, Range: `0.0001 - 1.0`

How much to feather the edge of the 1st shadow and the 2nd shadow. A value of `0.0` will result in a sharp edge, and a value of `1.0` will result in a very smooth edge.

#### Blend Mode

- `Type`: **Dropdown**, Options: `Replace`/`Multiply`

Defines how the shadow should blend with the base color. Replace will replace the base color with the shadow, creating a more straightforward effect. Multiply will multiply the base color with the shadow, creating a more stylized effect.

#### Shadow Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to apply the shadow. A value of `0.0` will not apply any shadow, and a value of `1.0` will apply the shadow fully.

</details>

### Flat

Flat Lighting is a toon lighting mode that uniformly lights the model at the same level. The direct and indirect lighting data is used to calculate an average across the entire model. It does not incorporate the model normals, or any normal maps, to determine lighting.

Flat Light is useful for creating models that are highly robust to local lighting, but sacrifices detail.

:::info
The `Flat` lighting mode has no user-configurable options.
:::

<a target="_blank" href="/img/shading/Shading_Flat.png">
<img src="/img/shading/Shading_Flat.png" alt="Poiyomi Flat Shading"/>
</a>

*Flat Shading. Completely life-less.*

### Realistic

Realistic lighting is a physically-based lighting model that behaves similar to the lighting found in the Unity Standard shader. It's useful for creating models that are realistic and perform well in many lighting conditions.

<a target="_blank" href="/img/shading/Shading_Realistic.png">
<img src="/img/shading/Shading_Realistic.png" alt="Poiyomi Realistic Shading"/>
</a>

*Realistic Shading.*

<details>
<summary>Realistic Options</summary>

#### Shadow Tint

- `Type`: **Color**

Shadow Tint will tint the shadow with a specific color, useful for creating a specific stylized shading effect. This color will be mixed with the Ambient Color (if enabled) to produce the final shading.

#### Smoothness

- `Type`: **Float**, Range: `0.0 - 1.0`

Smoothness is a baked-in value determining how much additional reflection the material should have due to realistic shading. It can often be set to `0.0` and *Reflections & Specular* used instead to create a more realistic look.

</details>

### Cloth

Cloth shading is a physically-based lighting model that draws from the Cloth shading model used in [Google's Filament engine](https://google.github.io/filament/Materials.html#materialmodels/clothmodel). It uses a packed mask to determine physically-based components of the lighting.

:::warning
Due to the unique properties used in Cloth shading, it's <u>not recommended</u> to use both Cloth shading and [Reflections & Specular](/docs/shading/reflections-and-specular.md) at the same time!
:::

<details>
<summary><b>Cloth Options</b></summary>

#### Shadow Tint

- `Type`: **Color**

Shadow Tint will tint the shadow map with a specific color, useful for creating a specific stylized shading effect. This color will be mixed with the Ambient Color (if enabled) to produce the final shading.

#### MultScatter Cloth DFG

This is a built-in data texture that contains a pre-baked lookup table for the cloth model. It cannot be modified.

#### Maps

- `Type`: **Data** Texture (`sRGB = OFF`)

The map texture defines multiple settings of the Cloth lighting across different parts of the material. These maps are *packed* into a single texture, which increases performance and reduces memory usage.

This texture can be exported from programs like Adobe Substance Painter as a pre-packed map, or packed using the inline packing tool included with the Poiyomi Shaders package.

##### Metallic Map

- `Type`: **Data** Texture (`sRGB = OFF`)

The metallic map defines where the material should be metallic, and where it should be non-metallic (dielectric). This should generally be black or white, with few situations requiring in-between values.

##### Cloth Mask

- `Type`: **Data** Texture (`sRGB = OFF`)

The cloth mask defines where there should be standard specular and diffuse lighting, and where the cloth model should be rendered. This should generally be black or white, with white representing the cloth model, and black representing the standard specular and diffuse lighting.

##### Reflectance

- `Type`: **Data** Texture (`sRGB = OFF`)

The reflectance mask defines the reflectivity of the model. Reflectivity is a physically-based-shading parameter that determines how much reflection a non-metallic surface will have. This can often be left white, but can be used to create a more realistic look.

##### Smoothness

- `Type`: **Data** Texture (`sRGB = OFF`)

The Smoothness map defines where the material should be smoother, and where it should be rougher. This value can vary smoothly between `0.0` and `1.0` according to variations and different parts of a material.

#### Clothmask Lerp

- `Type`: **Boolean**

Clothmask Lerp defines whether the cloth mask should lerp (linearally interpolate) between the cloth shading and realistic shading. This should generally be left off.

#### Metallic

- `Type`: **Float**, Range: `0.0 - 1.0`

How metallic the material should be. Metallic materials are usually used for (as would be expected) metals. The defining feature of metallic surfaces is that reflections are tinted with the color of the material. For non-metallic materials, the reflections are not tinted.

This value is multiplied with the value of the Metallic Map. If no metallic map is defined, this setting is used directly.

#### Reflectance

- `Type`: **Float**, Range: `0.35 - 1.0`

Reflectivity is a physically-based-shading parameter that determines how much reflection a non-metallic surface will have. This heavily influences the look of the cloth shading, and will vary heavily according to different types of cloth.

#### Smoothness

- `Type`: **Float**, Range: `0.0 - 1.0`

How smooth the material should be. Smoothness is a value that controls how diffuse, or blurred, highlights and reflections are. A value of `0.0` means that the material is completely diffuse, meaning reflections will be highly blurred, and specular reflections will be large and not very bright. A value of `1.0` means that the material is completely smooth, and will have very small and concentrated specular.

Smoothness is the opposite of Roughness, and they can be converted by inverting the value - `0.2` roughness is `1.0 - 0.2` = `0.8` smoothness, and `0.7` smoothness would be `1.0 - 0.7` = `0.3` roughness.

This value is multiplied with the value of the Smoothness Map. If no smoothness map is defined, this setting is used directly.

</details>

### SDF

SDF (Signed Distance Field) is a complex shading style that defines how shadows should act based on the direction of light. This can create cell-looking shadows in a way similar to how Mihoyoverse renders their models (Genshin Impact, Zenless Zone Zero, etc.)

:::warning SDF is NOT universal
In a similar fashion to having a [Shadow Map](/docs/shading/light-data.md#shadow-map), SDF requires a specialized data texture, specific to your model, in order for the appearance of SDF to appear as intended.

Therefore, the results will appear "flat" if there is no texture defined.
:::

<details>
<summary><b>SDF Options</b></summary>

#### Shadow Tint

- `Type`: **Color**

Shadow Tint will tint the shadow with a specific color, useful for creating a specific stylized shading effect. This color will be mixed with the Ambient Color (if enabled) to produce the final shading.

#### SDF

- `Type`: **Data** Texture (`sRGB = OFF`)

Defines the Signed Distance Field to use for the shading.

#### Blur

- `Type`: **Float**, Range: `0.0 - 1.0`

Defines how much to blur the shadow out from the SDF's borders. A value of `0.0` will not blur the shadow, and a value of `1.0` will blur the shadow to the edge of the lightmap.

#### Forward Direction

- `Type`: **Float3**

Defines the direction of the shading in the forward direction, in `X` `Y` and `Z` coordinates.

#### Left Direction

- `Type`: **Float3**

Defines the direction of the shading in the leftward direction, in `X` `Y` and `Z` coordinates.

#### Shadow Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

Determines how strong of a shadow is applied. A value of `0.0` will not apply any shadow, and a value of `1.0` will apply a full shadow.

#### Ignore Indirect Shadow Color

- `Type`: **Float**, Range: `0.0 - 1.0`

Determines whether or not to incorporate the full ambient color into the lighting calculation. A value of `0.0` will ignore the ambient color, and a value of `1.0` will fully tint the shadow with the ambient color.

</details>

## Add Pass (Point & Spot Lights)

These options affect how shading is performed in the Add pass. This pass is used for realtime lights like Point, Spot, and Directional lights.

### Lighting Type (Add Pass)

- `Type`: **Dropdown**, Options: `Toon`/`Realistic`/`Same as Base Pass`

Which lighting model to use for the Add pass.

### Toon

Toon add pass lighting behaves somewhat like the Multilayer Math lighting mode. It uses gradient settings to determine the start and end points of the added lighting.

<details>
<summary><b>Toon Options (Add Pass)</b></summary>

#### Gradient Start

- `Type`: **Float**, Range: `0.0 - 1.0`

Start point of the ramp gradient. Any lighting below this point will be set to maximum lighting.

#### Gradient End

- `Type`: **Float**, Range: `0.0 - 1.0`

End point of the ramp gradient. Any lighting above this point will be set to minimum lighting.

</details>

### Realistic

Realistic add pass lighting uses a physically-based lighting model to determine the added lighting. It is appropriate for most non-heavily-styled models.

### Same as Base Pass

Makes the Add Pass Lighting match close to your [Lighting Type (Base Pass)](#lighting-type) settings.

## Global Masks

### LightMap to Global Mask

- `Type`: **Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

If set, will send the Lighting data to a [Global Mask](/docs/modifiers/global-masks.md) of your choice as a mask. This will make the data written to the Global Mask appear based on it's illumination from the environment.

### Inversed LightMap to Global Mask

- `Type`: **Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

If set, will send inverted Lighting data to a [Global Mask](/docs/modifiers/global-masks.md) of your choice as a mask. This is similar to the above option, but it will invert the data instead.