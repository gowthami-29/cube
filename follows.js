//1
let a=5;
let b=7;
let sum=a+b;
console.log(`${sum}`)

//b
const messages=`
Heloo gowthami,
Welcome to the Masai,
This is a message`;
console.log(messages)

//c
let firstname="Jhon";
let lastname="Doe";
console.log(`${firstname} ${lastname}`)


//2/a
const functions =(n)=>n*n;
console.log(functions(3))

//b
const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test();//array function dind't bind this keyword

const objd ={
    value:50,
    test()
    {
        console.log(this.value)
    }
};
objd.test()

//3//a
const product = { name: "Pen", price: 10 };
const copy={...product};
console.log(copy)

//b
const as = { x: 1 };
const bs = { y: 2 };
const results={...as,...bs}
console.log(results)

//c
const maxvalue=(...numbers)=>
{
    return Math.max(...numbers);
};
console.log(maxvalue(1,65,2,3,223,99))

//4//a
const arr = [105, 20, 30];
console[a,b]=arr;
console.log(a)
console.log(b)

//b
const laptop = { brand: "Dell", ram: "8GB" };
const {brand}=laptop;
console.log(brand);

//5 scoping
for (var i = 0; i < 3; i++) {}
console.log(i);

for (let j = 0; j < 3; j++) {}
console.log(j);


//6/a
let speed;
if (kmph > 60) {
  speed = "Fast";
} else {
  speed = "Normal";
}
let res=speed>60?"Fast":"Normal";

let ress=age>=18?"Adult":"Minor";

let resss=num>0?"positive":num===0?"Zero":"Negative";
console.log(resss)

