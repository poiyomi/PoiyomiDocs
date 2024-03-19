---
sidebar_position: 5
title: Upgrading from V8.x to V9.x
---

Poiyomi Shaders received a plentiful of improvments and updates for 9.0. While most of everything may not look much different when compared to 8.0, it's worth noting that many areas have been significantly reorganized.

This page covers all the information you need to know when updating from 8.0 to 9.0.

:::info Unity 2022 Recommended
Poiyomi 9.0 is specifically made to work with **Unity 2022**, as that is now the version required by VRChat. To see which specific version VRChat is using, please refer to their [Creators Documentation](https://creators.vrchat.com/sdk/upgrade/current-unity-version/).
:::

:::caution
While Poiyomi 9.0 should still work in Unity 2019, we cannot guarantee it may be supported for long. **We highly recommend using Unity 2022 with Poiyomi 9.0 moving forward.**
:::

To upgrade the shader, delete the `_PoiyomiShaders` folder in your assets.

If you've changed import settings for any included textures, you can delete everything but the `Textures` folder in `_PoiyomiShaders`.

Sometimes when updating, your locked materials may get stuck in the locked state. This happens because the name of the shader changed. Avoid this by unlocking materials before updating. To Fix this, reselect the correct Poiyomi shader for the broken materials.

## Automatic Upgrade

Once you have installed the latest version of Poiyomi Shaders and are ready to upgrade your Materials from 8.x to 9.x, change the shader to `.poiyomi/Poiyomi Toon` or similar. You should see this Green Button appear in the UI. Press it to Apply the Upgrades.

![9.0 Upgrade Banner](/img/general/Poi9UpgradePic.png)

This function will automatically convert any of your existing properties to be 9.0-compatible.

:::caution
Do keep in mind not all will be converted perfectly, so we highly suggest you make a copy of your Materials before going forward with this.
:::

### Older Versions

All previous versions of Poiyomi Shaders are located underneath `.poiyomi/Old Versions` now. They are provided so that you can upgrade seamlessly.

:::caution Only Upgrade from Old Versions
Please do not use Old Versions for new Materials other than to upgrade them.
:::

## Important Changes from 8.x to 9.x

### RGBA Color Masking

The entire Module has been redone completely from scratch, resulting in a better user interface and workflow.

Please take the time to go over everything if you use this feature.

![New RGBA Color Masking Panel](/img/general/9UpRGBAColMask.png)

### Rim Lighting

The Rim Lighting `Blend Mode` Name was changed due to it having incompatibilities with lilToon naming. Therefore, the default mode may have been adjusted.

- **IF Upgrading from 7.3:** The Default was set to `Replace`.
- **IF Upgrading from 8.1:** The Default was set to `Add`.

![Rim Lighting Blend Mode](/img/general/9UpRimBlend.png)

### Matcaps

Matcaps have introduced `Gradient` as a new UV Mode, which works similarly to Iridescence. Use the Matcap Slot for your gradient texture, or click the wide-open field next to the slot to use Thry Gradient Editor to customize your own gradient.

![Matcap Gradient UV Mode](/img/general/MatcapGradient.png)

#### Matcap AudioLink

For the first time ever, all Matcap slots now have AudioLink options available for you to use. This was added to accomodate those who are transitioning from using Iridescence.

![Matcap AudioLink](/img/general/MatcapAudioLink.png)

### Outlines

In previous versions, you would have to select a separate shader variant in order to use Outlines. **This is no longer the case.**

All Outlines features have been reintroduced to the main shader variant `.poiyomi/Poiyomi Toon` as of version 9.0.

### Iridescence

:::info
**Iridescence has been removed to save on compilation time. It has been replaced by Matcaps with the usage of the new `Gradient` UV Mode.**

This is because Matcaps can technically do the same thing as Iridescence.
:::

To compensate for this, there are now 4 Matcap Modules for you to use. In addition, all AudioLink options that were available in Iridescence has been introduced to Matcaps.

## Known Issues

### Alpha Maps

You may have to re-assign your Alpha Map because the name was changed to better align with other Shaders. This may have been fixed already. But just in case it disappeared, simply re-assign the Alpha Map you were using.

### Opaque Rendering

It's possible that a Material set to use Opaque may have "holes" in it after upgrading. To fix this, simply click the `Rendering Preset` dropdown and re-select `Opaque`.

![OpaqueRenderPreset](/img/general/9UpRe-selectOpaque.png)