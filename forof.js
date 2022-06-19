const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
    text+=x
}
const cars1 = ["BMW", "Volvo", "Mini"];

let text1 = "";
for (let x of cars) {
    text1+=x
}
const add=text.concat(text1);
// const length =add.length();
const index=add.indexOf('B');
const upperCase=add.toUpperCase();
const search=add.search('V');

console.log(add);
// console.log(length);
console.log(index);
console.log(upperCase);
console.log(search);



