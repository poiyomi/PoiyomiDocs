---
sidebar_position: 2
title: Presets
description: Thry Editor allows you to create, apply, and save Presets for Materials using Poiyomi Shaders.
keywords: [thry, editor, thryeditor, thryrallo, presets, material preset, material, poiyomi, shader]
---

Thry Editor allows you to create, apply, and save Presets for Materials using Poiyomi Shaders. Presets are fetched from Materials in a Project that are marked with `isPreset: true`.

## Using Presets

The Presets List can be summoned by pressing the **Presets** button.

<a>
<img src="/img/thryeditor/Thry_PresetsList-new.png" alt="Thry Editor Presets" width="700px"/>
</a>

From here, you will see a few categories. Some of these are included by default. Any Presets you create will be listed in here as well.

### Applying a Preset

To apply a Preset to your Material, click the Checkbox next to the name of the Preset in the list. When you do this, the Material will update with a preview of your changes.

<a>
<img src="/img/thryeditor/Thry_SelectPreset2.png" alt="Selecting a Preset" width="700px"/>
</a>

*In this example, we are selecting a Preset called `Toon Hard Shadow` located in a category under `Lighting`. This Preset in particular adjusts some Shading settings.*

<a>
<img src="/img/thryeditor/Thry_ConfirmPreset.png" alt="Confirm your new settings" width="300px"/>
</a>

If you are happy with the changes this Preset makes, click the `Apply` button to confirm your changes. This saves the settings you applied and closes the window.

Although if you are not satisfied with the settings it applied, you can un-check the Preset and choose a different one. Or you can close the Preset List without applying any settings by clicking the `Discard` button.

### Applying Quick Presets

You can quickly apply a Preset to your Material without having to open the dialogue. Instead of clicking the Presets button, **Right-Click** it! This will show a dropdown-style Menu allowing you to navigate to a listed Preset, and instantly apply it upon clicking it.

<ReactVideo src='/vid/thryeditor/quick-presets-demo.webm'/>

### Applying Section Presets

Some sections support their own Presets which are configured [below](#advanced-per-section-presets). They will appear as an icon in the Section Header...

<ReactVideo src='/vid/thryeditor/section-presets-demo.webm'/>

Click on it to bring up a list of Presets in a dropdown menu that are exclusive to that section. Then, click on the preferred Preset's name to instantly apply it to that section only.

## How to Create a Preset

Creating your own Presets is very easy to do. By doing this, you can save yourself a few clicks with a workflow of consistent settings you use very often without having to copy and paste them every so often.

### Getting Started

It is recommended you use a Material **you are NOT using on your Avatar** for your Presets, as the Material needs to be Unlocked in order for the Preset System to read your settings.

1. Begin by creating a fresh Material in your files by `Right-Click` in your Project Files, name it, then change the Shader to `.poiyomi/Poiyomi Toon`.
2. On your newly-created Poiyomi Material, Click on the <FAIcon icon="fa-solid fa-screwdriver-wrench"/> **Tools** icon and checkmark the option `Is Preset`.

<a>
<img src="/img/thryeditor/Thry_newMarkAsPreset.png" alt="Marking a Material as a Preset" width="700px"/>
</a>

1. After doing so, you should now see some fields appear. A green text explaining "This material is a preset" will appear.
2. Name your Preset in the `Preset Name` field. This determines how it appears in the Preset List. Forward slashes "`/`" will indicate sub-categories.

<a>
<img src="/img/thryeditor/Thry_newPresetName.png" alt="Naming your Preset" width="700px"/>
</a>

Once you reach this part, you are now ready to start marking properties on the Material that you just marked as a Preset.

### Tagging Preset Properties

In a similar manner to [Marking Properties as Animated](/docs/general/locking.md#marking-properties-for-animation), `Right-Click` and in the context menu you will instead click `Is part of preset`. When you do this, a Light Blue colored `P` symbol will appear to the left next to it. This indicates that the property will be used in your Preset. Do this for each Property that you wish to use in your Preset.

<a>
<img src="/img/thryeditor/Thry_MarkingPresets.png" alt="Tagging Properties as part of the Preset" width="400px"/>
</a>

### Test Your New Preset

Once you finish marking your Properties as `P`, test it out by going to a Material you're using on your Avatar.

Just like as described in [Using Presets](#using-presets), open the Preset List by pressing the **Presets** button, and your Preset should be seen in there. Select your Preset and Apply to your Material. That's it!

:::warning
Be careful when creating too many Preset Materials in your project. Otherwise, you may risk causing the [64 Slot Crash](/docs/general/textures-64-texture-slot-crash.md)!

To help counteract against this, you can safely switch your Preset Material(s) to the Standard shader. Don't worry, your preset settings are preserved on the Material (.mat) file. So if you need to edit your presets again later on, simply switch it back to Poiyomi and your settings will appear exactly where you left it.
:::

### Advanced Per Section Presets

Optionally, you have the ability to make separate Sections of the Material serve as their own Presets as well. This can be enabled by turning on `Preset per Section`.

When enabled, the Material will now include it's own `Preset Name` field near the top of each individual Section.

<a>
<img src="/img/thryeditor/Thry_PresetsPerSection.png" alt="Using per Section Presets" width="400px"/>
</a>

*Example of what the UI looks like when `Preset per Section` is enabled.*

As instructed from above, the workflow is still very much the same. The only difference however, is instead of the entire Material serving as a whole Preset, each Section is serving as their own additional amount of Presets. Therefore, each one used will appear separate from each other in the Presets List. [See the video on this page](#applying-section-presets) to see how it will appear.