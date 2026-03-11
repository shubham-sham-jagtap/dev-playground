console.log(x == undefined);
var x = 11;

function fun() {
	console.log(x);
	var x = 10;
}
fun();
