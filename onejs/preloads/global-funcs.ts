
function assign_struct<T>(type: { new(): T }, obj: any): T {
    var result = new type()
    for (var key in obj) {
        if (key.startsWith("_"))
            continue
        let val = obj[key]
        if (typeof val == "object" && val._type) {
            result[key] = assign_struct(val._type, val)
            continue
        }
        result[key] = obj[key]
    }
    return result
}

globalThis.assign_struct = assign_struct