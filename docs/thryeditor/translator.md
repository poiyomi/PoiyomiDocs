---
sidebar_position: 7
title: Shader Translator
description: System used to assist in translating properties from a different Shader to Poiyomi.
keywords: [translator, shader translator, thryeditor, thryrallo, thry, editor, shader, property, properties]
---

The Shader Translator is there to help you swap from one shader to an new one. Predefined property changes that map your settings from the old shader to the new one will adjust your material to match features as best as possible.

This system also allows easy upgrading from prior versions of Poiyomi, or to convert a Material from using a different Toon Shader to Poiyomi instead. The function can be accessed at any time by clicking the Shader Icon.

<a target="_blank" href="/img/thryeditor/Thry_Translator.png">
<img src="/img/thryeditor/Thry_Translator.png" alt="Presets Feature" width="800px"/>
</a>

## Automatic Suggestion

When you change a Material from a recognized Shader to Poiyomi, a Green Button will appear suggesting you to run the Shader Translator. It is recommended you click on it when prompted, so that certain properties are correctly translated to work in Poiyomi Shaders.

## Current Functions

### Poi Upgrade: 8.X to 9.0

This translation function will assist in translating properties from previous 8.0 versions of Poiyomi Shaders to be 9.0-compliant.

### LilToon to Poiyomi

Adapts settings that were used on a LilToon Material when it was changed to Poiyomi. When it is run, the Script will run a scan of all the properties in the LilToon Material and translate them to matching features in Poiyomi Shaders.