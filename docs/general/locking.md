---
sidebar_position: 1
title: Locking
---
import PoiVideo from '@site/src/components/PoiVideo' 

# Shader Locking

## Lock-in

At the top of a shader, there's a button labeled **Lock In Optimized Shader**. Pressing this will lock the shader, graying out any options that have not be unlocked. This may take a few seconds to complete.

To unlock the shader, just press the button again. It'll be labelled **Unlock Shader**.

Locked materials are *significantly* more optimized than their unlocked counterparts. For editor usage, unlocked materials having reduced performance is ok, but in usage all materials must be locked.

For VRChat, the locking process happens automatically for any materials used in an Avatar or World when a build/upload is triggered. This prevents unlocked materials from being uploaded with the final asset.

## Marking Properties for Animation

## Animated

To animate a property on a locked shader, they need to be marked as animated. To do this, while the material is unlocked, *right click* the property and select **Animated (When Locked)**. This will add a green `A` next to the property (short for `A`nimated).

![Marking a property as animated](/img/general/locking_animated.png)
*Marking a property as animated*

### Rename Animated

By selecting **Renamed (when locked)**, upon locking, the property will have a *unique* suffix based on the material's name. It will also add a green `RA` next to the property (short for `R`ename `A`nimated) This means you can animate multiple materials with the same property *differently* on the same mesh. Remember to *lock the materials first* before recording animations for these renamed properties.

For example, you could use **Renamed (when locked)** hue shift properties to animate multiple different materials to have different hue shift values.

## Copying Properties for Animation

### Copy Property as Keyframe

This option can be used to automatically generate a keyframe for a property on a specific renderer.

Select the renderer you'd like to animate them material of in the hierarchy, scroll down to the property in the materials list, and make sure it's marked for animation in the mode desired (standard or renamed).

Optionally, set the value to the value the keyframe should have. Then, select **Copy Property as Keyframe**, and paste it into the animation window.

If the property is set to **Animated (when locked)**, the keyframe will be copied with the standard property name. If the property is set to **Renamed (when locked)**, the keyframe will be copied with the renamed property.

### Other Options

These options are mostly useful for shader debugging and development, as well as editor scripting.

#### **Copy Property Name**

Copies the name of the property, as defined in the shader properties.

#### **Copy Animated Property Name**

Copies the name of the property, appending the renaming suffix if the property is set to **Renamed (when locked)**.

#### **Copy Animated Property Path**

Copies the name of the property, appending the renaming suffix if applicable. If the renderer is a child of an object with an animator, it will copy the path with reference to the parent animator.

![Copy Animated Property Path](/img/general/locking_copy-animated-property-path.png)
*Selecting **Copy Animated Property Path** would copy the value `Armature/Hips/Sphere/_DecalEmissionStrength` .*

## Non-Animatable Properties

Some properties cannot be animated at runtime in the same way as most.

### Section Header Checkboxes

![Section Header Checkbox](/img/general/locking_section-header-checkbox.png)

These section checkboxes signal the shader to add and remove code, and as such cannot be animated at runtime.

If you want to toggle the effect of a section, look for a property that controls the overall effect. For example, to disable **Color Adjust**, you could

### Keyword Toggle Checkboxes

Description

## Animating Vector/Color Channels

Description

## Technical Details

The locking feature uses an optimization procedure developed by [Kaj](https://github.com/DarthShader/Kaj-Unity-Shaders). When the shader is locked in, a unique version is generated that removes unused code, defines fixed values for shader properties, and defined unused texture slots to be fixed values.

This significantly improves performance, helps mitigate the 64 texture slot crash sometimes seen when many complex materials with lots of modules enabled are present in a scene.
