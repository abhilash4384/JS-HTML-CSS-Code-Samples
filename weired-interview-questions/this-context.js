// // This & Arrow With Object
scope = 'Global Scope';
const obj = {
	scope: 'Object',
	printArrowScope: () => {
		console.log('Arrow = ', this, ' = ', this.scope);
		// this points to {}
	},
	printFunctionScope: function () {
		console.log('Function = ', this, ' = ', this.scope);
		// this points to current object
	},
};

obj.printArrowScope();
obj.printFunctionScope();

// scope = 'Global Scope';
// function print() {
// 	const scope = 'Function';

// 	const printArrowScope = () => {
// 		console.log('Arrow = ', this, ' = ', this.scope);
// 		// point to window/global object
// 	};

// 	function printFunctionScope() {
// 		console.log('Function = ', this, ' = ', this.scope);
// 		// point to window/global object
// 	}

// 	printArrowScope();
// 	printFunctionScope();

// 	return {
// 		printArrowScope,
// 		printFunctionScope,
// 	};
// }

// const { printArrowScope, printFunctionScope } = print();

// function fun() {
// 	var scope = 'Function';
// 	printArrowScope();
// 	printFunctionScope();
// }

// fun();
