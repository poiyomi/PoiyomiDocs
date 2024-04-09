---
sidebar_position: 1
title: End User
---
## UI

### Search
Filter the properties by name. The UI will only show headers / properties with the searched name.
![Search](/img/thryeditor/search.png)

### Presets
Left click opens the presets UI. Here you can select a number of presets and see live how they change your material.
Afterwards you can either apply the presets or discard the changes.
![Presets](/img/thryeditor/presets.png)

Right click opens the quick presets UI. Here you can only select one preset, which is applied immediately.
![Presets2](/img/thryeditor/presets2.png)

Learn how to create presets here [TODO](enduser).

### Shader Translator
The shader translator is there to help you swap from one shader to an new one.
Predefined property changes that map your settings from the old shader to the new one will adjust your material to match features as best as possible.
Simply click the button and select the old shader you changed from.
![ShaderTranslator](/img/thryeditor/shadertranslator.png)

### Material Linking
The material linking UI allows you to link sections of multiple materials together.
Afterwards you can change the properties of one material and the linked materials will change as well.
1. Click the `Link Materials` icon next to any section.
2. Select the materials you want to link.
You can also drag and drop materials from the asset view.
3. Click the `Done` button.

![Linking](/img/thryeditor/linking.png)

### Unbound Properties
Pretext:
Materials are a collection of properties. When you change shaders the properties used by the old shader are still saved to the material.
This the benefit that when swapping back to the old shader your settings are still there.
However this can also have unwanted side effects like increased material file size.

Using the `Tools` icon you get options for unbound properties.
1. Unbound textures: Textures that are saved to your material but not used by the shader.
2. Unused textures: Textures that are used by your shader, but inside a disabled section.
3. Unbound properties: Properties that are saved to your material but not used by the shader.

For all these options you can either list them in the output console or remove them from the material.

![unbound](/img/thryeditor/unbound.png)

### VRC Fallback Shader
The Fallback Shader option generates a tag for the material that informs VRChat which shader to use when your shaders are hidden.

![fallback](/img/thryeditor/fallback.png)

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

![packer](/img/thryeditor/packer.png)

### Cross Shader Editor
The Cross Shader Editor is a panel that allows you to mass-edit your Poiyomi Materials, all at once. Anything you edit or change in this panel will be applied to all Materials that are referenced.

There are many ways to use it. To summon the window, open `Thry -> Cross Shader Editor` from the Unity Menu. From there, add each Material to each Slot. Your changes in this Panel will affect all Materials that are referenced in the Panel.

You can also summon the Cross Shader Editor via `Right Click` on your Avatar or GameObject in the Hierarchy, then clicking `Thry -> Materials -> Open All in Cross Shader Editor`. This will automatically add all Poiyomi Materials used on the Object into the Cross Shader Editor list, ready for you to directly edit.

The above also works when multi-selecting your Materials that are in the same folder in your Project's Files.

The Cross Shader Editor supports [Presets](#presets). If using a Preset, it will be applied to all the Materials referenced in the Cross Shader Editor.

:::caution Use the same Shader Variant
The Cross Shader Editor will only work if all Materials referenced are using the same exact Shader variant!
:::

![crossshadereditor](/img/thryeditor/crossshadereditor2.png)

## Settings

The `Settings UI` window can be opened via the `gears icon` in the top left corner of a material. Or using the menu item of the top bar `Thry -> Shader UI -> Settings`.

### Localization
Changes the language of the UI. If a shader supports localization its language will be changed too.

The languages are loaded from `thry_editor_locale.csv`. If you would like to contribute you can edit the file and create a pull request on [github](https://github.com/Thryrallo/ThryEditor).

![localization](/img/thryeditor/localization.png)

### Auto Set Anchor
Skinned Mesh Renderers have one position where they sample the light from. This is called the Anchor.

By default the Anchor is the root of the GameObject. This can cause the lighting of different parts of the model to look different even if they use the same settings, because they sample the light from different positions.

To prevent this, you can set the `Anchor Override` on all skinned mesh renderers to the same position. A recommended position is the center of the model, e.g. the `Chest` bone.

Auto Set Anchor will automatically fill empty Anchor Overrides of Skinned Mesh Renderers on Avatar upload.
`Auto Set Anchor`: Enable / Disable the feature.
`Human Bone Anchor`: The bone to use as anchor. This is only works if the model is a humanoid.
`Object Anchor Name`: The name of the object that is created as anchor.

:::info First-Time Upload Dialogue
When you begin to initiate an Upload for the first time, you will be greeted with a one-time message asking you to enable this feature.

We highly recommend you click `Yes (Recommended)` if it shows up.
:::

![anchor](/img/thryeditor/anchor.png)

## Tools

### Fix Keywords
`Thry -> Shader Tools -> Fix Keywords`
Enables / Disables Keywords on all materials depending on the float value of their properties.

:::info
The latest versions of Poiyomi Shaders do a much better handling of Shader Keywords. Therefore, you shouldn't ever need to use this function.

**You should only Fix Keywords if you know what you are doing, or have been instructed to use it.**
:::

### Unlocked Material List
Lists all materials in the project that are unlocked with an option to lock them.
![unlocked](/img/thryeditor/unlocked.png)

### Flipbooks Creator
Has options to convert a series of textures or a gif into a flipbook.
Flipbooks can be used in shaders e.g. for animated textures.

![flipbook](/img/thryeditor/flipbook.png)

## Add On Modules
Add-ons are modules that can be added to the shader UI to add additional features.
They can be downloaded / removed via the `Settings UI`.

Each module has
1. A checkbox to install / uninstall the module.
2. A description of the module.
3. The installed versiom.
4. The latest version.
5. The url source of the module.

![addons](/img/thryeditor/addons.png)

### Avatar Evaluator (VRAM)
This module adds [Thry's Avatar Tools (Github)](https://github.com/Thryrallo/VRCAvatarTools) to your project.
It allows you to evaluate the VRAM usage of your avatar and find the culprits.
Furthermore is you can get metrics for the following properties:
- Grabpasses
- Blendshapes
- Any State transition counting
- Write default check
- Empty animator states check

### Account Switcher
Quick switching between VRChat accounts in unity.
Does not support 2FA.

### Discord Rich Presence
Adds a rich presence for unity to your discord status.