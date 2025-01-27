//forEach Method
let arr=[1,2,3,4];

let print=function(el){
    console.log(el);
};

arr.forEach(print);//calling the function with forEach method
//OR
//we can directly pass the function inside forEach method
arr.forEach(function(el){
    console.log(el);
});
//we can also do this for array of objects
let arr1=[
    {name:"John",age:25},
    {name:"Jane",age:30},
    {name:"Ramu",age:20}
];
//calling by arrow function through forEach method
arr1.forEach((el)=>{
    console.log(el.name);
});

//map Method
let num=[1,2,3,4];
console.log(num);
let double=num.map(function(el){
    return el*2;
});
console.log(double);

//filter method
let num1=[1,2,3,4,5,6,7,8,9];
let even=num1.filter((el)=>(el%2==0));
console.log(num1);
console.log(even);

//Every method
//returns true if every element of array returns true else false
let num2=[1,2,3,4,5,6,7,8];
let check=num2.every((el)=>(el%2==0));
console.log(check);

let num3=[2,4,6,8];
let check1=num3.every((el)=>(el%2==0));
console.log(check1);

//Some method
//returns true if at least one element of array returns true else false
let num4=[1,2,3,4,5,6,7,8];
let check2=num4.some((el)=>(el%2==0));
console.log(check2);

//Reduce Method
//returns the single value which is the result of combining all elements in array
let num5=[1,2,3,4,5,6,7,8];
let sum=num5.reduce((acc,cur)=>(acc+cur));
console.log(sum);

//finding maximum element using reduce method
let num6=[1,2,3,4,5,6,7,8,12,45,85];
let max=num6.reduce((acc,cur)=>(acc>cur?acc:cur));
console.log(max);

//Spread Method
//used to expand array elements in function calls
let num7=[1,2,3,4,5,6,7,8];
let num8=[9,10,11,12,13,14,15,16];
let num9=[...num7,...num8];
console.log(num9);
console.log(Math.min(...num7));//Math.min function takes values as arguments not whole array
//...arr passes all the elements then Math.min function takes them as arguments
//then it calculates the minimum value
