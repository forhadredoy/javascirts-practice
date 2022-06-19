const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();


let text = 0;
for (let x of keys) {
    text =x+text;
    console.log(text)
}
