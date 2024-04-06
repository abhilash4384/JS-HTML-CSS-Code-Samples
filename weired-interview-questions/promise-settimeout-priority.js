let v = 10;
function print() {
	setTimeout(() => {
		console.log('setTimeout =', v);
	});

	Promise.resolve('Promise =').then((x) => console.log(x, v));

	console.log(v);

	// let v = 5; // error: Cannot access 'v' before initialization

	v = 5;
}
print();

// Output: 10
// Promise = 5
// setTimeout = 5
