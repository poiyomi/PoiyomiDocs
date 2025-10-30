---
sidebar_position: 6
title: Shader Translation
description: Explanation of shader properties and how they are treated in Unity, as well as a few key differences.
keywords: [translator, shader, thryeditor, thryrallo, thry, editor, shader, property, material, properties]
---

In Poiyomi Shaders, there are some properties that will completely differ from Unity's Standard and some alternative Toon shaders out there. To ensure shader translation is done appropriately, this page will cover the main differences in how they are used. Because of how Unity treats Material files, many Material Properties are preserved in the file in order to ensure seamless switching back to the previous shader used.

## Standard Shader

When switching from the Standard shader to Poiyomi, most if not all properties will be carried over with a few exceptions. Please read below to see what will NOT be carried over:

- **Metallic Smoothness**: Properties and Textures such as `_Metallic`, `_Glossiness`, and `MetalGlossMap`, will not be carried over as we use a different workflow as defined by Mochie. When switching over, you must adjust the workflow for [Reflections & Specular](/docs/shading/reflections-and-specular.md) in Poiyomi Shaders. See the documentation page linked in this paragraph to learn more.
- **Occlusion**: This Texture Slot will not be carried over. However, you should be able to use it under the [AO Maps](/docs/shading/light-data.md) slot in Light Data without a problem. Do keep in mind that AO Maps will only work best with Realistic-based shading.
- **Detail Maps**: This texture slot will not be carried over as we use a far more advanced setup in both [Details](/docs/color-and-normals/details.md) and [RGBA Color Masking](/docs/color-and-normals/rgba-color-masking.md).
- **Detail Albedo x2**: This texture slot will not be carried over as we use a more advanced approach in [Details](/docs/color-and-normals/details.md) feature.

## LilToon

LilToon uses a much different and simplified approach to Toon shading compared to Poiyomi. There are some settings that are carried over, however it may require usage of our included script utility in order to reliably translate the properties over.

Please be aware this list is incomplete and may be missing some details.

- **Shadows**: The `Shadows` feature in LilToon is the exact same as `Multilayer Math` and can be carried over when converted. However if it's disabled, it will be converted to `Flat` instead.
- **Lil Reflections**: In LilToon, it uses both Specular and Environment Reflections in a more stylized fashion. If used, this will enable `Stylized Reflections`, set the mode to `lilToon` and convert the values over.
- **Backlighting**: Poiyomi Shaders has the same features and properties as LilToon's Backlighting feature and can be converted over 1:1.
- **Rim Lighting**: Each of Rim Lighting settings will be converted over to match.

### Using the LilToon to Poiyomi Script

To convert a copy of the Avatar in the Scene using LilToon over to Poiyomi Shaders, `Right-Click` on the Avatar in the Hierarchy and click `Poiyomi -> Materials -> Translate Copy to Poiyomi Toon`. This will run a script that will convert recognized properties in each LilToon Material over to their appropriate counterparts. The converted Materials will be placed in the same folder as the original Materials for comparison.

:::warning
As LilToon is an actively-developed shader, there may be some bugs with the script that don't translate some properties over correctly. If you find any inconsistencies, please let us know in our Discord server!
:::
