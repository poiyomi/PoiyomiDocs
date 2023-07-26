---
sidebar_position: 1
title: Geometric Dissolve
---
import PoiVideo from '@site/src/components/PoiVideo'

Description

:::tip
**This is a patreon-only feature!** Subscribe to the [Patreon](https://www.patreon.com/poiyomi) at the $10 tier or higher to unlock it.
:::

# Shape Type

- `Type`: **Dropdown**, Options: `Pyramid (slower)`/`Triangle (fast)`

## Pyramid (slower)

Default mode. Triangles actively being 'dissolved' will have additional geometry generated in order to give depth and volume to the effect.

## Triangle (faster)

Triangles actively being 'dissolved' will remain simple triangles and have no additional geometry generated.

# Gradient Type

- `Type`: **Dropdown**, Options: `Texture`/`Point 2 Point`/`Noise`

Determines how the intensity of the effect will be driven.

## Texture

### UV

- `Type`: **Dropdown**, Options: `UV0`/`UV1`/`UV2`/`UV3`/`World Pos`/`Local Pos`

Which UV the Geometric Dissolve effect will be projected onto.

### Gradient

- `Type`: **Data** Texture (sRGB **OFF**)

Description

### Mask

- `Type`: **Data** Texture (sRGB **OFF**)

Description

### Dissolve Alpha

- `Type`: **Float**, Range: `-1.0 - 1.0`

Description

### Expansion Time

- `Type`: **Float**, Range: `0.001 - 1.0`

Description

## Point 2 Point

Description

### Mask

- `Type`: **Data** Texture (sRGB **OFF**)

Description

### Dissolve Alpha

- `Type`: **Float**, Range: `-1.0 - 1.0`

Description

### Expansion Time

- `Type`: **Float**, Range: `0.001 - 1.0`

Description

### Vertex Color Position

- `Type`: **Checkbox**

Description

### Start Point

- `Type`: **Vector** (3)

Description

### End Point

- `Type`: **Vector** (3)

Description

### Visualize

- `Type`: **Checkbox**

Description

## Noise

Description

### UV

- `Type`: **Dropdown**, Options: `UV0`/`UV1`/`UV2`/`UV3`/`World Pos`/`Local Pos`

Which UV the Geometric Dissolve effect will be projected onto.

### Mask

- `Type`: **Data** Texture (sRGB **OFF**)

Description

### Dissolve Alpha

- `Type`: **Float**, Range: `-1.0 - 1.0`

Description

### Noise Threshold

- `Type`: **Float**, Range: `0.0 - 1.0`

Description

### Expansion Time

- `Type`: **Float**, Range: `0.001 - 1.0`

Description

### Noise Density

- `Type`: **Float** (2)

Density of the noise used to drive dissolve intensity. Smaller values appear smoother, larger values provide more detail.

### Noise Speed

- `Type`: **Float**

Determines how quickly the noise algorithm progresses through time. Larger values are faster.

## Motion & Size

### Travel Distance

-`Type`: **Float**

Determines the maximum distance a triangle being 'dissolved' may travel.

### Scale Range

#### MinS

-`Type`: **Float**

Description

#### MaxS

-`Type`: **Float**

Description

#### MinR

-`Type`: **Float**

Description

#### MaxR

-`Type`: **Float**

Description

### Height Range

#### MinH

-`Type`: **Float**

Description

#### MaxH

-`Type`: **Float**

Description

#### MinR

-`Type`: **Float**

Description

#### MaxR

-`Type`: **Float**

Description

### Min Rotation

- `Type`: **Float** (3)

Description

### Max Rotation

- `Type`: **Float** (3)

Description

## Color & Emission

### Color Tex

- `Type`: **Color** Texture (sRGB **ON**)

Description

### Blending

- `Type`: **Dropdown**, Options: `Replace`/`Multiply`/`Screen`/`Linear Dodge(Add)`/`Overlay`/`Mixed`

Color blending mode

### Color

- `Type`: **Color** (RGBA)

Color to blend

### Color Range

- `Type`: **Float** (2)

'Min' determines at what dissolve strength the material's base color will be fully shown.  
'Max' determines at what dissolve strength the texture/color specified in this section will be fully shown.  
Values between 'Min' and 'Max' will fade smoothly. 'Min' may be larger than 'Max'.

### Emission Range

- `Type`: **Float** (2)

'Min' determines at what dissolve strength this section will stop producing emissions.  
'Max' determines at what dissolve strength this section will produce the specified emission amount.  
Values between 'Min' and 'Max' will fade smoothly. 'Min' may be larger than 'Max'.

## Wireframe

### Wireframe

- `Type`: **Checkbox**

Enables Wireframe

### Thickness

- `Type`: **Float**, Range: `0.0 - 1.0`

Description

### Time Offset

- `Type`: **Float**

Description

### Extend Base Color

- `Type`: **Checkbox**

Description

### Wireframe Only

- `Type`: **Checkbox**