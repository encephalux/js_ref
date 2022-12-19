const Ref = require("Ref");

module.exports = class StringRef extends Ref {
    set value(_value) {
        if(typeof _value !== "number" && !(_value instanceof Number))
            throw "NumberRef: Invalid value tried to be set";
        this.zone = _value;
    }
};