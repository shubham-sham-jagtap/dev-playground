function getSomething(something) {
    if (typeof something === 'string') {
        return "we are returning a string i.e., ".concat(something);
    }
    return "we are returning a number i.e., ".concat(something);
}
function fun1(msg) {
    if (msg) {
        return "Got the message, the message is: ".concat(msg);
    }
    return "No message";
}
var Demo1 = /** @class */ (function () {
    function Demo1() {
    }
    Demo1.prototype.fun = function () {
        return "Demo1 fun";
    };
    return Demo1;
}());
var Demo2 = /** @class */ (function () {
    function Demo2() {
    }
    Demo2.prototype.fun = function () {
        return "Demo1 fun";
    };
    return Demo2;
}());
function fun(blueprint) {
    if (blueprint instanceof Demo1) {
        console.log(blueprint.fun());
    }
    return console.log(blueprint.fun());
}
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        typeof obj.type === "string" &&
        typeof obj.name === "number" &&
        obj != null);
}
function serveChai(item) {
    if (isChaiOrder(item)) {
        return "the object type is chai order";
    }
    return "the received data is ".concat(item);
}
// console.log(getSomething(24));
// console.log(fun());
console.log(serveChai("Shubham"));
