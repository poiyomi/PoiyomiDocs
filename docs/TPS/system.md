---
sidebar_position: 4
title: System Specifications
---
# System Specifications
TPS is a Penetration System that uses a combination of Vertex Lights & VRC Contacts to deform a penetrator towards an orifice.

The Animator Setup + Light & Contact placement is done by the [Wizard](#using-the-wizard).
### Lights + Shader
1 or 2 Lights placed on the root & normal of each orifice to tell the shader on the penetrator mesh how to deform itself along a bezier curve.
The range property of the lights encodes its type & the type of the orifice (Hole / Ring).
The normal light is placed 0.01 outwards from the orifice along its normal.
- `Poisition Id Hole`: 0.41
- `Position Id Ring`: 0.42
- `Normal Id`: 0.45

Using different ranges like DPS channels or DPS multiples are not supported yet.

More on the shader in the [Shader](#Shader) section.

### Contacts + Animator
Multiple contact senders & recievers are placed for each orifice & penetrator. They are used to calculate penetration depth & penetrator size in the animators, then use those values to drive shapekeys or buffered depth.
The contact recievers are optional, but the senders are required.
Each contact has its own gameobject, so they can be animated individually.

A more indepth explanation of the animator system can be found in the [Animator](#Animator) section.

# Shader

# Animator