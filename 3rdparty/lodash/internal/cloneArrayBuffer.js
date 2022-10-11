Object.defineProperty(exports, "__esModule", { value: true });
function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
}
exports.default = cloneArrayBuffer;
