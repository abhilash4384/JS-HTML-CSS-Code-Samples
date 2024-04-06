const myMap = new Map([
	['name1', 'abhilash'],
	['name2', 'kiara'],
	['name3', 'kiaran'],
]);

console.log('myMap = ', myMap);
const objName = {};

myMap.set(objName, 'Aniket');
myMap.set('value object', { bike: 'gixxer' });
console.log('myMap adding object as key = ', myMap);
console.log('myMap.has(objName) = ', myMap.has(objName));
console.log('myMap.get(objName) = ', myMap.get(objName));
console.log('myMap.size = ', myMap.size);

myMap.forEach((v, k) => console.log('inside foreach = ', v, k));
Array.from(myMap, (v) => console.log('using Array.from = ', v));

for (let item of myMap.entries()) {
	console.log('for of on myMap.entries() = ', item);
}

myMap.set('name2', 'Meher');
console.log(`after myMap.set('name2', 'Meher') = `, myMap);

for (let item of myMap.keys()) {
	console.log('for of only keys myMap.keys() = ', item);
}

for (let item of myMap.values()) {
	console.log('for of only values myMap.values() = ', item);
}

/**
 * Tip: To convert maps to object use Object.fromEntries() method,
 * in the below example we are trying to convert map to object then
 * converting it into json string
 */
console.log(
	'JSON strigify = ',
	JSON.stringify(Object.fromEntries(myMap), null, 2)
);

console.log('*'.padStart(25, '*'), 'start weak map', '*'.padStart(25, '*'));
const car1 = { name: 'Alto', isPrimary: true };
const car2 = { name: 'Figo', isPrimary: false };
const myWeakMap = new WeakMap([
	[car1, 1],
	[car2, 2],
]);
// weak set can not store primitive data
console.log(myWeakMap);

// weakmap is similar but the key must not be a primitive data type
// weakmap or weakset are a take garbage collected values out of scope
