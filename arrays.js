// Arreglos
const arregloNumeros = [1, 2, 3, 4, 5];
const arregloPalabras = ["apple", "banana", "orange"];

//push → Agrega al final
arregloNumeros.push(6);
console.log("push:", arregloNumeros);

//pop() → Elimina el último
arregloNumeros.pop();
console.log("pop:", arregloNumeros);

//unshift() → Agrega al inicio
arregloNumeros.unshift(0);
console.log("unshift:", arregloNumeros);

//shift() → Elimina el primero
arregloNumeros.shift();
console.log("shift:", arregloNumeros);

//map() → Retorna nuevo array transformado.
const doubled = arregloNumeros.map(n => n * 2);
console.log("map:", doubled);

//filter() → Filtra elementos
const evens = arregloNumeros.filter(n => n % 2 === 0);
console.log("filter:", evens);

//reduce() → Reduce a un solo valor
const sum = arregloNumeros.reduce((acc, curr) => acc + curr, 0);
console.log("reduce:", sum);

//forEach() → Recorre el array
arregloNumeros.forEach(n => console.log("forEach:", n));

//find() → Encuentra el primer elemento
const found = arregloNumeros.find(n => n > 3);
console.log("find:", found);

//findIndex() -> Encuentra el índice
const index = arregloNumeros.findIndex(n => n === 3);
console.log("findIndex:", index);

//includes()
console.log("includes:", arregloNumeros.includes(4));

//some() -> Verifica si al menos uno cumple la condición
console.log("some:", arregloNumeros.some(n => n > 4));

//every() -> Verifica si todos cumplen la condición
console.log("every:", arregloNumeros.every(n => n > 0));

//sort() -> Ordena el array
const sorted = [...arregloNumeros].sort((a, b) => b - a);
console.log("sort:", sorted);

//reverse() -> Invierte el orden
console.log("reverse:", [...arregloNumeros].reverse());

//slice() → copia parte del array
console.log("slice:", arregloNumeros.slice(1, 3));

//splice() → elimina o reemplaza
const copy = [...arregloNumeros];
copy.splice(2, 1);
console.log("splice:", copy);

//concat() -> combina arrays
const combined = arregloNumeros.concat([7, 8]);
console.log("concat:", combined);

//join() -> une elementos en string
console.log("join:", arregloPalabras.join(" - "));

//flat() -> aplana arrays anidados
const nested = [1, [2, 3], [4]];
console.log("flat:", nested.flat());

//flatMap() -> mapea y aplana
const flatMapped = arregloNumeros.flatMap(n => [n, n * 2]);
console.log("flatMap:", flatMapped);

//Array.from() -> crea array desde iterable
console.log("Array.from:", Array.from("hello"));

//Array.isArray() -> verifica si es un array
console.log("Array.isArray:", Array.isArray(arregloNumeros));