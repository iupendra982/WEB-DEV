let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

div.addEventListener("click",function(){
    console.log("div was clicked");
});

ul.addEventListener("click",function(){
    event.stopPropagation();
    console.log("ul was clicked");
});

for(li of lis){
    li.addEventListener("click",function(){
        event.stopPropagation();
        console.log("li was clicked");
    });
}

//on clicking nested elements it triggers all the parent elements event listner 
//like if we click on li it will trigger 
//li was clicked
//ul was clicked
//div was clicked
//so this will create a problem if we want to perform different action on different elements
//to rectify it we will use a method stopPropogation()