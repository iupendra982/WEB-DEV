function hello(){
    console.log("Hello, World!");
}
hello();//calling function

function sum(a,b){
    return a+b;
}
let s=sum(3,4);
console.log(s);

let str=["hi","hello","bye","!"];
console.log(str);

function concat(str){
    let result="";
    for(let i=1;i<str.length;i++){
        result +=str[i];
    }
    return result;
}

console.log(concat(str));

//function expressions
const average=function(a,b){
    return (a+b)/2;
}
console.log(average(5,6));

//high order functions
function greet(name){
    console.log("Hello, "+name);
}
function multipleGreet(func,n){
    for(let i=1;i<=n;i++){
        func();
    }    
}

//calling multiple functions
multipleGreet(greet,2);


//Methods
const calculator={
    num:55,
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
}
console.log(calculator);
console.log(calculator.num);
console.log(calculator.add(5,6));

//the same function can be written in shorter code also
const calculator2={
    num:55,
    add(a,b){return a+b},
    sub(a,b){return a-b},
    mul(a,b){return a*b}
    }
    console.log(calculator2);
    console.log(calculator2.num);
    console.log(calculator2.add(5,6));

//this keyword in js
//function insiade a object can not use variables defined in the object
//directly that's why we use this keyword
const student={
    name:"Rahul",
    age:20,
    eng:55,
    math:98,
    phy:97,
    getavg(){
        avg=(this.eng+this.math+this.phy)/3;//here this means student object
        console.log(avg);
    }
}

//try and catch
try{
    console.log(a);
}catch(e){
    console.log("variable a is not defined");
    console.log(e);
}


//arrow function
const sum1=(a,b)=>{
    console.log(a+b);
}
sum1(5,4);

//implicit return in arrow function
const mul=(a,b)=>a*b;
console.log(mul(5,6));

//set timeout function
console.log("Set Timeout function");
console.log("Hi there !");
setTimeout(()=>{
    console.log("Apna College");
},1000);
console.log("Welcome to")

//set interval function
console.log("Set Interval function");
let id=setInterval(()=>{
    console.log("Hi");
},4000);
console.log(id);
//clear interval function
clearInterval(id);


//this with arrow functions