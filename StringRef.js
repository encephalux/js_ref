const Ref = require("./Ref");

module.exports = class StringRef extends Ref {
    set value(_value) {
        if(typeof _value !== "string" && !(_value instanceof String))
            throw "StringRef: Invalid value tried to be set";
        this.zone = _value;
    }
};