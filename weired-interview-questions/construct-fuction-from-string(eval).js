// 1: Execute a function by its string name
function fun(var1, var2) {
	console.log('yes you can exicute me');
	console.log('The addition is = ', var1 + var2);
}

eval(`fun(5,3)`);

//2: construct a function from its string representation
const funString = `function add(var1, var2) {
	console.log('yes you can exicute me');
	console.log('The addition is = ', var1 + var2);
}`;

eval(funString);
add(10, 10);
