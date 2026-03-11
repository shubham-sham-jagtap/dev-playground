studName = "Shubham";
math = 40;
eng = 20;

function getScore() {
	function add() {
		return `${studName} scored ${math + eng}`;
	}

	return add;
}

fun = getScore()
console.log(fun())


