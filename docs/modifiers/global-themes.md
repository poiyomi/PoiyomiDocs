---
sidebar_position: 2
title: Global Themes
description: Global Themes are a centralized place to change colors throughout the shader.
keywords: [global, themes, theme, global themes, color, colors, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

Global Themes provide a central place to change colors throughout the shader. When configured, you can set any **Color** property in the Material to use a Theme Color as defined by the user.

:::info Changes in 9.0
Global Themes have been extended to include additional properties for ease of use, such as Hue and Saturation adjustment for each Theme Color.

If you are on an older version, we highly recommend you upgrade to 9.0+ to take advantage of these new features.
:::

## Usage in the Shader

To use Global Themes in the Shader, set the Colors you prefer to use in each Theme Color.

Then, set whichever **Color** property you wish to use a Global Theme by selecting the dropdown located next to the **Color** property. The dropdown will look something like this:

<a target="_blank" href="/img/modifiers/GlobalTheme_Selector.png">
<img src="/img/modifiers/GlobalTheme_Selector.png" alt="Global Theme Selection next to Color Property" width="700px"/>
</a>

*Example of the Theme Color dropdown located next to a Color property.*

When set, this will override the Color with whichever Color is configured in the Global Theme.

# Material Properties

The following below are the properties that are available in Global Themes. You can have a maximum of 4 Theme Colors, per Material.

:::tip
You can animate these properties if you wish to have independent control of each Theme Color separately through the Animator.

To learn more about animating properties, see [Marking Properties for Animation](/docs/general/locking.md#marking-properties-for-animation).
:::

## Theme Color 0

### Theme Color 0

- `Type`: **HDR Color**

Color to use for Theme Color 0.

### Hue Adjust

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to shift the Theme Color around the Hue Circle. This value is circular, and will have the same result at 0 and 1.

This functions in the same fashion as Color Adjust's [Hue Shift](/docs/color-and-normals/color-adjust.md#hue-shift-1) slider.

### Hue Adjust Speed

- `Type`: **Float**

How much to constantly shift the Theme Color Hue with time. A value of 1 will result in a full hue shift cycle every 20 seconds.

### Saturation Adjust

- `Type`: **Float**, Range: `-1.0 - 1.0`

Adjusts the Saturation of the Theme Color.

A value of -1 will make the Theme Color fully de-saturate (grayscale). A value of 0 will not alter the color at all. A value greater than 0 will increase the saturation of the Theme Color.

### Value Adjust

- `Type`: **Float**, Range: `-1.0 - 1.0`

Adjusts the brightness value of the Theme Color on top, without regard for it's Hue or Tone.

## Theme Color 1

### Theme Color 1

- `Type`: **HDR Color**

Color to use for Theme Color 1.

### Hue Adjust

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to shift the Theme Color around the Hue Circle. This value is circular, and will have the same result at 0 and 1.

This functions in the same fashion as Color Adjust's [Hue Shift](/docs/color-and-normals/color-adjust.md#hue-shift-1) slider.

### Hue Adjust Speed

- `Type`: **Float**

How much to constantly shift the Theme Color Hue with time. A value of 1 will result in a full hue shift cycle every 20 seconds.

### Saturation Adjust

- `Type`: **Float**, Range: `-1.0 - 1.0`

Adjusts the Saturation of the Theme Color.

A value of -1 will make the Theme Color fully de-saturate (grayscale). A value of 0 will not alter the color at all. A value greater than 0 will increase the saturation of the Theme Color.

### Value Adjust

- `Type`: **Float**, Range: `-1.0 - 1.0`

Adjusts the brightness value of the Theme Color on top, without regard for it's Hue or Tone.

## Theme Color 2

### Theme Color 2

- `Type`: **HDR Color**

Color to use for Theme Color 2.

### Hue Adjust

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to shift the Theme Color around the Hue Circle. This value is circular, and will have the same result at 0 and 1.

This functions in the same fashion as Color Adjust's [Hue Shift](/docs/color-and-normals/color-adjust.md#hue-shift-1) slider.

### Hue Adjust Speed

- `Type`: **Float**

How much to constantly shift the Theme Color Hue with time. A value of 1 will result in a full hue shift cycle every 20 seconds.

### Saturation Adjust

- `Type`: **Float**, Range: `-1.0 - 1.0`

Adjusts the Saturation of the Theme Color.

A value of -1 will make the Theme Color fully de-saturate (grayscale). A value of 0 will not alter the color at all. A value greater than 0 will increase the saturation of the Theme Color.

### Value Adjust

- `Type`: **Float**, Range: `-1.0 - 1.0`

Adjusts the brightness value of the Theme Color on top, without regard for it's Hue or Tone.

## Theme Color 3

### Theme Color 3

- `Type`: **HDR Color**

Color to use for Theme Color 3.

### Hue Adjust

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to shift the Theme Color around the Hue Circle. This value is circular, and will have the same result at 0 and 1.

This functions in the same fashion as Color Adjust's [Hue Shift](/docs/color-and-normals/color-adjust.md#hue-shift-1) slider.

### Hue Adjust Speed

- `Type`: **Float**

How much to constantly shift the Theme Color Hue with time. A value of 1 will result in a full hue shift cycle every 20 seconds.

### Saturation Adjust

- `Type`: **Float**, Range: `-1.0 - 1.0`

Adjusts the Saturation of the Theme Color.

A value of -1 will make the Theme Color fully de-saturate (grayscale). A value of 0 will not alter the color at all. A value greater than 0 will increase the saturation of the Theme Color.

### Value Adjust

- `Type`: **Float**, Range: `-1.0 - 1.0`

Adjusts the brightness value of the Theme Color on top, without regard for it's Hue or Tone.