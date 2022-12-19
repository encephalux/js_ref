module.exports = class Ref {
    constructor(_value) {
        this.zone = undefined;
        this.value = _value
    }

    get value() {
        return this.zone;
    }

    set value(_value) {
        this.zone = _value;
    }
};