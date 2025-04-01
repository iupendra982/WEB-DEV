// let jsonRes='{"fact":"A cat\u2019s hearing is better than a dog\u2019s. And a cat can hear high-frequency sounds up to two octaves higher than a human.","length":119}';

// let validRes=JSON.parse(jsonRes);
// console.log(validRes);
// console.log(validRes.fact);

// let student={
//     name:"John",
//     age:20,
// };
// console.log(JSON.stringify(student));//it is json data


//Requesting url
let url="https://catfact.ninja/fact";
// fetch(url)//it returns a promise
// .then((response)=>{
//     console.log(response);
//     return response.json();//getting the data
// })
// .then((data)=>{
//     console.log("Data1 : ",data.fact);
//     return fetch(url);
// })
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log("Data2 :",data.fact);
// })
// .catch((err)=>{
//     console.log("Error : ",err);
// })

//using async and await
//sometimes response can be delayed and result in promise will show undefined
//async and await will wait for the response and then execute the next line of code

// async function getCatFact(){
//     try{
//         let res=await fetch(url);
//         let data=await res.json();
//         console.log(data);
//     }catch(e){
//         console.log("Error : ",e);
//     }
// }

let btn=document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let fact=await getFacts();
    console.log(fact);
    let p=document.querySelector("#fact");
    p.innerText=fact;
})

//same code with axios
async function getFacts() {
    try{
        let res=await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log("Error : ",e);
        return "No fact found";
    }
}