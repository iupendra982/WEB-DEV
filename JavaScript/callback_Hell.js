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

// function saveToDb(data,success,failure){
//     let interenetSpeed=Math.floor(Math.random()*10)+1;
//     if(interenetSpeed>4){
//         success();
//     }else{
//         failure();
//     }
// }

// saveToDb("Apna COllege",()=>{
//     console.log("Success : Data saved to DB");
//     saveToDb("hello world ",()=>{
//         console.log("Success2 : data2 saved ");
//     },()=>{
//         console.log("Failure2 : Weak Connection")
//     })
// },()=>{
//     console.log("Failure : Error saving data");
// });

function saveToDb(data){
    let interenetSpeed=Math.floor(Math.random()*10)+1;
    return new Promise((resolve,reject)=>{
        if(interenetSpeed>4){
            resolve("Success : data was saved");
        }else{
            reject("Failure : Weak Connection");
        }
    });
}

// let request=saveToDb("apna college");//req=promise object
// request.then(()=>{
//     console.log("Promise was resolved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("Promise was rejected");
//     console.log(request);
// });

//compact way of writing is 

saveToDb("Data1")
.then((result)=>{
    console.log("Data1 saved :Promise was resolved");
    console.log("Result of promise : ",result);
    return saveToDb("Data2");
})
.then((result)=>{
    console.log("Data2 saved :Promise was resolved");
    console.log("Result of promise : ",result);
    return saveToDb("Data3");
})
.then((result)=>{
    console.log("Data3 saved :Promise was resolved");
    console.log("Result of promise : ",result);
})
.catch((error)=>{
    console.log("Promise was rejected");
    console.log("Result of error : ",error);
});