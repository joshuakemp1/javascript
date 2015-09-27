function fac (n) {
	if (n === 0){
		return 1;
	}
	else {
		return fac(n - 1) * n;
	}
}

console.log(fac(8));



// Same code just without the brackets

// function fac (n) {
// 	if (n === 0)
// 		return 1;
// 	else
// 		return fac(n - 1) * n;
// }

// console.log(fac(8));