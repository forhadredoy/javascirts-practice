const numbers = [4, 9, 16, 25, 29];
numbers.find((value,index,array) => {
    console.log(index>3);
    console.log(value*3);
})