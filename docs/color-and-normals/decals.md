---
sidebar_position: 9
title: Decals
---
import PoiVideo from '@site/src/components/PoiVideo'

Decals are used to place images onto a uv with specific location, rotation, and blending. 4 independent decal sections are available, with extensive base and audio link options.

They can be used to add high resolution designs and details onto a mesh without the base texture having to be higher resolution, or to replace base textures entirely.

## Decal RGBA Mask

- `Type`: **Data** Texture (sRGB **OFF**)

A mask texture that defines where to place different decals. Each decal section can define which channel of the mask to sample from.

This texture defaults to pure white, so no masking will be applied with no texture defined.

## Decal Options

Each of the 4 decal sections (0, 1, 2, 3) have the following options. They are independent of each other, and colors are blended in order of id, according to their blend operation. Decal emissions are always added with one another when overlapping.

### Mask Channel

- `Type`: **Dropdown**, Options: `R`/`G`/`B`/`A`

Which channel of the Decal RGBA mask to use for masking.

### Color

- `Type`: **Color**

Base color for the decal texture. This is blended multiplicatively with the Decal.

### Emission Strength

- `Type`: **Float**, Range: `0.0 - 20.0`

How much emission to apply from the decal's base color.

### Decal

- `Type`: **Color** Texture (sRGB **ON**)

The texture used for the decal. The alpha channel is used to define where the decal should be blended.

### Tiled?

- `Type`: **Checkbox**

Whether or not the decal texture should be tiled. By default, decals are not tiled.

### Depth

- `Type`: **Float**

How much parallax depth the decal should have. This can be used for layered parallax posters, or other unique designs.

### Scale

- `Type`: **Vector2**

Scale of the decal, in UV space. `1.0, 1.0` would map the decal to the entire UV square.

### Side Offset

- `Type`: **Vector4**

How much scale offset to define on each side of the decal.

### Position

- `Type`: **Vector2**

Where on the UV the decal's center should be.

### Rotation

- `Type`: **Float**, Range: `0.0 - 360.0`

How much rotation to apply to the decal, around its center position.

### Rotation Speed

- `Type`: **Float**

A constant roatation speed applied to the decal. A value of `180` will rotate the decal once per second.

### Blending

- `Type`: **Dropdown**

Which blending operation to use for the decal's base color.

These are the same blending operations used in Adobe Photoshop.

### Alpha

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to apply the blended color to the base color.

This option can be used to hide and show a decal by animating its value.

### Override Alpha

- `Type`: **Checkbox**

If enabled, the decal's alpha will be multiplied with the base alpha (and any others that have Override Alpha enabled).

### Hue Shift Enabled

- `Type`: **Checkbox**

Enable or Disable hue shifting of the decal.

### Hue Shift Speed

- `Type`: **Float**

How much to constantly shift the decal hue with time. A value of 1 will result in a full hue shift cycle every 20 seconds.

### Hue Shift

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to shift the base color around the hue circle.

This value is circular, and will have the same result at `0` and `1`.

### Hue Angle Power

- `Type`: **Float**

How much to shift the hue with surface angle. A value of `1` will give maximum hue shift when looking straight-on, and no hue shift cycle when looking side-on. The opposite effect can be achieved with negative values. Higher or lower values will produce more or less hue shift as the surface angle changes, creating the kind of effect seen on some holographic trading cards and iridescent materials.

## Audio Link

These options are only available if the material has Audio Link enabled.

### Scale

#### Scale Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band of the audio to use for the Audio Link Scale Mod.

#### Scale Mod

How much to modify (mod) the scale of the decal. These values are added to the current scale, and can be positive or negative.

- `Type`: **Vector4**

| Channel | Function |
| --- | --- |
| X | Amount Added to X Scale with no audio in Scale Band |
| Y | Amount Added to Y Scale with no audio in Scale Band |
| Z | Amount Added to X Scale with max audio in Scale Band |
| W | Amount Added to Y Scale with max audio in Scale Band |

### Side

#### Side Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band to use for the Audio Link Side adjustment.

#### Side Mod Min

- `Type`: **Vector4**

How much to modify (mod) the side adjustment of the decal when there is no audio in the Side Band. These values are added to the current scale, and can be positive or negative.

| Channel | Function |
| --- | --- |
| X | Amount Added to X Left with no audio in Side Band |
| Y | Amount Added to X Right with no audio in Side Band |
| Z | Amount Added to Y Up with no audio in Side Band |
| W | Amount Added to Y Down with no audio in Side Band |

#### Side Mod Max

How much to modify (mod) the side adjustment of the decal when there is maximum audio in the Side Band. These values are added to the current scale, and can be positive or negative.

- `Type`: **Vector4**

| Channel | Function |
| --- | --- |
| X | Amount Added to X Left with max audio in Side Band |
| Y | Amount Added to X Right with max audio in Side Band |
| Z | Amount Added to Y Up with max audio in Side Band |
| W | Amount Added to Y Down with max audio in Side Band |

### Rotation

#### Rotation Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band to use for the Audio Link Rotation adjustment.

#### Rotation Mod

- `Type`: **Vector2**

How much to modify (mod) the rotation of the decal, in degrees.

| Channel | Function |
| --- | --- |
| X | Amount Added to rotation with no audio in Rotation Band |
| Y | Amount Added to rotation with max audio in Rotation Band |

### Alpha

#### Alpha Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band to use for the Audio Link Alpha adjustment.

#### Alpha Mod

- `Type`: **Vector2**

How much to modify (mod) the alpha of the decal, in degrees.

| Channel | Function |
| --- | --- |
| X | Amount Added to alpha with no audio in alpha Band |
| Y | Amount Added to alpha with max audio in alpha Band |

### Emission

#### Emission Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band to use for the Audio Link Emission adjustment.

#### Emission Mod

- `Type`: **Vector2**

How much to modify (mod) the alpha of the decal.

| Channel | Function |
| --- | --- |
| X | Amount Added to Emission with no audio in Emission Band |
| Y | Amount Added to Emission with max audio in Emission Band |

### CC Strip

- `Type`: **Checkbox**

Enables or disables the ColorChord strip. ColorChord strip is a strip of colors that vary based on the audio, producing specific consistent colors for given chords.

### Chrono (Chronotensity) Rotation

#### Chrono Rotation Band

- `Type`: **Dropdown**, Options: `Bass`/`Low Mid`/`High Mid`/`Treble`

Which band to use for the Audio Link Chrono Rotation adjustment.

#### Chrono Motion Type

- `Type`: **Dropdown**, Options:
  - Motion Increases as intensity of the band increases
  - Above but Smooth
  - Motion moves back and forth as a function of intensity
  - Above but Smoooth
  - Fixed Speed Increase when the band is dark Stationary when light
  - Above but Smooooth
  - Fixed Speed Increase when the band is dark Fixed speed decrease when light

Which motion type to use for the Chrono Rotation. Chronotensity is an Audio Link feature that allows time-dependent features, which shaders alone cannot do. In this case, chronotensity is used to create a time-dependent rotation of the decal.

#### Chrono Rotation Speed

- `Type`: **Float**

How much chronotensity should affect the rotation of the decal. Good starting values are `0.1 - 0.5`.
