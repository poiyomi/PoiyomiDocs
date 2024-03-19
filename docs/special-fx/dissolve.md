---
sidebar_position: 2
title: Dissolve
---
import PoiVideo from '@site/src/components/PoiVideo'

# Dissolve

<PoiVideo url='/vid/special-fx/dissolve_Loop.mp4'/>

The Dissolve module provides features for transitioning between a base appearance and a modified appearance in an aesthetically pleasing way. It can be used to transition from one base texture to another, or from the base color to a transparent appearance.

## Dissolve Type

Options: `Basic/Point2Point`

Defines the mode dissolve is operating in. In `Basic`, the 0-1 value of the [**Dissolve Gradient**](#dissolve-gradient) texture is used to define the scale from 0 to 1. In `Point2Point`, the pixel's position is used to define the scale.

## Edge

### Edge Width

Range: `0-0.5`

Defines the range over which the edge effects apply. The larger this is, the more area the edge will cover during the dissolve. Combines with [**Dissolve Noise**](##Dissolve-Noise) and its associated [**Dissolve Detail Strength**](##Dissolve-Detail-Strength) to produce the final edge.

This is a relative distance, and only applies in the **Basic** dissolve mode.

<!-- ![Dissolve Edge Width 0 -> 0.25 -> 0.5]() -->

### Edge Hardness

Range: `0-1`

Defines how sharply to transition from no edge to edge. At `0`, the material will  smoothly [lerp](https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-lerp) between the base color and the edge. At `1`, the material will sharply transition between the base color and the edge color.

### Edge Color

Defines the color used for the edge. Blended multiplicatively with the [**Edge Gradient**](##Edge-Gradient).

This color can be set to a [Theme Color](docs/color-and-normals/global-themes.md).

### Edge Gradient

Defines a gradient used for the edge color. Will apply across the range of the edge.

### Edge Emission

Range: `0-20`

Defines how much emission the edge should produce. Values above 1 generally produce a glow in worlds with bloom.

## Dissolved

### Dissolved Color

A color tint blended multiplicatively with the dissolved texture. By setting the Alpha channel of this color to `0`, and selecting a [render preset](docs/../../general/render-preset.md) that allows transparency (such as Cutout), the dissolve can transition from the base color to transparency.

### Dissolved Texture

The texture to dissolve to. If not defined, the existing base color will be used.

### Dissolved Emission Strength

Range: `0-20`

An emission multiplier for the dissolved state. Will use the Dissolved texture if defined, otherwise it will use the existing base color. 

## Transition

### Dissolve Gradient

*`Basic` dissolve mode only*

![Dissolve Noise Off/On](/img/special-fx/dissolve_Dissolve-Gradient.png)

*Dissolve Gradient with different noise textures*

A black and white (single channel) map that defines how the dissolve edge proceeds. As **Dissolve Alpha** goes from 0 to 1, the edge will follow the gradient from black to white. 

This can also be used to define how the dissolve proceeds along a mesh. In combination with clever UV mapping, this can be used to consistently dissolve along a mesh.

This texture is not used in the `Point2Point` Dissolve Mode.

### Dissolve Noise

A black and white (single channel) map that adds a modifier to the dissolve edge. The intensity is controlled by **Dissolve Detail Strength**. You can use a noise texture to create a more detailed edge, or use a pattern for a specific effect.

![Dissolve Noise Off/On](/img/special-fx/dissolve_Dissolve-Noise.png)

*Dissolve Noise with different noise textures*

### Dissolve Detail Strength

Range: `0-1`

Controls how much the dissolve detail strength influences the edge. At high values, this may lead to "flashing" as the dissolve transitions in and out. 

### Dissolve Alpha

Range: `0-1`

Defines the main state of the dissolve effect. Animate this value to control the dissolve.

### Dissolve Mask

A black and white (single channel) mask that controls where to apply the dissolve. Black (`0``) will have no effect, while white will have 100% of the effect. Values in between will vary the strength of the dissolve effect.

### VertexColor.g Mask

Uses the green channel of the mesh's vertex colors to mask the dissolve effect. `0` in this channel will make dissolve have 0 effect on that vertex, while `1.0`/`255` will let it fully affect that vertex.

### Continuous Dissolve Speed

<PoiVideo url='/vid/special-fx/dissolve_Continuous.mp4'/>

Constantly shifts the dissolve up and down in a sine wave pattern. `0` disables the continuous shift.

At a value of 1, the dissolve will complete a full cycle (from `0` to `1` to `0`) in about 2 minutes (125.7 seconds). 

| Speed | Cycle Time (s)[^1] |
|--|--|
| 1   | 125.7 |
| 5   |  25.1 |
| 10  |  12.6 |
| 20  |   6.3 |
| 50  |   2.5 |

## Point to Point

<PoiVideo url='/vid/special-fx/dissolve_PointToPoint.mp4'/>

This section is only enabled in `Point2Point` **Dissolve Mode**. It uses the position of the object in local or world space to determine the dissolve's behavior, instead of using the **Dissolve Gradient** texture.

### World/Local

Options: `Local/World/Vertex Colors`

Whether to use **World** coordinates (absolute) or **Local** coordinates (relative to the object), or to use **Vertex Colors** for position. 

This should generaly be set to **Local** for avatar usage unless specific effects utilizing world position are desired, as worlds can have areas that are in any position in world space.

**Vertex Colors** can be baked to the mesh to set the position of the dissolve. This means the dissolve will always proceed correctly for any mesh, regardless of the mesh's pose or position.

### Edge Length

Length of the edge in Point-to-Point space. This is an absolute length (in meters) and does not scale with the object or the start/end points.

### Start Point

The 3D Point to start the dissolve at. For avatars, this should be set far enough away that changes in skinning (sticking arms/legs out) don't cause the dissolve to unintentionally trigger.

### End Point

The 3D Point to end the dissolve at. For avatars, this should be set far enough away that changes in skinning (sticking arms/legs out) don't cause the dissolve to unintentionally trigger.

### Clamp Dissolve

`Type`: **Checkbox**

If set to True, this ensures that the whole material is clamped to the set value. This means if the dissolve Alpha is at `1` or `0`, they will never be partially dissolved or partially visible. This can fix issues where portions of your Material have visibility issues at certain poses with those values.

:::tip 
It may be benificial to enable this option if you change your Avatar's Scale frequently in VRChat, as it will help prevent Dissolves from partially working as intended at various heights or scales. 
:::

## Hue Shift

Enables/Disables hue shifting features for dissolve. Unlike most sections, this checkbox can be animated.

### Dissolved Speed

Speed of the hue shift cycling for the dissolved state only. A speed of 1 corresponds to a full cycle of the hue shift every 20 seconds.

### Dissolved Shift

Fixed amount to shift the hue for the dissolved state only.

### Edge Enabled

Enables or disables hue shifting of the the dissolve edge color. This checkbox can be animated.

### Edge Speed

Speed of the hue shift cycling for the edge. A speed of 1 corresponds to a full cycle of the hue shift every 20 seconds.

### Edge Shift

Fixed amount to shift the hue for the edge color only.

## UV Tile Dissolve

- `Type`: **Checkbox**

Allows an alternative way to use UV Tile Discard with the use of Dissolve's effects instead.

If you prefer to use UV Tile Discard in a way that allows a sleek animation transition, this is the section to do it.

:::info Refer to UV Tile Documentation
All the sliders listed for each Row will reflect the same locations as described in [UV Tile Discard](../special-fx/uv-tile-discard.md). Please refer to the documentation page to see what they are.

Each Slider will control the [Dissolve Alpha](#dissolve-alpha) for the described Row and Column.
:::

## Locked In Anim Sliders

These sliders can be indepently marked as animated, and all function the same way as **Dissolve Alpha**. This is useful for situations where you want to animate a dissolve on one material but not another on the same renderer.

The functionality of Locked In Anim Sliders is somewhat shared with the **Rename Animated** functionality, where each material can be locked in with its own unique property name. 

However, Locked in anim sliders may still have some use in overriding the state of the main dissolve. For example, you could have multiple materials on a renderer all with their own dissolves controlled independently, but if they all have the same locked in anim slider unlocked, that locked in anim slider can be used to dissolve all materials at the same time. 

[^1]: Exact Equation: `cycle time (s) = (2*pi * 20)/(speed)` where speed is the Continuous Dissolve Speed
