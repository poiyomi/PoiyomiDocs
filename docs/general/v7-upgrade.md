---
sidebar_position: 4
title: Upgrading from V7.x to V8.x
---
import PoiVideo from '@site/src/components/PoiVideo' 

Because the shader was reworked in significant ways, there are many differences between the previously most widely used version (v7.x) and the current version (v8.x).

This page covers a few of the major differences between the two versions that should be noted when upgrading transferring materials from one version to the next.

## Shading

### Light Data

**Ambient Occlusion** and **Direct Shadows** have been moved from a shading mode subsection to the Light Data section. 

Various other settings have been moved to the Light Data section, including:

- Min Brightness
- Max Brightness
- Vertex Lighting
- Grayscale Lighting

Along with many new settings.

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

PBR Reflections and Specular highlights have been re-worked significantly. A new packed map has been introduced, with an inline packer.

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

Outlines have been moved to their own variants to reduce unneeded shader passes.

## Special FX

### Emission

### Depth FX

## UV Modifiers
