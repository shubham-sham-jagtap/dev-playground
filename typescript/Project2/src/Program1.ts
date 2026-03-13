function getSomething(something: number | string): string {
    if(typeof something === 'string') {
        return `we are returning a string i.e., ${something}`;
    }
    return `we are returning a number i.e., ${something}`
}

function fun1(msg?: string) {
    if(msg) {
        return `Got the message, the message is: ${msg}`;
    }
    return `No message`;
}

class Demo1 {
    fun() {
        return `Demo1 fun`;
    }
}

class Demo2 {
    fun() {
        return `Demo1 fun`;
    }
}

function fun(blueprint: Demo1 | Demo2): any {
    if(blueprint instanceof Demo1) {
        console.log(blueprint.fun());
    }
    return console.log(blueprint.fun());
}

type chaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj: any): obj is chaiOrder {
    return (typeof obj === "object" && 
        typeof obj.type === "string" && 
        typeof obj.name === "number" &&
    obj != null);
}

function serveChai(item: string | chaiOrder) {
    if (isChaiOrder(item)) {
        return `the object type is chai order`;
    }
    return `the received data is ${item}`;
}
// console.log(getSomething(24));
// console.log(fun());
console.log(serveChai("Shubham"))