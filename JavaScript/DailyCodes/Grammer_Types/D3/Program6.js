const baseEmployee = {
	Company: "Indexnine",
	Role: "QA",
	Stipend: 15000
}

const Employee = {
	__proto__ : baseEmployee,
	Name: "Shubham",
	//Stipend: super.Stipend
}

console.log(typeof Employee);
