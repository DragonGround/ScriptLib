Object.defineProperty(exports, "__esModule", { value: true });
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
}
exports.default = cloneRegExp;
