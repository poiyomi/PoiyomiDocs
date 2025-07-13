---
sidebar_position: 3
title: Stencil
description: Stencils control the behavior of the Stencil Buffer and other associated capabilities. It is used to create effects where one shader can only draw where another has rendered, or cannot render where another has already rendered.
keywords: [stencil, stencils, buffer, render, rendering, poiyomi, shader]
---

The Stencil section gives access to the Stencil buffer and it's associated capabilities. The Stencil buffer can be used to create effects where one shader can only draw where another has rendered, or cannot render where another has already rendered.

To learn more about Stencils, visit the [Unity Documentation <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docs.unity3d.com/Manual/SL-Stencil.html).

:::note Documentation info
Outline Stencil will also be visible here containing the same settings as described below. This allows you to control the Stencil behavior of the [Outlines](/docs/outlines/outlines.md) separate from the base Stencil.
:::

## Stencil Type

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Simple`/`Front Face vs Back Face`

This controls the type of Stencil to use, whether to keep it simple or to compare it to the Front Face against the Back Face of the mesh. For the most part, this is usually set to `Simple`.

## Stencil Reference Value

- `Type`: <PropertyIcon name="int" />**Integer**, Range: `0 - 255`, Default: `0`

What reference value to use for the stencil test. This is the value that the stencil buffer is compared to or written from.

## Stencil ReadMask Value

- `Type`: <PropertyIcon name="int" />**Integer**, Range: `0 - 255`, Default: `255`

Value used to mask what bits of the stencil buffer are read from. This is best thought of as a binary number, which is bitwise ANDed with the stencil buffer value to determine if the read tests true.

## Stencil WriteMask Value

- `Type`: <PropertyIcon name="int" />**Integer**, Range: `0 - 255`, Default: `255`

Value used to mask what bits of the stencil buffer are read from. This is best thought of as a binary number, which is bitwise ANDed with the stencil buffer value to determine if the write tests true.

For a reference on stencil read/write masks, [this thread <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://old.reddit.com/r/Unity3D/comments/mz7b4h/what_does_stencil_readmask_writemask_do/gw06pie/) provides some useful information.

## Stencil Pass/Fail/Zfail Op

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Keep`/`Zero`/`Replace`/`Increment`/`Decrement`/`Invert`/`IncrementWrap`/`DecrementWrap`

Which write operation to apply to the stencil buffer based on each test. Different operations can be used to create different effects based on if the stencil test passes, fails, or passes the stencil test but fails the depth test.

## Stencil Compare Function

- `Type`: <PropertyIcon name="dropdown" />**Dropdown**, Options: `Disabled`/`Never`/`Less`/`Equal`/`LessEqual`/`Greater`/`NotEqual`/`GreaterEqual`/`Always`

What comparison function to use for the stencil test. This is the function that is used to compare the reference value and the value in the stencil buffer. This can be used to create effects where the stencil buffer is used to determine if a pixel should be drawn or not.