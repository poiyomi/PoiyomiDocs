---
sidebar_position: 5
title: Upgrading from V7.x to V8.x
---
import PoiVideo from '@site/src/components/PoiVideo' 

Because the shader was reworked in significant ways, there are many differences between the previously most widely used version (v7.x) and the current version (v8.x).

This page covers a few of the major differences between the two versions that should be noted when upgrading transferring materials from one version to the next. It's not comprehensive, so be sure to ask for help in the discord if you have questions.

:::note
It's always a good idea to make a copy of any materials before changing them, so you can return to the original version if you need to!
:::

To upgrade the shader, delete the `_PoiyomiShaders` folder in your assets.

If you've changed import settings for any included textures, you can delete everything but the `Textures` folder in `_PoiyomiShaders`.

Sometimes when updating your locked materials may get stuck in the locked state. This happens because the name of the shader changed. Avoid this by unlocking materials before updating. To Fix this, reselect the correct Poiyomi shader for the broken materials.

## Shading

### Light Data

**Ambient Occlusion** and **Direct Shadows** have been moved from a shading mode subsection to the Light Data section. 

Various other settings have been moved to the Light Data section, including:

- Min Brightness
- Max Brightness
- Vertex Lighting
- Grayscale Lighting

Along with many new settings being added.

### Shading

Shading modes have changed between v7.x and v8.x, and the setting will have to be re-set to ensure the correct mode is selected.

#### Ignore Ambient Color

Ignore Ambient color has been added to more modes, as a sliding scale.

#### Toon Modes

The "Toon" mode, with subsections for Toon Ramp, Math Gradient, and Shade Map, has been removed, with its subsections broken out into their own sections.

#### Math Gradient -> Multilayer Math

The Math Gradient mode has been reworked into a new mode called "Multilayer Math".

The first shading layer is equivalent to the Math Gradient mode, with "Gradient Start" and "Gradient End" having been replaced by a shadow center point and a blur. Changing the center point is equivalent to changing the average of the "Gradient Start" and "Gradient End" settings, and changing the blur is equivalent to moving the "Gradient Start" and "Gradient End" settings closer or farther apart.

### Metallics/Metallics and Specular -> Reflections and Specular

The "Metallics/Specular" and "Metallics (Deprecated)" sections have been removed, and PBR Reflections and Specular highlights have been re-worked significantly. A new packed map has been introduced, with an inline packer.

By opening up the "Maps" texture, you can insert individual maps into each channel. You can directly use metallic and smoothness/roughness maps, or you can use the inline packer to re-map your v7 maps to the new packed map. Put your v7 map texture in both the Metallic map and Smoothness map slots, and select `R` and `A` respectively to pull from the old metallic and smoothness channels. If you used the Reflectivity map, you can also put the v7 texture in the Reflection Mask slot and select `G`, but this may not have the intended effect due to the more accurate PBR implementation.

### Specular Highlights 1/2 -> Stylized Specular/Anisotropics

The custom specular highlights mode has been reworked into a new feature called "Stylized Specular", and Anisotropic reflections have been reworked into a new feature called "Anisotropics".

## Color & Normals

### Basic Emission

Basic Emission has been removed, as it was often used incorrectly.

If you have a material that should always have a minimum brightness, use the "Min Brightness" setting in the Light Data section.

If you need a material to have a uniform emission, use an emission section with "Base Color As Map" enabled, and a white color. This will make the "Emission Strength" setting equivalent to the old "Basic Emission" setting.

### Alpha Options

The alpha options has been reworked, with Distance Alpha (Distance Fade), Fresnel Alpha, and Angular Alpha being moved to this section.

## Outlines

Outlines have been moved to their own variants to reduce unneeded shader passes. Select shaders with "Outline" in the shader name to use outline options.

## Special FX

### Emission

"Glow In The Dark" was renamed to "Light Based", in order to better describe the effect. It can still be used in the same way.

"Multiply Emission Strength" was removed from emission audio link, as it conflicted with (and was less useful than) the X/Y min/max additive values. To recreate its effect, set the "X" value of Emission Add to the negative value of your base emission strength, and the "Y" value of Emission Add to zero. In audiolinked worlds, this will result in no emission when there's no volume in the selected channel, and the base emission value when there is max volume in that channel.

### Dissolve

"Dissolve Noise" was renamed to "Dissolve Gradient", and "Dissolve Detail Noise" was renamed to "Dissolve Noise". This better reflects their functionality

If you only have one dissolve map, it should be put in the "Dissolve Gradient" slot.

### Touch FX

Depth FX was split into two sections, "Depth Bulge" (Patreon only) and "Depth FX". The same options are available.

## UV Modifiers

### Panosphere UV

The "Panosphere" section was reworked as a UV option, which can be applied to almost any texture in the shader. This allows almost any feature to be used as a panosphere. To recreate the old panosphere section, a Decal or Emission slot can be used, with the texture's UV set to Panosphere.

### Parallax/Parallax Heightmapping

Parallax/Parallax Heightmapping have been reworked to use the new UV option system. Simialarly to the Panosphere UV option, the parallax-modified UV can be applied to almost any texture in the shader, by modifying one of the base UV slots (0, 1, 2, 3).
