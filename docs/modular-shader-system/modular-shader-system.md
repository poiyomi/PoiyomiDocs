---
sidebar_position: 1
title: Modular Shader System
description: A guide to creating shader modules for the Poiyomi Shaders framework.
keywords: [modular, shader, module, template, poiyomi, development, custom, poiTemplateCollection, VRLM, VRLT, VRLTC]
---

Poiyomi Shaders is put together using the Modular Shader System, which allows for modular architecture on each individual features. This is a comprehensive guide to creating shader modules for the Poiyomi Shaders framework.

:::info Attention Shader Developers
For security reasons, the Modular Shader components and modules referenced here are only exposed for end-user access in the Poiyomi Pro shader package, as it also exposes Pro-only modules.

To learn more on how to obtain the Poiyomi Pro version, see [Download & Install: Poiyomi Pro](/docs/download/download.md#poiyomi-pro).
:::

## Overview

The Poiyomi Shader system uses a modular architecture where individual features are defined as separate modules. Each module consists of two main files:

1. **Module Definition** (`.asset`) - YAML file defining module metadata and template references
2. **Template Collection** (`.poiTemplateCollection`) - Contains the actual shader code templates

## File Structure

```
Poi_FeatureModules/
├── Poi_YourModule/
│   ├── VRLM_PoiYourModule.asset           # Module definition
│   ├── VRLM_PoiYourModule.asset.meta
│   ├── VRLTC_PoiYourModule.poiTemplateCollection  # Shader code
│   └── VRLTC_PoiYourModule.poiTemplateCollection.meta
```

### Naming Convention

| Prefix | Type |
|--------|------|
| `VRLM_` | Module Definition (asset) |
| `VRLT_` | Single Template (poiTemplate) |
| `VRLTC_` | Template Collection (poiTemplateCollection) |

### Key Fields

| Field | Description |
|-------|-------------|
| `Id` | Unique identifier for the module |
| `ModuleDependencies` | List of required modules |
| `IncompatibleWith` | Modules that conflict with this one |
| `Templates` | References to template sections with keyword mappings |
| `Queue` | Priority order (lower = earlier in shader) |

## Template Collection (.poiTemplateCollection)

Templates contain shader code organized into named sections. Each section is marked with `#T#SectionName`.

### Template Structure

```hlsl
#T#YourModuleProperties
//ifex _EnableYourModule==0
[HideInInspector] m_start_yourModule (" Your Module--{reference_property:_EnableYourModule}", Float) = 0
[HideInInspector][ThryToggle(POI_YOUR_MODULE)]_EnableYourModule ("Enable", Float) = 0
_YourProperty ("Property Name", Range(0, 1)) = 0.5
[HideInInspector] m_end_yourModule ("", Float) = 0
//endex

#T#YourModuleKeywords
//ifex _EnableYourModule==0
#pragma shader_feature_local POI_YOUR_MODULE
//endex

#T#YourModuleVariables
//ifex _EnableYourModule==0
#ifdef POI_YOUR_MODULE
    float _YourProperty;
#endif
//endex

#T#YourModuleFunction
//ifex _EnableYourModule==0
#ifdef POI_YOUR_MODULE
    void ApplyYourModule(inout PoiFragData poiFragData, in PoiMesh poiMesh)
    {
        // Your shader logic here
    }
#endif
//endex

#T#YourModuleFunctionCall
//ifex _EnableYourModule==0
#ifdef POI_YOUR_MODULE
    ApplyYourModule(poiFragData, poiMesh);
#endif
//endex
```

## Common Keywords (Injection Points)

Keywords define where code is injected into the shader pipeline. Keywords are marked with `#K#` in templates.

### Top-Level Shader Structure

These keywords define the overall shader structure and pass ordering:

| Keyword | Description |
|---------|-------------|
| `SHADER_TAGS` | Shader-level tags and properties |
| `DEPTH_NORMAL_PASS` | Depth normals pass injection |
| `GRAB_PASS` | Grab pass for screen effects |
| `EARLY_Z_PASS` | Early Z depth pass |
| `EARLY_OUTLINE_PASS` | Early outline pass (before base) |
| `BASE_PASS` | Main forward base pass |
| `FUR_BASE_PASS` | Fur geometry base pass |
| `ADD_PASS` | Additive lighting pass |
| `BASE_PASS_TWO` | Second base pass (two-pass shaders) |
| `ADD_PASS_TWO` | Second additive pass |
| `OUTLINE_PASS` | Outline rendering pass |
| `SHADOW_PASS` | Shadow casting pass |
| `META_PASS` | Lightmapping/GI meta pass |

### Property Categories

Properties are organized into UI categories:

| Keyword | Category |
|---------|----------|
| `TOP_PROPERTIES` | Top-level shader properties |
| `MAIN_PROPERTIES` | Color & Normals section |
| `2NDPASS_PROPERTIES` | Second pass properties |
| `OUTLINE_PROPERTIES` | Outline section |
| `LIGHTING_PROPERTIES` | Shading section |
| `SPECIALFX_PROPERTIES` | Special FX section |
| `VERTEX_PROPERTIES` | Vertex Options section |
| `GRABPASS_PROPERTIES` | Grab Pass section |
| `GLOBAL_PROPERTIES` | Global Data and Masks |
| `UV_PROPERTIES` | UV modification properties |
| `POSTPROCESSING_PROPERTIES` | Post Processing section |
| `MODIFIER_PROPERTIES` | Global Modifiers section |
| `EXTRAS_PROPERTIES` | Extra/miscellaneous properties |
| `THIRDPARTY_PROPERTIES` | Third Party integrations |
| `RENDERING_PROPERTIES` | Rendering options section |

### Generic Pass Keywords

These keywords are available in `VRLT_PoiGenericPass.poiTemplate` for all passes:

| Keyword | Description |
|---------|-------------|
| `PRAGMA_DIRECTIVES` | Shader pragma statements |
| `REQUIREMENTS` | Shader requirements/features |
| `SHADER_KEYWORDS` | Shader feature keywords |
| `MACROS_AND_DEFINES` | Preprocessor macros and defines |
| `INCLUDES` | Include file directives |

### Pass-Specific Pragma & Keywords

Each pass type has its own keyword and pragma injection points:

| Pass | Keywords | Pragma Programs |
|------|----------|-----------------|
| Base | `BASE_PASS_KEYWORDS` | `BASE_PASS_PRAGMA_PROGRAMS` |
| Add | `ADD_PASS_KEYWORDS` | `ADD_PASS_PRAGMA_PROGRAMS` |
| Shadow | `SHADOW_PASS_KEYWORDS` | `SHADOW_PASS_PRAGMA_PROGRAMS` |
| Meta | `META_PASS_KEYWORDS` | `META_PASS_PRAGMA_PROGRAMS` |
| Outline | `OUTLINE_PASS_KEYWORDS` | `OUTLINE_PASS_PRAGMA_PROGRAMS` |
| EarlyZ | `EARLYZ_PASS_KEYWORDS` | `EARLYZ_PASS_PRAGMA_PROGRAMS` |
| DepthNormal | `DEPTHNORMAL_PASS_KEYWORDS` | - |
| LilFur | `LILFUR_PASS_KEYWORDS` | `LILFUR_PASS_PRAGMA_PROGRAMS` |
| Base Two | `BASE_PASS_TWO_KEYWORDS` | `BASE_PASS_TWO_PRAGMA_PROGRAMS` |
| Add Two | `ADD_PASS_TWO_KEYWORDS` | `ADD_PASS_TWO_PRAGMA_PROGRAMS` |

### Stencil Injection Points

| Keyword | Pass |
|---------|------|
| `BASE_PASS_STENCIL` | Base pass stencil settings |
| `ADD_PASS_STENCIL` | Add pass stencil settings |
| `SHADOW_PASS_STENCIL` | Shadow pass stencil settings |
| `META_PASS_STENCIL` | Meta pass stencil settings |
| `EARLYZ_PASS_STENCIL` | EarlyZ pass stencil settings |
| `DEPTHNORMAL_PASS_STENCIL` | Depth normal stencil settings |
| `BASETWO_PASS_STENCIL` | Base two pass stencil |
| `ADDTWO_PASS_STENCIL` | Add two pass stencil |

### Variable Declarations

Variables must be declared in the correct pass sections:

| Keyword | Usage |
|---------|-------|
| `BASE_PROPERTY_VARIABLES` | Variables for base pass |
| `ADD_PROPERTY_VARIABLES` | Variables for add pass |
| `SHADOW_PROPERTY_VARIABLES` | Variables for shadow pass |
| `META_PROPERTY_VARIABLES` | Variables for meta pass |
| `OUTLINE_PROPERTY_VARIABLES` | Variables for outline pass |
| `EARLYZ_PROPERTY_VARIABLES` | Variables for early Z pass |
| `DEPTHNORMAL_PROPERTY_VARIABLES` | Variables for depth normal pass |
| `LILFUR_PROPERTY_VARIABLES` | Variables for LilFur pass |
| `BASETWO_PROPERTY_VARIABLES` | Variables for base two pass |
| `ADDTWO_PROPERTY_VARIABLES` | Variables for add two pass |

### Vertex Shader Keywords

Vertex program injection points (per pass - replace `BASE` with pass name):

| Keyword | Stage |
|---------|-------|
| `VERTEX_BASE_DATA_STRUCTURES` | Vertex data structure definitions |
| `VERTEX_BASE_FUNCTIONS_EARLY` | Early vertex function definitions |
| `VERTEX_BASE_FUNCTIONS` | Main vertex function definitions |
| `VERTEX_BASE_FUNCTIONS_LATE` | Late vertex function definitions |
| `VERTEX_BASE_PROGRAM` | Main vertex program code |

### Vertex Modification Keywords

These keywords are used within the vertex program for modifying vertex data:

| Keyword | Timing | Description |
|---------|--------|-------------|
| `VERTEX_INPUT_MODS` | Very early | Modify input vertex data |
| `VERTEX_MODS_EARLY` | Early | Early vertex modifications |
| `VERTEX_MODS` | Main | Primary vertex modifications |
| `VERTEX_MODS_LATE` | Late | Late vertex modifications |
| `VERTEX_MODS_PENETRATION` | Post-offset | TPS/DPS penetration systems |
| `VERTEX_MODS_PRE_CLIPPOS` | Before clip | Before clip position calculation |
| `VERTEX_MODS_POST_CLIPPOS` | After clip | After clip position calculation |
| `VERTEX_MODS_LILFUR` | Fur-specific | LilFur vertex modifications |
| `VERTEX_MODS_FINAL` | Final | Final vertex modifications |
| `vertexOutData` | Data struct | Additional vertex output data |

### Geometry & Tessellation Keywords

| Keyword | Description |
|---------|-------------|
| `HULLDOMAIN_BASE_PROGRAM` | Hull/Domain shader for base pass |
| `HULLDOMAIN_ADD_PROGRAM` | Hull/Domain shader for add pass |
| `HULLDOMAIN_SHADOW_PROGRAM` | Hull/Domain shader for shadow pass |
| `HULLDOMAIN_META_PROGRAM` | Hull/Domain shader for meta pass |
| `HULLDOMAIN_DEPTHNORMAL_PROGRAM` | Hull/Domain shader for depth normal |
| `HULLDOMAIN_LILFUR_PROGRAM` | Hull/Domain shader for LilFur |
| `GEOMETRY_BASE_PROGRAM` | Geometry shader for base pass |
| `GEOMETRY_ADD_PROGRAM` | Geometry shader for add pass |
| `GEOMETRY_SHADOW_PROGRAM` | Geometry shader for shadow pass |
| `GEOMETRY_META_PROGRAM` | Geometry shader for meta pass |
| `GEOMETRY_DEPTHNORMAL_PROGRAM` | Geometry shader for depth normal |
| `GEOMETRY_EARLYZ_PROGRAM` | Geometry shader for early Z |
| `GEOMETRY_LILFUR_PROGRAM` | Geometry shader for LilFur |

### Fragment Shader Keywords

Fragment program injection points (per pass - replace `BASE` with pass name):

| Keyword | Stage |
|---------|-------|
| `FRAGMENT_BASE_DATA_STRUCTURES` | Fragment data structure definitions |
| `FRAGMENT_BASE_FUNCTIONS_EARLY` | Early fragment function definitions |
| `FRAGMENT_BASE_FUNCTIONS` | Main fragment function definitions |
| `FRAGMENT_BASE_FUNCTIONS_LATE` | Late fragment function definitions |
| `FRAGMENT_BASE_PROGRAM` | Main fragment program |

### Fragment Execution Pipeline

These keywords control the fragment shader execution order:

| Keyword | Timing | Description |
|---------|--------|-------------|
| `FRAGMENT_BASE_DECLARATIONS` | Start | Variable declarations |
| `FRAGMENT_BASE_INIT_EARLY` | Init | Early initialization |
| `FRAGMENT_BASE_INIT` | Init | Main initialization |
| `FRAGMENT_BASE_INIT_LATE` | Init | Late initialization |
| `FRAGMENT_BASE_COLOR_EARLY` | Color | Early color modifications |
| `FRAGMENT_BASE_COLOR` | Color | Main color calculations |
| `FRAGMENT_BASE_COLOR_LATE` | Color | Late color modifications |
| `FRAGMENT_BASE_LIGHTING_EARLY` | Lighting | Early lighting setup |
| `FRAGMENT_BASE_LIGHTING` | Lighting | Main lighting calculations |
| `FRAGMENT_BASE_LIGHTING_LATE` | Lighting | Post-lighting effects |
| `FRAGMENT_BASE_EMISSION_EARLY` | Emission | Early emission |
| `FRAGMENT_BASE_EMISSION` | Emission | Main emission calculations |
| `FRAGMENT_BASE_EMISSION_LATE` | Emission | Late emission effects |
| `FRAGMENT_BASE_RETURN` | Return | Before final return |
| `FRAGMENT_BASE_ALPHA_LATE` | Alpha | Final alpha modifications |

The same pattern applies to other passes: `FRAGMENT_ADD_*`, `FRAGMENT_OUTLINE_*`, `FRAGMENT_LILFUR_*`, etc.

### Data Initialization Keywords

| Keyword | Description |
|---------|-------------|
| `POI_MESH_PROPERTIES` | PoiMesh struct properties |
| `POI_CAM_PROPERTIES` | PoiCam struct properties |
| `POI_LIGHT_PROPERTIES` | PoiLight struct properties |
| `POI_VERTEX_LIGHTS_PROPERTIES` | Vertex light properties |
| `MESH_DATA_INIT` | Mesh data initialization |
| `MESH_DATA_POST_INIT` | Post mesh initialization |
| `MAIN_TEXTURE_SAMPLE` | Main texture sampling |
| `FRAGMENT_NORMAL_CALCULATIION` | Normal calculation |
| `CAMERA_DATA_INIT` | Camera data initialization |

### Feature-Specific Keywords

Some modules expose their own injection points:

| Keyword | Module | Description |
|---------|--------|-------------|
| `BASE_COLOR_MOD` | Main | Base color modification |
| `TANGENT_NORMAL_INJECTION` | Main | Normal map injection |
| `BASE_LIGHTDATA_MOD` | Light Data | Light data modification |
| `BASE_AFTER_ATTENUATION` | Light Data | After attenuation calculation |
| `BASE_REALISTIC_MOD` | Shading | Realistic shading modifications |
| `MOCHIE_METALLIC_SMOOTHNESS_MOD` | Metallics | Metallic/smoothness mods |
| `POI_EMISSION0_MODS` | Emission | Emission 0 modifications |
| `LILFUR_TWO_PASS_PROPS` | LilFur | Fur two-pass properties |

## Core Data Structures

### PoiFragData

Fragment output data for color, lighting, and material properties.

```hlsl
struct PoiFragData {
    float3 baseColor;           // Albedo color before lighting
    float3 finalColor;          // Final color after all effects
    float alpha;                // Transparency
    float3 emission;            // Emissive color
    
    // PBR Properties
    float smoothness;           // Primary smoothness (0-1)
    float smoothness2;          // Secondary smoothness for layered materials
    float metallic;             // Metallic value (0-1)
    float specularMask;         // Mask for specular highlights
    float reflectionMask;       // Mask for reflections
    
    float toggleVertexLights;   // Enable/disable vertex lights contribution
};
```

### PoiMesh

Mesh geometry, UVs, and vertex data.

```hlsl
struct PoiMesh {
    // Normals
    float3 normals[2];          // [0] = vertex normal, [1] = fragment/normal-mapped
    float3 objNormal;           // Object-space normal
    float3 tangentSpaceNormal;  // Normal in tangent space
    float3 binormal[2];         // Binormal vectors
    float3 tangent[2];          // Tangent vectors
    
    // Position
    float3 worldPos;            // World-space position
    float3 localPos;            // Object-space position
    float3 objectPosition;      // Object pivot position in world space
    
    // Face
    float isFrontFace;          // 1.0 = front face, 0.0 = back face
    
    // Vertex Data
    float4 vertexColor;         // Vertex color RGBA
    float4 lightmapUV;          // Lightmap UVs
    
    // UV Channels (10 total)
    // [0-3] = UV0-UV3
    // [4]   = Panosphere UV
    // [5]   = World position XZ
    // [6]   = Polar UV
    // [7]   = Distorted UV
    // [8]   = Local position
    // [9]   = Matcap UV
    float2 uv[10];
    
    // Parallax
    float2 parallaxUV;          // UV offset from parallax
    float2 dx;                  // Screen-space derivatives X
    float2 dy;                  // Screen-space derivatives Y
    
    uint isRightHand;           // Handedness for normal mapping
};
```

### PoiCam

Camera and view information.

```hlsl
struct PoiCam {
    float3 viewDir;             // View direction (pixel to camera)
    float3 forwardDir;          // Camera forward direction
    float3 worldPos;            // Camera world position
    float distanceToVert;       // Distance from camera to vertex
    
    // Screen Space
    float4 clipPos;             // Clip-space position
    float4 screenSpacePosition; // Screen-space position
    float4 posScreenSpace;      // Normalized screen position
    float2 posScreenPixels;     // Screen position in pixels
    float2 screenUV;            // Screen UVs (0-1)
    
    // Reflections
    float3 reflectionDir;       // Reflection direction
    float3 vertexReflectionDir; // Vertex-based reflection direction
    float3 tangentViewDir;      // View direction in tangent space
    
    float vDotN;                // View dot normal
    float4 worldDirection;      // World-space direction
};
```

### PoiLight

Lighting calculations and light source data.

```hlsl
struct PoiLight {
    // Light Direction & Color
    float3 direction;           // Light direction
    float3 directColor;         // Direct light color
    float3 indirectColor;       // Indirect/ambient light color
    float3 halfDir;             // Half vector (view + light)
    
    // Attenuation
    float attenuation;          // Light attenuation
    float attenuationStrength;  // Attenuation intensity
    float occlusion;            // Ambient occlusion
    float shadowMask;           // Shadow mask value
    float detailShadow;         // Detail shadow value
    
    // Dot Products
    float nDotL;                // Normal dot light direction
    float nDotV;                // Normal dot view direction
    float nDotH;                // Normal dot half vector
    float nDotVCentered;        // Centered nDotV
    float vertexNDotL;          // Vertex-based nDotL
    float vertexNDotV;          // Vertex-based nDotV
    float vertexNDotH;          // Vertex-based nDotH
    float lDotv;                // Light dot view
    float lDotH;                // Light dot half
    float nDotLSaturated;       // Clamped nDotL (0-1)
    float nDotLNormalized;      // Normalized nDotL (0-1 range)
    
    // Light Maps
    float lightMap;             // Light map value
    float lightMapNoAttenuation;// Light map without attenuation
    float3 rampedLightMap;      // Toon ramp applied light map
    
    // Final Lighting
    float3 finalLighting;       // Combined final lighting
    float3 finalLightAdd;       // Additive light contribution
    
    // LTCGI
    float3 LTCGISpecular;       // LTCGI specular contribution
    float3 LTCGIDiffuse;        // LTCGI diffuse contribution
    
    // Luminance
    float directLuminance;      // Direct light luminance
    float indirectLuminance;    // Indirect light luminance
    float finalLuminance;       // Final combined luminance
    
    // Add Pass Only
    #ifdef POI_PASS_ADD
    float additiveShadow;       // Shadow for additive pass
    #endif
    
    // Vertex Lights (4 non-important lights)
    #if defined(VERTEXLIGHT_ON)
    float4 vDotNL;              // Per-light nDotL
    float4 vertexVDotNL;        // Vertex-based per-light nDotL
    float3 vColor[4];           // Light colors
    float4 vCorrectedDotNL;     // Corrected per-light nDotL
    float4 vAttenuation;        // Per-light attenuation
    float4 vSaturatedDotNL;     // Clamped per-light nDotL
    float3 vPosition[4];        // Light positions
    float3 vDirection[4];       // Light directions
    float3 vFinalLighting;      // Combined vertex lighting
    float3 vHalfDir[4];         // Per-light half vectors
    half4 vDotNH;               // Per-light nDotH
    half4 vertexVDotNH;         // Vertex-based per-light nDotH
    half4 vDotLH;               // Per-light lDotH
    #endif
};
```

### PoiMods

Global modifiers, masks, and AudioLink data.

```hlsl
struct PoiMods {
    float4 Mask;                // Legacy mask (deprecated, use globalMask)
    
    // AudioLink
    float audioLink[5];         // [0]=Bass, [1]=LowMid, [2]=HighMid, [3]=Treble, [4]=Volume
    float audioLinkAvailable;   // 1.0 if AudioLink is present
    float audioLinkVersion;     // AudioLink version number
    float4 audioLinkTexture;    // Raw AudioLink texture sample
    float ALTime[8];            // AudioLink chronotensity time values
    
    // Detail Masks
    float2 detailMask;          // Detail texture masks
    float2 backFaceDetailIntensity; // Detail intensity for back faces
    
    // Global Systems
    float globalEmission;       // Global emission multiplier
    float4 globalColorTheme[12];// Theme colors (4 user + 4 ColorChord + 4 AL Theme)
    float globalMask[16];       // 16 global mask channels (4 textures × 4 RGBA)
};
```

### PoiVertexLights

Individual vertex light data (used in vertex lighting calculations).

```hlsl
struct PoiVertexLights {
    float3 direction;           // Light direction
    float3 color;               // Light color
    float attenuation;          // Light attenuation
};
```

## Preprocessor Directives

### //ifex Blocks

Conditionally exclude code based on material properties:

```hlsl
//ifex _EnableFeature==0
// Code only included if _EnableFeature != 0
//endex
```

### Texture Property Guards

Optimize by only including texture sampling when texture is assigned:

```hlsl
#if defined(PROP_YOURTEXTURE) || !defined(OPTIMIZER_ENABLED)
    Texture2D _YourTexture;
#endif
```

### Keyword Guards

Wrap code in shader feature checks:

```hlsl
#ifdef POI_YOUR_MODULE
    // Module code
#endif
```

## Duplicate Module Support

For modules that can have multiple instances (like Emission 0, 1, 2...):

```yaml
AllowDuplicates: 1
ForceDuplicateLogic: 1
```

Use placeholders in templates:
- `__mIDx__` - Replaced with instance index (0, 1, 2...)
- `__mID__` - Replaced with module ID string
- `<ms_include_in_first>{ }` - Only in first instance
- `<ms_include_in_not_first>{ }` - Only in subsequent instances
- `<ms_include_in_last>{ }` - Only in last instance

## ThryEditor Property Attributes

Common UI attributes for material properties:

| Attribute | Purpose |
|-----------|---------|
| `[HideInInspector]` | Hide from default inspector |
| `[ThryToggle(KEYWORD)]` | Toggle that enables shader keyword |
| `[ThryToggleUI(true)]` | Toggle without keyword |
| `[ThryWideEnum(...)]` | Wide dropdown with named options |
| `[sRGBWarning]` | Warn if texture is sRGB when it shouldn't be |
| `[Gradient]` | Gradient texture picker |
| `[Vector2]` | 2D vector input |
| `[VectorLabel(X, Y)]` | Labeled vector components |
| `[Curve]` | Animation curve texture |

### UI Organization

```hlsl
// Foldout sections
[HideInInspector] m_start_sectionName (" Section Title--{reference_property:_EnableProperty}", Float) = 0
// ... properties ...
[HideInInspector] m_end_sectionName ("", Float) = 0

// Subsections
[HideInInspector] s_start_subsection ("Subsection--{reference_property:_EnableSub}", Float) = 0
// ... properties ...
[HideInInspector] s_end_subsection ("", Float) = 0
```

### Conditional Visibility

```hlsl
_Property ("Name--{condition_showS:_OtherProperty==1}", Float) = 0
```

## Helper Functions

Common utility functions available in modules:

```hlsl
// UV helpers
float2 poiUV(float2 uv, float4 st);  // Apply scale/offset
float2 POI2D_SAMPLER_PAN(tex, sampler, uv, pan);  // Sample with panning

// Color operations
float3 poiThemeColor(PoiMods mods, float3 color, float themeIndex);
float3 hueShift(float3 color, float shift, int colorSpace, int mode);
float calculateluminance(float3 color);

// Masking
float maskBlend(float base, float mask, int blendType);
void applyToGlobalMask(inout PoiMods mods, int index, int blendType, float value);

// Math helpers
float inverseLerp(float a, float b, float value);
float remap(float value, float inMin, float inMax, float outMin, float outMax);
float poiMax(float3 color);
float poiEdgeLinear(float value, float border, float blur);
```

## AudioLink Integration

```hlsl
#ifdef POI_AUDIOLINK
    if (poiMods.audioLinkAvailable)
    {
        float bassValue = poiMods.audioLink[0];     // Bass
        float lowMidValue = poiMods.audioLink[1];   // Low Mid
        float highMidValue = poiMods.audioLink[2];  // High Mid
        float trebleValue = poiMods.audioLink[3];   // Treble
        float volumeValue = poiMods.audioLink[4];   // Volume
    }
#endif
```

## Best Practices

1. **Always wrap code in feature guards** - Use `#ifdef` and `//ifex` to exclude unused code
2. **Use texture property guards** - Only declare textures when they might be used
3. **Follow naming conventions** - Consistent prefixes help organization
4. **Declare variables in correct sections** - Match passes where they're used
5. **Use appropriate queue values** - Lower values execute first
6. **Test with optimizer enabled** - Ensure guards work correctly
7. **Provide documentation links** - Use `button_help` for tutorials

## Example: Simple Color Tint Module

```hlsl
#T#ColorTintProperties
//ifex _EnableColorTint==0
[HideInInspector] m_start_colorTint (" Color Tint--{reference_property:_EnableColorTint}", Float) = 0
[HideInInspector][ThryToggle(POI_COLOR_TINT)]_EnableColorTint ("Enable", Float) = 0
_TintColor ("Tint Color--{reference_property:_TintColorThemeIndex}", Color) = (1, 1, 1, 1)
[HideInInspector][ThryWideEnum(Off, 0, Theme Color 0, 1, Theme Color 1, 2, Theme Color 2, 3, Theme Color 3, 4)] _TintColorThemeIndex ("", Int) = 0
_TintStrength ("Strength", Range(0, 1)) = 1
[HideInInspector] m_end_colorTint ("", Float) = 0
//endex

#T#ColorTintKeywords
//ifex _EnableColorTint==0
#pragma shader_feature_local POI_COLOR_TINT
//endex

#T#ColorTintVariables
//ifex _EnableColorTint==0
#ifdef POI_COLOR_TINT
    float4 _TintColor;
    float _TintColorThemeIndex;
    float _TintStrength;
#endif
//endex

#T#ColorTintFunction
//ifex _EnableColorTint==0
#ifdef POI_COLOR_TINT
    void ApplyColorTint(inout PoiFragData poiFragData, in PoiMods poiMods)
    {
        float3 tint = poiThemeColor(poiMods, _TintColor.rgb, _TintColorThemeIndex);
        poiFragData.baseColor.rgb = lerp(poiFragData.baseColor.rgb, poiFragData.baseColor.rgb * tint, _TintStrength);
    }
#endif
//endex

#T#ColorTintFunctionCall
//ifex _EnableColorTint==0
#ifdef POI_COLOR_TINT
    ApplyColorTint(poiFragData, poiMods);
#endif
//endex
```

## Global Masks System

The shader provides 16 global mask channels (4 textures × 4 RGBA channels) that can be shared between modules.

### Mask Indices

| Index | Channel | Index | Channel |
|-------|---------|-------|---------|
| 0 | 1R | 8 | 3R |
| 1 | 1G | 9 | 3G |
| 2 | 1B | 10 | 3B |
| 3 | 1A | 11 | 3A |
| 4 | 2R | 12 | 4R |
| 5 | 2G | 13 | 4G |
| 6 | 2B | 14 | 4B |
| 7 | 2A | 15 | 4A |

### Using Global Masks

```hlsl
// Reading a global mask (0-indexed)
float mask = poiMods.globalMask[_YourGlobalMaskIndex - 1];

// Writing to a global mask with blending
if (_YourApplyGlobalMaskIndex > 0)
{
    applyToGlobalMask(poiMods, _YourApplyGlobalMaskIndex - 1, _YourBlendType, value);
}

// Blend types: Add=7, Subtract=1, Multiply=2, Divide=3, Min=4, Max=5, Average=6, Replace=0
```

### Global Mask Property Pattern

```hlsl
[ThryWideEnum(Off, 0, 1R, 1, 1G, 2, 1B, 3, 1A, 4, 2R, 5, 2G, 6, 2B, 7, 2A, 8, 3R, 9, 3G, 10, 3B, 11, 3A, 12, 4R, 13, 4G, 14, 4B, 15, 4A, 16)] _YourGlobalMask ("Global Mask--{reference_property:_YourGlobalMaskBlendType}", Int) = 0
[HideInInspector][ThryWideEnum(Add, 7, Subtract, 1, Multiply, 2, Divide, 3, Min, 4, Max, 5, Average, 6, Replace, 0)] _YourGlobalMaskBlendType ("Blending", Int) = 2
```

## Vertex Shader Examples

For modules that modify vertices, use the vertex keywords documented in [Vertex Modification Keywords](#vertex-modification-keywords) above.

### Vertex Modification Example

```hlsl
#T#YourVertexFunction
//ifex _YourVertexFeature==0
#ifdef YOUR_VERTEX_KEYWORD
    // Access vertex data via 'v' (appdata) and output via 'o' (VertexOut)
    v.vertex.xyz += v.normal * _YourOffset;
    o.normal = UnityObjectToWorldNormal(v.normal);
#endif
//endex
```

## UV Types

The shader supports multiple UV coordinate sources:

| Value | Type | Description |
|-------|------|-------------|
| 0 | UV0 | Primary UVs |
| 1 | UV1 | Secondary UVs (lightmap) |
| 2 | UV2 | Tertiary UVs |
| 3 | UV3 | Quaternary UVs |
| 4 | Panosphere | Spherical projection |
| 5 | World Pos | World position XZ |
| 6 | Polar UV | Polar coordinates |
| 7 | Distorted UV | Post-distortion UVs |
| 8 | Local Pos | Object-space position |
| 9 | Matcap | View-space matcap UVs |

## String Builders (Duplicate Modules)

For accumulating values across duplicate module instances:

```hlsl
// Define a string builder (first instance creates, others append)
<ms_stringbuilder::MY_ACCUMULATED_VALUE>initial_value

// In subsequent instances, append to the builder
<ms_stringbuilder::MY_ACCUMULATED_VALUE>|| additional_value

// Use the accumulated value
#if <ms_stringwriter::MY_ACCUMULATED_VALUE>
    // Code using the combined condition
#endif
```

Example from Emission module:

```hlsl
<ms_include_in_first>
{
    <ms_stringbuilder::_ANY_EMISSION_KEYWORD>defined(_EMISSION)
}
<ms_include_in_not_first>
{
    <ms_stringbuilder::_ANY_EMISSION_KEYWORD>|| defined(POI_EMISSION___mID__)
}
```

## Animation Optimization

Use `isNotAnimated()` to skip code when properties aren't animated:

```hlsl
//ifex isNotAnimated(_YourProperty) && _YourProperty==0
// This code is excluded if _YourProperty is 0 AND not animated
//endex
```

This allows the optimizer to remove code paths that will never be used at runtime.

## VRChat-Specific Functions

```hlsl
// Mirror detection
float VRCMirrorMode();     // Returns >0 if in VRC mirror
bool IsInMirror();         // Generic mirror detection

// Camera detection (VRC only)
float VRCCameraMode();     // Returns >0 if in VRC camera

// Usage
if (VRCMirrorMode() > 0)
{
    // In mirror rendering
}
```

## Troubleshooting

### Common Issues

1. **Module not appearing in shader**
   - Verify the module is added to the appropriate ModuleCollection
   - Check that the GUID references in the .asset file are correct
   - Ensure Unity has reimported the meta files

2. **Properties not showing in material**
   - Check `//ifex` conditions match property values
   - Verify `m_start_` and `m_end_` markers are properly paired
   - Ensure `reference_property` points to a valid toggle

3. **Shader compilation errors**
   - Check for missing `#endif` or `//endex` closures
   - Verify variable declarations are in the correct pass sections
   - Ensure texture samplers are properly guarded with `PROP_` checks

4. **Optimizer stripping needed code**
   - Use `isNotAnimated()` checks for animated properties
   - Verify `//ifex` conditions correctly reflect property states
   - Check that shader features use `shader_feature_local` for optimization

5. **Code running in wrong passes**
   - Verify keywords match the intended passes (BASE, ADD, SHADOW, etc.)
   - Check queue values don't conflict with other modules
   - Use pass-specific defines like `POI_PASS_BASE` for conditional code

### Debugging Tips

- Use the Debug module to visualize values
- Enable `POI_DEBUG` to access debug output
- Check the generated shader code in the Shaders folder after generation
- Test with optimizer both enabled and disabled

## Development Workflow

### Auto-Rebuild Shaders

When developing modules, enable automatic shader rebuilding to see changes immediately:

1. Go to **Poi → Modular Shaders Generator**
2. Check the checkbox next to the shader(s) you want to auto-rebuild
3. The shader will now regenerate whenever you modify module files

The generator window shows all available shader variants with their source module definitions. You can also manually trigger rebuilds by clicking **Generate Shaders**.

### Shader Output Destinations

Each shader has configurable output settings:
- **Destination** - Output folder for generated shader files
- **Shader Name Match** - Filter which shaders get generated (StartsWith, Always, etc.)
- **Version Override** - Custom version number for the generated shader

## Adding Modules to Shaders

Modules are included via Module Collections. Add your module reference to the appropriate collection asset (e.g., `ModuleCollectionPro.asset`) or create a custom shader definition that includes your module.

## Additional Resources

- [Poiyomi Documentation](https://www.poiyomi.com)
- [ThryEditor Documentation](https://github.com/Thryrallo/ThryEditor)
- Existing modules in `Poi_FeatureModules/` serve as excellent references
