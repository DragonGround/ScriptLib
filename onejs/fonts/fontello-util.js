var fontname = "fontawesome";
var jsonData = require("onejs/fonts/".concat(fontname, ".json"));
var str = "{\n";
for (var _i = 0, _a = jsonData.glyphs; _i < _a.length; _i++) {
    var item = _a[_i];
    str += "    \"".concat(item.css, "\": ").concat(item.code, ",\n");
}
str += "}";
importNamespace("System.IO").File.WriteAllText(__dirname + "/".concat(fontname, ".json"), str);
