---
sidebar_position: 2
title: Geometric Dissolve
description: Geometric Dissolve manipulates the 3D mesh's vertices to create an advanced Dissolve effect..
keywords: [geometric dissolve, geometric, dissolve, advanced dissolve, 3d dissolve, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

# Geometric Dissolve

Geometric Dissolve is an advanced feature that expands beyond a typical Dissolve in the main shader. It uses the 3D Mesh to manipulate the vertices, creating an advanced 3D dissolve animation.

To use Geometric Dissolve, select the shader version `.poiyomi/Poiyomi Pro Geometric Dissolve`. This exposes the Geometric Dissolve category with the following settings shown below.

:::info Pro Only
**This Feature is only available in Poiyomi Pro!** Subscribe to the [Patreon](https://www.patreon.com/poiyomi) at the $10 tier or higher to access it.
:::

:::warning
Geometric Dissolve can have a performance impact depending on the Mesh it is being used on, especially if using `Pyramid (Slower)` Shape Type. Use this feature wisely!
:::

## Shape Type

- `Type`: **Dropdown**, Options: `Pyramid (Slower)`/`Triangle (Fast)`

Choice of Geometric Dissolve style to use.

<details>
<summary>Shape Type Options</summary>

### Pyramid (Slower)

Default mode. Triangles actively being 'dissolved' will have additional geometry generated in order to give depth and volume to the effect.

### Triangle (Faster)

Triangles actively being 'dissolved' will remain simple triangles and have no additional geometry generated.

</details>

## Gradient Type

- `Type`: **Dropdown**, Options: `Texture`/`Point 2 Point`/`Noise`

Determines how the intensity of the effect will be driven by.

<details>
<summary>Texture Options</summary>

### Texture

#### UV

- `Type`: **Dropdown**, Options: `UV0`/`UV1`/`UV2`/`UV3`/`World Pos`/`Local Pos`

Which UV the Geometric Dissolve effect will be projected onto.

#### Gradient

- `Type`: **Data** Texture (`sRGB = OFF`)

Gradient Texture to use for the Geometric Dissolve Gradient.

#### Mask

- `Type`: **Data** Texture (`sRGB = OFF`)

Mask Texture to isolate the Geometric Dissolve to only affect a specific area.

#### Dissolve Alpha

- `Type`: **Float**, Range: `-1.0 - 1.0`

Defines the main state of the Geometric Dissolve effect.

#### Expansion Time

- `Type`: **Float**, Range: `0.001 - 1.0`

Defines the delay of time between the main states of the Geometric Dissolve effect.

</details>

<details>
<summary>Point 2 Point Options</summary>

### Point 2 Point

#### Mask

- `Type`: **Data** Texture (`sRGB = OFF`)

Mask Texture to isolate the Geometric Dissolve to only affect a specific area.

#### Dissolve Alpha

- `Type`: **Float**, Range: `-1.0 - 1.0`

Defines the main state of the Geometric Dissolve effect.

#### Expansion Time

- `Type`: **Float**, Range: `0.001 - 1.0`

Defines the delay of time between the main states of the Geometric Dissolve effect.

#### Vertex Color Position

- `Type`: **Boolean**

If enabled, will use the Vertex Colors of your Mesh to define the positions for the Geometric Dissolve.

#### Start Point

- `Type`: **Vector3**

Defines the starting position of the Gradient in XYZ coordinates.

#### End Point

- `Type`: **Vector3**

Defines the ending position of the Gradient in XYZ coordinates.

#### Visualize

- `Type`: **Boolean**

Changes the Geometric Dissolve effect to show a visualization of the effect, ignoring other shader effects rendered on top.

</details>

<details>
<summary>Noise Options</summary>

### Noise

#### UV

- `Type`: **Dropdown**, Options: `UV0`/`UV1`/`UV2`/`UV3`/`World Pos`/`Local Pos`

Which UV the Geometric Dissolve effect will be projected onto.

#### Mask

- `Type`: **Data** Texture (`sRGB = OFF`)

Mask Texture to isolate the Geometric Dissolve to only affect a specific area.

#### Dissolve Alpha

- `Type`: **Float**, Range: `-1.0 - 1.0`

Defines the main state of the Geometric Dissolve effect.

#### Noise Threshold

- `Type`: **Float**, Range: `0.0 - 1.0`

Defines the threshold to use on the Geometric Dissolve effect, such as a delay to where each piece of the Mesh will start dissolving from.

#### Expansion Time

- `Type`: **Float**, Range: `0.001 - 1.0`

Defines the delay of time between the main states of the Geometric Dissolve effect.

#### Noise Density

- `Type`: **Float2**

Density of the noise used to drive dissolve intensity. Smaller values appear smoother, larger values provide more detail.

#### Noise Speed

- `Type`: **Float**

Determines how quickly the noise algorithm progresses through time. Larger values are faster.

This setting creates an animated Geometric Dissolve when in-between Dissolve Alpha values.

</details>

## Motion & Size

### Travel Distance

- `Type`: **Float**

Determines the maximum distance a triangle being "dissolved" may travel.

### Scale Range

- `Type`: **Float4**

Defines the minimum and maximum scales and range of the Geometric Dissolve shapes.

| Scale | Function |
| --- | --- |
| MinS | Minimum Scale |
| MaxS | Maximum Scale |
| MinR | Minimum Range |
| MaxR | Maximum Range |

### Height Range

- `Type`: **Float4**

Defines the minimum and maximum height and range of the Geometric Dissolve shapes.

| Scale | Function |
| --- | --- |
| MinH | Minimum Height |
| MaxH | Maximum Height |
| MinR | Minimum Range |
| MaxR | Maximum Range |

### Min Rotation

- `Type`: **Float3**

Defines the minimum amount of rotations per cycle.

### Max Rotation

- `Type`: **Float3**

Defines the maximum amount of rotations per cycle.

## Color & Emission

### Color Tex

- `Type`: **Color** Texture (`sRGB = ON`)

Color Texture to blend with the Geometric Dissolve shapes.

### Blending

- `Type`: **Dropdown**, Options: `Replace`/`Darken`/`Multiply`/`Lighten`/`Screen`/`Subtract`/`Add`/`Overlay`/`Mixed`

Choice of blending mode to use for the Color Texture.

### Color

- `Type`: **Color**

Color to blend with the Geometric Dissolve shapes.

### Color Range

- `Type`: **Float2**

Defines the range of Color to blend with the Geometric Dissolve shapes.

- `Min` determines at what dissolve strength the material's base color will be fully shown.  
- `Max` determines at what dissolve strength the texture/color specified in this section will be fully shown.  
Values between `Min` and `Max` will fade smoothly. `Min` may be larger than `Max`.

### Emission Range

- `Type`: **Float2**

Defines the range of Emission to blend with the Geometric Dissolve shapes.

- `Min` determines at what dissolve strength this section will stop producing emissions.  
- `Max` determines at what dissolve strength this section will produce the specified emission amount.  
Values between `Min` and `Max` will fade smoothly. `Min` may be larger than `Max`.

## Wireframe

- `Type`: **Boolean**

Enables the wireframe to show during the Geometric Dissolve.

### Thickness

- `Type`: **Float**, Range: `0.0 - 1.0`

Thickness of the wireframe lines.

### Softness

- `Type`: **Float**, Range: `0.0 - 1.0`

How soft the wireframe is drawn on the Geometric Dissolve.

### Time Offset

- `Type`: **Float**

Timing offset for the Geometric Dissolve's wireframe during the animation.

### Extend Base Color

- `Type`: **Boolean**

Extends the wireframe to the Base Color.

### Extend Emission

- `Type`: **Boolean**

Extends the wireframe to the Emission.

### Wireframe Only

- `Type`: **Boolean**

Shows only the Wireframe.

## UV Tile Geo Dissolve

- `Type`: **Boolean**

Allows an alternative way to use UV Tile Discard with the use of Geometric Dissolve's advanced effects instead.

:::info Refer to UV Tile Documentation
All the sliders listed for each Row will reflect the same locations as described in [UV Tile Discard](/docs/special-fx/uv-tile-discard.md). Please refer to the documentation page to see what they are.

Each Slider will control the `Dissolve Alpha` for the described Row and Column.
:::

### UV Tile UV

- `Type`: **Dropdown**, Options: `UV0`/`UV1`/`UV2`/`UV3`

Choice of which UV to use for the Tile Dissolve.

### Row X Column Y

- `Type`: **Float**, Range: `-1.0 - 1.0`

This property will appear for each Row and Column for UV Tile Dissolve. Below is a table reference matching the same positions as described in [UV Tile Discard](/docs/special-fx/uv-tile-discard.md), named to each field shown in UV Tile Dissolve.

|  | Column 0 | Column 1 | Column 2 | Column 3 |
| :---: | :---: | :---: | :---: | :---: |
| **Row 3** | `Row 3, Column 0` | `Row 3, Column 1` | `Row 3, Column 2` | `Row 3, Column 3` |
| **Row 2** | `Row 2, Column 0` | `Row 2, Column 1` | `Row 2, Column 2` | `Row 2, Column 3` |
| **Row 1** | `Row 1, Column 0` | `Row 1, Column 1` | `Row 1, Column 2` | `Row 1, Column 3` |
| **Row 0** | `Row 0, Column 0` | `Row 0, Column 1` | `Row 0, Column 2` | `Row 0, Column 3` |
