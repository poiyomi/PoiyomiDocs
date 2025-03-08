---
sidebar_position: 13
title: Video Effects
description: Simulates a display panel on the Material, like an LCD or an OLED panel.
keywords: [video effects, video fx, video, lcd, oled, display, special fx, effect, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

The Video Effects feature simulates a specified display panel of your choice, such as LCD or OLED screens by adding sub-pixels and other effects on top, depending on which type is chosen.

It is primarily driven by a Pixel Texture, which determines the density of each diode on the screen.

## Screen Type

- `Type`: **Dropdown**, Options: `LCD`/`TN`/`CRT`/`OLED`/`Gameboy`/`Projector`

Chooses the type of digital display you wish to emulate. These options may expose extra settings depending on which Screen Type is selected.

<details>
<summary><b>Screen Type Options</b></summary>

### LCD

Simulates a Liquid-Crystal Display (LCD), a flat optical device that uses the light-modulating properties of liquid crystals and polarizers to display information. The light is emitted by using a backlight or reflector in order to produce images in color or monochrome.

For reference, LCDs are commonly used on devices such as Smartphones, Flat-Screen TVs, Gaming Monitors, Calculators, and Digital Watches.

### TN

Simulates a Twisted Nemanic (TN) display, characterized as being fast and cheaper among the other main types of display panels. The downside of a TN display is that is has bad viewing angles, meaning portions of the picture can fade away when looking at it from an angle. It can also produce weaker color accuracy.

### CRT

Simulates a Cathode-Ray Tube (CRT) display, which is a vacuum tube containing one or more electrons that emit beams to display images on a phosphorescent screen. CRT Television screens are well known to have a "flickering" effect when viewed from the naked eye, as they construct the image using the interlacing method.

### OLED

Simulates an Organic Light-Emitting Diode (OLED) display, which are emissive electroluminescent layers of organic compound film that emits light in response to an electric current. They are situated between electrodes, typically with at least one being transparent. OLED displays are known to produce rich blacks and bright colors, and are typically very lightweight.

### Gameboy

Simulates the display similar to a Nintendo Game Boy, a handheld game console developed by Nintendo.

This will simulate a Super-Twisted Nemanic (STN) LCD display, which uses liquid crystals combined with the Twisted Nemanic (TN) field effect to produce images.

### Projector

Simulates the display of how a Project casts light to create images on a flat surface.

</details>

## Brightness

- `Type`: **Float**, Range: `0.0 - 100.0`

Controls the total brightness of the display.

## Emission Enabled

- `Type`: **Boolean**

If enabled, will pass the brightness to the Emissive pass.

## Pixel Texture

- `Type`: **Color** Texture (`sRGB = On`)

Reference Texture to use in order to display the RGB diode grid. This will be tiled depending on the Resolution set.

## Mask

- `Type`: **Data** Texture (`sRGB = Off`)

Determines where the effects should only display itself on, as determined by the Mask.

## Video Texture Settings

### Resolution

- `Type`: **Vector2**

Determines the pixel density of the Video Texture effect in order to replicate a specific display resolution.

| Modifier | Function |
| --- | --- |
| X | Amount of Pixels on the X-axis of the 2D Texture Space. |
| Y | Amount of Pixels on the Y-axis of the 2D Texture Space. |

### Pixelate to Resolution

- `Type`: **Boolean**

If enabled, will pixelate the display to the Resolution depending on viewing distance.

### Saturation

- `Type`: **Float**, Range: `-1.0 - 3.0`

How much to add or subtract saturation from the color of the image.

### Contrast Boost

- `Type`: **Float**, Range: `0.0 - 3.0`

How much to boost the contrast of the image.

## CRT Options

:::info
This section is only exposed when [Screen Type](#screen-type) is set to `CRT`.
:::

### Refresh Rate

- `Type`: **Float**

The amount of times to refresh the screen. This can determine the flickering intensity.

### Pixel Fade Time

- `Type`: **Float**

How much time it takes to fade the pixels each refresh.

## Gameboy Options

:::info
This section is only exposed when [Screen Type](#screen-type) is set to `Gameboy`.
:::

### Color Ramp

- `Type`: **Color** Texture (`sRGB = On`)

Determines which Color Ramp to use for the display emulation.