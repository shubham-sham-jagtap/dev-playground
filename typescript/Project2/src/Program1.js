function getSomething(something) {
    if (typeof something === 'string') {
        return "we are returning a string i.e., ".concat(something);
    }
    return "we are returning a number i.e., ".concat(something);
}
console.log(getSomething(24));
