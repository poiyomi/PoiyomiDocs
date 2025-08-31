---
slug: poiyomi-toon-9-2-43-changes
title: 'Poiyomi Toon 9.2.43 Changelog'
description: Information regarding the release of Poiyomi Toon 9.2.43.
hide_table_of_contents: true
authors:
  poiyomi
tags: [shader, vrchat, updates, update]
---

This update includes some bug fixes and is recommended for all users, including a surprise feature that was added unintentionally (whoops!). The Toon version is now available in the VCC Repository, GitHub, and on BOOTH.

:::danger Unity 2019 Support Discontinued
As of this version release, support for Unity 2019 has been dropped. Please ensure you are using a modern version of Unity, such as 2021.3 or 2022.3, in order to use this version and any versions that follows this one.

If you are still using Unity 2019 for VRM or VSeeFace, consider trying modern software such as [Warudo <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://warudo.app) if you wish to use newer Poiyomi Toon versions from now on.
:::

### Added
- Included the new `LookAt` Vertex Option in the Toon shader by accident, so it's just there now (no longer Pro-only). Enjoy.
  - *Documentation for LookAt is pending. Stay TOONed!*

### Fixes
- Fixed the shader not being able to lock when Color mask was set to none.
- Corrected some issues with light direction not being calculated correctly in Worlds with Light Volumes and Realtime Directional Lights.
- Fixed a bug where Parallax Heightmapping Maps would tile whateverUV was selected across the entire shader.
- Resolved an issue where enabling Parallax Heightmapping would cause the META pass to fail during lock.
- Fixed a locking issue with Parallax Heightmapping.