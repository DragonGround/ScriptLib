

declare module "preact/jsx" {
    import { Color, Font, Texture, Texture2D, FontStyle } from "UnityEngine"
    import { float2, float3, float4 } from "Unity/Mathematics"
    import { Align, DisplayStyle, EasingFunction, FlexDirection, FontDefinition, Justify, Overflow, OverflowClipBox, Position, ScaleMode, TextAnchor, TextOverflow, TextOverflowPosition, Visibility, WhiteSpace, Wrap } from "UnityEngine/UIElements"

    type ColorInfo = float4 | number[] | string | Color
    type TextShadowInfo = { offset: float2 | number[], blurRadius: number, color: ColorInfo }
    type CursorInfo = { hotspot: float2 | number[], texture: Texture2D }

    export type Style = {
        alignContent?: keyof typeof Align
        alignItems?: keyof typeof Align
        alignSelf?: keyof typeof Align
        backgroundColor?: ColorInfo    // StyleColor
        backgroundImage?: Texture | string   // StyleBackground

        borderColor?: ColorInfo // StyleBorderColor (Custom)
        borderWidth?: number | number[] // StyleBorderWidth (Custom)
        borderRadius?: number | number[] // StyleBorderRadius (Custom)
        borderBottomColor?: ColorInfo   // StyleColor
        borderBottomLeftRadius?: number | string // StyleLength
        borderBottomRightRadius?: number | string // StyleLength
        borderBottomWidth?: number // StyleFloat
        borderLeftColor?: ColorInfo   // StyleColor
        borderLeftWidth?: number // StyleFloat
        borderRightColor?: ColorInfo   // StyleColor
        borderRightWidth?: number // StyleFloat
        borderTopColor?: ColorInfo   // StyleColor
        borderTopLeftRadius?: number | string // StyleLength
        borderTopRightRadius?: number | string // StyleLength
        borderTopWidth?: number // StyleFloat

        bottom?: number | string // StyleLength
        color?: ColorInfo  // StyleColor
        cursor?: CursorInfo    // StyleCursor
        display?: keyof typeof DisplayStyle
        flexBasis?: number | string  // StyleLength
        flexDirection?: keyof typeof FlexDirection
        flexGrow?: number   // StyleFloat
        flexShrink?: number   // StyleFloat
        flexWrap?: keyof typeof Wrap
        fontSize?: number | string // StyleLength
        height?: number | string // StyleLength

        justifyContent?: keyof typeof Justify
        left?: number | string  // StyleLength
        letterSpacing?: number | string  // StyleLength
        margin?: number | number[] // StyleMargin (Custom)
        marginBottom?: number | string  // StyleLength
        marginLeft?: number | string  // StyleLength
        marginRight?: number | string  // StyleLength
        marginTop?: number | string  // StyleLength
        maxHeight?: number | string  // StyleLength
        maxWidth?: number | string  // StyleLength
        minHeight?: number | string  // StyleLength
        minWidth?: number | string  // StyleLength
        opacity?: number   // StyleFloat
        overflow?: keyof typeof Overflow
        padding?: number | number[] // StylePadding (Custom)
        paddingBottom?: number | string  // StyleLength
        paddingLeft?: number | string  // StyleLength
        paddingRight?: number | string  // StyleLength
        paddingTop?: number | string  // StyleLength
        position?: keyof typeof Position
        right?: number | string  // StyleLength
        rotate?: number // StyleRotate
        scale?: float2 | number[]  // StyleScale
        textOverflow?: keyof typeof TextOverflow
        textShadow?: TextShadowInfo // StyleTextShadow

        top?: number | string  // StyleLength
        transformOrigin?: float3 | number[] // StyleTransformOrigin
        transitionDelay?: number[]  // StyleList<TimeValue>
        transitionDuration?: number[]  // StyleList<TimeValue>
        transitionProperty?: (keyof Style)[]   // StyleList<StylePropertyName>
        transitionTimingFunction?: (keyof typeof EasingFunction)[]  // StyleList<EasingFunction>
        translate?: float3 | number[] // StyleTranslate
        unityBackgroundImageTintColor?: ColorInfo   // StyleColor
        unityBackgroundScaleMode?: keyof typeof ScaleMode

        unityFont?: Font | string  // StyleFont
        unityFontDefinition?: FontDefinition | string   // StyleFontDefinition
        unityFontStyleAndWeight?: keyof typeof FontStyle
        unityOverflowClipBox?: keyof typeof OverflowClipBox
        unityParagraphSpacing?: number | string  // StyleLength
        unitySliceBottom?: number   // StyleInt
        unitySliceLeft?: number   // StyleInt
        unitySliceRight?: number   // StyleInt
        unitySliceTop?: number   // StyleInt

        unityTextAlign?: keyof typeof TextAnchor
        unityTextOutlineColor?: ColorInfo   // StyleColor
        unityTextOutlineWidth?: number   // StyleFloat
        unityTextOverflowPosition?: keyof typeof TextOverflowPosition
        visibility?: keyof typeof Visibility
        whiteSpace?: keyof typeof WhiteSpace
        width?: number | string  // StyleLength
        wordSpacing?: number | string  // StyleLength
    }

}