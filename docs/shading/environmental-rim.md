---
sidebar_position: 11
title: Environmental Rim
description: Environmental Rim simulates low-angle reflections from the surrounding environment, drawing from the scene's reflection probes.
keywords: [environment, environmental, rim, environmental rim, lighting, shading, reflection, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

Environmental Rim is a rim lighting effect that simulates low-angle reflections from the surrounding environment. It draws from the scene's reflection probes, and can be used to add a realistic edge lighting that reacts dynamically to the environment.

This effect is similar to the rim glow seen in the realistic lighting mode and the Unity Standard Shader, especially at high Smoothness values.

<PoiVideo url='/vid/shading/EnvironmentalRim.mp4'/>

*Quick demonstration of Environmental Rim. Notice how with reduced Blur, it slightly shows a reflection from the World.*

## Mask

- `Type`: **Data** Texture (sRGB **OFF**)

A mask texture used to define where to apply the Environmental Rim effect. This is drawn from the red channel of the mask texture.

## Blur

- `Type`: **Float**, Range: `0.0 - 1.0`

How much to blur the rim reflection. This uses the lower mipmaps of the reflection probe cubemap to blur the reflection, simulating a less smooth material.

## Rim Width

- `Type`: **Float**, Range: `0.0 - 1.0`

How wide the rim should be. This determines how far toward the center the rim extends.

## Rim Sharpness

- `Type`: **Float**, Range: `0.0 - 1.0`

How sharp the edge of the rim should be. A lower Rim Sharpness value creates a softer rim.

## Min Brightness Threshold

- `Type`: **Float**, Range: `0.0 - 1.0`

The minimum brightness that should be applied to the rim. This can be used to only add lighting where there's a bright object or area in the reflection probe, instead of reflecting the whole environment. 

## Intensity

- `Type`: **Float**, Range: `0.0 - 1.0`

How strongly the rim color should be applied. This can be used to create a less intense environmental rim effect.
