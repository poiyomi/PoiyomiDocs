---
sidebar_position: 2
title: Presets
description: Thry Editor allows you to create, apply, and save Presets for Materials using Poiyomi Shaders.
keywords: [thry, editor, thryeditor, thryrallo, presets, material preset, material, poiyomi, shader]
---

Thry Editor allows you to create, apply, and save Presets for Materials using Poiyomi Shaders. Presets are fetched from Materials in a Project that are marked with `isPreset: true`.

## Using Presets

The Presets List can be summoned by pressing the <FAIcon icon="fa-solid fa-sliders"/> Preset List Icon.

<a target="_blank" href="/img/thryeditor/Thry_PresetsList.png">
<img src="/img/thryeditor/Thry_PresetsList.png" alt="Thry Editor Presets" width="700px"/>
</a>

From here, you will see a few categories. Some of these are included by default. Any Presets you create will be listed in here as well.

### Applying a Preset

To apply a Preset to your Material, click the Checkbox next to the name of the Preset in the list. When you do this, the Material will update with a preview of your changes.

<a target="_blank" href="/img/thryeditor/Thry_SelectPreset2.png">
<img src="/img/thryeditor/Thry_SelectPreset2.png" alt="Selecting a Preset" width="700px"/>
</a>

*In this example, we are selecting a Preset called `Toon Hard Shadow` located in a category under `Lighting`. This Preset in particular adjusts some Shading settings.*

<a target="_blank" href="/img/thryeditor/Thry_ConfirmPreset.png">
<img src="/img/thryeditor/Thry_ConfirmPreset.png" alt="Confirm your new settings" width="300px"/>
</a>

If you are happy with the changes this Preset makes, click the `Apply` button to confirm your changes. This saves the settings you applied and closes the window.

Although if you are not satisfied with the settings it applied, you can un-check the Preset and choose a different one. Or you can close the Preset List without applying any settings by clicking the `Discard` button.

## How to Create a Preset

Creating your own Presets is very easy to do. By doing this, you can save yourself a few clicks with a workflow of consistent settings you use very often without having to copy and paste them every so often.

### Getting Started

It is recommended you use a Material **you are NOT using on your Avatar** for your Presets, as the Material needs to be Unlocked in order for the Preset System to read your settings.

1. Begin by creating a fresh Material in your files by `Right-Click` in your Project Files, name it, then change the Shader to `.poiyomi/Poiyomi Toon`.
2. On your newly-created Poiyomi Material, `Right-Click` on the Material. Use the context menu to click `Thry -> Materials -> Mark as Preset`.

<a target="_blank" href="/img/thryeditor/Thry_MarkAsPreset.png">
<img src="/img/thryeditor/Thry_MarkAsPreset.png" alt="Marking a Material as a Preset" width="700px"/>
</a>

3. After doing so, re-select the Material and you should see a Green-colored message that says "This material is a preset."
4. Name your Preset in the `Preset Name` field. This determines how it appears in the Preset List. Forward slashes "`/`" will indicate sub-categories.

<a target="_blank" href="/img/thryeditor/Thry_PresetName.png">
<img src="/img/thryeditor/Thry_PresetName.png" alt="Naming your Preset" width="700px"/>
</a>

Once you reach this part, you are now ready to start marking properties on the Material that you just marked as a Preset.

### Tagging Preset Properties

In a similar manner to Marking Properties as Animated, `Right-Click` and in the context menu you will instead click `Is part of preset`. When you do this, a Light Blue colored `P` symbol will appear to the left next to it. This indicates that the property will be used in your Preset. Do this for each Property that you wish to use in your Preset.

<a target="_blank" href="/img/thryeditor/Thry_MarkingPresets.png">
<img src="/img/thryeditor/Thry_MarkingPresets.png" alt="Tagging Properties as part of the Preset" width="400px"/>
</a>

### Test Your New Preset

Once you finish marking your Properties as `P`, test it out by going to a Material you're using on your Avatar.

Just like as described in [Applying a Preset](#applying-a-preset), open the Preset List by pressing the <FAIcon icon="fa-solid fa-sliders"/> Preset List Icon, and your Preset should be seen in there. Click it and Apply to your Material.

Congratulations! You now know how to create and apply your own Presets.