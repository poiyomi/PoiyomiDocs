---
sidebar_position: 3
title: GT7 Tone Mapping
description: Enables Gran Turismo 7's tone mapping to the Material.
keywords: [post, processing, postprocessing, advanced, look, gt7, gran turismo 7, gt7 tonemap, tone map, poiyomi, shader]
draft: true
---

This section enables usage of **Gran Turismo 7** tone mapping in the Material, which acts as a perceptual bridge between the colors in the real world and what a computer display can show.

The key distinction between the camera and the human eye is the camera's linear, uniform adjustment to brightness. However, human vision uses a complex, non-linear process called adaptation. Humans perceive relative contrast more so than absolute brightness, allowing us to see details in a wide range of conditions.

In GT7 Tone Mapping, it uses a color volume mapping operator that processes brightness and color information together than on separate R, G, and B channels. This involves a blending process where an initial image is processed on a per-channel curve, with a second color-accurate digital image converted to a Uniform Color Space (UCS), separating brightness (luma) from the color (chroma), thus allowing brightness adjustments without distorting the original hue. Finally, the two versions are blended together to produce the final result. This blended approach is designed to maintain color fidelity for important elements while allowing for a controlled, natural-looking result in highlights. [^1] [^2]

## Mask

- `Type`: <PropertyIcon name="texture" />**Data** Texture

Mask that defines where to apply the GT7 tone map. Black applies no effect, while white applies full effects.

## Color Accuracy

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.0 - 1.0`

Determines the color accuracy of the GT7 tone map.

## Chroma Fade Start

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.5 - 1.2`

Sets the starting range of the Chroma Fade in GT7.

## Chroma Fade End

- `Type`: <PropertyIcon name="floatrange" />**Float**, Range: `0.5 - 1.5`

Sets the ending range of the Chroma Fade in GT7.

[^1]: [Why Gran Turismo 7's Graphics Look So Different From Other Games](https://www.gtplanet.net/why-gran-turismo-7-graphics-look-20250902/)
[^2]: [Driving Toward Reality: Physically Based Tone Mapping and Perceptual Fidelity in Gran Turismo 7](https://s3.amazonaws.com/gran-turismo.com/pdi_publications/s2025_PBS_Physically_Based_Tone_Mapping_GT7.pdf)