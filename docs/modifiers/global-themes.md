---
sidebar_position: 2
title: Global Themes
description: Global Themes are a centralized place to change colors throughout the shader.
keywords: [global, themes, theme, global themes, color, colors, poiyomi, shader]
---

Global Themes provide a central place to change colors throughout the shader. When configured, you can set any **Color** property in the Material to instead use your defined Theme Color.

## Usage in the Shader

To use Global Themes in the Shader, set the Colors you prefer to use in each Theme Color.

Then, set whichever **Color** property you wish to use a Global Theme by selecting the dropdown located next to the **Color** property. The dropdown will look something like this:

<a target="_blank" href="/img/modifiers/GlobalTheme_Selector.png">
<img src="/img/modifiers/GlobalTheme_Selector.png" alt="Global Theme Selection next to Color Property" width="700px"/>
</a>

*Example of the Theme Color dropdown located next to a Color property.*

When set, this will override the Color with whichever Color is configured in the selected Global Theme.

# Material Properties

The following below are the properties that are available in Global Themes. You can have a maximum of 4 Theme Colors, per Material.

:::info Documentation Info
Each of the 4 Global Themes (0, 1, 2, 3) have the following unique options listed below. They are independent of each other, and are selected across the shader based on the identifying Theme Color slot.
:::

## Theme Color

### Theme Color

- `Type`: <PropertyIcon name="hdrcolor" />**HDR Color**

Color to use for Theme Color.

### Hue Adjust

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

How much to shift the Theme Color around the Hue Circle. This value is circular, and will have the same result at 0 and 1.

This functions in the same fashion as Color Adjust's [Hue Shift](/docs/color-and-normals/color-adjust.md#hue-shift-1) slider.

### Hue Adjust Speed

- `Type`: <PropertyIcon name="float" />**Float**

How much to constantly shift the Theme Color Hue with time. A value of 1 will result in a full hue shift cycle every 20 seconds.

### Saturation Adjust

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `-1.0 - 1.0`

Adjusts the Saturation of the Theme Color.

A value of -1 will make the Theme Color fully de-saturate (grayscale). A value of 0 will not alter the color at all. A value greater than 0 will increase the saturation of the Theme Color.

### Value Adjust

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `-1.0 - 1.0`

Adjusts the brightness value of the Theme Color on top, without regard for it's Hue or Tone.
