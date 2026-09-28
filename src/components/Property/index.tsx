import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import PropertyIcon from '@site/src/components/PropertyIcon';
import styles from './styles.module.css';

// Every `type` a <Property> can have. `icon` is a PropertyIcon name.
const TYPES: Record<string, { label: string; icon: string }> = {
    toggle: { label: 'Toggle', icon: 'toggle' },
    toggles: { label: 'Vector Toggles', icon: 'toggle' },
    float: { label: 'Float', icon: 'float' },
    range: { label: 'Range', icon: 'floatrange' },
    int: { label: 'Integer', icon: 'int' },
    clamped: { label: 'Clamped Slider', icon: 'floatclamped' },
    float2: { label: 'Float2', icon: 'float2' },
    float3: { label: 'Float3', icon: 'float3' },
    float4: { label: 'Float4', icon: 'float4' },
    vector2: { label: 'Vector2', icon: 'float2' },
    vector3: { label: 'Vector3', icon: 'float3' },
    vector4: { label: 'Vector4', icon: 'float4' },
    curve: { label: 'Vector Curve', icon: 'vectorcurve' },
    color: { label: 'Color', icon: 'color' },
    hdrcolor: { label: 'HDR Color', icon: 'hdrcolor' },
    texture: { label: 'Texture Slot', icon: 'texture' },
    dropdown: { label: 'Dropdown', icon: 'dropdown' },
};

// Other names accepted for `type`, so the PropertyIcon names used in older docs keep working.
const ALIASES: Record<string, string> = {
    floatrange: 'range',
    slider: 'int',
    integer: 'int',
    multislider: 'clamped',
    floatclamped: 'clamped',
    vectorcurve: 'curve',
    bool: 'toggle',
    boolean: 'toggle',
    checkbox: 'toggle',
    vectortoggles: 'toggles',
    buttonvector: 'toggles',
    hdr: 'hdrcolor',
    enum: 'dropdown',
};

// What a texture slot expects (`texture` prop), and whether that kind of texture is sRGB by default.
const TEXTURES: Record<string, { label: string; srgb: boolean }> = {
    color: { label: 'Color texture', srgb: true },
    data: { label: 'Data texture', srgb: false },
    normal: { label: 'Normal map', srgb: false },
    cubemap: { label: 'Cubemap', srgb: true },
    gradient: { label: 'Gradient texture', srgb: true },
};

type Scalar = string | number | boolean;

type PropertyProps = {
    /** Property type, e.g. `toggle`, `range`, `dropdown`, `texture`. See TYPES above. */
    type: string;
    /** Replaces the type's display name. */
    label?: string;
    /** Choices of a dropdown, or buttons of vector toggles, in the order they appear in the Shader UI. */
    options?: string[];
    /** Bounds of a range, integer or clamped slider. Pass strings (`"0.0"`) to keep the decimal. */
    min?: string | number;
    max?: string | number;
    /**
     * Default value. An object like `{X: 0.5, Y: 0.5}` shows one value per axis.
     * For vector toggles, the list of buttons that are on, like `['Base']`.
     */
    default?: Scalar | Scalar[] | Record<string, Scalar>;
    /** What a texture slot expects: `color`, `data`, `normal`, `cubemap` or `gradient`. */
    texture?: string;
    /** Overrides the sRGB setting implied by `texture`. */
    srgb?: boolean;
    /** Condition for the property to be shown in the Shader UI, e.g. "[Shape Clip](#shape-clip) is enabled". */
    children?: ReactNode;
};

const format = (value: Scalar) => (typeof value === 'boolean' ? (value ? 'On' : 'Off') : String(value));

const isHexColor = (value: Scalar) => typeof value === 'string' && /^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(value);

function Value({ value }: { value: Scalar }) {
    return (
        <span className={styles.chip}>
            {isHexColor(value) && <span className={styles.swatch} style={{ backgroundColor: String(value) }} />}
            {format(value)}
        </span>
    );
}

function DefaultValue({ value, empty }: { value: Scalar | Scalar[] | Record<string, Scalar>; empty: string }) {
    if (typeof value !== 'object') return <Value value={value} />;
    if (Array.isArray(value)) {
        if (value.length === 0) return <Value value={empty} />;
        return (
            <>
                {value.map((item) => (
                    <Value key={String(item)} value={item} />
                ))}
            </>
        );
    }
    return (
        <>
            {Object.entries(value).map(([axis, axisValue]) => (
                <span key={axis} className={styles.chip}>
                    <span className={styles.axis}>{axis}</span>
                    {format(axisValue)}
                </span>
            ))}
        </>
    );
}

export default function Property({ type, label, options, min, max, default: defaultValue, texture, srgb, children }: PropertyProps) {
    const key = ALIASES[type.toLowerCase()] ?? type.toLowerCase();
    const info = TYPES[key];
    const isToggles = key === 'toggles';
    const textureInfo = texture ? TEXTURES[texture.toLowerCase()] : undefined;
    const isSrgb = srgb ?? textureInfo?.srgb;
    const hasRange = min !== undefined || max !== undefined;
    const defaults = Array.isArray(defaultValue)
        ? defaultValue.map(format)
        : defaultValue !== undefined && typeof defaultValue !== 'object'
          ? [format(defaultValue)]
          : [];
    // Dropdowns and vector toggles mark their defaults among the options instead of repeating them in a row of their own.
    const defaultInOptions = options !== undefined && defaults.length > 0 && defaults.every((d) => options.includes(d));
    const showDefault = defaultValue !== undefined && !defaultInOptions;

    const row = (term: ReactNode, content: ReactNode, className?: string) => (
        <div className={clsx(styles.row, className)}>
            <dt>{term}</dt>
            <dd>{content}</dd>
        </div>
    );

    return (
        <dl className={styles.property}>
            {row(
                'Type',
                <>
                    {info && (
                        <span className={styles.icon} aria-hidden="true">
                            <PropertyIcon name={info.icon} size="1.25rem" style={{ marginRight: 0 }} />
                        </span>
                    )}
                    <span className={styles.typeName}>{label ?? info?.label ?? type}</span>
                </>,
                styles.typeRow,
            )}
            {options &&
                row(
                    isToggles ? 'Buttons' : 'Options',
                    options.map((option, i) => {
                        const isDefault = defaultInOptions && defaults.includes(option);
                        return (
                            <span key={option} className={clsx(styles.chip, isDefault && styles.chipDefault)}>
                                {/* Each button writes to its own component of the vector. */}
                                {isToggles && i < 4 && <span className={styles.axis}>{'XYZW'[i]}</span>}
                                {option}
                                {isDefault && <span className={styles.defaultTag}>{isToggles ? 'on' : 'default'}</span>}
                            </span>
                        );
                    }),
                )}
            {hasRange &&
                row(
                    'Range',
                    <>
                        <Value value={min ?? '−∞'} />
                        <span className={styles.rangeTo}>to</span>
                        <Value value={max ?? '∞'} />
                    </>,
                )}
            {(textureInfo || isSrgb !== undefined) &&
                row(
                    'Accepts',
                    <>
                        {textureInfo?.label}
                        {isSrgb !== undefined && <Value value={`sRGB ${format(isSrgb)}`} />}
                    </>,
                )}
            {showDefault && row('Default', <DefaultValue value={defaultValue} empty={isToggles ? 'All off' : 'None'} />)}
            {children &&
                row(
                    <>
                        <FontAwesomeIcon icon={faEye} className={styles.conditionIcon} />
                        Shown when
                    </>,
                    children,
                    styles.conditionRow,
                )}
        </dl>
    );
}
