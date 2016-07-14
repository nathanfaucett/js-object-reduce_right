var keys = require("@nathanfaucett/keys"),
    isUndefined = require("@nathanfaucett/is_undefined");


module.exports = objectReduceRight;


function objectReduceRight(object, callback, initialValue) {
    var objectKeys = keys(object),
        length = objectKeys.length,
        value = initialValue,
        i, key;

    if (isUndefined(value)) {
        i = length - 1;
        value = object[objectKeys[i]];
    } else {
        i = length;
    }

    while (i--) {
        key = objectKeys[i];
        value = callback(value, object[key], key, object);
    }

    return value;
}
