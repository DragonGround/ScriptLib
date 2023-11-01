
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

globalThis.callWithThisObj = function (func: Function, thisObj: any, args: any) {
    // This way is much more performant than using the spread operator or Array.from
    // Auto Conversion is very costly in ClearScript
    if (args.Length == 0)
        func.call(thisObj)
    else if (args.Length == 1)
        func.call(thisObj, args[0])
    else if (args.Length == 2)
        func.call(thisObj, args[0], args[1])
}