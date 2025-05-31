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

### Added
- Included the new `LookAt` Vertex Option in the Toon shader by accident, so it's just there now (no longer Pro-only). Enjoy.
  - *Documentation for LookAt is pending. Stay TOONed!*

### Fixes
- Fixed the shader not being able to lock when Color mask was set to none.
- Corrected some issues with light direction not being calculated correctly in Worlds with Light Volumes and Realtime Directional Lights.
- Fixed a bug where Parallax Heightmapping Maps would tile whateverUV was selected across the entire shader.
- Resolved an issue where enabling Parallax Heightmapping would cause the META pass to fail during lock.
- Fixed a locking issue with Parallax Heightmapping.