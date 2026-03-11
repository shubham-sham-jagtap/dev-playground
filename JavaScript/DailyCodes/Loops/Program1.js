const arr = [2, 3, 4];
arr.foo = "Hello";

for(const i in arr) {
	console.log(i);
}

for(const i of arr) {
	console.log(i);
}
