"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var utils_1 = require("@/lib/utils");
function useGTM(offset) {
    var _a = (0, react_1.useState)((0, utils_1.getGTMTime)(offset)), time = _a[0], setTime = _a[1];
    (0, react_1.useEffect)(function () {
        var interval = setInterval(function () {
            setTime((0, utils_1.getGTMTime)(offset));
        }, 1000);
        return function () { return clearInterval(interval); };
    }, [offset]);
    return time;
}
exports.default = useGTM;
