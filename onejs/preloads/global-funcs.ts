
function struct<T>(type: { new(): T }, obj: any): T {
    var result = new type()
    for (var key in obj) {
        if (key.startsWith("_"))
            continue
        let val = obj[key]
        if (typeof val == "object" && val._type) {
            result[key] = struct(val._type, val)
            continue
        }
        result[key] = obj[key]
    }
    return result
}

globalThis.struct = struct