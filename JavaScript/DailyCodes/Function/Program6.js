function mother() {
	tiffen = "sandwitch";

	function child() {
		return `today mother gave me ${tiffen}`;
	}

	return child;
}

student = mother();
console.log(student())
