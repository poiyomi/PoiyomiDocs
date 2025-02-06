---
sidebar_position: 3
title: Dissolve
description: Dissolve provides features for transitioning between a base appearance and a modified appearance in an aesthetically pleasing way.
keywords: [dissolve, transition, special effect, special fx, effect, poiyomi, shader]
toc_max_heading_level: 4
---
import PoiVideo from '@site/src/components/PoiVideo'

The Dissolve module provides features for transitioning between a base appearance and a modified appearance in an aesthetically pleasing way. It can be used to transition from one base texture to another, or from the base color to a transparent appearance.

<PoiVideo url='/vid/special-fx/Dissolve_ContinuousLoop.mp4'/>

*Example of CenterOut Dissolve being animated back and forth.*

## Dissolve Type

- `Type`: **Dropdown**, Options: `Basic`/`Point2Point`/`Spherical`/`CenterOut`

Defines the mode dissolve is operating in.

### Basic

In `Basic`, The 0-1 value of the Dissolve Gradient texture is used to define the scale from 0 to 1.

<PoiVideo url='/vid/special-fx/Dissolve_Mode_Basic.mp4'/>

*Example of Basic Dissolve with and without an Edge Gradient.*

### Point2Point

In `Point2Point`, the pixel's position is used to define the scale. [Scroll to Advanced Point2Point Settings](#point2point-1)

<PoiVideo url='/vid/special-fx/Dissolve_Mode_Point2Point.mp4'/>

*Example of Point2Point Dissolve.*

### Spherical

In `Spherical` mode, the center point determines where the Dissolve will animate from. [Scroll to Advanced Spherical Settings](#spherical-1)

<PoiVideo url='/vid/special-fx/Dissolve_Mode_Spherical.mp4'/>

*Example of Spherical Dissolve with a larger Radius set.*

### CenterOut

In `CenterOut` mode, Dissolve is animated determined by the Camera's angle. [Scroll to Advanced CenterOut Settings](#centerout-1)

<PoiVideo url='/vid/special-fx/Dissolve_Mode_CenterOut.mp4'/>

*Example of CenterOut Dissolve set to View Direction.*

## Edge

<PoiVideo url='/vid/special-fx/Dissolve_EdgeSetting.mp4'/>

*Demonstration of the Edge Settings.*

### Edge Width

- `Type`: **Float**, Range: `0.0 - 0.5`

Defines the range over which the edge effects apply. The larger this is, the more area the edge will cover during the dissolve. Combines with Dissolve Noise and its associated[Dissolve Detail Strength to produce the final edge.

:::info
This property is only exposed when using `Basic` or `CenterOut` Dissolve Type.
:::

<!-- ![Dissolve Edge Width 0 -> 0.25 -> 0.5]() -->

### Edge Hardness

- `Type`: **Float**, Range: `0.0 - 1.0`

Defines how sharply to transition from no edge to edge. At `0`, the material will  smoothly [lerp](https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-lerp) between the base color and the edge. At `1`, the material will sharply transition between the base color and the edge color.

### Edge Color

- `Type`: **Color**

Defines the color used for the edge. Blended multiplicative with the Edge Gradient.

### Edge Gradient

- `Type`: **Data** Texture (`sRGB = Off`)

Defines a Gradient used for the edge color. This will apply across the range of the edge.

This slot also supports the Thry Gradient Editor.

### Edge Emission

- `Type`: **Float**, Range: `0.0 - 20.0`

Defines how much Emission the Edge should produce. Values above 1 generally produce a glow in worlds with bloom.

## Dissolved

### Dissolved Color

- `Type`: **Color**

A color tint blended multiplicative with the dissolved texture.

:::tip
If you set the Alpha channel of this color to `A = 0`, the Dissolve can transition from the base color to Transparency.

**Keep in mind this only works if you set your [Rendering Preset](/docs/general/render-preset.md) to Cutout or a Transparent Preset.**
:::

<PoiVideo url='/vid/special-fx/Dissolve_DissolvedColor.mp4'/>

*Example of changing the Dissolved Color settings using a TransClipping Rendering Preset.*

### Dissolved Texture

- `Type`: **Color** Texture (`sRGB = On`)

The Texture to Dissolve to. If not defined, the Base Color will be used instead.

### Dissolved Emission Strength

- `Type`: **Float**, Range: `0.0 - 20.0`

An Emission multiplier for the Dissolved state. Will use the Dissolved texture if defined, otherwise it will use the existing Base Color.

## Transition

### Dissolve Gradient

- `Type`: **Data** Texture (`sRGB = Off`)

A linear gradient map that defines the Dissolve Map. This tells the Shader the direction of the Dissolve on the UV when using a Basic Dissolve.

:::info
This texture slot is only exposed when [Dissolve Type](#dissolve-type) is set to `Basic`.
:::

### Dissolve Noise

- `Type`: **Data** Texture (`sRGB = Off`)

A black and white (single channel) map that adds a modifier to the dissolve edge. The intensity is controlled by **Dissolve Detail Strength**. You can use a noise texture to create a more detailed edge, or use a pattern for a specific effect.

:::tip
You can find example Noise Textures, such as the one shown in the video below, included in the Package by navigating to the folder `_PoiyomiShaders/Textures/Noise`.
:::

<PoiVideo url='/vid/special-fx/Dissolve_Noise.mp4'/>

*Demonstration of using a Noise Texture for the Dissolve.*

### Detail Noise Smoothing

- `Type`: **Float**, Range: `0.0 - 1.0`

Determines the smoothing of the Noise Texture, if provided.

### Dissolve Detail Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

Controls how much the dissolve detail strength influences the edge. At high values, this may lead to "flashing" as the dissolve transitions in and out.

<PoiVideo url='/vid/special-fx/Dissolve_DetailStrength.mp4'/>

*Demonstration of adjusting the Detail Strength of the Noise.*

### Dissolve Alpha

- `Type`: **Float**, Range: `0.0 - 1.0`

Defines the main state of the Dissolve effect. `0.0` is the initial state, while `1.0` is fully Dissolved.

:::tip
Animate this property to control the Dissolve state at runtime.
:::

### Dissolve Mask

- `Type`: **Data** Texture (`sRGB = Off`)

A black and white (single channel) mask that controls where to apply the dissolve. Black will have no effect, while white will have 100% of the effect. Values in between will vary the strength of the dissolve effect.

### Global Mask

- `Type`: **Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Select which [Global Mask](/docs/modifiers/global-masks.md) to use as the Dissolve Mask instead.

### Dissolved to Global Mask

- `Type`: **Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

This allows you to select which [Global Mask](/docs/modifiers/global-masks.md) to affect when it is fully Dissolved.

### Undissolved to Global Mask

- `Type`: **Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

This allows you to select which [Global Mask](/docs/modifiers/global-masks.md) to affect when it is NOT Dissolved whatsoever.

### VertexColor Mask

- `Type`: **Dropdown**, Options: `Off`/`Red`/`Green`/`Blue`/`Alpha`

Uses the green channel of the mesh's vertex colors to mask the dissolve effect. `0` in this channel will make dissolve have 0 effect on that vertex, while `1.0`/`255` will let it fully affect that vertex.

### Continuous Dissolve Speed

Constantly shifts the dissolve up and down in a sine wave pattern. `0` disables the continuous shift.

At a value of 1, the dissolve will complete a full cycle (from `0` to `1` to `0`) in about 2 minutes (125.7 seconds). 

| Speed | Cycle Time (s)[^1] |
|--|--|
| 1   | 125.7 |
| 5   |  25.1 |
| 10  |  12.6 |
| 20  |   6.3 |
| 50  |   2.5 |

## AudioLink

- `Type`: **Checkbox**

Enables AudioLink to control Dissolve.

:::info
The settings in this section will only be visible when [AudioLink](/docs/audio-link/audio-link.md) is activated on the Material.
:::

### Dissolve Alpha Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Selection for which audio Band should control the Dissolve Alpha Mod.

### Dissolve Alpha Mod

- `Type`: **Vector2**

| Channel | Function |
| --- | --- |
| Min | Amount Added or Subtracted from the Dissolve Alpha with no audio |
| Max | Amount Added or Subtracted from the Dissolve Alpha with max audio |

### Dissolve Detail Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Selection for which audio Band should control the Dissolve Detail Strength.

### Dissolve Detail Mod

- `Type`: **Vector2**

| Channel | Function |
| --- | --- |
| Min | Amount Added or Subtracted from the Dissolve Detail Strength with no audio |
| Max | Amount Added or Subtracted from the Dissolve Detail Strength with max audio |

## Advanced Dissolve Settings

:::info
The following properties below will only be exposed dependent on which [Dissolve Mode](#dissolve-type) you choose.
:::

### Point2Point

#### World/Local

- `Type`: **Dropdown**, Options: `Local`/`World`/`Vertex Colors`

Whether to use **World** coordinates (absolute) or **Local** coordinates (relative to the object), or to use **Vertex Colors** for position. 

This should generally be set to **Local** for avatar usage unless specific effects utilizing world position are desired, as worlds can have areas that are in any position in world space.

**Vertex Colors** can be baked to the mesh to set the position of the dissolve. This means the dissolve will always proceed correctly for any mesh, regardless of the mesh's pose or position.

#### Edge Length

- `Type`: **Float**

Length of the edge in Point-to-Point space. This is an absolute length (in meters) and does not scale with the object or the start/end points.

#### Start Point

- `Type`: **Float4**
    - Default: `X = 0`, `Y = -1`, `Z = 0`

The 3D Point to start the dissolve at. For avatars, this should be set far enough away that changes in skinning (sticking arms/legs out) don't cause the dissolve to unintentionally trigger.

#### End Point

- `Type`: **Float4**
    - Default: `X = 0`, `Y = 1`, `Z = 0`

The 3D Point to end the dissolve at. For avatars, this should be set far enough away that changes in skinning (sticking arms/legs out) don't cause the dissolve to unintentionally trigger.

#### Clamp Dissolve

- `Type`: **Checkbox**

If set to True, this ensures that the whole material is clamped to the set value. This means if the dissolve Alpha is at `1` or `0`, they will never be partially dissolved or partially visible. This can fix issues where portions of your Material have visibility issues at certain poses with those values.

:::tip 
It may be beneficial to enable Clamp Dissolve if you change your Avatar's Scale frequently in VRChat, as it will help prevent Dissolves from partially working as intended at various heights or scales. 
:::

<PoiVideo url='/vid/special-fx/Dissolve_Clamp.mp4'/>

*Difference between the Off and On states of Clamp Dissolve.*

### Spherical

#### Center Point

- `Type`: **Float4**
    - Default: `X = 0`, `Y = 0`, `Z = 0`

The 3D Point to start the Spherical Dissolve at. By default, this will be the direct-center of the Root Transform.

#### Radius

- `Type`: **Float**

Determines the size of the Spherical Dissolve.

#### Invert

- `Type`: **Checkbox**

Inverts the Spherical Dissolve to implode instead of expand from the center.

#### Clamp Dissolve

- `Type`: **Checkbox**

If set to True, this ensures that the whole material is clamped to the set value. This means if the dissolve Alpha is at `1` or `0`, they will never be partially dissolved or partially visible. This can fix issues where portions of your Material have visibility issues at certain poses with those values.

:::tip 
It may be beneficial to enable Clamp Dissolve if you change your Avatar's Scale frequently in VRChat, as it will help prevent Dissolves from partially working as intended at various heights or scales. 
:::

### CenterOut

#### CenterOut Mode

- `Type`: **Dropdown**, Options: `View Direction`/`Custom Direction`/`Light Direction`

Determines how the Dissolve will behave with CenterOut.

##### View Direction

Default. Will use the Camera's POV to determine the CenterOut direction.

##### Custom Direction

Defines a custom direction to use for the CenterOut.

##### Light Direction

Uses the direction of Light to use as the CenterOut direction.

#### Custom Direction Value

- `Type`: **Float4**

Chooses the Custom Direction of the CenterOut on the Local X, Y, and Z axis.

:::info
This property is only exposed if you chose `Custom Direction` as the CenterOut Mode.
:::

#### Invert

- `Type`: **Checkbox**

Inverts the direction of the CenterOut to implode instead of expand for the Dissolve.

#### Use Pixel Normal

- `Type`: **Float**, Range: `0.0 - 1.0`

Uses the Pixel Normals on the Dissolve.

#### Power

- `Type`: **Float**, Range: `0.1 - 5.0`

Determines the power factor of the CenterOut Dissolve.

## Hue Shift

- `Type`: **Checkbox**

Enables/Disables hue shifting features for dissolve. Unlike most sections, this checkbox can be animated.

### Color Space

- `Type`: **Dropdown**, Options: `OKLab`/`HSV`

Choice of Color Space to use for the Hue Shift. By default, it will be set to `OKLab`.

Learn about the difference of Color Spaces as documented here in [Color Adjust](/docs/color-and-normals/color-adjust.md#oklab-vs-hsv).

### Select or Shift

- `Type`: **Dropdown**, Options: `Hue Select`/`Hue Shift`
  - Default: `Hue Shift`

This dropdown allows you to select how the Color Adjustment should behave when the Hue Shift is used. By default, this will be set to `Hue Shift`.

<details>
<summary><b>Select or Shift Options</b></summary>

- `Hue Select`: Directly applies the selected Hue as an override to the entire Dissolve.
- `Hue Shift`: Only tints the Dissolve based on the lerped value. This is the default behavior.

</details>

### Dissolved Speed

- `Type`: **Float**

Speed of the hue shift cycling for the dissolved state only. A speed of 1 corresponds to a full cycle of the hue shift every 20 seconds.

### Dissolved Shift

- `Type`: **Float**, Range: `0.0 - 1.0`

Fixed amount to shift the hue for the dissolved state only.

### Edge Enabled

- `Type`: **Checkbox**

Enables or disables hue shifting of the the dissolve edge color.

### Edge Color Space

- `Type`: **Dropdown**, Options: `OKLab`/`HSV`

Choice of Color Space to use for the Hue Shift. By default, it will be set to `OKLab`.

Learn about the difference of Color Spaces as documented here in [Color Adjust](/docs/color-and-normals/color-adjust.md#oklab-vs-hsv).

### Edge Select or Shift

- `Type`: **Dropdown**, Options: `Hue Select`/`Hue Shift`
  - Default: `Hue Shift`

This dropdown allows you to select how the Color Adjustment should behave when the Hue Shift is used. By default, this will be set to `Hue Shift`.

<details>
<summary><b>Select or Shift Options</b></summary>

- `Hue Select`: Directly applies the selected Hue as an override to the entire Edge.
- `Hue Shift`: Only tints the Edge based on the lerped value. This is the default behavior.

</details>

### Edge Speed

- `Type`: **Float**

Speed of the hue shift cycling for the edge. A speed of 1 corresponds to a full cycle of the hue shift every 20 seconds.

### Edge Shift

- `Type`: **Float**, Range: `0.0 - 1.0`

Fixed amount to shift the hue for the edge color only.

## UV Tile Dissolve

- `Type`: **Checkbox**

Allows an alternative way to use UV Tile Discard with the use of Dissolve's effects instead.

If you prefer to use UV Tile Discard in a way that allows a sleek animation transition, this is the section to do it.

:::info Refer to UV Tile Documentation
All the sliders listed for each Row will reflect the same locations as described in [UV Tile Discard](/docs/special-fx/uv-tile-discard.md). Please refer to the documentation page to see what they are.

Each Slider will control the [Dissolve Alpha](#dissolve-alpha) for the described Row and Column.
:::

### UV Tile UV

- `Type`: **Dropdown**, Options: `UV0`/`UV1`/`UV2`/`UV3`

Choice of which UV to use for the Tile Dissolve.

### Discard Tiles At Max

- `Type`: **Checkbox**
    - Default: `On`

Enforces the Dissolve Tiles to be discarded once a UV Tile Dissolve reaches `1` on the slider.

### Row X Column Y

- `Type`: **Float**, Range: `-1.0 - 1.0`

This property will appear for each Row and Column for UV Tile Dissolve. Below is a table reference matching the same positions as described in [UV Tile Discard](/docs/special-fx/uv-tile-discard.md), named to each field shown in UV Tile Dissolve.

|  | Column 0 | Column 1 | Column 2 | Column 3 |
| :---: | :---: | :---: | :---: | :---: |
| **Row 3** | `Row 3, Column 0` | `Row 3, Column 1` | `Row 3, Column 2` | `Row 3, Column 3` |
| **Row 2** | `Row 2, Column 0` | `Row 2, Column 1` | `Row 2, Column 2` | `Row 2, Column 3` |
| **Row 1** | `Row 1, Column 0` | `Row 1, Column 1` | `Row 1, Column 2` | `Row 1, Column 3` |
| **Row 0** | `Row 0, Column 0` | `Row 0, Column 1` | `Row 0, Column 2` | `Row 0, Column 3` |

## Locked In Anim Sliders

These sliders can be independently marked as animated, and all function the same way as **Dissolve Alpha**. This is useful for situations where you want to animate a dissolve on one material but not another on the same renderer.

The functionality of Locked In Anim Sliders is somewhat shared with the **Rename Animated** functionality, where each material can be locked in with its own unique property name. 

However, Locked in anim sliders may still have some use in overriding the state of the main dissolve. For example, you could have multiple materials on a renderer all with their own dissolves controlled independently, but if they all have the same locked in anim slider unlocked, that locked in anim slider can be used to dissolve all materials at the same time. 

[^1]: Exact Equation: `cycle time (s) = (2*pi * 20)/(speed)` where speed is the Continuous Dissolve Speed
