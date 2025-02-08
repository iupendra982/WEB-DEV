let form=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();//here we are stopping the default action of the 
    //form to open the url associated with submit button
    alert("Form submitted");

    let inp=document.querySelector("input");
    console.dir(inp);
    console.log(inp.value);
});