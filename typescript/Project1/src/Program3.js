function employee(identity, role) {
    if (typeof identity === "string") {
        return "employee name is ".concat(identity, " and role is ").concat(role);
    }
    return "employee id is ".concat(identity, " and role is ").concat(role);
}
console.log(employee("shubham", "QA"));
console.log(employee(1011, "QA"));
