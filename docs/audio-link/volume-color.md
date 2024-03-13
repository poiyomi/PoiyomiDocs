---
sidebar_position: 3
title: AL Volume Color
---
import PoiVideo from '@site/src/components/PoiVideo'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates a waveform of Colors projected on the UV through AudioLink.

## UV

- `Type`: **Dropdown**, Options: `UV0`/`UV1`/`UV2`/`UV3`

Choice of UV space to use for Volume Color.

## UV Direction

- `Type`: **Dropdown**, Options: `X`/`Y`

Direction of where the waveform will be projected on.

## Blend Type

- `Type`: **Dropdown**, Options: `Replace`/`Multiply`/`Screen`/`Linear Dodge(Add)`/`Overlay`/`Mixed`

Behavior of the Volume's Color blending against your Material.

## Alpha

- `Type`: **Float**, Range: `0.0 - 1.0`

Adjusts the entire visibility of the Volume Colors.

## Volume Color Low

- `Type`: **Color**

Color to use for the lowest frequencies.

## Low Emission

- `Type`: **Float**, Range: `0.0 - 20.0`

Adjusts the Emission Strength of the Volume Color Low.

## Volume Color Mid

- `Type`: **Color**

Color to use for medium frequencies.

## Mid Emission

- `Type`: **Float**, Range: `0.0 - 20.0`

Adjusts the Emission Strength of the Volume Color Mid.

## Volume Color High

- `Type`: **Color**

Color for the highest frequencies.

## High Emission

- `Type`: **Float**, Range: `0.0 - 20.0`

Adjusts the Emission Strength of the Volume Color Mid.