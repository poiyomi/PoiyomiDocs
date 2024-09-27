---
sidebar_position: 4
title: Converting Shaders to Poiyomi
description: A comprehensive guide on converting properties from certain shaders over to Poiyomi Shaders.
keywords: [shader translation, translation, liltoon, convert liltoon to poiyomi, liltoon to poiyomi, convert, poiyomi, shader, ui, unity]
---
import PoiVideo from '@site/src/components/PoiVideo' 

In the latest versions of Poiyomi Shaders, our scripts do a much better job of converting complex shaders, such as LilToon, to be compatible with Poiyomi.

This page documents everything you need to know about our conversion tools available in the package, including the technical details on how certain properties are handled.

:::info Heads Up!
This page is NOT meant to be used as a way to convince a "user" on why they should use Poiyomi instead, rather than a different shader!

You should only use the information documented here as an informational guide when switching from a different shader to Poiyomi.
:::

## LilToon to Poiyomi

LilToon is an Toon Shader used by various creators in VRChat, most commonly on various Avatars that are sold in the Eastern Hemisphere. It was created in awake from the disappearance of Arktoon and the continuous deprecation of Unity-chan Toon Shader (UTS) in favor of a more simplified shader that works well as a replacement to both Arktoon and UTS.

Although it's a very simplistic shader with features that gets the job done for the Artist, there are some properties that don't translate well with other Shaders. As of Poiyomi Shaders version 9.0.60/9.1.12 and newer, our packages now come included with improved scripting that assist the user in translating the most complex properties in LilToon to work in Poiyomi Shaders with precise accuracy.

### How to Use

:::warning Make a copy of your Avatar!
Before using this tool, it is recommended you make a copy of your Avatar in the Scene just in case! To do this, select the Avatar in the Hierarchy, then press the keyboard shortcut `Ctrl + D` on your Keyboard. This will make a duplicate of the Avatar in your Scene with a numeral `(1)` suffix added to the GameObject.

After doing so, move the original Avatar aside or hide it so that you can focus on the newly duplicated one.
:::

In Unity, `Right-Click` on your Avatar in the Hierarchy that is currently using lilToon Materials. Then select `Poiyomi -> Materials -> Translate Copy to Poiyomi Toon` in the context menu.

Running this script will do the following things in the background:
1. All lilToon Materials found on the Avatar **will be copied** in the same folder they reside in with a `_PoiToon` suffix.
2. Next, those new Materials will pass through our Script, converting all known properties to be readable by Poiyomi.
3. Once finished, the Avatar in the Scene will change with the newly-converted Materials assigned, automatically.
4. Done!

### After Conversion

You should do a side-by-side comparison of your Avatar to see the difference. Remember when we made a duplicate of the Avatar just in case? If so, this is where you should use it to compare how it looks against your newly converted Avatar with.

By default, you should see very little to no difference whatsoever. This is because the script takes careful consideration on how certain complex properties in lilToon are configured and adjusts them in Poiyomi as necessary to ensure they match up. Although it's a good idea to test to ensure the Lighting is properly working as well. Use tools such as [Haï Lightbox Viewer](https://docs.hai-vr.dev/docs/products/lightbox-viewer) to see how it looks under various lighting conditions in comparison to the original Avatar.

### LilToon to Poiyomi: Important Things to Know

LilToon is a very simple shader, but over time, the developers have updated the Shader to ensure most settings work in unison when they are switched back and forth. The same can be said for Poiyomi.

This section will give a technical outline on what sections in particular are taken into careful consideration when using the conversion script. If a certain look wasn't processed properly when converting your Avatar, this section should explain the reasons behind that.

#### Alpha

A few settings regarding the control of the Alpha will be adjusted to be readable by Poiyomi. The Alpha Mask, it's Mode, and the Cutoff value will be translated over. There are various properties, such as `_AlphaMaskMode`, `_Cutoff`, `_AlphaMaskScale`, and `_AlphaMaskInvert`. For the `_AlphaMaskInvert` property, it needs to get the source property value and adjust it, even if it was inverted.

#### Normal Maps

If there is a `_UseBumpMap`, which refers to a Normal Map in LilToon, it will be translated over as a Normal Map. If no Normal Map is used, we will set the intensity to `0`.

However, in LilToon, there's the option to provide a 2nd Normal Map. **For that, we will translate it over to use the [Details](/docs/color-and-normals/details.md) module instead.**

#### 2nd Texture & 3rd Texture

In LilToon, the shader offers two extra Texture slots. In order to emulate this feature in a similar fashion, we are instead going to use [Decals](/docs/color-and-normals/decals.md). If `2nd Texture` is used, it will be ported over to `Decal 0`, while `3rd Texture` will be ported over to `Decal 1`.

#### Emissions

LilToon has two Emission slots. In Poiyomi Shaders, it offers 4 Emission slots. So because of that, we will translate the usage of both Emission and Emission 2nd to the first two Emission modules in Poiyomi Shaders `Emission 0` and `Emission 1`.

The property names on `Emission 0` uses the same naming scheme in Unity Standard, so porting over Emission should expect to work out of the box.

However, for the **2nd Emission** slot, LilToon uses an unconventional naming scheme. For example, properties such as `_Emission2ndMap` and `_Emission2ndBlendMask`. Because of this, we will be translating these over to `_EmissionMap1` and `_EmissionMask1` respectively.

#### Lighting

LilToon does things a little bit more simplistic with Lighting and shadows. For starters, it's very basic.

We will be translating over the Light Limits, Monochromatic, and Shadow Strength to Poiyomi's [Light Data](/docs/shading/light-data.md).

#### Shadows

Next, Shadows will be translated over. LilToon does things a little bit more simplistic with shading, providing only Flat or Shadows as the options.

If `_UseShadow` is being used, we will convert this to [Multilayer Math](/docs/shading/main.md#multilayer-math) because the properties match closely with LilToon. However, if Shadow is disabled in the LilToon Material, it will keep the Lighting Mode set Flat.

We use Multilayer Math because about everything that's currently set underneath Shadow in LilToon will look very familiar. The Material Properties are very much named the same, so they will automatically translate over since they all use the same properties. If you look underneath LilToon's Shadow settings, things should look pretty familiar if you used Multilayer Math in Poiyomi.

#### Matcaps

LilToon allows a maximum of 2 Matcaps. In Poiyomi Shaders, we allow up to 4 Matcaps.

If both Matcaps are used, they will translate over to `Matcap 0` and `Matcap 1` respectively. However, we need to translate some properties. In Poiyomi Shaders, we say "Matcap." In LilToon, they say "Mat**C**ap" with an uppercase C instead of lowercase c.

Shader Properties in Unity are case sensitive. So because MatCap is named that way in LilToon, we need to use our spelling of Matcap. In addition, some other properties need to be converted.

For the Matcap Texture, the Colors, the Strength, and the Blending Masks, we are going to match their properties as well. A lot of them are already simple enough to do. However, for the Color Blending Mode, we are going to convert how LilToon's Matcap Blending Modes are translated over.

If MatCap in LilToon is using an LOD (or Matcap Smoothness), we're going to translate that over to our version of their MatCap's LOD. If it's being used, we're going to set the boolean to `true`. Now because LilToon makes this Smoothness value go up to `10`, we're going to convert this to a clamped float since that's what we use in Poiyomi Shaders. So, for example, if the Smoothness is set to `10`, it will be converted to `1.0` instead. Likewise, if it's set to something like `7.23` in LilToon, it's going to be converted to `0.723` in Poiyomi.

##### 2nd Matcap

The same above behavior will be applied if the 2nd Matcap is used, which will convert over to `Matcap 1` since `Matcap 0` is already used as the first Matcap slot in Poiyomi. There are some minor differences. For example, LilToon uses the word "2nd" in their property names. So, we're going to convert those over appropriately while taking into account of the unconventional naming scheme of the properties.

##### Rim Lighting

LilToon uses a unique Rim Lighting system that differs from Poiyomi, especially since it favors HDR Color instead of a simple Color, among other unique stylistic features. We have adopted this technique in Poiyomi Shaders with the usage of [Style: LilToon](/docs/shading/rim-lighting.md#liltoon) in our Rim Lighting.

Because Rim Lighting in Poiyomi Shaders if set to `Style: LilToon`, it exposes the same exact material properties. That makes us are already 100% compatible with it. All we have to do now is force Poiyomi Shaders to use it.

We will force the converted Material to use `Style: LilToon` in Poiyomi Shaders. For reference, the integer `_RimStyle` for LilToon Rim Lighting in Poiyomi Shaders is `2`.

##### 2nd Rim Lighting

The same behavior above will be used if the second Rim Lighting slot is used (and enabled).

##### Backlight

[Backlight](/docs/shading/backlight.md) has been introduced in modern versions of Poiyomi Shaders. Since the material properties are exactly the same in LilToon's Backlight, they're already going to be converted directly. So, we're just going to enable the feature and keep the properties that are used.

##### Outlines

[Outlines](/docs/outlines/outlines.md) are pretty easy! There are just some different property names that need to be converted, such as the Texture, Color, Size Mask, and Width.

Since Outlines has been re-introduced into the main `.poiyomi/Poiyomi Toon` shader as of 9.0, there's no need to select a separate Shader version for this to work. It'll just translate out of the box.

Keep in mind that the `Outline Blending` options may not convert over perfectly, so be sure to check them!

##### Glitter

[Glitter](/docs/special-fx/glitter.md) should be straightforward. We will be adapting the UV Mode, Color Texture, Strength, etc., from LilToon to work with Poiyomi's Glitter.

##### Rendering

All important [Rendering](/docs/rendering/main.md) settings will be matched over. However, keep in mind that the `_FlipNormal` property will be named as `_FlipBackfaceNormals` instead in Poiyomi Shaders.

:::warning Blending and Advanced Blending
Some complicated properties, such as items set for `Blending` and `Advanced Blending` may not convert over perfectly. The same can be said for Outline Blending.

When converting from LilToon to Poiyomi, please double-check to ensure your settings line up exactly as you intended!
:::