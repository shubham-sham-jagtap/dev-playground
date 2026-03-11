function getSomething(something: number | string): string {
    if(typeof something === 'string') {
        return `we are returning a string i.e., ${something}`;
    }
    return `we are returning a number i.e., ${something}`
}

console.log(getSomething(24));