function employee(identity: string | number, role: string): string {
    if(typeof identity === "string") {
        return `employee name is ${identity} and role is ${role}`;
    }
    return `employee id is ${identity} and role is ${role}`
}

console.log(employee("shubham", "QA"));
console.log(employee(1011, "QA"));