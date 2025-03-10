// h1=document.querySelector("h1");

// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColorChange)nextColorChange();
//     },delay);
// };

// //nesting of callbacks known as callback Hell
// changeColor("red",1000,()=>{
//     changeColor("green",1000,()=>{
//         changeColor("blue",1000,()=>{
//             changeColor("orange",1000,()=>{
//                 changeColor("yellow",1000,()=>{
//                     changeColor("purple",1000);
//                 });
//             });            
//         });
//     });
// });

function saveToDb(data,success,failure){
    let interenetSpeed=Math.floor(Math.random()*10)+1;
    if(interenetSpeed>4){
        success();
    }else{
        failure();
    }
}

saveToDb("Apna COllege",()=>{
    console.log("Data saved : ");
},()=>{
    console.log("Error saving data");
});