---
sidebar_position: 4
title: View Clip Prevention
description: View Clip Prevention pushes the mesh back when the camera gets too close to the mesh, preventing the camera from seeing inside the mesh.
keywords: [vertex, clipping, view, clip, poiyomi, shader, uzumore]
---

View Clip Prevention (also known as the [Uzumore Shader <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://github.com/sigmal00/UzumoreShaderVPM) integration) is a Vertex-based feature that "pushes" the mesh back when the camera gets too close to the object, preventing the camera from seeing inside the mesh. In some ways, this can make things a little more immersive.

<ReactVideo src='/vid/vertex-options/anti-mesh-penetration-example.webm' width='300px'/>
<em>*Example of View Clip Prevention in action.*</em>

## Animation Toggle

- `Type`: <PropertyIcon name="toggle" />**Toggle**

This is used to globally toggle the Uzumore Shader's effect across the entire material.

:::tip Reminder
Make sure to tag this checkbox as animated if creating toggles for this feature. Animating the [Section Header](/docs/general/locking.md#section-header-checkboxes) will not work! [Read More](/docs/general/locking.md#marking-properties-for-animation)
:::

## Push Amount (m)

- `Type`: <PropertyIcon name="float" />**Float**
  - Default: `0.1`

Measured in meters, this controls how far the mesh will be pushed back when the camera penetrates inside the mesh.

:::warning Don't set it too high
Setting this value too high may cause unintended burying. It's best to keep it around `0.1` or `0.2`. [^1]
:::

## Push Bias

- `Type`: <PropertyIcon name="float" />**Float**
  - Default: `0.001`

This measures the bias of the push amount.

## Push Mask (A)

- `Type`: <PropertyIcon name="texture" />**Data** Texture (`sRGB = OFF`)

Texture Mask that can set the range on where the effect becomes active. White areas on the texture enable sinking, while Black areas disable the effect.

## Push Mask Channel

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `R`/`G`/`B`/`A`

Which channel from the Push Mask to use as the mask.

[^1]: [Parameter Description: How far to bury (Translated from Japanese)](https://github.com/sigmal00/UzumoreShaderVPM?tab=readme-ov-file#%E3%81%A9%E3%81%93%E3%81%BE%E3%81%A7%E5%9F%8B%E3%82%82%E3%82%8C%E3%82%8B%E3%81%8B%EF%BD%8D)
