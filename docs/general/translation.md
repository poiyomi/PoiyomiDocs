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

### How to Use the Translation Script

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

LilToon is a very simple shader. Over time, the developers have updated the Shader to ensure most settings work in unison when they are switched back and forth. The same can be said for Poiyomi.

This section will give a technical outline on what sections in particular are taken into careful consideration when using the conversion script. If a certain look wasn't processed properly when converting your Avatar, this section should explain the reasons behind that.

#### Normal Maps

In LilToon, there's the option to provide a 2nd Normal Map. **For that, we will translate it over to use the [Details](/docs/color-and-normals/details.md) module instead.**

#### 2nd Texture & 3rd Texture

In LilToon, the shader offers two extra Texture slots. In order to emulate this feature in a similar fashion, we are instead going to use [Decals](/docs/color-and-normals/decals.md). If `2nd Texture` is used, it will be ported over to `Decal 0`, while `3rd Texture` will be ported over to `Decal 1`.

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

Shader Properties in Unity are case sensitive. So because MatCap is named that way in LilToon, properties will be converted to our Matcap naming scheme. In addition, some other properties need to be converted.

If MatCap in LilToon is using an LOD (or Matcap Smoothness), we're going to translate that over to our version of their MatCap's LOD, which is Smoothness.

##### Rim Lighting

LilToon uses a unique Rim Lighting system that differs from Poiyomi, especially since it favors HDR Color instead of a simple Color, among other unique stylistic features. We have adopted this technique in Poiyomi Shaders with the usage of [Style: LilToon](/docs/shading/rim-lighting.md#liltoon) in our Rim Lighting.

We will be using `Style: LilToon` Rim Lighting in Poiyomi Shaders when translating the section. Since it uses the same exact material properties, it's 100% compatible with it.

##### Rendering

All important [Rendering](/docs/rendering/main.md) settings will be matched over. However, keep in mind that the `_FlipNormal` property will be named as `_FlipBackfaceNormals` instead in Poiyomi Shaders.

:::warning Blending and Advanced Blending
Some complicated properties, such as items set for `Blending` and `Advanced Blending` may not convert over perfectly. The same can be said for Outline Blending.

When converting from LilToon to Poiyomi, please double-check to ensure your settings line up exactly as you intended!
:::