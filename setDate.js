// const d = new Date();
// const set = d.setFullYear(2020);
// console.log(d);
// const d = new Date();
// d.setFullYear(2020, 11, 3);
// console.log(d)
// const d1 = new Date();
// d1.setMonth(11);
// console.log(d1);
// const d = new Date();
// d.setDate(15);
// // console.log(d);
// const d = new Date();
// d.setHours(22);
// console.log(d);

const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  console.log( "Today is before January 14, 2100.");
} else {
  console,log("Today is after January 14, 2100.");
}