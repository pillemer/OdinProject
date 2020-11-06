function add () {
	let ans = 0
	for (let i=0; i<arguments.length; i++) {
		ans += arguments[i];
	}
	return ans
}

function subtract () {
	return arguments[0] - arguments[1];	
}

function sum (arr) {
	let ans = 0;
	for (let key in arr) {
		ans += arr[key];
	} 
	return ans
}

function multiply (arr) {
	let ans = 1;
	for (let key in arr) {
		ans *= arr[key];
	} 
	return ans
}

function power() {
	return arguments[0] ** arguments[1];
}

function factorial() {
	let ans = 1;
	for (let i = 1; i <= arguments[0]; i++){
		ans *= i;
	}
	return ans
}
