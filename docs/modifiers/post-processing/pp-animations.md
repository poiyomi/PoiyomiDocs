---
sidebar_position: 1
title: PP Animations
description: Post Processing Animations are a set of fields that can be used to modify the brightness of the Shader, adapting to the user's environment.
keywords: [pp, animations, post, processing, postprocessing, lighting, brightness, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

PP (Post Processing) Animations are a set of fields that can be used to modify the brightness of the shader. These are primarily intended to be used with Avatars 3.0 by animating them at runtime to adapt to the user's environment.

## Lighting Multiplier

- `Type`: **Float**

How much to multiply the lighting input value by. This can be used to subtly brighten the brightness, especially in too-bright or too-dark areas.

## Lighting Add

- `Type`: **Float**

Adds to (or subtracts from) the lighting input value. This can be used to forcibly add lighting to the scene, but is generally harsher than the Lighting Multiplier adjustment.

## Emission Multiplier

- `Type`: **Float**

How much the emission value of the shader is multiplied by. This takes into account emission values from all sections, and is a good way to globally toggle emissions, or adjust the overall emission brightness.

## Final Color Multiplier

- `Type`: **Float**

How much to multiply the final color value of the shader. This simply scales the final color - it's effectively a global brightness adjustment.
