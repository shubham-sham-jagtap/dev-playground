globalThis.studName = "Shubham";
globalThis.math = 40;
globalThis.eng = 20;

function getScore() {
	function add() {
		return `${globalThis.studName} scored ${globalThis.math + globalThis.eng}`;
	}

	return add();
}

console.log(typeof getScore())


