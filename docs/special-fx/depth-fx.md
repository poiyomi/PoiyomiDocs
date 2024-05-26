---
sidebar_position: 8
title: Depth FX
---
import PoiVideo from '@site/src/components/PoiVideo'

Depth FX creates screen-space depth effects based on other meshes interacting with the material. The depth effect is based on the distance between one object and another.

This effect relies on the [Depth Buffer/Depth Texture](https://docs.unity3d.com/Manual/SL-CameraDepthTexture.html) being active in the scene. Since this has some computational overhead, it's not always active. Some worlds will not have this enabled, and some will have it disabled.

To forcibly enable the depth buffer from an avatar, a reliable method is to add a realtime directional light to the scene, which will trigger the depth texture to be updated. A prefab called `DepthGet` is included in the Poiyomi Shaders package.

:::warning
Make sure to only enable the depth buffer when you need it! This can be a performance hit, and it's not always necessary.
:::

### Mask

- `Type`: **Data** Texture (sRGB **OFF**)

Mask that defines where and where not to apply the depth effect. Black will not apply the depth effect, and white will apply it fully.

## Color & Emission

- `Type`: **Checkbox**

Enables or disables changing the color and emission of the material based on depth.

### Blend Type

- `Type`: **Dropdown**, Options: `Replace`/`Multiply`/`Add`

How to blend the color overlay with the material's base color.

- `Replace` will directly replace the material's base color.
- `Multiply` will multiply the material's base color with the color overlay.
- `Add` will add the color overlay to the material's base color.

### Depth Texture

- `Type`: **Color** Texture (sRGB **ON**)

Gradient texture used as color overlay for the depth effect. Generally a gradient texture is used to create a gradient of colors that changes based on the depth, when combined with the `Depth Gradient` UV.

#### UV

In the depth texture options, there's a special UV selection, `Depth Gradient`, that maps the depth texture to the depth directly. This is useful for applying gradients based on depth.

### Color

- `Type`: **Color**

Color to be used for the depth effect. This is blended with the material's base color according to the `Blend Type` option. If Depth Texture is defined, this color will be multiplied with the Depth Texture. If not, this color will be used directly.

### Emission Strength

- `Type`: **Float**, Range: `0.0 - 20.0`

How much emission to apply from the depth effect's overlay color.

### Min Depth

- `Type`: **Float**

Minimum distance used for the depth effect, in Unity units. Min Color Blend will be used when the object is closer than this distance.

### Max Depth

- `Type`: **Float**

Maximum distance used for the depth effect, in Unity units. Max Color Blend will be used when the object is farther than this distance.

### Min Color Blend

- `Type`: **Float**, Range: `0.0 - 1.0`

Color blend amount to use when the object is at or closer than the Min Depth. Blended to the Max Color Blend as the object moves between the Min and Max Depth.

### Max Color Blend

- `Type`: **Float**, Range: `0.0 - 1.0`

Color blend amount to use when the object is at or farther than the Max Depth. Blended to the Min Color Blend as the object moves between the Max and Min Depth.

## Alpha

- `Type`: **Checkbox**

Enables or disables changing the alpha of the material based on depth. This allows "cutting out" or "fading out" as objects intersect.

To use this, the material must be set to a render preset that supports transparency. Cutout allows binary on/off transparency, while Transparent/Fade/TransClipping offer variable transparency, with the caveat of stacking issues.

### Min Depth

- `Type`: **Float**

### Min Depth

- `Type`: **Float**

Minimum distance used for the depth effect, in Unity units. Min Alpha will be used when the object is closer than this distance.

### Max Depth

- `Type`: **Float**

Maximum distance used for the depth effect, in Unity units. Max Alpha will be used when the object is farther than this distance.

### Min Alpha

- `Type`: **Float**, Range: `0.0 - 1.0`

Alpha to use when the object is at or closer than the Min Depth. Blended to the Max Alpha as the object moves between the Min and Max Depth.

### Max Alpha

- `Type`: **Float**, Range: `0.0 - 1.0`

Alpha to use when the object is at or farther than the Max Depth. Blended to the Min Alpha as the object moves between the Max and Min Depth.
