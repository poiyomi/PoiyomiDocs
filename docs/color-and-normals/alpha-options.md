---
sidebar_position: 3
title: Alpha Options
---
import PoiVideo from '@site/src/components/PoiVideo'

The **Alpha Options** section provides options for modifying how the material treats alpha.

The effects of these options are heavily influenced by the [Render Preset](../general/render-preset.md) and other render settings.

## Force Opaque

- `Type`: **Checkbox**

This option forces the material to have an alpha value of 1. Generally, this will result in any transparency being disabled.

## Alpha Mod

- `Type`: **Float**, Range: `-1.0 - 1.0`

Alpha Mod defines a direct value to add to or remove from the material alpha. This directly influences all alpha values on the material.

## Alpha Premultiply

- `Type`: **Checkbox**

With Alpha Premultiply enabled, the shader will multiply the base color by the alpha value after all base color operations, but before lighting and emission calculations. This results in a different appearance for transparent materials.

## Alpha To Coverage

- `Type`: **Checkbox**

Enable or Disable Alpha to Coverage. This affects how the shader is sampled by functions that read the coverage of a fragment. 

Alpha to Coverage can be enabled in the cutout render mode to provide transparency levels when the viewer is using Multi-Sampled Anti-Aliasing (MSAA). The number of transparency levels is equal to the MSAA level.

### Sharpened A2C

- `Type`: **Checkbox**

Sharpened Alpha to Coverage (A2C) rescales the alpha value using the mipmaps. 

This option is useful for using Alpha to Coverage on dense collections of cutout polygons that will be discernable from varying distances, such as vegetation and grass.

### Mip Level Alpha Scale

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to use the mipmaps to rescale the alpha value. Only used when Sharpened A2C is enabled.

## Dithering

- `Type`: **Checkbox**

Enable or disable alpha dithering.

Dithering is a technique that introduces intentional noise in order to provide a perceptually smoother transition between two sharp differences in alpha. This is especially useful when using the Cutout rendering mode.

### Dither Gradient

- `Type`: **Float**, Range: `0.0 - 1.0`

The range to apply dithering over. The larger this value is, the more dithering will be applied.

## Distance Alpha

- `Type`: **Checkbox**

Enable or Disable Distance Alpha. Distance Alpha can modify the alpha value based on the distance from the viewer (camera) to the object/pixel.

### Pos To Use

- `Type`: **Dropdown**, Options: `Object Position/Pixel Position`

Which position to use to calculate distance.

`Object Position` will calculate distance relative to the origin of the object, resulting in the whole object having a uniform alpha change. This is useful for making an entire material change alpha based on the distance from the object itself.

`Pixel Position` will calculate distance relative to the position of each pixel. This means different parts of an object can have different levels of alpha. This is useful for making parts of an object appear or disappear based on distance without the whole object being affected.

### Min Distance Alpha

- `Type`: **Float**, Range: `0.0 - 1.0`

The alpha multiplier that will be applied at the [Min Distance](#Min-Distance). 

### Max Distance Alpha

- `Type`: **Float**, Range: `0.0 - 1.0`

The alpha multiplier that will be applied at the [Max Distance](#Max-Distance). 

### Min Distance

- `Type`: **Float**

The distance (in meters) at which the Min Distance Alpha multiplier will be applied.

### Max Distance

- `Type`: **Float**

The distance (in meters) at which the Max Distance Alpha multiplier will be applied.

## Fresnel Alpha

- `Type`: **Checkbox**

Enable or Disable the Fresnel Alpha effect. Fresnel Alpha uses the angle between the viewer (camera) and the object's normal to modify the alpha.

This can be used to simulate materials that are more opaque at shallow angles, such as transluscent fabric (used for tights or stockings). It can be thought of as analagous to [Rim Lighting](../shading/rim-lighting.md), but for alpha instead of color.

### Intensity

- `Type`: **Float**, Range: `0.0 - 1.0`

How much the alpha should be modified by the Fresnel Alpha effect.

### Sharpness

- `Type`: **Float**, Range: `0.0 - 1.0`

How sharp the transition should be between full effect and no effect.

### Width

- `Type`: **Float**, Range: `0.0 - 1.0`

How wide the Fresnel Alpha effect should be.

### Invert

- `Type`: **Checkbox**

Whether the Fresnel Alpha effect should increase in intensity from the outside-in or the inside-out.

## Angular Alpha

- `Type`: **Checkbox**

Angular Alpha uses the angle between a specified direction and the object or vertex position to modify the material alpha. 

This can be used to create materials that are only visible when looking directly at them, or are invisible when looked at directly.

### Angle Type

- `Type`: **Dropdown**, Options: `Camera Face Model/Model Face Camera/Face Each Other`

Defines how the angle should be calculated.

`Camera Face Model` will calculate the angle using the forward direction of the camera and the line between the camera and the model. This will map the alpha multiplier from 0 to 1 based on the values of Camera Angle Min and Camera Angle Max.

`Model Face Camera` will calculate the angle using the defined model Forward Direction and the line between the model position and the camera position. This will map the alpha multiplier from 0 to 1 based on the values of Model Angle Min and Model Angle Max.

`Face Each Other` will calculate the angle using both the forward direction of the camera and the defined model Forward Direction. This will choose the max value of the values from `Camera Face Model` and `Model Face Camera`.

### Model or Vert Position

- `Type`: **Dropdown**, Options: `Model/Vertex`

`Model` will calculate distance relative to the origin of the object, resulting in the whole object having a uniform alpha change. This is useful for making an entire material change alpha at once.

`Vertex` will calculate distance relative to the position of each vertex. This means different parts of an object can have different levels of alpha. This is useful for making parts of an object appear or disappear without the whole object being affected.

### Forward Direction

Defines the vector used for the model Forward Direction. Relative to the model's origin coordinates.

### Camera Angle Min

- `Type`: **Float**, Range: `0.0 - 180.0`

The angle (in degrees) at which the alpha multiplier should be 0 in the `Camera Face Model` mode.

### Camera Angle Max

- `Type`: **Float**, Range: `0.0 - 180.0`

The angle (in degrees) at which the alpha multiplier should be 1 in the `Camera Face Model` mode.

### Model Angle Min

- `Type`: **Float**, Range: `0.0 - 180.0`

The angle (in degrees) at which the alpha multiplier should be 0 in the `Model Face Camera` mode.

### Model Angle Max

- `Type`: **Float**, Range: `0.0 - 180.0`

The angle (in degrees) at which the alpha multiplier should be 1 in the `Model Face Camera` mode.

### Min Alpha

- `Type`: **Float**, Range: `0.0 - 1.0`

The minimum value of alpha for the Angular Alpha mode. This will prevent the alpha from going below a certain level.

## Audio Link

:::info
This section allows control of the Alpha through [AudioLink](../audio-link/audio-link.md). It will only be exposed when AudioLink is activated on the Material.
:::

### Alpha Audio Link

- `Type`: **Checkbox**

Enables AudioLink for Alpha Options. The Alpha can be modified based on the audio level in a specific band.

### Add Range

- `Type`: **Vector2**

How much to add (or subtract) from alpha. The **X** value is the alpha added with no volume in the Alpha Add Band, and the **Y** value is the alpha added with maximum volume.

If audio link is not present in a world, no value will be added. Using this behavior, Alpha Audio Link can be set up in various ways. For example, **X** can be set to `-1` and **Y** can be set to `0`. With this, the alpha will be unmodified in worlds without audio link, but in worlds with audio link, the alpha will have between `-1` and `0` added, resulting in invisibility at no audio, ranging to not being modified at all with max audio.

### Alpha Add Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band to use for Alpha Add.
