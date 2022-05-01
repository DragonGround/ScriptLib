

declare module "UnityEngine/UIElements" {
    import { Color, Font, FontStyle, RenderTexture, ScaleMode, Sprite, Texture2D } from "UnityEngine"

    // (Custom) ones are just here to show that they exist on the javascript side. 
    // They are not provided by IStyle.
    export interface IStyle {
        alignContent: StyleEnum<Align>
        alignItems: StyleEnum<Align>
        alignSelf: StyleEnum<Align>
        backgroundColor: StyleColor    // StyleColor
        backgroundImage: StyleBackground   // StyleBackground

        // borderWidth: number | string // StyleBorderWidth (Custom)
        // borderRadius: number | string // StyleBorderRadius (Custom)
        borderBottomColor: StyleColor   // StyleColor
        borderBottomLeftRadius: StyleLength // StyleLength
        borderBottomRightRadius: StyleLength // StyleLength
        borderBottomWidth: StyleFloat // StyleFloat
        borderLeftColor: StyleColor   // StyleColor
        borderLeftWidth: StyleFloat // StyleFloat
        borderRightColor: StyleColor   // StyleColor
        borderRightWidth: StyleFloat // StyleFloat
        borderTopColor: StyleColor   // StyleColor
        borderTopLeftRadius: StyleLength // StyleLength
        borderTopRightRadius: StyleLength // StyleLength
        borderTopWidth: StyleFloat // StyleFloat

        bottom: StyleLength // StyleLength
        color: StyleColor  // StyleColor
        cursor: StyleCursor    // StyleCursor
        display: StyleEnum<DisplayStyle>
        flexBasis: StyleLength  // StyleLength
        flexDirection: StyleEnum<FlexDirection>
        flexGrow: StyleFloat   // StyleFloat
        flexShrink: StyleFloat   // StyleFloat
        flexWrap: StyleEnum<Wrap>
        fontSize: StyleLength // StyleLength
        height: StyleLength // StyleLength

        justifyContent: StyleEnum<Justify>
        left: StyleLength  // StyleLength
        letterSpacing: StyleLength  // StyleLength
        // margin: number | string // StyleMargin (Custom)
        marginBottom: StyleLength  // StyleLength
        marginLeft: StyleLength  // StyleLength
        marginRight: StyleLength  // StyleLength
        marginTop: StyleLength  // StyleLength
        maxHeight: StyleLength  // StyleLength
        maxWidth: StyleLength  // StyleLength
        minHeight: StyleLength  // StyleLength
        minWidth: StyleLength  // StyleLength
        opacity: StyleFloat   // StyleFloat
        overflow: StyleEnum<Overflow>
        // padding: number | string // StylePadding (Custom)
        paddingBottom: StyleLength  // StyleLength
        paddingLeft: StyleLength  // StyleLength
        paddingRight: StyleLength  // StyleLength
        paddingTop: StyleLength  // StyleLength
        position: StyleEnum<Position>
        right: StyleLength  // StyleLength
        rotate: StyleRotate // StyleRotate
        scale: StyleScale  // StyleScale
        textOverflow: StyleEnum<TextOverflow>
        textShadow: StyleTextShadow // StyleTextShadow

        top: StyleLength  // StyleLength
        transformOrigin: StyleTransformOrigin // StyleTransformOrigin
        transitionDelay: StyleList<TimeValue>  // StyleList<TimeValue>
        transitionDuration: StyleList<TimeValue>  // StyleList<TimeValue>
        transitionProperty: StyleList<StylePropertyName>   // StyleList<StylePropertyName>
        transitionTimingFunction: StyleList<EasingFunction>  // StyleList<EasingFunction>>
        translate: StyleTranslate // StyleTranslate
        unityBackgroundImageTintColor: StyleColor   // StyleColor
        unityBackgroundScaleMode: StyleEnum<ScaleMode>

        unityFont: StyleFont  // StyleFont
        unityFontDefinition: StyleFontDefinition   // StyleFontDefinition
        unityFontStyleAndWeight: StyleEnum<FontStyle>
        unityOverflowClipBox: StyleEnum<OverflowClipBox>
        unityParagraphSpacing: StyleLength  // StyleLength
        unitySliceBottom: StyleInt   // StyleInt
        unitySliceLeft: StyleInt   // StyleInt
        unitySliceRight: StyleInt   // StyleInt
        unitySliceTop: StyleInt   // StyleInt

        unityTextAlign: StyleEnum<TextAnchor>
        unityTextOutlineColor: StyleColor   // StyleColor
        unityTextOutlineWidth: StyleFloat   // StyleFloat
        unityTextOverflowPosition: StyleEnum<TextOverflowPosition>
        visibility: StyleEnum<Visibility>
        whiteSpace: StyleEnum<WhiteSpace>
        width: StyleLength  // StyleLength
        wordSpacing: StyleLength  // StyleLength
    }
}