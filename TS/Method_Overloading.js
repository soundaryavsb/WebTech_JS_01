"use strict";
class Main {
    add(a, b, c) {
        if (c === undefined) {
            return a + b;
        }
        else {
            return a + b + c;
        }
    }
}
let obj = new Main();
console.log(obj.add(10, 20));
console.log(obj.add(19, 27, 89));
