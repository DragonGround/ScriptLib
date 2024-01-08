


declare module "preact/jsx" {
    import { Color, Font, Texture, Texture2D, FontStyle, ScaleMode, TextAnchor, Sprite } from "UnityEngine"
    import { float2, float3, float4 } from "Unity/Mathematics"
    import { Align, BackgroundRepeat, DisplayStyle, EasingFunction, EasingMode, FlexDirection, FontDefinition, Justify, Overflow, OverflowClipBox, Position, TextOverflow, TextOverflowPosition, Visibility, WhiteSpace, Wrap } from "UnityEngine/UIElements"

    export type ColorInfo = float4 | number[] | string | Color
    type TextShadowInfo = { offset: float2 | number[], blurRadius: number, color: ColorInfo }
    type CursorInfo = { hotspot: float2 | number[], texture: Texture2D }

    export type Style = {
        alignContent?: keyof typeof Align
        alignItems?: keyof typeof Align
        alignSelf?: keyof typeof Align
        backgroundColor?: ColorInfo    // StyleColor
        backgroundImage?: Sprite | Texture | string   // StyleBackground
        backgroundSize?: BackgroundSize | string   // StyleBackgroundSize
        backgroundRepeat?: BackgroundRepeat | string   // StyleBackgroundRepeat
        // backgroundPosition?: string   // TODO StyleBackgroundPosition (Custom)
        backgroundPositionX?: BackgroundPosition | string   // StyleBackgroundPosition
        backgroundPositionY?: BackgroundPosition | string   // StyleBackgroundPosition

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
        rotate?: number | string // StyleRotate
        scale?: float2 | number[]  // StyleScale
        textOverflow?: keyof typeof TextOverflow
        textShadow?: TextShadowInfo // StyleTextShadow

        top?: number | string  // StyleLength
        transformOrigin?: float2 | number[] | string[] // StyleTransformOrigin
        transitionDelay?: number[]  // StyleList<TimeValue>
        transitionDuration?: number[]  // StyleList<TimeValue>
        transitionProperty?: (keyof StyleKeys)[]   // StyleList<StylePropertyName>
        transitionTimingFunction?: (keyof typeof EasingMode)[]  // StyleList<EasingFunction>
        translate?: float2 | number[] | string // StyleTranslate
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
        unitySliceScale?: number   // StyleFloat

        unityTextAlign?: keyof typeof TextAnchor
        unityTextOutlineColor?: ColorInfo   // StyleColor
        unityTextOutlineWidth?: number   // StyleFloat
        unityTextOverflowPosition?: keyof typeof TextOverflowPosition
        visibility?: keyof typeof Visibility
        whiteSpace?: keyof typeof WhiteSpace
        width?: number | string  // StyleLength
        wordSpacing?: number | string  // StyleLength
    }

    // UnityEngine.UIElements.StyleSheets.StylePropertyUtil
    export type StyleKeys = {
        "align-content": any,
        "align-items": any,
        "align-self": any,
        "all": any,
        "background-color": any,
        "background-image": any,
        "background-size": any,
        "background-repeat": any,
        "background-position-x": any,
        "background-position-y": any,
        "border-bottom-color": any,
        "border-bottom-left-radius": any,
        "border-bottom-right-radius": any,
        "border-bottom-width": any,
        "border-color": any,
        "border-left-color": any,
        "border-left-width": any,
        "border-radius": any,
        "border-right-color": any,
        "border-right-width": any,
        "border-top-color": any,
        "border-top-left-radius": any,
        "border-top-right-radius": any,
        "border-top-width": any,
        "border-width": any,
        "bottom": any,
        "color": any,
        "cursor": any,
        "display": any,
        "flex": any,
        "flex-basis": any,
        "flex-direction": any,
        "flex-grow": any,
        "flex-shrink": any,
        "flex-wrap": any,
        "font-size": any,
        "height": any,
        "justify-content": any,
        "left": any,
        "letter-spacing": any,
        "margin": any,
        "margin-bottom": any,
        "margin-left": any,
        "margin-right": any,
        "margin-top": any,
        "max-height": any,
        "max-width": any,
        "min-height": any,
        "min-width": any,
        "opacity": any,
        "overflow": any,
        "padding": any,
        "padding-bottom": any,
        "padding-left": any,
        "padding-right": any,
        "padding-top": any,
        "position": any,
        "right": any,
        "rotate": any,
        "scale": any,
        "text-overflow": any,
        "text-shadow": any,
        "top": any,
        "transform-origin": any,
        "transition": any,
        "transition-delay": any,
        "transition-duration": any,
        "transition-property": any,
        "transition-timing-function": any,
        "translate": any,
        "-unity-background-image-tint-color": any,
        "-unity-background-scale-mode": any,
        "-unity-font": any,
        "-unity-font-definition": any,
        "-unity-font-style": any,
        "-unity-overflow-clip-box": any,
        "-unity-paragraph-spacing": any,
        "-unity-slice-bottom": any,
        "-unity-slice-left": any,
        "-unity-slice-right": any,
        "-unity-slice-top": any,
        "-unity-slice-scale": any,
        "-unity-text-align": any,
        "-unity-text-outline": any,
        "-unity-text-outline-color": any,
        "-unity-text-outline-width": any,
        "-unity-text-overflow-position": any,
        "visibility": any,
        "white-space": any,
        "width": any,
        "word-spacing": any,
    }

}