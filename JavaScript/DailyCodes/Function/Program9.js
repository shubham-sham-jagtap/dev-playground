function fun(...items) {
	console.log(typeof items)
	for (let item of items) {
		console.log(item);
	}
}

fun(",", "Shubham", "Yogesh", "Sase");
