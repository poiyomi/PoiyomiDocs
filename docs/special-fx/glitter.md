---
sidebar_position: 5
title: Glitter
---
import PoiVideo from '@site/src/components/PoiVideo'

The glitter feature is a simple effect that adds a voronoi-based sparkle to the color of the mesh. It can be used to add a sparkle to a mesh, or to simulate specular lighting on a glittery surface.

## UV

- `Type`: **Dropdown**, Options: `UV0`/`UV1`/`UV2`/`UV3`/`Panosphere`/`World Pos XZ`/`Polar UV`/`Distorted UV`

Which UV to project the glitter effect on. 

The UV used for this should be relatively even for the glitter effect to not be distorted. If the UV is distorted, the glitter effect will be distorted. For example, if part of the mesh is projected larger than the rest, the glitter effect will be larger in that area.

## Mode

- `Type`: **Dropdown**, Options:`Angle`/`Linear Emission`/`Light Reflections`

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

## Color

- `Type`: **HDR Color**

Base color used for the glitter effect. This color is an HDR color, meaning it can have an intensity applied to make the color brighter than normal colors.

## Use Surface Color

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to blend the surface color with the glitter color. This creates a somewhat metallic effect. A value of 1.0 will result in the **Color** being completely replaced by the surface color.

## Glitter Color Map

- `Type`: **Color** Texture (sRGB **ON**)

Map of what color the glitter should be in different areas of the mesh. This offers more control over the glitter color.

## Glitter Mask

- `Type`: **Data** Texture (sRGB **OFF**)

Mask texture that defines what areas of the mesh should have glitter. Black areas will not have glitter, while white areas will.

## Glitter Texture

- `Type`: **Color** Texture (sRGB **ON**)

Texture to use for the individual glitter particles. These particles are placed in each voronoi cell. The glitter texture should generally be used with large glitter particles (smaller **Glitter Density**).

## Panning Speed

- `Type`: **Vector2**

How fast the glitter particles should move across the **Glitter UV**. This is a 2D vector, with the X and Y values defining the speed in the X and Y directions.

## Rotation Speed

- `Type`: **Float**

How fast the glitter particles should rotate within the voronoi cell. This is only visible with glitter set to Square, or glitter that uses a Texture.

## Glitter Density

- `Type`: **Float**

How dense the glitter should be. This represents the number of voronoi cells that should bne along the edge of the mesh UV. Reasonable values are generally between `250` and `1000`, but can vary significantly.

## Glitter Jitter

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to randomize the shape of the glitter voronoi cells. At `0.0`, the cells will be completely square. At `1.0`, the cells will be totally randomized.

## Glitter Speed

- `Type`: **Float**

How fast the the glitter should "flicker", or cycle between bright and dark. Higher values will result in a faster flickering effect.

## Glitter Size

- `Type`: **Float**, Range: `0.0 - 1.0`

How much the glitter should occupy the voronoi cell. At `0.0`, the glitter will be totally invisible. At `1.0`, the glitter will completely fill the cell, making the borders of the cell visible.

## Glitter Contrast

- `Type`: **Float**, Range: `1 - 1000`

How much contrast the glitter should have. At lower values, the cells will all have a similar brightness. At higher values, cells will have increasingly different brightness levels.

Only visible when **Mode** is set to `Angle` or `Light Reflections`.

## Glitter Angle Range

- `Type`: **Float**, Range: `0 - 90`

Range to limit the angle of the glitter effect. Smaller values will create a tighter glitter pattern.

Only visible when **Mode** is set to `Angle` or `Light Reflections`.

## Glitter Min Brightness

- `Type`: **Float**, Range: `0.0 - 1.0`

Minimum brightness level for the glitter. At `0`, the glitter will be completely invisible. At `1`, the glitter will always have the maximum brightness.

## Glitter Max Brightness

- `Type`: **Float**, Range: `0.0 - 40.0`

Maximum brightness level for the glitter. At `0`, the glitter will always be completely invisible.

## Glitter Bias

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to bias the glitter brightness. At `0`, the glitter will be completely dark. At `1`, the glitter will always have the maximum brightness. This works similarly to the **Glitter Contrast** Property.

Only Visible when **Mode** is set to `Angle`.

## Hide in Shadow

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to hide the glitter in shadow. At `0`, the glitter will be completely visible in shadow. At `1`, the glitter will be completely invisible in shadow.

## Dim Light

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to "dim" the glitter effect, which shrinks it from taking up the entire voronoi cell. At `0`, the glitter will be completely visible. At `1`, the glitter will be very small.

Only visible when **Mode** is set to `Linear Emission`.

## Frequency

- `Type`: **Float**, Range: `0 - 100`

How fast the glitter should "flicker", or cycle between bright and dark. Higher values will result in a faster flickering effect.

Only visible when **Mode** is set to `Linear Emission`.

## Jaggy Fix

- `Type`: **Float**, Range: `0.0 - 0.1`

How much to apply a fix for jagged edges of square glitter. Slightly rounds the corners of the glitter particles.

Only visible when **Shape** is set to `Square`.

## Hue Shift

Enables or Disables the Hue Shift effect for glitter.

### Shift Speed

- `Type`: **Float**

How much to constantly shift the hue with time. A value of 1 will result in a full hue shift cycle every 20 seconds.

### Hue Shift

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to shift the base color around the hue circle.

This value is circular, and will have the same result at 0 and 1.

## Random Stuff

Enables certain random variations for the glitter effect.

### Saturation Range

- `Type`: **Vector2**, Range: `0.0 - 1.0`

Range of saturation values to randomly use for each glitter cell. The first value is the minimum saturation, and the second value is the maximum saturation.

### Brightness Range

- `Type`: **Vector2**, Range: `0.0 - 1.0`

Range of brightness values to randomly use for each glitter cell. The first value is the minimum brightness, and the second value is the maximum brightness.

### Random Size

- `Type`: **Checkbox**

Enables random size selection for each glitter cell.

### Size Range

- `Type`: **Vector2**, Range: `0.0 - 1.0`

Range of size values to randomly use for each glitter cell. The first value is the minimum size, and the second value is the maximum size.

### Random Tex Rotation

- `Type`: **Checkbox**

Enables random rotation of the glitter texture. Texture rotation is only applied when the glitter texture is in use.
