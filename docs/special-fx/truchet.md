---
sidebar_position: 15
title: Truchet
description: Truchet creates a pattern of non-rotationally symmetric tiles consisting of a quarter-circle pattern.
keywords: [truchet, smith tiles, special effect, special fx]
---
import PoiVideo from '@site/src/components/PoiVideo'

# Truchet <span class="badge badge--primary">Pro</span>

Truchet is a feature that generates a pattern of non-rotationally symmetric tiles consisting of multiple two-diametrically opposed quarter-circle (Smith) tiles.

[Read More about Truchet Tiles on this external page <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://questionsindataviz.com/2021/03/03/what-are-truchet-tiles/)

:::info Pro Only
**This Feature is only available in Poiyomi Pro!** Subscribe to the [Patreon](https://www.patreon.com/poiyomi) at the $10 tier or higher to access it.
:::

## UV

- `Type`: **Dropdown**, Options: `UV0`/`UV1`/`UV2`/`UV3`/`Panosphere`/`World Pos`/`Local Pos`/`Polar UV`/`Distorted UV`

Choice of UV to project the Truchet effect on.

## Blending

- `Type`: **Dropdown**, Options: `Replace`/`Darken`/`Multiply`/`Lighten`/`Screen`/`Subtract`/`Add`/`Overlay`/`Mixed`

Which blending operation to use for the Decal's base color.

These are the same blending operations used in Adobe Photoshop.

## Pan & Offset

- `Type`: **Float4**

Configures the amount of Panning to run on the Truchet. This can also configure the offset of each Truchet tile.

| Modifier | Function |
| --- | --- |
| PanX | How much to pan the Truchet on the X-axis. |
| PanY | How much to pan the Truchet on the Y-axis. |
| OffX | How much to offset each tile on the X-axis. |
| OffY | How much to offset each tile on the Y-axis. |

## Density

- `Type`: **Float**

Configures the density of how many Truchet tiles should appear in the tile.

## Color

- `Type`: **Color**

Configures the Color of the Truchet.

## Truchet Texture

- `Type`: **Color** Texture (`sRGB = On`)

Which texture to use for the Truchet pattern.

## Truchet Mask

- `Type`: **Data** Texture (`sRGB = On`)

Mask to use to clamp the Truchet effect to only a specific area on the UV.

## Emission Strength

- `Type`: **Float**, Range: `0.0 - 20.0`

How much Emission to apply to the Truchet Color. Higher values will yield a bloom-like effect in certain Worlds.

## Thiccness

- `Type`: **Float**, Range: `0.0 - 0.5`

Determines how thick each quarter-circle should be drawn.

## Edge Sharpness

- `Type`: **Float**, Range: `0.0 - 1.0`

Determines how sharp the edge of each quarter-circle. This can be used to create either a sharp edge or a more softer and smooth edge.

## Alpha

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to apply the Truchet to the Base Color.

:::tip
This slider can be used to control the main appearance of the Truchet.
:::

## Override Alpha

- `Type`: **Boolean**

If enabled, will override the Alpha/Transparency from the Base, if Transparency exists.

## AudioLink

:::info
The settings in this section will only be visible when [AudioLink](/docs/audio-link/audio-link.md) is activated on the Material.
:::

### Hide When No AL

- `Type`: **Boolean**

If enabled, the Truchet will be completely hidden when there's NO AudioLink whatsoever.

### AL Emission

- `TYpe`: **Boolean**

Enables the ability to control the Truchet Emission using AudioLink.

#### Emission Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band to use for the Audio Link Emission adjustment.

#### Emission Mod

- `Type`: **Vector2**

How much to modify the Emission of the Truchet.

| Channel | Function |
| --- | --- |
| X | Amount Added to Emission with no audio in Emission Band |
| Y | Amount Added to Emission with max audio in Emission Band |

### AL Alpha

- `TYpe`: **Boolean**

Enables the ability to control the Truchet Alpha using AudioLink.

#### Alpha Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band to use for the Audio Link Alpha adjustment.

#### Alpha Multiply

- `Type`: **Vector2**

How much to multiply the Alpha of the Truchet.

| Channel | Function |
| --- | --- |
| X | Amount Multiplied to Alpha with no audio in Alpha Band |
| Y | Amount Multiplied to Alpha with max audio in Alpha Band |

### Chrono Pan

- `Type`: **Boolean**

Enables the ability to use Chronotensity timing on the Truchet.

#### Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band to use for the Audio Link Chrono Rotation adjustment.

#### Chrono Motion Type

- `Type`: **Dropdown**

Which motion type to use for the Chrono Pan. Chronotensity is an Audio Link feature that allows time-dependent features, which shaders alone cannot do. In this case, chronotensity is used to create a time-dependent rotation of the Truchet.

<details>
<summary><b>Chrono Motion Type Options</b></summary>

- Motion Increases as intensity of the band increases
- Above but Smooth
- Motion moves back and forth as a function of intensity
- Above but Smoooth
- Fixed Speed Increase when the band is dark Stationary when light
- Above but Smooooth
- Fixed Speed Increase when the band is dark Fixed speed decrease when light

</details>

#### Pan Speed

- `Type`: **Float2**

Amount to pan the Truchet with AudioLink.

| Modifier | Function |
| --- | --- |
| X | How much to pan the Truchet on the X-axis with AudioLink. |
| X | How much to pan the Truchet on the Y-axis with AudioLink. |