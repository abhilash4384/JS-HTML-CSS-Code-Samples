const mySet = new Set(['kiara', 'abhilash', 'aniket', 'praveena']);
console.log('mySet = ', mySet);
console.log('mySet has kiara = ', mySet.has('kiara'));
console.log('mySet.size = ', mySet.size);
mySet.add('kiran');
console.log('mySet after adding kiran= ', mySet);
mySet.forEach((v) => console.log(`forEach value = ${v}`));
mySet.delete('abhilash');
console.log(`after deleting mySet.delete('abhilash') = `, mySet);
for (let item of mySet) {
	console.log('for of loop = ', item);
}
mySet.add({ name: 'alto', isAsset: true });
console.log('after adding object on mySet = ', mySet);
console.log('convert to array using [...mySet] = ', [...mySet]);

const stringify = JSON.stringify(Array.from(mySet), null, 2);
console.log(
	'stringify json as =JSON.stringify(Array.from(mySet), null, 2) ',
	stringify
);

console.log('*'.padStart(25, '*'), 'start weak set', '*'.padStart(25, '*'));
const car1 = { name: 'Alto', isPrimary: true };
const car2 = { name: 'Figo', isPrimary: false };
const myWeakSet = new WeakSet([car1, car2]);
// weak set can not store primitive data
console.log(myWeakSet);
/**
 * How to update specific item in set/map
 * how to json stringify
 *
 * */
