---
sidebar_position: 8
title: Mirror/Camera Visibility
description: The Mirror section controls whether the shader should appear in VRChat Mirrors or not.
keywords: [mirror, mirrors, appearance, special fx, effect, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo'

The Mirror/Cmaera Visibility section is a very simple section that controls whether the shader should appear in VRChat Mirrors or not.

This can be used for very niche effects, such as if you want only a specific texture or effect to only show when the shader is being viewed from a Mirror, or from a Camera.

## Mode

- `Type`: **Dropdown**, Options: `VRC`/`Generic`

Sets the behavioral mode for the Mirror and Camera visibility.

- `VRC`: Changes settings that cater to VRChat-specific functionality.
- `Generic`: Changes settings that are for general usages, with limited options available.

## VRC: Mode Settings

These settings below will show if [Mode](#mode) is set to `VRC`.

### Normal (Outside Mirror/Camera)

- `Type`: **Boolean**

Toggles the visibility of the shader in a normal situation, without the requirement of a Mirror or a Camera.

### Mirror (VR)

- `Type`: **Boolean**

Toggles the visibility of the shader in the Mirror in VR.

### Mirror (Desktop)

- `Type`: **Boolean**

Toggles the visibility of the shader in the Mirror while on Desktop Mode.

### Camera (VR)

- `Type`: **Boolean**

Toggles the visibility of the shader in Cameras in VR.

### Camera (Desktop)

- `Type`: **Boolean**

Toggles the visibility of the shader in Cameras while on Desktop Mode.

### Screenshot

- `Type`: **Boolean**

Toggles the visibility of the shader in Screenshots.

## Generic: Mode Settings

These settings below will show if [Mode](#mode) is set to `Generic`.

### Mirror Visibility

- `Type`: **Dropdown**, Options: `Show In Both`/`Show Only In Mirror`/`Don't Show In Mirror`

Mode to use for the mirror visibility.

<details>
<summary><b>Mirror Visibility Options</b></summary>

- `Show In Both`: The material will be shown both outside and inside the mirror.
- `Show Only In Mirror`: The material will only be shown inside the mirror.
- `Don't Show In Mirror`: The material will only be shown outside the mirror.

</details>

## Mirror Texture & Color

- `Type`: **Boolean**

Enables the ability to change the Main Texture or Color when the shader is shown in a Mirror.

### Blending

- `Type`: **Dropdown**, Options: `Replace`/`Darken`/`Multiply`/`Lighten`/`Screen`/`Subtract`/`Add`/`Overlay`/`Mixed`

Set of the Blending of the Mirror Texture in the Mirror.

### Color

- `Type`: **Color**

Color shown in the Mirror. It is blended multiplicative with the Mirror Texture. If no Mirror Texture is defined, the Color will be used instead.

### Texture

- `Type`: **Color** Texture (`sRGB = On`)

Texture shown in the Mirror. The base color of the material in the Mirror is set from the color of this texture.

### Test

- `Type` **Boolean**

Boolean checkbox used to debug your results, assuming it's being seen in a Mirror or Camera right now.

:::danger Debugging Only
The `Test` checkbox is designed for debugging the result of your Mirror Texture & Color settings!

Make sure to turn this OFF when you're done testing!
:::