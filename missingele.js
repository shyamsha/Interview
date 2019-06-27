let arr1 = [7, 8, 9, 3, 1, 2, 5, 4];

function missingElement(arr1) {
	let missing;
	let sort = arr1.sort((a, b) => a - b);
	for (let i = 0; i < arr1.length - 1; i++) {
		let add = arr1[i + 1] - arr1[i];
		if (add == 2) {
			return arr1[i] + 1;
		} else if (add == -2) {
			return arr1[i] - 1;
		}
	}
}

console.log(missingElement(arr1));
