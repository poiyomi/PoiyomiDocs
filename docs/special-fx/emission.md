---
sidebar_position: 4
title: Emission
---
import PoiVideo from '@site/src/components/PoiVideo' 

Emission is a function that allows adding brightness directly to the base color of a mesh. It can be used to add highlights, or to add a glow effect to a mesh.

There are 4 identical emission sections, each with their own unique options. They are independent of each other. Emissions are always added with one another when overlapping.

## Replace Base Color

- `Type`: **Checkbox**

If enabled, the base color of the mesh will be replaced with the emission color (calculated from the combined strength of all the emission sections with Replace Base Color enabled). This means that the mesh, in areas with intense emission, will take on the color of the emission.

## Emission Color

- `Type`: **HDR Color**

Tint color applied to the emission map. If no map is defined, this color will be used entirely.

This color is an HDR color, meaning it can have an intensity applied to make the color brighter than normal colors. This can be optionally used instead of, or in addition to, the Emission Strength option.

## Emission Map

- `Type`: **Color** Texture (sRGB **ON**)

Color map of the emission. This is used to define the color of the emission in different areas on the mesh. Black areas will not be affected by the emission, while areas with color will be affected by the emission.

## Base Color as Map?

- `Type`: **Checkbox**

Applies the base color as a map. Useful for adding highlights to a mesh, especially in combination with an emission mask.

## Emission Mask

- `Type`: **Data** Texture (sRGB **OFF**)

Mask texture that defines where to place the emission effect. Black areas will not be affected by the emission, while white areas will be fully affected by the emission.

## Emission Strength

- `Type`: **Float**, Range: `0.0 - 20.0`

Strength of the emission. Values greater than `1.0` will not change the base color as much, but will increase the amount the emission *blooms* (glows) in worlds with post processing enabled, and bloom configured.

Generally, this value should be set between `0.0` and `1.0` for a normal effect, and `1.0` to `5.0` for a more intense effect.

## Hue Shift

- `Type`: **Checkbox**

Enables hue shifting of the emission.

### Hue Shift

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to shift the base color around the hue circle.

This value is circular, and will have the same result at 0 and 1.

### Hue Shift Speed

- `Type`: **Float**

How much to constantly shift the hue with time. A value of 1 will result in a full hue shift cycle every 20 seconds.

## Center Out

- `Type`: **Checkbox**

Whether to change the emission mode to center out. This will make the emission move from the center of the mesh to the edges of the mesh, relative to the view direction and the mesh's normal. The emission map is used to create the center out map.

### Flow Speed

- `Type`: **Float**

How fast the center out effect should move.

## Light Based

- `Type`: **Checkbox**

Enables Light Based emission. This allows modifying the emission based on the light intensity at different points on the mesh, or based on the world lighting.

The default settings define an emission that will glow in the dark, multiplying the emission intensity by `1.0` at `0.0` lighting intensity, decreasing to `0.0` at `1.0` lighting intensity.

### Lighting Type

- `Type`: **Dropdown**, Options: `World`/`Mesh`

Whether to use `World` or `Mesh` lighting as the basis. `World` type uses the light intensity of the probe being used, meaning it will be the same at all points on the mesh. `Mesh` type uses the intensity of lighting at each point on the mesh, which can be different at different points, such as in shadow.

### Min Emission Multiplier

- `Type`: **Float**, Range: `0.0 - 1.0`

Amount to multiply the emission by at the *Min Lighting* value.

### Max Emission Multiplier

- `Type`: **Float**, Range: `0.0 - 1.0`

Amount to multiply the emission by at the *Max Lighting* value.

### Min Lighting

- `Type`: **Float**, Range: `0.0 - 1.0`

Lighting intensity at which to use the *Min Emission Multiplier*.

### Max Lighting

- `Type`: **Float**, Range: `0.0 - 1.0`

Lighting intensity at which to use the *Max Emission Multiplier*.

## Blinking

- `Type`: **Checkbox**

Enables Blinking of the emission. This allows the emission to blink at a certain rate without needing to explicitly animate it.

### Emissive Blink Min

- `Type`: **Float**

Minimum multiplier for emissive blink. This is the amount the emission will be multiplied by at the low end of the blink cycle.

### Emissive Blink Max

- `Type`: **Float**

Maximum multiplier for emissive blink. This is the amount the emission will be multiplied by at the high end of the blink cycle.

### Emissive Blink Velocity

- `Type`: **Float**

How fast the blink cycle should move. This uses the sine of time, so a value of 1 will result in a blink cycle every 6.28 (`Pi * 2`) seconds or so. Higher values will result in a faster blink cycle.

### Offset

- `Type`: **Float**

Offset of the blink cycle in time. Useful for offsetting the blink cycle of different emission sections. This uses the sine of time, so a value of 6.28 (`Pi * 2`) will offset the blink cycle by 1 second. Higher values will result in a blink cycle that is offset by a larger amount of time.

## Scrolling

- `Type`: **Checkbox**

Enables a scrolling emission effect. This creates a wave (or other pattern defined by a Curve) that travels in world space.

### Use Curve

- `Type`: **Checkbox**

Enables the use of a Curve to define the scrolling wave shape.

#### Curve

- `Type`: **Data** Gradient Texture (sRGB **OFF**)

Curve texture that defines the scrolling wave shape. By clicking the horizontal box, a curve editor will open that can create a curve texture.

### VColor as position

- `Type`: **Checkbox**

Whether to use the vertex color to determine the position of the wave. If disabled, the position will be determined by world-space coordinates.

This option requires baking position data into the vertex color, which can be done with the Poi Vertex color baker.

### Direction

- `Type`: **Vector4**

Direction of the scrolling wave. This vector is in world space, with the X, Y, and Z values defining the direction of the wave. The W value is ignored. The higher the values of the directional components, the more dense the wave will be.

### Width

- `Type`: **Float**

Width of the wave; must be greater than 0. This value is unitless, and is constant regardless of the model scale. Smaller Width values result in a wider wave.

### Velocity

- `Type`: **Float**

How fast the wave should move. Higher values result in a faster wave. This value can be negative, which will cause the wave to move in the opposite direction.

### Interval

- `Type`: **Float**

How much distance there should be between each wave. This value is unitless, and is constant regardless of the model scale. Larger intervals result in more space between waves.

### Offset

- `Type`: **Float**

An offset applied to the wave. This value is unitless, and depends on the velocity and interval values.

## Audio Link

- `Type`: **Checkbox**

Enables or disables Emission Audio Link features.

### Emission Add

- `Type`: **Checkbox**

#### Emission Strength Add

- `Type`: **Vector2**

How much to add to or subtract from the emission strength with audio.

| Channel | Function |
| --- | --- |
| X | Amount Added to Emission with no audio in Emission Band |
| Y | Amount Added to Emission with max audio in Emission Band |


#### Emission Add Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band to use for the Audio Link Emission adjustment.


### Center Out

#### Center Out Add

- `Type`: **Vector2**

How much to add to or subtract from the center out strength with audio.

| Channel | Function |
| --- | --- |
| X | Amount Added to Emission with no audio in Center Out Band |
| Y | Amount Added to Emission with max audio in Center Out Band |

#### Center Out Duration

- `Type`: **Float**, Range: `0.0 - 1.0`

How much audio history should be used to calculate the center out. Lower values will result in a faster center out with less detail.

#### Intensity Threshold

- `Type`: **Float**, Range: `0.0 - 1.0`

How high the audio intensity must be before being added to the center out strength. This can be used to create a "punchier" center out effect.

#### Center Out Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band to use for the Audio Link Center Out adjustment.
