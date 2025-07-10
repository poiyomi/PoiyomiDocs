---
sidebar_position: 1
title: Light Data
description: Light Data provides technical properties that change how Lighting affect the Material. It directly influences the functionality of your Shading settings.
keywords: [light, data, light data, lighting, shading, ao, shadow, mapping, masks, color, grayscale, directional, influence, poiyomi, shader]
---

The Light Data section provides options for changing features relating to the data used for lighting and shading the material. Options here significantly influence the functionality of the [Shading](/docs/shading/main.md) section.

## AO Maps

- `Type`: **Data** Texture (sRGB **OFF**)

A texture used to define the Ambient Occlusion (AO) for different areas on the material. Ambient occlusion darkens the lighting provided by ambient (indirect) lighting, an effect frequently seen in physical environments. This texture is generally baked in a 3d program like Blender or Substance Painter.

The AO map texture reads all 4 RGBA channels independently, allowing different AO maps to be packed into individual channels, and the intensity of each channel can be adjusted independently using the sliders visible on dropdown. This can be used to create different AO maps for different material states, for example, different AO maps on the skin of a character with different combinations of clothing.

Generally, if only a single map is being used (such as in the case of a black and white AO map), only one slider should generally be used. 

### AO Map R/G/B/A Strength

- `Type`: **Float**, Range: `0.0 - 1.0`

Intensity of each AO map channel.

## Shadow Map

- `Type`: **Data** Texture (sRGB **OFF**)

A texture used to define the Detail Shadows for different areas on the material. Detail Shadows darken the lighting provided by direct lighting. In some cases, this texture is similar to (or identical to) the AO texture. 

For certain styles, this can be used with hand-painted shadows to provide hard edged shadows in controlled areas. This can be preferable to painting the shadows directly onto the main texture, because in dark environments without much direct light, the shadows will disappear. In some cases, a mix of light shadows painted onto the main texture and those same shadows being used in a detail shadow texture.

The Detail Shadow texture reads all 4 RGBA channels independently, allowing different Detail Shadow maps to be packed into individual channels, and the intensity of each channel can be adjusted independently using the sliders visible on dropdown. This can be used to create different Detail Shadow maps for different material states, for example, different Detail Shadow maps on the skin of a character with different combinations of clothing.

Generally, if only a single map is being used (such as in the case of a black and white Detail Shadow map), only one slider should generally be used.

### Shadow Map R/G/B/A Intensity

- `Type`: **Float**, Range: `0.0 - 1.0`

Intensity of each Detail Shadow map channel.

## Shadow Masks

- `Type`: **Data** Texture (sRGB **OFF**)

A texture used to define the shadow mask on different areas of the material. Shadow Masks reduce the influence of shadows, and can be used to to create stylized models and appearances.

The Shadow Mask texture reads all 4 RGBA channels independently, allowing different Shadow Masks to be packed into individual channels, and the intensity of each channel can be adjusted independently using the sliders visible on dropdown. This can be used to create different Shadow Masks for different material states, for example, different Shadow Masks on the skin of a character with different combinations of clothing.

### Shadow Mask R/G/B/A Intensity

- `Type`: **Float**, Range: `0.0 - 1.0`

Intensity of each Shadow mask channel.

## Base Pass Lighting

Options controlling the lighting in the base pass. The base pass is used for basic lighting functionality like baked lighting, reflections, and the first directional light in a scene.

### Light Color Mode

- `Type`: **Dropdown**, Options: `Poi Custom`/`Standard`/`UTS2`/`OpenLit (lilToon)`

Defines how to calculate the light color. These will generally exhibit small differences under simple or ideal lighting, but will diverge in more complex or adverse lighting conditions.

#### Poi Custom (Light Color)

Poi Custom light color uses a custom light calculation to better handle adverse lighting conditions, such as those often encountered in user-created content.

Poi Custom light color mode adds the **Indirect uses Normals** option.

#### Standard

Standard light color uses a light calculation that more closely matches the Unity Standard shader. It can often break down in adverse lighting conditions.

#### UTS2 (Light Color)

UTS2 (UnityChan Toon Shader 2) light color uses a calculation that produces a result that's generally consistent, but often incoherent with the environmental lighting conditions. 

This mode adds the **Unlit Intensity** option.

#### OpenLit (lilToon)

Uses the Light Coloring mode used by lilToon.

### Light Map Mode

- `Type`: **Dropdown**, Options: `Poi Custom`/`Normalized NDotL`/`Saturated NDotL`

Changes how the light map is calculated.

This option may be removed in future versions of the shader.

#### Poi Custom (Light Map)

Poi Custom light map uses a custom calculation for the lightmap. It takes into account the baked lighting conditions.

#### Normalized NDotL

Normalized NDotL uses the dot product between the mesh normal and the light direction, normalized from `0-1`.

#### Saturated NDotL

Normalized NDotL uses the dot product between the mesh normal and the light direction, saturated at `0` and `1`.

### Light Direction Mode

Options: `Poi Custom`/`Forced Local Direction`/`Forced World Direction`/`UTS2`/`OpenLit (lilToon)`/`View Direction`

Defines how the light direction should be calculated. This can be used to emulate the look of other shaders, or to force a certain appearance while still remaining lit.

#### Poi Custom (Light Direction)

Poi Custom light direction calculates the light direction taking into account the lighting conditions. This will be only slightly different from the Unity Standard Shader's light direction under ideal cases, but will handle a lack of direct lighting better.

Technically, this option calculates the light direction as the sum of the World-space light position and the first order R, G, and B spherical harmonic components.

#### Forced Local Direction

Forced Local Direction forces the light direction to a specific vector. This vector is kept constant relative to the model's coordinate system. 

This option adds the **Forced Direction** option. 

#### Forced World Direction

Forced World Direction forces the light direction to a specific vector. This vector is kept constant relative to the world coordinate system. 

This option adds the **Forced Direction** option. 

#### UTS2 (Light Direction)

UTS2 calculates the light direction the same as the Unity Standard Shader, but will use the view direction to "fake" a light direction, which results in better handling of a lack of direct lighting.

#### OpenLit (lilToon)

Uses the light direction mode unique to lilToon.

### Forced Direction

- `Type`: **Vector3**

What direction to force the lighting to.

:::info
This option is only visible when **Light Direction Mode** is set to `Forced Local Direction` or `Forced World Direction`.
:::

### Force Light Color

- `Type`: **Toggle**

Whether to force the light color to a specific color. Enabling this option adds the **Forced Color** option.

#### Forced Color

- `Type`: **Color**

What color the light should be forced to.

:::info
This option is only visible when **Force Light Color** is enabled.
:::

### Unlit Intensity

- `Type`: **Float**, Range: `0.001-4`

How much the model should be lit, even in the absence of direct lighting.

:::info
This option is only visible when **Light Color Mode** is set to `UTS2`.
:::

### Limit Brightness

- `Type`: **Toggle**

Whether to cap the brightness value to a specific maximum. Enabling this option adds the **Max Brightness** option.

### Max Brightness

- `Type`: **Float**, Range: `0.0 - 10.0`

If **Limit Brightness** is enabled, the brightness due to base pass lighting calculations will never go above this value. Add pass lighting or emission can cause the final color to exceed this value.

:::info
This option is only visible when **Limit Brightness** is enabled.
:::

### Min Brightness

- `Type`: **Float**, Range: `0.0 - 1.0`

Sets the minimum value for direct lighting. This can be useful for preventing a model from getting too dark in adverse lighting conditions.

### Indirect Uses Normals

- `Type`: **Float**, Range: `0.0 - 1.0`

Defines how much to use normals when calculating indirect lighting direction. If not enabled, the indirect lighting will be sampled using the 0-vector. 

:::info
This option is only visible when **Light Color Mode** is set to `Poi Custom`.
:::

### Receieve Casted Shadows

- `Type`: **Float**, Range: `0.0 - 1.0`

Defines how much to apply Unity's built-in casted shadows to the model. These can look good under certain conditions, but often will look blocky or otherwise produce undesirable results.

### Grayscale Lighting

- `Type`: **Float**, Range: `0.0 - 1.0`

Defines how much to desaturate the base pass lighting color. This keeps the perceptual luminance the same, but reduces the saturation.

### Vertex Lights (Non-Important)

- `Type`: **Toggle**

Enables Vertex Lights to be used. Vertex lighting allows realtime lights set to non-important to perform their lighting calculations on a per-vertex basis instead of a per-pixel basis. This results in these lights being much lighter to process at runtime.

### Mirror Vertex Lights (Non-Important)

- `Type`: **Toggle**

Enables Vertex Lights to be used in Mirrors. Because VRChat interprets vertex lighting a little bit differently when looked at through a Mirror, this option enables correct handling of those vertex lights in the mirror.

### Light Volumes

- `Type`: **Toggle**
  - Default: `true`

Enables support for [VRC Light Volumes <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://github.com/REDSIM/VRCLightVolumes), a voxel-based Light Probes replacement used in some VRChat Worlds. It allows for more natural lighting and balanced illumination to appear on your Material from an environment using VRC Light Volumes.

The results of this setting can be easily noticeable in Worlds that use it. For more information on this system as well as a list of Worlds to test this effect in, view the [GitHub Repository <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://github.com/REDSIM/VRCLightVolumes).

## Add Pass (Point & Spot Lights)

Options relating to lighting performed in the Add Pass. The Add Pass is used for any Realtime Lights beyond the first in a scene. This includes Realtime Point, Spot, and Directional Lights.

:::tip Recommended Graphics Setting
In order to see Pixel Lights accurately render on this Material in-game, it is recommended to change your VRChat **Graphics Settings** in-game to `Pixel Light Count: High`.
:::

### Pixel Lights (Important)

- `Type`: **Toggle**

Enables or disables Add Pass lighting in general.

### Ignore Directional Lights

- `Type`: **Toggle**

Ignores Directional Lights in the Add Pass.

This is enabled by default in order to counteract bad lighting setups in some VRChat Worlds that have way too many Directional Lights.

If the World contains only one Directional Light, it is treated as the "Sun" and is unaffected by this setting. This only ignores additional Directional Lights in the World, if there are any.

:::info
This option is only shown if **Pixel Lights (Important)** is enabled.
:::

### Limit Brightness

- `Type`: **Toggle**

Whether to limit the brightness of add pass lights. Enabling this adds the **Max Brightness** option.

### Max Brightness

- `Type`: **Float**, Range: `0.0 - 10.0`

Defines the maximum allowed brightness resulting from the add pass.

:::info
This option is only shown if **Limit Brightness** is enabled.
:::

### Receieve Casted Shadows (Add Pass)

- `Type`: **Float**, Range: `0.0 - 1.0`

Defines how much to apply Unity's built-in casted shadows to the model. These can look good under certain conditions, but often will look blocky or otherwise produce undesirable results.

### Grayscale Lighting

- `Type`: **Float**, Range: `0.0 - 1.0`

Defines how much to desaturate the add pass lighting color. This keeps the perceptual luminance the same, but reduces the saturation.

### Point Light Passthrough

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to apply realtime point lighting to the indirect color.

## Debug Visualization

Debug visualization provides visualizations of the results of lighting data settings and calculations. 

### Debug

- `Type`: **Toggle**

Enable or Disable debug view.

:::danger DO NOT LEAVE THIS ON!
This section is only meant to visualize and debug your Light Data settings. Make sure to turn it off prior to finalizing your Material!
:::

#### Direct Color

Shows the Direct Color across the model.

#### Indirect Color

Shows the Indirect Color across the model.

#### Light Map

Shows the Light Map across the model.

#### Attenuation

Shows the Attenuation (Unity Shadows) across the model.

#### N Dot L

Shows the N Dot L result (Normal dot Light) across the model.

#### Half Dir

Shows the Half Dir (normalized sum of light direction and view direction) across the model.

#### Direction

Shows the Light Direction across the model.

#### Add Color

Shows the color resulting from any Add Pass lights across the model.

#### Add Attenuation

Shows the attenuation from any Add Pass lights across the model.

#### Add Shadow

Shows the shadow map from any Add Pass lighting across the model.

#### Add NDotL

Shows the N Dot L result (Normal dot Light) from any Add Pass lighting across the model.

## Baked Lighting

Controls for the lighting behavior when used in a Scene with Global Illumination or Baked Lightmaps.

:::caution World SDK users only!
This section is only exposed when using the `.poiyomi/Poiyomi Toon World` Shader. If you are building a World with Poiyomi Materials, using `Poiyomi World` is required in order to include it with your Global Illumination.
:::

### GI Emission Multiplier

- `Type`: **Float**

Sets the Global Illumination Multiplier for the Emission's influence on your baked meshes.

### Double Sided Global Illumination

- `Type`: **Toggle**

If enabled, allows the Global Illumination to be baked on both faces.

### Global Illumination

- `Type`: **Dropdown**, Options: `None`/`Baked`/`Realtime`

Sets the behavior of how your Material is treated in your environment.

- `None`: Nothing in your environment will be influenced by the Emissions.
- `Baked`: Any meshes nearby will be influenced by the Emissions.
- `Realtime`: Any meshes nearby will be influenced by the Emissions in real time.