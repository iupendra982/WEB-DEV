async function greet() {
    throw "404 page not found";//to throw an error
    return "hello!";//returns a promise
}

greet()
.then((result)=>{
    console.log("Promise was resolved");
    console.log("Result was : " , result);
})
.catch((error)=>{
    console.log("Promise was rejected : ",error);
});

let demo= async ()=>{
    return 5;
};