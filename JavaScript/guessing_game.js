const max=prompt("Enter the maximum number");
console.log("Maximum number is : ",max);
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("Enter number to guess");
while(true){
    if(guess=="quit"){
        console.log("User quits.");
        break;
    }

    if(guess==random){
        console.log("You guessed it right ! , Random number was : ",random);
        break;
    }else if(guess<random){
        guess=prompt("Hint : Your guess is too small , Please try again.");
    }else{
        guess=prompt("Hint : Your guess is too high , Please try again.");
    }
}