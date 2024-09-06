---
sidebar_position: 1
title: Locking and Animation
description: Information regarding the Lock-In and Animation systems used in Poiyomi Shaders.
keywords: [lock-in, lock, unlock, shader locking, mark animated, mark, animated, property, poiyomi, shader, thry, editor, thryeditor]
---
import PoiVideo from '@site/src/components/PoiVideo'

## Shader Locking

At the top of a shader, there's a button labeled `Lock In Optimized Shader`. Pressing this will lock the shader, graying out any options that have not been marked for animation. This may take a few seconds to complete.

To unlock the shader, just press the button again. It'll be labeled as `Unlock Shader`.

Locked materials are *significantly* more optimized than their unlocked counterparts. For editor usage, unlocked materials having reduced performance is ok, but in usage all materials must be locked.

:::info Auto-Lock Feature
When uploading to VRChat, the locking process happens automatically for any Materials used in an Avatar or World when a build/upload is triggered. This prevents unlocked materials from being uploaded with the final asset.

**If you are uploading for the first time, a one-time message will appear informing you that the Auto-Lock is being initiated.**

<a target="_blank" href="/img/general/Auto-Lock.png">
<img src="/img/general/Auto-Lock.png" alt="Auto-Lock Dialogue" width="400px"/>
</a>
:::

## Marking Properties for Animation

### Animated

To animate a property on a locked shader, they need to be marked as animated. To do this, while the material is unlocked, *right click* the property and select **Animated (When Locked)**. This will add a green `A` next to the property (short for `A`nimated).

![Marking a property as animated](/img/general/locking_animated.png)

*Marking a property as animated*

### Rename Animated

By selecting **Renamed (when locked)**, upon locking, the property will have a *unique* suffix based on the material's name. It will also add a green `RA` next to the property (short for `R`ename `A`nimated) This means you can animate multiple materials with the same property *differently* on the same mesh.

Using **Renamed (when locked)** can be a way to animate multiple different Materials without affecting all Material Slots, such as separate Hue Shift values.

:::warning Lock before Animating!
Because `RA` properties are generated after the Material is optimized, it's important to first Lock Materials BEFORE recording any Properties marked as `RA` for your Animation.
:::

The unique suffix assigned for Properties marked as `RA` will depend on the name of the Material. *For Example: If you're animating the `Alpha` slider on Decal 0 in a Material named **Body Mat**, the suffix of this property would be the name of the Material itself.* If the name of the Material has space between each word, an underscore (`_`) will be appended between each word. See Example Table to reference how the Properties are treated:

| Material Name | Property | `A` Property Name | `RA` Suffix | Renamed Property Name |
| :---: | :---: | :---: | :---: | :---: |
| **"Body Mat"** | Decal 0 -> Alpha | `_DecalBlendAlpha` | `_Body_Mat` | `_DecalBlendAlpha_Body_Mat` |

## Copying Properties for Animation

### Copy Property as Keyframe

This option can be used to automatically generate a keyframe for a property on a specific renderer.

Select the renderer you'd like to animate them material of in the hierarchy, scroll down to the property in the materials list, and make sure it's marked for animation in the mode desired (standard or renamed).

Optionally, set the value to the value the keyframe should have. Then, select **Copy Property as Keyframe**, and paste it into the animation window.

If the property is set to **Animated (when locked)**, the keyframe will be copied with the standard property name. If the property is set to **Renamed (when locked)**, the keyframe will be copied with the renamed property.

### Property Name Options

These options are mostly useful for shader debugging and development, as well as editor scripting.

#### **Copy Property Name**

Copies the name of the property, as defined in the shader properties.

#### **Copy Animated Property Name**

Copies the name of the property, appending the renaming suffix if the property is set to **Renamed (when locked)**.

#### **Copy Animated Property Path**

Copies the name of the property, appending the renaming suffix if applicable. If the renderer is a child of an object with an animator, it will copy the path with reference to the parent animator.

![Copy Animated Property Path](/img/general/locking_copy-animated-property-path.png)

*Selecting **Copy Animated Property Path** would copy the value `Armature/Hips/Sphere/_DecalEmissionStrength` .*

## Special Cases for Animation

### Animating Vector/Color Channels

When animating vector channels (including color channels, texture tiling/offset options, panning, and many others), the keyframe will be applied to the entire vector/color channel by default. It's possible to remove unused channels by deleting them individually after creating the keyframe, but may require special considerations in your animator.

With Write Defaults enabled in your animator states, the vector/color channels will be set to the default value of the material if not animated in a specific state. This means you should be able to animate individual vector/color channels of a material without worrying about the unused channels.

With Write Defaults disabled in your animator states, the vector/color channels will not be set to the default value of the material if not animated in a specific state. If the state of each channel is not animated, this can lead to undefined behavior. It's best to explicitly animate the state of all 4 channels of a vector in a default animator state, then animate the channels individually in subsequent states. This will ensure that the channels are initialized to the correct value.

### Unity Special Properties

Some properties in the shader are handled by Unity differently than most, and either cannot be animated, or can only be animated in a specific way. These are generally[^1] properties also used in Unity's [Standard Shader](https://docs.unity3d.com/Manual/shader-StandardShader.html), and are used to provide proper fallback behavior for VRChat's [Shader Blocking and Fallback System](https://docs.vrchat.com/docs/shader-fallback-system). 

The following table provides a list of features that will be animated on all materials on a renderer regardless of their lock state. For certain values, they can be renamed for animation (and, if necessary, will have a dummy version of the original, un-renamed version for fallback shaders).

This behavior is not a bug, it's behavior defined by Unity, beyond the control of the shader author (given the need to name these properties specifically for fallback shaders to work correctly).

| Property Name | Can be Renamed? | Property |
|--|--|--|
| `_Color`                  | ✔️ | [Main Color](docs/../../color-and-normals/main.md#color--alpha) |
| `_MainTex_ST`             | ❌ | [Main Texture Tiling/Offset](docs/../../color-and-normals/main.md#main-texture) |
| `_BumpMap_ST`             | ❌ | [Normal Map Tiling/Offset](docs/../../color-and-normals/main.md#normal-map) |
| `_BumpScale`              | ✔️ | [Normal Map Intensity](docs/../../color-and-normals/main.md#normal-map) |
| `_Cutoff`                 | ✔️ | [Alpha Cutoff](docs/../../color-and-normals/main.md#alpha-cutoff) |
| `_DetailMask_ST`          | ❌ | [Detail Mask Tiling/Offset](docs/../../color-and-normals/details.md#detail-mask) |
| `_DetailNormalMap_ST`     | ❌ | [Detail Mask Tiling/Offset](docs/../../color-and-normals/details.md#detail-normal) |
| `_DetailNormalMapScale`   | ✔️ | [Detail Mask Tiling/Offset](docs/../../color-and-normals/details.md#detail-normal-intensity) |
| `_EmissionColor`          | ✔️ | [Emission 0 Color](docs/../../special-fx/emission.md#emission-color) |
| `_EmissionMap_ST`         | ❌ | [Emission 0 Map Tiling/Offset](docs/../../special-fx/emission.md#emission-map) |

### Non-Animatable Properties

Some properties cannot be animated at runtime in the same way as most, due to the way they function. You may be able to create keyframes that change these properties, but they will not work at runtime.

To adjust these properties at runtime, you'll need to create different materials with the different settings. These can then be animated to change on the material, though be advised that there are issues with animating material slots on a renderer - notably, the slot labelled "Element 4" cannot be animated without the slot labelled "Material 2" changing[^2].

#### Section Header Checkboxes

![Section Header Checkbox](/img/general/locking_section-header-checkbox.png)

These section checkboxes signal the shader to add and remove code, and cannot be animated at runtime.

If you want to toggle the effect of a section, use a property that controls the overall effect. For example, to disable **Color Adjust**, you could animate the settings to their default values. To disable a **Decal**, animate the *Alpha* value to `0`.

#### Keyword Toggle Checkboxes

These include anything that toggles a [Keyword](https://docs.unity3d.com/Manual/shader-keywords.html), which is generally reserved for large changes in features, or the addition of texture slots. These also add and remove code from the shader, and cannot be animated at runtime.

- RGBA Masking: Enable Normals
- Light Data: Enable Additive
- Light Data: Ignore Directional
- Light Data: Debug
- Shading: Lighting Type
- Shading: (Cloth Mode) Clothmask Lerp
- Matcap 1/2: Custom Normal

#### Rendering/Low Level Options

These options relate to low-level directives and settings that change how the graphics driver interprets the shader, and generally cannot be adjusted at runtime.

- Lock/Unlock Shader
- Rendering Preset
- Rendering: Cull
- Rendering: ZTest
- Rendering: ZWrite
- Rendering: Color Mask
- Rendering: Offset Factor
- Rendering: Offset Units
- Rendering: Reduce Clip Distance
- Rendering: Ignore Fog
- Rendering: Enable GPU Instancing
- Rendering: RGB Blend Op
- Rendering: Alpha Blend Op
- Rendering: Source Blend
- Rendering: Destination Blend
- Rendering: Stencil Reference Value
- Rendering: Stencil ReadMask Value
- Rendering: Stencil WriteMask Value
- Rendering: Stencil Pass Op
- Rendering: Stencil Fail Op
- Rendering: Stencil ZFail Op
- Rendering: Stencil Compare Function
- VRChat Fallback Shader
- Render Queue

## Technical Details

The locking feature uses an optimization procedure developed by [Kaj](https://github.com/DarthShader/Kaj-Unity-Shaders). When the shader is locked in, a unique version is generated that removes unused code, defines fixed values for non-animated shader properties, and defined unused texture slots to be fixed values.

This significantly improves performance, helps mitigate the [64 texture slot crash](docs/../../general/textures-64-texture-slot-crash) sometimes seen when many complex materials with lots of modules enabled are present in a scene.

[^1]: For a more complete list, see the [List of some "Illegal Property Renames"](https://github.com/Thryrallo/ThryEditor/blob/master/Editor/ShaderOptimizer.cs#L227)

[^2]: https://hai-vr.notion.site/Avatars-27b50349acbe46c6914a502a7795c966#0cb36bb88d9e471dab10d6f0c2212201
