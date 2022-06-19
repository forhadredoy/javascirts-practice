let number= [175,50,,40, 45,20];


const numbers = number.reduceRight((total,num)=>{

    return(total+num);

})
console.log(numbers);