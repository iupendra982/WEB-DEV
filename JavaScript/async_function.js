// async function greet() {
//     throw "404 page not found";//to throw an error
//     return "hello!";//returns a promise
// }

// greet()
// .then((result)=>{
//     console.log("Promise was resolved");
//     console.log("Result was : " , result);
// })
// .catch((error)=>{
//     console.log("Promise was rejected : ",error);
// });

// let demo= async ()=>{
//     return 5;
// };


//what it does is until one promise is not fullfilled new one is not proceeded
function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}

async function demo(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}

//we can imply this to our color problem
h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("Promise rejected");
            }
            h1.style.color=color;
            console.log(`Color changed to ${color}`);
            resolve("color changed!");
        },delay);
    });
}

async function changeColorDemo(){
    try{
        await changeColor("red",1000);
        await changeColor("orange",1000);
        await changeColor("blue",1000);
        await changeColor("green",1000);
        await changeColor("yellow",1000);
    }catch(err){
        console.log("Error caught");
        console.log(err);
    }

    let a=5;
    console.log(a);
    console.log("New number = ",a+3);
}