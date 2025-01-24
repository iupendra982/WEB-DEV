let msg="love coding       ";
let msgarr=["hello","world","apna"];
console.log(msg);
let newMsg=msg.toUpperCase().trim();
console.log(newMsg);
console.log(msgarr.indexOf("world"));
console.log(msgarr.includes("hello"));

let primary=["red","yellow","blue"];
let secondary=["green","orange","black"];
let allcolors=primary.concat(secondary);//change doesnt reflect in original array
console.log(allcolors);
console.log(primary.reverse());
console.log(primary);//reverse change applied to original array

console.log(allcolors.slice(2));
console.log(allcolors.slice(2,5));
console.log(allcolors.slice(-2));//outputs last two elemnets of the array

console.log("Splicing");
let colors=["red","yellow","blue","orange","pink","white"];
console.log(colors);
console.log(colors.splice(4));//removes element from index 4
console.log(colors);
console.log(colors.splice(0,1));
console.log(colors);
console.log(colors.splice(0,1,"black","grey"));
console.log(colors);


//sorting
console.log(allcolors);
console.log(allcolors.sort());

//for of loop
console.log("for of loop");
let fruits=["mango","apple","banana","litchi","orange"];
for(fruit of fruits){
    console.log(fruit);
    }