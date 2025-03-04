// let form=document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();//here we are stopping the default action of the 
//     //form to open the url associated with submit button

//     // let user=document.querySelector("#user");
//     // let pass=document.querySelector("#pass");

//     //we can also do the same operation using form elements
//     let user=this.elements[0];
//     let pass=this.elements[1];
//     //now it will work same as the previous operation
//     console.log(user.value); 
//     console.log(pass.value); 

//     alert(`Hi ${user.value} your password is ${pass.value}`);
// });


//change event
let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
});

let user=document.querySelector("#user");
user.addEventListener("change",function(){
    console.log("input changed");
    console.log("final value = ",this.value);
});