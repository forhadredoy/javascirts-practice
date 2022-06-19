//array method 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.constructor;
// console.log(text);
//copywithin
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let copy = fruits.copyWithin(2,0,2);
// console.log(copy);
// const fruits1 = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
// console.log(fruits1.copyWithin(2, 0, 2));
//array entries
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();
// console.log(f)

// for (let [key,value] of f) {
//    console.log(`${key} = ${value}`);
// }
// every method


// const ages = [32, 33, 16, 40];

// ages.every(checkAge)

// function checkAge(age) {
//   console.log( age > 18);
// }

// ages.every(checkAge)

// const ages = [32, 33, 16, 40];

// ages.every(checkAge)

// function checkAge(age) {
//   return age > 18;
// }
// console.log(checkAge());
//fill
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.fill("hei",'my'));
// array.fill(value, start, end)
//filter
//  const ages = [32, 33, 16, 40];

// let filter = ages.filter( (age) => {
    
//     age>=14
   
// });
// console.log(filter);
// // const ages = [3, 10, 18, 20];

// let element = ages.find(checkAge);

// function checkAge(age) {

// return age>18
// }
// console.log(element);

// // }
// ages.find(checkAge)

//findindex
// let ranks = [1, 5, 7, 8, 10, 7];

// ranks.findIndex(
//     (rank, index) => rank === 7 && index > 2
   
// );
// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(ages.filter(checkAdult))

//array from method

// console.log(Array.from("ABCDEFG"));

//array include method
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.includes("Mango", 2));

// const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits1.includes("orange", 1));
//index of method
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let index = fruits.indexOf("Apple");
// console.log(index);
// let text = "W3Schools";
// let result = Array.isArray();
// console.log(result);
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let result = Array.isArray(fruits);
// console.log(result);
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// let text = fruits.join();
// console.log(text);

//keys

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();

// let text = 0;
// for (let x of keys) {
//   text += x;
//   console.log(text);
// }
// const numbers = [4, 9, 16, 25];
// console.log(numbers.map(Math.sqrt));
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.pop('Mango'));
// const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits1.pop());var arr = [34, 234, 567, 4];
// var arr = [34, 234, 567, 4];
// var popped = arr.pop();
// console.log(remove(popped));
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let remove =(fruits.pop());
// let pop =remove(remove)

// console.log(pop);
//reduce
const numbers = [75, 100, 25];

number =numbers.reduce((total,num)=>{

return (total-num)
})
console.log(number);



//reduce right


const numbers1 = [10,50, 90];

let number1 =numbers1.reduceRight((num1,total1)=>{

return (total1-num1)
})
console.log(number1);














