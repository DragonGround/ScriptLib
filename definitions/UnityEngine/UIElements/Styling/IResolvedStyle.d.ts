

declare module "UnityEngine/UIElements" {
    import { IEnumerable } from "System/Collections/Generic"
    import { Color, Vector3, Font, FontStyle, ScaleMode, TextAnchor } from "UnityEngine"

    export interface IResolvedStyle {
        alignContent: Align
        alignItems: Align
        alignSelf: Align
        backgroundColor: Color
        backgroundImage: Background
        borderBottomColor: Color
        borderBottomLeftRadius: number
        borderBottomRightRadius: number
        borderBottomWidth: number
        borderLeftColor: Color
        borderLeftWidth: number
        borderRightColor: Color
        borderRightWidth: number
        borderTopColor: Color
        borderTopLeftRadius: number
        borderTopRightRadius: number
        borderTopWidth: number
        bottom: number
        color: Color
        display: DisplayStyle
        flexBasis: StyleFloat
        flexDirection: FlexDirection
        flexGrow: number
        flexShrink: number
        flexWrap: Wrap
        fontSize: number
        height: number
        justifyContent: Justify
        left: number
        letterSpacing: number
        marginBottom: number
        marginLeft: number
        marginRight: number
        marginTop: number
        maxHeight: StyleFloat
        maxWidth: StyleFloat
        minHeight: StyleFloat
        minWidth: StyleFloat
        opacity: number
        paddingBottom: number
        paddingLeft: number
        paddingRight: number
        paddingTop: number
        position: Position
        right: number
        rotate: Rotate
        scale: Scale
        textOverflow: TextOverflow
        top: number
        transformOrigin: Vector3
        transitionDelay: IEnumerable<TimeValue>
        transitionDuration: IEnumerable<TimeValue>
        transitionProperty: IEnumerable<StylePropertyName>
        transitionTimingFunction: IEnumerable<EasingFunction>
        translate: Vector3
        unityBackgroundImageTintColor: Color
        unityBackgroundScaleMode: ScaleMode
        unityFont: Font
        unityFontDefinition: FontDefinition
        unityFontStyleAndWeight: FontStyle
        unityParagraphSpacing: number
        unitySliceBottom: number
        unitySliceLeft: number
        unitySliceRight: number
        unitySliceTop: number
        unityTextAlign: TextAnchor
        unityTextOutlineColor: Color
        unityTextOutlineWidth: number
        unityTextOverflowPosition: TextOverflowPosition
        visibility: Visibility
        whiteSpace: WhiteSpace
        width: number
        wordSpacing: number
    }
}