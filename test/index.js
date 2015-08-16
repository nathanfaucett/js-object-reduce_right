var tape = require("tape"),
    objectReduceRight = require("..");


tape("objectReduceRight(object, callback[, initialValue]) applies a function against an accumulator and each value of the object (from right-to-left) has to reduce it to a single value", function(assert) {
    assert.equals(
        objectReduceRight([0, 1, 2, 3, 4], function(currentValue, value) {
            return currentValue + value;
        }),
        10
    );
    assert.end();
});
