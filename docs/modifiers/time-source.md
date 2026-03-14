---
sidebar_position: 0
title: Time Source
description: Time synchronization of the shader in VRChat.
keywords: [time, sync, synchronization, special effect, special fx]
---

Time Source configures how the shader should synchronize the timing of material animations across the network in VRChat. This takes advantage of the `_VRChatTime` shader globals, the same system utilized in Udon returned by `Networking.GetServerTimeInMilliseconds` to sync animations across clients, with the option to use Universal Coordinated Time in the lower 32 bits.

Extended information on the functionality of this system is documented on the [VRChat Creators Docs <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://creators.vrchat.com/worlds/udon/vrc-graphics/vrchat-shader-globals/#vrchat-time-global).

:::warning VRChat-only Features
**Some of these settings below only work in VRChat!**

If you are using Poiyomi Shaders for other games, you may want to keep this setting configured to `Unity Default`.
:::

## Time Source

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Unity Default`/`VRChat Network Time`/`VRChat UTC`

Sets the time synchronization method to use across the material. You can choose to use Unity's defaults, or use VRChat's Network Time or UTC.

- `Unity Default`: Uses the defaults in Unity, which may be de-synced across clients.
- `VRChat Network Time`: Sets the timing of shader animations with VRChat's Networking time in milliseconds as defined by their shader globals.
  - *Please note that true synchronization fully depends on each client's network latency. This means if the Instance is laggy or experiencing higher latency, there may be de-syncing issues.*
- `VRChat UTC`: Sets the timing of shader animations to use Universal Coordinated Time (UTC), which is the lower 32 bits of the current UTC time in seconds since the Unix epoch.
