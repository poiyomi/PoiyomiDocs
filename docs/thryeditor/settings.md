---
sidebar_position: 4
title: Settings
description: Configuration Settings for Thry Editor in Unity.
keywords: [thry, editor, thryeditor, thryrallo, settings, ui, configuration, config, poiyomi, shader]
---

The `Settings UI` window can be opened via the `gears icon` in the top left corner of a material. Or using the menu item of the top bar `Thry -> Shader UI -> Settings`.

## Localization

Changes the language of the UI. If a shader supports localization its language will be changed too.

The languages are loaded from `thry_editor_locale.csv`. If you would like to contribute you can edit the file and create a pull request on [GitHub](https://github.com/Thryrallo/ThryEditor).

<a target="_blank" href="/img/thryeditor/localization.png">
<img src="/img/thryeditor/localization.png" alt="Localization" width="700px"/>
</a>

## Auto Set Anchor

Skinned Mesh Renderers have one position where they sample the light from. This is called the Anchor.

By default the Anchor is the root of the GameObject. This can cause the lighting of different parts of the model to look different even if they use the same settings, because they sample the light from different positions.

To prevent this, you can set the `Anchor Override` on all skinned mesh renderers to the same position. A recommended position is the center of the model, e.g. the `Chest` bone.

<a target="_blank" href="/img/thryeditor/anchor.png">
<img src="/img/thryeditor/anchor.png" alt="Anchor" width="700px"/>
</a>

Auto Set Anchor will automatically fill empty Anchor Overrides of Skinned Mesh Renderers on Avatar upload.
- `Auto Set Anchor`: Enable / Disable the feature.
- `Human Bone Anchor`: The bone to use as anchor. This is only works if the model is a humanoid.
- `Object Anchor Name`: The name of the object that is created as anchor.

:::info First-Time Upload Dialogue
When you begin to initiate an Upload for the first time, you will be greeted with a one-time message asking you to enable this feature.

We highly recommend you click `Yes (Recommended)` if this message shows up.

<a target="_blank" href="/img/general/bad-lighting-fix-message.png">
<img src="/img/general/bad-lighting-fix-message.png" alt="ThryEditor Bad Lighting Auto-Fix Dialogue" width="400px"/>
</a>
:::

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