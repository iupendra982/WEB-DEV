let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    console.log(inp.value);
    inp.value="";//to reset the input bar so that we don't have to remove the existing word

});

//this will not delete the newly added li elements as eventlistner only works for existing 
//elements

// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }

//now  we will use event bubbling concept to trigger the event delegation issue 
//occured in above case
//this below code will delete all the newly added elements
ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});