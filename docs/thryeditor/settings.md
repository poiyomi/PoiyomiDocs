---
sidebar_position: 4
title: Settings
description: Configuration Settings for Thry Editor in Unity.
keywords: [thry, editor, thryeditor, thryrallo, settings, ui, configuration, config, poiyomi, shader]
---

The Settings window can be opened via the Gear <FAIcon icon="fa-solid fa-gear"/> icon in the top left corner of a material inspector. Or using the menu item of the top bar `Thry -> Shader UI -> Settings`.

<a target="_blank" href="/img/thryeditor/ThryEditorSettingsLocation.png">
<img src="/img/thryeditor/ThryEditorSettingsLocation.png" alt="ThryEditor Settings" width="800px"/>
</a>

## Thumbnail

*The Thumbnail changes from time to time. If clicked on, it may link to a post on Thryrallo's Social Media for additional context. The context of the Thumbnail has nothing to do with ThryEditor whatsoever.*

## Language

- `Setting`: **Dropdown**, Options: `English`/`German`/`Japanese`/`Spanish`/`Pirate`/`UwU`/`Binary`/`Chinese`

Changes the language of the UI. If a shader supports localization, it's language will be changed too.

The languages are loaded from `thry_editor_locale.csv`. If you would like to contribute, you can edit the file and create a pull request on [GitHub](https://github.com/Thryrallo/ThryEditor).

## Shader UI Design

### Default Texture Display

- `Setting`: **Dropdown**, Options: `Small`/`Big`
  - Default: `Small`

Changes the size of Texture Slots in the Material UI.

### Show Render Queue

- `Setting`: **Boolean**
  - Default: `On`

Shows the `Render Queue` field on the bottom of the Material UI. This boolean checkbox gives you the option to hide it if you wish.

### Show Colorspace Warnings

- `Setting`: **Boolean**
  - Default: `On`

Shows in-field warnings on specified Textures in various Texture Slots that aren't following the recommended Linear or sRGB setting for that specific Texture Slot.

### Show which values are not default

- `Setting`: **Boolean**
  - Default: `On`

Shows an asterisk (`*`) on any property that has deviated away from it's default value. Useful for seeing which values are not at it's default, and can assist with debugging.

## Shader UI Features

### Automatically mark animated properties

- `Setting`: **Boolean**
  - Default: `On`

Enabled by default, ThryEditor will attempt to automatically mark properties as Animated (`A`) when you interact with the properties while Recording.

### Allow custom renaming for locking

- `Setting`: **Boolean**
  - Default: `Off`

Allows a custom suffix to be used on properties that are marked Renamed Animated (`RA`), overriding the default naming as outlined [here](/docs/general/locking.md#rename-animated).

### Gradient Save File Names

- `Setting`: **Text Field**
  - Default: `gradient_<hash>.png`

Defines the naming scheme to use when auto-saving generated Gradients used in the Material UI.

## Avatar Fixes

### Auto Set Anchor Overrides (Bad Lighting Fix)

- `Setting`: **Boolean**
  - Default: `On`

If enabled, this option automatically fills empty Anchor Overrides slots of Mesh and Skinned Mesh Renderers on Avatar upload. This happens during avatar upload and only affects a copy of your avatar. Your original avatar remains untouched.


<details>
<summary><b>Explanation of the Anchor Override</b></summary>
Renderers use a point in space, called an Anchor, to sample lighting and reflection information from. They do this by searching for the closest Light Probe (and Reflection Probe) to this achor point. By default, this point is at the center of the Renderer's Bounding Box.

Since by default each renderer's bounding box encompasses only the mesh of it's renderer, the anchor point often differs wildly between the meshes of an avatar. As a result, this often causes the lighting of different parts of the model to flicker or look different even when using the same settings. How much an avatar is affected by this entirely depends on the world it's in and how light probes were scattered around by the world's creator.

Regardless, to prevent issues with this, you can override the anchor point by setting the `Anchor Override` on all renderers to the same object. This ensures all meshes sample the exact same lighting and reflection information. A recommended position is around the upper center of the model, e.g. the `Chest` bone.

Enabling the Auto Set Anchor Override will allow ThryEditor to automatically set this up for you during the avatar upload process.

</details>

:::info First-Time Upload Dialogue
When you begin to initiate an Upload for the first time, you will be greeted with a one-time message asking you to enable this feature.

We highly recommend you click `Yes (Recommended)` if this message shows up.

<a target="_blank" href="/img/general/bad-lighting-fix-message.png">
<img src="/img/general/bad-lighting-fix-message.png" alt="ThryEditor Bad Lighting Auto-Fix Dialogue" width="400px"/>
</a>
:::

:::info Disabling this Setting per Avatar
This setting can be individually disabled per avatar by creating an object named `AutoAnchorDisabled` anywhere on the avatar.
:::

### Human Bone Anchor

- `Setting`: **Dropdown**, Options: `Humanoid Bones`
  - Default: `Spine`

The Bone to use as the Anchor Override if the GameObject Anchor Name doesn't exist. Only works if the model is Humanoid (which is usually the case).

### Object Anchor Name

- `Setting`: **Text Field**
  - Default: `AutoAnchorObject`

The name of which Anchor Override that ThryEditor should use. If there's no matching GameObject of the defined name, it will use the Humanoid Bone specified above.

## Textures Compression

### Texture Packer Compression | Textures With Alpha

- `Setting`: **Dropdown**, Options: `Automatic`/`Compression Spec`
  - Default: `Automatic`

Configures the compression algorithm to use on the generated Texture used in the Texture Packer using Alpha.

### Texture Packer Compression | Textures Without Alpha

- `Setting`: **Dropdown**, Options: `Automatic`/`Compression Spec`
  - Default: `Automatic`

Configures the compression algorithm to use on the generated Texture used in the Texture Packer without using Alpha.

### Gradient Editor Compression

- `Setting`: **Dropdown**, Options: `Automatic`/`Compression Spec`
  - Default: `Automatic`

Configures the compression algorithm to use on generated Gradients in the Material UI.

## Inline Texture Packer

### Enable Crunch Compression

- `Setting`: **Boolean**
  - Default: `Off`

Enables Crunch Compression on generated packed Textures in the Material UI. Disabled by default.

### Save Location

- `Setting`: **Dropdown**, Options: `Material`/`Texture`/`Prompt`/`Custom`
  - Default: `Material`

Defines the save location of merged textures generated from the Inline Texture Packer in the Material UI.

## Technical Settings

### Force Async Compilation In Preview

- `Setting`: **Boolean**
  - Default: `On`

Speeds up compilation time and doesn't block UI during compilation. Requires Restart of Unity if changing this setting.

### Save after lock/unlock

- `Setting`: **Boolean**
  - Default: `On`

Prevents cyan thumbnails when using Async Compilation.

### Fix Keywords When Locking

- `Setting`: **Boolean**
  - Default: `On`

Automatically fixes certain locking errors relating to keywords being missing. This should remain enabled at all times.

## Developer Settings

The settings below is only intended for Thryrallo. Use these settings at your own risk.

### Show Manual Reload Button

- `Setting`: **Boolean**

Shows a button that forces the Material UI to reload on command.

### Developer Mode

- `Setting`: **Boolean**

Enables Developer Mode, exposing additional (and possibly risky settings) that should only be used for debugging purposes.

## VRChat Asset Installer

Optional asset that allows you to easily find and install assets for VRChat into you Project. It has various community prefabs and tools available for one-click installations. **It is not an alternative to VCC, but an addition as it uses Unity Packages and UPM instead of VPM.**
