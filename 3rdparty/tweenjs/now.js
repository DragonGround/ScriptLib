Object.defineProperty(exports, "__esModule", { value: true });
var now;
if (typeof self === 'undefined' && typeof process !== 'undefined' && process.hrtime) {
    now = function () {
        var time = process.hrtime();
        return time[0] * 1000 + time[1] / 1000000;
    };
}
else if (typeof self !== 'undefined' && self.performance !== undefined && self.performance.now !== undefined) {
    now = self.performance.now.bind(self.performance);
}
else if (Date.now !== undefined) {
    now = Date.now;
}
else {
    now = function () {
        return new Date().getTime();
    };
}
exports.default = now;
