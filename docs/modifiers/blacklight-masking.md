---
sidebar_position: 1
title: BlackLight Masking
description: BlackLight Masking allows the user to create distance-based effects from Light Sources.
keywords: [blacklight, black light, masking, blacklight masking, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

<!--
EDITOR'S NOTE: This page was written based on an old Tutorial Video by Poiyomi. Some information may not be totally accurate as this module has completely changed since then. -BluWizard10
-->

BlackLight Masking allows you to create distance-based effects that appear based on specific set of Keys. It works by only showing effects when a specific Light Source (set to the Color **Black**) has it's `Intensity` set to match the `Key` as defined in the BlackLight Masking to show the effect.

There are 4 BlackLight Masks permissible per Material.

:::warning Required Setup
To use BlackLight Masking, you must set the following on a **Point Light Source** that you intend to use to react to the BlackLight Mask:
- `Intensity`, which will act as your **Key**.
- `Color` set to **Black**.
- `Mode` set to **Realtime**.
- `Render Mode` set to **Not Important**. *If this is not set, the BlackLight Mask will not work!*
:::

## BlackLight Masking

- `Type`: **Boolean**

Enables BlackLight Masking on the Material.

## One

### Key

- `Type`: **Float**

Which `Key` should be used for BlackLight Mask One. This should match the same value as the specific Light Source's `Intensity` value.

### Range

- `Type`: **Float2**

The Gradient of the BlackLight Mask, ranging from Beginning to End Point.

| Modifier | Function |
| --- | --- |
| X | Beginning of the Gradient |
| Y | End of the Gradient |

### Apply to Global Mask

- `Type`: **Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Select which [Global Mask](/docs/modifiers/global-masks.md) to apply the BlackLight Mask **One** effects onto.

## Two

### Key

- `Type`: **Float**

Which `Key` should be used for BlackLight Mask Two. This should match the same value as the specific Light Source's `Intensity` value.

### Range

- `Type`: **Float2**

The Gradient of the BlackLight Mask, ranging from Beginning to End Point.

| Modifier | Function |
| --- | --- |
| X | Beginning of the Gradient |
| Y | End of the Gradient |

### Apply to Global Mask

- `Type`: **Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Select which [Global Mask](/docs/modifiers/global-masks.md) to apply the BlackLight Mask **Two** effects onto.

## Three

### Key

- `Type`: **Float**

Which `Key` should be used for BlackLight Mask Three. This should match the same value as the specific Light Source's `Intensity` value.

### Range

- `Type`: **Float2**

The Gradient of the BlackLight Mask, ranging from Beginning to End Point.

| Modifier | Function |
| --- | --- |
| X | Beginning of the Gradient |
| Y | End of the Gradient |

### Apply to Global Mask

- `Type`: **Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Select which [Global Mask](/docs/modifiers/global-masks.md) to apply the BlackLight Mask **Three** effects onto.

## Four

### Key

- `Type`: **Float**

Which `Key` should be used for BlackLight Mask Four. This should match the same value as the specific Light Source's `Intensity` value.

### Range

- `Type`: **Float2**

The Gradient of the BlackLight Mask, ranging from Beginning to End Point.

| Modifier | Function |
| --- | --- |
| X | Beginning of the Gradient |
| Y | End of the Gradient |

### Apply to Global Mask

- `Type`: **Dropdown**, Options: `Off`/`1R`/`1G`/`1B`/`1A`/`2R`/`2G`/`2B`/`2A`/`3R`/`3G`/`3B`/`3A`/`4R`/`4G`/`4B`/`4A`

Select which [Global Mask](/docs/modifiers/global-masks.md) to apply the BlackLight Mask **Four** effects onto.
