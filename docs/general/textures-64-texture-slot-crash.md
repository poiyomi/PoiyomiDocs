---
sidebar_position: 7
title: 64 Texture Slot Crash
--- 

![Big time crashy boy uwu](/img/general/unity_crash.png)

Unity has a long-standing issue where the engine will crash when a single shader is using more than 64 texture slots across all materials using that shader. These 64 slots are counted whether or not a texture is set in the slot.

This can happen when you have a large number of materials using Poiyomi while unlocked, with many different sections enabled.

To circumvent this issue, you can lock materials when not in use, as that will generate unique shaders for each material.

## Texture crash on open

If you find that your project is crashing as soon as you open it, after you enabled a new feature, there are a couple things that may help fix the issue:

- Remove the `Assets/_PoiyomiShaders` folder from your project files with unity closed, open the project, and temporarily set some materials to the unity Standard Shader. Your material settings will remain in place. Then, re-import the Poiyomi Shaders package, and lock whatever Poiyomi materials you didn't change to Standard.
- Delete the `Library/ShaderCache` folder. This folder can grow very large as materials are locked and unlocked, and can sometimes cause issues. This will not cause any data loss; per [Unity Documentation](https://docs.unity3d.com/2019.3/Documentation/Manual/class-Shader.html), 
  - "Individual shader variant compilation results are cached in the project, under Library/ShaderCache folder. This means that 100% identical shaders or their snippets will reuse previously compiled results. It also means that the shader cache folder can become quite large, if you have a lot of shaders that are changed often. **It is always safe to delete it; it will just cause shader variants to be recompiled.**"
