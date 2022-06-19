// const d = new Date("2015-03-25");
// console.log(d);
// const d = new Date("2015-03");
//  console.log(d);
// const d = new Date("2015/03/25");
// console.log(d);

// const d1 = new Date("25-04-2015");
// console.log(d1);
// const d = new Date();
// const milis = d.getMilliseconds();
// console.log(milis);
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = days[d.getDay()];
console.log(day)

