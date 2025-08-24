---
sidebar_position: 1
title: Outlines
description: Outlines are created using a simplified pass with the mess offset by a small amount, also known as the "Inverted Hull" effect, available in Poiyomi Shaders.
keywords: [outline, outlines, inverted hull, stencil, size, width, poiyomi, shader]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Outlines feature creates outlines using a simplified pass with the mesh offset by a small amount. This is also known as an "Inverted Hull" outline.

For smooth meshes, the inverted hull technique works well, but for hard-edged models, it can have noticeable seams. To correct this, you can bake a version of the mesh with smoothed normals baked into the vertex color, using the Poi Vertex Color Baker. This will overwrite other vertex color data, and will create a unique version of the mesh.

:::info Changes in 9.0
All Outlines features have been reintroduced to the main shader, `.poiyomi/Poiyomi Toon` as of version 9.0 and newer. There is no need to select a separate version in order to use Outlines.
:::

<a target="_blank" href="/img/outlines/PoiOutlinesDemo2.png">
<img src="/img/outlines/PoiOutlinesDemo2.png" alt="Outlines Example"/>
</a>

*Example of the inverted hull Outline technique on two Material Spheres.*

## Mode

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Basic`/`Rim Light`/`Directional`/`Drop Shadow`
    - Default: `Basic`

Changes the mode of the outline.

### Basic

Default mode. The width of the outline is constant around the model.

### Rim Light

Rim Light actually uses the direction of the light to determine the width of the outline. Outlines will be thicker in the direction of the light. The color of the outline will be tinted with a value between the direct light color and the base color, according to the **Rim Light Blend.**

#### Rim Light Blend

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

How much to blend between the base color and the direct light color as the tint of the outline. At 0, the outline will be tinted with the base color. At 1, the outline will be tinted with the direct light color.

*Only available when mode is set to `Rim Light`.*

### Directional

Directional is similar to Rim Light in that it biases the outline to a specific direction, but the **Directional Offset** directly specifies what direction to use.

#### Directional Offset X Y

- `Type`: <PropertyIcon name="float4" />**Vector4** (Only `X`/`Y` used)

Direction to use for the outline. Calculated from only the X (horizontal) and Y (vertical) values.

### Drop Shadow

Drop Shadow is similar to Directional in that it biases the outline to a specific direction, but drop shadow moves the outline in X, Y, and Z, instead of specifying a direction to bias the thickness.

In Drop Shadow mode, the **Width** is *not* used.

#### Drop Direction X Y

- `Type`: <PropertyIcon name="float4" />**Vector4** (Only `X`/`Y`/`Z` used)

How much to offset the outline in the X, Y, and Z directions, in unity base units.

## Space

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Local`/`World`
    - Default: `Local`

Determines where the size of the Outlines should assume the initial scale units from. Influences the [Outline Size](#outline-size).

- `Local` renders the Size based on the Scale Units of your Avatar.
- `World` renders the Size based on World Units.

:::info
If you choose the Space to be `World`, the Outline Size will remain the same regardless of your Avatar Scale. Keep this in mind when choosing this option.
:::

## Outline Size

- `Type`: <PropertyIcon name="float" />**Float**

Thickness of the Outline, in Unity base units (scaled down by 100).

### Outline Size Mask

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = Off`)

Mask Texture in Grayscale that determines the thickness of the Outline in various places on the model. Areas in darker Grayscale will reduce the thickness based on the initial [Outline Size](#outline-size) value set.

Examples:
- If your Outline Size is `0.5` and a section of your Texture is 50% Gray, it will reduce the thickness in that area to about `0.25` thickness, which is half of your Outline Size.
- If a section of your Texture is Black, it will reduce the thickness all the way down to `0` thickness.
    - If [Clip 0 Width](#clip-0-width) is enabled in this scenario, the Outline will be clipped entirely.

:::note
This determines the Outline Width *per-vertex*, not per-pixel.
:::

## Outline Texture

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = On`)

Texture to use for the Outline. Will be tinted based on the [Color Adjust](#color-adjust) settings.

## Color

- `Type`: <PropertyIcon name="color" />**Color**

Base Color of the Outline. Can be mixed in various ways depending on the [Mode](#mode) settings.

## Outline Emission

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 20.0`

How much Emission the Outline should have. Creates a glowing effect, especially in Worlds with Post Processing Bloom.

## MainTex Blend

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

How much the [Outline Color](#color) should be blended with your Texture.

## UTS2 style Blend

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Determines if you want the Outlines to blend in a way that is similar to Unity-Chan Toon Shader 2 (UTS2).

<!---------- Color Adjust Section ---------->

## Color Adjust

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables the ability to modify the Outline Color in a similar fashion to [Color Adjust](/docs/color-and-normals/color-adjust.md). This is applied directly after the main [Outline Color](#color), and will not affect other sections that modify the base Outline Color.

:::info This area was recently updated!
All of these values can be individually animated as of the latest version.
:::

### Hue

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

How much to shift the Outline Color around the Hue Circle.

### Saturation

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 2.0`

Adjusts the saturation of the Outline Color.

- A value of `0` will make the Oultine Color fully de-saturate (Grayscale).
- A value of `1` will not alter the color at all.
- A value greater than `1` will increase the Saturation of the outline Color.

### Value

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 2.0`

Adjusts the influence (or Brightness) of the color without regard to it's hue or tone.

### Gamma

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.01 - 2.0`

Lerps the brightness of the color in regards to it's hue or tone.

### Shift Speed

- `Type`: <PropertyIcon name="float" />**Float**

How much to constantly shift the hue with time.

For reference, a value of `1` will result in a full Hue Shift cycle every 20 seconds.

<!---------- Distance Alpha Section ---------->

## Distance Alpha

- `Type`: <PropertyIcon name="toggle" />**Toggle**

When enabled, Distance Alpha can modify the Alpha value of the Outlines based on the distance from the Camera to the Object or Pixel.

:::info Requires Transparency
Distance Alpha requires Transparency in order for it to work.
:::

### Pos To Use

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Object Position`/`Pixel Position`

Which position to use to calculate distance.

- `Object Position` will calculate distance relative to the origin of the Outline, resulting in the whole Outline having a uniform alpha change. This is useful for making an entire Outline change alpha based on the distance from the Outline itself.
- `Pixel Position` will calculate distance relative to the position of each pixel on the Outline. This means different parts of an Outline can have different levels of alpha. This is useful for making parts of an Outline appear or disappear based on distance without the whole Outline being affected.

### Min Distance Alpha

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

The alpha multiplier that will be applied at the [Min Distance](#min-distance).

### Max Distance Alpha

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

The alpha multiplier that will be applied at the [Max Distance](#max-distance).

### Min Distance

- `Type`: <PropertyIcon name="float" />**Float**

The distance (in meters) at which the [Min Distance Alpha](#min-distance-alpha) multiplier will be applied.

### Max Distance

- `Type`: <PropertyIcon name="float" />**Float**

The distance (in meters) at which the [Max Distance Alpha](#max-distance-alpha) multiplier will be applied.


<!---------- Fixed Size Over Distance Section ---------->

## Fixed Size Over Distance

- `Type`: <PropertyIcon name="toggle" />**Toggle**
    - Default: `true`

Enables a fixed screen-space size for outlines. This can allow control of the outlines to not get smaller when moving away from the model.

### Fixed Width

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`
    - Default: `0.5`

The width of the fixed outline size.

### Fixed Size Max Distance

- `Type`: <PropertyIcon name="float" />**Float**
    - Default: `1`

How far away from the model to use the fixed size outlines in Unity Base Units. Beyond this distance, the outlines will properly scale accordingly.

:::warning Avoid the "Thick Outlines" Problem
Keep your Max Distance value at a small number in order to ensure they scale correctly without blocking your Avatar's visibility when viewed at a far distance!
:::

<!---------- Lighting Section ---------->

## Lighting

- `Type`: <PropertyIcon name="toggle" />**Toggle**
    - Default: `true`

Enables lighting for the Outline. This darkens the outline color in shadowed areas.

### Shadow Strength

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Shadow intensity of the Outlines.

<!---------- Outline Z Offset ---------->

## Outline Z Offset

This area controls the Camera Z Position when rendering Outlines. This is useful for giving control over the clipping of the Outlines in certain areas of your mesh.

### Overall Strength

- `Type`: <PropertyIcon name="float" />**Float**
    - Default: `0`

How much to offset the Camera Z Position. This property was previously known as `Cam Z Offset`.

### Outline Mask Channel

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `R`/`G`/`B`/`A`

Which channel to use from the [Outline Size Mask](#outline-size-mask) to control the Outline Z Offset.

### Mask Strength

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Controls the strength of the [Outline Mask Channel](#outline-mask-channel) used for the Outline Z Offset.

### Invert Mask Channel

- `Type`: <PropertyIcon name="toggle" />**Toggle**

If enabled, will invert the value from the [Outline Mask Channel](#outline-mask-channel).

### Vertex Color Channel

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Off`/`R`/`G`/`B`/`A`

Which [Vertex Color](/docs/vertex-options/vertex-colors.md) channel to use to control the Outline Z Offset.

### Vertex Color Strength

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Controls the strength of the [Vertex Color Channel](#vertex-color-channel) used for the Outline Z Offset.

<!---------- Vertex Color Section ---------->

## Vertex Colors

### Vertex Color Normals

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Use the vertex colors of the model, if they've been specially prepared. The (smoothed) vertex colors are used as the normal data.

### Vertex Color Mask

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Off`/`R`/`G`/`B`/`A`

Choose which Color channel to use in your Mask for the Vertex Colors.

<!---------- Rendering Options Section ---------->

## Rendering Options

### Clip 0 Width

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables clipping of the outline if a vertex has `0` outline thickness.

:::tip
If using an [Outline Size Mask](#outline-size-mask), all areas that are marked in `Black` will be clipped when this option is enabled. This can be useful for certain areas of your Avatar that have inverted normals, such as the Eyes.
:::

### Override Base Alpha

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Sets the base fragment Alpha to the Outline's Alpha value.

### Cull

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Off`/`Front`/`Back`
    - Default: `Front`

Which faces to cull. For the inverted hull technique, this should be set to `Front`.

### ZWrite

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Off`/`On`
    - Default: `On`

Determines whether the Outlines should write to the depth buffer. This should typically be ON by default.

### ZTest

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Disabled`/`Never`/`Less`/`Equal`/`LessEqual`/`Greater`/`NotEqual`/`GreaterEqual`/`Always`
    - Default: `LessEqual`

Sets how the Outline Stencil should test the depth buffer. By default, the depth buffer is tested, and if the depth value is not less than or equal to the current value, the Outline is discarded.

<!---------- AudioLink Section ---------->

## AudioLink

:::info
The settings in this section will only be visible when [AudioLink](/docs/audio-link/audio-link.md) is activated on the Material.
:::

<PoiVideo url='/vid/outlines/outlineALtest4.mp4'/>
<em>Demonstration of the Bass Band controlling the Outline Size, Emission, and Color via AudioLink. (Un-mute to hear sound)</em>

### Size Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which Band to use for the Outline Size adjustment.

#### Size Mod

- `Type`: <PropertyIcon name="float2" />**Vector2**

How much to add to or subtract from the Outline Size with Audio.

| Modifier | Function |
| --- | --- |
| Min | Amount changed to Outline Size with No Audio in Size Band |
| Max | Amount changed to Outline Size with Max Audio in Size Band |

### Emission Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which Band to use for Outline Emission adjustment.

#### Emission Mod

- `Type`: <PropertyIcon name="float2" />**Vector2**

How much to add to or subtract from the Outline Emission Intensity with Audio.

| Modifier | Function |
| --- | --- |
| Min | Amount changed to Outline Emission with No Audio in Emission Band |
| Max | Amount changed to Outline Emission with Max Audio in Emission Band |

### Color

- `Type`: <PropertyIcon name="toggle" />**Toggle**

Enables the ability to change the Outline Color with Audio.

<details>
<summary><b>Color Options</b></summary>

#### Band

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`/`Volume`

Which Band to use to change the Outline Color with Audio.

#### Replace

- `Type`: <PropertyIcon name="float2" />**Vector2**

How much to replace the Outline Color with Audio.

| Modifier | Function |
| --- | --- |
| Min | Amount of Outline Color replaced with No Audio in Color Band |
| Max | Amount of Outline Color replaced with Max Audio in Color Band |

#### Color

- `Type`: <PropertyIcon name="color" />**Color**

Which color to replace the current Outline Color with Audio.

</details>

## Outline Vertex Color Baker

The Outline Vertex Color Baker is an included utility used to create a version of your meshes that has smoothed Vertex Colors baked for Outlines. It can help eliminate sharp edges on your mesh so that Outlines can look as smooth as possible.

To use it,
1. Open the panel `Poi/Vertex Color Baker` from the Unity Menu.
2. Select your Avatar from the Scene.
3. Select which Meshes to target. It will ask you how much to "shrink" the tips of the Edges by a certain amount.
4. Generate the Mesh to Test the results. A clone of your Mesh will appear in your Scene showing your results.
   - *IMPORTANT: Ensure your Materials have `Vertex Color Normals` enabled in your Outlines settings in order to see results!*
5. Hit `Save` if you're happy with the changes. You can then use the newly-created Clone in your scene labeled with `(VertexColorBaked)`, OR link the generated Baked Meshes onto your Avatar's Mesh Renderers. *Your original Avatar is still preserved in the Scene.*

The generated Meshes will be placed in a sub-folder called `BakedMeshes`, located at each location of the original FBX files used on the Avatar.