---
sidebar_position: 1
title: Overview
hide_title: true
description: Thry Editor is the underlying framework that powers the User Interface known in Poiyomi Shaders, and serves as the core Shader Inspector and Editor.
keywords: [thry, editor, thryeditor, thryrallo, ui, poiyomi, shader]
---

# Thry Editor

Authored by [Thryrallo](https://github.com/Thryrallo), Thry Editor (short for "**Thry**rallo **Editor**") is the underlying framework that powers the User Interface of the Shader. It serves as the core Shader Inspector and Editor for the all the features used across Poiyomi Shaders.

Not only does it serve as the primary framework for the Material User Interface, there are also a few other features under the hood that are worth knowing about. This page will cover all the known features included with Thry Editor, with extended information on some larger features found on the sidebar.

## User Interface

### Search

Filter the properties by name. Indicated by the Magnifying Glass icon. Click on it to expose a text input field.

When typing in a keyword, the UI will only show headers or properties with the searched name. The user interface will filter out any modules that do not match the keyword you search.

<a target="_blank" href="/img/thryeditor/search.png">
<img src="/img/thryeditor/search.png" alt="Search Feature" width="700px"/>
</a>

### Presets

Left click opens the presets UI. Here you can select a number of presets and see live how they change your material. Afterwards you can either apply the presets or discard the changes.

<a target="_blank" href="/img/thryeditor/presets.png">
<img src="/img/thryeditor/presets.png" alt="Presets Feature" width="700px"/>
</a>

*Click the Presets Icon to open the Presets List.*

Right click opens the quick presets UI. Here you can only select one preset, which is applied immediately.

<a target="_blank" href="/img/thryeditor/presets2.png">
<img src="/img/thryeditor/presets2.png" alt="Quick Presets Feature" width="700px"/>
</a>

*Right-Click the Presets Icon to quickly select a Preset.*

You can also create your own Presets using this feature. [See the Documentation Page to learn more.](../thryeditor/presets)

### Shader Translator

The shader translator is there to help you swap from one shader to an new one. Predefined property changes that map your settings from the old shader to the new one will adjust your material to match features as best as possible.

Simply click the button and select the old shader you changed from.

<a target="_blank" href="/img/thryeditor/shadertranslator.png">
<img src="/img/thryeditor/shadertranslator.png" alt="Shader Translator" width="700px"/>
</a>

### Material Linking

The material linking UI allows you to link sections of multiple materials together.

Afterwards you can change the properties of one material and the linked materials will change as well.

1. Click the `Link Materials` icon next to any section.
2. Select the materials you want to link.
You can also drag and drop materials from the asset view.
3. Click the `Done` button.

<a target="_blank" href="/img/thryeditor/linking.png">
<img src="/img/thryeditor/linking.png" alt="Material Linking" width="700px"/>
</a>

### Unbound Properties

Materials are a collection of properties. When you change shaders the properties used by the old shader are still saved to the material. This the benefit that when swapping back to the old shader your settings are still there. However this can also have unwanted side effects like increased material file size.

Using the `Tools` icon you get options for unbound properties.
1. Unbound textures: Textures that are saved to your material but not used by the shader.
2. Unused textures: Textures that are used by your shader, but inside a disabled section.
3. Unbound properties: Properties that are saved to your material but not used by the shader.

For all these options you can either list them in the output console or remove them from the material.

<a target="_blank" href="/img/thryeditor/unbound.png">
<img src="/img/thryeditor/unbound.png" alt="Unbound Properties" width="700px"/>
</a>

### VRC Fallback Shader

The Fallback Shader option generates a tag for the material that informs VRChat which shader to use when your shaders are hidden.

<a target="_blank" href="/img/thryeditor/fallback.png">
<img src="/img/thryeditor/fallback.png" alt="VRC Fallback Selector" width="700px"/>
</a>

### Texture Packer

The texture packer is a builtin tool to combine multiple textures into one or rearrange its channels.
Shaders can specifiy which textures should be represented by a texture packer.
So under some textures (mostly masks) you will find shown dropdown with texture slots for source textures, a `Confirm` button and a `Revert` button.
While editing the settings you can see a preview of the result in realtime. However your changes will not be correctly applied until you click the `Confirm` button.

Options per texture slot:
- `Texture Slot`: Source texture
- `Fallback`: Value to use if the source texture is not set
- `Inverted`: Invert the value
- `Channel`: Select the channel to use. The `max` channel uses the max value of RGB channels.

<a target="_blank" href="/img/thryeditor/packer.png">
<img src="/img/thryeditor/packer.png" alt="Texture Packer" width="700px"/>
</a>

### Cross Shader Editor

The Cross Shader Editor is a panel that allows you to mass-edit your Poiyomi Materials, all at once. Anything you edit or change in this panel will be applied to all Materials that are referenced.

[Learn more about the Cross Shader Editor.](./cross-shader-editor.md)

## Settings

The `Settings UI` window can be opened via the `gears icon` in the top left corner of a material. Or using the menu item of the top bar `Thry -> Shader UI -> Settings`. This includes `Localization`, `Auto-Set Anchor`, and a few more settings.

[Learn more about Thry Editor Settings.](./settings.md)

## Tools

There are a few tools integrated into Unity for assistance on using certain Shader features. A few examples include `Fix Keywords`, `Unlocked Material List`, `Flipbooks Creator`, and more.

[Learn more about Thry Editor's Integrated Tools.](./tools.md)

## Unity Integrations

Thry Editor integrates itself within the Unity Project from the Menu Bar and in context menus. Here are some of the hidden features you can find.

### Lock / Unlock All

You can quickly and efficiently Lock or Unlock ALL Poiyomi Materials found within an Avatar with just a few clicks. This can be helpful when ensuring things are properly locked prior to uploading.

To access it, `Right-Click` on your Avatar. In the context menu, hover over `Thry -> Materials`, then click either `Lock All` or `Unlock All`.

You can also do the same thing to Folders in your Unity Project by `Right-Clicking` on a Folder that contains Poiyomi Materials as well.