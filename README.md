object-reduce_right
=======

object reduce from the right for the browser and node.js


```javascript
var objectReduceRight = require("@nathanfaucett/object-reduce_right");


objectReduceRight({
        a: 0,
        b: 1,
        c: 2
    },
    function(currentValue, value) {
        return currentValue + value;
    }
) === 3;
```
