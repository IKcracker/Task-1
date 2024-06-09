
console.log("checking the temperature \n\n");
// Generating a random temperature between -20 and 65 and rounded to two decimal places
var temp = Math.round((Math.random() * (65 - (-20)) + (-20)) * 100) / 100;
console.log("Temperatute:",temp,"°C");

// Checking temperature using if-else statements
if (temp < 0) {

    console.log(`using if-else statements:\nIt's freezing!`);

} else if (temp >= 0 && temp <= 15) {

    console.log(`using if-else statements:\nIt's cold.`);


} else if (temp > 15 && temp <= 25) {

    console.log(`using if-else statements:\nIt's mild.`);

} else if (temp > 25) {

    console.log(`using if-else statements:\nIt's warm.`);

}

// Checking temperature using switch statements
switch (temp != undefined) {

    case (temp > 25):

        console.log(`using switch statements:\nIt's warm.`);

        break;
    
    case (temp > 15 && temp <= 25):

        console.log(`using switch statements:\nIt's mild.`);

        break;
    
    case (temp >= 0 && temp <= 15):

        console.log(`using switch statements:\nIt's cold.`);

        break;
    
    case (temp < 0):

        console.log(`using switch statements:\nIt's freezing!`);

        break;
}
console.log("\n\n\n")
//Divisibility Check
console.log("Divisibility Check \n\n");
var num = Math.floor(Math.random() * 20)
console.log("Number:", num)

console.log("using if-else statements");
if (num % 2 == 0 && num % 3 == 0)
{
    console.log("Divisible by both.")
    }
else if (num % 2 == 0)
{
    console.log("Divisible by 2.")
}
else if (num % 3 == 0)
{
    console.log("Divisible by 3.")
}
else {
    console.log( "Not divisible by 2 or 3.")
}


console.log("using switch statements");
switch(num != undefined) {
  case (num % 2 === 0 && num % 3 === 0):
    console.log("Divisible by both.");
    break;
  case (num % 2 === 0):
    console.log("Divisible by 2.");
    break;
  case (num % 3 === 0):
    console.log("Divisible by 3.");
    break;
  default:
    console.log("Not divisible by 2 or 3.");
    break;
}

//for loops

console.log("\n\n\nFor Loops \n\n");

console.log("\n\n\nprinting 1 to 10:\n");

for (let i = 1; i <= 10; i++)
{
    console.log(i)

    }

console.log("\n\n Print all even numbers between 1 and 20:\n");

for (let i = 1; i <= 20; i++)
{
    i % 2? 0 : console.log(i) ;
        
    }

console.log("\n\nCalculate the sum of all numbers from 1 to 100 and print the result: \n\n");
let sum = 0;
for (let i = 1; i <= 100; i++)
{
    sum += i;   
}
console.log(sum);
console.log("\n\nPrint array values [1, 2, 3, 4, 5]: \n\n");
(() => {
    const numbers = [1, 2, 3, 4, 5];

    for (let number of numbers) {
        console.log(number);
    }
})();
    
console.log("\n\nGiven [3, 7, 2, 5, 10, 6],find and print the largest number: \n\n");

(() => {  
let track = 0;
const numbers = [3, 7, 2, 5, 10, 6]
    for (let i = 1; i < numbers.length; i++) {

        
        
            if (numbers[i-1] < numbers[i])
            {
                
                track = numbers[i]
                 numbers[i-1] = 0;        
            }
             
  
    }
  console.log(track);
})();

console.log("\n\nWhile loops: \n\n");

console.log("\n\n\nprinting 1 to 10:\n");
(() => {  
let i = 1;
while (i <= 10)
{
    console.log(i);
    i++
}
})();
console.log("\n\n Print all even numbers between 1 and 20:\n");
(() => {  
 let i = 1;   
while (i <= 20)
{
    i % 2? 0 : console.log(i) ;

    i++
    }
})();

console.log("\n\nCalculate the sum of all numbers from 1 to 100 and print the result: \n\n");
(() => { 
let sum = 0;
 let i = 1;   
while (i <= 100)
{
    sum += i; 

    i++
    }
    console.log(sum)
})();

console.log("\n\nPrint all multiples of 5 less than 50: \n\n");

(() => { 
 let i = 1;   
while (i < 50)
{
    if(i % 5 == 0)
    {
        console.log(i);
        
    }
    i++;
}
    
})();

//Exercise 5: Do While loops
console.log("\n\nDo While loops: \n\n");
console.log("\n\nPrint numbers from 1 to 10: \n\n");
(() => { 
 let i = 1; 

    do {
        
        console.log(i);
        i++;
    }
    while(i <= 10)
    
})();
        

console.log("\n\nCalculate the sum of all numbers from 1 to 100 and print the result: \n\n");
(() => { 
 let i = 1; 
    let sum = 0;
    do {
        
        sum += i;
        i++;
    }
    while(i <= 100)
    console.log(sum)
})();

console.log("\n\n Prompt the user to enter a number greater than 10: \n\n");
(() => { 
let number = 0;    
    do{
     
         number = prompt("enter a number greater than 10");
         console.log("The current number:" , number)
    }
    while (number <= 10)
})();


console.log("\n\nGuessing game: \n\n");
(() => { 
    let number = 0;
    let ran = 33; //i initialize run with number above 10 so that it allows th while loop to run since number = 0;   

    do {
       ran = Math.floor(Math.random()   * 10) + 1;//this line will reset the ran to a value between 1 and 10
       number = prompt("guess a number between 1 and 10");
       console.log("\nYour guess:", number);
       console.log("Generated number:", ran);
       number == ran ?alert("\nYEY YOU WON!!!!🥳🥳\n") : console.log("\nOps try again\n");
    }
    while (number != ran)
    
})();