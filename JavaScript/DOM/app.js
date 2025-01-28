//changing the images to difeerent from html file by selcting them by
//getElementByClassName("class_name");

// let smallImages=document.getElementsByClassName("oldImg");

// for(let i=0;i<smallImages.length;i++){
//     smallImages[i].src="assets/spiderman_img.png";
//     console.log(`value of image no. ${i} is changed.`);
// }

//selcting elements by query selctor
console.dir(document.querySelector("h1"));
//selecting all elments
console.dir(document.querySelectorAll("div a"));

//manipulating style using style property
let links=document.querySelectorAll(".box a");
for(link of links){
    link.style.color="red";
}

//creation and insertion of new element
let btn=document.createElement('button');//creating element
btn.textContent="Click me";
btn.style.background="green";

let box=document.querySelector('.box');
box.appendChild(btn);//appending element as a child