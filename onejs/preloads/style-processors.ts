import { UIStyleUtil } from "OneJS/Utils"
import { parseColor } from "onejs/utils/color-parser"
import { parseFloat2, parseFloat3 } from "onejs/utils/float-parser"
import { Style } from "preact/jsx"
import { Color, FontStyle, RenderTexture, ScaleMode, Sprite, TextAnchor, Texture, Texture2D, Vector2 } from "UnityEngine"
import { Align, DisplayStyle, FlexDirection, Wrap, Justify, Position, TextOverflow, TimeValue, StylePropertyName, EasingFunction, OverflowClipBox, TextOverflowPosition, Visibility, WhiteSpace, StyleKeyword, StyleColor, StyleBackground, Background, Length, LengthUnit, StyleLength, StyleFloat, StyleInt, Cursor, StyleCursor, StyleRotate, Rotate, Angle, StyleScale, Scale, TextShadow, StyleTextShadow, StyleTransformOrigin, TransformOrigin, StyleTranslate, Translate, StyleFont, StyleFontDefinition, IStyle, Overflow, EasingMode, FontDefinition, VectorImage, AngleUnit, StyleBackgroundRepeat, BackgroundRepeat, Repeat, StyleBackgroundSize, BackgroundSize, BackgroundPosition, StyleBackgroundPosition, BackgroundPositionKeyword } from "UnityEngine/UIElements"

/**
 * Unity Specific Style processors
 */
type Processors = { [p in keyof Style]-?: (style, value: Style[p]) => void }
let styleProcessors: Processors = {} as any

setStyleEnum("alignContent", Align)
setStyleEnum("alignItems", Align)
setStyleEnum("alignSelf", Align)
setStyleColor("backgroundColor")
setStyleBackground("backgroundImage")
setStyleBackgroundSize("backgroundSize")
setStyleBackgroundRepeat("backgroundRepeat")
setStyleBackgroundPosition("backgroundPositionX")
setStyleBackgroundPosition("backgroundPositionY")

setStyleBorderColor("borderColor")
setStyleBorderWidth("borderWidth")
setStyleBorderRadius("borderRadius")
setStyleColor("borderBottomColor")
setStyleLength("borderBottomLeftRadius")
setStyleLength("borderBottomRightRadius")
setStyleFloat("borderBottomWidth")
setStyleColor("borderLeftColor")
setStyleFloat("borderLeftWidth")
setStyleColor("borderRightColor")
setStyleFloat("borderRightWidth")
setStyleColor("borderTopColor")
setStyleLength("borderTopLeftRadius")
setStyleLength("borderTopRightRadius")
setStyleFloat("borderTopWidth")

setStyleLength("bottom")
setStyleColor("color")
setStyleCursor("cursor")
setStyleEnum("display", DisplayStyle)
setStyleLength("flexBasis")
setStyleEnum("flexDirection", FlexDirection)
setStyleFloat("flexGrow")
setStyleFloat("flexShrink")
setStyleEnum("flexWrap", Wrap)
setStyleLength("fontSize")
setStyleLength("height")

setStyleEnum("justifyContent", Justify)
setStyleLength("left")
setStyleLength("letterSpacing")
setStyleMargin("margin")
setStyleLength("marginBottom")
setStyleLength("marginLeft")
setStyleLength("marginRight")
setStyleLength("marginTop")
setStyleLength("maxHeight")
setStyleLength("maxWidth")
setStyleLength("minHeight")
setStyleLength("minWidth")
setStyleFloat("opacity")
setStyleEnum("overflow", Overflow)
setStylePadding("padding")
setStyleLength("paddingBottom")
setStyleLength("paddingLeft")
setStyleLength("paddingRight")
setStyleLength("paddingTop")
setStyleEnum("position", Position)
setStyleLength("right")
setStyleRotate("rotate")
setStyleScale("scale")
setStyleEnum("textOverflow", TextOverflow)
setStyleTextShadow("textShadow")

setStyleLength("top")
setStyleTransformOrigin("transformOrigin")
setStyleListTimeValue("transitionDelay", TimeValue)
setStyleListTimeValue("transitionDuration", TimeValue)
setStyleListPropertyName("transitionProperty", StylePropertyName)
setStyleListEasingFunction("transitionTimingFunction", EasingFunction)
setStyleTranslate("translate")
setStyleColor("unityBackgroundImageTintColor")
setStyleEnum("unityBackgroundScaleMode", ScaleMode)

setStyleFont("unityFont")
setStyleFontDefinition("unityFontDefinition")
setStyleEnum("unityFontStyleAndWeight", FontStyle)
setStyleEnum("unityOverflowClipBox", OverflowClipBox)
setStyleLength("unityParagraphSpacing")
setStyleInt("unitySliceBottom")
setStyleInt("unitySliceLeft")
setStyleInt("unitySliceRight")
setStyleInt("unitySliceTop")
setStyleFloat("unitySliceScale")

setStyleEnum("unityTextAlign", TextAnchor)
setStyleColor("unityTextOutlineColor")
setStyleFloat("unityTextOutlineWidth")
setStyleEnum("unityTextOverflowPosition", TextOverflowPosition)
setStyleEnum("visibility", Visibility)
setStyleEnum("whiteSpace", WhiteSpace)
setStyleLength("width")
setStyleLength("wordSpacing")

function setStyleEnum(propertyName: keyof Style, enumType) {
    styleProcessors[propertyName] = (style, value) => {
        let styleEnumNull = (document as any).createStyleEnumWithKeyword(StyleKeyword.Initial, getType(enumType))
        style[propertyName] = !value ? styleEnumNull : (document as any).createStyleEnum(enumType[value], getType(enumType))
    }
}

function setStyleColor(propertyName: keyof Style) {
    styleProcessors[propertyName] = (style, value) => {
        style[propertyName] = !value ? new StyleColor(StyleKeyword.Initial) : new StyleColor(getType(value) == Color ? value : parseColor(value))
    }
}

function setStyleBackground(propertyName: keyof Style) {
    styleProcessors[propertyName] = (style, value) => {
        // style[propertyName] = value == null ? new StyleBackground(StyleKeyword.Initial) : new StyleBackground(Background.FromTexture2D(typeof value == "string" ? ImageLoader.Load(value) : value))
        if (!value) {
            style[propertyName] = new StyleBackground(StyleKeyword.Initial)
            return
        } else if (typeof value == "string") {
            style[propertyName] = new StyleBackground(Background.FromTexture2D(resource.loadImage(value)))
            return
        }
        let type = getType(value)
        if (type == VectorImage) {
            style[propertyName] = new StyleBackground(Background.FromVectorImage(value))
        } else if (type == Sprite) {
            style[propertyName] = new StyleBackground(Background.FromSprite(value))
        } else if (type == RenderTexture) {
            style[propertyName] = new StyleBackground(Background.FromRenderTexture(value))
        } else if (type == Texture || type == Texture2D) {
            style[propertyName] = new StyleBackground(Background.FromTexture2D(value))
        }
    }
}

function setStyleBackgroundSize(propertyName: keyof Style) {
    styleProcessors[propertyName] = (style, value) => {
        style[propertyName] = !value ? new StyleBackgroundSize(StyleKeyword.Initial)
            : new StyleBackgroundSize(typeof value === "string" ? stringToBackgroundSize(value) : value)
    }
}

function setStyleBackgroundPosition(propertyName: keyof Style) {
    styleProcessors[propertyName] = (style, value) => {
        style[propertyName] = !value ? new StyleBackgroundPosition(StyleKeyword.Initial)
            : new StyleBackgroundPosition(typeof value === "string" ? stringToBackgroundPosition(value) : value)
    }
}

function setStyleBackgroundRepeat(propertyName: keyof Style) {
    styleProcessors[propertyName] = (style, value) => {
        style[propertyName] = !value ? new StyleBackgroundRepeat(StyleKeyword.Initial)
            : new StyleBackgroundRepeat(typeof value === "string" ? stringToBackgroundRepeat(value) : value)
    }
}

function stringToBackgroundSize(input: string): BackgroundSize {
    let values = input.toLowerCase().split(/\s+/);

    let x: Length = _getLength(values[0]);
    let y: Length = values.length > 1 ? _getLength(values[1]) : x; // If only one value is provided, use it for both x and y

    return new BackgroundSize(x, y);
}

function stringToBackgroundPosition(input: string): BackgroundPosition {
    let values = input.toLowerCase().split(/\s+/);

    let keyword = BackgroundPositionKeyword[capitalizeFirstLetter(values[0])]
    if (typeof keyword === "undefined") 
        keyword = BackgroundPositionKeyword.Center
    let offset = _getLength(values.length > 1 ? values[1] : 0); // If only one value is provided, use it for both x and y
    log(keyword)
    return new BackgroundPosition(keyword, offset);
}

function capitalizeFirstLetter(input: string): string {
    if (input.length === 0) return input;
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

function stringToBackgroundRepeat(input: string): BackgroundRepeat {
    let values = input.toLowerCase().split(/\s+/);

    // Default to Repeat if the input is not recognized
    const parseRepeatValue = (value: string): Repeat => {
        switch (value) {
            case "norepeat": return Repeat.NoRepeat;
            case "space": return Repeat.Space;
            case "round": return Repeat.Round;
            case "repeat": return Repeat.Repeat;
            default: return Repeat.Repeat;
        }
    };

    let x: Repeat = parseRepeatValue(values[0]);
    let y: Repeat = values.length > 1 ? parseRepeatValue(values[1]) : x; // If only one value is provided, use it for both x and y

    return new BackgroundRepeat(x, y);
}

function _getLength(value): Length {
    let v: any = undefined
    if (typeof value === "string") {
        if (value.endsWith("%")) {
            let n = parseFloat(value.replace("%", ""))
            if (!isNaN(n))
                v = new Length(n, LengthUnit.Percent)
        } else {
            let n = parseFloat(value.endsWith("px") ? value.replace("px", "") : value)
            if (!isNaN(n))
                v = new Length(n, LengthUnit.Pixel)
        }

    } else if (typeof value === "number") {
        v = new Length(value)
    }
    return v
}

function setStyleLength(propertyName: keyof Style) {
    styleProcessors[propertyName] = (style, value) => {
        let v = _getLength(value)
        style[propertyName] = (!value && value !== 0) || typeof v === "undefined" ? new StyleLength(StyleKeyword.Initial) : new StyleLength(v)
    }
}

function setStyleFloat(propertyName: keyof Style) {
    styleProcessors[propertyName] = (style, value) => {
        style[propertyName] = !value && value !== 0 ? new StyleFloat(StyleKeyword.Initial) : UIStyleUtil.GetStyleFloat(value)
    }
}

function setStyleInt(propertyName: keyof Style) {
    styleProcessors[propertyName] = (style, value) => {
        style[propertyName] = !value && value !== 0 ? new StyleInt(StyleKeyword.Initial) : UIStyleUtil.GetStyleInt(value)
    }
}

function setStyleCursor(propertyName: keyof Style) {
    styleProcessors[propertyName] = (style, value) => {
        let cursor = new Cursor()
        cursor.texture = value.texture
        cursor.hotspot = value.hotspot
        style[propertyName] = !value ? new StyleCursor(StyleKeyword.Initial) : new StyleCursor(new Cursor())
    }
}

const rotateRegex = /(-?\d+\.?\d*|\.\d+)(deg|grad|rad|turn)/g
const stringToEnum: { [key: string]: AngleUnit } = {
    'deg': AngleUnit.Degree,
    'grad': AngleUnit.Gradian,
    'rad': AngleUnit.Radian,
    'turn': AngleUnit.Turn,
}

function setStyleRotate(propertyName: keyof Style) {
    styleProcessors[propertyName] = (style, value) => {
        let match
        rotateRegex.lastIndex = 0
        if (typeof value == "string" && (match = rotateRegex.exec(value)) !== null) {
            style[propertyName] = new StyleRotate(new Rotate(new Angle(Number(match[1]), stringToEnum[match[2]])))
        } else if (typeof value == "number") {
            style[propertyName] = new StyleRotate(new Rotate(new Angle(value)))
        } else {
            style[propertyName] = new StyleRotate(StyleKeyword.Initial)
        }
    }
}

function setStyleScale(propertyName: keyof Style) {
    styleProcessors[propertyName] = (style, value) => {
        var v = value
        if (typeof value == "number")
            v = new Vector2(value, value)
        if (Array.isArray(value))
            v = new Vector2(value[0], value[1])
        style[propertyName] = !value ? new StyleScale(StyleKeyword.Initial) : new StyleScale(new Scale(v))
    }
}

function setStyleTextShadow(propertyName: keyof Style) {
    styleProcessors[propertyName] = (style, value) => {
        let ts = new TextShadow()
        ts.offset = parseFloat2(value.offset)
        ts.blurRadius = value.blurRadius
        ts.color = parseColor(value.color)
        style[propertyName] = !value ? new StyleTextShadow(StyleKeyword.Initial) : new StyleTextShadow(ts)
    }
}

function setStyleTransformOrigin(propertyName: keyof Style) {
    styleProcessors[propertyName] = (style, value) => {
        if (!Array.isArray(value))
            return
        // let v = parseFloat3(value)
        let vals = [_getLength(value[0]), _getLength(value[1])]
        style[propertyName] = !value ? new StyleTransformOrigin(StyleKeyword.Initial) : new StyleTransformOrigin(new TransformOrigin(vals[0], vals[1], 0))
    }
}

function setStyleListTimeValue(propertyName: keyof Style, valueType) {
    styleProcessors[propertyName] = (style, value) => {
        let UnityEngine = importNamespace("UnityEngine")
        let listType = System.Collections.Generic.List(UnityEngine.UIElements.TimeValue)
        let list = new listType()
        for (let i = 0; i < value.length; i++)
            list.Add(new TimeValue(value[i]));

        let styleListNull = (document as any).createStyleListWithKeyword(StyleKeyword.Initial, getType(valueType))
        let styleList = (document as any).createStyleList(list, getType(valueType))
        style[propertyName] = !value ? styleListNull : styleList
    }
}

function setStyleListPropertyName(propertyName: keyof Style, valueType) {
    styleProcessors[propertyName] = (style, value) => {
        let UnityEngine = importNamespace("UnityEngine")
        let listType = System.Collections.Generic.List(UnityEngine.UIElements.StylePropertyName)
        let list = new listType()
        for (let i = 0; i < value.length; i++)
            list.Add(new StylePropertyName(value[i]));

        let styleListNull = (document as any).createStyleListWithKeyword(StyleKeyword.Initial, getType(valueType))
        let styleList = (document as any).createStyleList(list, getType(valueType))
        style[propertyName] = !value ? styleListNull : styleList
    }
}

function setStyleListEasingFunction(propertyName: keyof Style, valueType) {
    styleProcessors[propertyName] = (style, value) => {
        let UnityEngine = importNamespace("UnityEngine")
        let listType = System.Collections.Generic.List(UnityEngine.UIElements.EasingFunction)
        let list = new listType()
        for (let i = 0; i < value.length; i++)
            list.Add(new EasingFunction(EasingMode[value[i] as string]));

        let styleListNull = (document as any).createStyleListWithKeyword(StyleKeyword.Initial, getType(valueType))
        let styleList = (document as any).createStyleList(list, getType(valueType))
        style[propertyName] = !value ? styleListNull : styleList
    }
}

function setStyleTranslate(propertyName: keyof Style) {
    styleProcessors[propertyName] = (style, value) => {
        if (typeof value == "string") {
            let tokens = value.split(/\s*,\s*|\s+/).filter(Boolean)
            let v1 = _getLength(tokens[0])
            let v2 = _getLength(tokens[1])
            style[propertyName] = new StyleTranslate(new Translate(v1 || new Length(0), v2 || new Length(0), 0))
        } else {
            var v = parseFloat3(value)
            style[propertyName] = !value ? new StyleTranslate(StyleKeyword.Initial) : new StyleTranslate(new Translate(new Length(v.x), new Length(v.y), v.z))
        }
    }
}

function setStyleFont(propertyName: keyof Style) {
    styleProcessors[propertyName] = (style, value) => {
        style[propertyName] = !value ? new StyleFont(StyleKeyword.Initial) : new StyleFont(typeof value == "string" ? resource.loadFont(value) : value)
    }
}

function setStyleFontDefinition(propertyName: keyof Style) {
    styleProcessors[propertyName] = (style, value) => {
        style[propertyName] = !value ? new StyleFontDefinition(StyleKeyword.Initial) : new StyleFontDefinition(typeof value == "string" ? resource.loadFont(value) : value)
    }
}

function setStyleBorderColor(propertyName: keyof Style) {
    styleProcessors[propertyName] = (style: IStyle, value) => {
        style.borderTopColor = !value ? new StyleColor(StyleKeyword.Initial) : new StyleColor(parseColor(value))
        style.borderRightColor = !value ? new StyleColor(StyleKeyword.Initial) : new StyleColor(parseColor(value))
        style.borderBottomColor = !value ? new StyleColor(StyleKeyword.Initial) : new StyleColor(parseColor(value))
        style.borderLeftColor = !value ? new StyleColor(StyleKeyword.Initial) : new StyleColor(parseColor(value))
    }
}

function setStyleBorderWidth(propertyName: keyof Style) {
    styleProcessors[propertyName] = (style: IStyle, value) => {
        let vals = [0, 0, 0, 0]
        if (Array.isArray(value)) {
            vals = [parseFloat(value[0]) ?? 0, parseFloat(value[1]) ?? 0, parseFloat(value[2]) ?? 0, parseFloat(value[3]) ?? 0]
        } else if (typeof value === "number") {
            vals[0] = vals[1] = vals[2] = vals[3] = value
        }
        style.borderTopWidth = !value ? new StyleFloat(StyleKeyword.Initial) : UIStyleUtil.GetStyleFloat(vals[0])
        style.borderRightWidth = !value ? new StyleFloat(StyleKeyword.Initial) : UIStyleUtil.GetStyleFloat(vals[1])
        style.borderBottomWidth = !value ? new StyleFloat(StyleKeyword.Initial) : UIStyleUtil.GetStyleFloat(vals[2])
        style.borderLeftWidth = !value ? new StyleFloat(StyleKeyword.Initial) : UIStyleUtil.GetStyleFloat(vals[3])
    }
}

function setStyleBorderRadius(propertyName: keyof Style) {
    styleProcessors[propertyName] = (style: IStyle, value) => {
        let vals = [0, 0, 0, 0]
        if (Array.isArray(value)) {
            vals = [parseFloat(value[0]) ?? 0, parseFloat(value[1]) ?? 0, parseFloat(value[2]) ?? 0, parseFloat(value[3]) ?? 0]
        } else if (typeof value === "number") {
            vals[0] = vals[1] = vals[2] = vals[3] = value
        }
        style.borderTopLeftRadius = !value ? new StyleLength(StyleKeyword.Initial) : new StyleLength(new Length(vals[0]))
        style.borderTopRightRadius = !value ? new StyleLength(StyleKeyword.Initial) : new StyleLength(new Length(vals[1]))
        style.borderBottomRightRadius = !value ? new StyleLength(StyleKeyword.Initial) : new StyleLength(new Length(vals[2]))
        style.borderBottomLeftRadius = !value ? new StyleLength(StyleKeyword.Initial) : new StyleLength(new Length(vals[3]))
    }
}

function setStyleMargin(propertyName: keyof Style) {
    styleProcessors[propertyName] = (style: IStyle, value) => {
        let vals = [0, 0, 0, 0]
        if (Array.isArray(value)) {
            vals = [parseFloat(value[0]) ?? 0, parseFloat(value[1]) ?? 0, parseFloat(value[2]) ?? 0, parseFloat(value[3]) ?? 0]
        } else if (typeof value === "number") {
            vals[0] = vals[1] = vals[2] = vals[3] = value
        }
        style.marginTop = !value ? new StyleLength(StyleKeyword.Initial) : new StyleLength(new Length(vals[0]))
        style.marginRight = !value ? new StyleLength(StyleKeyword.Initial) : new StyleLength(new Length(vals[1]))
        style.marginBottom = !value ? new StyleLength(StyleKeyword.Initial) : new StyleLength(new Length(vals[2]))
        style.marginLeft = !value ? new StyleLength(StyleKeyword.Initial) : new StyleLength(new Length(vals[3]))
    }
}

function setStylePadding(propertyName: keyof Style) {
    styleProcessors[propertyName] = (style: IStyle, value) => {
        let vals = [0, 0, 0, 0]
        if (Array.isArray(value)) {
            vals = [parseFloat(value[0]) ?? 0, parseFloat(value[1]) ?? 0, parseFloat(value[2]) ?? 0, parseFloat(value[3]) ?? 0]
        } else if (typeof value === "number") {
            vals[0] = vals[1] = vals[2] = vals[3] = value
        }
        style.paddingTop = !value ? new StyleLength(StyleKeyword.Initial) : new StyleLength(new Length(vals[0]))
        style.paddingRight = !value ? new StyleLength(StyleKeyword.Initial) : new StyleLength(new Length(vals[1]))
        style.paddingBottom = !value ? new StyleLength(StyleKeyword.Initial) : new StyleLength(new Length(vals[2]))
        style.paddingLeft = !value ? new StyleLength(StyleKeyword.Initial) : new StyleLength(new Length(vals[3]))
    }
}

globalThis.__setStyleProperty = function (style, key, value) {
    styleProcessors[key](style, value)
}