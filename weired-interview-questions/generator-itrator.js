function* generatorFunction() {
	yield 1;
	yield 2;
}

const itr = generatorFunction();

// console.log(itr.next());

for (let i of itr) console.log(i);
