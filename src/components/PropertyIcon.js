import React from 'react';

import Icon_Color from '@site/static/img/property-icons/Icon_ColorD.svg';
import Icon_Dropdown from '@site/static/img/property-icons/Icon_DropdownIconD.svg';
import Icon_Float from '@site/static/img/property-icons/Icon_FloatD.svg';
import Icon_Float2 from '@site/static/img/property-icons/Icon_Float2D.svg';
import Icon_Float3 from '@site/static/img/property-icons/Icon_Float3D.svg';
import Icon_Float4 from '@site/static/img/property-icons/Icon_Float4D.svg';
import Icon_FloatRange from '@site/static/img/property-icons/Icon_FloatRangeD.svg';
import Icon_FloatClamped from '@site/static/img/property-icons/Icon_FloatClampedD.svg';
import Icon_HDRColor from '@site/static/img/property-icons/Icon_HDRColorD.svg';
import Icon_Slider from '@site/static/img/property-icons/Icon_SliderD.svg';
import Icon_Texture from '@site/static/img/property-icons/Icon_TextureD.svg';
import Icon_Toggle from '@site/static/img/property-icons/Icon_ToggleD.svg';

const iconMap = {
    color: Icon_Color,
    dropdown: Icon_Dropdown,
    float: Icon_Float,
    float2: Icon_Float2,
    float3: Icon_Float3,
    float4: Icon_Float4,
    floatrange: Icon_FloatRange,
    floatclamped: Icon_FloatClamped,
    multislider: Icon_FloatClamped,
    vector: Icon_Float,
    vector2: Icon_Float2,
    vector3: Icon_Float3,
    vector4: Icon_Float4,
    integer: Icon_Slider,
    int: Icon_Slider,
    hdrcolor: Icon_HDRColor,
    slider: Icon_Slider,
    texture: Icon_Texture,
    toggle: Icon_Toggle,
    checkbox: Icon_Toggle,
    bool: Icon_Toggle,
    boolean: Icon_Toggle,
};

export default function Icon({ name, size = '1.5em', style = {} }) {
    const SvgIcon = iconMap[name.toLowerCase()];
    if (!SvgIcon) return null;

    return (
        <SvgIcon 
            style={{
                height: size,
                verticalAlign: 'middle',
                marginRight: '0.25em',
                ...style,
            }}
        />
    );
}