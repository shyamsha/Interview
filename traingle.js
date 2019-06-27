let a = 4;
for (let i = 1; i <= a; i++) {
	let char = " ".repeat(a - i);
	let left = "*".repeat(i - 1);
	let center = "*".repeat(1);
	let right = "*".repeat(i - 1);
	let pattern = char + left + center + right;
	console.log(pattern);
}
