function fun() {
	console.log("In fun");
	return typeof globalThis.XMLHttpRequest === "function";
}

console.log( fun() );
