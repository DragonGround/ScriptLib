"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("OneJS/Utils");
var color_parser_1 = require("onejs/utils/color-parser");
var float_parser_1 = require("onejs/utils/float-parser");
var UnityEngine_1 = require("UnityEngine");
var UIElements_1 = require("UnityEngine/UIElements");
var styleProcessors = {};
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
setStyleFloat("unitySliceScale");
setStyleEnum("unityTextAlign", UnityEngine_1.TextAnchor);
setStyleColor("unityTextOutlineColor");
setStyleFloat("unityTextOutlineWidth");
setStyleEnum("unityTextOverflowPosition", UIElements_1.TextOverflowPosition);
setStyleEnum("visibility", UIElements_1.Visibility);
setStyleEnum("whiteSpace", UIElements_1.WhiteSpace);
setStyleLength("width");
setStyleLength("wordSpacing");
function setStyleEnum(propertyName, enumType) {
    styleProcessors[propertyName] = function (style, value) {
        var styleEnumNull = document.createStyleEnumWithKeyword(UIElements_1.StyleKeyword.Initial, getType(enumType));
        style[propertyName] = !value ? styleEnumNull : document.createStyleEnum(enumType[value], getType(enumType));
    };
}
function setStyleColor(propertyName) {
    styleProcessors[propertyName] = function (style, value) {
        style[propertyName] = !value ? new UIElements_1.StyleColor(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleColor(getType(value) == UnityEngine_1.Color ? value : (0, color_parser_1.parseColor)(value));
    };
}
function setStyleBackground(propertyName) {
    styleProcessors[propertyName] = function (style, value) {
        if (!value) {
            style[propertyName] = new UIElements_1.StyleBackground(UIElements_1.StyleKeyword.Initial);
            return;
        }
        else if (typeof value == "string") {
            style[propertyName] = new UIElements_1.StyleBackground(UIElements_1.Background.FromTexture2D(resource.loadImage(value)));
            return;
        }
        var type = getType(value);
        if (type == UIElements_1.VectorImage) {
            style[propertyName] = new UIElements_1.StyleBackground(UIElements_1.Background.FromVectorImage(value));
        }
        else if (type == UnityEngine_1.Sprite) {
            style[propertyName] = new UIElements_1.StyleBackground(UIElements_1.Background.FromSprite(value));
        }
        else if (type == UnityEngine_1.RenderTexture) {
            style[propertyName] = new UIElements_1.StyleBackground(UIElements_1.Background.FromRenderTexture(value));
        }
        else if (type == UnityEngine_1.Texture || type == UnityEngine_1.Texture2D) {
            style[propertyName] = new UIElements_1.StyleBackground(UIElements_1.Background.FromTexture2D(value));
        }
    };
}
function _getLength(value) {
    var v = undefined;
    if (typeof value === "string") {
        if (value.endsWith("%")) {
            var n_1 = parseFloat(value.replace("%", ""));
            if (!isNaN(n_1))
                v = new UIElements_1.Length(n_1, UIElements_1.LengthUnit.Percent);
        }
        else {
            var n_2 = parseFloat(value.endsWith("px") ? value.replace("px", "") : value);
            if (!isNaN(n_2))
                v = new UIElements_1.Length(n_2, UIElements_1.LengthUnit.Pixel);
        }
    }
    else if (typeof value === "number") {
        v = new UIElements_1.Length(value);
    }
    return v;
}
function setStyleLength(propertyName) {
    styleProcessors[propertyName] = function (style, value) {
        var v = _getLength(value);
        style[propertyName] = (!value && value !== 0) || typeof v === "undefined" ? new UIElements_1.StyleLength(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleLength(v);
    };
}
function setStyleFloat(propertyName) {
    styleProcessors[propertyName] = function (style, value) {
        style[propertyName] = !value ? new UIElements_1.StyleFloat(UIElements_1.StyleKeyword.Initial) : Utils_1.UIStyleUtil.GetStyleFloat(value);
    };
}
function setStyleInt(propertyName) {
    styleProcessors[propertyName] = function (style, value) {
        style[propertyName] = !value ? new UIElements_1.StyleInt(UIElements_1.StyleKeyword.Initial) : Utils_1.UIStyleUtil.GetStyleInt(value);
    };
}
function setStyleCursor(propertyName) {
    styleProcessors[propertyName] = function (style, value) {
        var cursor = new UIElements_1.Cursor();
        cursor.texture = value.texture;
        cursor.hotspot = value.hotspot;
        style[propertyName] = !value ? new UIElements_1.StyleCursor(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleCursor(new UIElements_1.Cursor());
    };
}
var rotateRegex = /(-?\d*\.?\d+)(deg|grad|rad|turn)/g;
var stringToEnum = {
    'deg': UIElements_1.AngleUnit.Degree,
    'grad': UIElements_1.AngleUnit.Gradian,
    'rad': UIElements_1.AngleUnit.Radian,
    'turn': UIElements_1.AngleUnit.Turn,
};
function setStyleRotate(propertyName) {
    styleProcessors[propertyName] = function (style, value) {
        var match;
        if (typeof value == "string" && (match = rotateRegex.exec(value)) !== null) {
            style[propertyName] = new UIElements_1.StyleRotate(new UIElements_1.Rotate(new UIElements_1.Angle(Number(match[1]), stringToEnum[match[2]])));
        }
        else if (typeof value == "number") {
            style[propertyName] = new UIElements_1.StyleRotate(new UIElements_1.Rotate(new UIElements_1.Angle(value)));
        }
        else {
            style[propertyName] = new UIElements_1.StyleRotate(UIElements_1.StyleKeyword.Initial);
        }
    };
}
function setStyleScale(propertyName) {
    styleProcessors[propertyName] = function (style, value) {
        var v = value;
        if (typeof value == "number")
            v = new UnityEngine_1.Vector2(value, value);
        if (Array.isArray(value))
            v = new UnityEngine_1.Vector2(value[0], value[1]);
        style[propertyName] = !value ? new UIElements_1.StyleScale(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleScale(new UIElements_1.Scale(v));
    };
}
function setStyleTextShadow(propertyName) {
    styleProcessors[propertyName] = function (style, value) {
        var ts = new UIElements_1.TextShadow();
        ts.offset = (0, float_parser_1.parseFloat2)(value.offset);
        ts.blurRadius = value.blurRadius;
        ts.color = (0, color_parser_1.parseColor)(value.color);
        style[propertyName] = !value ? new UIElements_1.StyleTextShadow(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleTextShadow(ts);
    };
}
function setStyleTransformOrigin(propertyName) {
    styleProcessors[propertyName] = function (style, value) {
        if (!Array.isArray(value))
            return;
        var vals = [_getLength(value[0]), _getLength(value[1])];
        style[propertyName] = !value ? new UIElements_1.StyleTransformOrigin(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleTransformOrigin(new UIElements_1.TransformOrigin(vals[0], vals[1], 0));
    };
}
function setStyleListTimeValue(propertyName, valueType) {
    styleProcessors[propertyName] = function (style, value) {
        var UnityEngine = importNamespace("UnityEngine");
        var listType = System.Collections.Generic.List(UnityEngine.UIElements.TimeValue);
        var list = new listType();
        for (var i = 0; i < value.length; i++)
            list.Add(new UIElements_1.TimeValue(value[i]));
        var styleListNull = document.createStyleListWithKeyword(UIElements_1.StyleKeyword.Initial, getType(valueType));
        var styleList = document.createStyleList(list, getType(valueType));
        style[propertyName] = !value ? styleListNull : styleList;
    };
}
function setStyleListPropertyName(propertyName, valueType) {
    styleProcessors[propertyName] = function (style, value) {
        var UnityEngine = importNamespace("UnityEngine");
        var listType = System.Collections.Generic.List(UnityEngine.UIElements.StylePropertyName);
        var list = new listType();
        for (var i = 0; i < value.length; i++)
            list.Add(new UIElements_1.StylePropertyName(value[i]));
        var styleListNull = document.createStyleListWithKeyword(UIElements_1.StyleKeyword.Initial, getType(valueType));
        var styleList = document.createStyleList(list, getType(valueType));
        style[propertyName] = !value ? styleListNull : styleList;
    };
}
function setStyleListEasingFunction(propertyName, valueType) {
    styleProcessors[propertyName] = function (style, value) {
        var UnityEngine = importNamespace("UnityEngine");
        var listType = System.Collections.Generic.List(UnityEngine.UIElements.EasingFunction);
        var list = new listType();
        for (var i = 0; i < value.length; i++)
            list.Add(new UIElements_1.EasingFunction(UIElements_1.EasingMode[value[i]]));
        var styleListNull = document.createStyleListWithKeyword(UIElements_1.StyleKeyword.Initial, getType(valueType));
        var styleList = document.createStyleList(list, getType(valueType));
        style[propertyName] = !value ? styleListNull : styleList;
    };
}
function setStyleTranslate(propertyName) {
    styleProcessors[propertyName] = function (style, value) {
        if (typeof value == "string") {
            var tokens = value.split(/\s*,\s*|\s+/).filter(Boolean);
            var v1 = _getLength(tokens[0]);
            var v2 = _getLength(tokens[1]);
            style[propertyName] = new UIElements_1.StyleTranslate(new UIElements_1.Translate(v1 || new UIElements_1.Length(0), v2 || new UIElements_1.Length(0), 0));
        }
        else {
            var v = (0, float_parser_1.parseFloat3)(value);
            style[propertyName] = !value ? new UIElements_1.StyleTranslate(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleTranslate(new UIElements_1.Translate(new UIElements_1.Length(v.x), new UIElements_1.Length(v.y), v.z));
        }
    };
}
function setStyleFont(propertyName) {
    styleProcessors[propertyName] = function (style, value) {
        style[propertyName] = !value ? new UIElements_1.StyleFont(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleFont(typeof value == "string" ? resource.loadFont(value) : value);
    };
}
function setStyleFontDefinition(propertyName) {
    styleProcessors[propertyName] = function (style, value) {
        style[propertyName] = !value ? new UIElements_1.StyleFontDefinition(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleFontDefinition(typeof value == "string" ? resource.loadFont(value) : value);
    };
}
function setStyleBorderColor(propertyName) {
    styleProcessors[propertyName] = function (style, value) {
        style.borderTopColor = !value ? new UIElements_1.StyleColor(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleColor((0, color_parser_1.parseColor)(value));
        style.borderRightColor = !value ? new UIElements_1.StyleColor(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleColor((0, color_parser_1.parseColor)(value));
        style.borderBottomColor = !value ? new UIElements_1.StyleColor(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleColor((0, color_parser_1.parseColor)(value));
        style.borderLeftColor = !value ? new UIElements_1.StyleColor(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleColor((0, color_parser_1.parseColor)(value));
    };
}
function setStyleBorderWidth(propertyName) {
    styleProcessors[propertyName] = function (style, value) {
        var _a, _b, _c, _d;
        var vals = [0, 0, 0, 0];
        if (Array.isArray(value)) {
            vals = [(_a = parseFloat(value[0])) !== null && _a !== void 0 ? _a : 0, (_b = parseFloat(value[1])) !== null && _b !== void 0 ? _b : 0, (_c = parseFloat(value[2])) !== null && _c !== void 0 ? _c : 0, (_d = parseFloat(value[3])) !== null && _d !== void 0 ? _d : 0];
        }
        else if (typeof value === "number") {
            vals[0] = vals[1] = vals[2] = vals[3] = value;
        }
        style.borderTopWidth = !value ? new UIElements_1.StyleFloat(UIElements_1.StyleKeyword.Initial) : Utils_1.UIStyleUtil.GetStyleFloat(vals[0]);
        style.borderRightWidth = !value ? new UIElements_1.StyleFloat(UIElements_1.StyleKeyword.Initial) : Utils_1.UIStyleUtil.GetStyleFloat(vals[1]);
        style.borderBottomWidth = !value ? new UIElements_1.StyleFloat(UIElements_1.StyleKeyword.Initial) : Utils_1.UIStyleUtil.GetStyleFloat(vals[2]);
        style.borderLeftWidth = !value ? new UIElements_1.StyleFloat(UIElements_1.StyleKeyword.Initial) : Utils_1.UIStyleUtil.GetStyleFloat(vals[3]);
    };
}
function setStyleBorderRadius(propertyName) {
    styleProcessors[propertyName] = function (style, value) {
        var _a, _b, _c, _d;
        var vals = [0, 0, 0, 0];
        if (Array.isArray(value)) {
            vals = [(_a = parseFloat(value[0])) !== null && _a !== void 0 ? _a : 0, (_b = parseFloat(value[1])) !== null && _b !== void 0 ? _b : 0, (_c = parseFloat(value[2])) !== null && _c !== void 0 ? _c : 0, (_d = parseFloat(value[3])) !== null && _d !== void 0 ? _d : 0];
        }
        else if (typeof value === "number") {
            vals[0] = vals[1] = vals[2] = vals[3] = value;
        }
        style.borderTopLeftRadius = !value ? new UIElements_1.StyleLength(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleLength(new UIElements_1.Length(vals[0]));
        style.borderTopRightRadius = !value ? new UIElements_1.StyleLength(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleLength(new UIElements_1.Length(vals[1]));
        style.borderBottomRightRadius = !value ? new UIElements_1.StyleLength(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleLength(new UIElements_1.Length(vals[2]));
        style.borderBottomLeftRadius = !value ? new UIElements_1.StyleLength(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleLength(new UIElements_1.Length(vals[3]));
    };
}
function setStyleMargin(propertyName) {
    styleProcessors[propertyName] = function (style, value) {
        var _a, _b, _c, _d;
        var vals = [0, 0, 0, 0];
        if (Array.isArray(value)) {
            vals = [(_a = parseFloat(value[0])) !== null && _a !== void 0 ? _a : 0, (_b = parseFloat(value[1])) !== null && _b !== void 0 ? _b : 0, (_c = parseFloat(value[2])) !== null && _c !== void 0 ? _c : 0, (_d = parseFloat(value[3])) !== null && _d !== void 0 ? _d : 0];
        }
        else if (typeof value === "number") {
            vals[0] = vals[1] = vals[2] = vals[3] = value;
        }
        style.marginTop = !value ? new UIElements_1.StyleLength(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleLength(new UIElements_1.Length(vals[0]));
        style.marginRight = !value ? new UIElements_1.StyleLength(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleLength(new UIElements_1.Length(vals[1]));
        style.marginBottom = !value ? new UIElements_1.StyleLength(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleLength(new UIElements_1.Length(vals[2]));
        style.marginLeft = !value ? new UIElements_1.StyleLength(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleLength(new UIElements_1.Length(vals[3]));
    };
}
function setStylePadding(propertyName) {
    styleProcessors[propertyName] = function (style, value) {
        var _a, _b, _c, _d;
        var vals = [0, 0, 0, 0];
        if (Array.isArray(value)) {
            vals = [(_a = parseFloat(value[0])) !== null && _a !== void 0 ? _a : 0, (_b = parseFloat(value[1])) !== null && _b !== void 0 ? _b : 0, (_c = parseFloat(value[2])) !== null && _c !== void 0 ? _c : 0, (_d = parseFloat(value[3])) !== null && _d !== void 0 ? _d : 0];
        }
        else if (typeof value === "number") {
            vals[0] = vals[1] = vals[2] = vals[3] = value;
        }
        style.paddingTop = !value ? new UIElements_1.StyleLength(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleLength(new UIElements_1.Length(vals[0]));
        style.paddingRight = !value ? new UIElements_1.StyleLength(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleLength(new UIElements_1.Length(vals[1]));
        style.paddingBottom = !value ? new UIElements_1.StyleLength(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleLength(new UIElements_1.Length(vals[2]));
        style.paddingLeft = !value ? new UIElements_1.StyleLength(UIElements_1.StyleKeyword.Initial) : new UIElements_1.StyleLength(new UIElements_1.Length(vals[3]));
    };
}
globalThis.__setStyleProperty = function (style, key, value) {
    styleProcessors[key](style, value);
};
