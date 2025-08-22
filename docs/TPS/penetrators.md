---
sidebar_position: 2
title: Custom Penetrators
---

:::danger Deprecated Feature
TPS will be deprecated in Poiyomi 10.0. Please consider using better solutions such as [VRCFury's SPS <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://vrcfury.com/sps/) instead, which supports Poiyomi Shaders.
:::

Custom penetrators are split into two categories: Static and Skinned.
- `Skinned` use Skinned Mesh Renderers. They have bones & blendshapes and can use Physbones for dynamics
- `Static` use Static Mesh Renderers. They don't have bones & blendshapes and can't use Physbones for dynamics

## General

Penetrators need their mesh origin to be set at their root. Their forward direction (the blue arrow in unity) should be pointing towards their tip.

## Static
**Requirements**
- Origin at root
- Forward direction pointing towards tip

## Skinned
**Requirements**
- Origin at root
- Forward direction pointing towards tip
- Bones pointing in forward direction

## Configure Custom Penetrator
1. Select the material of you penetrator
2. Enable the TPS section
3. Add an empty gameobject & move it to the tip of your penetrator
4. Open the TPS Wizard & Scan for penetrators
5. Select the empty gameobject you just created for the `Tip` field of your penetrator
6. Bake your penetrator
7. Apply the TPS Setup