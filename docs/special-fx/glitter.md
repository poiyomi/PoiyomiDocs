---
sidebar_position: 6
title: Glitter / Sparkle
description: Glitter adds a voronoi-based sparkle to the color of the Mesh, and can be used to create sparkles or to simulate specular lighting on a glittery surface.
keywords: [glitter, sparkle, voronoi, specular, special fx, effect, fx, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

The Glitter feature is a simple effect that adds a voronoi-based sparkle to the color of the mesh. It can be used to add a sparkle to a mesh, or to simulate specular lighting on a glittery surface.

:::info Changes in 9.0
Glitter / Sparkle received a complete rewrite as of Poiyomi 9.0. Therefore, some features have been changed and reorganized.
:::

<PoiVideo url='/vid/special-fx/GlitterExample.mp4'/>
<em>Example of the Glitter effect on this Clothing.</em>

## UV

- `Type`: **Dropdown**, Options: `UV0`/`UV1`/`UV2`/`UV3`/`Panosphere`/`World Pos`/`Local Pos`/`Polar UV`/`Distorted UV`

Which UV to project the glitter effect on. 

The UV used for this should be relatively even for the glitter effect to not be distorted. If the UV is distorted, the glitter effect will be distorted. For example, if part of the mesh is projected larger than the rest, the glitter effect will be larger in that area.

## Mode

- `Type`: **Dropdown**, Options: `Angle`/`Linear Emission`/`Light Reflections`

Which mode to use for glitter.

- `Angle`: The glitter effect is masked according to the angle between the view direction and the normal of the mesh. This threshold is controlled by the **Glitter Angle Range** Property.
- `Linear Emission`: The glitter effect is emitted in a linear fashion, with all areas of the mesh having an equal amount of glitter.
- `Light Reflections`: The glitter effect is masked by the specular reflection of the mesh. The size of the effect is controlled by the **Glitter Angle Range** Property. Glitter in this mode will always be hidden in dark areas of the mesh, as there's no light to reflect off of.

## Shape

- `Type`: **Dropdown**, Options: `Circle`/`Square`

What shape to use for the glitter effect, within each Voronoi cell. The shape can only be seen when **Glitter Size** is set low enough to not take up the entire cell.

## Blend Mode

- `Type`: **Dropdown**, Options: `Add`/`Replace`

How the glitter should be blended with the base color.

- `Add`: The glitter effect is added to the base color. Generally results in a brighter effect.
- `Replace`: The glitter effect replaces the base color. Generally results in a richer effect.

## Use Normals

- `Type`: **Float**, Range: `0.0 - 1.0`

At `0`, only vertex normals are taken into account when calculating glitter. At `1`, normal maps (pixel normals) are also taken into account at full strength. Values in between blend.

## Layers

- `Type`: **Integer**, Range: `1 - 4`

How many layers of the glitter effect should be applied.

## Shape & Color

### Shape Texture

- `Type`: **Color** Texture (sRGB **ON**)

Texture to use for the individual glitter particles. These particles are placed in each voronoi cell. The glitter texture should generally be used with large glitter particles (smaller **Glitter Density**).

### Color Map

- `Type`: **Color** Texture (sRGB **ON**)

Map of what color the glitter should be in different areas of the mesh. This offers more control over the glitter color.

### Color

- `Type`: **HDR Color**

Base color used for the glitter effect. This color is an HDR color, meaning it can have an intensity applied to make the color brighter than normal colors.

### Use Base Color

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to blend the surface color with the glitter color. This creates a somewhat metallic effect. A value of 1.0 will result in the **Color** being completely replaced by the surface color.

### Random Color

- `Type`: **Boolean**

Applies random colors to glitter.

#### Saturation Range

- `Type`: **Multislider**, Range: `0.0 - 1.0`

The saturation range of the randomly generated glitter colors.

#### Brightness Range

- `Type`: **Multislider**, Range: `0.0 - 1.0`

The brightness range of the randomly generated glitter colors.

## Position & Size

### Glitter Density

- `Type`: **Float**

How dense the glitter should be. This represents the number of voronoi cells that should bne along the edge of the mesh UV. Reasonable values are generally between `250` and `1000`, but can vary significantly.

### Glitter Size

- `Type`: **Float**, Range: `0.0 - 1.0`

How much the glitter should occupy the voronoi cell. At `0.0`, the glitter will be totally invisible. At `1.0`, the glitter will completely fill the cell, making the borders of the cell visible.

### Panning

- `Type`: **Vector2**

How fast the glitter particles should move across the **Glitter UV**. This is a 2D vector, with the X and Y values defining the speed in the X and Y directions.

### Random Position

- `Type`: **Boolean**

Applies random positional offset to glitter.

### Random Size

- `Type`: **Boolean**

Applies random size to glitter.

#### Size Range

- `Type`: **Multislider**, Range: `0.0 - 1.0`

The size range of the glitter. Overrides 'Glitter Size'.

## Sparkle Control

### Glitter Min Brightness

- `Type`: **Float**, Range: `0.0 - 1.0`

Minimum brightness level for the glitter. At `0`, the glitter will be completely invisible. At `1`, the glitter will always have the maximum brightness.

### Glitter Max Brightness

- `Type`: **Float**, Range: `0.0 - 40.0`

Maximum brightness level for the glitter. At `0`, the glitter will always be completely invisible.

### Speed

- `Type`: **Float**

How fast the the glitter should "flicker", or cycle between bright and dark. Higher values will result in a faster flickering effect.

### Dim Light

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to "dim" the glitter effect, which shrinks it from taking up the entire voronoi cell. At `0`, the glitter will be completely visible. At `1`, the glitter will be very small.

Only visible when **Mode** is set to `Linear Emission`.

### Glitter Angle Range

- `Type`: **Float**, Range: `0 - 90`

Range to limit the angle of the glitter effect. Smaller values will create a tighter glitter pattern.

Only visible when **Mode** is set to `Angle` or `Light Reflections`.

### Glitter Bias

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to bias the glitter brightness. At `0`, the glitter will be completely dark. At `1`, the glitter will always have the maximum brightness. This works similarly to the **Glitter Contrast** Property.

Only Visible when **Mode** is set to `Angle`.

### Post Contrast

- `Type`: **Float**, Range: `1 - 1000`

How much contrast the glitter should have. At lower values, the cells will all have a similar brightness. At higher values, cells will have increasingly different brightness levels.

Only visible when **Mode** is set to `Angle` or `Light Reflections`.

### Distant Jaggy Fix

- `Type`: **Float**, Range: `0.0 - 0.1`

How much to apply a fix for jagged edges of square glitter. Slightly rounds the corners of the glitter cells.

Only visible when **Shape** is set to `Square`.

## Rotations

### Random Offset

- `Type`: **Boolean**

Applies random rotation offsets to glitter cells.

### Constant Speed

- `Type`: **Float**

How fast the glitter particles should rotate within the voronoi cell. This is only visible with glitter set to Square, or glitter that uses a Texture.

### Random Speed Range

- `Type`: **Vector2**

Applies a constant, randomly selected rotation speed to each cell, meaning each individual cell will have a consistent rotation speed.

## Masking & Light Masking

### Glitter Mask

- `Type`: **Data** Texture (sRGB **OFF**)

Mask texture that defines what areas of the mesh should have glitter. Black areas will not have glitter, while white areas will.

### Hide in Shadow

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to hide the glitter in shadow. At `0`, the glitter will be completely visible in shadow. At `1`, the glitter will be completely invisible in shadow.

### Scale with Lighting

- `Type`: **Float**, Range: `0.0 - 1.0`

Increasing this value will scale the brightness of the glitter based on the intensity of scene lighting.

### Global Mask

- `Type`: **Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Select which [Global Mask](/docs/modifiers/global-masks.md) to use to mask the Glitter effects.

## Hue Shift

- `Type`: **Boolean**

Enables or Disables the Hue Shift effect for glitter.

### Color Space

- `Type`: **Dropdown**, Options: `OKLab`/`HSV`

Choice of Color Space to use for the Hue Shift. By default, it will be set to `OKLab`.

Learn about the difference of Color Spaces as documented here in [Color Adjust](/docs/color-and-normals/color-adjust.md#oklab-vs-hsv).

### Shift Speed

- `Type`: **Float**

How much to constantly shift the hue with time. A value of 1 will result in a full hue shift cycle every 20 seconds.

### Hue Shift

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to shift the base color around the hue circle. This value is circular, and will have the same result at 0 and 1.

## AudioLink

- `Type`: **Boolean**

Enables or Disables AudioLink effects for Glitter.

:::info
The settings in this section will only be visible when [AudioLink](/docs/audio-link/audio-link.md) is activated on the Material.
:::

### Alpha Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Selects which audio band should be used to modulate glitter alpha. 

### Alpha Mod

- `Type`: **Vector2**

Configures by how much glitter alpha should be modulated when the selected band gets triggered. 'Min' specifies alpha at rest, 'Max' specifies alpha at full activation.

### Max Brightness Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Selects which audio band should be used to modulate glitter max brightness. 

### Max Brightness Mod

- `Type`: **Vector2**

Configures by how much glitter max brightness should be modulated when the selected band gets triggered. 'Min' specifies max brightness at rest, 'Max' specifies max brightness at full activation.

### Size Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Selects which audio band should be used to modulate glitter size. 

### Size Mod

- `Type`: **Vector2**

Configures by how much glitter size should be modulated when the selected band gets triggered. 'Min' specifies the size at rest, 'Max' specifies the size at full activation.

### Chrono Sparkle Type

- `Type`: **Dropdown**

Determines how chronotensity is applied to sparkle speed.

### Chrono Sparkle Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Selects which audio band should be used to drive chronotensity sparkle speed.

### Chrono Sparkle Speed

- `Type`: **Float**

Determines how much sparkle speed will be modulated as a function of chronotensity.

### Chrono Rotation Type

- `Type`: **Dropdown**

Determines how chronotensity is applied to sparkle texture rotation.

### Chrono Rotation Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Selects which audio band should be used to drive chronotensity sparkle texture rotation.

### Chrono Rotation Speed

- `Type`: **Float**

Determines how much sparkle rotation speed will be modulated as a function of chronotensity.