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