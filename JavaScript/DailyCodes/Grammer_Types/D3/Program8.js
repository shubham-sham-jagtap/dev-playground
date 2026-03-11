/*console.log(true);
console.log(false);
console.log(new Boolean(true));
console.log(new Boolean(false));

console.log(true == new Boolean(true));   	//true
*/

if(true) {
	console.log("In First Block");
}
if(new Boolean(true)){
	console.log("In Second Block");
}

if(new Boolean(false)) {
	console.log("In Third Block");
}
