---
sidebar_position: 3
title: Cross Shader Editor
description: The Cross Shader Editor is a special tool included in Thry Editor that allows the user to easily edit multiple Poiyomi Materials, all at once.
keywords: [cross shader editor, cross-shader, editor, cross, shader, thry, editor, thryeditor, poiyomi, shader]
---

The Cross Shader Editor, first introduced with Poiyomi 9.0, allows the user to easily edit multiple Poiyomi Materials all at once. It is a special panel that can be summoned either manually, directly, or indirectly.

## Prerequisites

**Before using the Cross Shader Editor, you must know that any Materials you wish to multi-edit are using Poiyomi Shaders!** The Cross Shader Editor does not support editing Materials that use a different shader than another.

## Opening the Cross Shader Editor

There are multiple ways to open the Cross Shader Editor throughout Unity.

### Manually

Navigate to `Thry -> Cross Shader Editor` in the Unity Menu Bar to open the Panel.

By default, there will be nothing referenced. You need to add Materials of your choosing that is using Poiyomi Shaders by clicking `Add` and then selecting the ones you are using.

Once they're all linked up, anything you change on this Panel will directly affect ALL of the Materials that you listed.

### From Your Avatar

In your Unity Hierarchy, you can `Right-Click` on your Avatar. In the context menu, go to `Thry -> Materials -> Open All in Cross Shader Editor`. This will open ALL Poiyomi Materials and automatically list them in the Cross Shader Editor Panel.

:::warning
This option does not work if your Avatar is using different Shaders!
:::

### From Your Files

In your Unity Project Files, you can use `Ctrl + Left-Click` to multi-select Materials. After doing so, you can `Right-Click` and do `Thry -> Materials -> Open in Cross Shader Editor`. This will summon the Panel with all selected Materials already pre-added to the Editor.

This also works if you `Right-Click` on a Folder and select the same option. It would open all Shaders inside the folder in the Cross Shader Editor.

## Usage

Once you opened the Cross Shader Editor and added your Materials, the UI will show you the same Material interface for you to begin editing. Properties that share the same-exact setting across all Materials will look normal, while some may be shown that it shares multiple settings.

:::info
If you are editing Materials that have different settings between each one, the Floats and Checkmarks will be indicated with a `-` character. If you change properties that show that, it will override the setting on all of them.
:::

<a target="_blank" href="/img/thryeditor/crossshadereditor2.png">
<img src="/img/thryeditor/crossshadereditor2.png" alt="Cross Shader Editor" width="600px"/>
</a>

*Example of the Cross Shader Editor's User Interface.*

### Supported Functions

Using the Cross Shader Editor supports the following functions. Usage of these functions will affect ALL Materials currently referenced in the Editor:
- Presets
- Shader Translator
- Unbound Properties
- VRC Fallback Shader