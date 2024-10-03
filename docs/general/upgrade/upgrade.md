---
sidebar_position: 1
title: Upgrading Guide
description: Guide and Information on how to upgrade from older versions (v7/v8) to the latest version (v9).
keywords: [v7, v8, v9, 9.0, upgrade, major, update, guide, poiyomi, shader]
---
import PoiVideo from '@site/src/components/PoiVideo' 

Over the past few years, Poiyomi Shaders have receive major updates that have modernized almost all the features the shader has to offer, and for good reason.

This page serves as a master guide towards upgrading from older versions (7.3/8.0 and older) to the latest versions (9.0). Read carefully to learn how to account for these changes.

## Prepare to Upgrade

:::warning
Before you attempt to upgrade, it's extremely important to know how to do so properly. Attempting to update versions without heeding the Warnings listed here will risk breakage of your Unity Project. **Please read these instructions CAREFULLY!**
:::

Keep in mind that when updating, your locked materials may get stuck in the locked state. This happens because the name of the shader changed. You can avoid this by unlocking materials prior to updating. Otherwise, you can fix this by re-selecting the correct Poiyomi shader for the broken materials after you're done.

### Manual Unity Package

When replacing or upgrading versions, you must do the following:
1. Delete the `Assets/_PoiyomiShaders` folder in your Project. **DO NOT SKIP THIS STEP!**
   - *If you've changed import settings for any included textures, you can delete everything except the `Textures` folder in `_PoiyomiShaders`.*
2. Import the newest Unity Package into your Project from the Menu Bar via `Assets > Import Package > Custom Package`.
3. Click `Import` when prompted.
4. Done! You are now on the latest version.

:::danger
**DO NOT ATTEMPT to import Poiyomi Shaders over another, or your project may break!**
:::

### VCC

To update the VCC Version later on, simply return to `Manage Project` and click the green-highlighted version to update to the specified version.

The VCC version of Poiyomi Shaders will automatically replace any existing copy of the `_PoiyomiShaders` folder in your Project's Assets in favor of the VCC Version, if it exists. Keep this in mind if you have any other versions, such as the Pro version, in your Project.

## Version Upgrading Guides

Because the shader was reworked in significant ways, there are many differences between the previously most widely used version (v7.x) and the current versions (v8.x and v9.x).

View these sub-articles to learn significant differences to look out for when upgrading to the latest.

<a class="button button--primary" href="/general/upgrade/v7-upgrade">V7.x to V9.x</a>

<a class="button button--primary" href="/general/upgrade/v8-upgrade">V8.x to V9.x</a>

### Older Versions

All previous versions of Poiyomi Shaders are located underneath `.poiyomi/Old Versions` now. They are provided so that you can upgrade seamlessly.

:::warning Only Upgrade from Old Versions
Please do not use Old Versions for new Materials other than to upgrade them.
:::