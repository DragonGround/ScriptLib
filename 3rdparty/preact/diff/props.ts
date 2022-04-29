import { FontLoader, ImageLoader, UIStyleUtil } from 'OneJS/Utils'
import { parseColor } from 'onejs/utils/color-parser'
import { parseFloat2, parseFloat3 } from 'onejs/utils/float-parser'
import { Style } from 'preact/jsx'
import { List } from 'System/Collections/Generic'
import { Color, Font, FontStyle } from 'UnityEngine'
import { Align, Angle, Background, Cursor, DisplayStyle, EasingFunction, FlexDirection, IStyle, Justify, Length, LengthUnit, OverflowClipBox, Position, Rotate, Scale, ScaleMode, StyleBackground, StyleColor, StyleCursor, StyleEnum, StyleFloat, StyleFont, StyleFontDefinition, StyleInt, StyleKeyword, StyleLength, StylePropertyName, StyleRotate, StyleScale, StyleTextShadow, StyleTransformOrigin, StyleTranslate, TextAnchor, TextOverflow, TextOverflowPosition, TextShadow, TimeValue, TransformOrigin, Translate, Visibility, WhiteSpace, Wrap } from 'UnityEngine/UIElements'
import { IS_NON_DIMENSIONAL } from '../constants'
import options from '../options'

/**
 * Diff the old and new properties of a VNode and apply changes to the DOM node
 * @param {import('../internal').PreactElement} dom The DOM node to apply
 * changes to
 * @param {object} newProps The new props
 * @param {object} oldProps The old props
 * @param {boolean} isSvg Whether or not this node is an SVG node
 * @param {boolean} hydrate Whether or not we are in hydration mode
 */
export function diffProps(dom, newProps, oldProps, isSvg, hydrate) {
	let i;

	for (i in oldProps) {
		if (i !== 'children' && i !== 'key' && !(i in newProps)) {
			setProperty(dom, i, null, oldProps[i], isSvg);
		}
	}

	for (i in newProps) {
		if (
			(!hydrate || typeof newProps[i] == 'function') &&
			i !== 'children' &&
			i !== 'key' &&
			i !== 'value' &&
			i !== 'checked' &&
			oldProps[i] !== newProps[i]
		) {
			setProperty(dom, i, newProps[i], oldProps[i], isSvg);
		}
	}
}

function setStyle(style, key, value) {
	// if (key[0] === '-') {
	// 	style.setProperty(key, value);
	// } else if (value == null) {
	// 	style[key] = null;
	// } else if (typeof value != 'number' || IS_NON_DIMENSIONAL.test(key)) {
	// 	style[key] = value;
	// } else {
	// 	style[key] = value + 'px';
	// }

	styleProcessors[key](style, value)
}

/**
 * Set a property value on a DOM node
 * @param {import('../internal').PreactElement} dom The DOM node to modify
 * @param {string} name The name of the property to set
 * @param {*} value The value to set the property to
 * @param {*} oldValue The old value the property had
 * @param {boolean} isSvg Whether or not this DOM node is an SVG node or not
 */
export function setProperty(dom, name, value, oldValue, isSvg) {
	let useCapture;

	o: if (name === 'style') {
		if (oldValue) {
			for (name in oldValue) {
				if (!(value && name in value)) {
					setStyle(dom.style, name, null);
				}
			}
		}

		if (value) {
			for (name in value) {
				if (!oldValue || value[name] !== oldValue[name]) {
					setStyle(dom.style, name, value[name]);
				}
			}
		}
	}
	// Benchmark for comparison: https://esbench.com/bench/574c954bdb965b9a00965ac6
	else if (name[0] === 'o' && name[1] === 'n') {
		useCapture = name !== (name = name.replace(/Capture$/, ''));

		// Infer correct casing for DOM built-in events:
		if (name.toLowerCase() in dom) name = name.toLowerCase().slice(2);
		else name = name.slice(2);

		if (!dom._listeners) dom._listeners = {};
		dom._listeners[name + useCapture] = value;

		if (value) {
			if (!oldValue) {
				const handler = useCapture ? eventProxyCapture : eventProxy;
				dom.addEventListener(name, handler, useCapture);
			}
		} else {
			const handler = useCapture ? eventProxyCapture : eventProxy;
			dom.removeEventListener(name, handler, useCapture);
		}
	} else if (name !== 'dangerouslySetInnerHTML') {
		if (isSvg) {
			// Normalize incorrect prop usage for SVG:
			// - xlink:href / xlinkHref --> href (xlink:href was removed from SVG and isn't needed)
			// - className --> class
			name = name.replace(/xlink[H:h]/, 'h').replace(/sName$/, 's');
		} else if (
			name !== 'href' &&
			name !== 'list' &&
			name !== 'form' &&
			// Default value in browsers is `-1` and an empty string is
			// cast to `0` instead
			name !== 'tabIndex' &&
			name !== 'download' &&
			name in dom
		) {
			try {
				// dom[name] = value == null ? '' : value;
				dom.setAttribute(name, value == null ? null : value);
				// labelled break is 1b smaller here than a return statement (sorry)
				break o;
			} catch (e) { }
		}

		// ARIA-attributes have a different notion of boolean values.
		// The value `false` is different from the attribute not
		// existing on the DOM, so we can't remove it. For non-boolean
		// ARIA-attributes we could treat false as a removal, but the
		// amount of exceptions would cost us too many bytes. On top of
		// that other VDOM frameworks also always stringify `false`.

		if (typeof value === 'function') {
			// never serialize functions as attribute values
		} else if (
			value != null &&
			(value !== false || (name[0] === 'a' && name[1] === 'r'))
		) {
			dom.setAttribute(name, value);
		} else {
			dom.removeAttribute(name);
		}
	}
}

/**
 * Proxy an event to hooked event handlers
 * @param {Event} e The event object from the browser
 * @private
 */
function eventProxy(e) {
	this._listeners[getType(e).Name.replace("Event", "") + false](options.event ? options.event(e) : e);
}

function eventProxyCapture(e) {
	this._listeners[getType(e).Name.replace("Event", "") + true](options.event ? options.event(e) : e);
}


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
setStyleLength("opacity")
setStyleFloat("overflow")
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
		let styleEnum = (document as any).createStyleEnum(enumType[value], getType(enumType))
		style[propertyName] = value == null ? styleEnumNull : styleEnum
	}
}

function setStyleColor(propertyName: keyof Style) {
	styleProcessors[propertyName] = (style, value) => {
		style[propertyName] = value == null ? new StyleColor(StyleKeyword.Initial) : new StyleColor(parseColor(value).ToColor())
	}
}

function setStyleBackground(propertyName: keyof Style) {
	styleProcessors[propertyName] = (style, value) => {
		style[propertyName] = value == null ? new StyleBackground(StyleKeyword.Initial) : new StyleBackground(Background.FromTexture2D(typeof value == "string" ? ImageLoader.Load(value) : value))
	}
}

function setStyleLength(propertyName: keyof Style) {
	styleProcessors[propertyName] = (style, value) => {
		let v: Length
		if (typeof value === "string") {
			let n = parseFloat(value.endsWith("%") ? value.replace("%", "") : value)
			if (!isNaN(n))
				v = new Length(n, LengthUnit.Percent)
		} else if (typeof value === "number") {
			v = new Length(value)
		}
		style[propertyName] = value == null || typeof v === "undefined" ? new StyleLength(StyleKeyword.Initial) : new StyleLength(v)
	}
}

function setStyleFloat(propertyName: keyof Style) {
	styleProcessors[propertyName] = (style, value) => {
		style[propertyName] = value == null ? new StyleFloat(StyleKeyword.Initial) : UIStyleUtil.GetStyleFloat(value)
	}
}

function setStyleInt(propertyName: keyof Style) {
	styleProcessors[propertyName] = (style, value) => {
		style[propertyName] = value == null ? new StyleInt(StyleKeyword.Initial) : UIStyleUtil.GetStyleInt(value)
	}
}

function setStyleCursor(propertyName: keyof Style) {
	styleProcessors[propertyName] = (style, value) => {
		let cursor = new Cursor()
		cursor.texture = value.texture
		cursor.hotspot = value.hotspot
		style[propertyName] = value == null ? new StyleCursor(StyleKeyword.Initial) : new StyleCursor(new Cursor())
	}
}

function setStyleRotate(propertyName: keyof Style) {
	styleProcessors[propertyName] = (style, value) => {
		style[propertyName] = value == null ? new StyleRotate(StyleKeyword.Initial) : new StyleRotate(new Rotate(new Angle(value)))
	}
}

function setStyleScale(propertyName: keyof Style) {
	styleProcessors[propertyName] = (style, value) => {
		var v = parseFloat2(value)
		style[propertyName] = value == null ? new StyleScale(StyleKeyword.Initial) : new StyleScale(new Scale(v))
	}
}

function setStyleTextShadow(propertyName: keyof Style) {
	styleProcessors[propertyName] = (style, value) => {
		let ts = new TextShadow()
		ts.offset = parseFloat2(value.offset)
		ts.blurRadius = value.blurRadius
		ts.color = parseColor(value.color).ToColor()
		style[propertyName] = value == null ? new StyleTextShadow(StyleKeyword.Initial) : new StyleTextShadow(ts)
	}
}

function setStyleTransformOrigin(propertyName: keyof Style) {
	styleProcessors[propertyName] = (style, value) => {
		let v = parseFloat3(value)
		style[propertyName] = value == null ? new StyleTransformOrigin(StyleKeyword.Initial) : new StyleTransformOrigin(new TransformOrigin(new Length(v.x), new Length(v.y), v.z))
	}
}

function setStyleListTimeValue(propertyName: keyof Style, valueType) {
	styleProcessors[propertyName] = (style, value) => {
		let vals = (value as number[]).map(a => new TimeValue(a))
		let list = new List<TimeValue>(vals)
		let styleListNull = (document as any).createStyleListWithKeyword(StyleKeyword.Initial, getType(valueType))
		let styleList = (document as any).createStyleList(list, getType(valueType))
		style[propertyName] = value == null ? styleListNull : styleList
	}
}

function setStyleListPropertyName(propertyName: keyof Style, valueType) {
	styleProcessors[propertyName] = (style, value) => {
		let vals = (value as string[]).map(a => new StylePropertyName(a))
		let list = new List<StylePropertyName>(vals)
		let styleListNull = (document as any).createStyleListWithKeyword(StyleKeyword.Initial, getType(valueType))
		let styleList = (document as any).createStyleList(list, getType(valueType))
		style[propertyName] = value == null ? styleListNull : styleList
	}
}

function setStyleListEasingFunction(propertyName: keyof Style, valueType) {
	styleProcessors[propertyName] = (style, value) => {
		let vals = (value as (keyof typeof EasingFunction)[]).map(a => EasingFunction[a])
		let list = new List<StylePropertyName>(vals)
		let styleListNull = (document as any).createStyleListWithKeyword(StyleKeyword.Initial, getType(valueType))
		let styleList = (document as any).createStyleList(list, getType(valueType))
		style[propertyName] = value == null ? styleListNull : styleList
	}
}

function setStyleTranslate(propertyName: keyof Style) {
	styleProcessors[propertyName] = (style, value) => {
		var v = parseFloat3(value)
		style[propertyName] = value == null ? new StyleTranslate(StyleKeyword.Initial) : new StyleTranslate(new Translate(new Length(v.x), new Length(v.y), v.z))
	}
}

function setStyleFont(propertyName: keyof Style) {
	styleProcessors[propertyName] = (style, value) => {
		style[propertyName] = value == null ? new StyleFont(StyleKeyword.Initial) : new StyleFont(typeof value == "string" ? FontLoader.Load(value) : value)
	}
}

function setStyleFontDefinition(propertyName: keyof Style) {
	styleProcessors[propertyName] = (style, value) => {
		style[propertyName] = value == null ? new StyleFontDefinition(StyleKeyword.Initial) : new StyleFontDefinition(typeof value == "string" ? FontLoader.Load(value) : value)
	}
}

function setStyleBorderColor(propertyName: keyof Style) {
	styleProcessors[propertyName] = (style: IStyle, value) => {
		style.borderTopColor = value == null ? new StyleColor(StyleKeyword.Initial) : new StyleColor(parseColor(value).ToColor())
		style.borderRightColor = value == null ? new StyleColor(StyleKeyword.Initial) : new StyleColor(parseColor(value).ToColor())
		style.borderBottomColor = value == null ? new StyleColor(StyleKeyword.Initial) : new StyleColor(parseColor(value).ToColor())
		style.borderLeftColor = value == null ? new StyleColor(StyleKeyword.Initial) : new StyleColor(parseColor(value).ToColor())
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
		style.borderTopWidth = value == null ? new StyleFloat(StyleKeyword.Initial) : new StyleFloat(vals[0])
		style.borderRightWidth = value == null ? new StyleFloat(StyleKeyword.Initial) : new StyleFloat(vals[1])
		style.borderBottomWidth = value == null ? new StyleFloat(StyleKeyword.Initial) : new StyleFloat(vals[2])
		style.borderLeftWidth = value == null ? new StyleFloat(StyleKeyword.Initial) : new StyleFloat(vals[3])
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
		style.borderTopLeftRadius = value == null ? new StyleLength(StyleKeyword.Initial) : new StyleLength(new Length(vals[0]))
		style.borderTopRightRadius = value == null ? new StyleLength(StyleKeyword.Initial) : new StyleLength(new Length(vals[1]))
		style.borderBottomRightRadius = value == null ? new StyleLength(StyleKeyword.Initial) : new StyleLength(new Length(vals[2]))
		style.borderBottomLeftRadius = value == null ? new StyleLength(StyleKeyword.Initial) : new StyleLength(new Length(vals[3]))
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
		style.marginTop = value == null ? new StyleLength(StyleKeyword.Initial) : new StyleLength(new Length(vals[0]))
		style.marginRight = value == null ? new StyleLength(StyleKeyword.Initial) : new StyleLength(new Length(vals[1]))
		style.marginBottom = value == null ? new StyleLength(StyleKeyword.Initial) : new StyleLength(new Length(vals[2]))
		style.marginLeft = value == null ? new StyleLength(StyleKeyword.Initial) : new StyleLength(new Length(vals[3]))
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
		style.paddingTop = value == null ? new StyleLength(StyleKeyword.Initial) : new StyleLength(new Length(vals[0]))
		style.paddingRight = value == null ? new StyleLength(StyleKeyword.Initial) : new StyleLength(new Length(vals[1]))
		style.paddingBottom = value == null ? new StyleLength(StyleKeyword.Initial) : new StyleLength(new Length(vals[2]))
		style.paddingLeft = value == null ? new StyleLength(StyleKeyword.Initial) : new StyleLength(new Length(vals[3]))
	}
}