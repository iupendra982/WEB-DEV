let form=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();//here we are stopping the default action of the 
    //form to open the url associated with submit button
    let user=document.querySelector("#user");
    let pass=document.querySelector("#pass");

    console.log(user.value); 
    console.log(pass.value); 

    alert(`Hi ${user.value} your password is ${pass.value}`);
});