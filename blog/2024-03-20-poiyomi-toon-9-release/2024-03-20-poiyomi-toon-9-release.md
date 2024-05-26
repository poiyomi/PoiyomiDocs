---
slug: 2024-03-20-poiyomi-toon-9-release
title: 'Poiyomi 9.0 Released'
description: Information regarding the release of Poiyomi Shaders 9.0
hide_table_of_contents: true
authors:
  poiyomi
keywords: [shader, vrchat, major, updates]
---

I am very excited to announce that version 9.0 of Poiyomi Shaders is now fully available!

This major update contains a vast amount of new features and improvements to the shader. While some areas may look similar to how they were in 8.0, it's worth noting that some sections have significantly changed. I highly recommend you take the time to look them over.

Much of the existing Documentation pages are still relevant, with some notes if applicable. The pages will be updated accordingly to be more in-line with 9.0 in the coming weeks. Some pages have already been updated as well (thanks, BluWizard and Teeh!).

### Let's break down the Major Changes:

- **Shader Variants**
    - All older versions, including 7.3, 8.0, 8.1 and 8.2, have all been moved under `.poiyomi/Old Versions`.
        - *This means the current main version of Poiyomi Shaders will be `.poiyomi/Poiyomi Toon` instead.*
        - **UNLOCK YOUR MATERIALS BEFORE UPGRADING to ensure you have an easy transition to the new naming scheme!**
- **RGBA Color Masking**
    - RGBA Color Masking has been completely redone from scratch. With this, a much better user interface and workflow is available for you to use.
        - Each Channel has more properties available now compared to before. To see what new areas do exactly, check the Documentation.
- **Matcaps**
    - Introducing `Gradient` UV Mode.
        - This feature works very similarly to `Iridescence` for those upgrading to 9.0.
        - *Use a Gradient Texture in the Matcap texture slot when using `Gradient`, or use the Thry Gradient Editor to make your own.*
    - Increased Matcap Slots from 2 to 4.
    - Added AudioLink to Matcaps.
        - Adjust your Matcap `Alpha`, `Emission`, and `Intensity` with the music Band.
        - *This feature was added to accomodate users switching over from using `Iridescence`.*
- **Outlines**
    - **All Outlines features have been reintroduced to the main shader variant.**
        - *This means you no longer have to select a separate shader variant in order to use Outlines!*
    - Added a new Outline Fixed Size Mode that basically makes Outlines look better at a closer range. This will be on by default on new Materials.
    - Added Color Adjust properties to Outlines.
    - Added more AudioLink settings to Outlines.
        - Enable `Color` to change the Color of your Outlines with the music Band.
- **Glitter / Sparkle**
    - **Glitter has received a major UI rework.**
    - Added Layers to Glitter.
    - Added Random Rotation Speed Offset to Glitter.
    - Altered the Linear Emission version of Glitter.
    - Added a slider allowing Glitter to scale with Lighting.
        - *This would make it sparkly in the light, and dark in the dark.*
    - **Added AudioLink to Glitter.**
        - Play around with `Max Brightness`, `Alpha Mod`, `Size Mod`, `Chrono Sparkle Speed`, and `Chrono Rotation Speed` with music Band to create some incredible effects.
- **Iridescence**
    - **Iridescence has been deprecated in favor of Matcaps. Use Matcaps with `Gradient` UV Mode instead.**
        - This was done because Matcaps can technically do the same thing as Iridescence with a few adjustments.
        - *To accomodate users switching over, all AudioLink features have been ported over to Matcaps as well.*
- **Rim Lighting**
    - Reorganized everything. Same properies, better user experience.
    - Additionally, the `Blend Mode` property name was changed due to incompatibilities with lilToon naming. Check the Upgrade Guide in the Documentation to see what the default settings were set to.
- **LTCGI**
    - Added experimental LTCGI support. Check the Documentation for more information.
        - *This marks the first time it is available in the Free Shader version.*

### Shader and UI Changes:

- **General UI**
    - Varous Elements in the Material UI have been redesigned to make things look better and easier to visually distinguish between other sections.
- **Color Adjust**
    - Hue Shift is now using the human perception of color.
        - This means better stability of the Brightness and Saturation with your base color.
    - Added `Color Grading`.
- **Module Toggles**
    - Module Toggles let you remove modules from your shader. Handy if you don't want to deal with all the things you don't use or want to be able to check boxes and see a little less cyan.
- **Rendering**
    - Reorganized Rendering Options instead of being randomly ordered. The new order of appearance is now: `Blending`, `Outline Blending`, `Stencil`, and `Outline Stencil`.
- **Global Masks**, **Themes**, **UV Settings**, and **Post Processing** are now organized under the `Global Data and Masks` Category.
- Changed Min Brightness for Additive Lights to now function with the luminance value of the additive light rather than the direct RGB values.
    - *For reference, "additive lights" are Point and Spot Lights.*
- **Decals**
    - Added Back Face and Front Face Masking.
- **Cubemap**
    - Section rework, including better organization.
    - Added Blurring and Color Adjustment.
- **Reflections & Specular**
    - Added Global Masking support.
    - `Lit Fallback` is now On by default to improve lighting in maps with no Reflection Probe at all.
- **Light Data**
    - Added `Mirror Vertex Lights (Non-Important)` Checkbox to Light Data. This enables separate additive lighting to appear on your Avatar's Mirror Clone.
        - *This is enabled by default.*
    - Adjusted Vertex Lights so they're more in line with how Additive Lights function.
- **Early Z**
    - Added Early Z option to almost every shader rather than having it be it's own shader.
        - *To use Early Z, enable it under `Rendering` on your Material.*
- **Grab Pass**
    - Massive changes to how Grab Pass works in Poiyomi Shaders. It now allows for all features to be used on it with correct lighting for Opaque surface and Transparent shading.
    - Defaults have been changed so they function correctly.
- **AudioLink**
    - Added animatable Overrides to the individual AudioLink Bands for debugging and custom AudioLink inputs.
- **Emissions**
    - Added Saturation to Color Adjust.
    - Changed the name of the `Hue Shift` section to `Color Adjust`.
- **Vertex Options**
    - Added a stupid sphere mode to vertex options because someone really wanted it.

### Bug Fixes:

- Fixed **Clear Coat** Global Mask Blending.
- Fixed a bug where Materials de-select themselves after Locking and Unlocking.
- Fixed a bunch of duplicate named things that was definitely not copy pasted and was forgotten to be changed.
- Fixed duplicate sampler names.
- Fixed Vertex Light issues in Shading and Stylized Specular.
- Fixed Grab Pass blending at various transparencies.
- Fixed a problem with additive lighting breaking when `Point Light Passthrough` was set to `0`.
- Corrected a problem with Packed Map behavior.
- Fixed Object Position being set incorrectly.
    - *It was set to `0,0,0` in World Space and is now correctly set tot he Model's position.*
- Fixed Glitter Color Alpha. It actually now does something.
- Fixed Grab Pass on the Toon Grab Pass shader.
- Fixed Export Checker throwing a Null Reference Exception.
- Fixed Point Lights being too dark at longer ranges. They were recalculated to be more correct.
- Fixed Light Data Maps not having RGBA Packers.
- Fixed a script error in the Toon Shader.
- Fixed some buggy UI in Rim Lighting.
- Fixed an issue where Reset, Copy, and Pasting of sections were not handling the reference properties correctly.
- Fixed various Shader Warnings.
    - Turns out that sometimes the Shader Warnings can actually crash the compiler!
- Fixed a bunch of crashes.
- Fixed an issue where Unlocked Shaders were included in the Upload when they weren't supposed to due to a failed Auto-Lock or other issue. It will now throw a callback to stop the Upload entirely if this situation is detected.
- A bunch of other fixes that would take ages to document.

### ThryEditor

- Added `isPlaying` check to Avatar Preprocessor. This should prevent Locking in cases where preprocessing is called for in Editor Test Builds that are not being Uploaded.
- **Added Cross Shader Editor**.
    - Use this Tool to edit multiple Poiyomi Materials, all at once.
        - Summon the panel by clicking `Thry -> Cross Shader Editor` from the Unity Menu.
- Added organizers which are currently used in Geometric Dissolve and Multilayer Shading.
- Added Decal Placement Tools, found in the Decal section.
- Fixed Presets from not functioning or updating correctly.
- VectorToSlidersDrawer negative support using np. If used all floats in the drawer declaration need to have either n or p in front of it to convert the parameter to a string. n will be converted to a negative float.
- Fixed a null pointer exception involving the Shader Translator.
- Various Fixes for Unity 2022.