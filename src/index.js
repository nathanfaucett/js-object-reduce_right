var keys = require("keys");


module.exports = objectReduceRight;


function objectReduceRight(object, callback, initialValue) {
    var objectKeys = keys(object),
        length = objectKeys.length,
        value = initialValue,
        i, key;

    if (value === undefined) {
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
