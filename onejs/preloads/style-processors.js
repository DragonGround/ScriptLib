Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("OneJS/Utils");
const color_parser_1 = require("onejs/utils/color-parser");
const float_parser_1 = require("onejs/utils/float-parser");
const UnityEngine_1 = require("UnityEngine");
const UIElements_1 = require("UnityEngine/UIElements");
let styleProcessors = {};
setStyleEnum("alignContent", UIElements_1.Align);
setStyleEnum("alignItems", UIElements_1.Align);
setStyleEnum("alignSelf", UIElements_1.Align);
setStyleColor("backgroundColor");
setStyleBackground("backgroundImage");
setStyleBorderColor("borderColor");
setStyleBorderWidth("borderWidth");
setStyleBorderRadius("borderRadius");
setStyleColor("borderBottomColor");
setStyleLength("borderBottomLeftRadius");
setStyleLength("borderBottomRightRadius");
setStyleFloat("borderBottomWidth");
setStyleColor("borderLeftColor");
setStyleFloat("borderLeftWidth");
setStyleColor("borderRightColor");
setStyleFloat("borderRightWidth");
setStyleColor("borderTopColor");
setStyleLength("borderTopLeftRadius");
setStyleLength("borderTopRightRadius");
setStyleFloat("borderTopWidth");
setStyleLength("bottom");
setStyleColor("color");
setStyleCursor("cursor");
setStyleEnum("display", UIElements_1.DisplayStyle);
setStyleLength("flexBasis");
setStyleEnum("flexDirection", UIElements_1.FlexDirection);
setStyleFloat("flexGrow");
setStyleFloat("flexShrink");
setStyleEnum("flexWrap", UIElements_1.Wrap);
setStyleLength("fontSize");
setStyleLength("height");
setStyleEnum("justifyContent", UIElements_1.Justify);
setStyleLength("left");
setStyleLength("letterSpacing");
setStyleMargin("margin");
setStyleLength("marginBottom");
setStyleLength("marginLeft");
setStyleLength("marginRight");
setStyleLength("marginTop");
setStyleLength("maxHeight");
setStyleLength("maxWidth");
setStyleLength("minHeight");
setStyleLength("minWidth");
setStyleFloat("opacity");
setStyleEnum("overflow", UIElements_1.Overflow);
setStylePadding("padding");
setStyleLength("paddingBottom");
setStyleLength("paddingLeft");
setStyleLength("paddingRight");
setStyleLength("paddingTop");
setStyleEnum("position", UIElements_1.Position);
setStyleLength("right");
setStyleRotate("rotate");
setStyleScale("scale");
setStyleEnum("textOverflow", UIElements_1.TextOverflow);
setStyleTextShadow("textShadow");
setStyleLength("top");
setStyleTransformOrigin("transformOrigin");
setStyleListTimeValue("transitionDelay", UIElements_1.TimeValue);
setStyleListTimeValue("transitionDuration", UIElements_1.TimeValue);
setStyleListPropertyName("transitionProperty", UIElements_1.StylePropertyName);
setStyleListEasingFunction("transitionTimingFunction", UIElements_1.EasingFunction);
setStyleTranslate("translate");
setStyleColor("unityBackgroundImageTintColor");
setStyleEnum("unityBackgroundScaleMode", UnityEngine_1.ScaleMode);
setStyleFont("unityFont");
setStyleFontDefinition("unityFontDefinition");
setStyleEnum("unityFontStyleAndWeight", UnityEngine_1.FontStyle);
setStyleEnum("unityOverflowClipBox", UIElements_1.OverflowClipBox);
setStyleLength("unityParagraphSpacing");
setStyleInt("unitySliceBottom");
setStyleInt("unitySliceLeft");
setStyleInt("unitySliceRight");
setStyleInt("unitySliceTop");
setStyleEnum("unityTextAlign", UnityEngine_1.TextAnchor);
setStyleColor("unityTextOutlineColor");
setStyleFloat("unityTextOutlineWidth");
setStyleEnum("unityTextOverflowPosition", UIElements_1.TextOverflowPosition);
setStyleEnum("visibility", UIElements_1.Visibility);
setStyleEnum("whiteSpace", UIElements_1.WhiteSpace);
setStyleLength("width");
setStyleLength("wordSpacing");
function setStyleEnum(propertyName, enumType) {
    styleProcessors[propertyName] = (style, value) => {
        let styleEnumNull = document.createStyleEnumWithKeyword(UIElements_1.StyleKeyword.Initial, getType(enumType));
        let styleEnum = document.createStyleEnum(enumType[value], getType(enumType));
        style[propertyName] = value == null ? styleEnumNull : styleEnum;
    };
}
function setStyleColor(propertyName) {
    styleProcessors[propertyName] = (style, value) => {
        style[propertyName] = value == null ? new UIElements_1.StyleColor(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleColor((0, color_parser_1.parseColor)(value));
    };
}
function setStyleBackground(propertyName) {
    styleProcessors[propertyName] = (style, value) => {
        style[propertyName] = value == null ? new UIElements_1.StyleBackground(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleBackground(UIElements_1.Background.FromTexture2D(typeof value == "string" ? Utils_1.ImageLoader.Load(value) : value));
    };
}
function setStyleLength(propertyName) {
    styleProcessors[propertyName] = (style, value) => {
        let v;
        if (typeof value === "string") {
            if (value.endsWith("%")) {
                let n = parseFloat(value.replace("%", ""));
                if (!isNaN(n))
                    v = new UIElements_1.Length(n, UIElements_1.LengthUnit.Percent);
            }
            else {
                let n = parseFloat(value.endsWith("px") ? value.replace("px", "") : value);
                if (!isNaN(n))
                    v = new UIElements_1.Length(n, UIElements_1.LengthUnit.Pixel);
            }
        }
        else if (typeof value === "number") {
            v = new UIElements_1.Length(value);
        }
        style[propertyName] = value == null || typeof v === "undefined" ? new UIElements_1.StyleLength(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleLength(v);
    };
}
function setStyleFloat(propertyName) {
    styleProcessors[propertyName] = (style, value) => {
        style[propertyName] = value == null ? new UIElements_1.StyleFloat(UIElements_1.StyleKeyword.Initial) : Utils_1.UIStyleUtil.GetStyleFloat(value);
    };
}
function setStyleInt(propertyName) {
    styleProcessors[propertyName] = (style, value) => {
        style[propertyName] = value == null ? new UIElements_1.StyleInt(UIElements_1.StyleKeyword.Initial) : Utils_1.UIStyleUtil.GetStyleInt(value);
    };
}
function setStyleCursor(propertyName) {
    styleProcessors[propertyName] = (style, value) => {
        let cursor = new UIElements_1.Cursor();
        cursor.texture = value.texture;
        cursor.hotspot = value.hotspot;
        style[propertyName] = value == null ? new UIElements_1.StyleCursor(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleCursor(new UIElements_1.Cursor());
    };
}
function setStyleRotate(propertyName) {
    styleProcessors[propertyName] = (style, value) => {
        style[propertyName] = value == null ? new UIElements_1.StyleRotate(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleRotate(new UIElements_1.Rotate(new UIElements_1.Angle(value)));
    };
}
function setStyleScale(propertyName) {
    styleProcessors[propertyName] = (style, value) => {
        var v = (0, float_parser_1.parseFloat2)(value);
        style[propertyName] = value == null ? new UIElements_1.StyleScale(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleScale(new UIElements_1.Scale(v));
    };
}
function setStyleTextShadow(propertyName) {
    styleProcessors[propertyName] = (style, value) => {
        let ts = new UIElements_1.TextShadow();
        ts.offset = (0, float_parser_1.parseFloat2)(value.offset);
        ts.blurRadius = value.blurRadius;
        ts.color = (0, color_parser_1.parseColor)(value.color);
        style[propertyName] = value == null ? new UIElements_1.StyleTextShadow(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleTextShadow(ts);
    };
}
function setStyleTransformOrigin(propertyName) {
    styleProcessors[propertyName] = (style, value) => {
        let v = (0, float_parser_1.parseFloat3)(value);
        style[propertyName] = value == null ? new UIElements_1.StyleTransformOrigin(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleTransformOrigin(new UIElements_1.TransformOrigin(new UIElements_1.Length(v.x), new UIElements_1.Length(v.y), v.z));
    };
}
function setStyleListTimeValue(propertyName, valueType) {
    styleProcessors[propertyName] = (style, value) => {
        let UnityEngine = importNamespace("UnityEngine");
        let listType = System.Collections.Generic.List(UnityEngine.UIElements.TimeValue);
        let list = new listType();
        for (let i = 0; i < value.length; i++)
            list.Add(new UIElements_1.TimeValue(value[i]));
        let styleListNull = document.createStyleListWithKeyword(UIElements_1.StyleKeyword.Initial, getType(valueType));
        let styleList = document.createStyleList(list, getType(valueType));
        style[propertyName] = value == null ? styleListNull : styleList;
    };
}
function setStyleListPropertyName(propertyName, valueType) {
    styleProcessors[propertyName] = (style, value) => {
        let UnityEngine = importNamespace("UnityEngine");
        let listType = System.Collections.Generic.List(UnityEngine.UIElements.StylePropertyName);
        let list = new listType();
        for (let i = 0; i < value.length; i++)
            list.Add(new UIElements_1.StylePropertyName(value[i]));
        let styleListNull = document.createStyleListWithKeyword(UIElements_1.StyleKeyword.Initial, getType(valueType));
        let styleList = document.createStyleList(list, getType(valueType));
        style[propertyName] = value == null ? styleListNull : styleList;
    };
}
function setStyleListEasingFunction(propertyName, valueType) {
    styleProcessors[propertyName] = (style, value) => {
        let UnityEngine = importNamespace("UnityEngine");
        let listType = System.Collections.Generic.List(UnityEngine.UIElements.EasingFunction);
        let list = new listType();
        for (let i = 0; i < value.length; i++)
            list.Add(new UIElements_1.EasingFunction(UIElements_1.EasingMode[value[i]]));
        let styleListNull = document.createStyleListWithKeyword(UIElements_1.StyleKeyword.Initial, getType(valueType));
        let styleList = document.createStyleList(list, getType(valueType));
        style[propertyName] = value == null ? styleListNull : styleList;
    };
}
function setStyleTranslate(propertyName) {
    styleProcessors[propertyName] = (style, value) => {
        var v = (0, float_parser_1.parseFloat3)(value);
        style[propertyName] = value == null ? new UIElements_1.StyleTranslate(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleTranslate(new UIElements_1.Translate(new UIElements_1.Length(v.x), new UIElements_1.Length(v.y), v.z));
    };
}
function setStyleFont(propertyName) {
    styleProcessors[propertyName] = (style, value) => {
        style[propertyName] = value == null ? new UIElements_1.StyleFont(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleFont(typeof value == "string" ? Utils_1.FontLoader.Load(value) : value);
    };
}
function setStyleFontDefinition(propertyName) {
    styleProcessors[propertyName] = (style, value) => {
        style[propertyName] = value == null ? new UIElements_1.StyleFontDefinition(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleFontDefinition(typeof value == "string" ? Utils_1.FontLoader.Load(value) : value);
    };
}
function setStyleBorderColor(propertyName) {
    styleProcessors[propertyName] = (style, value) => {
        style.borderTopColor = value == null ? new UIElements_1.StyleColor(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleColor((0, color_parser_1.parseColor)(value));
        style.borderRightColor = value == null ? new UIElements_1.StyleColor(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleColor((0, color_parser_1.parseColor)(value));
        style.borderBottomColor = value == null ? new UIElements_1.StyleColor(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleColor((0, color_parser_1.parseColor)(value));
        style.borderLeftColor = value == null ? new UIElements_1.StyleColor(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleColor((0, color_parser_1.parseColor)(value));
    };
}
function setStyleBorderWidth(propertyName) {
    styleProcessors[propertyName] = (style, value) => {
        var _a, _b, _c, _d;
        let vals = [0, 0, 0, 0];
        if (Array.isArray(value)) {
            vals = [(_a = parseFloat(value[0])) !== null && _a !== void 0 ? _a : 0, (_b = parseFloat(value[1])) !== null && _b !== void 0 ? _b : 0, (_c = parseFloat(value[2])) !== null && _c !== void 0 ? _c : 0, (_d = parseFloat(value[3])) !== null && _d !== void 0 ? _d : 0];
        }
        else if (typeof value === "number") {
            vals[0] = vals[1] = vals[2] = vals[3] = value;
        }
        style.borderTopWidth = value == null ? new UIElements_1.StyleFloat(UIElements_1.StyleKeyword.Initial) : Utils_1.UIStyleUtil.GetStyleFloat(vals[0]);
        style.borderRightWidth = value == null ? new UIElements_1.StyleFloat(UIElements_1.StyleKeyword.Initial) : Utils_1.UIStyleUtil.GetStyleFloat(vals[1]);
        style.borderBottomWidth = value == null ? new UIElements_1.StyleFloat(UIElements_1.StyleKeyword.Initial) : Utils_1.UIStyleUtil.GetStyleFloat(vals[2]);
        style.borderLeftWidth = value == null ? new UIElements_1.StyleFloat(UIElements_1.StyleKeyword.Initial) : Utils_1.UIStyleUtil.GetStyleFloat(vals[3]);
    };
}
function setStyleBorderRadius(propertyName) {
    styleProcessors[propertyName] = (style, value) => {
        var _a, _b, _c, _d;
        let vals = [0, 0, 0, 0];
        if (Array.isArray(value)) {
            vals = [(_a = parseFloat(value[0])) !== null && _a !== void 0 ? _a : 0, (_b = parseFloat(value[1])) !== null && _b !== void 0 ? _b : 0, (_c = parseFloat(value[2])) !== null && _c !== void 0 ? _c : 0, (_d = parseFloat(value[3])) !== null && _d !== void 0 ? _d : 0];
        }
        else if (typeof value === "number") {
            vals[0] = vals[1] = vals[2] = vals[3] = value;
        }
        style.borderTopLeftRadius = value == null ? new UIElements_1.StyleLength(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleLength(new UIElements_1.Length(vals[0]));
        style.borderTopRightRadius = value == null ? new UIElements_1.StyleLength(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleLength(new UIElements_1.Length(vals[1]));
        style.borderBottomRightRadius = value == null ? new UIElements_1.StyleLength(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleLength(new UIElements_1.Length(vals[2]));
        style.borderBottomLeftRadius = value == null ? new UIElements_1.StyleLength(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleLength(new UIElements_1.Length(vals[3]));
    };
}
function setStyleMargin(propertyName) {
    styleProcessors[propertyName] = (style, value) => {
        var _a, _b, _c, _d;
        let vals = [0, 0, 0, 0];
        if (Array.isArray(value)) {
            vals = [(_a = parseFloat(value[0])) !== null && _a !== void 0 ? _a : 0, (_b = parseFloat(value[1])) !== null && _b !== void 0 ? _b : 0, (_c = parseFloat(value[2])) !== null && _c !== void 0 ? _c : 0, (_d = parseFloat(value[3])) !== null && _d !== void 0 ? _d : 0];
        }
        else if (typeof value === "number") {
            vals[0] = vals[1] = vals[2] = vals[3] = value;
        }
        style.marginTop = value == null ? new UIElements_1.StyleLength(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleLength(new UIElements_1.Length(vals[0]));
        style.marginRight = value == null ? new UIElements_1.StyleLength(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleLength(new UIElements_1.Length(vals[1]));
        style.marginBottom = value == null ? new UIElements_1.StyleLength(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleLength(new UIElements_1.Length(vals[2]));
        style.marginLeft = value == null ? new UIElements_1.StyleLength(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleLength(new UIElements_1.Length(vals[3]));
    };
}
function setStylePadding(propertyName) {
    styleProcessors[propertyName] = (style, value) => {
        var _a, _b, _c, _d;
        let vals = [0, 0, 0, 0];
        if (Array.isArray(value)) {
            vals = [(_a = parseFloat(value[0])) !== null && _a !== void 0 ? _a : 0, (_b = parseFloat(value[1])) !== null && _b !== void 0 ? _b : 0, (_c = parseFloat(value[2])) !== null && _c !== void 0 ? _c : 0, (_d = parseFloat(value[3])) !== null && _d !== void 0 ? _d : 0];
        }
        else if (typeof value === "number") {
            vals[0] = vals[1] = vals[2] = vals[3] = value;
        }
        style.paddingTop = value == null ? new UIElements_1.StyleLength(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleLength(new UIElements_1.Length(vals[0]));
        style.paddingRight = value == null ? new UIElements_1.StyleLength(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleLength(new UIElements_1.Length(vals[1]));
        style.paddingBottom = value == null ? new UIElements_1.StyleLength(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleLength(new UIElements_1.Length(vals[2]));
        style.paddingLeft = value == null ? new UIElements_1.StyleLength(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleLength(new UIElements_1.Length(vals[3]));
    };
}
globalThis.__setStyleProperty = function (style, key, value) {
    styleProcessors[key](style, value);
};
