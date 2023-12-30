// const balance = new Number(100);
// console.log(balance.toString().length)

// console.log(balance.toFixed(1))

// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(5))

const hundreds = 10000000000
console.log(hundreds.toLocaleString('en-IN'))

//+++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++

// console.log(Math.abs(-3))
// console.log(Math.round(3.4))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(3.4))
// console.log(Math.min(2,3,4,5,6));
// console.log(Math.max(2,3,45,6,6,7,8))

console.log(Math.random());
console.log(Math.floor((Math.random()*10)+1))

const min = 10 
const max = 20
console.log(Math.floor(Math.random() * (max-min+1)) + min)