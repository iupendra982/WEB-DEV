let btns=document.querySelectorAll("button");
console.dir(btns);
for(btn of btns){
//.onclick can not perform multiple functions on the same button
//that's why we use addEventListener
    // btn.onclick=sayHello;//here first of all we are not using function as sayHello();
    // //beacuse it will start calling that function from that point onwards
    // btn.onmouseenter=sayName;

    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);
}

function sayHello(){
    alert("Hello!");
}

function sayName(){
    alert("Apna College");
}

let p=document.querySelector("p");
let h1=document.querySelector("h1");
let h3=document.querySelector("h3");

// p.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// })

// h1.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// })

// h3.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// })

//instead of all this we can simply do

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor="blue";
}

p.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);
