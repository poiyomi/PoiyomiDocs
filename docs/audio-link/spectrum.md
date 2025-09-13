---
sidebar_position: 2
title: AL Spectrum
description: Fancy visual spectrum features that react to AudioLink.
keywords: [spectrum, visual, uv, poiyomi, audiolink]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This module allows you to have a fancy spectrum of varying styles that appear with your Audio. It is projected onto the UV of your choice and is scaled to each end of your UV space by default.

<PoiVideo url='/vid/audio-link/ALSpectrumDemo.webm'/>
<em>Demonstration of AL Spectrum projecting across a custom UV1 layout on the Suit. (Un-mute to hear sound)</em>

## Transform

### UV Mode

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Normal`/`Circle`
    - Default: `Normal`

Choice of UV projection of your Spectrum.

<PoiVideo url='/vid/audio-link/ALSpect_NormVSCircle.webm'/>

- `Normal` is the standard default mode, projected flat on the UV from left to right.
- `Circle` turns it into a more circular-shaped Spectrum while projected on your UV. It is centered by default.

### UV

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `UV0`/`UV1`/`UV2`/`UV3`/`Panosphere`/`World Pos`/`Local Pos`/`Polar UV`/`Distorted UV`

Choice of UV to use for your Spectrum. You will most likely be configuring this for your specific mesh.

### Position

- `Type`: <PropertyIcon name="float2" />**Float2**
    - Default: `X = 0.5`, `Y = 0.5`

Adjusts the Position of the Spectrum's projection on the model's UV space. The Position is based off of the direct center of the projection plane.

| Axis | Function |
| --- | --- |
| X | Position on the UV's X-axis (Left -> Right) |
| Y | Position on the UV's Y-axis (Bottom -> Top) |

### Scale

- `Type`: <PropertyIcon name="float4" />**Float4**
    - Default: `X = 1`, `Y = 1`, `Z = 1`, `W = 1`

Adjusts the Scale of the Spectrum's projection on the model's UV space.

<PoiVideo url='/vid/audio-link/ALSpect_ScalePos.webm'/>

| Axis | Function |
| --- | --- |
| X | Scale from the Left-end of the projection |
| Y | Scale from the Right-end of the projection |
| Z | Scale from the Top-end of the projection |
| W | Scale from the Bottom-end of the projection |

### Rotation

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 360.0`

Rotation of the Spectrum's projection in degrees.

### Rotation Speed

- `Type`: <PropertyIcon name="float" />**Float**

Consistent rotation speed of the Spectrum's projection. A value of `1` will result in a complete 360° rotation of the Spectrum every 20 seconds.

### Line Width

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`
    - Default: `1`

How large the width of the Spectrum should be across the projection.

<PoiVideo url='/vid/audio-link/ALSpect_LineWidth.webm'/>

- A value of `1` will present ignored width and lock it to remain on the bottom-edge of the projection, resulting in a standard spectrum with empty space overhead.
- A value **less than** `1` will result in a change in the Spectrum's width across the projection. This makes it use the entire space, like wavelengths. The locations of where the Bands will move to and from are as it follows:
    - `Top-edge = Full Audio`
    - `Bottom-edge = No Audio`

### Circle Dimensions

- `Type`: <PropertyIcon name="float4" />**Float4**
    - Default: `X = 0`, `Y = 1`, `Z = 0`, `W = 1`

Adjusts the radius and dimension of the Circle Spectrum, if used.

:::info
This property is only shown if the [UV Mode](#uv-mode) is set to `Circle`.
:::

<PoiVideo url='/vid/audio-link/ALSpect_CircleDimensions.webm'/>

| Axis | Function |
| --- | --- |
| X | Minimum size of the Circle Spectrum starting from the direct center of the projection |
| Y | Maximum size of the Circle Spectrum |
| Z | Minimum radial clipping (pie-cut) of the Circle Spectrum |
| W | Maximum radial clipping (pie-cut) of the Circle Spectrum |

## Volume and Band

Adjustment of the UV Space and it's appearance across the Spectrum.

<PoiVideo url='/vid/audio-link/ALSpect_VolBandStepNum.webm'/>

### Volume

Adjustment of the Volume's UV Space and it's appearance. Goes from Bottom to Top.

<details>
<summary><b>Volume Options</b></summary>

#### Volume Step Num (0 = Off)

- `Type`: <PropertyIcon name="float" />**Float**

Determines if the Volume projection should have steps for each set amount of units on the projection.

- A value of `0` sets it uncapped, leaving zero gaps in each step.
- A value greater than `0` will result in a set amount of steps determined by the user.

#### Volume Clip Min

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Clipping control of the Volume's projection from the Bottom-edge.

#### Volume Clip Max

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Clipping control of the VOlume's projection from the Top-edge.

</details>

### Band

Adjustment of the Band's UV Space and it's appearance. Goes from Left to Right.

<details>
<summary><b>Band Options</b></summary>

#### Band Step Num (0 = Off)

- `Type`: <PropertyIcon name="float" />**Float**

Determines if the Band projection should have steps for each set amount of units on the projection.

- A value of `0` sets it uncapped, leaving zero gaps in each step.
- A value greater than `0` will result in a set amount of steps determined by the user.

#### Band Clip Min

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Clipping control of the Band's projection from the Left-edge.

#### Band Clip Max

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Clipping control of the Band's projection from the Right-edge.

</details>

## Shape Clip

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables the ability to provide a set amount of space between each Step for the `Band` or `Volume`, clipping whatever is in-between each step. Use this in conjunction with your [Volume Step Num](#volume-step-num-0--off) and [Band Step Num](#band-step-num-0--off) values to achieve a digital visualizer look.

:::tip Looks best with Steps
Shape Clip should use a [Volume Step Num](#volume-step-num-0--off) and [Band Step Num](#band-step-num-0--off) with a value greater than `0` for this to appear nicely.
:::

<PoiVideo url='/vid/audio-link/ALSpect_ShapeClip.webm'/>

### Volume Width

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Width of the space between each step on the Volume.

- A value of `0` is wider spacing and fully clipped.
- A value of `0.5` shows visible clipping between each space by a factor of `0.5` units.
- A value of `1` shows no visible clipping between each space whatsoever.

### Band Width

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Width of the space between each step on the Band.

- A value of `0` is wider spacing and fully clipped.
- A value of `0.5` shows visible clipping between each space by a factor of `0.5` units.
- A value of `1` shows no visible clipping between each space whatsoever.

## Audio Mods

Modifier for increasing or decreasing the sensitivity of the Spectrum from each Band. This will greatly influence how the Spectrum appears in the projection.

<PoiVideo url='/vid/audio-link/ALSpect_AudMods.webm'/>

### Volume

- `Type`: <PropertyIcon name="float" />**Float**
    - Default: `0.5`

Adjusts the sensitivity of the Volume Band. Higher values will yield larger Spectrums.

### Bass Boost

- `Type`: <PropertyIcon name="float" />**Float**
    - Default: `5`

Adjusts the sensitivity of the Bass Band. Higher values will yield increased reaction to the Bass on the Spectrum.

### Treble Boost

- `Type`: <PropertyIcon name="float" />**Float**
    - Default: `1`

Adjusts the sensitivity of the Treble Band. Higher values will yield increased reaction to the the Treble on the Spectrum.

## Colors and Blending

Use this section to customize the Color and overall Appearance of your Spectrum.

<PoiVideo url='/vid/audio-link/ALSpect_Blending.webm'/>

### Color & Mask

- `Type`: <PropertyIcon name="texture" />**Color** Texture (`sRGB = On`)

Texture slot for customizing the Colors and Blending of your Spectrum.

### Source

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `UVX`/`UVY`/`Volume`
    - Default: `UVY`

Choose which direction the blending of Colors will be using. The colors you specify will appear on the Spectrum depending on the intensity of the music on each Band.

| Option | Description |
| --- | --- |
| UVX | Blends the colors on the X-axis from Left to Right |
| UVY | Blends the colors on the Y-axis from Bottom to Top |
| Volume | Changes to blending the color of the Shape dependant on the music intensity

### Volume Color Low

- `Type`: <PropertyIcon name="color" />**Color**

Color of the Volume at the start of the blending with your selected `Source`.

This will be treated as the lowest frequency when `Source` is set to `Volume`.

### Low Emission

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 20.0`

Adjusts the Emission Strength of the Volume Color Low.

### Volume Color Mid

- `Type`: <PropertyIcon name="color" />**Color**

Color of the Volume around the middle of the blending.

This will be treated as the middle frequency when `Source` is set to `Volume`.

### Mid Emission

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 20.0`

Adjusts the Emission Strength of the Volume Color Mid.

### Volume Color High

- `Type`: <PropertyIcon name="color" />**Color**

Color of the Volume at the end of the blending with your selected `Source`.

This will be treated as the highest frequency when `Source` is set to `Volume`.

### High Emission

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 20.0`

Adjusts the Emission Strength of the Volume Color High.

### Blend Type

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Replace`/`Multiply`/`Screen`/`Linear Dodge(Add)`/`Overlay`/`Mixed`

Behavior of the Spectrum's blending against your Material.

### Alpha

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Adjusts the visibility of the entire Spectrum projection on your Material.

### Override Alpha

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Overrides the entire Opacity of the Material besides the Spectrum itself. Works best with Transparency.

<PoiVideo url='/vid/audio-link/ALSpect_AlphaOverride.webm'/>
